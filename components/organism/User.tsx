'use client'

import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"
import { Card } from "@/app/styledComponents/Card";
import { Button } from "@/components/molecules/Button";
import { Buttonedit } from "../molecules/ButtonEdit";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/app/redux/usersSlice";
import { RootState } from "@/app/redux/store";
import { fetchPhotosByUserId } from "@/app/redux/photoSlice";



type Props = {
    id: number;
}

export const UserById: React.FC<Props> = ({ id }) => {

    const router = useRouter();
    const user = useSelector((state: RootState) => state.users.users[id])
    const photo = useSelector((state: RootState) => state.photos.photos)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
        dispatch(fetchPhotosByUserId(id))
    }, [id]);

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <>
            <Card center>
                <div>
                    <Image
                        src={user.avatar}
                        width={100}
                        height={100}
                        alt="pepe"
                    />
                    <h3>Nombre: {user.first_name}</h3>
                    <h3>Apellido: {user.last_name}</h3>
                </div>
            </Card>
            <div className="flex justify-center p-3">
                <Buttonedit user={user} />
                <Button
                    text='Ver Posts'
                    onClick={() => { router.push(`/posts/${user.id}`) }}
                    type="primary"
                />

            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2does not match the required types of a Next.js Route.">
                {photo.map((photo) => (
                    <div key={photo.id}>
                        <Image
                            src={photo.url}
                            width={500}
                            height={500}
                            alt="pepe"
                        />
                    </div>
                ))}

            </div>
        </>
    )
}

