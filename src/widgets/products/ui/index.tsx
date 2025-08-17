import Button from "@/shared/ui/button";
import { twMerge } from "tailwind-merge";
import ProductCard from "@/widgets/products/ui/product-card";
import AddProductButton from "@/features/add-product/ui/add-product-button";
import ScanBarcodeButton from "@/features/scan-barcode/ui/scan-barcode-button";

// add colorful variants

export default function Products() {
  return (
    <div className="mt-10 flex cursor-pointer flex-col items-center gap-20 sm:mt-30">
      <section className="grid w-[min(60rem,_96%)] grid-cols-2 gap-2 sm:grid-cols-4">
        {new Array(7).fill(null).map((_, index) => (
          <ProductCard
            key={index}
            className={twMerge(
              index == 0 && "row-span-1 sm:row-span-2",
              index < 3 && "col-span-2",
              index >= 3 && "col-span-2 sm:col-span-1",
            )}
          />
        ))}
      </section>
      <div className="sticky bottom-10 mb-40 flex w-[min(70rem,_96%)] overflow-scroll rounded-3xl bg-yellow-200 px-14 py-2 sm:bottom-20">
        <div className="flex shrink-0 gap-2">
          <ScanBarcodeButton />
          <AddProductButton />
          <Button className="font-normal" size="medium" variant="accent-2">
            suggest recipe
          </Button>
        </div>
      </div>
    </div>
  );
}
