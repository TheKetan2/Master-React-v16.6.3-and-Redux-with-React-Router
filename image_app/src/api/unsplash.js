import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 52d446549fe372d21b4f52ae1147d962b48166b3754f0a66634d378c7b5d0e24"
  }
});

// await axios.get("https://api.unsplash.com/search/photos", {
//   params: { query: term },
//   headers: {
//     Authorization:
//       "Client-ID 52d446549fe372d21b4f52ae1147d962b48166b3754f0a66634d378c7b5d0e24"
//   }
// });
