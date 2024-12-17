import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  public menu: boolean = false;
  public Menu: boolean = false;
  ClickMenu(){
    this.menu = !this.menu;
  }
  MenuBlack(){
    this.Menu=true;
  }
}
