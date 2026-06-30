import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/data/testimonials";

function StarRow() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3 w-3 fill-(--color-clay)" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="space-y-10 border-t border-[rgba(201,168,76,0.1)] pt-12">
      <Reveal>
        <SectionHeading
          eyebrow="Guest Voices"
          title="Loved by Locals and Visitors"
          description="A few words from diners who celebrate with us often."
        />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.author} delay={index * 0.1} y={20}>
            <div className="space-y-5 border-t border-[rgba(201,168,76,0.25)] pt-6">
              <StarRow />
              <p className="[font-family:var(--font-cormorant)] text-lg italic leading-8 text-[rgba(248,245,240,0.78)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-(--color-ivory)">{testimonial.author}</p>
                <p className="[font-family:var(--font-accent)] mt-0.5 text-[10px] uppercase tracking-[0.22em] text-(--color-clay)">
                  {testimonial.context}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
