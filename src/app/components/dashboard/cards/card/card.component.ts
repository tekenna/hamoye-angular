import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() text: string | undefined;
  @Input() value: string | undefined;

  constructor() {}
  ngOnInit(): void {}
}
