import {Component} from "@angular/core";
import { team_mock_list } from "./team_mock_list";
import { ProductItemModels } from "./teammodel";
import { HorizontalCardComponent } from "../horizontal.card.component";
@Component({
    selector:'fm-team',
    templateUrl:'team.html',
    styleUrls:['team.css']
})
export class TeamComponent{
    title = 'team-cards';
    team: ProductItemModels [] = [];
    teamcards: HorizontalCardComponent[] = [];

    constructor(){
        for(var product of team_mock_list) {
            console.log(product);
            this.team.push(product);
        }
    }
}