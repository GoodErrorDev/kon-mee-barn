import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component'; 
import { AdminGuard } from './guards/admin.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'not-authorized', component: NotAuthorizedComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
