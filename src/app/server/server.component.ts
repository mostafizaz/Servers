import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {
  serverId = 100;
  private  serverStatus = '';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
