import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPubComponent } from './crear-pub.component';

describe('CrearPubComponent', () => {
  let component: CrearPubComponent;
  let fixture: ComponentFixture<CrearPubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
