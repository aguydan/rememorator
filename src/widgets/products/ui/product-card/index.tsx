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
        "@container rounded-xl p-6 hover:outline-2 hover:outline-blue-200 dark:bg-gray-900",
        className,
      )}
    >
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="font-secondary flex flex-col gap-2 font-medium">
          <h2 className="text-xl text-gray-700 @[20rem]:text-2xl">Круассан</h2>
          <div className="hidden flex-col gap-2 text-xl @[14rem]:flex">
            <div className="flex items-center gap-3">
              <span className="text-gray-500">круассан</span>
              {/* to tags */}
              <span className="rounded-2xl bg-yellow-200 px-2 text-[1rem]/[1.6rem] text-white">
                340 ккал
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-blue-400 px-2 text-[1rem]/[1.6rem] text-white">
                5.5г
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="font-secondary hidden gap-3 text-xl font-medium text-gray-500 @[12rem]:flex">
            <span>круассан</span>
            <span>малина</span>
          </div>
          <div className="ml-auto flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-gray-400">
            <span className="text-xl font-medium text-gray-700 @[20rem]:text-2xl">
              356
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
