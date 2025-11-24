export interface POST {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPosts(): Promise<POST[]> {
  const post =
    "https://jsonplaceholder.typicode.com/posts";

  const rawData = await fetch(post);
  return await rawData.json();

  
}
