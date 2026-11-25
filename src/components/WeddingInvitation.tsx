"use client";

import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { weddingConfig } from "@/config/wedding";
import {
  GopuramSilhouette,
  JasmineGarlandLine,
  KolamCorner,
  KuthuvilakkuIcon,
  LotusAccent,
  MaavilaiThoranam,
  MandapamPillar,
  MayilFeatherAccent,
  MudichuMotif,
  NadaswaramThavilIcon,
  PulliKolamDivider,
  TempleBorder,
  ThaaliIcon,
  ThiruvatchiArch,
  VaazhaiMaram,
} from "./TamilMotifs";
import { Countdown } from "./Countdown";
import { ShareSection } from "./ShareSection";
import { OptionalSections } from "./OptionalSections";
import { RevealOnScroll } from "./RevealOnScroll";
import { InvitationCover } from "./InvitationCover";

function GuestGreeting() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to")?.trim();

  if (!guestName) return null;

  return (
    <div className="mt-4 mb-2 px-4 py-2 rounded-full border border-[#B8860B]/45 bg-[#FFF8EC]/90 inline-block max-w-full">
      <p
        lang="ta"
        className="text-base font-medium text-[#8B1A1A] break-words"
      >
        {weddingConfig.hero.personalInvitePrefixTa} {guestName}
      </p>
      <p lang="en" className="text-xs text-[#3B2A20]/80 break-words">
        {weddingConfig.hero.personalInvitePrefixEn} {guestName}
      </p>
    </div>
  );
}

function formatTamilMonthDisplay(month: string, day: string): string {
  const trimmedDay = day.trim();
  return trimmedDay ? `${month} ${trimmedDay}` : month;
}

