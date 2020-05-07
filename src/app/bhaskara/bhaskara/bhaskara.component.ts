import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'bha-bhaskara',
  templateUrl: './bhaskara.component.html',
  styleUrls: ['./bhaskara.component.css']
})
export class BhaskaraComponent implements OnInit {

  BhaskForm: FormGroup;
  XL1: number;
  XL2: number;
  constructor( private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.BhaskForm = this.fb.group({
      A: this.fb.control(''),
      B: this.fb.control(''),
      Delta: this.fb.control('')
    }), { Validators: Validators.required }


  }

  Bhas(a: number, b: number, delta: number): void{
    this.XL1 =  - (b + Math.sqrt(delta)) / ( 2 * a );
    this.XL2 = -(b - Math.sqrt(delta)) / ( 2 * a );

  }

}
