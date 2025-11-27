# project/project/TestAccProject_withUpdatedLimits Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11eabf4374f32993dd7 | dev | flaky_500 | 22.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 25 seconds
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1670965Z === RUN   TestAccProject_withUpdatedLimits
2025-10-30T00:31:58.1680193Z === CONT  TestAccProject_withUpdatedLimits
2025-10-30T00:31:58.1870333Z === NAME  TestAccProject_withUpdatedLimits
2025-10-30T00:31:58.1870964Z     resource_project_test.go:869: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1871440Z         
2025-10-30T00:31:58.1871741Z         Error: error when destroying resource
2025-10-30T00:31:58.1872021Z         
2025-10-30T00:31:58.1872357Z         error deleting project (6902b11eabf4374f32993dd7):
2025-10-30T00:31:58.1872939Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11eabf4374f32993dd7
2025-10-30T00:31:58.1873566Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1874275Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1874684Z         BadRequestDetail: 
2025-10-30T00:31:58.1874978Z --- FAIL: TestAccProject_withUpdatedLimits (22.83s)
```

- 2025-10-31 PASS 34 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 24 seconds
- 2025-11-04 PASS 27 seconds
- 2025-11-05
  - PASS 20 seconds
  - PASS 23 seconds
- 2025-11-06 PASS 21 seconds
- 2025-11-07 PASS 19 seconds
- 2025-11-08 PASS 22 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 23 seconds
- 2025-11-11 PASS 32 seconds
- 2025-11-12 PASS 30 seconds
- 2025-11-13 PASS 23 seconds
- 2025-11-14 PASS 24 seconds
- 2025-11-15 PASS 31 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 33 seconds
- 2025-11-18 PASS 28 seconds
- 2025-11-19 PASS 23 seconds
- 2025-11-20 PASS 23 seconds
- 2025-11-21 PASS 32 seconds
- 2025-11-22 PASS 29 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 19 seconds
- 2025-11-25 PASS 28 seconds
- 2025-11-26 PASS 31 seconds
- 2025-11-27 PASS 23 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 16 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 29 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 16 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 27 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 22 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
