import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsNavbarComponent } from './chats-navbar.component';

describe('ChatsNavbarComponent', () => {
  let component: ChatsNavbarComponent;
  let fixture: ComponentFixture<ChatsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatsNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
