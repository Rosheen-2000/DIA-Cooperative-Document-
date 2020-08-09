import { TestBed } from '@angular/core/testing';

import { DatapersistenceService } from './datapersistence.service';

describe('DatapersistenceService', () => {
  let service: DatapersistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatapersistenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
