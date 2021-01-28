import { axiosHelper } from "Services/AxiosHelper";

const getPersonQuery = async () =>
  (
    await axiosHelper({
      method: "get",
      url: "people/1/",
    })
  ).data;

export default getPersonQuery;
