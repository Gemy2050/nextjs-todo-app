import { getUserTodoListAction } from "@/actions/todo.action";
import AddTodoForm from "@/components/AddTodoForm";
import Nav from "@/components/Nav";
import { TodoTable } from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  const todos = await getUserTodoListAction(userId);

  return (
    <div className="container mx-auto px-5 pb-5 font-[family-name:var(--font-geist-sans)]">
      <Nav />
      <div className="my-5 flex justify-between">
        <AddTodoForm userId={userId} />
      </div>
      <TodoTable todos={todos} />
    </div>
  );
}
