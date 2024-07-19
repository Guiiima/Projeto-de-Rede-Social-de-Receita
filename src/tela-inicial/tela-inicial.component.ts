import { Component } from '@angular/core';
import { NevBarComponent } from '../components/nev-bar/nev-bar.component';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [NevBarComponent],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.scss'
})
export class TelaInicialComponent {

}
