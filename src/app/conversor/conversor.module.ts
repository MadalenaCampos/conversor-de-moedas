import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ngx-mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import { MoedaService, ConversorService } from './services';

import { ConversorComponent } from './components';

// Modulos do Zorro
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [ConversorComponent],
  imports: [
    CommonModule,
    NzAlertModule,
    NzInputModule,
    NzSelectModule,
    NzIconModule,
    NzModalModule,
    NzButtonModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [ConversorComponent],
  providers: [MoedaService, ConversorService],
})
export class ConversorModule {}
