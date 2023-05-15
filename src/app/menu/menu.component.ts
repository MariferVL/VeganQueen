import { Component, OnInit } from '@angular/core';
import { Menu } from '../types';
import { fakeMenu } from '../fake-data';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  menus: Menu[] = [];

  constructor(
    private titleService: Title
    ) {}

  ngOnInit() {
    this.titleService.setTitle('VQ - Menu');
    this.menus = fakeMenu;
  }

}
