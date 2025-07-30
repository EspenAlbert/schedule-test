# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 30) FAIL(x 6)
Success rate: 83.33%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 01:46](#error-2025-07-06t0146530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c9c87267b5775b6856a5/limits | qa | flaky_500 | 1035.09s
[2025-07-10 14:35](#error-2025-07-10t1435500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fc0ef006d8d55bb9e955a/limits | qa | flaky_500 | 38.00s
[2025-07-13 02:11](#error-2025-07-13t0211000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6873058a207f45617104377f/limits | qa | flaky_500 | 37.02s
[2025-07-20 03:59](#error-2025-07-20t0359090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3f54823af9166ef942fd/limits | qa | flaky_500 | 1635.06s
[2025-07-23 12:32](#error-2025-07-23t1232270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6880c945fc917074205c0969/limits | qa | flaky_500 | 2287.00s
[2025-07-23 17:30](#error-2025-07-23t1730380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68810ea4612d2a23cda4b187/limits | qa | flaky_500 | 1253.03s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 36 minutes
  - PASS 35 minutes
  - PASS 35 minutes
  - PASS 35 minutes
  - PASS 36 minutes
- 2025-07-02 PASS 35 minutes
- 2025-07-03 PASS 36 minutes
- 2025-07-04 PASS 39 minutes
- 2025-07-05 PASS 36 minutes
- 2025-07-06

### Error 2025-07-06T01:46:53+00:00
```
2025-07-06T01:46:53.5878148Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-06T01:46:53.5915983Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-06T01:46:53.6067609Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-06T01:46:53.6068388Z     resource_advanced_cluster_test.go:1041: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-06T01:46:53.6068846Z         
2025-07-06T01:46:53.6069216Z         Error: error when getting project properties after create
2025-07-06T01:46:53.6069531Z         
2025-07-06T01:46:53.6069857Z           with mongodbatlas_project.cluster_project,
2025-07-06T01:46:53.6070505Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T01:46:53.6071100Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-06T01:46:53.6071397Z         
2025-07-06T01:46:53.6071826Z         error getting project (6869c9c87267b5775b6856a5): error getting project's
2025-07-06T01:46:53.6072259Z         limits (6869c9c87267b5775b6856a5):
2025-07-06T01:46:53.6072810Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c9c87267b5775b6856a5/limits
2025-07-06T01:46:53.6073593Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T01:46:53.6074155Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T01:46:53.6074533Z         BadRequestDetail: 
2025-07-06T01:46:53.6101049Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (1035.89s)
```

- 2025-07-07 PASS 34 minutes
- 2025-07-08 PASS 40 minutes
- 2025-07-09 PASS 35 minutes
- 2025-07-10
  - PASS 36 minutes
  - FAIL 38 seconds

### Error 2025-07-10T14:35:50+00:00
```
2025-07-10T14:35:50.7773939Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-10T14:35:50.7810378Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-10T14:35:50.8036278Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-10T14:35:50.8036987Z     resource_advanced_cluster_test.go:1041: Step 1/4 error: Error running apply: exit status 1
2025-07-10T14:35:50.8037533Z         
2025-07-10T14:35:50.8037901Z         Error: error when getting project properties after create
2025-07-10T14:35:50.8038219Z         
2025-07-10T14:35:50.8038537Z           with mongodbatlas_project.cluster_project,
2025-07-10T14:35:50.8039172Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-10T14:35:50.8039765Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-10T14:35:50.8040062Z         
2025-07-10T14:35:50.8040492Z         error getting project (686fc0ef006d8d55bb9e955a): error getting project's
2025-07-10T14:35:50.8040930Z         limits (686fc0ef006d8d55bb9e955a):
2025-07-10T14:35:50.8041484Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fc0ef006d8d55bb9e955a/limits
2025-07-10T14:35:50.8042120Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T14:35:50.8042666Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T14:35:50.8043032Z         BadRequestDetail: 
2025-07-10T14:35:50.8043498Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (38.00s)
```

- 2025-07-11: MISSING
- 2025-07-12 PASS 37 minutes
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2212081Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-13T02:11:00.2253461Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-13T02:11:00.2379718Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-13T02:11:00.2380422Z     resource_advanced_cluster_test.go:1041: Step 1/4 error: Error running apply: exit status 1
2025-07-13T02:11:00.2380823Z         
2025-07-13T02:11:00.2381178Z         Error: error when getting project properties after create
2025-07-13T02:11:00.2381486Z         
2025-07-13T02:11:00.2381796Z           with mongodbatlas_project.cluster_project,
2025-07-13T02:11:00.2382414Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-13T02:11:00.2382983Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-13T02:11:00.2383281Z         
2025-07-13T02:11:00.2383701Z         error getting project (6873058a207f45617104377f): error getting project's
2025-07-13T02:11:00.2384125Z         limits (6873058a207f45617104377f):
2025-07-13T02:11:00.2384657Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6873058a207f45617104377f/limits
2025-07-13T02:11:00.2385296Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T02:11:00.2385974Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T02:11:00.2386338Z         BadRequestDetail: 
2025-07-13T02:11:00.2398122Z    test_terraform_path=/home/runner/work/_temp/fcba0e6c-7e11-45ca-91ba-9210b35f30e8/terraform
2025-07-13T02:11:00.2405680Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (37.18s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 38 minutes
- 2025-07-16 PASS 34 minutes
- 2025-07-17 PASS 35 minutes
- 2025-07-18 PASS 39 minutes
- 2025-07-19 PASS 35 minutes
- 2025-07-20

### Error 2025-07-20T03:59:09+00:00
```
2025-07-20T03:59:09.1111214Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-20T03:59:09.1133368Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-20T03:59:09.1336374Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-20T03:59:09.1337132Z     resource_advanced_cluster_test.go:1041: Step 2/4 error: Error running post-apply refresh plan: exit status 1
2025-07-20T03:59:09.1337581Z         
2025-07-20T03:59:09.1337933Z         Error: error when getting project properties after create
2025-07-20T03:59:09.1338243Z         
2025-07-20T03:59:09.1338607Z           with mongodbatlas_project.cluster_project,
2025-07-20T03:59:09.1339236Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-20T03:59:09.1339816Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-20T03:59:09.1340110Z         
2025-07-20T03:59:09.1340537Z         error getting project (687c3f54823af9166ef942fd): error getting project's
2025-07-20T03:59:09.1340966Z         limits (687c3f54823af9166ef942fd):
2025-07-20T03:59:09.1341513Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3f54823af9166ef942fd/limits
2025-07-20T03:59:09.1342142Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T03:59:09.1342685Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T03:59:09.1343158Z         BadRequestDetail: 
2025-07-20T03:59:09.1346582Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (1635.57s)
```

- 2025-07-21 PASS 35 minutes
- 2025-07-22 PASS 35 minutes
- 2025-07-23
  - PASS 37 minutes
  - FAIL 38 minutes

### Error 2025-07-23T12:32:27+00:00
```
2025-07-23T12:32:27.0275591Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-23T12:32:27.0296645Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-23T12:32:27.0454825Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-23T12:32:27.0455736Z     resource_advanced_cluster_test.go:1041: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-07-23T12:32:27.0456220Z         
2025-07-23T12:32:27.0456599Z         Error: error when getting project properties after create
2025-07-23T12:32:27.0456926Z         
2025-07-23T12:32:27.0457267Z           with mongodbatlas_project.cluster_project,
2025-07-23T12:32:27.0457921Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T12:32:27.0458516Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-23T12:32:27.0458825Z         
2025-07-23T12:32:27.0459278Z         error getting project (6880c945fc917074205c0969): error getting project's
2025-07-23T12:32:27.0460058Z         limits (6880c945fc917074205c0969):
2025-07-23T12:32:27.0460640Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880c945fc917074205c0969/limits
2025-07-23T12:32:27.0461306Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T12:32:27.0461881Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T12:32:27.0462267Z         BadRequestDetail: 
2025-07-23T12:32:27.0464776Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2287.00s)
```

  - PASS 39 minutes
  - FAIL 20 minutes

### Error 2025-07-23T17:30:38+00:00
```
2025-07-23T17:30:38.7626925Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-23T17:30:38.7686352Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-23T17:30:38.7900959Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-23T17:30:38.7901733Z     resource_advanced_cluster_test.go:1041: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-23T17:30:38.7902190Z         
2025-07-23T17:30:38.7902548Z         Error: error when getting project properties after create
2025-07-23T17:30:38.7902870Z         
2025-07-23T17:30:38.7903196Z           with mongodbatlas_project.cluster_project,
2025-07-23T17:30:38.7903827Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T17:30:38.7904406Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-07-23T17:30:38.7904707Z         
2025-07-23T17:30:38.7905153Z         error getting project (68810ea4612d2a23cda4b187): error getting project's
2025-07-23T17:30:38.7905599Z         limits (68810ea4612d2a23cda4b187):
2025-07-23T17:30:38.7906141Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68810ea4612d2a23cda4b187/limits
2025-07-23T17:30:38.7906779Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T17:30:38.7907331Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T17:30:38.7907701Z         BadRequestDetail: 
2025-07-23T17:30:38.7967644Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (1253.33s)
```

- 2025-07-24 PASS 38 minutes
- 2025-07-25 PASS 40 minutes
- 2025-07-26 PASS 42 minutes
- 2025-07-27 PASS 37 minutes
- 2025-07-28 PASS 38 minutes
- 2025-07-29 PASS 38 minutes
- 2025-07-30 PASS 39 minutes