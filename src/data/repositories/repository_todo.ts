export interface CreateTodoRequest {
    title: string;
    dueDate: Date;
}

export interface ResponseTodos {
    id: number;
    title: string;
    dueDate: string;
    doneDate?: any;
    status: string;
    createdAt: string;
    updatedAt: string;
}


export class RepositoryTodo {
    private BASE_URL = 'https://alunos.treinaweb.com.br/tw-todos/api/v1';
    async createTodo({ dueDate, title }: CreateTodoRequest): Promise<ResponseTodos> {
        const response = await fetch(`${this.BASE_URL}/todos`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                dueDate: dueDate.toISOString(),
            }),
        });
        if (!response.ok) {
            throw '';
        }
        return await response.json();
    }

    async findAllTodo(): Promise<ResponseTodos[]> {
        const response = await fetch(`${this.BASE_URL}/todos`);
        if (!response.ok) {
            throw '';
        }
      
        return await response.json();
    }

}