import axios from "axios";

export const axiosGet = async (url) => {
  const result = await axios.get(url);
  return result.data;
};
export const axiosPost = async (url, body) => {
  const result = await axios.post(url, body);
  return result.data;
};
export const axiosPut = async (url, body) => {
  const result = await axios.put(url, body);
  return result.data;
};
