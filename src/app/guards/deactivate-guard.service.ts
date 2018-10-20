import { Injectable, Injector, ComponentFactoryResolver } from "@angular/core";
import { CanDeactivate } from "@angular/router";

import { MovieAddComponent } from "../admin/movie-add/movie-add.component";
/**
 * `DeactivateGuard` is available as an injectable class to notify user before navigating.
 */
@Injectable()
export class DeactivateGuard implements CanDeactivate<MovieAddComponent> {
  /**
   * @constructor
   * @param {Injector} injector to inject
   * @param {ComponentFactoryResolver} componentFactoryResolver to load component on the fly
   */
  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}
  /**
   * Confirm it from user before changing route.
   * @param {MovieComponent} component
   * @return {boolean}
   */
  canDeactivate(component: MovieAddComponent) {
    if (!component) {
      return this.componentFactoryResolver
        .resolveComponentFactory(MovieAddComponent)
        .create(this.injector)
        .instance.canDeactivate();
    }
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
