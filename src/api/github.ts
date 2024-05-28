import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";

const githubApi = axios.create({
  baseURL: GITHUB_API_URL,
});

export default githubApi;
