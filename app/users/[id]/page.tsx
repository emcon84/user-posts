'use client'

// import { getUser } from "@/app/api/users/route";
import { TitleBar } from "@/components/molecules/TitleBar";
import { UserById } from "@/components/organism/User";

interface UserPageProps {
  params: {
    id: number;
  }
}

const UserPage = ({ params }: UserPageProps) => {

  // const user = await getUser(params.id);
  const id = params.id;

  return (
    <>
      <TitleBar text="User" />
      {/* <User user={user} /> */}
      <UserById id={id} />
    </>
  )
}

export default UserPage;
