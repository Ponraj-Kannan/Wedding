"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { weddingConfig } from "@/config/wedding";
import {
  CoupleMonogram,
  LotusAccent,
  MaavilaiThoranam,
  MandapamPillar,
  TempleBorder,
  VaazhaiMaram,
} from "./TamilMotifs";

function CoverGuestGreeting() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to")?.trim();
  if (!guestName) return null;

  return (
    <div className="mt-4 px-4 py-1.5 rounded-full border border-[#B8860B]/45 bg-[#FFF8EC]/95 inline-block max-w-full">
      <p lang="ta" className="text-sm font-medium text-[#8B1A1A] break-words">
        {weddingConfig.hero.personalInvitePrefixTa} {guestName}
      </p>
      <p lang="en" className="text-xs text-[#3B2A20]/75 break-words">
        {weddingConfig.hero.personalInvitePrefixEn} {guestName}
      </p>
    </div>
  );
}

interface InvitationCoverProps {
  onOpen: () => void;
}

export function InvitationCover({ onOpen }: InvitationCoverProps) {
  const { couple, cover, hero } = weddingConfig;
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      onOpen();
      return;
    }
    setClosing(true);
    setTimeout(onOpen, 320);
  };

  return (
    <div
      className={`w-full min-h-[100dvh] bg-[#FFF8EC] text-[#3B2A20] cover-fade ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-[430px] min-h-[100dvh] mx-auto bg-[#FFF8EC] relative overflow-hidden flex flex-col justify-between">
        {/* Top Temple Border & Jasmine-Lotus-Mango Thoranam */}
        <div className="relative z-20">
          <TempleBorder />
          <MaavilaiThoranam className="-mt-0.5" />
        </div>

        {/* Left & Right Mandapam Pillars + Peeking Banana Leaves */}
        <MandapamPillar className="w-5 h-[calc(100%-64px)] absolute top-8 left-0 z-10" />
        <MandapamPillar
          className="w-5 h-[calc(100%-64px)] absolute top-8 right-0 z-10"
          flipX
        />
        <VaazhaiMaram className="w-14 h-36 absolute bottom-20 left-2.5 opacity-85" />
        <VaazhaiMaram
          className="w-14 h-36 absolute bottom-20 right-2.5 opacity-85"
          flipX
        />

        {/* Center Invitation Seal */}
        <div className="relative z-20 px-9 py-6 text-center flex flex-col items-center">
          <p
            lang="ta"
            className="font-tamil-serif text-xl font-semibold text-[#8B1A1A]"
          >
            {hero.pillaiyarMark}
          </p>
          <p lang="ta" className="text-sm text-[#3B2A20]/85 mt-0.5">
            {hero.invocationTa}
          </p>

          <CoupleMonogram
            left={cover.monogramLeft}
            right={cover.monogramRight}
            className="my-5"
          />

          <p
            lang="ta"
            className="font-tamil-serif text-xl font-bold text-[#8B1A1A] leading-snug"
          >
            {couple.combinedTa}
          </p>
          <p lang="en" className="text-base font-medium text-[#3B2A20] mt-1">
            {couple.combinedEn}
          </p>

          <p className="text-sm text-[#8B1A1A]/90 mt-3">{hero.dateLine}</p>
          <p lang="en" className="text-xs text-[#3B2A20]/75 mt-0.5">
            {hero.venueLine}
          </p>

          <Suspense fallback={null}>
            <CoverGuestGreeting />
          </Suspense>

          <button
            type="button"
            onClick={handleOpen}
            className="mt-7 w-full max-w-[270px] min-h-[52px] px-5 py-3 rounded-full bg-[#8B1A1A] text-[#FFF8EC] font-medium text-base flex flex-col items-center justify-center leading-tight cursor-pointer active:opacity-90 transition-opacity"
          >
            <span lang="ta">{cover.openButtonTa}</span>
            <span lang="en" className="text-xs text-[#FFF8EC]/85 mt-0.5">
              {cover.openButtonEn}
            </span>
          </button>
        </div>

        {/* Bottom Lotus Accent & Temple Border */}
        <div className="relative z-20">
          <LotusAccent className="mb-1" />
          <TempleBorder flip />
        </div>
      </div>
    </div>
  );
}
