# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_withLabels Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 01:46](#error-2025-07-06t0146530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c9c8690ae45e168bfab2/limits | qa | flaky_500 | 987.02s
[2025-07-10 14:35](#error-2025-07-10t1435500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fc0f0fd583001f9eee8e5/limits | qa | flaky_500 | 37.01s
[2025-07-13 02:11](#error-2025-07-13t0211000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6873058a006d8d55bbaa5001/limits | qa | flaky_500 | 38.01s
[2025-07-23 17:30](#error-2025-07-23t1730380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68810ea493a06a13914bc3d7/limits | qa | flaky_500 | 861.03s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 13 minutes
- 2025-06-26
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-06-27 PASS 14 minutes
- 2025-06-28 PASS 14 minutes
- 2025-06-29 PASS 17 minutes
- 2025-06-30 PASS 15 minutes
- 2025-07-01
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-07-02 PASS 15 minutes
- 2025-07-03 PASS 15 minutes
- 2025-07-04 PASS 18 minutes
- 2025-07-05 PASS 16 minutes
- 2025-07-06

### Error 2025-07-06T01:46:53+00:00
```
2025-07-06T01:46:53.5858138Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-06T01:46:53.5911417Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-06T01:46:53.6047424Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-07-06T01:46:53.6048043Z     resource_advanced_cluster_test.go:693: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:46:53.6048493Z         
2025-07-06T01:46:53.6048856Z         Error: error when getting project properties after create
2025-07-06T01:46:53.6049172Z         
2025-07-06T01:46:53.6049501Z           with mongodbatlas_project.cluster_project,
2025-07-06T01:46:53.6050146Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T01:46:53.6050850Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-06T01:46:53.6051151Z         
2025-07-06T01:46:53.6051582Z         error getting project (6869c9c8690ae45e168bfab2): error getting project's
2025-07-06T01:46:53.6052024Z         limits (6869c9c8690ae45e168bfab2):
2025-07-06T01:46:53.6052576Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c9c8690ae45e168bfab2/limits
2025-07-06T01:46:53.6053218Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:46:53.6053776Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:46:53.6054154Z         BadRequestDetail: 
2025-07-06T01:46:53.6066305Z    test_working_directory=/tmp/plugintest3276952453 test_name=TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema test_terraform_path=/home/runner/work/_temp/49e06ad0-d3ea-49ad-aac7-0c6cd418a6b9/terraform
2025-07-06T01:46:53.6097731Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (987.20s)
```

- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 14 minutes
- 2025-07-10
  - PASS 14 minutes
  - FAIL 37 seconds

### Error 2025-07-10T14:35:50+00:00
```
2025-07-10T14:35:50.7753730Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-10T14:35:50.7794587Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-10T14:35:50.7885930Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-07-10T14:35:50.7886477Z     resource_advanced_cluster_test.go:693: Step 1/4 error: Error running apply: exit status 1
2025-07-10T14:35:50.7887075Z         
2025-07-10T14:35:50.7887444Z         Error: error when getting project properties after create
2025-07-10T14:35:50.7887755Z         
2025-07-10T14:35:50.7888079Z           with mongodbatlas_project.cluster_project,
2025-07-10T14:35:50.7888717Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-10T14:35:50.7889301Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-10T14:35:50.7889600Z         
2025-07-10T14:35:50.7890032Z         error getting project (686fc0f0fd583001f9eee8e5): error getting project's
2025-07-10T14:35:50.7890472Z         limits (686fc0f0fd583001f9eee8e5):
2025-07-10T14:35:50.7891025Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fc0f0fd583001f9eee8e5/limits
2025-07-10T14:35:50.7891665Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T14:35:50.7892219Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T14:35:50.7892597Z         BadRequestDetail: 
2025-07-10T14:35:50.7893297Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (37.09s)
```

- 2025-07-11: MISSING
- 2025-07-12 PASS 15 minutes
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2193293Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-13T02:11:00.2235087Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-13T02:11:00.2540061Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-07-13T02:11:00.2540726Z     resource_advanced_cluster_test.go:693: Step 1/4 error: Error running apply: exit status 1
2025-07-13T02:11:00.2541242Z         
2025-07-13T02:11:00.2541611Z         Error: error when getting project properties after create
2025-07-13T02:11:00.2542034Z         
2025-07-13T02:11:00.2542360Z           with mongodbatlas_project.cluster_project,
2025-07-13T02:11:00.2543115Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T02:11:00.2543810Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-13T02:11:00.2544144Z         
2025-07-13T02:11:00.2544699Z         error getting project (6873058a006d8d55bbaa5001): error getting project's
2025-07-13T02:11:00.2545207Z         limits (6873058a006d8d55bbaa5001):
2025-07-13T02:11:00.2545796Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6873058a006d8d55bbaa5001/limits
2025-07-13T02:11:00.2546696Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T02:11:00.2547371Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T02:11:00.2547857Z         BadRequestDetail: 
2025-07-13T02:11:00.2556421Z   
2025-07-13T02:11:00.2564853Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (38.06s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 15 minutes
- 2025-07-16 PASS 14 minutes
- 2025-07-17 PASS 13 minutes
- 2025-07-18 PASS 15 minutes
- 2025-07-19 PASS 12 minutes
- 2025-07-20 PASS 14 minutes
- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 14 minutes
- 2025-07-23
  - PASS 13 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - FAIL 14 minutes

### Error 2025-07-23T17:30:38+00:00
```
2025-07-23T17:30:38.7593106Z === RUN   TestAccClusterAdvancedCluster_withLabels
2025-07-23T17:30:38.7674906Z === CONT  TestAccClusterAdvancedCluster_withLabels
2025-07-23T17:30:38.7834248Z === NAME  TestAccClusterAdvancedCluster_withLabels
2025-07-23T17:30:38.7835102Z     resource_advanced_cluster_test.go:693: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-23T17:30:38.7835723Z         
2025-07-23T17:30:38.7836203Z         Error: error when getting project properties after create
2025-07-23T17:30:38.7836619Z         
2025-07-23T17:30:38.7837044Z           with mongodbatlas_project.cluster_project,
2025-07-23T17:30:38.7837904Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T17:30:38.7838667Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-23T17:30:38.7838972Z         
2025-07-23T17:30:38.7839399Z         error getting project (68810ea493a06a13914bc3d7): error getting project's
2025-07-23T17:30:38.7839945Z         limits (68810ea493a06a13914bc3d7):
2025-07-23T17:30:38.7840499Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68810ea493a06a13914bc3d7/limits
2025-07-23T17:30:38.7841296Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T17:30:38.7841866Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T17:30:38.7842249Z         BadRequestDetail: 
2025-07-23T17:30:38.7857741Z   
2025-07-23T17:30:38.7917056Z --- FAIL: TestAccClusterAdvancedCluster_withLabels (861.35s)
```

- 2025-07-24 PASS 15 minutes