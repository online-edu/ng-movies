import { Injectable, Injector, ComponentFactoryResolver } from "@angular/core";
import { CanDeactivate } from "@angular/router";

import { MovieComponent } from "../admin/movie/movie.component";
/**
 * `DeactivateGuard` is available as an injectable class to notify user before navigating.
 */
@Injectable()
export class DeactivateGuard implements CanDeactivate<MovieComponent> {
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
  canDeactivate(component: MovieComponent) {
    if (!component) {
      return this.componentFactoryResolver
        .resolveComponentFactory(MovieComponent)
        .create(this.injector)
        .instance.canDeactivate();
    }
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
