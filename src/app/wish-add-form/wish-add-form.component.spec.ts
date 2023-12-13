import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishAddFormComponent } from './wish-add-form.component';

describe('WishAddFormComponent', () => {
  let component: WishAddFormComponent;
  let fixture: ComponentFixture<WishAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishAddFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
