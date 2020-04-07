import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../layouts/public/login/login.component';
import { MaterialModule } from '../material-module';
// import { AuthGuard } from '../_guards/Auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('../layouts/private/private.module').then((m) => m.PrivateModule),
  },
  {
    path: 'public',
    loadChildren: () =>
      import('../layouts/public/public.module').then((m) => m.PublicModule),
  },
  { path: '**', redirectTo: '/public' },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule, ReactiveFormsModule, FormsModule, MaterialModule],
})
export class Routing {}
