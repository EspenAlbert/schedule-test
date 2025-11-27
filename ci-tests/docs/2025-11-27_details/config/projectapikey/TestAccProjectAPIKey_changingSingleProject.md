# config/projectapikey/TestAccProjectAPIKey_changingSingleProject Test Details
# Found 31 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b154abf4374f3299d3d1 | dev | flaky_500 | 32.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 27 seconds
- 2025-10-30

### Error 2025-10-30T00:30:58+00:00
```
2025-10-30T00:30:58.3716183Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-10-30T00:30:58.3724856Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-10-30T00:30:58.3776643Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-10-30T00:30:58.3777331Z     resource_project_api_key_test.go:64: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:30:58.3777823Z         
2025-10-30T00:30:58.3778127Z         Error: error when destroying resource
2025-10-30T00:30:58.3778407Z         
2025-10-30T00:30:58.3778750Z         error deleting project (6902b154abf4374f3299d3d1):
2025-10-30T00:30:58.3779334Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b154abf4374f3299d3d1
2025-10-30T00:30:58.3779958Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:30:58.3780556Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:30:58.3780993Z         BadRequestDetail: 
2025-10-30T00:30:58.3781331Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (32.13s)
```

- 2025-10-31 PASS 32 seconds
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 23 seconds
- 2025-11-04 PASS 29 seconds
- 2025-11-05
  - PASS 51 seconds
  - PASS 35 seconds
- 2025-11-06 PASS 25 seconds
- 2025-11-07 PASS 25 seconds
- 2025-11-08 PASS 22 seconds
- 2025-11-09: MISSING
- 2025-11-10 PASS 28 seconds
- 2025-11-11 PASS 21 seconds
- 2025-11-12 PASS 23 seconds
- 2025-11-13 PASS 31 seconds
- 2025-11-14 PASS 25 seconds
- 2025-11-15 PASS 25 seconds
- 2025-11-16: MISSING
- 2025-11-17 PASS 24 seconds
- 2025-11-18 PASS 22 seconds
- 2025-11-19 PASS 25 seconds
- 2025-11-20 PASS 32 seconds
- 2025-11-21 PASS 48 seconds
- 2025-11-22 PASS 24 seconds
- 2025-11-23: MISSING
- 2025-11-24 PASS 23 seconds
- 2025-11-25 PASS 24 seconds
- 2025-11-26 PASS 29 seconds
- 2025-11-27 PASS 22 seconds

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 39 seconds
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 30 seconds
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 42 seconds
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 19 seconds
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 43 seconds
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
