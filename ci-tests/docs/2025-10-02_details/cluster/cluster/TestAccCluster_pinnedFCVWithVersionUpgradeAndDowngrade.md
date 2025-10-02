# cluster/cluster/TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL(x 5)
Success rate: 88.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-08 09:32](#error-2025-09-08t0932230000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a90cddbf4f6e499baf/limits | qa | flaky_500 | 34.10s
[2025-09-14 00:28](#error-2025-09-14t0028420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c3cd444485797b20416/limits | qa | flaky_500 | 34.06s
[2025-09-15 06:20](#error-2025-09-15t0620470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b041fe60767b7f9afddc/limits | qa | flaky_500 | 35.01s
[2025-09-21 00:29](#error-2025-09-21t0029260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf46e8bd1cb41a3e7042e6/limits | qa | flaky_500 | 867.03s
[2025-10-01 04:55](#error-2025-10-01t0455000000) |  | dev |  | 1107.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 42 minutes
- 2025-09-04 PASS 34 minutes
- 2025-09-05 PASS 28 minutes
- 2025-09-06 PASS 33 minutes
- 2025-09-07 PASS 26 minutes
- 2025-09-08
  - PASS 39 minutes
  - FAIL 34 seconds

### Error 2025-09-08T09:32:23+00:00
```
2025-09-08T09:32:23.8309356Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-08T09:32:23.8315323Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-08T09:32:58.7618967Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-08T09:32:58.7619654Z     resource_cluster_test.go:1398: Step 1/7 error: Error running apply: exit status 1
2025-09-08T09:32:58.7620045Z         
2025-09-08T09:32:58.7620525Z         Error: error when getting project properties after create
2025-09-08T09:32:58.7620917Z         
2025-09-08T09:32:58.7621400Z           with mongodbatlas_project.test,
2025-09-08T09:32:58.7622117Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:32:58.7622699Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:32:58.7623126Z         
2025-09-08T09:32:58.7623684Z         error getting project (68bea2a90cddbf4f6e499baf): error getting project's
2025-09-08T09:32:58.7624243Z         limits (68bea2a90cddbf4f6e499baf):
2025-09-08T09:32:58.7624919Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a90cddbf4f6e499baf/limits
2025-09-08T09:32:58.7625675Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:32:58.7626344Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:32:58.7626720Z         BadRequestDetail: 
2025-09-08T09:32:58.8133906Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (34.98s)
```

  - PASS 32 minutes
- 2025-09-09 PASS 36 minutes
- 2025-09-10 PASS 30 minutes
- 2025-09-11 PASS 29 minutes
- 2025-09-12 PASS 26 minutes
- 2025-09-13 PASS 31 minutes
- 2025-09-14

### Error 2025-09-14T00:28:42+00:00
```
2025-09-14T00:28:42.3141311Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-14T00:28:42.3143395Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-14T00:29:16.8971048Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-14T00:29:16.8971740Z     resource_cluster_test.go:1398: Step 1/7 error: Error running apply: exit status 1
2025-09-14T00:29:16.8972414Z         
2025-09-14T00:29:16.8972803Z         Error: error when getting project properties after create
2025-09-14T00:29:16.8973130Z         
2025-09-14T00:29:16.8973425Z           with mongodbatlas_project.test,
2025-09-14T00:29:16.8974012Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:29:16.8974545Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:29:16.8975074Z         
2025-09-14T00:29:16.8975524Z         error getting project (68c60c3cd444485797b20416): error getting project's
2025-09-14T00:29:16.8975977Z         limits (68c60c3cd444485797b20416):
2025-09-14T00:29:16.8976541Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c3cd444485797b20416/limits
2025-09-14T00:29:16.8977197Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:29:16.8977758Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:29:16.8978146Z         BadRequestDetail: 
2025-09-14T00:29:16.9443517Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (34.63s)
```

- 2025-09-15
  - PASS 22 minutes
  - FAIL 35 seconds

### Error 2025-09-15T06:20:47+00:00
```
2025-09-15T06:20:47.5492694Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-15T06:20:47.5495818Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-15T06:21:22.6269591Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-15T06:21:22.6270749Z     resource_cluster_test.go:1398: Step 1/7 error: Error running apply: exit status 1
2025-09-15T06:21:22.6271411Z         
2025-09-15T06:21:22.6272033Z         Error: error when getting project properties after create
2025-09-15T06:21:22.6272571Z         
2025-09-15T06:21:22.6273054Z           with mongodbatlas_project.test,
2025-09-15T06:21:22.6274100Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:21:22.6275002Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:21:22.6275469Z         
2025-09-15T06:21:22.6276219Z         error getting project (68c7b041fe60767b7f9afddc): error getting project's
2025-09-15T06:21:22.6276995Z         limits (68c7b041fe60767b7f9afddc):
2025-09-15T06:21:22.6277980Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b041fe60767b7f9afddc/limits
2025-09-15T06:21:22.6279106Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:21:22.6287087Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:21:22.6287774Z         BadRequestDetail: 
2025-09-15T06:21:22.6810376Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (35.14s)
```

- 2025-09-16 PASS 27 minutes
- 2025-09-17 PASS 28 minutes
- 2025-09-18 PASS 28 minutes
- 2025-09-19 PASS 31 minutes
- 2025-09-20 PASS 31 minutes
- 2025-09-21

### Error 2025-09-21T00:29:26+00:00
```
2025-09-21T00:29:26.8685919Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-21T00:29:26.8774514Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-21T00:40:22.4597530Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-21T00:40:22.4598373Z     resource_cluster_test.go:1398: Step 2/7 error: Error running pre-apply plan: exit status 1
2025-09-21T00:40:22.4598791Z         
2025-09-21T00:40:22.4599301Z         Error: error when getting project properties after create
2025-09-21T00:40:22.4600140Z         
2025-09-21T00:40:22.4600445Z           with mongodbatlas_project.test,
2025-09-21T00:40:22.4601041Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:40:22.4601571Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:40:22.4601845Z         
2025-09-21T00:40:22.4602285Z         error getting project (68cf46e8bd1cb41a3e7042e6): error getting project's
2025-09-21T00:40:22.4602735Z         limits (68cf46e8bd1cb41a3e7042e6):
2025-09-21T00:40:22.4603302Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46e8bd1cb41a3e7042e6/limits
2025-09-21T00:40:22.4603945Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:40:22.4604502Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:40:22.4604873Z         BadRequestDetail: 
2025-09-21T00:43:54.1805694Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (867.32s)
```

- 2025-09-22 PASS 29 minutes
- 2025-09-23 PASS 29 minutes
- 2025-09-24 PASS 30 minutes
- 2025-09-25 PASS 30 minutes
- 2025-09-26 PASS 28 minutes
- 2025-09-27 PASS 29 minutes
- 2025-09-28 PASS 28 minutes
- 2025-09-29 PASS 31 minutes
- 2025-09-30
  - PASS 35 minutes
  - PASS 29 minutes
  - PASS 28 minutes
- 2025-10-01
  - PASS 27 minutes
  - PASS 29 minutes
  - FAIL 18 minutes

### Error 2025-10-01T04:55:00+00:00
```
2025-10-01T04:55:00.1758935Z === RUN   TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-10-01T04:55:00.1761442Z === CONT  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-10-01T05:10:23.5867068Z === NAME  TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-10-01T05:10:23.5868118Z     resource_cluster_test.go:1398: Step 4/7 error: Error running apply: exit status 1
2025-10-01T05:10:23.5868660Z         
2025-10-01T05:10:23.5869624Z         Error: error reading Advanced Configuration Option (v20240530) for MongoDB Cluster (test-acc-tf-c-8575190381378573337): undefined response type
2025-10-01T05:10:23.5870229Z         
2025-10-01T05:10:23.5870929Z           with data.mongodbatlas_cluster.test,
2025-10-01T05:10:23.5871523Z           on terraform_plugin_test.tf line 42, in data "mongodbatlas_cluster" "test":
2025-10-01T05:10:23.5872041Z           42: 		data "mongodbatlas_cluster" "test" {
2025-10-01T05:10:23.5872329Z         
2025-10-01T05:13:27.7459123Z --- FAIL: TestAccCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1107.57s)
```

  - PASS 27 minutes
  - PASS 27 minutes
  - PASS 28 minutes
  - PASS 29 minutes
  - PASS 29 minutes
- 2025-10-02 PASS 33 minutes