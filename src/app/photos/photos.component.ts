import { Component, OnInit } from '@angular/core';
import {PhotoservicesService} from './../photoservices.service';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  result:any;
  constructor(private pc: PhotoservicesService) {}


  ngOnInit() {
      

    
    this.pc.getData().subscribe( (res) => {


      this.result = res;
      console.log(this.result)
    })
  

  }

}







