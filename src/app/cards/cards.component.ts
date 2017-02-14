import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  type: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.type = params['type'];
    });

    // this.type = this.route.snapshot.params['type'];
  }
gotocards(type){
  this.router.navigate(['/cards/', type]);
  // this.router.navigateByUrl('/cards/' + type);
}

}
