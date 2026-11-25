"use client";

import React, { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { weddingConfig } from "@/config/wedding";
import { PulliKolamDivider, TempleBorder } from "./TamilMotifs";

/**
 * Checks whether the current environment is a desktop or laptop.
 * - Matches media query "(hover: hover) and (pointer: fine)" combined with viewport > 768px
 * - OR detects a desktop user agent (while allowing phones in landscape and tablets with touch).
 */
function detectDesktopDevice(): boolean {
  if (typeof window === "undefined") return false;

  const hasFineHoverPointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;
  const isWideViewport = window.innerWidth > 768;

  if (hasFineHoverPointer && isWideViewport) {
    return true;
  }

  const ua = navigator.userAgent || "";
  const isMobileOrTabletUa =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet|Silk|Kindle/i.test(
      ua
    );

  // iPadOS Safari sometimes reports "Macintosh" in UA; distinguish via touch points.
  const isTouchMac =
    /Macintosh/i.test(ua) && (navigator.maxTouchPoints ?? 0) > 1;

  if (!isMobileOrTabletUa && !isTouchMac) {
    const isDesktopOsUa =
      /Windows NT|Macintosh|X11|CrOS|Linux x86_64|Win64|WOW64/i.test(ua);
    if (isDesktopOsUa) {
      return true;
    }
  }

  return false;
}

function DesktopGateView({ url }: { url: string }) {
  return (
    <main className="min-h-[100dvh] w-full bg-[#FFF8EC] text-[#3B2A20] flex flex-col justify-between items-center text-center px-6">
      <div className="w-full max-w-md pt-2">
        <TempleBorder />
      </div>

      <section className="max-w-md w-full py-10 flex flex-col items-center">
        <p className="font-tamil-serif text-xl text-[#8B1A1A] mb-1">
          {weddingConfig.hero.pillaiyarMark}
        </p>
        <p className="text-sm text-[#8B1A1A]/80 tracking-wide mb-4">
          {weddingConfig.couple.combinedTa}
        </p>

        <PulliKolamDivider className="w-full my-4" />

        <h1
          lang="ta"
          className="font-tamil-serif text-2xl font-semibold text-[#8B1A1A] leading-relaxed mb-2"
        >
          {weddingConfig.desktopGate.messageTa}
        </h1>
        <p lang="en" className="text-base text-[#3B2A20] mb-8">
          {weddingConfig.desktopGate.messageEn}
        </p>

        <div className="p-4 bg-[#FFF8EC] border border-[#B8860B]/45 rounded-2xl inline-flex flex-col items-center">
          {url ? (
            <QRCodeSVG
              value={url}
              size={176}
              bgColor="#FFF8EC"
              fgColor="#3B2A20"
              level="M"
              includeMargin={false}
              aria-label="QR code for this wedding invitation"
            />
          ) : (
            <div className="w-[176px] h-[176px] flex items-center justify-center text-sm text-[#3B2A20]/60">
              QR
            </div>
          )}
        </div>

        <p lang="ta" className="mt-5 text-sm text-[#3B2A20]/85">
          {weddingConfig.desktopGate.scanHintTa}
        </p>
        <p lang="en" className="text-xs text-[#3B2A20]/70 mt-0.5">
          {weddingConfig.desktopGate.scanHintEn}
        </p>

        <PulliKolamDivider className="w-full my-4" />
      </section>

      <div className="w-full max-w-md pb-2">
        <TempleBorder flip />
      </div>
    </main>
  );
}

export function MobileGate({ children }: { children: React.ReactNode }) {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    const updateDeviceState = () => {
      setIsDesktop(detectDesktopDevice());
      setCurrentUrl(window.location.href);
    };

    updateDeviceState();

    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    mql.addEventListener("change", updateDeviceState);
    window.addEventListener("resize", updateDeviceState);

    return () => {
      mql.removeEventListener("change", updateDeviceState);
      window.removeEventListener("resize", updateDeviceState);
    };
  }, []);

  if (isDesktop) {
    return <DesktopGateView url={currentUrl} />;
  }

  return (
    <>
      {/* CSS fallback prevents flash of invitation on desktop before hydration */}
      <div className="desktop-gate-fallback min-h-[100dvh] w-full flex-col justify-between items-center bg-[#FFF8EC]">
        <DesktopGateView url={currentUrl} />
      </div>
      <div className="invitation-shell">{children}</div>
    </>
  );
}
