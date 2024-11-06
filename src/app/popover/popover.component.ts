import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.css'
})
export class PopoverComponent {
  @Input() message: string = '';
  fieldChanges = [
    { field: 'Name', current: 'John Doe', new: 'John Smith' },
    { field: 'Age', current: 22, new: 23 },
    { field: 'Email', current: 'john.doe@example.com', new: 'john.smith@example.com' },
    { field: 'Phone Number', current: '(555) 123-4567', new: '(555) 987-6543' },
    { field: 'Address', current: '123 Main St, Apt 4B', new: '456 Elm St, Apt 5C' },
    { field: 'Membership Status', current: 'Basic', new: 'Premium' },
    { field: 'Subscription Expiry', current: '2024-05-01', new: '2025-05-01' }
  ];
  
}
