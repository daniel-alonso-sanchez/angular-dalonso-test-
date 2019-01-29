import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from 'rxjs';
import { IUser } from '../model/iuser';
@Injectable()
export class MockUsersService {
    fakeData: IUser[] = [];
    constructor() {
        let modal: IUser = {
            id: 1,
            name: 'peter parker',
            username: 'pparker',
            email: 'pparker@marvel.com',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: ''
                }
            }
        };
        this.fakeData.push(modal);
    }
    getData(): Observable<IUser[]> {
        return of(this.fakeData);
        ;
    }
}