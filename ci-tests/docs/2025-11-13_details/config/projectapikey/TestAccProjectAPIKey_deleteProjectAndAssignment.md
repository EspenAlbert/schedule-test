# config/projectapikey/TestAccProjectAPIKey_deleteProjectAndAssignment Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:30](#error-2025-10-30t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b154abf4374f3299d3d3 | dev | flaky_500 | 15.06s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 13 seconds
- 2025-10-16 PASS 14 seconds
- 2025-10-17 PASS 11 seconds
- 2025-10-18 PASS 12 seconds
- 2025-10-19 PASS 13 seconds
- 2025-10-20
  - PASS 12 seconds
  - PASS 9 seconds
- 2025-10-21 PASS 9 seconds
- 2025-10-22
  - PASS 18 seconds
  - PASS 13 seconds
- 2025-10-23 PASS 13 seconds
- 2025-10-24 PASS 11 seconds
- 2025-10-25 PASS 10 seconds
- 2025-10-26 PASS 12 seconds
- 2025-10-27 PASS 11 seconds
- 2025-10-28 PASS 10 seconds
- 2025-10-29 PASS 10 seconds
- 2025-10-30

### Error 2025-10-30T00:30:58+00:00
```
2025-10-30T00:30:58.3720432Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-10-30T00:30:58.3722804Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-10-30T00:30:58.3745481Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-10-30T00:30:58.3746207Z     resource_project_api_key_test.go:196: Step 2/2 error: Error running apply: exit status 1
2025-10-30T00:30:58.3746618Z         
2025-10-30T00:30:58.3746924Z         Error: error when destroying resource
2025-10-30T00:30:58.3747212Z         
2025-10-30T00:30:58.3747561Z         error deleting project (6902b154abf4374f3299d3d3):
2025-10-30T00:30:58.3748134Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b154abf4374f3299d3d3
2025-10-30T00:30:58.3748760Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:30:58.3749363Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:30:58.3749771Z         BadRequestDetail: 
2025-10-30T00:30:58.3760686Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-10-30T00:30:58.3761284Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:30:58.3761835Z         
2025-10-30T00:30:58.3762144Z         Error: error when destroying resource
2025-10-30T00:30:58.3762424Z         
2025-10-30T00:30:58.3762766Z         error deleting project (6902b154abf4374f3299d3d3):
2025-10-30T00:30:58.3763334Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b154abf4374f3299d3d3
2025-10-30T00:30:58.3763958Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:30:58.3764660Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:30:58.3765071Z         BadRequestDetail: 
2025-10-30T00:30:58.3765478Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (15.62s)
```

- 2025-10-31 PASS 10 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 12 seconds
- 2025-11-03 PASS 8 seconds
- 2025-11-04 PASS 10 seconds
- 2025-11-05
  - PASS 15 seconds
  - PASS 11 seconds
- 2025-11-06 PASS 9 seconds
- 2025-11-07 PASS 10 seconds
- 2025-11-08 PASS 9 seconds
- 2025-11-09 PASS 10 seconds
- 2025-11-10 PASS 11 seconds
- 2025-11-11 PASS 10 seconds
- 2025-11-12 PASS 8 seconds
- 2025-11-13
  - PASS 12 seconds
  - PASS 13 seconds