"use client";

import React, { useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { ThamboolamIcon } from "./TamilMotifs";

export function RsvpForm() {
  const { rsvp, couple } = weddingConfig;
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<string>(rsvp.attendingYes);
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const isAttending = attendance === rsvp.attendingYes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError("தயவுசெய்து உங்கள் பெயரை உள்ளிடவும் / Please enter your name.");
      return;
    }
    setError("");

    const lines = [
      `வணக்கம்! (${couple.combinedEn} திருமண RSVP)`,
      `பெயர் / Name: ${trimmedName}`,
      `வருகை / Attending: ${attendance}`,
    ];

    if (isAttending) {
      lines.push(`நபர்கள் / Guests: ${guests}`);
    }

    if (message.trim()) {
      lines.push(`வாழ்த்து / Message: ${message.trim()}`);
    }

    const phone = rsvp.whatsappNumber.replace(/[^\d]/g, "");
    const encoded = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/${phone}?text=${encoded}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section aria-labelledby="rsvp-heading" className="px-5 py-6">
      <div className="text-center mb-5">
        <h2
          id="rsvp-heading"
          lang="ta"
          className="font-tamil-serif text-xl font-semibold text-[#8B1A1A]"
        >
          {rsvp.headingTa}
        </h2>
        <p lang="en" className="text-sm text-[#3B2A20]/75 mt-0.5">
          {rsvp.headingEn}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-4 border border-[#B8860B]/40 rounded-2xl p-4 bg-[#FFF8EC]"
      >
        <div>
          <label
            htmlFor="rsvp-name"
            className="block text-base font-medium text-[#3B2A20] mb-1.5"
          >
            <span lang="ta">{rsvp.nameLabelTa}</span>{" "}
            <span lang="en" className="text-sm text-[#3B2A20]/70">
              / {rsvp.nameLabelEn}
            </span>
          </label>
          <input
            id="rsvp-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError("");
            }}
            placeholder={rsvp.namePlaceholder}
            required
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-[#B8860B]/45 bg-[#FFF8EC] text-base text-[#3B2A20] placeholder:text-[#3B2A20]/45 focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A]"
          />
          {error && (
            <p role="alert" className="text-sm text-[#8B1A1A] mt-1.5">
              {error}
            </p>
          )}
        </div>

        <fieldset>
          <legend className="block text-base font-medium text-[#3B2A20] mb-2">
            <span lang="ta">{rsvp.attendanceLabelTa}</span>{" "}
            <span lang="en" className="text-sm text-[#3B2A20]/70">
              / {rsvp.attendanceLabelEn}
            </span>
          </legend>
          <div className="grid grid-cols-1 gap-2.5">
            {[rsvp.attendingYes, rsvp.attendingNo].map((option) => {
              const selected = attendance === option;
              return (
                <label
                  key={option}
                  className={`flex items-center gap-3 min-h-[48px] px-3.5 py-2.5 rounded-xl border cursor-pointer transition-colors ${
                    selected
                      ? "border-[#8B1A1A] bg-[#8B1A1A]/8 text-[#8B1A1A] font-medium"
                      : "border-[#B8860B]/40 bg-[#FFF8EC] text-[#3B2A20]"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option}
                    checked={selected}
                    onChange={() => setAttendance(option)}
                    className="w-4 h-4 accent-[#8B1A1A]"
                  />
                  <span lang="ta" className="text-base">
                    {option}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {isAttending && (
          <div>
            <label
              htmlFor="rsvp-guests"
              className="block text-base font-medium text-[#3B2A20] mb-1.5"
            >
              <span lang="ta">{rsvp.guestsLabelTa}</span>{" "}
              <span lang="en" className="text-sm text-[#3B2A20]/70">
                / {rsvp.guestsLabelEn}
              </span>
            </label>
            <select
              id="rsvp-guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-[#B8860B]/45 bg-[#FFF8EC] text-base text-[#3B2A20] focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A]"
            >
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label
            htmlFor="rsvp-message"
            className="block text-base font-medium text-[#3B2A20] mb-1.5"
          >
            <span lang="ta">{rsvp.messageLabelTa}</span>{" "}
            <span lang="en" className="text-sm text-[#3B2A20]/70">
              / {rsvp.messageLabelEn}
            </span>
          </label>
          <textarea
            id="rsvp-message"
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={rsvp.messagePlaceholder}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#B8860B]/45 bg-[#FFF8EC] text-base text-[#3B2A20] placeholder:text-[#3B2A20]/45 focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A]"
          />
        </div>

        <button
          type="submit"
          className="w-full min-h-[52px] px-4 py-3 rounded-xl bg-[#8B1A1A] text-[#FFF8EC] font-medium text-base flex items-center justify-center gap-2.5 active:opacity-90 transition-opacity cursor-pointer"
        >
          <ThamboolamIcon className="text-[#F2B705]" />
          <span lang="ta">{rsvp.submitLabelTa}</span>
        </button>
      </form>
    </section>
  );
}
