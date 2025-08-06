import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  level?: "normal" | "warning" | "emergency";
}

const classes = {
  normal: "bg-gray-200",
  warning: "bg-yellow-200",
  emergency: "bg-red-300",
};

export default function ProductCard({
  level = "normal",
  className,
}: ProductCardProps) {
  return (
    <article
      className={twMerge(
        classes[level],
        "@container rounded-xl p-6 hover:outline-blue-200 hover:outline-2",
        className,
      )}
    >
      <div className="flex flex-col justify-between gap-4 h-full">
        <div className="font-secondary font-medium flex flex-col gap-2">
          <h2 className="text-gray-700 text-xl @[20rem]:text-2xl">Круассан</h2>
          <div className="hidden text-xl @[14rem]:flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-gray-500">круассан</span>
              {/* to tags */}
              <span className="text-[1rem]/[1.6rem] text-white bg-yellow-200 px-2 rounded-2xl">
                340 ккал
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[1rem]/[1.6rem] text-white bg-blue-400 px-2 rounded-2xl">
                5.5г
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden @[12rem]:flex gap-3 font-secondary font-medium text-xl text-gray-500">
            <span>круассан</span>
            <span>малина</span>
          </div>
          <div className="flex ml-auto items-center justify-center bg-gray-400 w-[4rem] h-[4rem] rounded-full">
            <span className="text-gray-700 font-medium text-xl @[20rem]:text-2xl">
              356
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
