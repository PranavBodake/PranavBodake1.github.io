import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentredirectComponent } from './paymentredirect.component';

describe('PaymentredirectComponent', () => {
  let component: PaymentredirectComponent;
  let fixture: ComponentFixture<PaymentredirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentredirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentredirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
