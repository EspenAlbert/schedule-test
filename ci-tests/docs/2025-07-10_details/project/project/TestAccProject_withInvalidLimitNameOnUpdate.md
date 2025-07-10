# project/project/TestAccProject_withInvalidLimitNameOnUpdate Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa |  | 1.06s
[2025-06-05 00:29](#error-2025-06-05t0029340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 13 seconds
- 2025-04-13 PASS 9 seconds
- 2025-04-14 PASS 11 seconds
- 2025-04-15 PASS 8 seconds
- 2025-04-16
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-04-17 PASS 8 seconds
- 2025-04-18 PASS 14 seconds
- 2025-04-19 PASS 13 seconds
- 2025-04-20 PASS 8 seconds
- 2025-04-21 PASS 11 seconds
- 2025-04-22 PASS 8 seconds
- 2025-04-23 PASS 11 seconds
- 2025-04-24 PASS 8 seconds
- 2025-04-25 PASS 8 seconds
- 2025-04-26 PASS 38 seconds
- 2025-04-27 PASS 13 seconds
- 2025-04-28 PASS 8 seconds
- 2025-04-29 PASS 9 seconds
- 2025-04-30
  - PASS 13 seconds
  - PASS 14 seconds
- 2025-05-01
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 13 seconds
  - PASS 9 seconds
- 2025-05-02 PASS 10 seconds
- 2025-05-03 PASS 8 seconds
- 2025-05-04 PASS 10 seconds
- 2025-05-05 PASS 10 seconds
- 2025-05-06 PASS 8 seconds
- 2025-05-07 PASS 12 seconds
- 2025-05-08 PASS 8 seconds
- 2025-05-09 PASS 13 seconds
- 2025-05-10 PASS 9 seconds
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.3777281Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2025-05-11T00:30:20.3783068Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2025-05-11T00:30:20.3807595Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2025-05-11T00:30:20.3808179Z     resource_project_test.go:968: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:20.3808579Z         
2025-05-11T00:30:20.3809031Z         Error: error creating project: test-acc-tf-p-3074018703706193170
2025-05-11T00:30:20.3809398Z         
2025-05-11T00:30:20.3809726Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3810349Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3810915Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3811218Z         
2025-05-11T00:30:20.3811704Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3812378Z         type
2025-05-11T00:30:20.3824403Z   
2025-05-11T00:30:20.3884303Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (1.56s)
```

- 2025-05-12 PASS 13 seconds
- 2025-05-13
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-05-14 PASS 13 seconds
- 2025-05-15 PASS 10 seconds
- 2025-05-16 PASS 8 seconds
- 2025-05-17 PASS 10 seconds
- 2025-05-18 PASS 8 seconds
- 2025-05-19 PASS 8 seconds
- 2025-05-20 PASS 7 seconds
- 2025-05-21 PASS 8 seconds
- 2025-05-22 PASS 8 seconds
- 2025-05-23 PASS 10 seconds
- 2025-05-24 PASS 13 seconds
- 2025-05-25 PASS 8 seconds
- 2025-05-26 PASS 10 seconds
- 2025-05-27
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-05-28
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-05-29 PASS 12 seconds
- 2025-05-30 PASS 11 seconds
- 2025-05-31 PASS 8 seconds
- 2025-06-01
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-06-02
  - PASS 9 seconds
  - PASS 13 seconds
  - PASS 9 seconds
- 2025-06-03 PASS 11 seconds
- 2025-06-04 PASS 13 seconds
- 2025-06-05

### Error 2025-06-05T00:29:34+00:00
```
2025-06-05T00:29:34.4934454Z === RUN   TestAccProject_withInvalidLimitNameOnUpdate
2025-06-05T00:29:34.4937412Z === CONT  TestAccProject_withInvalidLimitNameOnUpdate
2025-06-05T00:29:34.5119438Z === NAME  TestAccProject_withInvalidLimitNameOnUpdate
2025-06-05T00:29:34.5119970Z     resource_project_test.go:968: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.5120368Z         
2025-06-05T00:29:34.5120781Z         Error: error creating project: test-acc-tf-p-7979693598621544812
2025-06-05T00:29:34.5121139Z         
2025-06-05T00:29:34.5121612Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5122215Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5122889Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5123192Z         
2025-06-05T00:29:34.5123652Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5124294Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5124867Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5125316Z --- FAIL: TestAccProject_withInvalidLimitNameOnUpdate (4.79s)
```

- 2025-06-06 PASS 12 seconds
- 2025-06-07 PASS 7 seconds
- 2025-06-08 PASS 13 seconds
- 2025-06-09 PASS 12 seconds
- 2025-06-10 PASS 13 seconds
- 2025-06-11
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-06-12 PASS 12 seconds
- 2025-06-13 PASS 14 seconds
- 2025-06-14 PASS 9 seconds
- 2025-06-15 PASS 13 seconds
- 2025-06-16 PASS 10 seconds
- 2025-06-17 PASS 10 seconds
- 2025-06-18 PASS 9 seconds
- 2025-06-19 PASS 8 seconds
- 2025-06-20 PASS 10 seconds
- 2025-06-21 PASS 13 seconds
- 2025-06-22 PASS 8 seconds
- 2025-06-23 PASS 8 seconds
- 2025-06-24 PASS 14 seconds
- 2025-06-25 PASS 15 seconds
- 2025-06-26 PASS 14 seconds
- 2025-06-27 PASS 10 seconds
- 2025-06-28 PASS 11 seconds
- 2025-06-29 PASS 28 seconds
- 2025-06-30 PASS 14 seconds
- 2025-07-01
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-07-02 PASS 10 seconds
- 2025-07-03 PASS 13 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 8 seconds
- 2025-07-06 PASS 12 seconds
- 2025-07-07 PASS 11 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 12 seconds
- 2025-07-10 PASS 14 seconds