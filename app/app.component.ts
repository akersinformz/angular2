// import the Angular Component decorator function
import {Component} from 'angular2/core';

/**
 * Component is a decorator function that takes a metadata object. 
 * The metadata tell Angular how to create and use this component
 * NOTE: Semicolon after the Component decorator causes the following error
 *  No Directive annotation found on AppComponent
 */
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})

/**
 * Component class
 * We export AppComponent so that we can import it elsewhere in our application
 */
export class AppComponent{}