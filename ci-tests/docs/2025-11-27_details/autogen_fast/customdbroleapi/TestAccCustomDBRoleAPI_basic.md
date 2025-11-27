# autogen_fast/customdbroleapi/TestAccCustomDBRoleAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:29](#error-2025-10-30t0029460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b170abf4374f329a18a0 | dev | flaky_500 | 10.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 8 seconds
- 2025-10-30

### Error 2025-10-30T00:29:46+00:00
```
2025-10-30T00:29:46.7834498Z === RUN   TestAccCustomDBRoleAPI_basic
2025-10-30T00:29:46.7839688Z === CONT  TestAccCustomDBRoleAPI_basic
2025-10-30T00:29:46.7867391Z   
2025-10-30T00:29:46.7870663Z     resource_test.go:25: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:29:46.7871482Z         
2025-10-30T00:29:46.7871995Z         Error: error when destroying resource
2025-10-30T00:29:46.7872465Z         
2025-10-30T00:29:46.7873036Z         error deleting project (6902b170abf4374f329a18a0):
2025-10-30T00:29:46.7876972Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b170abf4374f329a18a0
2025-10-30T00:29:46.7878052Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:29:46.7879079Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:29:46.7879767Z         BadRequestDetail: 
2025-10-30T00:29:46.7880240Z --- FAIL: TestAccCustomDBRoleAPI_basic (10.76s)
```

- 2025-10-31 PASS 8 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 8 seconds
- 2025-11-04 PASS 14 seconds
- 2025-11-05
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-11-06 PASS 11 seconds
- 2025-11-07 PASS 8 seconds
- 2025-11-08 PASS 11 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 10 seconds
- 2025-11-11 PASS 11 seconds
- 2025-11-12 PASS 10 seconds
- 2025-11-13 PASS 12 seconds
- 2025-11-14 PASS 10 seconds
- 2025-11-15 PASS 9 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 13 seconds
- 2025-11-18 PASS 11 seconds
- 2025-11-19 PASS 13 seconds
- 2025-11-20 PASS 12 seconds
- 2025-11-21 PASS 14 seconds
- 2025-11-22 PASS 9 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 12 seconds
- 2025-11-25 PASS 11 seconds
- 2025-11-26 PASS 9 seconds
- 2025-11-27 PASS 12 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 9 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 8 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 9 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 13 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 9 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
