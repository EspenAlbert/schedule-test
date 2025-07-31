# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 01:46](#error-2025-07-06t0146530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c9c8690ae45e168bfa5c/limits | qa | flaky_500 | 734.00s
[2025-07-10 14:35](#error-2025-07-10t1435500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fc0f0006d8d55bb9e9606/limits | qa | flaky_500 | 37.04s
[2025-07-13 02:11](#error-2025-07-13t0211000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68730589207f456171043730/limits | qa | flaky_500 | 37.02s
[2025-07-20 03:59](#error-2025-07-20t0359090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3f54426db7026b5b4325/limits | qa | flaky_500 | 1166.09s
[2025-07-27 01:55](#error-2025-07-27t0155050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68857a86ef1f7377717ab7d4/limits | qa | flaky_500 | 1291.08s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 19 minutes
- 2025-07-03 PASS 18 minutes
- 2025-07-04 PASS 20 minutes
- 2025-07-05 PASS 18 minutes
- 2025-07-06

### Error 2025-07-06T01:46:53+00:00
```
2025-07-06T01:46:53.5884637Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T01:46:53.5908161Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T01:46:53.6000606Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-06T01:46:53.6001344Z     resource_advanced_cluster_test.go:1159: Step 1/8 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:46:53.6001811Z         
2025-07-06T01:46:53.6002181Z         Error: error when getting project properties after create
2025-07-06T01:46:53.6002501Z         
2025-07-06T01:46:53.6002794Z           with mongodbatlas_project.test,
2025-07-06T01:46:53.6003370Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T01:46:53.6003886Z           12: resource "mongodbatlas_project" "test" {
2025-07-06T01:46:53.6004160Z         
2025-07-06T01:46:53.6004589Z         error getting project (6869c9c8690ae45e168bfa5c): error getting project's
2025-07-06T01:46:53.6005029Z         limits (6869c9c8690ae45e168bfa5c):
2025-07-06T01:46:53.6005724Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c9c8690ae45e168bfa5c/limits
2025-07-06T01:46:53.6006382Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:46:53.6006938Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:46:53.6007422Z         BadRequestDetail: 
2025-07-06T01:46:53.6074967Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (734.02s)
```

- 2025-07-07 PASS 19 minutes
- 2025-07-08 PASS 21 minutes
- 2025-07-09 PASS 19 minutes
- 2025-07-10
  - PASS 21 minutes
  - FAIL 37 seconds

### Error 2025-07-10T14:35:50+00:00
```
2025-07-10T14:35:50.7777497Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-10T14:35:50.7806760Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-10T14:35:50.7926808Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-10T14:35:50.7927486Z     resource_advanced_cluster_test.go:1159: Step 1/8 error: Error running apply: exit status 1
2025-07-10T14:35:50.7927888Z         
2025-07-10T14:35:50.7928247Z         Error: error when getting project properties after create
2025-07-10T14:35:50.7928558Z         
2025-07-10T14:35:50.7928835Z           with mongodbatlas_project.test,
2025-07-10T14:35:50.7929404Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T14:35:50.7929908Z           12: resource "mongodbatlas_project" "test" {
2025-07-10T14:35:50.7930183Z         
2025-07-10T14:35:50.7930600Z         error getting project (686fc0f0006d8d55bb9e9606): error getting project's
2025-07-10T14:35:50.7931030Z         limits (686fc0f0006d8d55bb9e9606):
2025-07-10T14:35:50.7931579Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fc0f0006d8d55bb9e9606/limits
2025-07-10T14:35:50.7932333Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T14:35:50.7932879Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T14:35:50.7933259Z         BadRequestDetail: 
2025-07-10T14:35:50.7945540Z   
2025-07-10T14:35:50.7953204Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (37.38s)
```

- 2025-07-11: MISSING
- 2025-07-12 PASS 22 minutes
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2215551Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-13T02:11:00.2252378Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-13T02:11:00.2398699Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-13T02:11:00.2399466Z     resource_advanced_cluster_test.go:1159: Step 1/8 error: Error running apply: exit status 1
2025-07-13T02:11:00.2399867Z         
2025-07-13T02:11:00.2400226Z         Error: error when getting project properties after create
2025-07-13T02:11:00.2400536Z         
2025-07-13T02:11:00.2400813Z           with mongodbatlas_project.test,
2025-07-13T02:11:00.2401381Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-13T02:11:00.2402018Z           12: resource "mongodbatlas_project" "test" {
2025-07-13T02:11:00.2402302Z         
2025-07-13T02:11:00.2402714Z         error getting project (68730589207f456171043730): error getting project's
2025-07-13T02:11:00.2403134Z         limits (68730589207f456171043730):
2025-07-13T02:11:00.2403667Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68730589207f456171043730/limits
2025-07-13T02:11:00.2404296Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T02:11:00.2404844Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T02:11:00.2405210Z         BadRequestDetail: 
2025-07-13T02:11:00.2426075Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (37.23s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 22 minutes
- 2025-07-16 PASS 17 minutes
- 2025-07-17 PASS 19 minutes
- 2025-07-18 PASS 20 minutes
- 2025-07-19 PASS 18 minutes
- 2025-07-20

### Error 2025-07-20T03:59:09+00:00
```
2025-07-20T03:59:09.1114885Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-20T03:59:09.1138238Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-20T03:59:09.1286636Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-20T03:59:09.1287356Z     resource_advanced_cluster_test.go:1159: Step 7/8 error: Error running post-apply refresh plan: exit status 1
2025-07-20T03:59:09.1287812Z         
2025-07-20T03:59:09.1288170Z         Error: error when getting project properties after create
2025-07-20T03:59:09.1288490Z         
2025-07-20T03:59:09.1288771Z           with mongodbatlas_project.test,
2025-07-20T03:59:09.1289332Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T03:59:09.1289849Z           12: resource "mongodbatlas_project" "test" {
2025-07-20T03:59:09.1290130Z         
2025-07-20T03:59:09.1290548Z         error getting project (687c3f54426db7026b5b4325): error getting project's
2025-07-20T03:59:09.1291095Z         limits (687c3f54426db7026b5b4325):
2025-07-20T03:59:09.1291632Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3f54426db7026b5b4325/limits
2025-07-20T03:59:09.1292263Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T03:59:09.1292808Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T03:59:09.1293309Z         BadRequestDetail: 
2025-07-20T03:59:09.1296390Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1166.89s)
```

- 2025-07-21 PASS 20 minutes
- 2025-07-22 PASS 19 minutes
- 2025-07-23
  - PASS 17 minutes
  - PASS 27 minutes
  - PASS 19 minutes
  - PASS 22 minutes
- 2025-07-24 PASS 21 minutes
- 2025-07-25 PASS 19 minutes
- 2025-07-26 PASS 24 minutes
- 2025-07-27

### Error 2025-07-27T01:55:05+00:00
```
2025-07-27T01:55:05.6969316Z === RUN   TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-27T01:55:05.7034199Z === CONT  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-27T01:55:05.7267356Z === NAME  TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade
2025-07-27T01:55:05.7268093Z     resource_advanced_cluster_test.go:1159: Step 5/8 error: Error running post-apply refresh plan: exit status 1
2025-07-27T01:55:05.7268578Z         
2025-07-27T01:55:05.7268942Z         Error: error when getting project properties after create
2025-07-27T01:55:05.7269265Z         
2025-07-27T01:55:05.7269552Z           with mongodbatlas_project.test,
2025-07-27T01:55:05.7270131Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-27T01:55:05.7270654Z           12: resource "mongodbatlas_project" "test" {
2025-07-27T01:55:05.7270936Z         
2025-07-27T01:55:05.7271358Z         error getting project (68857a86ef1f7377717ab7d4): error getting project's
2025-07-27T01:55:05.7271793Z         limits (68857a86ef1f7377717ab7d4):
2025-07-27T01:55:05.7272346Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857a86ef1f7377717ab7d4/limits
2025-07-27T01:55:05.7272990Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T01:55:05.7273552Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T01:55:05.7273932Z         BadRequestDetail: 
2025-07-27T01:55:05.7290203Z --- FAIL: TestAccClusterAdvancedCluster_pinnedFCVWithVersionUpgradeAndDowngrade (1291.84s)
```

- 2025-07-28 PASS 27 minutes
- 2025-07-29 PASS 28 minutes
- 2025-07-30 PASS 21 minutes
- 2025-07-31 PASS 38 minutes