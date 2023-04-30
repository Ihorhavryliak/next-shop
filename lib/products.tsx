import api from "./api"

export default async function getProductsDB() {
  const res = await api<getProductDbType>(`api/v1/product`)
  return res.data
}