import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardViewComponent } from './keyboard-view.component';

describe('KeyboardViewComponent', () => {
  let component: KeyboardViewComponent;
  let fixture: ComponentFixture<KeyboardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
