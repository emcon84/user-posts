
export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}


export const getUsers = async (): Promise<User[]> => {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    return data.data;
}

export const getUser = async (id: number): Promise<User> => {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json();
    return data.data;
}