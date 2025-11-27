# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b113abf4374f3298a661 | dev | flaky_500 | 6.04s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 9 seconds
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.3930617Z === RUN   TestAccGenericX509AuthDBUser_withCustomerX509
2025-10-30T00:44:19.3933414Z === CONT  TestAccGenericX509AuthDBUser_withCustomerX509
2025-10-30T00:44:19.3946189Z === NAME  TestAccGenericX509AuthDBUser_withCustomerX509
2025-10-30T00:44:19.3947052Z     resource_x509_authentication_database_user_test.go:61: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.3947687Z         
2025-10-30T00:44:19.3948062Z         Error: error when destroying resource
2025-10-30T00:44:19.3948412Z         
2025-10-30T00:44:19.3948859Z         error deleting project (6902b113abf4374f3298a661):
2025-10-30T00:44:19.3949533Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b113abf4374f3298a661
2025-10-30T00:44:19.3950260Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.3950940Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.3951561Z         BadRequestDetail: 
2025-10-30T00:44:19.3951989Z --- FAIL: TestAccGenericX509AuthDBUser_withCustomerX509 (6.45s)
```

- 2025-10-31 PASS 7 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 8 seconds
- 2025-11-04 PASS 7 seconds
- 2025-11-05
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-11-06 PASS 6 seconds
- 2025-11-07 PASS 9 seconds
- 2025-11-08 PASS 6 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 6 seconds
- 2025-11-11 PASS 6 seconds
- 2025-11-12 PASS 7 seconds
- 2025-11-13 PASS 7 seconds
- 2025-11-14 PASS 7 seconds
- 2025-11-15 PASS 7 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 7 seconds
- 2025-11-18 PASS 6 seconds
- 2025-11-19 PASS 9 seconds
- 2025-11-20 PASS 8 seconds
- 2025-11-21 PASS 7 seconds
- 2025-11-22 PASS 7 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 6 seconds
- 2025-11-25 PASS 8 seconds
- 2025-11-26 PASS 8 seconds
- 2025-11-27 PASS 8 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 6 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 7 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 6 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 4 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 7 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
