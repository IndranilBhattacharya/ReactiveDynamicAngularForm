import { TestBed } from '@angular/core/testing';

import { QuestionnaireControlService } from './questionnaire-control.service';

describe('QuestionnaireControlService', () => {
  let service: QuestionnaireControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionnaireControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
