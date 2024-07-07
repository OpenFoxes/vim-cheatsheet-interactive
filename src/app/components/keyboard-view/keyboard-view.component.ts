import { Component } from '@angular/core';
import { layoutQuertyComplete } from '../../data/keyboard-layout/querty';
import { VimMode } from '../../model/vim-mode';
import { KeyboardService } from '../../services/keyboard.service';
import { KeyboardComponent } from '../keyboard/keyboard.component';

/**
 * The keyboard-view defines a container surrounding the virtual keyboard.
 * It's containing the current mode and a legend of the colors as well as
 * configuration options.
 */
@Component({
  selector: 'app-keyboard-view',
  standalone: true,
  imports: [KeyboardComponent],
  templateUrl: './keyboard-view.component.html',
  styleUrl: './keyboard-view.component.scss',
})
export class KeyboardViewComponent {
  private _currentMode = VimMode.NORMAL;

  constructor(private readonly keyboardService: KeyboardService) {
    keyboardService.defineAndBindSlots({ layout: layoutQuertyComplete });
  }

  currentModeMessage() {
    switch (this._currentMode) {
      case VimMode.NORMAL:
        return `normal`;
      case VimMode.INSERT:
        return `insert`;
      case VimMode.VISUAL:
        return `visual`;
      case VimMode.COMMAND:
        return `command`;
      case VimMode.REPLACE:
        return `replace`;
      case VimMode.BINARY:
        return `binary`;
    }
  }

  set currentMode(value: VimMode) {
    this._currentMode = value;
  }
}
