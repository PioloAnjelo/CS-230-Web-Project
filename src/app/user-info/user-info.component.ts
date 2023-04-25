import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';

@Injectable()
@Component({
    selector: 'website-user-info',
    templateUrl: './user-info.component.html'
})

export class UserInfoComponent implements OnInit {
    myInfo: UserInfo| undefined;
    constructor(private http: HttpClient) {

    }
    ngOnInit(): void {
        console.log('Sending request to the server');
        this.getUserInfo();
        console.log('Registering showUserInfo as a subscriber');
        this.showUserInfo();
    }
    getUserInfo() {
        return this.http.get<UserInfo>('https://cs230websitelab-default-rtdb.firebaseio.com/My-Info.json');
    }

    showUserInfo() {
        this.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }
}
