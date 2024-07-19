import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Receita } from '../model/receita';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cadastrar-receita',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cadastrar-receita.component.html',
  styleUrl: './cadastrar-receita.component.scss'
})
export class CadastrarReceitaComponent {
  receita = new Receita();
  form?: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(){
    this.form = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      ingredientes: ['', Validators.required],
      modoPreparo: ['', Validators.required],
      tempoPreparo: ['', Validators.required],
      porcoes: ['', Validators.required],
      foto: ['']
    });
  }

  submitForm() {
    if (this.form && this.form.valid) {
      
    }
  }
}
