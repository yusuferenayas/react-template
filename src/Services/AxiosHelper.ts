import axios, { AxiosRequestConfig } from "axios";
import { baseURL, pathURLStrings } from "Config";

type AxiosConfig = {
  url: pathURLStrings;
  method: "get" | "post";
  headers?: AxiosRequestConfig["headers"];
  data?: {};
} & AxiosRequestConfig;

export const axiosHelper = async (config: AxiosConfig) => {
  return await axios({ ...config, baseURL: baseURL });
};
