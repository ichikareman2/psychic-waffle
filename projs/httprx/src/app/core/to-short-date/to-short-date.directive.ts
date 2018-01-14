import { Directive, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appToShortDate]'
})
export class ToShortDateDirective implements OnInit{
  ngOnInit(): void {
    this.el.nativeElement
  }

  constructor(private el:ElementRef) { }

}
