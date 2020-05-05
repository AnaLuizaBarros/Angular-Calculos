import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'bha-bhaskara',
  templateUrl: './bhaskara.component.html',
  styleUrls: ['./bhaskara.component.css']
})
export class BhaskaraComponent implements OnInit {

  BhaskForm: FormGroup;
  X: number;
  XX: number;
  constructor( private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.BhaskForm = this.fb.group({
      A: this.fb.control(''),
      B: this.fb.control(''),
      Delta: this.fb.control(''),
      X1: this.fb.control(''),
      X2: this.fb.control(''),
    }), { Validators: Validators.required }


  }

  Bhas(a: number, b: number, delta: number): void{
    this.X =  - (b + Math.sqrt(delta)) / ( 2 * a );
    this.XX = -(b - Math.sqrt(delta)) / ( 2 * a );

  }

}
