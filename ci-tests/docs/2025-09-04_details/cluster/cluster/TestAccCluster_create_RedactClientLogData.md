# cluster/cluster/TestAccCluster_create_RedactClientLogData Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:30](#error-2025-08-24t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2e9bbb8c4ee1f82348/limits | qa | flaky_500 | 34.05s
[2025-09-01 00:30](#error-2025-09-01t0030200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 23 minutes
- 2025-08-07 PASS 27 minutes
- 2025-08-08 PASS 20 minutes
- 2025-08-09 PASS 21 minutes
- 2025-08-10 PASS 27 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 20 minutes
  - PASS 16 minutes
- 2025-08-13 PASS 23 minutes
- 2025-08-14 PASS 27 minutes
- 2025-08-15 PASS 17 minutes
- 2025-08-16 PASS 44 minutes
- 2025-08-17 PASS 34 minutes
- 2025-08-18 PASS 19 minutes
- 2025-08-19 PASS 23 minutes
- 2025-08-20
  - PASS 22 minutes
  - PASS 23 minutes
- 2025-08-21 PASS 19 minutes
- 2025-08-22 PASS 19 minutes
- 2025-08-23 PASS 23 minutes
- 2025-08-24

### Error 2025-08-24T00:30:35+00:00
```
2025-08-24T00:30:35.9502806Z === RUN   TestAccCluster_create_RedactClientLogData
2025-08-24T00:30:35.9652360Z === CONT  TestAccCluster_create_RedactClientLogData
2025-08-24T00:31:10.3936012Z === NAME  TestAccCluster_create_RedactClientLogData
2025-08-24T00:31:10.3936587Z     resource_cluster_test.go:1368: Step 1/1 error: Error running apply: exit status 1
2025-08-24T00:31:10.3936988Z         
2025-08-24T00:31:10.3937502Z         Error: error when getting project properties after create
2025-08-24T00:31:10.3937852Z         
2025-08-24T00:31:10.3938131Z           with mongodbatlas_project.test,
2025-08-24T00:31:10.3939244Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:31:10.3939897Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:31:10.3940182Z         
2025-08-24T00:31:10.3940615Z         error getting project (68aa5d2e9bbb8c4ee1f82348): error getting project's
2025-08-24T00:31:10.3941083Z         limits (68aa5d2e9bbb8c4ee1f82348):
2025-08-24T00:31:10.3941652Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2e9bbb8c4ee1f82348/limits
2025-08-24T00:31:10.3942308Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:31:10.3942878Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:31:10.3943266Z         BadRequestDetail: 
2025-08-24T00:31:10.4354207Z --- FAIL: TestAccCluster_create_RedactClientLogData (34.47s)
```

- 2025-08-25 PASS 17 minutes
- 2025-08-26 PASS 24 minutes
- 2025-08-27 PASS 28 minutes
- 2025-08-28 PASS 25 minutes
- 2025-08-29 PASS 31 minutes
- 2025-08-30 PASS 20 minutes
- 2025-08-31 PASS 27 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.6337179Z === RUN   TestAccCluster_create_RedactClientLogData
2025-09-01T00:30:20.6340794Z === CONT  TestAccCluster_create_RedactClientLogData
2025-09-01T00:30:21.4312234Z === NAME  TestAccCluster_create_RedactClientLogData
2025-09-01T00:30:21.4312816Z     resource_cluster_test.go:1368: Step 1/1 error: Error running apply: exit status 1
2025-09-01T00:30:21.4313229Z         
2025-09-01T00:30:21.4313995Z         Error: error creating project: test-acc-tf-p-4311691493813047691
2025-09-01T00:30:21.4314381Z         
2025-09-01T00:30:21.4314692Z           with mongodbatlas_project.test,
2025-09-01T00:30:21.4315301Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:30:21.4315879Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:30:21.4316181Z         
2025-09-01T00:30:21.4316846Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:21.4318118Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:21.4318911Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:21.4319645Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:21.4320127Z         BadRequestDetail: 
2025-09-01T00:30:21.4621792Z    test_name=TestAccCluster_basic_RedactClientLogData test_terraform_path=/home/runner/work/_temp/b2a14d8b-71bf-4b90-8b36-841539cb7fdc/terraform
2025-09-01T00:30:21.4967890Z --- FAIL: TestAccCluster_create_RedactClientLogData (0.86s)
```

  - PASS an hour
  - PASS an hour
  - PASS 20 minutes
  - PASS 17 minutes
  - PASS 21 minutes
  - PASS 20 minutes
  - PASS 19 minutes
- 2025-09-02 PASS 22 minutes
- 2025-09-03 PASS 35 minutes
- 2025-09-04 PASS 27 minutes