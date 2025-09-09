import {Component, EventEmitter, Input, input, Output} from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  //
  // size =
  //   input.required<{width: string, height: string}>();

  @Input({required:true}) size!: {width: string, height: string};
  @Output() sizeChange =
    new EventEmitter<{width: string, height: string}>();

  onReset() {
    this.sizeChange.emit({
      width: '200',
      height: '200',
    });
  }
}
