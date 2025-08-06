import Button from "@/shared/ui/button";
import { twMerge } from "tailwind-merge";
import ProductCard from "@/widgets/products/ui/product-card";
import AddProductButton from "@/features/add-product/ui/add-product-button";
import ScanBarcodeButton from "@/features/scan-barcode/ui/scan-barcode-button";

// add colorful variants

export default function Products() {
  return (
    <div className="flex flex-col items-center gap-20 mt-10 sm:mt-30 cursor-pointer">
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-[min(60rem,_96%)]">
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
      <div className="sticky bottom-10 sm:bottom-20 flex bg-yellow-200 py-2 px-14 rounded-3xl w-[min(70rem,_96%)] mb-40 overflow-scroll">
        <div className="flex gap-2 shrink-0">
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
