"use server"

import { CreateTodoRequest, RepositoryTodo, ResponseTodos } from "@/data/repositories/repository_todo";


export async function onCreateTodoAction(paramns: CreateTodoRequest): Promise<ResponseTodos> {
    const repository = new RepositoryTodo();

    return await repository.createTodo(paramns);

}