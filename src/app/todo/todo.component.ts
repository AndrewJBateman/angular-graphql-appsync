import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
	allTodos: any = [];

	constructor(private api: APIService) { }

	async ngOnInit() {
		const result = await this.api.ListTodos();
		this.allTodos = result.items;

		// on init subscribe to all todos
		this.api.OnCreateTodoListener.subscribe({
			next: (todo: any) => {
				const newTodo = todo.value.data.onCreateTodo;
				this.allTodos.push(newTodo);
			}
		});
	}

	async createTodo(todoName) {
		if (todoName.value.length) {
			const newTodo = {
				name: todoName.value,
				body: 'sample description',
				completed: false
			};
			await this.api.CreateTodo(newTodo);
			todoName.value = null;
		}

	}

	async listTodos() {
		const result = await this.api.ListTodos();
		this.allTodos = result.items;
	}

}
