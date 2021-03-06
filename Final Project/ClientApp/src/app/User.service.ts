import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
// import { Convert } from './Park';

// import { ParkDetailsComponent } from './park-details/park-details.component';
// import { UserPark } from './UserPark';


@Injectable({ providedIn: 'root' })
export class UserService {

    url: string = "User";
    users?: User[] = [];
    loggedInUser?: User;

    constructor(private http: HttpClient, @Inject('BASE_URL') baseURL: string) {
        this.url = baseURL + this.url;
    }

    GetUsers(): Observable<object> {
        return this.http.get(this.url + "/users");
    }

    GetUser(userId: number): Observable<object> {
        return this.http.get(this.url + "/userId=" + userId);
    }

    UpdateUser(userId: number, user: User) {
        return this.http.put(this.url + "/updateUser=" + userId, user);
    }

    GetLoggedInUser(cb: any) {
        this.http.get(this.url + "/getLoggedInUser").subscribe(
            (response: any) => {
                cb(response);
            }
        );

    }
    AddParkToUserList(parkCode: string, user: User) {
        this.http.post(this.url + "/addUserPark=" + parkCode, user).subscribe(
            (result: any) => { console.log(result) }
        );
    }

    ValidateUser(username: string, password: string): boolean {
        let valid: boolean;
        this.http.get(this.url + "/loginu=" + username + "p=" + password).subscribe(
            (response: any) => {
                valid = response;
                if (valid === true) {
                    location.reload();
                }
            });
        return valid;
    }

    LogOutUser(user: User) {
        this.http.put(this.url + "/logout", user).subscribe(
            (response: any) => {
                location.reload();
            }
        );
    }

    GetUserList(id: number): Observable<any> {
        let apiurl: string = this.url + "/userParkList" + id;
        let result: Observable<any> = this.http.get(apiurl);
        return result;
    }
}