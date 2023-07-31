import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Felipe-Rod';
  users: any;

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get("https://localhost:7246/api/users").subscribe(d=>{
      this.users=d;
      console.log(this.users);
    });
  }
}
