import { SparkleIcon } from "lucide-react";
import React from "react";

interface CardHeaderProps {
  title: string;
  description: string;
}

function CardHeader({ title, description }: CardHeaderProps) {
  return (
    <div className="flex flex-col">
      <div className="inline-flex items-center gap-2">
        <SparkleIcon
          className="size-9 text-emerald-300"
          strokeWidth={0.001}
          fill="currentColor"
        />
        <h3 className="font-serif text-3xl ">{title}</h3>
      </div>
      <p className="text-sm text-white/80 mt-2">{description}</p>
    </div>
  );
}

export default CardHeader;
