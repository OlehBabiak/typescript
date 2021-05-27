import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../models/Todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
@Input()
userId: number
  todos: Todo[] = []
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  this.todoService.getTodosByUserID(this.userId).subscribe(value => {
    this.todos = value
  })
  }

}
