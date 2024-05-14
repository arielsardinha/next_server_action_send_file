"use client"
import { onCreateTodoAction } from "./_actions/on_create_todo_action";
import { FormEvent } from "react";

export default function Home() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();

    const name_todo = (event.target as HTMLFormElement).elements.namedItem('name_todo') as HTMLInputElement;

    try {

      await onCreateTodoAction({ dueDate: new Date(), title: name_todo.value });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <label>
        Nome da tarefa:
        <input type="text" name="name_todo" />
      </label>

      <input type="submit" value="Enviar" />
    </form>
  );
}
