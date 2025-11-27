# project/project/TestAccProject_withInvalidLimitNameOnUpdate Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11eabf4374f32993de6 | dev | flaky_500 | 11.06s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 12 seconds
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1674730Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2025-10-30T00:31:58.1678213Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2025-10-30T00:31:58.1734364Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2025-10-30T00:31:58.1735046Z     resource_project_test.go:1012: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1735532Z         
2025-10-30T00:31:58.1735830Z         Error: error when destroying resource
2025-10-30T00:31:58.1736115Z         
2025-10-30T00:31:58.1736454Z         error deleting project (6902b11eabf4374f32993de6):
2025-10-30T00:31:58.1737043Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11eabf4374f32993de6
2025-10-30T00:31:58.1737676Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1738467Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1738910Z         BadRequestDetail: 
2025-10-30T00:31:58.1739248Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (11.56s)
```

- 2025-10-31 PASS 16 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 11 seconds
- 2025-11-04 PASS 12 seconds
- 2025-11-05
  - PASS 13 seconds
  - PASS 12 seconds
- 2025-11-06 PASS 11 seconds
- 2025-11-07 PASS 11 seconds
- 2025-11-08 PASS 10 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 12 seconds
- 2025-11-11 PASS 13 seconds
- 2025-11-12 PASS 15 seconds
- 2025-11-13 PASS 11 seconds
- 2025-11-14 PASS 11 seconds
- 2025-11-15 PASS 14 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 14 seconds
- 2025-11-18 PASS 13 seconds
- 2025-11-19 PASS 11 seconds
- 2025-11-20 PASS 12 seconds
- 2025-11-21 PASS 14 seconds
- 2025-11-22 PASS 13 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 10 seconds
- 2025-11-25 PASS 12 seconds
- 2025-11-26 PASS 13 seconds
- 2025-11-27 PASS 11 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 11 seconds
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
- 2025-11-13 PASS 10 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 13 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 11 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
