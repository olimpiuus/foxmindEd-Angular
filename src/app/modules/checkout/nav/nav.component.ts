import { Component, ElementRef, ViewChild } from '@angular/core';
import { PersonalDataService } from '../personal-data.service';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent {
  @ViewChild('list',{ read: ElementRef, static:false }) navList:ElementRef
  event$;
  routeName: string;
  navChildrenArray: any[];

  constructor(private router: Router, public form: PersonalDataService) {
    this.routeName = router.url.split('/').pop()!;
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.routeName = event.url.split('/').pop()!
        this.removeDisabledClass()
      }
    });
  }


  public removeDisabledClass(){
    const navChildrenArray= [... this.navList.nativeElement.children]
    const findRouterlinkAttributeValue = (el:any)=>{
      const attributes:any[] = [...el.attributes]
      return attributes.find((el:any)=>el.name==='routerlink').value
    }
    const navRouterElement = navChildrenArray.find((el:any)=>findRouterlinkAttributeValue(el)=== this.routeName)
    navRouterElement.classList.remove('disabled')
  }

  ngAfterViewInit() {
    this.removeDisabledClass()
  }

  
}
