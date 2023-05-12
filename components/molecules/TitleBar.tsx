import { useRouter } from "next/navigation"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Title } from "../atoms/Title";

interface TitleBarProps {
    text: string;
}

export const TitleBar = ({ text }: TitleBarProps) => {

    const router = useRouter();

    return (
        <div className="flex justify-between items-center mb-4">
            <div onClick={() => router.back()}><AiOutlineArrowLeft size={24} /></div>
            <div>
                <Title
                    type='h1'
                    text={text}
                    style='text-3xl text-center'
                />
            </div>
            <div></div>
        </div>
    )
}
