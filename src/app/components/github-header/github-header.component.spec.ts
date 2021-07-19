import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubHeaderComponent } from './github-header.component';

describe('GithubHeaderComponent', () => {
  let component: GithubHeaderComponent;
  let fixture: ComponentFixture<GithubHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
