import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.scss']
})
export class C1Component implements OnInit {


  @Input() pgNumber !: number ;
  constructor() { }

  ngOnInit(): void {
  }

}
