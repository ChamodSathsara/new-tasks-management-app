import React, { useState } from "react";
import { DataTableDemo } from "./DataTableDemo";

export function MyData() {
  const [MyData, setMyData] = useState([
    {
      id: "1",
      description: "Call Parents",
      status: "To Do",
      date: "2024-10-01",
    },
    {
      id: "2",
      description: "Call Parents",
      status: "To Do",
      date: "2024-10-01",
    },
    {
      id: "3",
      description: "Call Parents",
      status: "To Do",
      date: "2024-10-01",
    },
  ]);
}
