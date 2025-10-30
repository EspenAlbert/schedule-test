# project/project/TestAccProject_withUpdatedSettings Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11ee2dc7470847bab60 | dev | flaky_500 | 13.08s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 15 seconds
  - PASS 10 seconds
  - PASS 13 seconds
  - PASS 18 seconds
  - PASS 11 seconds
  - PASS 17 seconds
- 2025-10-02 PASS 17 seconds
- 2025-10-03 PASS 16 seconds
- 2025-10-04 PASS 19 seconds
- 2025-10-05 PASS 18 seconds
- 2025-10-06 PASS 10 seconds
- 2025-10-07 PASS 15 seconds
- 2025-10-08 PASS 13 seconds
- 2025-10-09 PASS 15 seconds
- 2025-10-10 PASS 13 seconds
- 2025-10-11 PASS 16 seconds
- 2025-10-12 PASS 12 seconds
- 2025-10-13 PASS 14 seconds
- 2025-10-14 PASS 21 seconds
- 2025-10-15 PASS 13 seconds
- 2025-10-16 PASS 22 seconds
- 2025-10-17 PASS 20 seconds
- 2025-10-18 PASS 17 seconds
- 2025-10-19 PASS 19 seconds
- 2025-10-20
  - PASS 13 seconds
  - PASS 15 seconds
- 2025-10-21 PASS 16 seconds
- 2025-10-22
  - PASS 23 seconds
  - PASS 22 seconds
- 2025-10-23 PASS 17 seconds
- 2025-10-24 PASS 20 seconds
- 2025-10-25 PASS 15 seconds
- 2025-10-26 PASS 13 seconds
- 2025-10-27 PASS 21 seconds
- 2025-10-28 PASS 14 seconds
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
