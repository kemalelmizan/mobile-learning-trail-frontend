// Copyright (C) 2016-2017 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg

import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { SimpleDndComponent } from 'src/simple-dnd';
import { ZoneDndComponent } from 'src/zone-dnd';
import { CustomDataDndComponent } from 'src/custom-data-dnd';
import { CustomFunctionDndComponent } from 'src/custom-function-dnd';
import { ShoppingBasketDndComponent } from 'src/shopping-basket-dnd';

import { SimpleSortableComponent } from 'src/simple-sortable';
import { RecycleMultiSortableComponent } from 'src/recycle-multi-sortable';
import { SimpleSortableCopyComponent } from 'src/simple-sortable-copy';
import { MultiSortableComponent } from 'src/multi-sortable';
import { EmbeddedSortableComponent } from 'src/embedded-sortable';

import { DndModule } from 'ng2-dnd';

@Component({
  selector: 'my-app',
  template: `
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="https://github.com/akserg/ng2-dnd">NG2-DnD</a>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a [routerLink]="['/simple']">Simple DnD</a></li>
            <li><a [routerLink]="['/simple-zone']">Zone Areas</a></li>
            <li><a [routerLink]="['/simple-custom-data']">Custom Data</a></li>
            <li><a [routerLink]="['/simple-custom-function']">Custom Functions</a></li>
            <li><a [routerLink]="['/simple-shopping']">Shopping Example</a></li>
            <li role="separator" class="divider"></li>
            <li><a [routerLink]="['/sortable']">Sortable</a></li>
            <li><a [routerLink]="['/sortable-recycle']">Recycle bin</a></li>
            <li><a [routerLink]="['/sortable-copy']">Copy example</a></li>
            <li><a [routerLink]="['/sortable-multy']">Multi Sortable</a></li>
            <li><a [routerLink]="['/sortable-embedded']">Embedded</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
<router-outlet></router-outlet>`,
  styles: []
})
export class App {

}

@NgModule({
  imports: [ BrowserModule, DndModule.forRoot(), FormsModule, 
    RouterModule.forRoot([
      { path: '', redirectTo: '/simple', pathMatch: 'full' },
      { path: 'simple', component: SimpleDndComponent },
      { path: 'simple-zone', component: ZoneDndComponent },
      { path: 'simple-custom-data', component: CustomDataDndComponent },
      { path: 'simple-custom-function', component: CustomFunctionDndComponent },
      { path: 'simple-shopping', component: ShoppingBasketDndComponent },
      
      { path: 'sortable', component: SimpleSortableComponent },
      { path: 'sortable-recycle', component: RecycleMultiSortableComponent },
      { path: 'sortable-copy', component: SimpleSortableCopyComponent },
      { path: 'sortable-multy', component: MultiSortableComponent },
      { path: 'sortable-embedded', component: EmbeddedSortableComponent },
    ])
  ],
  declarations: [ App, 
    SimpleDndComponent, ZoneDndComponent, CustomFunctionDndComponent, CustomDataDndComponent, ShoppingBasketDndComponent, 
    SimpleSortableComponent, RecycleMultiSortableComponent, SimpleSortableCopyComponent, MultiSortableComponent, EmbeddedSortableComponent,
  ],
  bootstrap: [ App ]
})
export class AppModule {
  
}