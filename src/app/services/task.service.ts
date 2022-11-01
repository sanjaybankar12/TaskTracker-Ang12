import { Injectable } from '@angular/core';

import { TASKS } from '../mock-tasks';
import { Task } from '../task.model';
import { Observable, of } from 'rxjs';

import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl:string = "http://localhost:5000/tasks"; 
  options = {
    headers: new HttpHeaders({'Accept':'application/json','Content-Type':'application/json'})
  };

  constructor(private http:HttpClient) { }
  getTasks() : Observable<Task[]> {       
    return this.http.get<Task[]>(this.apiUrl, this.options);
  }

  deleteTask(task:Task) : Observable<Task> {
      const url = `${this.apiUrl}/${task.id}`;
      return this.http.delete<Task>(url);
  }

  updateTaskRemider(task:Task) :Observable<Task> {
      const url = `${this.apiUrl}/${task.id}`;
      task.reminder = !task.reminder;
      return this.http.put<Task>(url,task,this.options);
  }

  addTask(task:Task) : Observable<Task> {
      return this.http.post<Task>(this.apiUrl,task, this.options);
  }
}
