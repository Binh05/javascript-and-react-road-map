import { useState } from "react";
import clsx from "clsx";

export default function Toggle({ title, children, size = 1 }) {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="text-primary flex cursor-pointer items-center gap-4 hover:opacity-50"
        onClick={() => setActive(!active)}
      >
        <h1
          className={clsx(
            "text-primary text-3xl font-bold",
            size === 2 && "text-2xl",
            size === 3 && "text-xl",
            size === 4 && "text-lg",
            size === 5 && "text-base",
          )}
        >
          {title}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={clsx(
            "size-8 transition-transform duration-300",
            active && "rotate-180",
          )}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-[height]",
          !active && "h-0",
        )}
      >
        <div
          className={clsx("max-w-[40vw]", {
            "pt-8": size === 1,
            "pt-6": size === 2,
            "pt-4": size === 3,
            "pt-2": size === 4,
          })}
        >
          {children}
        </div>
      </div>
      {size === 1 && <hr className="my-8 opacity-20" />}
    </div>
  );
}
