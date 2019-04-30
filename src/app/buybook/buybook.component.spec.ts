import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBookComponent } from './buybook.component';

describe('RegisterComponent', () => {
  let component: BuyBookComponent;
  let fixture: ComponentFixture<BuyBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
