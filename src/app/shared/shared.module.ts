import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainareaComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,FooterComponent,MainareaComponent]
})
export class SharedModule { }
