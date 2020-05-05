import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'bha-bhaskara',
  templateUrl: './bhaskara.component.html',
  styleUrls: ['./bhaskara.component.css']
})
export class BhaskaraComponent implements OnInit {

  BhaskForm: FormGroup;

  constructor( private fb: FormBuilder) {

   }

  ngOnInit(): void {
    this.BhaskForm = this.fb.group({
      A: this.fb.control(''),
      B: this.fb.control(''),
      Delta: this.fb.control('')
    }), { Validators: Validators.required }
  }

  X1(a: number, b: number, delta: number): number{
    return -b + Math.sqrt(delta) / ( 2 * a );
  }
  X2(a: number, b: number, delta: number): number{
    return -b - Math.sqrt(delta) / ( 2 * a );
  }
}
