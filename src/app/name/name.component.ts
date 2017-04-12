import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {SampleService} from "../sample.service";

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  public names: any;
  public errorMessage: string;
  public name: any;
  public name_id: number;

  constructor(private activatedRoute: ActivatedRoute, public sampleService: SampleService) { }

  ngOnInit() {
    this.name_id = this.activatedRoute.snapshot.params['id'];

    // this.sampleService.getNames()
    //   .subscribe(resSampleData => this.names = resSampleData,
    //     resSampleError => this.errorMessage = resSampleError);
    // for(let name in this.names){
    //   if(name['id'] == id){
    //     this.name = name;
    //   }
    // }

  }
}
