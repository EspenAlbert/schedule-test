# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b111abf4374f32988cb3 | dev | flaky_500 | 13.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 15 seconds
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.1612597Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-10-30T00:44:19.1618699Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-10-30T00:44:19.1632129Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-10-30T00:44:19.1632855Z     resource_federated_database_instance_test.go:41: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.1633389Z         
2025-10-30T00:44:19.1633685Z         Error: error when destroying resource
2025-10-30T00:44:19.1633969Z         
2025-10-30T00:44:19.1634308Z         error deleting project (6902b111abf4374f32988cb3):
2025-10-30T00:44:19.1634877Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b111abf4374f32988cb3
2025-10-30T00:44:19.1635502Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.1636536Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.1636952Z         BadRequestDetail: 
2025-10-30T00:44:19.1637276Z --- FAIL: TestAccFederatedDatabaseInstance_basic (13.51s)
```

- 2025-10-31 PASS 17 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 11 seconds
- 2025-11-04 PASS 14 seconds
- 2025-11-05
  - PASS 13 seconds
  - PASS 13 seconds
- 2025-11-06 PASS 14 seconds
- 2025-11-07 PASS 17 seconds
- 2025-11-08 PASS 13 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 14 seconds
- 2025-11-11 PASS 12 seconds
- 2025-11-12 PASS 15 seconds
- 2025-11-13 PASS 16 seconds
- 2025-11-14 PASS 17 seconds
- 2025-11-15 PASS 15 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 13 seconds
- 2025-11-18 PASS 14 seconds
- 2025-11-19 PASS 13 seconds
- 2025-11-20 PASS 14 seconds
- 2025-11-21 PASS 16 seconds
- 2025-11-22 PASS 14 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 14 seconds
- 2025-11-25 PASS 13 seconds
- 2025-11-26 PASS 12 seconds
- 2025-11-27 PASS 17 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 15 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 13 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 17 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 16 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 14 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
