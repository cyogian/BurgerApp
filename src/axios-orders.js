import axios from "axios";

const instance = axios.create({
  baseURL: "https://theburgerapp.firebaseio.com/"
});

export default instance;
