import React from "react";
import Image from "next/image";
import { weddingConfig } from "@/config/wedding";
import { PulliKolamDivider } from "./TamilMotifs";
import { RevealOnScroll } from "./RevealOnScroll";

/**
 * Optional sections (About the Couple, Captured Moments gallery, Our Story video).
 * Renders nothing unless real data is added to `weddingConfig.optional`.
 */
export function OptionalSections() {
  const { aboutCouple, gallery, storyVideo } = weddingConfig.optional;

  const hasAbout = aboutCouple.profiles.length > 0;
  const hasGallery = gallery.photos.length > 0;
  const hasVideo = storyVideo.video !== null;

  if (!hasAbout && !hasGallery && !hasVideo) {
    return null;
  }

  return (
    <>
      {hasAbout && (
        <RevealOnScroll>
          <PulliKolamDivider />
          <section aria-labelledby="about-couple-heading" className="px-5 py-6">
            <div className="text-center mb-5">
              <h2
                id="about-couple-heading"
                lang="ta"
                className="font-tamil-serif text-xl font-semibold text-[#8B1A1A]"
              >
                {aboutCouple.headingTa}
              </h2>
              <p lang="en" className="text-sm text-[#3B2A20]/75 mt-0.5">
                {aboutCouple.headingEn}
              </p>
            </div>
            <div className="space-y-4">
              {aboutCouple.profiles.map((profile, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-4 rounded-2xl border border-[#B8860B]/35 bg-[#FFF8EC]"
                >
                  {profile.photoUrl && (
                    <Image
                      src={profile.photoUrl}
                      alt={profile.namesEn}
                      width={96}
                      height={96}
                      loading="lazy"
                      className="w-24 h-24 rounded-full object-cover border-2 border-[#B8860B] mb-3"
                    />
                  )}
                  <p lang="ta" className="text-sm text-[#8B1A1A] font-medium">
                    {profile.roleTa}
                  </p>
                  <p lang="en" className="text-xs text-[#3B2A20]/70 mb-1">
                    {profile.roleEn}
                  </p>
                  <p lang="ta" className="text-base font-medium text-[#3B2A20]">
                    {profile.namesTa}
                  </p>
                  <p lang="en" className="text-sm text-[#3B2A20]/80">
                    {profile.namesEn}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </RevealOnScroll>
      )}

      {hasGallery && (
        <RevealOnScroll>
          <PulliKolamDivider />
          <section aria-labelledby="gallery-heading" className="px-5 py-6">
            <div className="text-center mb-5">
              <h2
                id="gallery-heading"
                lang="ta"
                className="font-tamil-serif text-xl font-semibold text-[#8B1A1A]"
              >
                {gallery.headingTa}
              </h2>
              <p lang="en" className="text-sm text-[#3B2A20]/75 mt-0.5">
                {gallery.headingEn}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {gallery.photos.map((photo, idx) => (
                <figure
                  key={idx}
                  className="overflow-hidden rounded-xl border border-[#B8860B]/40"
                >
                  <Image
                    src={photo.src}
                    alt={`${photo.altTa} — ${photo.altEn}`}
                    width={320}
                    height={320}
                    loading="lazy"
                    className="w-full aspect-square object-cover"
                  />
                </figure>
              ))}
            </div>
          </section>
        </RevealOnScroll>
      )}

      {hasVideo && storyVideo.video && (
        <RevealOnScroll>
          <PulliKolamDivider />
          <section aria-labelledby="story-video-heading" className="px-5 py-6">
            <div className="text-center mb-4">
              <h2
                id="story-video-heading"
                lang="ta"
                className="font-tamil-serif text-xl font-semibold text-[#8B1A1A]"
              >
                {storyVideo.headingTa}
              </h2>
              <p lang="en" className="text-sm text-[#3B2A20]/75 mt-0.5">
                {storyVideo.headingEn}
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#B8860B]/45 bg-[#FFF8EC]">
              <video
                src={storyVideo.video.src}
                poster={storyVideo.video.poster}
                controls
                playsInline
                preload="none"
                aria-label={`${storyVideo.video.titleTa} — ${storyVideo.video.titleEn}`}
                className="w-full block"
              />
            </div>
          </section>
        </RevealOnScroll>
      )}
    </>
  );
}
