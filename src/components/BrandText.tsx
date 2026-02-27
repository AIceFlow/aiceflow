import React from "react";

type BrandTextProps = {
  text: string;
  highlightClassName?: string;
};

const BrandText: React.FC<BrandTextProps> = ({
  text,
  highlightClassName = "text-primary",
}) => {
  const parts = text.split("AIceFlow");

  if (parts.length === 1) {
    return <>{text}</>;
  }

  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 && (
            <>
              <span className={highlightClassName}>AI</span>ceFlow
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default BrandText;

