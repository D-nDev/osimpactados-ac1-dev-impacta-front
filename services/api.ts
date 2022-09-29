import axios from "axios";
axios.defaults.withCredentials = true

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SOCKET as string,
  withCredentials: true,
});

export const usermicroservice = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USER_MICROSERVICE as string,
  withCredentials: true,
})

export const establishmentmicroservice = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ESTABLISHMENT_MICROSERVICE as string,
  withCredentials: true,
})
