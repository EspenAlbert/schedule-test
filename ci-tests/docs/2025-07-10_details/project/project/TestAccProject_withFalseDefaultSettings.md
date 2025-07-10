# project/project/TestAccProject_withFalseDefaultSettings Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa |  | 1.08s
[2025-06-05 00:29](#error-2025-06-05t0029340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 3.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 8 seconds
- 2025-04-13 PASS 7 seconds
- 2025-04-14 PASS 8 seconds
- 2025-04-15 PASS 5 seconds
- 2025-04-16
  - PASS 4 seconds
  - PASS 6 seconds
- 2025-04-17 PASS 6 seconds
- 2025-04-18 PASS 9 seconds
- 2025-04-19 PASS 7 seconds
- 2025-04-20 PASS 5 seconds
- 2025-04-21 PASS 6 seconds
- 2025-04-22 PASS 5 seconds
- 2025-04-23 PASS 6 seconds
- 2025-04-24 PASS 4 seconds
- 2025-04-25 PASS 4 seconds
- 2025-04-26 PASS 19 seconds
- 2025-04-27 PASS 7 seconds
- 2025-04-28 PASS 4 seconds
- 2025-04-29 PASS 4 seconds
- 2025-04-30
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-05-01
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 8 seconds
  - PASS 4 seconds
- 2025-05-02 PASS 6 seconds
- 2025-05-03 PASS 4 seconds
- 2025-05-04 PASS 5 seconds
- 2025-05-05 PASS 6 seconds
- 2025-05-06 PASS 5 seconds
- 2025-05-07 PASS 7 seconds
- 2025-05-08 PASS 4 seconds
- 2025-05-09 PASS 8 seconds
- 2025-05-10 PASS 6 seconds
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.3772211Z === RUN   TestAccProject_withFalseDefaultSettings
2025-05-11T00:30:20.3780690Z === CONT  TestAccProject_withFalseDefaultSettings
2025-05-11T00:30:20.3824662Z === NAME  TestAccProject_withFalseDefaultSettings
2025-05-11T00:30:20.3825214Z     resource_project_test.go:655: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:30:20.3825610Z         
2025-05-11T00:30:20.3826046Z         Error: error creating project: test-acc-tf-p-2557737635407820600
2025-05-11T00:30:20.3826405Z         
2025-05-11T00:30:20.3826725Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3827373Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3827933Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3828250Z         
2025-05-11T00:30:20.3828744Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3829157Z         type
2025-05-11T00:30:20.3838074Z   
2025-05-11T00:30:20.3938407Z --- FAIL: TestAccProject_withFalseDefaultSettings (1.78s)
```

- 2025-05-12 PASS 7 seconds
- 2025-05-13
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-14 PASS 7 seconds
- 2025-05-15 PASS 7 seconds
- 2025-05-16 PASS 7 seconds
- 2025-05-17 PASS 6 seconds
- 2025-05-18 PASS 5 seconds
- 2025-05-19 PASS 6 seconds
- 2025-05-20 PASS 4 seconds
- 2025-05-21 PASS 4 seconds
- 2025-05-22 PASS 5 seconds
- 2025-05-23 PASS 6 seconds
- 2025-05-24 PASS 6 seconds
- 2025-05-25 PASS 4 seconds
- 2025-05-26 PASS 6 seconds
- 2025-05-27
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-28
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-05-29 PASS 7 seconds
- 2025-05-30 PASS 6 seconds
- 2025-05-31 PASS 4 seconds
- 2025-06-01
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 4 seconds
- 2025-06-02
  - PASS 4 seconds
  - PASS 8 seconds
  - PASS 5 seconds
- 2025-06-03 PASS 7 seconds
- 2025-06-04 PASS 7 seconds
- 2025-06-05

### Error 2025-06-05T00:29:34+00:00
```
2025-06-05T00:29:34.4929573Z === RUN   TestAccProject_withFalseDefaultSettings
2025-06-05T00:29:34.4938738Z === CONT  TestAccProject_withFalseDefaultSettings
2025-06-05T00:29:34.4969097Z === NAME  TestAccProject_withFalseDefaultSettings
2025-06-05T00:29:34.4969649Z     resource_project_test.go:655: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:29:34.4970046Z         
2025-06-05T00:29:34.4970463Z         Error: error creating project: test-acc-tf-p-2268353471574042511
2025-06-05T00:29:34.4970821Z         
2025-06-05T00:29:34.4971127Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.4971910Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.4972468Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.4972769Z         
2025-06-05T00:29:34.4973239Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.4973870Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.4974447Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.4974874Z --- FAIL: TestAccProject_withFalseDefaultSettings (3.23s)
```

- 2025-06-06 PASS 7 seconds
- 2025-06-07 PASS 6 seconds
- 2025-06-08 PASS 8 seconds
- 2025-06-09 PASS 7 seconds
- 2025-06-10 PASS 7 seconds
- 2025-06-11
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-06-12 PASS 7 seconds
- 2025-06-13 PASS 8 seconds
- 2025-06-14 PASS 6 seconds
- 2025-06-15 PASS 6 seconds
- 2025-06-16 PASS 6 seconds
- 2025-06-17 PASS 5 seconds
- 2025-06-18 PASS 5 seconds
- 2025-06-19 PASS 5 seconds
- 2025-06-20 PASS 5 seconds
- 2025-06-21 PASS 7 seconds
- 2025-06-22 PASS 5 seconds
- 2025-06-23 PASS 5 seconds
- 2025-06-24 PASS 9 seconds
- 2025-06-25 PASS 8 seconds
- 2025-06-26 PASS 7 seconds
- 2025-06-27 PASS 7 seconds
- 2025-06-28 PASS 6 seconds
- 2025-06-29 PASS 24 seconds
- 2025-06-30 PASS 6 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 4 seconds
- 2025-07-02 PASS 6 seconds
- 2025-07-03 PASS 5 seconds
- 2025-07-04 PASS 6 seconds
- 2025-07-05 PASS 4 seconds
- 2025-07-06 PASS 7 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 4 seconds
- 2025-07-09 PASS 7 seconds
- 2025-07-10 PASS 9 seconds