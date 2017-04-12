import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
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

  constructor(private activatedRoute: ActivatedRoute, public sampleService: SampleService,
              private router: Router) { }

  ngOnInit() {
    // this.name_id = this.activatedRoute.snapshot.params['id'];

    this.activatedRoute.params.subscribe((params: Params) => {
      this.name_id = parseInt(params['id']);
    });

  }

  visitPrevious(){
    let preiviousId = this.name_id - 1;
    this.router.navigate(['names', preiviousId]);
  }

  visitNext(){
    let nextId = this.name_id + 1;
    this.router.navigate(['names', nextId]);
  }
}
