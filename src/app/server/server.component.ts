import { Component } from "@angular/core";


@Component({
    selector: "app-server",
    templateUrl: "../server/server.component.html",
    styleUrls: ["../server/server.component.css"]

})

export class serverComponent {


    serverId: number = 12;
    serverStatus: string = "Online";
}