import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheSortieComponent } from './recherche-sortie.component';

describe('RechercheSortieComponent', () => {
  let component: RechercheSortieComponent;
  let fixture: ComponentFixture<RechercheSortieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheSortieComponent]
    });
    fixture = TestBed.createComponent(RechercheSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
