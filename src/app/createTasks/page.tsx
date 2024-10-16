import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { InputForm } from "../myComponents/DataTableDemo";

function page() {
  return (
    <div className="max-w-7x1 mx-auto p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-4x1 font-bold">
          Task Management App - Create New Task
        </h1>
        <Button>
          <Link href="/">Home Page</Link>
        </Button>
      </div>
      <InputForm />
    </div>
  );
}

export default page;
