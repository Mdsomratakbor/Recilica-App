import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {
  @Input() hasHeader:boolean=false;
  @Input() hasFooter:boolean=false;

  @Input() status:string='';
  @Input() updatedAt:string='';
  @Input() createdAt:string='';
  @Input() notes:string='';
  @Input() totalAmount:number=0;
  constructor() { }

  ngOnInit() {}

}
