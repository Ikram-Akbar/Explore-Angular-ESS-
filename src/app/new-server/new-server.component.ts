import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styleUrls: ['./new-server.component.css']
})
export class NewServerComponent implements OnInit {

  // declare the server info 
  serverId: number = 10;
  serverStatus: string = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
   }

  
  getServerStatus() {
    return this.serverStatus; 
  }
  ngOnInit(): void {
  }

}
