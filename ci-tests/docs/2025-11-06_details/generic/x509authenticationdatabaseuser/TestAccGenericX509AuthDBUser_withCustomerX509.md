# generic/x509authenticationdatabaseuser/TestAccGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 32 TestRuns in dev, qa from 2025-10-08 to 2025-11-06 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b113abf4374f3298a661 | dev | flaky_500 | 6.04s

## Timeline
- 2025-10-07: MISSING
- 2025-10-08 PASS 8 seconds
- 2025-10-09 PASS 7 seconds
- 2025-10-10 PASS 8 seconds
- 2025-10-11 PASS 7 seconds
- 2025-10-12 PASS 7 seconds
- 2025-10-13 PASS 9 seconds
- 2025-10-14 PASS 8 seconds
- 2025-10-15 PASS 10 seconds
- 2025-10-16 PASS 5 seconds
- 2025-10-17 PASS 6 seconds
- 2025-10-18 PASS 8 seconds
- 2025-10-19 PASS 36 seconds
- 2025-10-20
  - PASS 10 seconds
  - PASS 7 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-10-23 PASS 7 seconds
- 2025-10-24 PASS 9 seconds
- 2025-10-25 PASS 9 seconds
- 2025-10-26 PASS 9 seconds
- 2025-10-27 PASS 7 seconds
- 2025-10-28 PASS 6 seconds
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
- 2025-11-02 PASS 6 seconds
- 2025-11-03 PASS 8 seconds
- 2025-11-04 PASS 7 seconds
- 2025-11-05
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-11-06 PASS 6 seconds