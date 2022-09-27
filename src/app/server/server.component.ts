import { Component, OnInit } from "@angular/core";


@Component({
    selector: "app-server",
    templateUrl: "../server/server.component.html",
    styleUrls: ["../server/server.component.css"]

})

export class serverComponent implements OnInit {
    // property binding: 
    allowNewServer = false;

    // event Binding: 
    serverCreationStatus = "No server was created !";

    constructor() {
        // property Binding:
        setTimeout(() => {
            this.allowNewServer = true;
        }, 5000);
    }

    // String Interpolation : 
    serverId: number = 12;
    serverStatus: string = "Online";

    // property Binding: 

    getServerStatus() {
        return this.serverStatus;
    }

    ngOnInit(): void {

    }

    // event binding 
    onCreateServer() {
        this.serverCreationStatus = "server was created !"
    };


    // server name:
    serverName: string;

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
        // console.log(event.target.value);

        // this.serverName = event.target.value

    }
}