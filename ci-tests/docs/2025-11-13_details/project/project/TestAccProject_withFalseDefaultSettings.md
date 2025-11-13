# project/project/TestAccProject_withFalseDefaultSettings Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11eabf4374f32993dec | dev | flaky_500 | 12.05s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 10 seconds
- 2025-10-16 PASS 16 seconds
- 2025-10-17 PASS 16 seconds
- 2025-10-18 PASS 13 seconds
- 2025-10-19 PASS 14 seconds
- 2025-10-20
  - PASS 10 seconds
  - PASS 12 seconds
- 2025-10-21 PASS 12 seconds
- 2025-10-22
  - PASS 17 seconds
  - PASS 12 seconds
- 2025-10-23 PASS 13 seconds
- 2025-10-24 PASS 16 seconds
- 2025-10-25 PASS 11 seconds
- 2025-10-26 PASS 10 seconds
- 2025-10-27 PASS 15 seconds
- 2025-10-28 PASS 10 seconds
- 2025-10-29 PASS 11 seconds
- 2025-10-30

### Error 2025-10-30T00:31:58+00:00
```
2025-10-30T00:31:58.1664500Z === RUN   TestAccProject_withFalseDefaultSettings
2025-10-30T00:31:58.1681195Z === CONT  TestAccProject_withFalseDefaultSettings
2025-10-30T00:31:58.1805296Z === NAME  TestAccProject_withFalseDefaultSettings
2025-10-30T00:31:58.1805982Z     resource_project_test.go:687: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:31:58.1806478Z         
2025-10-30T00:31:58.1806791Z         Error: error when destroying resource
2025-10-30T00:31:58.1807078Z         
2025-10-30T00:31:58.1807424Z         error deleting project (6902b11eabf4374f32993dec):
2025-10-30T00:31:58.1808013Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11eabf4374f32993dec
2025-10-30T00:31:58.1808829Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1809442Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1809865Z         BadRequestDetail: 
2025-10-30T00:31:58.1810104Z         
2025-10-30T00:31:58.1810403Z         Error: error when destroying resource
2025-10-30T00:31:58.1810680Z         
2025-10-30T00:31:58.1811011Z         error deleting project (6902b11eabf4374f32993dec):
2025-10-30T00:31:58.1811595Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11eabf4374f32993dec
2025-10-30T00:31:58.1812220Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:31:58.1812815Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:31:58.1813224Z         BadRequestDetail: 
2025-10-30T00:31:58.1813539Z --- FAIL: TestAccProject_withFalseDefaultSettings (12.48s)
```

- 2025-10-31 PASS 15 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 10 seconds
- 2025-11-03 PASS 10 seconds
- 2025-11-04 PASS 14 seconds
- 2025-11-05
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-11-06 PASS 9 seconds
- 2025-11-07 PASS 11 seconds
- 2025-11-08 PASS 10 seconds
- 2025-11-09 PASS 14 seconds
- 2025-11-10 PASS 10 seconds
- 2025-11-11 PASS 13 seconds
- 2025-11-12 PASS 12 seconds
- 2025-11-13
  - PASS 10 seconds
  - PASS 9 seconds