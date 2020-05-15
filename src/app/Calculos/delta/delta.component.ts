import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'bha-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css']
})
export class DeltaComponent implements OnInit {


  DeltaForm: FormGroup;
  Delta: number;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.DeltaForm = this.fb.group({
      A: this.fb.control(''),
      B: this.fb.control(''),
      C: this.fb.control(''),
    }),{ Validators: Validators.required }

  }

  CallDelta( A: number, B: number, C: number){
    this.Delta =  (( B * B) - ( 4 * A * C ));
  }

}
