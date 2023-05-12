import React, { useState } from "react";
import { ButtonEdit } from "@/app/styledComponents/ButtonEdit";
import { SideBar } from "../organism/SideBar";

type User = {
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
}

type Props = {
    user: User;
}

export const Buttonedit: React.FC<Props> = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <ButtonEdit onClick={toggleSidebar}>{isOpen ? 'Cerrar' : 'Editar'}</ButtonEdit>
            <SideBar isOpen={isOpen} user={user} />
        </>
    );
};
