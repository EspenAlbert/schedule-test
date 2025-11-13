# project/project/TestAccProject_updatedToEmptyLimits Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11ee2dc7470847baaee | dev | flaky_500 | 16.01s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 14 seconds
- 2025-10-16 PASS 26 seconds
- 2025-10-17 PASS 23 seconds
- 2025-10-18 PASS 20 seconds
- 2025-10-19 PASS 23 seconds
- 2025-10-20
  - PASS 14 seconds
  - PASS 19 seconds
- 2025-10-21 PASS 21 seconds
- 2025-10-22
  - PASS 27 seconds
  - PASS 22 seconds
- 2025-10-23 PASS 20 seconds
- 2025-10-24 PASS 25 seconds
- 2025-10-25 PASS 20 seconds
- 2025-10-26 PASS 15 seconds
- 2025-10-27 PASS 25 seconds
- 2025-10-28 PASS 17 seconds
- 2025-10-29 PASS 19 seconds
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1672156Z === RUN   TestAccProject_updatedToEmptyLimits
2025-10-30T00:31:58.1677455Z === CONT  TestAccProject_updatedToEmptyLimits
2025-10-30T00:31:58.1855115Z === NAME  TestAccProject_updatedToEmptyLimits
2025-10-30T00:31:58.1855767Z     resource_project_test.go:954: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1856248Z         
2025-10-30T00:31:58.1856554Z         Error: error when destroying resource
2025-10-30T00:31:58.1856831Z         
2025-10-30T00:31:58.1857181Z         error deleting project (6902b11ee2dc7470847baaee):
2025-10-30T00:31:58.1857757Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11ee2dc7470847baaee
2025-10-30T00:31:58.1858566Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1859170Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1859586Z         BadRequestDetail: 
2025-10-30T00:31:58.1859895Z --- FAIL: TestAccProject_updatedToEmptyLimits (16.06s)
```

- 2025-10-31 PASS 25 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 13 seconds
- 2025-11-03 PASS 16 seconds
- 2025-11-04 PASS 19 seconds
- 2025-11-05
  - PASS 15 seconds
  - PASS 16 seconds
- 2025-11-06 PASS 14 seconds
- 2025-11-07 PASS 13 seconds
- 2025-11-08 PASS 16 seconds
- 2025-11-09 PASS 23 seconds
- 2025-11-10 PASS 18 seconds
- 2025-11-11 PASS 20 seconds
- 2025-11-12 PASS 21 seconds
- 2025-11-13
  - PASS 18 seconds
  - PASS 11 seconds