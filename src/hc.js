import HttpClient from "./HttpClient";

const LIMIT = 5;

const hc = new HttpClient({
  protocol: "https",
  host: "api.egliens.ru",
  port: "443",
  url: "/all",
  query: {
    key: "ahsouidyf872lkc",
    _limit: LIMIT
  }
});

export default hc;