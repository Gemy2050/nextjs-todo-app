import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET() {
  try {
    const todo = await prisma.todo.findMany();
    console.log(todo);
    return Response.json({ todo }, { status: 200 });
  } catch (error) {
    return Response.json({ theError: error });
  }
}
