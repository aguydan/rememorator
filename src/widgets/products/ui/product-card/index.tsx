import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  level: "normal" | "warning" | "emergency";
}

const classes = {
  normal: "bg-gray-100",
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
        "@container rounded-xl p-6 hover:outline-violet-400 hover:outline-2",
        className,
      )}
    >
      <div className="flex @[14rem]:justify-between h-full">
        <div className="font-secondary font-medium flex flex-col gap-2">
          <h2 className="hidden text-lg md:text-2xl @[14rem]:block">Product</h2>
          <div className="hidden md:text-xl @[14rem]:flex gap-2 md:gap-3">
            <span className="text-gray-400">fruit</span>
            <span className="text-white bg-yellow-400 px-3 rounded-2xl">B</span>
            <span className="text-white bg-yellow-800 px-3 rounded-2xl">D</span>
          </div>
        </div>
        <div className="flex ml-auto items-center justify-center bg-gray-300 text-xl w-[3rem] h-[3rem] @[16rem]:text-2xl @[16rem]:w-[4rem] @[16rem]:h-[4rem] rounded-full self-end">
          <span>356</span>
        </div>
      </div>
    </article>
  );
}
