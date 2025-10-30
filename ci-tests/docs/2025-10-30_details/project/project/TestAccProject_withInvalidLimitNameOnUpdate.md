# project/project/TestAccProject_withInvalidLimitNameOnUpdate Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11eabf4374f32993de6 | dev | flaky_500 | 11.06s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 15 seconds
  - PASS 9 seconds
  - PASS 14 seconds
- 2025-10-02 PASS 14 seconds
- 2025-10-03 PASS 13 seconds
- 2025-10-04 PASS 14 seconds
- 2025-10-05 PASS 13 seconds
- 2025-10-06 PASS 9 seconds
- 2025-10-07 PASS 12 seconds
- 2025-10-08 PASS 12 seconds
- 2025-10-09 PASS 13 seconds
- 2025-10-10 PASS 10 seconds
- 2025-10-11 PASS 12 seconds
- 2025-10-12 PASS 8 seconds
- 2025-10-13 PASS 11 seconds
- 2025-10-14 PASS 16 seconds
- 2025-10-15 PASS 9 seconds
- 2025-10-16 PASS 17 seconds
- 2025-10-17 PASS 14 seconds
- 2025-10-18 PASS 13 seconds
- 2025-10-19 PASS 27 seconds
- 2025-10-20
  - PASS 12 seconds
  - PASS 13 seconds
- 2025-10-21 PASS 13 seconds
- 2025-10-22
  - PASS 18 seconds
  - PASS 14 seconds
- 2025-10-23 PASS 13 seconds
- 2025-10-24 PASS 16 seconds
- 2025-10-25 PASS 12 seconds
- 2025-10-26 PASS 11 seconds
- 2025-10-27 PASS 15 seconds
- 2025-10-28 PASS 11 seconds
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
