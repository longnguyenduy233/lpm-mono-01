import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UamRoutingModule } from './uam-routing.module';
import { UamComponent } from './uam/uam.component';
import { SharedModule } from '@app/shared/shared.module';
import { ToolbarComponent } from './uam/toolbar/toolbar.component';
import { UamUserSetupComponent } from './uam/uam-user-setup/uam-user-setup.component';
import { UamRoleSetupComponent } from './uam/uam-role-setup/uam-role-setup.component';
import { UamPrivilegeMappingComponent } from './uam/uam-privilege-mapping/uam-privilege-mapping.component';


@NgModule({
  declarations: [UamComponent, ToolbarComponent, UamUserSetupComponent, UamRoleSetupComponent, UamPrivilegeMappingComponent],
  imports: [
    CommonModule,
    UamRoutingModule,
    SharedModule
  ]
})
export class UamModule { }
