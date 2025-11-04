# config/apikeyprojectassignment/TestAccApiKeyProjectAssignmentRS_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b152abf4374f3299c9a7 | dev | flaky_500 | 14.01s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 13 seconds
- 2025-10-07 PASS 14 seconds
- 2025-10-08 PASS 12 seconds
- 2025-10-09 PASS 13 seconds
- 2025-10-10 PASS 10 seconds
- 2025-10-11 PASS 10 seconds
- 2025-10-12 PASS 12 seconds
- 2025-10-13 PASS 15 seconds
- 2025-10-14 PASS 15 seconds
- 2025-10-15 PASS 16 seconds
- 2025-10-16 PASS 15 seconds
- 2025-10-17 PASS 10 seconds
- 2025-10-18 PASS 11 seconds
- 2025-10-19 PASS 15 seconds
- 2025-10-20
  - PASS 12 seconds
  - PASS 11 seconds
- 2025-10-21 PASS 9 seconds
- 2025-10-22
  - PASS 16 seconds
  - PASS 14 seconds
- 2025-10-23 PASS 12 seconds
- 2025-10-24 PASS 12 seconds
- 2025-10-25 PASS 10 seconds
- 2025-10-26 PASS 14 seconds
- 2025-10-27 PASS 12 seconds
- 2025-10-28 PASS 10 seconds
- 2025-10-29 PASS 9 seconds
- 2025-10-30

### Error 2025-10-30T00:30:58+00:00
```
2025-10-30T00:30:58.3785286Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2025-10-30T00:30:58.3786156Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2025-10-30T00:30:58.3796543Z   
2025-10-30T00:30:58.3797033Z     resource_test.go:32: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:30:58.3797485Z         
2025-10-30T00:30:58.3797782Z         Error: error when destroying resource
2025-10-30T00:30:58.3798064Z         
2025-10-30T00:30:58.3798404Z         error deleting project (6902b152abf4374f3299c9a7):
2025-10-30T00:30:58.3798977Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b152abf4374f3299c9a7
2025-10-30T00:30:58.3799611Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:30:58.3800204Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:30:58.3800618Z         BadRequestDetail: 
2025-10-30T00:30:58.3800944Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (14.09s)
```

- 2025-10-31 PASS 11 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 13 seconds
- 2025-11-03 PASS 9 seconds
- 2025-11-04 PASS 11 seconds