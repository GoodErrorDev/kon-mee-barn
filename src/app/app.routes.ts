import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';
import { PropertyComponent } from './pages/property/property.component';

export const routes: Routes = [
    {
        path: 'property/add',
        loadComponent: () =>
            import('./pages/property-maintain/property-maintain.component').then(m => m.PropertyMaintainComponent)
    }, {
        path: 'property/:id', loadComponent: () =>
            import('./pages/property/property.component').then((m) => m.PropertyComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./pages/dashboard/dashboard.component').then((m) => m.DashboardComponent)
    },
    {
        path: 'my-property',
        loadComponent: () =>
            import('./pages/my-property/my-property.component').then((m) => m.MyPropertyComponent)
    }
    ,
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'not-authorized', component: NotAuthorizedComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard' }
];
