# autogen/projectapi/TestAccProjectAPI_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 42) FAIL
Success rate: 97.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-30 08:07](#error-2025-09-30t0807520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68db8a7e61a8db66595550f1 | qa | flaky_500 | 11.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 7 seconds
- 2025-09-05 PASS 8 seconds
- 2025-09-06 PASS 7 seconds
- 2025-09-07 PASS 8 seconds
- 2025-09-08
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-09-09 PASS 6 seconds
- 2025-09-10 PASS 9 seconds
- 2025-09-11 PASS 7 seconds
- 2025-09-12 PASS 8 seconds
- 2025-09-13 PASS 8 seconds
- 2025-09-14 PASS 7 seconds
- 2025-09-15
  - PASS 10 seconds
  - PASS 7 seconds
- 2025-09-16 PASS 6 seconds
- 2025-09-17 PASS 7 seconds
- 2025-09-18 PASS 7 seconds
- 2025-09-19 PASS 6 seconds
- 2025-09-20 PASS 7 seconds
- 2025-09-21 PASS 6 seconds
- 2025-09-22 PASS 8 seconds
- 2025-09-23 PASS 7 seconds
- 2025-09-24 PASS 7 seconds
- 2025-09-25 PASS 6 seconds
- 2025-09-26 PASS 7 seconds
- 2025-09-27 PASS 6 seconds
- 2025-09-28 PASS 8 seconds
- 2025-09-29 PASS 7 seconds
- 2025-09-30
  - PASS 9 seconds
  - FAIL 11 seconds

### Error 2025-09-30T08:07:52+00:00
```
2025-09-30T08:07:52.4536104Z === RUN   TestAccProjectAPI_basic
2025-09-30T08:07:52.4536666Z === CONT  TestAccProjectAPI_basic
2025-09-30T08:07:52.4547773Z   
2025-09-30T08:07:52.4548145Z     resource_test.go:22: Step 3/4 error: Error running apply: exit status 1
2025-09-30T08:07:52.4548519Z         
2025-09-30T08:07:52.4548800Z         Error: Error calling API in Update
2025-09-30T08:07:52.4549067Z         
2025-09-30T08:07:52.4549366Z           with mongodbatlas_project_api.test,
2025-09-30T08:07:52.4549970Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api" "test":
2025-09-30T08:07:52.4550548Z           12: 		resource "mongodbatlas_project_api" "test" {
2025-09-30T08:07:52.4550840Z         
2025-09-30T08:07:52.4551396Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68db8a7e61a8db66595550f1
2025-09-30T08:07:52.4552029Z         PATCH: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-09-30T08:07:52.4552622Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-30T08:07:52.4553046Z         BadRequestDetail: 
2025-09-30T08:07:52.4553317Z --- FAIL: TestAccProjectAPI_basic (11.54s)
```

  - PASS 5 seconds
  - PASS 8 seconds
- 2025-10-01
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-10-02 PASS 6 seconds