# project/project/TestAccProject_withUpdatedLimits Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11eabf4374f32993dd7 | dev | flaky_500 | 22.08s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 35 seconds
- 2025-10-05 PASS a minute
- 2025-10-06 PASS 16 seconds
- 2025-10-07 PASS 26 seconds
- 2025-10-08 PASS 22 seconds
- 2025-10-09 PASS 26 seconds
- 2025-10-10 PASS 21 seconds
- 2025-10-11 PASS 24 seconds
- 2025-10-12 PASS 17 seconds
- 2025-10-13 PASS 21 seconds
- 2025-10-14 PASS 38 seconds
- 2025-10-15 PASS 18 seconds
- 2025-10-16 PASS 40 seconds
- 2025-10-17 PASS 35 seconds
- 2025-10-18 PASS 29 seconds
- 2025-10-19 PASS 32 seconds
- 2025-10-20
  - PASS 21 seconds
  - PASS 27 seconds
- 2025-10-21 PASS 27 seconds
- 2025-10-22
  - PASS 39 seconds
  - PASS 31 seconds
- 2025-10-23 PASS 30 seconds
- 2025-10-24 PASS 37 seconds
- 2025-10-25 PASS 30 seconds
- 2025-10-26 PASS 23 seconds
- 2025-10-27 PASS 37 seconds
- 2025-10-28 PASS 23 seconds
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
- 2025-11-02 PASS 16 seconds
- 2025-11-03 PASS 24 seconds
- 2025-11-04 PASS 27 seconds
- 2025-11-05
  - PASS 20 seconds
  - PASS 23 seconds
- 2025-11-06 PASS 21 seconds
- 2025-11-07 PASS 19 seconds
- 2025-11-08 PASS 22 seconds
- 2025-11-09 PASS 29 seconds
- 2025-11-10 PASS 23 seconds
- 2025-11-11 PASS 32 seconds
- 2025-11-12 PASS 30 seconds