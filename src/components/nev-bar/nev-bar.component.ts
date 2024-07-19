import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-nev-bar',
  standalone: true,
  imports: [MatIconModule, MatMenuModule],
  templateUrl: './nev-bar.component.html',
  styleUrl: './nev-bar.component.scss'
})
export class NevBarComponent {

}
