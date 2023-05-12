'use client'
import { useEffect } from "react";
import Image from "next/image"
import { useRouter } from "next/navigation"

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/app/redux/store";
import { fetchUsers } from "@/app/redux/usersSlice";


import { Card } from "@/app/styledComponents/Card"

export const Users = () => {


    const dispatch = useDispatch();
    const { users, isLoading, error } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const router = useRouter()

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {
                users.map((user) => (
                    <Card
                        key={user.id}
                        onClick={() => { router.push(`/users/${user.id}`) }}
                    >
                        <div className="flex justify-between">
                            <Image
                                src={`${user.avatar}`}
                                width={50}
                                height={50}
                                alt="avatar"
                            />
                            <div>
                                <h3>Nombre: {user.first_name}</h3>
                                <h3>Apellido: {user.last_name}</h3>
                            </div>
                            <div>
                                <h3>editar</h3>
                            </div>
                        </div>
                    </Card>
                )
                )
            }
        </>
    )
}
