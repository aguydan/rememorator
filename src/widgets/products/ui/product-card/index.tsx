import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {}

// this thing should have everything based on container size

export default function ProductCard({ className }: ProductCardProps) {
  return (
    <article
      className={twMerge(
        "@container bg-gray-100 rounded-xl px-8 py-6 hover:outline-violet-400 hover:outline-2",
        className,
      )}
    >
      <div className="flex @[14rem]:justify-between h-full">
        <div className="font-secondary font-medium flex flex-col gap-2">
          <h2 className="hidden text-2xl @[14rem]:block">Product</h2>
          <div className="hidden text-xl @[14rem]:flex gap-3">
            <span className="text-gray-400">fruit</span>
            <span className="text-white bg-yellow-400 px-3 rounded-2xl">B</span>
          </div>
        </div>
        <div className="flex items-center justify-center bg-gray-300 text-2xl w-[4rem] h-[4rem] rounded-full self-end">
          <span>76</span>
        </div>
      </div>
    </article>
  );
}
