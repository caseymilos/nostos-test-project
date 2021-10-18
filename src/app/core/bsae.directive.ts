import {Directive, OnDestroy} from "@angular/core";
import {ReplaySubject} from "rxjs";

@Directive()
export abstract class BaseDirective implements OnDestroy {
  protected destroyed$ = new ReplaySubject<void>();

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
