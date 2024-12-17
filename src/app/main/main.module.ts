import {NgModule} from '@angular/core';
import {MainComponent} from "./main.component";
import {RouterModule} from "@angular/router";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import { ContentsComponent } from '../contents/contents.component';
import { HeaderComponent } from '../header/header.component';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        // 기본 맵 윈도우 오픈
        {
          path: '',
          redirectTo: '',
          pathMatch: 'full',
        },
        // 기본 맵 윈도우 오픈
        {
          path: '',
          component: MainComponent,
        },
      ]),
      NgForOf,
      NgIf,
      NgClass
    ],
    declarations: [
      ProfileComponent,
      MainComponent,
      HeaderComponent,
      ContentsComponent
    ]
  })
  export class MainModule { }
  