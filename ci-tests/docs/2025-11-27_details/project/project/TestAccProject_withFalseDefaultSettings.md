# project/project/TestAccProject_withFalseDefaultSettings Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:31](#error-2025-10-30t0031580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b11eabf4374f32993dec | dev | flaky_500 | 12.05s

### Timeline
- 2025-10-28: MISSING
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
- 2025-11-02: MISSING
- 2025-11-03 PASS 10 seconds
- 2025-11-04 PASS 14 seconds
- 2025-11-05
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-11-06 PASS 9 seconds
- 2025-11-07 PASS 11 seconds
- 2025-11-08 PASS 10 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 10 seconds
- 2025-11-11 PASS 13 seconds
- 2025-11-12 PASS 12 seconds
- 2025-11-13 PASS 10 seconds
- 2025-11-14 PASS 10 seconds
- 2025-11-15 PASS 13 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 13 seconds
- 2025-11-18 PASS 12 seconds
- 2025-11-19 PASS 11 seconds
- 2025-11-20 PASS 9 seconds
- 2025-11-21 PASS 13 seconds
- 2025-11-22 PASS 12 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 9 seconds
- 2025-11-25 PASS 12 seconds
- 2025-11-26 PASS 13 seconds
- 2025-11-27 PASS 10 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 10 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 14 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 9 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 13 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 11 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
