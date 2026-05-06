# search_deployment/searchdeployment/TestMigSearchDeployment_basic Test Details
# Found 20 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-17 00:48](#error-2026-04-17t0048450000) |  | dev | timeout | 11511.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 37 minutes
- 2026-04-09: MISSING
- 2026-04-10 PASS an hour
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 45 minutes
- 2026-04-14: MISSING
- 2026-04-15 PASS 39 minutes
- 2026-04-16: MISSING
- 2026-04-17

### Error 2026-04-17T00:48:45+00:00
```
2026-04-17T00:48:45.5008644Z === RUN   TestMigSearchDeployment_basic
2026-04-17T00:48:49.8799664Z === CONT  TestMigSearchDeployment_basic
2026-04-17T04:00:38.4964032Z === NAME  TestMigSearchDeployment_basic
2026-04-17T04:00:38.4965520Z     resource_migration_test.go:21: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-17T04:00:38.4966416Z         
2026-04-17T04:00:38.4967287Z         Error: error during search deployment delete
2026-04-17T04:00:38.4967809Z         
2026-04-17T04:00:38.4968596Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-17T04:00:38.4969322Z         timeout: 3h0m0s)
2026-04-17T04:00:38.4997110Z --- FAIL: TestMigSearchDeployment_basic (11511.92s)
```

- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS an hour
- 2026-04-23: MISSING
- 2026-04-24 PASS 38 minutes
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 39 minutes
- 2026-04-28: MISSING
- 2026-04-29 PASS 48 minutes
- 2026-04-30: MISSING
- 2026-05-01 PASS 40 minutes
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 43 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 37 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 36 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 36 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 39 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 33 minutes
- 2026-05-04
  - PASS 33 minutes
  - PASS 31 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 34 minutes
