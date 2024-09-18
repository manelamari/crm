import { Component } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(private versionService: VersionService) {
    console.log('Nav component : ', this.versionService.numVersion$);
  }
  increment() {
    this.versionService.incrementVersion();
  }
}
