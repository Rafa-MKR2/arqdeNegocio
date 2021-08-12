import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AuthUrl: string = environment.oauth.authenticate
  constructor(private http : HttpClient) { }



  authenticate(email: string, senha : string){
    let formData = new FormData();
    formData.append('username', email);
    formData.append('password', senha);
    formData.append('grant_type', senha)

    let header = btoa(email+':'+senha)

   return  this.http.post(this.AuthUrl, formData, { headers: {'Authorization': header}, observe: 'response'})
   .pipe(tap(res=>{
     const authToken: any = res.body;

     if(authToken.access_token)
     localStorage.setItem('authToken', authToken.access_token)


   }))



  }
}
