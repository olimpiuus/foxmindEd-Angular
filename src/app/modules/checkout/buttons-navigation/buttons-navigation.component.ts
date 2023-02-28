import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { PersonalDataService } from '../personal-data.service';

@Component({
  selector: 'app-buttons-navigation',
  templateUrl: './buttons-navigation.component.html',
  styleUrls: ['./buttons-navigation.component.sass']
})
export class ButtonsNavigationComponent implements OnDestroy {
  event$;
  route: string;
  activeForm: FormGroup;
  activeFormRoute: string;

  constructor(private router: Router, public form: PersonalDataService) {
    this.route = router.url;
    this.checkBtn();
    this.event$ = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.route = event.url;
        this.checkBtn();
      }
    });
  }

  public get validBtnNext() {
    if (this.activeFormRoute === 'summarize') {
      return false;
    }
    if (this.activeFormRoute === 'address') {
      return !this.activeForm.valid || !this.form.getForm().get('personalInfo')!.valid
        ? true
        : false;
    }
    return this.activeForm.valid ? false : true;
  }

  public get btnNextText() {
    return this.activeFormRoute === 'summarize' ? 'submit' : 'next';
  }

  checkBtn() {
    this.activeFormRoute = this.route.split('/').pop()!;
    if (this.activeFormRoute === 'checkout') {
      return;
    }

    this.activeForm = this.form.getFormByRoute(this.activeFormRoute) as FormGroup;
  }

  public get nextPage() {
    return this.form.getNextFormRoute(this.activeFormRoute);
  }
  public get previousPage() {
    return this.form.getPreviousFormRoute(this.activeFormRoute);
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}
