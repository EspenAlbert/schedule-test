# project/project/TestAccProject_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 38) FAIL
Success rate: 97.44%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b155abf4374f3299d4fb | dev | flaky_500 | 224.07s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 5 minutes
  - PASS 2 minutes
  - PASS 4 minutes
- 2025-10-02 PASS 4 minutes
- 2025-10-03 PASS 4 minutes
- 2025-10-04 PASS 5 minutes
- 2025-10-05 PASS 7 minutes
- 2025-10-06 PASS a minute
- 2025-10-07 PASS 4 minutes
- 2025-10-08 PASS 2 minutes
- 2025-10-09 PASS 3 minutes
- 2025-10-10 PASS 2 minutes
- 2025-10-11 PASS 3 minutes
- 2025-10-12 PASS 6 minutes
- 2025-10-13 PASS 2 minutes
- 2025-10-14 PASS 5 minutes
- 2025-10-15 PASS 2 minutes
- 2025-10-16 PASS 5 minutes
- 2025-10-17 PASS 4 minutes
- 2025-10-18 PASS 3 minutes
- 2025-10-19 PASS 12 minutes
- 2025-10-20
  - PASS 2 minutes
  - PASS 3 minutes
- 2025-10-21 PASS 3 minutes
- 2025-10-22
  - PASS 6 minutes
  - PASS 4 minutes
- 2025-10-23 PASS 3 minutes
- 2025-10-24 PASS 5 minutes
- 2025-10-25 PASS 3 minutes
- 2025-10-26 PASS 3 minutes
- 2025-10-27 PASS 5 minutes
- 2025-10-28 PASS 2 minutes
- 2025-10-29 PASS 3 minutes
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1658209Z === RUN   TestAccProject_basic
2025-10-30T00:31:58.1677092Z === CONT  TestAccProject_basic
2025-10-30T00:31:58.1900146Z === NAME  TestAccProject_basic
2025-10-30T00:31:58.1900743Z     resource_project_test.go:558: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1901222Z         
2025-10-30T00:31:58.1901523Z         Error: error when destroying resource
2025-10-30T00:31:58.1901800Z         
2025-10-30T00:31:58.1902164Z         error deleting project (6902b155abf4374f3299d4fb):
2025-10-30T00:31:58.1902740Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b155abf4374f3299d4fb
2025-10-30T00:31:58.1903374Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1903975Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1904387Z         BadRequestDetail: 
2025-10-30T00:31:58.1904661Z --- FAIL: TestAccProject_basic (224.73s)
```
