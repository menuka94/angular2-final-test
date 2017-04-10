import {Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'AngularFire 2';
  constructor(private af: AngularFire){
    const courses$ : FirebaseListObservable<any> = af.database.list('messages');
    courses$.subscribe(val => console.log(val));
  }
}

