export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;

}


export const getPosts = async (): Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data.data;
}

export const getPostsByUser = async (id: number): Promise<Post[]> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/user/${id}/posts`)
    const data = await res.json();
    return data;
}