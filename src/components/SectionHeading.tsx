interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accentWord?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  accentWord,
  centered = true,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!accentWord) {
      return title;
    }
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="text-gold-400">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
