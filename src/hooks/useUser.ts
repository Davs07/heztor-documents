import githubApi from "@/api/github";


export const getUser = async (username: string) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user data");
  }
};

export const getRepos = async (username: string) => {
  try {
    const response = await githubApi.get(`/users/${username}/repos`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching repositories");
  }
};
