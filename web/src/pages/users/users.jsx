import React from "react";
import UserTable from "../../components/tables/usersTable";

export default function Home() {
  return (
    <>
      <div class="flex flex-col max-h-screen">
        <h1 className=" text-2xl font-semibold mx-auto mt-3 mb-3">Users</h1>
        <div class=" w-[80%] mx-auto">
          <UserTable />
        </div>
      </div>
    </>
  );
}
