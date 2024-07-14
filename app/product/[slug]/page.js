// Import your Client Component
import ProductDetails from "./ProductDetails";
import { fetchDataFromApi } from "@/utils/api";

 
async function fetchProduct(slug) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  return product;
}
 
async function fetchProducts(slug) {
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );
  return products
}
 
export default async function Page({ params: { slug } }) {
  // Fetch data directly in a Server Component
  const product = await fetchProduct(slug);
  const products = await fetchProducts(slug);
  // Forward fetched data to your Client Component
  return <ProductDetails slug={slug} product={product} products={products} />
}