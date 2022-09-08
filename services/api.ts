import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SOCKET as string,
});

export const usermicroservice = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USER_MICROSERVICE as string
})

export const establishmentmicroservice = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ESTABLISHMENT_MICROSERVICE as string
})
