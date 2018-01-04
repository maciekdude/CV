import { Component, Injectable } from '@angular/core';

import { LoopbackLoginService } from '../../auth/loopback/lb-login.service';

@Component({
  selector: 'app-bs-simple-sidebar',
  templateUrl: 'bs-simple-sidebar.component.html',
  styleUrls: ['bs-simple-sidebar.component.css']
})
@Injectable()
export class BsSimpleSidebarComponent {

  public isToggled: boolean = false;

  constructor(private authService: LoopbackLoginService) { }

  onToggled() {
    this.isToggled = (this.isToggled ? false : true);
  }

}
