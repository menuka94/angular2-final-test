import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {SampleService} from "./sample.service";
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SampleService]
})

export class AppComponent implements OnInit{
  title = 'AngularFire 2';
  errorMessage: string;
  names: any;
  public selectedId;

  onSelect(name: any){
    this.router.navigate(['names', name.id]);
  }

  constructor(private af: AngularFire, public _sampleService: SampleService, private router: Router,
              private activatedRoute: ActivatedRoute){
    const courses$ : FirebaseListObservable<any> = af.database.list('messages');
    courses$.subscribe(val => console.log(val));
  }

  isSelected(name: any){
    return name.id === this.selectedId;
  }

  ngOnInit(){
    this._sampleService.getNames()
      .subscribe(resSampleData => this.names = resSampleData,
                 resSampleError => this.errorMessage = resSampleError);

    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedId = parseInt(params['id']);

    })
  }

}

