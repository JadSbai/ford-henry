import axios from "axios";

/**
 * Setup a default client to connect to our API
 */
export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
