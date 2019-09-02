import { Directive, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(private el: ElementRef, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment && this.el.nativeElement && this.el.nativeElement.id === fragment) {
        console.log('asdfkjkj')
        this.el.nativeElement.scrollIntoView({ behavior: "smooth", block: 'start'  });
      }
    });
  }


}
