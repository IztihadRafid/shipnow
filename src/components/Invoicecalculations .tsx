import { PackageSummaryItem } from "@/data/invoiceTypes";
export function calculateLineAmount(item: PackageSummaryItem) {
  return item.price * item.qty;
}
export function calculateInvoiceTotals(packages: PackageSummaryItem[], taxPercent: number, fee: number,
) {
  const subTotal = packages.reduce((sum,item) => sum+calculateLineAmount(item),0,);
  const taxAmount = subTotal * (taxPercent / 100);
  const total = subTotal + taxAmount + fee;

  return { subTotal, taxAmount, total };
}