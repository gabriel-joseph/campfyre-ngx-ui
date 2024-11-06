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
  popoverMessage = 'This is a premium feature for subscribers.';

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
