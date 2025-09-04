# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 03:34](#error-2025-08-24t0334470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5da04192cd1cc58a0021/limits | qa | flaky_500 | 37.02s
[2025-08-31 01:41](#error-2025-08-31t0141270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397ec7e07f9709daeffbd/limits | qa | flaky_500 | 1094.02s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.10s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 4.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 32 minutes
- 2025-08-07 PASS 47 minutes
- 2025-08-08 PASS 24 minutes
- 2025-08-09 PASS 31 minutes
- 2025-08-10 PASS 39 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 28 minutes
  - PASS 24 minutes
- 2025-08-13 PASS 29 minutes
- 2025-08-14 PASS 32 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 53 minutes
- 2025-08-17 PASS 40 minutes
- 2025-08-18 PASS 30 minutes
- 2025-08-19 PASS 25 minutes
- 2025-08-20
  - PASS 26 minutes
  - PASS 28 minutes
- 2025-08-21 PASS 26 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 24 minutes
- 2025-08-24

### Error 2025-08-24T03:34:47+00:00
```
2025-08-24T03:34:47.1417282Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-24T03:34:47.1473769Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-24T03:34:47.1551849Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-24T03:34:47.1552506Z     resource_advanced_cluster_test.go:1161: Step 1/8 error: Error running apply: exit status 1
2025-08-24T03:34:47.1552916Z         
2025-08-24T03:34:47.1553281Z         Error: error when getting project properties after create
2025-08-24T03:34:47.1553600Z         
2025-08-24T03:34:47.1553882Z           with mongodbatlas_project.test,
2025-08-24T03:34:47.1554453Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T03:34:47.1554971Z           12: resource "mongodbatlas_project" "test" {
2025-08-24T03:34:47.1555247Z         
2025-08-24T03:34:47.1555675Z         error getting project (68aa5da04192cd1cc58a0021): error getting project's
2025-08-24T03:34:47.1556120Z         limits (68aa5da04192cd1cc58a0021):
2025-08-24T03:34:47.1556676Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5da04192cd1cc58a0021/limits
2025-08-24T03:34:47.1557444Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T03:34:47.1558007Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T03:34:47.1558566Z         BadRequestDetail: 
2025-08-24T03:34:47.1559007Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (37.20s)
```

- 2025-08-25 PASS 23 minutes
- 2025-08-26 PASS 30 minutes
- 2025-08-27 PASS 34 minutes
- 2025-08-28 PASS 29 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 25 minutes
- 2025-08-31

### Error 2025-08-31T01:41:27+00:00
```
2025-08-31T01:41:27.0830680Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-31T01:41:27.0862784Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-31T01:41:27.1048137Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-08-31T01:41:27.1048880Z     resource_advanced_cluster_test.go:1161: Step 1/8 error: Error running post-apply refresh plan: exit status 1
2025-08-31T01:41:27.1049339Z         
2025-08-31T01:41:27.1049709Z         Error: error when getting project properties after create
2025-08-31T01:41:27.1050026Z         
2025-08-31T01:41:27.1050308Z           with mongodbatlas_project.test,
2025-08-31T01:41:27.1058946Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-31T01:41:27.1059811Z           12: resource "mongodbatlas_project" "test" {
2025-08-31T01:41:27.1060123Z         
2025-08-31T01:41:27.1060583Z         error getting project (68b397ec7e07f9709daeffbd): error getting project's
2025-08-31T01:41:27.1061036Z         limits (68b397ec7e07f9709daeffbd):
2025-08-31T01:41:27.1061621Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397ec7e07f9709daeffbd/limits
2025-08-31T01:41:27.1062306Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T01:41:27.1062872Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T01:41:27.1063251Z         BadRequestDetail: 
2025-08-31T01:41:27.1091165Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1094.19s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7398899Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T00:30:49.7557068Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T00:30:49.7733432Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T00:30:49.7734091Z     resource_advanced_cluster_test.go:1161: Step 1/8 error: Error running apply: exit status 1
2025-09-01T00:30:49.7734504Z         
2025-09-01T00:30:49.7734893Z         Error: error creating project: test-acc-tf-p-4832496057856448860
2025-09-01T00:30:49.7735228Z         
2025-09-01T00:30:49.7735505Z           with mongodbatlas_project.test,
2025-09-01T00:30:49.7736075Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:30:49.7736597Z           12: resource "mongodbatlas_project" "test" {
2025-09-01T00:30:49.7736872Z         
2025-09-01T00:30:49.7737324Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:49.7737957Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:49.7738556Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:49.7739140Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:49.7739534Z         BadRequestDetail: 
2025-09-01T00:30:49.7747778Z   
2025-09-01T00:30:49.7758945Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1.96s)
```

  - FAIL 4 seconds

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6679765Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T07:49:13.6721247Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T07:49:13.6816562Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-09-01T07:49:13.6817219Z     resource_advanced_cluster_test.go:1161: Step 1/8 error: Error running apply: exit status 1
2025-09-01T07:49:13.6817626Z         
2025-09-01T07:49:13.6818016Z         Error: error creating project: test-acc-tf-p-977295764177024748
2025-09-01T07:49:13.6818347Z         
2025-09-01T07:49:13.6818631Z           with mongodbatlas_project.test,
2025-09-01T07:49:13.6819322Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T07:49:13.6819851Z           12: resource "mongodbatlas_project" "test" {
2025-09-01T07:49:13.6820127Z         
2025-09-01T07:49:13.6820584Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T07:49:13.6821213Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T07:49:13.6821812Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T07:49:13.6822395Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T07:49:13.6822932Z         BadRequestDetail: 
2025-09-01T07:49:13.6830893Z   
2025-09-01T07:49:13.6873063Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (4.67s)
```

  - PASS an hour
  - PASS 30 minutes
  - PASS 23 minutes
  - PASS 35 minutes
  - PASS 22 minutes
  - PASS 27 minutes
- 2025-09-02 PASS 31 minutes
- 2025-09-03 PASS 37 minutes
- 2025-09-04 PASS 36 minutes