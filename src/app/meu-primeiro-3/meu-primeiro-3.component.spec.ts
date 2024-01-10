import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiro3Component } from './meu-primeiro-3.component';

describe('MeuPrimeiro3Component', () => {
  let component: MeuPrimeiro3Component;
  let fixture: ComponentFixture<MeuPrimeiro3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeuPrimeiro3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeuPrimeiro3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
