import {Component} from "@angular/core";
import { jointeam_mock_list } from "./jointeam_mock_list";
import { ProductItemModels } from "./jointeammodel";
import { HorizontalCardComponent } from "../horizontal.card.component";
@Component({
    selector:'fm-jointeam',
    templateUrl:'jointeam.html',
    styleUrls:['jointeam.css']
})
export class JoinTeamComponent{
    title = 'team-cards';
    team: ProductItemModels [] = [];
    teamcards: HorizontalCardComponent[] = [];

    constructor(){
        for(var product of jointeam_mock_list) {
            console.log(product);
            this.team.push(product);
        }
    }
}