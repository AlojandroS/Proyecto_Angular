import { Component } from '@angular/core';
import { headerLinks } from './config/header.config';
import { HeaderLInk } from './models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

public headerLinksElements: HeaderLInk[] = headerLinks

}
