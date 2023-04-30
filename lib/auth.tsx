import api from "./api"

export
 async function registrationDB() {
  const res = await api<getProductDbType>(`api/v1/product`)
  return res.data
}

export async function logInDB() {
  const res = await api<getProductDbType>(`api/v1/product`)
  return res.data
}