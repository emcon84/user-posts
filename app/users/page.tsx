
'use client'
import { useEffect, useState } from "react";

//Components
import { Title } from "@/components/atoms/Title"
import { Users } from '@/components/organism/Users'
import apiClient from "../apiClient";
import Spinner from "@/components/atoms/spinner";


export default function UsersPage() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/data');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div className="flex justify-center items-center h-screen"><Spinner /></div>;
  }

  return (
    <>
      <Title
        type='h1'
        text='Users'
        style='text-3xl text-center mb-4'
      />
      <Users />
    </>
  )
}
