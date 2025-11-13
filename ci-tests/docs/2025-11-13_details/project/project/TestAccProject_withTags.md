# project/project/TestAccProject_withTags Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11ee2dc7470847bab59 | dev | flaky_500 | 37.06s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 36 seconds
- 2025-10-16 PASS a minute
- 2025-10-17 PASS 57 seconds
- 2025-10-18 PASS 50 seconds
- 2025-10-19 PASS 3 minutes
- 2025-10-20
  - PASS 34 seconds
  - PASS 45 seconds
- 2025-10-21 PASS 47 seconds
- 2025-10-22
  - PASS a minute
  - PASS 54 seconds
- 2025-10-23 PASS 51 seconds
- 2025-10-24 PASS a minute
- 2025-10-25 PASS 49 seconds
- 2025-10-26 PASS 40 seconds
- 2025-10-27 PASS a minute
- 2025-10-28 PASS 39 seconds
- 2025-10-29 PASS 43 seconds
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1675601Z === RUN   TestAccProject_withTags
2025-10-30T00:31:58.1677829Z === CONT  TestAccProject_withTags
2025-10-30T00:31:58.1885159Z === NAME  TestAccProject_withTags
2025-10-30T00:31:58.1885778Z     resource_project_test.go:1060: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1886260Z         
2025-10-30T00:31:58.1886559Z         Error: error when destroying resource
2025-10-30T00:31:58.1886838Z         
2025-10-30T00:31:58.1887174Z         error deleting project (6902b11ee2dc7470847bab59):
2025-10-30T00:31:58.1887755Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11ee2dc7470847bab59
2025-10-30T00:31:58.1888542Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1889158Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1889571Z         BadRequestDetail: 
2025-10-30T00:31:58.1889844Z --- FAIL: TestAccProject_withTags (37.60s)
```

- 2025-10-31 PASS 59 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 27 seconds
- 2025-11-03 PASS 39 seconds
- 2025-11-04 PASS 47 seconds
- 2025-11-05
  - PASS 32 seconds
  - PASS 39 seconds
- 2025-11-06 PASS 35 seconds
- 2025-11-07 PASS 30 seconds
- 2025-11-08 PASS 36 seconds
- 2025-11-09 PASS 49 seconds
- 2025-11-10 PASS 42 seconds
- 2025-11-11 PASS 51 seconds
- 2025-11-12 PASS 50 seconds
- 2025-11-13
  - PASS 40 seconds
  - PASS 25 seconds