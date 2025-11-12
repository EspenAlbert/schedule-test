# config/projectapikey/TestAccProjectAPIKey_changingSingleProject Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b154abf4374f3299d3d1 | dev | flaky_500 | 32.01s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 47 seconds
- 2025-10-05 PASS 2 minutes
- 2025-10-06 PASS 38 seconds
- 2025-10-07 PASS 45 seconds
- 2025-10-08 PASS 28 seconds
- 2025-10-09 PASS 41 seconds
- 2025-10-10 PASS 26 seconds
- 2025-10-11 PASS 30 seconds
- 2025-10-12 PASS 57 seconds
- 2025-10-13 PASS 50 seconds
- 2025-10-14 PASS 50 seconds
- 2025-10-15 PASS 55 seconds
- 2025-10-16 PASS 49 seconds
- 2025-10-17 PASS 26 seconds
- 2025-10-18 PASS 32 seconds
- 2025-10-19 PASS 45 seconds
- 2025-10-20
  - PASS 30 seconds
  - PASS 20 seconds
- 2025-10-21 PASS 22 seconds
- 2025-10-22
  - PASS 54 seconds
  - PASS 43 seconds
- 2025-10-23 PASS 32 seconds
- 2025-10-24 PASS 32 seconds
- 2025-10-25 PASS 22 seconds
- 2025-10-26 PASS 43 seconds
- 2025-10-27 PASS 34 seconds
- 2025-10-28 PASS 25 seconds
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
- 2025-11-02 PASS 39 seconds
- 2025-11-03 PASS 23 seconds
- 2025-11-04 PASS 29 seconds
- 2025-11-05
  - PASS 51 seconds
  - PASS 35 seconds
- 2025-11-06 PASS 25 seconds
- 2025-11-07 PASS 25 seconds
- 2025-11-08 PASS 22 seconds
- 2025-11-09 PASS 30 seconds
- 2025-11-10 PASS 28 seconds
- 2025-11-11 PASS 21 seconds
- 2025-11-12 PASS 23 seconds