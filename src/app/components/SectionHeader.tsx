import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}

function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div>
      <h2 className="font-serif text-5xl text-center mt-6">{title}</h2>
      <p className="text-center text-white/60 mt-4 mb-10">{description}</p>
    </div>
  );
}

export default SectionHeader;
