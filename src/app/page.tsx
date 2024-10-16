import Image from "next/image";
import { ButtonDemo } from "./myComponents/ButtonDemo";
import { Button } from "@/components/ui/button";
import { DataTableDemo } from "./myComponents/DataTableDemo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7x1 mx-auto p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-4x1 font-bold">Task Management App</h1>
        <Button>
          <Link href={"/createTasks"}>Create Task</Link>
        </Button>
      </div>
      <DataTableDemo />
    </div>
  );
}
