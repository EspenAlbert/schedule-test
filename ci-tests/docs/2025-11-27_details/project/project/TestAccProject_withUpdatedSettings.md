# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11ee2dc7470847bab60 | dev | flaky_500 | 13.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 14 seconds
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1666363Z === RUN   TestAccProject_withUpdatedSettings
2025-10-30T00:31:58.1680859Z === CONT  TestAccProject_withUpdatedSettings
2025-10-30T00:31:58.1824170Z === NAME  TestAccProject_withUpdatedSettings
2025-10-30T00:31:58.1824830Z     resource_project_test.go:723: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1825319Z         
2025-10-30T00:31:58.1825617Z         Error: error when destroying resource
2025-10-30T00:31:58.1825895Z         
2025-10-30T00:31:58.1826240Z         error deleting project (6902b11ee2dc7470847bab60):
2025-10-30T00:31:58.1826944Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11ee2dc7470847bab60
2025-10-30T00:31:58.1827576Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1828173Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1828800Z         BadRequestDetail: 
2025-10-30T00:31:58.1829126Z --- FAIL: TestAccProject_withUpdatedSettings (13.80s)
```

- 2025-10-31 PASS 19 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 14 seconds
- 2025-11-04 PASS 17 seconds
- 2025-11-05
  - PASS 16 seconds
  - PASS 14 seconds
- 2025-11-06 PASS 13 seconds
- 2025-11-07 PASS 13 seconds
- 2025-11-08 PASS 14 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 15 seconds
- 2025-11-11 PASS 16 seconds
- 2025-11-12 PASS 16 seconds
- 2025-11-13 PASS 15 seconds
- 2025-11-14 PASS 14 seconds
- 2025-11-15 PASS 18 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 21 seconds
- 2025-11-18 PASS 17 seconds
- 2025-11-19 PASS 14 seconds
- 2025-11-20 PASS 14 seconds
- 2025-11-21 PASS 18 seconds
- 2025-11-22 PASS 17 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 13 seconds
- 2025-11-25 PASS 19 seconds
- 2025-11-26 PASS 17 seconds
- 2025-11-27 PASS 14 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 13 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 17 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 10 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 16 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 13 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
