import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  orbitDuration,
  isSpin,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  orbitDuration?: string;
  isSpin?: boolean;
}>) => {
  return (
    <div
      className={twMerge(
        isSpin === true ? "absolute animate-spin" : "absolute"
      )}
      style={{
        animationDuration: orbitDuration,
      }}
    >
      <div>
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className="inline-flex"
            style={{
              transform: `rotate(${rotation * -1}deg)`,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
