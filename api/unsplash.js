import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1XE65YhjtyII1gmEgET_eMlKSDZ2Oop5NkTqcR1lH9Q",
  },
});
