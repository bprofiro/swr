const BASEURL = 'https://api.github.com/users/';

export const fetchGithubUser = async (userName: string) => {
  const response = await fetch(`${BASEURL}${userName}`);

  if (!response.ok) {
    throw new Error('User not found');
  }

  return response.json();
};
