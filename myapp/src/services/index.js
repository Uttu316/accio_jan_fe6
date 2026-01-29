const BASEURL = "https://fakestoreapi.com";

export const API = async (config) => {
  const { endpoint } = config;
  const url = BASEURL + endpoint;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
