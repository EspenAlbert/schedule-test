# autogen_fast/customdbroleapi/TestAccCustomDBRoleAPI_basic Test Details
# Found 26 TestRuns in dev, qa from 2025-10-07 to 2025-10-30 from master branch: 1 unique tests, PASS(x 25) FAIL
Success rate: 96.15%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:29](#error-2025-10-30t0029460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b170abf4374f329a18a0 | dev | flaky_500 | 10.08s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01: MISSING
- 2025-10-02: MISSING
- 2025-10-03: MISSING
- 2025-10-04: MISSING
- 2025-10-05: MISSING
- 2025-10-06: MISSING
- 2025-10-07 PASS 8 seconds
- 2025-10-08 PASS 10 seconds
- 2025-10-09 PASS 12 seconds
- 2025-10-10 PASS 13 seconds
- 2025-10-11 PASS 13 seconds
- 2025-10-12 PASS 28 seconds
- 2025-10-13 PASS 12 seconds
- 2025-10-14 PASS 13 seconds
- 2025-10-15 PASS 13 seconds
- 2025-10-16 PASS 15 seconds
- 2025-10-17 PASS 10 seconds
- 2025-10-18 PASS 14 seconds
- 2025-10-19 PASS 12 seconds
- 2025-10-20
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-10-21 PASS 9 seconds
- 2025-10-22
  - PASS 13 seconds
  - PASS 9 seconds
- 2025-10-23 PASS 9 seconds
- 2025-10-24 PASS 9 seconds
- 2025-10-25 PASS 12 seconds
- 2025-10-26 PASS 11 seconds
- 2025-10-27 PASS 8 seconds
- 2025-10-28 PASS 9 seconds
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
