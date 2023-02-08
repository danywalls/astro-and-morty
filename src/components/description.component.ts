import { Component, Input } from '@angular/core';
@Component({
  selector: 'description',
  standalone: true,
  template: `<div>
    <h1>{{ title }}</h1>
  </div>`,
})
export class DescriptionComponent {
  @Input() title: string = "hello from Angular";
}