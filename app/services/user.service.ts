import * as jwt_decode from "jwt-decode";
import { User } from "../models/user.model";
import { Constants } from "./constants.service";
import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
@Injectable()
export class UserService {
    constructor(private httpService: HttpService) {

    }
     clearCurrentUser() {
        localStorage.setItem("currentUser", null);
    }
     setCurrentUser(currentUser: User) {
        if (currentUser)
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
    changePassword(oldPassword,newPassword) {
        let user = this.getCurrentUser();
        return this.httpService.invoke({
            method: 'POST',
            url: Constants.webURL,
            path: '/Parent/changePassword/GetKid',
            body: {
                username: user.username,
                oldPassword: oldPassword,
                newPassword: newPassword
            }
        });
    }
    private getCurrentUser() {
        let user = localStorage.getItem("currentUser");
        if (user) {
            return <User>JSON.parse(user);
        }
        return null;
    }
    getAuthToken() {
        let user: User = this.getCurrentUser();
        if (user) {
            return user.token;
        }
        return '';
    }
    isTokenExpired() {
        let token = this.getAuthToken()
        if (!token || token == "") return true
        const decoded = jwt_decode(token);
        if (decoded.exp === undefined) return true;
        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        if (date === undefined) return true;
        return !(date.valueOf() > new Date().valueOf());
    }
}