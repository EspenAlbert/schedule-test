# project/project/TestAccProject_basic Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa |  | 1.02s
[2025-06-05 00:29](#error-2025-06-05t0029340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 1.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 2 minutes
- 2025-04-13 PASS a minute
- 2025-04-14 PASS 3 minutes
- 2025-04-15 PASS a minute
- 2025-04-16
  - PASS a minute
  - PASS a minute
- 2025-04-17 PASS a minute
- 2025-04-18 PASS a minute
- 2025-04-19 PASS 3 minutes
- 2025-04-20 PASS a minute
- 2025-04-21 PASS 2 minutes
- 2025-04-22 PASS a minute
- 2025-04-23 PASS 3 minutes
- 2025-04-24 PASS a minute
- 2025-04-25 PASS a minute
- 2025-04-26 PASS 7 minutes
- 2025-04-27 PASS 3 minutes
- 2025-04-28 PASS a minute
- 2025-04-29 PASS a minute
- 2025-04-30
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS a minute
- 2025-05-02 PASS 2 minutes
- 2025-05-03 PASS a minute
- 2025-05-04 PASS a minute
- 2025-05-05 PASS a minute
- 2025-05-06 PASS a minute
- 2025-05-07 PASS 3 minutes
- 2025-05-08 PASS a minute
- 2025-05-09 PASS 3 minutes
- 2025-05-10 PASS 2 minutes
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.3770733Z === RUN   TestAccProject_basic
2025-05-11T00:30:20.3781013Z === CONT  TestAccProject_basic
2025-05-11T00:30:20.3793120Z === NAME  TestAccProject_basic
2025-05-11T00:30:20.3793662Z     resource_project_test.go:540: Step 1/4 error: Error running pre-apply plan: exit status 1
2025-05-11T00:30:20.3794086Z         
2025-05-11T00:30:20.3794454Z         Error: error in monogbatlas_projects data source
2025-05-11T00:30:20.3794774Z         
2025-05-11T00:30:20.3795112Z           with data.mongodbatlas_projects.test,
2025-05-11T00:30:20.3795743Z           on terraform_plugin_test.tf line 40, in data "mongodbatlas_projects" "test":
2025-05-11T00:30:20.3796293Z           40: 			data "mongodbatlas_projects" "test" {
2025-05-11T00:30:20.3796590Z         
2025-05-11T00:30:20.3797068Z         error getting projects information: (503 Service Unavailable) failed to
2025-05-11T00:30:20.3797595Z         decode response body: undefined response type
2025-05-11T00:30:20.3797929Z --- FAIL: TestAccProject_basic (1.17s)
```

- 2025-05-12 PASS 3 minutes
- 2025-05-13
  - PASS a minute
  - PASS a minute
- 2025-05-14 PASS 3 minutes
- 2025-05-15 PASS a minute
- 2025-05-16 PASS a minute
- 2025-05-17 PASS 2 minutes
- 2025-05-18 PASS a minute
- 2025-05-19 PASS a minute
- 2025-05-20 PASS a minute
- 2025-05-21 PASS a minute
- 2025-05-22 PASS 2 minutes
- 2025-05-23 PASS a minute
- 2025-05-24 PASS 2 minutes
- 2025-05-25 PASS a minute
- 2025-05-26 PASS 2 minutes
- 2025-05-27
  - PASS a minute
  - PASS 47 seconds
- 2025-05-28
  - PASS a minute
  - PASS 2 minutes
- 2025-05-29 PASS 3 minutes
- 2025-05-30 PASS 2 minutes
- 2025-05-31 PASS a minute
- 2025-06-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS a minute
  - PASS a minute
- 2025-06-02
  - PASS 2 minutes
  - PASS 5 minutes
  - PASS 2 minutes
- 2025-06-03 PASS 2 minutes
- 2025-06-04 PASS 3 minutes
- 2025-06-05

### Error 2025-06-05T00:29:34+00:00
```
2025-06-05T00:29:34.4928318Z === RUN   TestAccProject_basic
2025-06-05T00:29:34.4939712Z === CONT  TestAccProject_basic
2025-06-05T00:29:34.4951944Z === NAME  TestAccProject_basic
2025-06-05T00:29:34.4952502Z     resource_project_test.go:540: Step 1/4 error: Error running pre-apply plan: exit status 1
2025-06-05T00:29:34.4952928Z         
2025-06-05T00:29:34.4953283Z         Error: error in monogbatlas_projects data source
2025-06-05T00:29:34.4953599Z         
2025-06-05T00:29:34.4953928Z           with data.mongodbatlas_projects.test,
2025-06-05T00:29:34.4954528Z           on terraform_plugin_test.tf line 40, in data "mongodbatlas_projects" "test":
2025-06-05T00:29:34.4955187Z           40: 			data "mongodbatlas_projects" "test" {
2025-06-05T00:29:34.4955499Z         
2025-06-05T00:29:34.4955796Z         error getting projects information:
2025-06-05T00:29:34.4956349Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups GET: HTTP 500 Internal
2025-06-05T00:29:34.4956973Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.4957555Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.4957933Z --- FAIL: TestAccProject_basic (1.38s)
```

- 2025-06-06 PASS 4 minutes
- 2025-06-07 PASS a minute
- 2025-06-08 PASS 2 minutes
- 2025-06-09 PASS 3 minutes
- 2025-06-10 PASS 3 minutes
- 2025-06-11
  - PASS 2 minutes
  - PASS a minute
- 2025-06-12 PASS 3 minutes
- 2025-06-13 PASS 4 minutes
- 2025-06-14 PASS 2 minutes
- 2025-06-15 PASS 3 minutes
- 2025-06-16 PASS 2 minutes
- 2025-06-17 PASS 2 minutes
- 2025-06-18 PASS a minute
- 2025-06-19 PASS a minute
- 2025-06-20 PASS 2 minutes
- 2025-06-21 PASS 4 minutes
- 2025-06-22 PASS 3 minutes
- 2025-06-23 PASS a minute
- 2025-06-24 PASS 3 minutes
- 2025-06-25 PASS 4 minutes
- 2025-06-26 PASS 3 minutes
- 2025-06-27 PASS 2 minutes
- 2025-06-28 PASS a minute
- 2025-06-29 PASS 9 minutes
- 2025-06-30 PASS 3 minutes
- 2025-07-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-07-02 PASS 2 minutes
- 2025-07-03 PASS 2 minutes
- 2025-07-04 PASS 2 minutes
- 2025-07-05 PASS 2 minutes
- 2025-07-06 PASS 3 minutes
- 2025-07-07 PASS 2 minutes
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10 PASS 3 minutes