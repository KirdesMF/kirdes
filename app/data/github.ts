export type GitData = {
  description: string;
  homepageUrl?: string;
  id: string | number;
  name: string;
  url: string;
  repositoryTopics: {
    edges: Array<{ node: { id: string; topic: { name: string } } }>;
  };
};

export type GitHubQuery = {
  data: {
    user: {
      repositories: {
        edges: Array<{
          node: GitData;
        }>;
      };
    };
  };
};

function createQuery(name: string, first: number) {
  return JSON.stringify({
    query: `query GitHub($name: String!, $first: Int!) {
      user(login: $name) {
        repositories(isFork: false, first: $first) {
          edges {
            node {
              id
              name
              homepageUrl
              description
              url
              repositoryTopics(first: 10) {
                edges {
                  node {
                    id
                    topic {
                      name 
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`,
    variables: {
      name,
      first,
    },
  });
}

export async function getGitDatas() {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: new Headers({
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    }),
    body: createQuery('kirdesMF', 15),
  });

  let datas = (await res.json()) as GitHubQuery;
  let repos = datas.data.user.repositories.edges;

  return repos
    .map((repo) => repo.node)
    .filter(
      (repo) =>
        repo.repositoryTopics.edges.length > 0 ||
        repo.repositoryTopics.edges.some(
          (topic) => topic.node.topic.name === 'portfolio'
        )
    );
}
