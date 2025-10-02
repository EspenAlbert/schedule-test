# cloud_user/clouduserprojectassignment/TestAccCloudUserProjectAssignment_basic Test Details
# Found 34 TestRuns in dev, qa from 2025-09-10 to 2025-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:29](#error-2025-09-14t0029160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c39d444485797b1fb21/limits | qa | flaky_500 | 35.08s
[2025-09-15 06:21](#error-2025-09-15t0621200000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03dd444485797b5c658/limits | qa | flaky_500 | 35.02s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05: MISSING
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10 PASS 12 seconds
- 2025-09-11 PASS 18 seconds
- 2025-09-12
  - PASS 18 seconds
  - PASS 11 seconds
- 2025-09-13 PASS 12 seconds
- 2025-09-14

### Error 2025-09-14T00:29:16+00:00
```
2025-09-14T00:29:16.2325033Z === RUN   TestAccCloudUserProjectAssignment_basic
2025-09-14T00:29:16.2326010Z     resource_test.go:22: Creating execution project: test-acc-tf-p-7346769457929025871
2025-09-14T00:29:16.2330551Z === CONT  TestAccCloudUserProjectAssignment_basic
2025-09-14T00:29:16.2352594Z === NAME  TestAccCloudUserProjectAssignment_basic
2025-09-14T00:29:16.2353100Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2025-09-14T00:29:16.2353465Z         
2025-09-14T00:29:16.2354699Z         Error: error when getting project properties after create
2025-09-14T00:29:16.2355153Z         
2025-09-14T00:29:16.2355497Z           with mongodbatlas_project.test,
2025-09-14T00:29:16.2356099Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:16.2356638Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:16.2356950Z         
2025-09-14T00:29:16.2357399Z         error getting project (68c60c39d444485797b1fb21): error getting project's
2025-09-14T00:29:16.2357850Z         limits (68c60c39d444485797b1fb21):
2025-09-14T00:29:16.2358429Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c39d444485797b1fb21/limits
2025-09-14T00:29:16.2359097Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:16.2359681Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:16.2360079Z         BadRequestDetail: 
2025-09-14T00:29:16.2360418Z --- FAIL: TestAccCloudUserProjectAssignment_basic (35.81s)
```

- 2025-09-15
  - PASS 12 seconds
  - FAIL 35 seconds

### Error 2025-09-15T06:21:20+00:00
```
2025-09-15T06:21:20.4005287Z === RUN   TestAccCloudUserProjectAssignment_basic
2025-09-15T06:21:20.4006205Z     resource_test.go:22: Creating execution project: test-acc-tf-p-940258839802188610
2025-09-15T06:21:20.4010029Z === CONT  TestAccCloudUserProjectAssignment_basic
2025-09-15T06:21:20.4031794Z === NAME  TestAccCloudUserProjectAssignment_basic
2025-09-15T06:21:20.4032300Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2025-09-15T06:21:20.4032668Z         
2025-09-15T06:21:20.4033058Z         Error: error when getting project properties after create
2025-09-15T06:21:20.4033394Z         
2025-09-15T06:21:20.4033689Z           with mongodbatlas_project.test,
2025-09-15T06:21:20.4034269Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:20.4034804Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:20.4035091Z         
2025-09-15T06:21:20.4035532Z         error getting project (68c7b03dd444485797b5c658): error getting project's
2025-09-15T06:21:20.4035991Z         limits (68c7b03dd444485797b5c658):
2025-09-15T06:21:20.4036555Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03dd444485797b5c658/limits
2025-09-15T06:21:20.4037209Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:20.4037780Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:20.4038360Z         BadRequestDetail: 
2025-09-15T06:21:20.4038693Z --- FAIL: TestAccCloudUserProjectAssignment_basic (35.22s)
```

- 2025-09-16 PASS 10 seconds
- 2025-09-17 PASS 16 seconds
- 2025-09-18 PASS 9 seconds
- 2025-09-19 PASS 11 seconds
- 2025-09-20 PASS 15 seconds
- 2025-09-21 PASS 7 seconds
- 2025-09-22 PASS 7 seconds
- 2025-09-23 PASS 12 seconds
- 2025-09-24 PASS 9 seconds
- 2025-09-25 PASS 14 seconds
- 2025-09-26 PASS 14 seconds
- 2025-09-27 PASS 11 seconds
- 2025-09-28 PASS 8 seconds
- 2025-09-29 PASS 13 seconds
- 2025-09-30
  - PASS 10 seconds
  - PASS 6 seconds
  - PASS 10 seconds
- 2025-10-01
  - PASS 11 seconds
  - PASS 15 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 11 seconds
- 2025-10-02 PASS 7 seconds