import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBuddyPageComponent } from './find-buddy-page.component';

describe('FindBuddyPageComponent', () => {
  let component: FindBuddyPageComponent;
  let fixture: ComponentFixture<FindBuddyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindBuddyPageComponent]
    });
    fixture = TestBed.createComponent(FindBuddyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
