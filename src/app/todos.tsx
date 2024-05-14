"use server"
import { RepositoryTodo } from "@/data/repositories/repository_todo";

export async function Todos() {
    const repository = new RepositoryTodo();
    const todos = await repository.findAllTodo();
    return (
        <div>
            {
                todos.map((todo) => (
                    <p key={todo.id} style={{
                        textDecoration: todo.status === "PENDING" ? 'line-through' : ''
                    }}>{todo.title}</p>
                ))
            }
        </div>
    )

}