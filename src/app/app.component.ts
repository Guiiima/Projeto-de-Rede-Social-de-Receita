import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NevBarComponent } from '../components/nev-bar/nev-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NevBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GuimaReceitinhas';
}
