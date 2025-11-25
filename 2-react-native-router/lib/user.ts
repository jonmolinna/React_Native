export interface USER {
  id: number;
  name: string;
  username: string;
  email: string;
}

export async function getUsers(): Promise<USER[]> {
    const url = "https://jsonplaceholder.typicode.com/users";

    const data = await fetch(url);
    return await data.json();
}
