import { KeyboardViewComponent } from './keyboard-view.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('KeyboardViewComponent', () => {
  let spectator: Spectator<KeyboardViewComponent>;
  const createComponent = createComponentFactory(KeyboardViewComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
