export type GitData = {
  id: string | number;
  topics: Array<string>;
  homepage?: string;
  html_url: string;
  description: string;
};

export async function getGitDatas() {
  const res = await fetch('https://api.github.com/users/KirdesMF/repos', {
    headers: new Headers({
      Authorization: `Bearer ${process.env.GIT_TOKEN}`,
    }),
  });
  let datas = (await res.json()) as Array<GitData>;
  datas = datas.filter((d) => d.topics.includes('portfolio'));

  return datas.map((data) => ({
    id: data.id,
    html_url: data.html_url,
    description: data.description,
    homepage: data.homepage,
  }));
}
