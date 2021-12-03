import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-icpc',
  templateUrl: './icpc.component.html',
  styleUrls: ['./icpc.component.scss']
})
export class ICPCComponent implements OnInit {

  data: Object | any;
// Dependency Injection
  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.myICPCAPI().subscribe(data =>{
      this.data = data;
      console.log(this.data)
    });
  }

}
