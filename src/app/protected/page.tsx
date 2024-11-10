import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function Page() {
  const user = await currentUser(); //from clerk server api call
  const session = await auth();

  return (
    <>
      Protected
      <div>User: {user?.username}</div>
      <div>User: {session.userId}</div>
    </>
  );
}
