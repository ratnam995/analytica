import { Component } from '@angular/core';
import { HttpService } from './shared/services/http-service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any=[];
  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.getData()
    .then((data)=>{
      this.data= data;
      console.log(data);
    })
  }
  
}
