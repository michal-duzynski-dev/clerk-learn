"use client";
import { useAuth, useUser } from "@clerk/nextjs";

export default function Page() {
  const user = useUser(); //from clerk server api call
  const session = useAuth();

  return (
    <>
      Protected client
      <div>User: {user.user?.username}</div>
      <div>User: {session.userId}</div>
    </>
  );
}
