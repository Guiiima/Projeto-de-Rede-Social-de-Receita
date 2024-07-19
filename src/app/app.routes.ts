import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TelaInicialComponent } from '../tela-inicial/tela-inicial.component';
import { NgModule } from '@angular/core';
import { CadastrarReceitaComponent } from '../cadastrar-receita/cadastrar-receita.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'TelaInicial', component: TelaInicialComponent },
    { path: 'CadastrarReceita', component: CadastrarReceitaComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }