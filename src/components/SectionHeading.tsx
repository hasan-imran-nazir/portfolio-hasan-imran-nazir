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
    <div className="flex flex-col gap-5 border-b-4 border-ink pb-5 md:flex-row md:items-end md:justify-between md:gap-10">
      <div>
        <span className="eyebrow">
          {"// "}
          {index ? `${index}. ` : ""}
          {eyebrow}
        </span>
        <h2 className="h-section mt-3">{title}</h2>
      </div>

      {description && (
        <p className="max-w-md text-sm leading-6 text-muted md:text-right">
          {description}
        </p>
      )}
    </div>
  );
}
