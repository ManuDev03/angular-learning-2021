import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({providedIn: 'root'})
export class ApiService {

    constructor(private _http : HttpClient) {}
    // create employee
    postEmployee(data : any) {
        return this._http.post<any>("http://localhost:3000/posts", data).pipe(map((res : any) => {
            return res
        }))
    }

    // get employee details
    getEmployee(data : any) {
        return this._http.get<any>("http://localhost:3000/posts", data).pipe(map((res : any) => {
            return res
        }))
    }

    // update employee details
    updateEmployee(data : any, id : number) {
        return this._http.put<any>("http://localhost:3000/posts" + id, data).pipe(map((res : any) => {
            return res
        }))
    }

    // delete employee details
    deleteEmployee(data : any, id : number) {
        return this._http.delete<any>("http://localhost:3000/posts" + id, data).pipe(map((res : any) => {
            return res
        }))
    }
}
