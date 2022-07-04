import axios from "axios";

export const axiosMain = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
  headers: {
    "API-KEY": "4c455b41-e9e2-41e3-8498-c52fd2cfffdc"
  }
})