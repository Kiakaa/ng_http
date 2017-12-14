import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results = '';
  
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
      console.log("User Login: " + data.login);
      console.log("Bio: " + data.bio);
      console.log("Company: " + data.company);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client-side error occured.");
      } else {
        console.log("Server-side error occured.");
      }
    }
  );
  }
}
interface UserResponse {
  login: string;
  bio: string;
  company: string;
}