# cluster/cluster/TestAccCluster_create_RedactClientLogData Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:28](#error-2025-09-14t0028420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c3cd444485797b2040c/limits | qa | flaky_500 | 34.03s
[2025-09-15 06:20](#error-2025-09-15t0620470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b041fe60767b7f9afde1/limits | qa | flaky_500 | 35.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 35 minutes
- 2025-09-04 PASS 27 minutes
- 2025-09-05 PASS 19 minutes
- 2025-09-06 PASS 22 minutes
- 2025-09-07 PASS 20 minutes
- 2025-09-08
  - PASS 28 minutes
  - PASS 21 minutes
  - PASS 22 minutes
- 2025-09-09 PASS 28 minutes
- 2025-09-10 PASS 25 minutes
- 2025-09-11 PASS 20 minutes
- 2025-09-12 PASS 18 minutes
- 2025-09-13 PASS 21 minutes
- 2025-09-14

### Error 2025-09-14T00:28:42+00:00
```
2025-09-14T00:28:42.3140012Z === RUN   TestAccCluster_create_RedactClientLogData
2025-09-14T00:28:42.3193800Z === CONT  TestAccCluster_create_RedactClientLogData
2025-09-14T00:29:16.6148546Z === NAME  TestAccCluster_create_RedactClientLogData
2025-09-14T00:29:16.6149207Z     resource_cluster_test.go:1368: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:29:16.6149715Z         
2025-09-14T00:29:16.6150098Z         Error: error when getting project properties after create
2025-09-14T00:29:16.6150530Z         
2025-09-14T00:29:16.6150827Z           with mongodbatlas_project.test,
2025-09-14T00:29:16.6151522Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:16.6152061Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:16.6152347Z         
2025-09-14T00:29:16.6152788Z         error getting project (68c60c3cd444485797b2040c): error getting project's
2025-09-14T00:29:16.6153233Z         limits (68c60c3cd444485797b2040c):
2025-09-14T00:29:16.6153792Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c3cd444485797b2040c/limits
2025-09-14T00:29:16.6154470Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:16.6155254Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:16.6155967Z         BadRequestDetail: 
2025-09-14T00:29:16.6612423Z --- FAIL: TestAccCluster_create_RedactClientLogData (34.34s)
```

- 2025-09-15
  - PASS 17 minutes
  - FAIL 35 seconds

### Error 2025-09-15T06:20:47+00:00
```
2025-09-15T06:20:47.5491060Z === RUN   TestAccCluster_create_RedactClientLogData
2025-09-15T06:20:47.5497131Z === CONT  TestAccCluster_create_RedactClientLogData
2025-09-15T06:21:22.5433030Z === NAME  TestAccCluster_create_RedactClientLogData
2025-09-15T06:21:22.5433761Z     resource_cluster_test.go:1368: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:21:22.5434182Z         
2025-09-15T06:21:22.5434868Z         Error: error when getting project properties after create
2025-09-15T06:21:22.5435358Z         
2025-09-15T06:21:22.5435656Z           with mongodbatlas_project.test,
2025-09-15T06:21:22.5436283Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:22.5436822Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:22.5437100Z         
2025-09-15T06:21:22.5437536Z         error getting project (68c7b041fe60767b7f9afde1): error getting project's
2025-09-15T06:21:22.5437983Z         limits (68c7b041fe60767b7f9afde1):
2025-09-15T06:21:22.5438546Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b041fe60767b7f9afde1/limits
2025-09-15T06:21:22.5439198Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:22.5440018Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:22.5440480Z         BadRequestDetail: 
2025-09-15T06:21:22.5958085Z --- FAIL: TestAccCluster_create_RedactClientLogData (35.05s)
```

- 2025-09-16 PASS 19 minutes
- 2025-09-17 PASS 21 minutes
- 2025-09-18 PASS 24 minutes
- 2025-09-19 PASS 19 minutes
- 2025-09-20 PASS 19 minutes
- 2025-09-21 PASS 17 minutes
- 2025-09-22 PASS 17 minutes
- 2025-09-23 PASS 19 minutes
- 2025-09-24 PASS 18 minutes
- 2025-09-25 PASS 19 minutes
- 2025-09-26 PASS 20 minutes
- 2025-09-27 PASS 17 minutes
- 2025-09-28 PASS 16 minutes
- 2025-09-29 PASS 21 minutes
- 2025-09-30
  - PASS 26 minutes
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-10-01
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 20 minutes
  - PASS 15 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 22 minutes