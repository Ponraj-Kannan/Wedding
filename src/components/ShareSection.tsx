"use client";

import React, { useState } from "react";
import { weddingConfig, WeddingEvent } from "@/config/wedding";

/**
 * Formats an ISO timestamp with +05:30 offset into YYYYMMDDTHHMMSS local IST string.
 */
function toIcsIstLocal(iso: string): string {
  // Expected format: YYYY-MM-DDTHH:MM:SS+05:30
  const datePart = iso.slice(0, 10).replace(/-/g, "");
  const timePart = iso.slice(11, 19).replace(/:/g, "");
  return `${datePart}T${timePart}`;
}

function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function buildVTimezone(): string[] {
  return [
    "BEGIN:VTIMEZONE",
    "TZID:Asia/Kolkata",
    "X-LIC-LOCATION:Asia/Kolkata",
    "BEGIN:STANDARD",
    "TZOFFSETFROM:+0530",
    "TZOFFSETTO:+0530",
    "TZNAME:IST",
    "DTSTART:19700101T000000",
    "END:STANDARD",
    "END:VTIMEZONE",
  ];
}

function buildIcsContent(events: readonly WeddingEvent[]): string {
  const dtStamp = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");

  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Vignesh & Kumutha Wedding//Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    ...buildVTimezone(),
  ];

  for (const event of events) {
    lines.push(
      "BEGIN:VEVENT",
      `UID:${event.id}-vignesh-kumutha-2026@wedding`,
      `DTSTAMP:${dtStamp}`,
      `DTSTART;TZID=Asia/Kolkata:${toIcsIstLocal(event.startIso)}`,
      `DTEND;TZID=Asia/Kolkata:${toIcsIstLocal(event.icsEndIso)}`,
      `SUMMARY:${escapeIcsText(`${weddingConfig.couple.combinedEn} — ${event.titleEn}`)}`,
      `LOCATION:${escapeIcsText(event.icsLocation)}`,
      `DESCRIPTION:${escapeIcsText(event.icsDescription)}`,
      "END:VEVENT"
    );
  }

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

function downloadIcsFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function ShareSection() {
  const { share, events } = weddingConfig;
  const [copied, setCopied] = useState(false);
  const [showCalendarOptions, setShowCalendarOptions] = useState(false);

  const handleWhatsAppShare = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = encodeURIComponent(`${share.whatsappShareIntro} ${url}`);
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleCopyLink = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
    }
    setTimeout(() => setCopied(false), 2600);
  };

  return (
    <section aria-labelledby="share-heading" className="px-5 py-6 text-center">
      <h2
        id="share-heading"
        lang="ta"
        className="font-tamil-serif text-xl font-semibold text-[#8B1A1A]"
      >
        {share.headingTa}
      </h2>
      <p lang="en" className="text-sm text-[#3B2A20]/75 mt-0.5 mb-5">
        {share.headingEn}
      </p>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={handleWhatsAppShare}
          className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#4E6B3A] text-[#FFF8EC] font-medium text-base flex items-center justify-center gap-2 cursor-pointer active:opacity-90"
        >
          <span lang="ta">{share.whatsappButtonTa}</span>
          <span aria-hidden="true">·</span>
          <span lang="en" className="text-sm">
            {share.whatsappButtonEn}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setShowCalendarOptions((prev) => !prev)}
          aria-expanded={showCalendarOptions}
          className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#8B1A1A] bg-[#FFF8EC] text-[#8B1A1A] font-medium text-base flex items-center justify-center gap-2 cursor-pointer active:bg-[#8B1A1A]/5"
        >
          <span lang="ta">{share.calendarButtonTa}</span>
          <span aria-hidden="true">·</span>
          <span lang="en" className="text-sm">
            {share.calendarButtonEn}
          </span>
        </button>

        {showCalendarOptions && (
          <div className="p-3 rounded-xl border border-[#B8860B]/40 bg-[#FFF8EC] flex flex-col gap-2.5 text-left">
            {events.map((ev) => (
              <button
                key={ev.id}
                type="button"
                onClick={() =>
                  downloadIcsFile(
                    `${ev.id}-vignesh-kumutha.ics`,
                    buildIcsContent([ev])
                  )
                }
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-lg border border-[#B8860B]/45 text-[#3B2A20] hover:border-[#8B1A1A] flex items-center justify-between gap-2 text-sm cursor-pointer"
              >
                <span>
                  <span lang="ta" className="font-medium text-[#8B1A1A]">
                    {ev.titleTa}
                  </span>{" "}
                  <span lang="en" className="text-[#3B2A20]/80">
                    ({ev.dayDateEn.split(",")[0]}, {ev.id === "nichayathartham" ? "12 Dec" : "13 Dec"})
                  </span>
                </span>
                <span className="text-xs font-medium text-[#8B1A1A] shrink-0">
                  .ics ↓
                </span>
              </button>
            ))}
            <button
              type="button"
              onClick={() =>
                downloadIcsFile(
                  "vignesh-kumutha-wedding-events.ics",
                  buildIcsContent(events)
                )
              }
              className="w-full min-h-[48px] px-3.5 py-2.5 rounded-lg bg-[#8B1A1A]/8 text-[#8B1A1A] font-medium text-sm text-center cursor-pointer"
            >
              Download Both Events (.ics · IST)
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={handleCopyLink}
          className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#B8860B]/60 bg-[#FFF8EC] text-[#3B2A20] font-medium text-base flex items-center justify-center gap-2 cursor-pointer active:bg-[#B8860B]/10"
        >
          {copied ? (
            <span className="text-[#4E6B3A]">
              <span lang="ta">{share.copiedTa}</span>{" "}
              <span lang="en" className="text-sm">
                ({share.copiedEn})
              </span>
            </span>
          ) : (
            <>
              <span lang="ta">{share.copyButtonTa}</span>
              <span aria-hidden="true">·</span>
              <span lang="en" className="text-sm">
                {share.copyButtonEn}
              </span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
