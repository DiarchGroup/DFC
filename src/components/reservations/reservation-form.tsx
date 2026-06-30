"use client";

import { FormEvent, useMemo, useState } from "react";

import { siteConfig } from "@/data/siteConfig";

const inputClass =
  "w-full bg-transparent border-0 border-b border-[rgba(232,226,216,0.22)] py-3 text-[var(--color-ivory)] placeholder:text-[rgba(232,226,216,0.32)] focus:outline-none focus:border-[var(--color-clay)] transition-colors text-base";

const labelClass =
  "block text-[10px] font-[var(--font-accent)] uppercase tracking-[0.18em] text-[var(--color-muted)] mb-1";

export function ReservationForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const whatsappUrl = useMemo(() => {
    const message = [
      "Hi Diarch Food Court, I want to reserve a table.",
      `Name: ${name || "Not shared"}`,
      `Date: ${date || "Not shared"}`,
      `Time: ${time || "Not shared"}`,
      `Guests: ${guests || "Not shared"}`,
      `Phone: ${phone || "Not shared"}`,
      `Special requests: ${notes || "None"}`,
    ].join("\n");

    return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
  }, [date, guests, name, notes, phone, time]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      {/* Form */}
      <section>
        <p className="mb-5 text-[11px] font-[var(--font-accent)] uppercase tracking-[0.2em] text-[var(--color-clay)]">
          Reserve Your Table
        </p>
        <h2 className="font-[var(--font-heading)] text-4xl font-light leading-[1.1] text-[var(--color-ivory)] sm:text-5xl">
          Tell us when to expect you.
        </h2>
        <p className="mt-3 text-sm text-[var(--color-muted)]">
          Share your preferred slot, then continue instantly on WhatsApp for quick confirmation.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-7">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>Full Name</label>
              <input
                id="name"
                name="name"
                placeholder="Your full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98xxxxxx"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className={labelClass}>Date</label>
              <input
                id="date"
                name="date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={inputClass + " [color-scheme:dark]"}
              />
            </div>
            <div>
              <label htmlFor="time" className={labelClass}>Time</label>
              <input
                id="time"
                name="time"
                type="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={inputClass + " [color-scheme:dark]"}
              />
            </div>
          </div>

          <div>
            <label htmlFor="guests" className={labelClass}>Number of Guests</label>
            <div className="relative">
              <select
                id="guests"
                name="guests"
                required
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className={inputClass + " appearance-none pr-8 cursor-pointer bg-transparent [color-scheme:dark]"}
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n} className="bg-[var(--color-charcoal)]">
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-muted)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div>
            <label htmlFor="notes" className={labelClass}>Special Requests</label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Allergies, celebration notes, seating preferences..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className={inputClass + " resize-none"}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-[var(--color-clay)] px-8 py-4 text-[11px] font-[var(--font-accent)] uppercase tracking-[0.2em] text-[var(--color-surface)] transition-all hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-clay)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
            >
              Continue on WhatsApp
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </div>
        </form>
      </section>

      {/* Info panel */}
      <aside>
        <div className="border border-[rgba(201,168,76,0.18)] border-t-[var(--color-clay)] border-t-2 bg-[linear-gradient(160deg,#0d1e35_0%,#060e1c_100%)] p-8">
          <p className={labelClass}>Booking Flow</p>
          <ol className="mt-4 space-y-4">
            {[
              "Fill in your date, time, and party size.",
              "Tap continue - a pre-filled WhatsApp message opens.",
              "Our team confirms your reservation quickly on chat or call.",
            ].map((step, i) => (
              <li key={i} className="flex gap-4 text-sm text-[rgba(232,226,216,0.72)]">
                <span className="shrink-0 text-[var(--color-clay)] font-[var(--font-accent)] text-xs leading-[1.8]">
                  0{i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <div className="mt-8 border-t border-[rgba(201,168,76,0.12)] pt-8">
            <p className={labelClass}>Opening Hours</p>
            <div className="mt-3 space-y-2">
              {siteConfig.hours.slice(0, 3).map((entry) => (
                <div key={entry.day} className="flex justify-between text-sm">
                  <span className="text-[rgba(232,226,216,0.5)]">{entry.day}</span>
                  <span className="text-[var(--color-ivory)]">{entry.hours}</span>
                </div>
              ))}
              <div className="flex justify-between text-sm">
                <span className="text-[rgba(232,226,216,0.5)]">Fri - Sun</span>
                <span className="text-[var(--color-ivory)]">{siteConfig.hours[4].hours}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-[rgba(201,168,76,0.12)] pt-8">
            <p className={labelClass}>Contact</p>
            <div className="mt-3 space-y-3">
              <a
                href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                className="block text-[var(--color-clay)] text-sm underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-[var(--color-clay)] text-sm underline-offset-4 hover:underline"
              >
                WhatsApp for large parties
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-[rgba(201,168,76,0.12)] pt-8">
            <p className={labelClass}>House Notes</p>
            <ul className="mt-3 space-y-2">
              {siteConfig.reservationNotes.map((note, i) => (
                <li key={i} className="text-sm text-[rgba(232,226,216,0.6)] leading-6">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
