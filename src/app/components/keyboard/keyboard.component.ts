import { Component } from '@angular/core';
import { KeyboardService } from '../../services/keyboard.service';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.scss',
})
export class KeyboardComponent {
  constructor(private readonly keyboardService: KeyboardService) {}

  protected get keyboardRows() {
    return [...this.keyboardService.keyboard.rows];
  }
}
