import { WidgetConfig } from "@medusajs/admin";

const ProductWidger = () => {
  return <div>Product Widget</div>;
};

export const config: WidgetConfig = {
  zone: "product.list.before",
};

export default ProductWidger;
