import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthPhotoComponent } from './earth-photo.component';

describe('EarthPhotoComponent', () => {
  let component: EarthPhotoComponent;
  let fixture: ComponentFixture<EarthPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarthPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
