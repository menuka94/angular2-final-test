import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {SampleService} from "./sample.service";
import {Router} from "@angular/router";

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

  onSelect(name: any){
    this.router.navigate(['names', name.id]);
  }

  constructor(private af: AngularFire, public _sampleService: SampleService, private router: Router){
    const courses$ : FirebaseListObservable<any> = af.database.list('messages');
    courses$.subscribe(val => console.log(val));
  }

  ngOnInit(){
    this._sampleService.getNames()
      .subscribe(resSampleData => this.names = resSampleData,
                 resSampleError => this.errorMessage = resSampleError);
  }

}

