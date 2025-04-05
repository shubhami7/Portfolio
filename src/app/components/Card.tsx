import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

function Card({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={twMerge(
        "bg-gray-800 p-8 rounded-3xl mb-10 relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