export function WeddingInvitation() {
  const {
    couple,
    cover,
    hero,
    invitation,
    eventsSection,
    events,
    venuesSection,
    venues,
    footer,
  } = weddingConfig;

  const [isOpened, setIsOpened] = useState(!cover.enabled);

  if (!isOpened) {
    return (
      <InvitationCover
        onOpen={() => {
          setIsOpened(true);
          window.scrollTo({ top: 0, behavior: "auto" });
        }}
      />
    );
  }

  return (
    <div className="w-full min-h-[100dvh] bg-[#FFF8EC] text-[#3B2A20]">
      <main className="w-full max-w-[430px] mx-auto bg-[#FFF8EC] relative overflow-x-hidden">
        {/* A. HERO SECTION */}
        <header className="relative text-center pb-2">
          <TempleBorder />
          <MaavilaiThoranam className="-mt-0.5" />

          {/* Slender Mandapam Pillars framing the Hero edges */}
          <MandapamPillar className="w-[18px] h-[calc(100%-56px)] absolute top-14 left-0 opacity-90" />
          <MandapamPillar
            className="w-[18px] h-[calc(100%-56px)] absolute top-14 right-0 opacity-90"
            flipX
          />

          {/* Subtle corner kolam accents */}
          <KolamCorner className="absolute top-[74px] left-3.5 opacity-65" />
          <KolamCorner
            className="absolute top-[74px] right-3.5 opacity-65"
            flipX
          />

          {/* Subtle banana trees peeking inward from behind pillars */}
          <VaazhaiMaram className="w-14 h-36 absolute bottom-12 left-2 opacity-85" />
          <VaazhaiMaram
            className="w-14 h-36 absolute bottom-12 right-2 opacity-85"
            flipX
          />

          <div className="relative z-10 px-8 pt-2">
            {/* Pillaiyar / Murugan invocation */}
            <p
              lang="ta"
              className="font-tamil-serif text-xl font-semibold text-[#8B1A1A]"
            >
              {hero.pillaiyarMark}
            </p>
            <p
              lang="ta"
              className="text-sm font-medium text-[#3B2A20]/85 tracking-wide mt-0.5"
            >
              {hero.invocationTa}
            </p>

            {/* Title with subtle kuthuvilakku accent */}
            <div className="mt-4 flex flex-col items-center">
              <KuthuvilakkuIcon className="w-7 h-9 mb-1.5" />
              <h1
                lang="ta"
                className="font-tamil-serif text-2xl font-bold text-[#8B1A1A] tracking-wide"
              >
                {hero.titleTa}
              </h1>
              <p
                lang="en"
                className="text-sm uppercase tracking-[0.18em] text-[#3B2A20]/80 mt-0.5"
              >
                {hero.titleEn}
              </p>
            </div>

            {/* Optional ?to=Name personalization */}
            <Suspense fallback={null}>
              <GuestGreeting />
            </Suspense>

            {/* Temple Arch + Couple names with Thaali on turmeric thread between them */}
            <div className="mt-4 mb-5">
              <ThiruvatchiArch className="-mb-2" />
              <p
                lang="ta"
                className="font-tamil-serif text-[28px] leading-snug font-bold text-[#8B1A1A]"
              >
                {couple.groomTa}
              </p>

              <ThaaliIcon className="w-28 h-10 my-1" />

              <p
                lang="ta"
                className="font-tamil-serif text-[28px] leading-snug font-bold text-[#8B1A1A]"
              >
                {couple.brideTa}
              </p>

              <p
                lang="en"
                className="mt-2.5 text-lg font-medium tracking-wide text-[#3B2A20]"
              >
                {couple.combinedEn}
              </p>
            </div>

            {/* Date & venue summary */}
            <div className="inline-block px-5 py-2.5 border-y border-[#B8860B]/40">
              <p className="text-base font-medium text-[#8B1A1A]">
                {hero.dateLine}
              </p>
              <p lang="ta" className="text-sm text-[#3B2A20]/85 mt-0.5">
                {formatTamilMonthDisplay(hero.tamilMonth, hero.tamilDay)}
              </p>
              <p lang="en" className="text-sm text-[#3B2A20]/80 mt-0.5">
                {hero.venueLine}
              </p>
            </div>

            {/* Quick-action jump pills */}
            <div className="mt-4 flex items-center justify-center gap-2.5">
              <a
                href="#venues"
                className="min-h-[48px] px-4 py-2 rounded-full border border-[#B8860B]/55 bg-[#FFF8EC] text-[#8B1A1A] text-sm font-medium inline-flex flex-col items-center justify-center leading-tight active:bg-[#8B1A1A]/5"
              >
                <span lang="ta">{hero.jumpVenuesTa}</span>
                <span lang="en" className="text-[11px] text-[#3B2A20]/75">
                  {hero.jumpVenuesEn}
                </span>
              </a>
              <a
                href="#share"
                className="min-h-[48px] px-4 py-2 rounded-full border border-[#4E6B3A]/50 bg-[#4E6B3A]/[0.05] text-[#4E6B3A] text-sm font-medium inline-flex flex-col items-center justify-center leading-tight active:bg-[#4E6B3A]/10"
              >
                <span lang="ta">{hero.jumpShareTa}</span>
                <span lang="en" className="text-[11px] text-[#3B2A20]/75">
                  {hero.jumpShareEn}
                </span>
              </a>
            </div>
          </div>

          {/* Gopuram line-art silhouette at hero bottom */}
          <div className="mt-5 px-6">
            <GopuramSilhouette />
          </div>
        </header>

        {/* B. INVITATION LINE */}
        <RevealOnScroll>
          <section
            aria-label="Invitation Message"
            className="px-6 pt-5 pb-2 text-center"
          >
            <MudichuMotif className="mb-3" />
            <p
              lang="ta"
              className="font-tamil-serif text-lg font-semibold text-[#8B1A1A]"
            >
              {invitation.leadTa}
            </p>
            <p
              lang="ta"
              className="text-base font-medium text-[#4E6B3A] mt-1.5"
            >
              {invitation.blessingTa}
            </p>
            <p
              lang="en"
              className="text-base text-[#3B2A20] leading-[1.7] mt-3 max-w-[360px] mx-auto"
            >
              {invitation.bodyEn}
            </p>
          </section>
          <PulliKolamDivider />
        </RevealOnScroll>

        {/* C. EVENTS (VERTICAL TIMELINE, CHRONOLOGICAL) */}
        <RevealOnScroll>
          <section aria-labelledby="events-heading" className="px-5 py-4">
            <div className="flex items-center justify-center gap-2.5 mb-1">
              <NadaswaramThavilIcon />
              <div className="text-center">
                <h2
                  id="events-heading"
                  lang="ta"
                  className="font-tamil-serif text-xl font-semibold text-[#8B1A1A]"
                >
                  {eventsSection.headingTa}
                </h2>
              </div>
            </div>
            <p lang="en" className="text-sm text-[#3B2A20]/75 text-center">
              {eventsSection.headingEn}
            </p>
            <p
              lang="en"
              className="text-xs text-[#3B2A20]/65 text-center mt-0.5 mb-6"
            >
              {eventsSection.timezoneNote}
            </p>

            {/* Gold vertical dot-and-line timeline */}
            <div className="relative pl-6">
              <div
                aria-hidden="true"
                className="absolute left-[7px] top-4 bottom-4 w-px bg-[#B8860B]/55"
              />

              <ol className="space-y-5">
                {events.map((event) => {
                  const tamilMonthLabel = formatTamilMonthDisplay(
                    event.tamilMonth,
                    event.tamilDay
                  );
                  return (
                    <li key={event.id} className="relative">
                      {/* Timeline gold dot */}
                      <span
                        aria-hidden="true"
                        className="absolute -left-[22px] top-6 w-3.5 h-3.5 rounded-full bg-[#F2B705] border-2 border-[#B8860B]"
                      />

                      {/* Soft banana-leaf-shaped card with thin green vein line */}
                      <article className="relative overflow-hidden rounded-tl-[26px] rounded-br-[26px] rounded-tr-lg rounded-bl-lg border border-[#4E6B3A]/45 bg-[#4E6B3A]/[0.045] px-4 py-4">
                        {/* Subtle banana-leaf midrib vein line */}
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 320 20"
                          fill="none"
                          className="w-full h-3 mb-1.5 opacity-60"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M2 10 Q160 7 318 10"
                            stroke="#4E6B3A"
                            strokeWidth="1.1"
                          />
                          <path
                            d="M48 9.5 L62 4 M110 8.8 L124 3.5 M175 8.8 L189 3.5 M240 9.2 L254 4"
                            stroke="#4E6B3A"
                            strokeWidth="0.6"
                            strokeOpacity="0.6"
                          />
                        </svg>

                        <h3
                          lang="ta"
                          className="font-tamil-serif text-lg font-bold text-[#8B1A1A]"
                        >
                          {event.titleTa}
                        </h3>
                        <p
                          lang="en"
                          className="text-sm font-medium text-[#4E6B3A] mb-2.5"
                        >
                          {event.titleEn}
                        </p>

                        <div className="space-y-1.5 text-base text-[#3B2A20]">
                          <div>
                            <p lang="ta" className="font-medium">
                              {event.dayDateTa}
                            </p>
                            <p lang="ta" className="text-sm text-[#3B2A20]/80">
                              {tamilMonthLabel}
                            </p>
                            <p lang="en" className="text-sm text-[#3B2A20]/75">
                              {event.dayDateEn}
                            </p>
                          </div>

                          <div className="pt-1">
                            <p
                              lang="ta"
                              className="font-medium text-[#8B1A1A]"
                            >
                              {event.timeTa}
                            </p>
                            <p lang="en" className="text-sm text-[#3B2A20]/80">
                              {event.timeEn}
                            </p>
                          </div>

                          <div className="pt-1 border-t border-[#4E6B3A]/20">
                            <p lang="ta" className="text-base">
                              {event.venueTa}
                            </p>
                            <p lang="en" className="text-sm text-[#3B2A20]/75">
                              {event.venueEn}
                            </p>
                          </div>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>
        </RevealOnScroll>

        {/* D. COUNTDOWN */}
        <RevealOnScroll>
          <PulliKolamDivider />
          <Countdown />
        </RevealOnScroll>

        {/* E. VENUE */}
        <RevealOnScroll>
          <JasmineGarlandLine className="my-3" />
          <section
            id="venues"
            aria-labelledby="venues-heading"
            className="px-5 py-5 scroll-mt-4"
          >
            <div className="text-center mb-5">
              <h2
                id="venues-heading"
                lang="ta"
                className="font-tamil-serif text-xl font-semibold text-[#8B1A1A]"
              >
                {venuesSection.headingTa}
              </h2>
              <p lang="en" className="text-sm text-[#3B2A20]/75 mt-0.5">
                {venuesSection.headingEn}
              </p>
            </div>

            <div className="space-y-4">
              {venues.map((venue) => (
                <article
                  key={venue.id}
                  className="zari-card p-5 rounded-2xl bg-[#FFF8EC]"
                >
                  <h3 className="font-tamil-serif text-base font-semibold text-[#8B1A1A]">
                    <span lang="ta">{venue.headingTa}</span>{" "}
                    <span
                      lang="en"
                      className="text-sm font-normal text-[#3B2A20]/80"
                    >
                      / {venue.headingEn}
                    </span>
                  </h3>

                  <p lang="ta" className="mt-2.5 text-base text-[#3B2A20]">
                    {venue.nameAddressTa}
                  </p>
                  <p lang="en" className="mt-1 text-sm text-[#3B2A20]/80">
                    {venue.nameAddressEn}
                  </p>

                  <a
                    href={venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full min-h-[48px] px-4 py-3 rounded-xl border border-[#8B1A1A] text-[#8B1A1A] font-medium text-base flex items-center justify-center gap-2 active:bg-[#8B1A1A]/5 transition-colors"
                  >
                    <span lang="ta">{venue.buttonTa}</span>
                    <span aria-hidden="true">/</span>
                    <span lang="en" className="text-sm">
                      {venue.buttonEn}
                    </span>
                  </a>
                </article>
              ))}
            </div>
          </section>
        </RevealOnScroll>

        {/* F. SHARE */}
        <RevealOnScroll>
          <PulliKolamDivider />
          <ShareSection />
        </RevealOnScroll>

        {/* G. OPTIONAL SECTIONS (HIDDEN UNLESS CONFIG POPULATED) */}
        <OptionalSections />

        {/* H. FOOTER */}
        <RevealOnScroll>
          <PulliKolamDivider />
          <footer className="text-center pt-2 pb-1">
            <div className="px-5 pb-4">
              <MayilFeatherAccent className="mb-2" />
              <p
                lang="ta"
                className="font-tamil-serif text-xl font-semibold text-[#8B1A1A]"
              >
                {footer.welcomeTa}
              </p>
              <p lang="en" className="text-sm text-[#3B2A20]/80 mt-0.5">
                {footer.welcomeEn}
              </p>
              <LotusAccent className="mt-3" />
              <p
                lang="en"
                className="text-xs text-[#3B2A20]/60 mt-2 tracking-wide"
              >
                {footer.credit}
              </p>
            </div>
            <TempleBorder flip />
          </footer>
        </RevealOnScroll>
      </main>
    </div>
  );
}
