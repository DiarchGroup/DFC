type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  level?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  level = "h2",
}: SectionHeadingProps) {
  const Heading = level;
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment} ${className ?? ""}`}>
      {eyebrow ? (
        <div
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : "justify-start"
          }`}
        >
          <span className="h-px w-10 bg-(--color-clay)" />
          <p className="font-(--font-accent) text-xs font-semibold uppercase tracking-[0.28em] text-(--color-clay)">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <Heading className="font-(--font-heading) text-3xl leading-tight text-(--color-ivory) sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="text-base leading-7 text-(--color-muted)">{description}</p>
      ) : null}
    </div>
  );
}
