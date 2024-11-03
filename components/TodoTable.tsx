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

import { ITodo } from "@/interfaces";
import { Badge } from "@/components/ui/badge";

import TodosTableActions from "./TodosTableActions";

interface IProps {
  todos: ITodo[];
}

export function TodoTable({ todos }: IProps) {
  return (
    <Table className="!min-w-[900px]">
      <TableCaption> your recent todo.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Body</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo, idx) => (
          <TableRow key={todo.id}>
            <TableCell>{idx + 1}</TableCell>
            <TableCell className="font-medium line-clamp-1 ">
              {todo.title}
            </TableCell>
            <TableCell title={todo.body || ""}>
              {(todo.body?.length as number) > 110
                ? todo.body?.slice(0, 110) + "..."
                : todo.body}
            </TableCell>
            <TableCell>
              {todo.completed ? (
                <Badge>completed</Badge>
              ) : (
                <Badge variant="secondary">uncompleted</Badge>
              )}
            </TableCell>
            <TableCell className="flex justify-end items-center gap-4">
              <TodosTableActions todo={todo} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">{todos.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
