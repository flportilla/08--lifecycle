import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sample-name',
  templateUrl: './sample-name.component.html',
  styles: [
  ]
})
export class SampleNameComponent implements OnInit, OnChanges {
  
  @Input() name!: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
  }

  ngOnInit(): void {
  }

}
