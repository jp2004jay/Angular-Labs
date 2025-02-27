import { Routes } from '@angular/router';
import { ArrayCrudComponent } from './array-crud/array-crud.component';
import { WithTwoWayComponent } from './with-two-way/with-two-way.component';
import { WithoutTwoWayComponent } from './without-two-way/without-two-way.component';
import { ArrayOfObjectCrudComponent } from './array-of-object-crud/array-of-object-crud.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path: '', component:WithoutTwoWayComponent},
    {path: 'with-two-way', component:WithTwoWayComponent},
    {path: 'array-crud', component:ArrayCrudComponent},
    {path: 'array-of-object-crud', component:ArrayOfObjectCrudComponent},
    {path: 'directives', component:DirectivesComponent},
    {path: 'task-manager', component:TaskManagerComponent},
    {path: 'validation-form', component:FormValidationComponent},
    {path: 'reactive-forms', component:ReactiveFormsComponent},
    {path: 'form-builder', component:FormBuilderComponent},
    {path: 'auth', component:AuthLayoutComponent, 
        children:[
            {path:'login', component:LoginComponent},
            {path:'sign-up', component:RegisterComponent}
        ]
    }
];
