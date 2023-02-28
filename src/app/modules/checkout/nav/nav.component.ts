import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { PersonalDataService } from '../personal-data.service';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements AfterViewInit, OnDestroy {
  @ViewChild('list', { read: ElementRef, static: false }) navList: ElementRef;
  event$;
  routeName: string;
  navChildrenArray: any[];

  constructor(private router: Router, public form: PersonalDataService) {
    this.routeName = router.url.split('/').pop()!;
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.routeName = event.url.split('/').pop()!;
        this.removeDisabledClass();
      }
    });
  }

  findElement() {
    const navChildrenArray = [...this.navList.nativeElement.children];
    const findRouterlinkAttributeValue = (el: any) => {
      const attributes: any[] = [...el.attributes];
      return attributes.find((el: any) => el.name === 'routerlink').value;
    };
    return navChildrenArray.find((el: any) => findRouterlinkAttributeValue(el) === this.routeName);
  }

  public removeDisabledClass() {
    if (this.routeName === 'checkout') {
      return;
    }
    const navRouterElement = this.findElement();
    navRouterElement.classList.remove('disabled');
  }

  ngAfterViewInit() {
    this.removeDisabledClass();
  }

  public createNewOrder() {
    if (confirm('Delete current order and create new?')) {
      this.form.resetForm();
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}
