import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '../../_guards/Auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthGuardService } from '../../services/auth/auth-guard.service';
import { AuthService } from '../../services/auth/auth.service';

const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('../../layouts/private/private.module').then(
        (m) => m.PrivateModule
      ),
  },
  {
    path: 'public',
    loadChildren: () =>
      import('../../layouts/public/public.module').then((m) => m.PublicModule),
  },
  { path: '**', redirectTo: 'admin' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule, ReactiveFormsModule, FormsModule],
  providers: [AuthGuardService, AuthService],
})
export class Routing {}
