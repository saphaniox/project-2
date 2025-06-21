import axios from "axios";

const API = axios.create({
  baseURL: "https://datatabase-test.onrender.com",
});
// https://datatabase-test.onrender.com
// https://user-data-ci61.onrender.com/user
export default API;