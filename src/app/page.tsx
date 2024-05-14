"use client"
import { onCreateTodoAction } from "./_actions/on_create_todo_action";
import { FormEvent } from "react";

export default function Home() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {

    event.preventDefault();
    const formElements = (event.target as HTMLFormElement).elements;
    const nameTodoInput = formElements.namedItem('name_todo') as HTMLInputElement;
    const fileInput = formElements.namedItem('file') as HTMLInputElement;

    const file = fileInput.files ? fileInput.files[0] : null;

    try {

      if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const buffer = e.target!.result;
          const uintArray = new Uint8Array(buffer as ArrayBuffer);
          console.log(uintArray)
          await onCreateTodoAction({ dueDate: new Date(), title: nameTodoInput.value, file: uintArray });
        }

        reader.onerror = (e) => {
          console.error('File reading has failed', e);
        }
        reader.readAsArrayBuffer(file);
      }


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
      <br />
      <label>
        Enviar arquivo:
        <input type="file" name="file" />
      </label>

      <input type="submit" value="Enviar" />
    </form>
  );
}
