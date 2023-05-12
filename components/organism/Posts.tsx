'use client'

import { useRouter } from "next/navigation"
import { Card } from "@/app/styledComponents/Card";
import { Button } from "@/components/molecules/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, removePost } from "@/app/redux/postsSlice";
import { useEffect } from "react";
import { RootState } from "@/app/redux/store";


type Props = {
    user: number;
}

export const Posts: React.FC<Props> = ({ user }) => {

    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector((state: RootState) => state.posts);
    const post = useSelector((state: RootState) => state.posts.posts);


    useEffect(() => {
        dispatch(fetchPosts(user));
    }, [dispatch]);

    const handleDelete = (postId: number) => {
        dispatch(removePost(postId));
    };

    const router = useRouter();

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="grid  gap-2 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4">
                {posts.map((post) => (
                    <div key={post.id}>
                        <Card>
                            <div>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </div>
                            <div className="flex justify-center p-3">
                                <Button
                                    text='Eliminar'
                                    onClick={() => handleDelete(post.id)}
                                    type="danger"
                                />
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
}

