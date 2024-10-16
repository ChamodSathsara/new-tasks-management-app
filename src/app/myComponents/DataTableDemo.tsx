"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Schema, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Toast } from "@/components/ui/toast";
import { formSchema } from "@/lib/task";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { AlertDemo } from "./AlertDemo";

let arr = [
  {
    id: "I1",
    description: "Call Parents",
    status: "todo",
    date: "2024-10-01",
  },
  {
    id: "I2",
    description: "Call Parents",
    status: "done",
    date: "2024-10-01",
  },
  {
    id: "I3",
    description: "Call Parents",
    status: "process",
    date: "2024-10-01",
  },
];

// DATA BASE
// export function MyDatas() {
//   const [myTasks, setMyTasks] = useState(arr);
// }

let idTo = "";
let desTo = "";
let dateTo = "";
let statusTo = "";

export function DataTableDemo() {
  const [myTasks, setMyTasks] = useState(arr);

  const updateClick = (
    id: string,
    description: string,
    date: string,
    status: string
  ) => {
    arr = myTasks;

    idTo = id;
    desTo = description;
    dateTo = date;
    statusTo = status;
  };

  const setArrayToUse = (id: string) => {
    arr = myTasks;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr.splice(i, 1);
      }
    }
  };

  return (
    <Table>
      <TableCaption>A list of your Tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Task Id</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Update</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {myTasks.map((invoice) => (
          <TableRow
            key={invoice.id}
            className={
              invoice.status === "done"
                ? "bg-red-100"
                : invoice.status === "todo"
                ? "bg-blue-50"
                : "bg-green-100"
            }
          >
            <TableCell>{invoice.id}</TableCell>
            <TableCell>{invoice.description}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  updateClick(
                    invoice.id,
                    invoice.description,
                    invoice.date,
                    invoice.status
                  );
                }}
              >
                <Link href="/editTasks">Update</Link>
              </Button>
            </TableCell>
            <TableCell>
              <Button
                onClick={() => {
                  try {
                    const updatedTasks = myTasks.filter(
                      (item) => item.id !== invoice.id
                    );
                    setMyTasks(updatedTasks);

                    setArrayToUse(invoice.id);
                  } catch (error) {
                    console.log(error);
                  }
                  <AlertDemo />;
                  console.log(arr);
                  console.log(myTasks);
                }}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// ========================================================================================================
//                                           Create Task Form
// ========================================================================================================

export function InputForm() {
  const [myTasks, setMyTasks] = useState(arr);
  console.log(arr.length, myTasks.length);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      description: "",
      status: "",
      date: "",
    },
  });

  const handleSubmit = (Values: z.infer<typeof formSchema>) => {
    // console.log(myTasks);
    // setMyTasks([...myTasks, Values]);
    // // console.log(Values);
    // console.log(myTasks);
  };

  function onSubmit(data: z.infer<typeof formSchema>) {
    for (let i = 0; i < myTasks.length; i++) {
      if (data.id === myTasks[i].id) {
        console.log(data.id, myTasks[i].id);
        console.log("Failed Adding");
        return;
      } else {
      }
    }
    setMyTasks([...myTasks, data]);

    arr.push(data);
    console.log(arr.length, myTasks.length);

    console.log("Successfull Adding");
  }

  return (
    // {form.handleSubmit(onSubmit)}

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-10">
        {/* Id text field */}
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input placeholder="01" {...field} />
              </FormControl>
              <FormDescription>This is Task Id.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* description text feild */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>This is Task Name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* status text feild */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Input placeholder="To do , done or processing" {...field} />
              </FormControl>
              <FormDescription>This is Task Availability.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date text feild */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input placeholder="2000 00 00" {...field} />
              </FormControl>
              <FormDescription>Create date this inclede.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

// ========================================================================================================
//                               Edit Task Form
// ========================================================================================================

export function EditForm() {
  const [myTasks, setMyTasks] = useState(arr);
  console.log(arr.length, myTasks.length);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      description: "",
      status: "",
      date: "",
    },
  });

  const handleSubmit = (Values: z.infer<typeof formSchema>) => {
    // console.log(myTasks);
    // setMyTasks([...myTasks, Values]);
    // // console.log(Values);
    // console.log(myTasks);
  };

  function onSubmit(data: z.infer<typeof formSchema>) {
    // setMyTasks([...myTasks, data]);
    let edited = [data];

    try {
      const updatedTasks = myTasks.filter((item) => item.id !== data.id);
      setMyTasks(updatedTasks);
      setMyTasks([...myTasks, data]);
      arr = myTasks;
    } catch (error) {
      console.log(error);
    }

    console.log(myTasks);
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-10">
        {/* Id text field */}
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input
                  defaultValue={idTo}
                  // disabled
                  placeholder="01"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is Task Id.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* description text feild */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input defaultValue={desTo} placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>This is Task Name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* status text feild */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Input
                  defaultValue={statusTo}
                  placeholder="To do , done or processing"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is Task Availability.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date text feild */}
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input
                  defaultValue={dateTo}
                  placeholder="2000 00 00"
                  {...field}
                />
              </FormControl>
              <FormDescription>Create date this inclede.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
