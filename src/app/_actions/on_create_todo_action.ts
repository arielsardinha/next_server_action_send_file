"use client"
import FormData from 'form-data';
import { CreateTodoRequest, RepositoryTodo, ResponseTodos } from "@/data/repositories/repository_todo";

interface Action extends Omit<CreateTodoRequest, 'file'> {
    file: Uint8Array;
}

function arrayBufferToFile(uintArray: Uint8Array, fileName: string, mimeType: string): FormData {
    const form = new FormData();
    const buffer = Buffer.from(uintArray);
    form.append('file', buffer, { filename: fileName, contentType: mimeType });
    return form;
}

export async function onCreateTodoAction(paramns: Action): Promise<ResponseTodos> {
    const fileName = "example.txt";
    const mimeType = "text/plain";
    const file = arrayBufferToFile(paramns.file, fileName, mimeType);
    console.log({ file })
    return {} as ResponseTodos
}