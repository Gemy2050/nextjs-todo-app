"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import Spinner from "./Spinner";
import { deleteTodoAction } from "@/actions/todo.action";
import { ITodo } from "@/interfaces";
import EditTodoForm from "./EditTodoForm";

export default function TodosTableActions({ todo }: { todo: ITodo }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        disabled={isLoading}
        onClick={async () => {
          setIsLoading(true);
          await deleteTodoAction(todo.id);
          setIsLoading(false);
        }}
      >
        {isLoading ? <Spinner /> : <Trash />}
      </Button>
    </>
  );
}
