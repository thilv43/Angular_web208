import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIdComponent } from './table-id.component';

describe('TableIdComponent', () => {
  let component: TableIdComponent;
  let fixture: ComponentFixture<TableIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
