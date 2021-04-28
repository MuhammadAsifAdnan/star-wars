import { Component, ChangeDetectionStrategy } from '@angular/core';

import { EnumSections } from '../../enums/section.enum';
import { Nav } from '../../models/nav.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  badge = 'Star Wars';
  navList: Nav[] = [
    { displayName: EnumSections.Movies, path: 'movies' },
    { displayName: EnumSections.Characters, path: 'characters' },
  ];
  constructor() { }
  navListTrackBy = (index: number, nav: Nav) => nav.displayName;

}
