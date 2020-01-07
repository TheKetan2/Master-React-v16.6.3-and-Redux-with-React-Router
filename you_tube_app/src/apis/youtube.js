import axios from "axios";

const KEY = "AIzaSyBa8Prf3LDKmVJEFDGGgpiqzU_Al0EiMjM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 4,
    key: `${KEY}`
  }
});
