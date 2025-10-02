# cluster/cluster/TestAccCluster_WithTags Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:28](#error-2025-09-14t0028420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c3cd444485797b2040d/limits | qa | flaky_500 | 37.00s
[2025-09-15 06:20](#error-2025-09-15t0620470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b041fe60767b7f9afdde/limits | qa | flaky_500 | 34.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 44 minutes
- 2025-09-04 PASS 29 minutes
- 2025-09-05 PASS 21 minutes
- 2025-09-06 PASS 29 minutes
- 2025-09-07 PASS 25 minutes
- 2025-09-08
  - PASS 31 minutes
  - PASS 30 minutes
  - PASS 25 minutes
- 2025-09-09 PASS 28 minutes
- 2025-09-10 PASS 29 minutes
- 2025-09-11 PASS 24 minutes
- 2025-09-12 PASS 20 minutes
- 2025-09-13 PASS 25 minutes
- 2025-09-14

### Error 2025-09-14T00:28:42+00:00
```
2025-09-14T00:28:42.3106758Z === RUN   TestAccCluster_WithTags
2025-09-14T00:28:42.3188552Z === CONT  TestAccCluster_WithTags
2025-09-14T00:29:19.2847119Z === NAME  TestAccCluster_WithTags
2025-09-14T00:29:19.2847642Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2025-09-14T00:29:19.2848166Z         
2025-09-14T00:29:19.2848559Z         Error: error when getting project properties after create
2025-09-14T00:29:19.2848887Z         
2025-09-14T00:29:19.2849396Z           with mongodbatlas_project.cluster_project,
2025-09-14T00:29:19.2850168Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-14T00:29:19.2850812Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-14T00:29:19.2851140Z         
2025-09-14T00:29:19.2851601Z         error getting project (68c60c3cd444485797b2040d): error getting project's
2025-09-14T00:29:19.2852080Z         limits (68c60c3cd444485797b2040d):
2025-09-14T00:29:19.2852655Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c3cd444485797b2040d/limits
2025-09-14T00:29:19.2853315Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:19.2853885Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:19.2854273Z         BadRequestDetail: 
2025-09-14T00:29:19.3299055Z --- FAIL: TestAccCluster_WithTags (37.01s)
```

- 2025-09-15
  - PASS 20 minutes
  - FAIL 34 seconds

### Error 2025-09-15T06:20:47+00:00
```
2025-09-15T06:20:47.5438173Z === RUN   TestAccCluster_WithTags
2025-09-15T06:20:47.5535158Z === CONT  TestAccCluster_WithTags
2025-09-15T06:21:21.9784204Z === NAME  TestAccCluster_WithTags
2025-09-15T06:21:21.9785009Z     resource_cluster_test.go:697: Step 1/3 error: Error running apply: exit status 1
2025-09-15T06:21:21.9785663Z         
2025-09-15T06:21:21.9786292Z         Error: error when getting project properties after create
2025-09-15T06:21:21.9786833Z         
2025-09-15T06:21:21.9787402Z           with mongodbatlas_project.cluster_project,
2025-09-15T06:21:21.9788548Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-15T06:21:21.9789609Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-15T06:21:21.9790295Z         
2025-09-15T06:21:21.9791025Z         error getting project (68c7b041fe60767b7f9afdde): error getting project's
2025-09-15T06:21:21.9791741Z         limits (68c7b041fe60767b7f9afdde):
2025-09-15T06:21:21.9792680Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b041fe60767b7f9afdde/limits
2025-09-15T06:21:21.9793804Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:21.9795107Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:21.9795794Z         BadRequestDetail: 
2025-09-15T06:21:22.0312247Z --- FAIL: TestAccCluster_WithTags (34.48s)
```

- 2025-09-16 PASS 25 minutes
- 2025-09-17 PASS 24 minutes
- 2025-09-18 PASS 27 minutes
- 2025-09-19 PASS 23 minutes
- 2025-09-20 PASS 22 minutes
- 2025-09-21 PASS 21 minutes
- 2025-09-22 PASS 19 minutes
- 2025-09-23 PASS 21 minutes
- 2025-09-24 PASS 22 minutes
- 2025-09-25 PASS 23 minutes
- 2025-09-26 PASS 21 minutes
- 2025-09-27 PASS 24 minutes
- 2025-09-28 PASS 25 minutes
- 2025-09-29 PASS 21 minutes
- 2025-09-30
  - PASS 26 minutes
  - PASS 19 minutes
  - PASS 20 minutes
- 2025-10-01
  - PASS 19 minutes
  - PASS 19 minutes
  - PASS 39 minutes
  - PASS 18 minutes
  - PASS 20 minutes
  - PASS 21 minutes
  - PASS 21 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 27 minutes