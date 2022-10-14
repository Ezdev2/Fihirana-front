import axios, { AxiosRequestConfig, AxiosError } from "axios";

axios.defaults.baseURL = "https://virtserver.swaggerhub.com/FANSOAEZRA/fihirana_api/1.0/";
// axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
// console.log(import.meta.env.VITE_API_BASE_URL);

export class Http {
  static async get(url: string, params?: AxiosRequestConfig<any>) {
    try {
      const { data } = await axios.get(url, { params });
      return data;
    } catch (e) {
      const error = e as AxiosError;
      throw `HTTP::GET, ${error.message}`;
    }
  }
}
