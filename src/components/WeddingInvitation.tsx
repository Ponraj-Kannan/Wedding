"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { weddingConfig } from "@/config/wedding";
import {
  MayilFeatherAccent,
  NadaswaramThavilIcon,
  PulliKolamDivider,
  ThaaliIcon,
} from "./TamilMotifs";
import { Countdown } from "./Countdown";
import { ShareSection } from "./ShareSection";
import { OptionalSections } from "./OptionalSections";
import { RevealOnScroll } from "./RevealOnScroll";

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

function RedTempleBorderStrip({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`w-full h-6 bg-repeat-x bg-center select-none ${
        flip ? "rotate-180" : ""
      }`}
      style={{
        backgroundImage: "url('/images/temple-border-red.webp')",
        backgroundSize: "auto 24px",
      }}
    />
  );
}

function GoldFlowerDivider() {
  return (
    <div
      className="flex items-center justify-center gap-3 my-6 px-6 select-none"
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-[#B8860B]/30" />
      <Image
        src="/images/gold-flower-divider.webp"
        alt=""
        width={640}
        height={118}
        loading="lazy"
        className="w-40 h-auto block pointer-events-none"
      />
      <span className="h-px flex-1 bg-[#B8860B]/30" />
    </div>
  );
}

export function WeddingInvitation() {
  const {
    couple,
    hero,
    invitation,
    eventsSection,
    events,
    venuesSection,
    venues,
    footer,
  } = weddingConfig;

  return (
    <div className="w-full min-h-[100dvh] bg-[#FFF8EC] text-[#3B2A20]">
      <main className="w-full max-w-[430px] mx-auto bg-[#FFF8EC] relative overflow-x-hidden">
        {/* A. HERO SECTION */}
        <header className="relative text-center pb-2">
          <RedTempleBorderStrip />
          <Image
            src="/images/mango-marigold-thoranam.webp"
            alt=""
            width={860}
            height={204}
            priority
            aria-hidden="true"
            className="w-full h-auto block select-none pointer-events-none"
          />

          {/* Delicate pink lotus vines framing upper hero sides */}
          <Image
            src="/images/lotus-vine.webp"
            alt=""
            width={73}
            height={680}
            priority
            aria-hidden="true"
            className="w-7 h-auto absolute top-[122px] left-0.5 opacity-85 select-none pointer-events-none"
          />
          <Image
            src="/images/lotus-vine.webp"
            alt=""
            width={73}
            height={680}
            priority
            aria-hidden="true"
            className="w-7 h-auto absolute top-[122px] right-0.5 -scale-x-100 opacity-85 select-none pointer-events-none"
          />

          {/* Banana trees (Vaazhai Maram) framing the temple gopuram at lower hero edges */}
          <Image
            src="/images/banana-tree.webp"
            alt=""
            width={311}
            height={440}
            priority
            aria-hidden="true"
            className="w-[76px] h-auto absolute bottom-2 left-1 select-none pointer-events-none opacity-95"
          />
          <Image
            src="/images/banana-tree.webp"
            alt=""
            width={311}
            height={440}
            priority
            aria-hidden="true"
            className="w-[76px] h-auto absolute bottom-2 right-1 -scale-x-100 select-none pointer-events-none opacity-95"
          />

          <div className="relative z-10 px-9 pt-2">
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

            {/* Title with auspicious oil lamp artwork */}
            <div className="mt-4 flex flex-col items-center">
              <Image
                src="/images/oil-lamp.webp"
                alt="Auspicious oil lamp with flame"
                width={440}
                height={440}
                priority
                className="w-20 h-20 object-contain mb-1.5 select-none pointer-events-none"
              />
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

            {/* Couple names with Thaali on turmeric thread between them */}
            <div className="mt-5 mb-5">
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
          </div>

          {/* Temple gopuram illustration at hero bottom */}
          <div className="mt-5 px-4">
            <Image
              src="/images/temple-gopuram.webp"
              alt=""
              width={520}
              height={680}
              priority
              aria-hidden="true"
              className="w-[180px] h-auto mx-auto block select-none pointer-events-none opacity-90"
            />
          </div>
        </header>

        {/* B. INVITATION LINE */}
        <RevealOnScroll>
          <section
            aria-label="Invitation Message"
            className="px-6 pt-5 pb-2 text-center"
          >
            <Image
              src="/images/bride-jasmine.webp"
              alt="Tamil bride adorning jasmine flowers"
              width={277}
              height={420}
              loading="lazy"
              className="w-28 h-auto mx-auto mb-4 select-none pointer-events-none"
            />
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
          <GoldFlowerDivider />
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

                      {/* Soft banana-leaf-shaped card with subtle woven palm-leaf texture and green vein */}
                      <article className="relative overflow-hidden rounded-tl-[26px] rounded-br-[26px] rounded-tr-lg rounded-bl-lg border border-[#4E6B3A]/45 bg-[#FFF8EC] px-4 py-4">
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-cover bg-center opacity-[0.06] pointer-events-none"
                          style={{
                            backgroundImage: "url('/images/woven-leaf-bg.webp')",
                          }}
                        />

                        <div className="relative z-10">
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
          <div
            aria-hidden="true"
            className="w-48 h-4 mx-auto my-4 bg-repeat-x bg-center opacity-85 select-none"
            style={{
              backgroundImage: "url('/images/terracotta-border.webp')",
              backgroundSize: "auto 16px",
            }}
          />
          <section aria-labelledby="venues-heading" className="px-5 py-5">
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
                  className="p-4 rounded-2xl border border-[#B8860B]/45 bg-[#FFF8EC]"
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
          <GoldFlowerDivider />
          <ShareSection />
        </RevealOnScroll>

        {/* G. OPTIONAL SECTIONS (HIDDEN UNLESS CONFIG POPULATED) */}
        <OptionalSections />

        {/* H. FOOTER */}
        <RevealOnScroll>
          <PulliKolamDivider />
          <footer className="text-center pt-2">
            <div className="px-5 pb-5">
              <Image
                src="/images/hand-lotus.webp"
                alt="Welcoming hand offering a pink lotus"
                width={288}
                height={440}
                loading="lazy"
                className="w-24 h-auto mx-auto mb-3 select-none pointer-events-none"
              />
              <MayilFeatherAccent className="mb-2 w-8 h-8" />
              <p
                lang="ta"
                className="font-tamil-serif text-xl font-semibold text-[#8B1A1A]"
              >
                {footer.welcomeTa}
              </p>
              <p lang="en" className="text-sm text-[#3B2A20]/80 mt-0.5">
                {footer.welcomeEn}
              </p>
              <p
                lang="en"
                className="text-xs text-[#3B2A20]/60 mt-4 tracking-wide"
              >
                {footer.credit}
              </p>
            </div>
            <RedTempleBorderStrip flip />
          </footer>
        </RevealOnScroll>
      </main>
    </div>
  );
}
