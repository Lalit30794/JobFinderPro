import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonTabBar,
  IonTabs,
  IonTabButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  personOutline,
  heartOutline,
  chatboxEllipsesOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonTabButton,
    IonTabs,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonTabBar,
  ],
})
export class TabPage implements OnInit {
  constructor() {
    addIcons({
      homeOutline,
      personOutline,
      heartOutline,
      chatboxEllipsesOutline,
    });
  }

  ngOnInit() {}
}
