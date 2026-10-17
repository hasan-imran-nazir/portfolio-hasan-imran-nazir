interface SectionHeadingProps {
  index?: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-5 border-b border-line/40 pb-6 md:flex-row md:items-end md:justify-between md:gap-10">
      <div>
        <span className="eyebrow">
          {index ? `${index} / ` : ""}
          {eyebrow}
        </span>
        <h2 className="h-section mt-4 text-ink">{title}</h2>
      </div>

      {description && (
        <p className="max-w-md text-base leading-7 text-muted md:text-right">
          {description}
        </p>
      )}
    </div>
  );
}
