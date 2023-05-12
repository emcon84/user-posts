'use client'

import { Posts } from "@/components/organism/Posts";
import { TitleBar } from "@/components/molecules/TitleBar";

interface PostPageProps {
    params: {
        id: number;
    }
}

const PostPage = ({ params }: PostPageProps) => {

    return (
        <>
            <TitleBar text="Posts" />
            <Posts user={params.id} />
        </>
    )
}

export default PostPage;
