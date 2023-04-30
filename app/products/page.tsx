import getProductsDB from "@/lib/products"


export default async function Products() {
  const fetch = await getProductsDB()

  return (
    <div>page{JSON.stringify(fetch)}</div>
  )
}
