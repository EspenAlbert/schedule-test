# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 4)
Success rate: 96.52%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030110000) |  | qa |  | 1.07s
[2025-06-05 00:35](#error-2025-06-05t0035390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 7.01s
[2025-06-22 01:03](#error-2025-06-22t0103370000) | UNEXPECTED_ERROR /api/atlas/v2/groups/685756c8ab82446d9bfb37f6/limits | qa | flaky_500 | 1117.03s
[2025-06-29 01:04](#error-2025-06-29t0104170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860917b49709c3a5a3cbd5f/limits | qa | flaky_500 | 1117.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 22 minutes
- 2025-04-13 PASS 26 minutes
- 2025-04-14 PASS 20 minutes
- 2025-04-15 PASS 35 minutes
- 2025-04-16
  - PASS 22 minutes
  - PASS 27 minutes
- 2025-04-17 PASS 24 minutes
- 2025-04-18 PASS 25 minutes
- 2025-04-19 PASS 21 minutes
- 2025-04-20 PASS 23 minutes
- 2025-04-21 PASS 23 minutes
- 2025-04-22 PASS 24 minutes
- 2025-04-23 PASS 23 minutes
- 2025-04-24 PASS 23 minutes
- 2025-04-25 PASS 23 minutes
- 2025-04-26 PASS 22 minutes
- 2025-04-27 PASS 27 minutes
- 2025-04-28 PASS 21 minutes
- 2025-04-29 PASS 24 minutes
- 2025-04-30 PASS 26 minutes
- 2025-05-01
  - PASS 24 minutes
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 22 minutes
  - PASS 20 minutes
  - PASS 20 minutes
  - PASS 21 minutes
- 2025-05-02 PASS 26 minutes
- 2025-05-03 PASS 24 minutes
- 2025-05-04 PASS 21 minutes
- 2025-05-05 PASS 20 minutes
- 2025-05-06 PASS 23 minutes
- 2025-05-07 PASS 21 minutes
- 2025-05-08 PASS 23 minutes
- 2025-05-09 PASS 24 minutes
- 2025-05-10 PASS 20 minutes
- 2025-05-11

### Error 2025-05-11T00:30:11+00:00
```
2025-05-11T00:30:11.0326150Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-11T00:30:11.3737615Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-11T00:30:12.9127790Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-05-11T00:30:12.9132002Z     resource_advanced_cluster_test.go:1156: Step 1/8 error: Error running apply: exit status 1
2025-05-11T00:30:12.9133864Z         
2025-05-11T00:30:12.9138262Z         Error: error creating project: test-acc-tf-p-632784801616494001
2025-05-11T00:30:12.9142629Z         
2025-05-11T00:30:12.9145016Z           with mongodbatlas_project.test,
2025-05-11T00:30:12.9148211Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:12.9151494Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:12.9167471Z         
2025-05-11T00:30:12.9168705Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:12.9169716Z         type
2025-05-11T00:30:13.0300391Z   
2025-05-11T00:30:13.0704833Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1.70s)
```

- 2025-05-12 PASS 22 minutes
- 2025-05-13
  - PASS 25 minutes
  - PASS 22 minutes
- 2025-05-14 PASS 24 minutes
- 2025-05-15 PASS 25 minutes
- 2025-05-16 PASS 23 minutes
- 2025-05-17 PASS 24 minutes
- 2025-05-18 PASS 21 minutes
- 2025-05-19 PASS 22 minutes
- 2025-05-20 PASS 24 minutes
- 2025-05-21 PASS 22 minutes
- 2025-05-22 PASS 23 minutes
- 2025-05-23 PASS 22 minutes
- 2025-05-24 PASS 22 minutes
- 2025-05-25 PASS 23 minutes
- 2025-05-26 PASS 21 minutes
- 2025-05-27 PASS 20 minutes
- 2025-05-28
  - PASS 21 minutes
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-05-29
  - PASS 28 minutes
  - PASS 20 minutes
- 2025-05-30
  - PASS an hour
  - PASS 25 minutes
- 2025-05-31 PASS 22 minutes
- 2025-06-01
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 19 minutes
  - PASS 23 minutes
  - PASS 20 minutes
  - PASS 21 minutes
- 2025-06-02
  - PASS 22 minutes
  - PASS 31 minutes
  - PASS 22 minutes
- 2025-06-03 PASS 22 minutes
- 2025-06-04 PASS 24 minutes
- 2025-06-05

### Error 2025-06-05T00:35:39+00:00
```
2025-06-05T00:35:39.9467197Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-05T00:35:42.8428732Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-05T00:35:49.8558182Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-05T00:35:49.8559069Z     resource_advanced_cluster_test.go:1159: Step 1/8 error: Error running apply: exit status 1
2025-06-05T00:35:49.8559501Z         
2025-06-05T00:35:49.8560001Z         Error: error creating project: test-acc-tf-p-6125930125922119049
2025-06-05T00:35:49.8560408Z         
2025-06-05T00:35:49.8560763Z           with mongodbatlas_project.test,
2025-06-05T00:35:49.8561463Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:35:49.8562081Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:35:49.8562372Z         
2025-06-05T00:35:49.8562947Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:35:49.8563854Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:35:49.8564421Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:35:49.8679791Z    test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-06-05T00:35:49.9201807Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (7.09s)
```

- 2025-06-06 PASS 25 minutes
- 2025-06-07 PASS 23 minutes
- 2025-06-08 PASS 21 minutes
- 2025-06-09 PASS 26 minutes
- 2025-06-10 PASS 23 minutes
- 2025-06-11
  - PASS 22 minutes
  - PASS 25 minutes
- 2025-06-12 PASS 24 minutes
- 2025-06-13 PASS 25 minutes
- 2025-06-14 PASS 31 minutes
- 2025-06-15 PASS 22 minutes
- 2025-06-16 PASS 23 minutes
- 2025-06-17 PASS 39 minutes
- 2025-06-18
  - PASS 24 minutes
  - PASS 21 minutes
- 2025-06-19 PASS 52 minutes
- 2025-06-20 PASS 22 minutes
- 2025-06-21 PASS 23 minutes
- 2025-06-22

### Error 2025-06-22T01:03:37+00:00
```
2025-06-22T01:03:37.8791080Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-22T01:05:07.9352905Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-22T01:20:43.4202847Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-22T01:20:43.4203823Z     resource_advanced_cluster_test.go:1159: Step 5/8 error: Error running post-apply refresh plan: exit status 1
2025-06-22T01:20:43.4204399Z         
2025-06-22T01:20:43.4204870Z         Error: error when getting project properties after create
2025-06-22T01:20:43.4205191Z         
2025-06-22T01:20:43.4205506Z           with mongodbatlas_project.test,
2025-06-22T01:20:43.4206232Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T01:20:43.4206863Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T01:20:43.4207211Z         
2025-06-22T01:20:43.4207660Z         error getting project (685756c8ab82446d9bfb37f6): error getting project's
2025-06-22T01:20:43.4208300Z         limits (685756c8ab82446d9bfb37f6):
2025-06-22T01:20:43.4208989Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/685756c8ab82446d9bfb37f6/limits
2025-06-22T01:20:43.4209752Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T01:20:43.4210314Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T01:20:43.4210694Z         BadRequestDetail: 
2025-06-22T01:23:45.2437161Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1117.31s)
```

- 2025-06-23 PASS 21 minutes
- 2025-06-24 PASS 26 minutes
- 2025-06-25 PASS 21 minutes
- 2025-06-26 PASS 23 minutes
- 2025-06-27 PASS 23 minutes
- 2025-06-28 PASS 22 minutes
- 2025-06-29

### Error 2025-06-29T01:04:17+00:00
```
2025-06-29T01:04:17.0050996Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-29T01:05:58.2710815Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-29T01:17:43.6893677Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-06-29T01:17:43.6894583Z     resource_advanced_cluster_test.go:1159: Step 2/8 error: Error running post-apply refresh plan: exit status 1
2025-06-29T01:17:43.6895230Z         
2025-06-29T01:17:43.6895727Z         Error: error when getting project properties after create
2025-06-29T01:17:43.6896062Z         
2025-06-29T01:17:43.6896497Z           with mongodbatlas_project.test,
2025-06-29T01:17:43.6897432Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T01:17:43.6898012Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T01:17:43.6898294Z         
2025-06-29T01:17:43.6899005Z         error getting project (6860917b49709c3a5a3cbd5f): error getting project's
2025-06-29T01:17:43.6899463Z         limits (6860917b49709c3a5a3cbd5f):
2025-06-29T01:17:43.6900015Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860917b49709c3a5a3cbd5f/limits
2025-06-29T01:17:43.6900665Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T01:17:43.6901218Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T01:17:43.6901589Z         BadRequestDetail: 
2025-06-29T01:17:45.8201922Z   
2025-06-29T01:24:36.0629738Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1117.79s)
```

- 2025-06-30 PASS 19 minutes
- 2025-07-01
  - PASS 22 minutes
  - PASS 21 minutes
  - PASS 22 minutes
  - PASS 21 minutes
  - PASS 25 minutes
- 2025-07-02 PASS 22 minutes
- 2025-07-03 PASS 21 minutes
- 2025-07-04 PASS 21 minutes
- 2025-07-05 PASS 22 minutes
- 2025-07-06 PASS 23 minutes
- 2025-07-07 PASS 21 minutes
- 2025-07-08 PASS 20 minutes
- 2025-07-09 PASS 22 minutes
- 2025-07-10 PASS 22 minutes