import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Sidebar } from "../../app/styledComponents/Sidebar";
import { Title } from "../atoms/Title";
import { Inputs } from "../atoms/Inputs";
import { editUser } from "@/app/redux/usersSlice";
import { Button } from "../molecules/Button";


type User = {
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
}

type Props = {
    user: User;
    isOpen: boolean;
}


export const SideBar: React.FC<Props> = ({ isOpen, user }) => {


    const [inputValueName, setInputValueName] = useState(user.first_name);
    const [inputValueLastName, setInputValueLastName] = useState(user.last_name);
    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(editUser({ ...user, first_name: inputValueName, last_name: inputValueLastName }));
    };

    return (
        <Sidebar open={isOpen ? true : false}>
            <Title
                type='h1'
                text='Editar datos'
                style='text-3xl text-center mb-4'
            />
            <Inputs
                tag='input'
                type='text'
                value={inputValueName}
                onChange={(event) => setInputValueName(event.target.value)}

            />
            <Inputs
                tag='input'
                type='text'
                value={inputValueLastName}
                onChange={(event) => setInputValueLastName(event.target.value)}
            />
            <Button
                text='Guardar'
                onClick={() => { handleSave() }}
                type="primary"
            />
        </Sidebar>

    );
};

