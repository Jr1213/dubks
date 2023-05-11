import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LoginComponent, JoinComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    TranslateModule
  ],
})
export class AuthModule {}