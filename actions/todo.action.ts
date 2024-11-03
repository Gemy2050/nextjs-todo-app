"use server";

import { FormSchemaType } from "@/validation";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getUserTodoListAction = async (userId: string | null) => {
  return await prisma.todo.findMany({
    where: { userId: userId as string },
    orderBy: { createdAt: "desc" },
  });
};

export const createTodoAction = async (
  data: FormSchemaType & { userId: string | null }
) => {
  await prisma.todo.create({
    data: { ...data, userId: data.userId as string },
  });
  revalidatePath("/");
};

export const deleteTodoAction = async (id: string) => {
  await prisma.todo.delete({
    where: { id },
  });
  revalidatePath("/");
};

export const updateTodoAction = async (id: string, todo: FormSchemaType) => {
  await prisma.todo.update({
    where: { id },
    data: {
      title: todo.title,
      body: todo.body,
      completed: todo.completed,
    },
  });
  revalidatePath("/");
};
