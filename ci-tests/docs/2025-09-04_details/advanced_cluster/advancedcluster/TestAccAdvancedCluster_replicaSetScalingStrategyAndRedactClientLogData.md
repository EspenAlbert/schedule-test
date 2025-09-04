# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 5)
Success rate: 86.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 00:33](#error-2025-08-10t0033350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e917dacc1950586ddf8b/limits | qa | flaky_500 | 2438.07s
[2025-08-20 13:59](#error-2025-08-20t1359060000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d4eef98188003c99c0c1/limits | qa | flaky_500 | 1820.03s
[2025-08-24 00:31](#error-2025-08-24t0031070000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d864192cd1cc589f28d/limits | qa | flaky_500 | 2327.02s
[2025-08-31 00:30](#error-2025-08-31t0030090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397cc0a66c308153f1e97/limits | qa | flaky_500 | 2163.07s
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 37 minutes
- 2025-08-07 PASS 53 minutes
- 2025-08-08 PASS 36 minutes
- 2025-08-09 PASS 37 minutes
- 2025-08-10

### Error 2025-08-10T00:33:35+00:00
```
2025-08-10T00:33:35.0191730Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-10T00:34:27.0080836Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-10T01:02:50.3372248Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-10T01:02:50.3373572Z     resource_advanced_cluster_test.go:1009: Step 2/5 error: Error running post-apply refresh plan: exit status 1
2025-08-10T01:02:50.3374172Z         
2025-08-10T01:02:50.3374692Z         Error: error when getting project properties after create
2025-08-10T01:02:50.3375064Z         
2025-08-10T01:02:50.3375522Z           with mongodbatlas_project.cluster_project,
2025-08-10T01:02:50.3376358Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-10T01:02:50.3377159Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-10T01:02:50.3377520Z         
2025-08-10T01:02:50.3378127Z         error getting project (6897e917dacc1950586ddf8b): error getting project's
2025-08-10T01:02:50.3378700Z         limits (6897e917dacc1950586ddf8b):
2025-08-10T01:02:50.3379275Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e917dacc1950586ddf8b/limits
2025-08-10T01:02:50.3379941Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:02:50.3380847Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:02:50.3381226Z         BadRequestDetail: 
2025-08-10T01:05:38.2577177Z 2025/08/10 01:05:38 error setting `oplog_size_mb` for MongoDB Cluster (): 0
2025-08-10T01:05:38.2577933Z 2025/08/10 01:05:38 error setting `transaction_lifetime_limit_seconds` for MongoDB Cluster (): 0
2025-08-10T01:15:05.6934598Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2438.69s)
```

- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 35 minutes
  - PASS 30 minutes
- 2025-08-13 PASS 33 minutes
- 2025-08-14 PASS 37 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 59 minutes
- 2025-08-17 PASS 49 minutes
- 2025-08-18 PASS 35 minutes
- 2025-08-19 PASS 38 minutes
- 2025-08-20
  - PASS 36 minutes
  - FAIL 30 minutes

### Error 2025-08-20T13:59:06+00:00
```
2025-08-20T13:59:06.4704888Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-20T14:00:09.6313159Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-20T14:24:14.5699663Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-20T14:24:14.5700842Z     resource_advanced_cluster_test.go:1009: Step 2/5 error: Error running post-apply refresh plan: exit status 1
2025-08-20T14:24:14.5701539Z         
2025-08-20T14:24:14.5702018Z         Error: error when getting project properties after create
2025-08-20T14:24:14.5702361Z         
2025-08-20T14:24:14.5702771Z           with mongodbatlas_project.cluster_project,
2025-08-20T14:24:14.5703500Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-20T14:24:14.5704200Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-20T14:24:14.5704709Z         
2025-08-20T14:24:14.5705313Z         error getting project (68a5d4eef98188003c99c0c1): error getting project's
2025-08-20T14:24:14.5705772Z         limits (68a5d4eef98188003c99c0c1):
2025-08-20T14:24:14.5706348Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4eef98188003c99c0c1/limits
2025-08-20T14:24:14.5707013Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:24:14.5707586Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:24:14.5707978Z         BadRequestDetail: 
2025-08-20T14:30:29.8892937Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1820.26s)
```

- 2025-08-21 PASS 36 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 39 minutes
- 2025-08-24

### Error 2025-08-24T00:31:07+00:00
```
2025-08-24T00:31:07.4486222Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-24T00:32:02.0866832Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-24T01:02:35.8850080Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-24T01:02:35.8850988Z     resource_advanced_cluster_test.go:1010: Step 4/5 error: Error running post-apply refresh plan: exit status 1
2025-08-24T01:02:35.8851497Z         
2025-08-24T01:02:35.8852134Z         Error: error when getting project properties after create
2025-08-24T01:02:35.8852468Z         
2025-08-24T01:02:35.8852908Z           with mongodbatlas_project.cluster_project,
2025-08-24T01:02:35.8853669Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T01:02:35.8854322Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-24T01:02:35.8854624Z         
2025-08-24T01:02:35.8855065Z         error getting project (68aa5d864192cd1cc589f28d): error getting project's
2025-08-24T01:02:35.8855506Z         limits (68aa5d864192cd1cc589f28d):
2025-08-24T01:02:35.8856072Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d864192cd1cc589f28d/limits
2025-08-24T01:02:35.8856965Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T01:02:35.8857539Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T01:02:35.8857913Z         BadRequestDetail: 
2025-08-24T01:10:49.2174454Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2327.19s)
```

- 2025-08-25 PASS 33 minutes
- 2025-08-26 PASS 41 minutes
- 2025-08-27 PASS 40 minutes
- 2025-08-28 PASS 36 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 36 minutes
- 2025-08-31

### Error 2025-08-31T00:30:09+00:00
```
2025-08-31T00:30:09.3363781Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-31T00:31:03.8305061Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-31T01:03:35.7704117Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-08-31T01:03:35.7705422Z     resource_advanced_cluster_test.go:1010: Step 4/5 error: Error running post-apply refresh plan: exit status 1
2025-08-31T01:03:35.7705928Z         
2025-08-31T01:03:35.7706310Z         Error: error when getting project properties after create
2025-08-31T01:03:35.7706650Z         
2025-08-31T01:03:35.7707077Z           with mongodbatlas_project.cluster_project,
2025-08-31T01:03:35.7707761Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-31T01:03:35.7708527Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-31T01:03:35.7709028Z         
2025-08-31T01:03:35.7709685Z         error getting project (68b397cc0a66c308153f1e97): error getting project's
2025-08-31T01:03:35.7710167Z         limits (68b397cc0a66c308153f1e97):
2025-08-31T01:03:35.7710749Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397cc0a66c308153f1e97/limits
2025-08-31T01:03:35.7711428Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T01:03:35.7712009Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T01:03:35.7712397Z         BadRequestDetail: 
2025-08-31T01:07:07.5713930Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2163.75s)
```

- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.3601375Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-01T00:30:44.5141900Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-01T00:30:46.5696857Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-01T00:30:46.5698694Z     resource_advanced_cluster_test.go:1010: Step 1/5 error: Error running apply: exit status 1
2025-09-01T00:30:46.5699470Z         
2025-09-01T00:30:46.5700221Z         Error: error creating project: test-acc-tf-p-4514651627070443670
2025-09-01T00:30:46.5700849Z         
2025-09-01T00:30:46.5701463Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:46.5702676Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:46.5703782Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:46.5704423Z         
2025-09-01T00:30:46.5750528Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:46.5751824Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:46.5753016Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:46.5754172Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:46.5754905Z         BadRequestDetail: 
2025-09-01T00:30:46.5950192Z   
2025-09-01T00:30:46.7253616Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2.23s)
```

  - PASS 47 minutes
  - PASS an hour
  - PASS 34 minutes
  - PASS 31 minutes
  - PASS 34 minutes
  - PASS 33 minutes
  - PASS 35 minutes
- 2025-09-02 PASS 37 minutes
- 2025-09-03 PASS 44 minutes
- 2025-09-04 PASS 39 minutes