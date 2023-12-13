import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishFilterFormComponent } from './wish-filter-form.component';

describe('WishFilterFormComponent', () => {
  let component: WishFilterFormComponent;
  let fixture: ComponentFixture<WishFilterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishFilterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
