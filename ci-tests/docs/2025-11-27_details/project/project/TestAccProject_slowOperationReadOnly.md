# project/project/TestAccProject_slowOperationReadOnly Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11eabf4374f32993e65 | dev | flaky_500 | 13.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 15 seconds
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1676300Z === RUN   TestAccProject_slowOperationReadOnly
2025-10-30T00:31:58.1679130Z === CONT  TestAccProject_slowOperationReadOnly
2025-10-30T00:31:58.1839574Z === NAME  TestAccProject_slowOperationReadOnly
2025-10-30T00:31:58.1840218Z     resource_project_test.go:1119: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1840708Z         
2025-10-30T00:31:58.1841015Z         Error: error when destroying resource
2025-10-30T00:31:58.1841296Z         
2025-10-30T00:31:58.1841646Z         error deleting project (6902b11eabf4374f32993e65):
2025-10-30T00:31:58.1842225Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11eabf4374f32993e65
2025-10-30T00:31:58.1842854Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1843456Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1843873Z         BadRequestDetail: 
2025-10-30T00:31:58.1844191Z --- FAIL: TestAccProject_slowOperationReadOnly (13.81s)
```

- 2025-10-31 PASS 19 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 14 seconds
- 2025-11-04 PASS 15 seconds
- 2025-11-05
  - PASS 13 seconds
  - PASS 13 seconds
- 2025-11-06 PASS 11 seconds
- 2025-11-07 PASS 11 seconds
- 2025-11-08 PASS 12 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 13 seconds
- 2025-11-11 PASS 16 seconds
- 2025-11-12 PASS 16 seconds
- 2025-11-13 PASS 12 seconds
- 2025-11-14 PASS 14 seconds
- 2025-11-15 PASS 17 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 17 seconds
- 2025-11-18 PASS 16 seconds
- 2025-11-19 PASS 14 seconds
- 2025-11-20 PASS 12 seconds
- 2025-11-21 PASS 17 seconds
- 2025-11-22 PASS 18 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 13 seconds
- 2025-11-25 PASS 16 seconds
- 2025-11-26 PASS 16 seconds
- 2025-11-27 PASS 12 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 12 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 16 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 12 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 14 seconds
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
