import Button from "@/shared/ui/button";
import { twMerge } from "tailwind-merge";
import ProductCard from "@/widgets/products/ui/product-card";
import AddProductButton from "@/features/add-product/ui/add-product-button";

// add colorful variants

export default function Products() {
  return (
    <div className="flex flex-col items-center gap-30 mt-30 cursor-pointer">
      <section className="grid grid-cols-[repeat(4,_1fr)] auto-rows-[9rem] gap-2 w-[min(50rem,_96%)]">
        {new Array(7).fill(null).map((_, index) => (
          <ProductCard
            key={index}
            className={twMerge(
              index == 0 && "row-span-2",
              index < 3 && "col-span-2",
            )}
          />
        ))}
      </section>
      <div className="flex gap-2 bg-yellow-200 py-2 px-14 rounded-3xl w-[min(70rem,_96%)] mb-40">
        <AddProductButton />
        <Button className="font-normal" size="medium" variant="accent-2">
          suggest recipe
        </Button>
      </div>
    </div>
  );
}
