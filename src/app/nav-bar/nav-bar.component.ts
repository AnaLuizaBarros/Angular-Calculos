import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'bha-nav-bar',
  templateUrl: './nav-bar.component.html',
  animations: [
    trigger('hover',[
      state('open', style({
        opacity: 1,
        top: '100%',
        transform: 'rotateX(0deg)',
        display: 'block'
      })),
      state('close', style({
        display: 'block',
         opacity: 0
      })),
      transition('close => open', [
        animate('1s')
      ]),
      transition('open => close', [
        animate('1s')
      ]),
    ]),
  ],

})
export class NavBarComponent implements OnInit {

 currentState =  'close';

  constructor() { }

  ngOnInit(): void {

  }

ChangeState(){
  this.currentState = this.currentState === 'open' ? 'close' : 'open';

}

}
