import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() value: string | undefined;
  @Input() error: string | undefined;
  @Input() name: string | undefined;
  @Input() type: string | undefined;
  @Input() getValue: ((val: string) => void) | undefined;
 
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
