import React from 'react'
import CategoryPage from './CategoyPage'
import { fetchDataFromApi } from '@/utils/api'
const maxResult = 3

const fetchCategory = async (slug) => {
  const response = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${slug}`
  );
  return response
};
const fetchProducts = async (slug,maxResult) => {
  const response = await fetchDataFromApi(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResult}`
  );
  return response
};

export default async function page({ params: { slug } }) {
  const category = await fetchCategory(slug)
  const products = await fetchProducts(slug,maxResult)

  return <CategoryPage slug={slug} category={category} products={products}/>

}
