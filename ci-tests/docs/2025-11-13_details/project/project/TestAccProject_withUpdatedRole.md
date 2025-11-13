# project/project/TestAccProject_withUpdatedRole Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11ee2dc7470847baaef | dev | flaky_500 | 11.06s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 10 seconds
- 2025-10-16 PASS 17 seconds
- 2025-10-17 PASS 15 seconds
- 2025-10-18 PASS 13 seconds
- 2025-10-19 PASS 26 seconds
- 2025-10-20
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-10-21 PASS 12 seconds
- 2025-10-22
  - PASS 18 seconds
  - PASS 13 seconds
- 2025-10-23 PASS 13 seconds
- 2025-10-24 PASS 15 seconds
- 2025-10-25 PASS 13 seconds
- 2025-10-26 PASS 12 seconds
- 2025-10-27 PASS 15 seconds
- 2025-10-28 PASS 12 seconds
- 2025-10-29 PASS 12 seconds
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1668095Z === RUN   TestAccProject_withUpdatedRole
2025-10-30T00:31:58.1679528Z === CONT  TestAccProject_withUpdatedRole
2025-10-30T00:31:58.1749756Z === NAME  TestAccProject_withUpdatedRole
2025-10-30T00:31:58.1750392Z     resource_project_test.go:782: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1750871Z         
2025-10-30T00:31:58.1751170Z         Error: error when destroying resource
2025-10-30T00:31:58.1751455Z         
2025-10-30T00:31:58.1751801Z         error deleting project (6902b11ee2dc7470847baaef):
2025-10-30T00:31:58.1752517Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11ee2dc7470847baaef
2025-10-30T00:31:58.1753160Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1753766Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1754192Z         BadRequestDetail: 
2025-10-30T00:31:58.1754490Z --- FAIL: TestAccProject_withUpdatedRole (11.59s)
```

- 2025-10-31 PASS 15 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 10 seconds
- 2025-11-03 PASS 11 seconds
- 2025-11-04 PASS 13 seconds
- 2025-11-05
  - PASS 12 seconds
  - PASS 10 seconds
- 2025-11-06 PASS 11 seconds
- 2025-11-07 PASS 12 seconds
- 2025-11-08 PASS 11 seconds
- 2025-11-09 PASS 12 seconds
- 2025-11-10 PASS 12 seconds
- 2025-11-11 PASS 12 seconds
- 2025-11-12 PASS 13 seconds
- 2025-11-13
  - PASS 14 seconds
  - PASS 9 seconds