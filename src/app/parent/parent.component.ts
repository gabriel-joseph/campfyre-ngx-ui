import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { importProvidersFrom } from '@angular/core';
import { PopoverComponent } from '../popover/popover.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  standalone: true,
  imports: [MatCardModule, MatIconModule,PopoverComponent,CommonModule],
})
export class ParentComponent {
  isPopoverVisible = false;
  popoverMessage =
    `Information on the form is out of date\n
    The following fields have changed:\n
    Field | New Data  |   Form\n
    Age       13           22 \n`;

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  togglePopover(event: Event) {
    this.isPopoverVisible = !this.isPopoverVisible;

    event.stopPropagation();

    if (this.isPopoverVisible) {
      this.renderer.listen('window', 'click', () => {
        this.closePopover();
      });
    }
  }

  closePopover() {
    this.isPopoverVisible = false;
  }
}
