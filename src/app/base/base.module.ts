import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MdTabsModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ChunkPipe } from './pipes/chunk.pipe';


@NgModule({
  imports: [
    CommonModule,
		NoopAnimationsModule,
		RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, ChunkPipe],
	exports: [HeaderComponent, FooterComponent, MdTabsModule, MdCardModule,MdGridListModule, ChunkPipe]
})
export class BaseModule { }
