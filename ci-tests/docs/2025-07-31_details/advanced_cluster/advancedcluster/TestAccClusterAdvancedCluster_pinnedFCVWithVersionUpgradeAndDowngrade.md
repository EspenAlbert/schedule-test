# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-13 01:05](#error-2025-07-13t0105170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68730695207f456171043e38/limits | qa | flaky_500 | 1454.10s
[2025-07-20 01:01](#error-2025-07-20t0101020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c4005426db7026b5b47b6/limits | qa | flaky_500 | 949.08s
[2025-07-23 14:31](#error-2025-07-23t1431420000) |  | dev | timeout | 11843.07s
[2025-07-23 16:34](#error-2025-07-23t1634080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68810f3993a06a13914bca3f/limits | qa | flaky_500 | 867.08s
[2025-07-27 01:03](#error-2025-07-27t0103240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68857b20ea884d723492161b/limits | qa | flaky_500 | 1584.03s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 22 minutes
- 2025-07-03 PASS 21 minutes
- 2025-07-04 PASS 21 minutes
- 2025-07-05 PASS 22 minutes
- 2025-07-06 PASS 23 minutes
- 2025-07-07 PASS 21 minutes
- 2025-07-08 PASS 20 minutes
- 2025-07-09 PASS 22 minutes
- 2025-07-10 PASS 22 minutes
- 2025-07-11 PASS 50 minutes
- 2025-07-12 PASS 24 minutes
- 2025-07-13

### Error 2025-07-13T01:05:17+00:00
```
2025-07-13T01:05:17.2345318Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-13T01:06:24.6498140Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-13T01:27:06.0313605Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-13T01:27:06.0314895Z     resource_advanced_cluster_test.go:1159: Step 4/8 error: Error running post-apply refresh plan: exit status 1
2025-07-13T01:27:06.0315676Z         
2025-07-13T01:27:06.0316270Z         Error: error when getting project properties after create
2025-07-13T01:27:06.0316797Z         
2025-07-13T01:27:06.0317271Z           with mongodbatlas_project.test,
2025-07-13T01:27:06.0318260Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-13T01:27:06.0319152Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-13T01:27:06.0319612Z         
2025-07-13T01:27:06.0320317Z         error getting project (68730695207f456171043e38): error getting project's
2025-07-13T01:27:06.0321045Z         limits (68730695207f456171043e38):
2025-07-13T01:27:06.0321969Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68730695207f456171043e38/limits
2025-07-13T01:27:06.0337681Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T01:27:06.0339101Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T01:27:06.0339798Z         BadRequestDetail: 
2025-07-13T01:30:39.6253117Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1454.98s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 23 minutes
- 2025-07-16 PASS 22 minutes
- 2025-07-17 PASS 19 minutes
- 2025-07-18 PASS 20 minutes
- 2025-07-19 PASS 23 minutes
- 2025-07-20

### Error 2025-07-20T01:01:02+00:00
```
2025-07-20T01:01:02.4840866Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-20T01:01:52.4462753Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-20T01:14:50.6646062Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-20T01:14:50.6647726Z     resource_advanced_cluster_test.go:1159: Step 3/8, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-07-20T01:14:50.6648961Z         
2025-07-20T01:14:50.6649612Z         Error: error when getting project properties after create
2025-07-20T01:14:50.6650172Z         
2025-07-20T01:14:50.6650692Z           with mongodbatlas_project.test,
2025-07-20T01:14:50.6651742Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T01:14:50.6652720Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T01:14:50.6653260Z         
2025-07-20T01:14:50.6654038Z         error getting project (687c4005426db7026b5b47b6): error getting project's
2025-07-20T01:14:50.6654826Z         limits (687c4005426db7026b5b47b6):
2025-07-20T01:14:50.6656010Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c4005426db7026b5b47b6/limits
2025-07-20T01:14:50.6657153Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T01:14:50.6658160Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T01:14:50.6658822Z         BadRequestDetail: 
2025-07-20T01:17:42.2101573Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (949.77s)
```

- 2025-07-21 PASS 20 minutes
- 2025-07-22 PASS 20 minutes
- 2025-07-23
  - PASS 19 minutes
  - PASS 22 minutes
  - FAIL 3 hours

### Error 2025-07-23T14:31:42+00:00
```
2025-07-23T14:31:42.2813091Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-23T14:32:42.6061867Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-23T17:50:06.3232072Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-23T17:50:06.3232909Z     resource_advanced_cluster_test.go:1159: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-23T17:50:06.3233424Z         
2025-07-23T17:50:06.3234322Z         Error: error deleting advanced cluster (test-acc-tf-c-7465827245273100131): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-07-23T17:50:06.3235174Z         
2025-07-23T17:50:06.3235571Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (11843.71s)
```

  - FAIL 14 minutes

### Error 2025-07-23T16:34:08+00:00
```
2025-07-23T16:34:08.4269178Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-23T16:35:00.7432498Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-23T16:46:36.8312153Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-23T16:46:36.8313461Z     resource_advanced_cluster_test.go:1159: Step 2/8 error: Error running post-apply refresh plan: exit status 1
2025-07-23T16:46:36.8313959Z         
2025-07-23T16:46:36.8314341Z         Error: error when getting project properties after create
2025-07-23T16:46:36.8314786Z         
2025-07-23T16:46:36.8315246Z           with mongodbatlas_project.test,
2025-07-23T16:46:36.8316163Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-23T16:46:36.8317034Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-23T16:46:36.8317537Z         
2025-07-23T16:46:36.8318302Z         error getting project (68810f3993a06a13914bca3f): error getting project's
2025-07-23T16:46:36.8319079Z         limits (68810f3993a06a13914bca3f):
2025-07-23T16:46:36.8320249Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68810f3993a06a13914bca3f/limits
2025-07-23T16:46:36.8321439Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T16:46:36.8322462Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T16:46:36.8323194Z         BadRequestDetail: 
2025-07-23T16:46:42.8761868Z   
2025-07-23T16:49:28.4760879Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (867.76s)
```

- 2025-07-24 PASS 22 minutes
- 2025-07-25 PASS 20 minutes
- 2025-07-26 PASS 30 minutes
- 2025-07-27

### Error 2025-07-27T01:03:24+00:00
```
2025-07-27T01:03:24.9277427Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-27T01:04:27.1023434Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-27T01:25:48.5529068Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-27T01:25:48.5529832Z     resource_advanced_cluster_test.go:1159: Step 4/8 error: Error running post-apply refresh plan: exit status 1
2025-07-27T01:25:48.5530362Z         
2025-07-27T01:25:48.5530753Z         Error: error when getting project properties after create
2025-07-27T01:25:48.5531126Z         
2025-07-27T01:25:48.5531452Z           with mongodbatlas_project.test,
2025-07-27T01:25:48.5532275Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-27T01:25:48.5532904Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-27T01:25:48.5533191Z         
2025-07-27T01:25:48.5533757Z         error getting project (68857b20ea884d723492161b): error getting project's
2025-07-27T01:25:48.5534195Z         limits (68857b20ea884d723492161b):
2025-07-27T01:25:48.5534736Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857b20ea884d723492161b/limits
2025-07-27T01:25:48.5535364Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T01:25:48.5535912Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T01:25:48.5536284Z         BadRequestDetail: 
2025-07-27T01:26:29.9678029Z 2025/07/27 01:26:29 error setting `oplog_size_mb` for MongoDB Cluster (): 0
2025-07-27T01:26:29.9680903Z 2025/07/27 01:26:29 error setting `transaction_lifetime_limit_seconds` for MongoDB Cluster (): 0
2025-07-27T01:30:51.3664045Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1584.27s)
```

- 2025-07-28 PASS 24 minutes
- 2025-07-29 PASS 24 minutes
- 2025-07-30 PASS 22 minutes
- 2025-07-31 PASS 29 minutes