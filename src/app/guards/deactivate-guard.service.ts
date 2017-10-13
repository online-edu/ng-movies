import { Injectable, Injector, ComponentFactoryResolver } from '@angular/core';
import { CanDeactivate } from "@angular/router";

import { MovieComponent } from "../admin/movie/movie.component";

@Injectable()
export class DeactivateGuard implements CanDeactivate<MovieComponent> {

    constructor(
        private injector: Injector,
        private componentFactoryResolver: ComponentFactoryResolver) { }

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