# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4) TIMEOUT
Success rate: 88.57%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 03:39](#error-2025-07-11t0339380000) |  | dev |  | 6532.00s
[2025-07-20 01:01](#error-2025-07-20t0101020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c4004823af9166ef949f2/limits | qa | flaky_500 | 37.00s
[2025-07-23 11:39](#error-2025-07-23t1139480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6880ca3dfc917074205c0f03/limits | qa | flaky_500 | 2405.08s
[2025-07-23 16:34](#error-2025-07-23t1634080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68810f39595a684b07e435bd/limits | qa | flaky_500 | 1095.01s
[2025-07-27 01:03](#error-2025-07-27t0103240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68857b20ea884d723492161e/limits | qa | flaky_500 | 2264.04s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 36 minutes
  - PASS 38 minutes
  - PASS 36 minutes
  - PASS 36 minutes
  - PASS 54 minutes
- 2025-07-02 PASS 36 minutes
- 2025-07-03 PASS 37 minutes
- 2025-07-04 PASS 35 minutes
- 2025-07-05 PASS 38 minutes
- 2025-07-06 PASS 39 minutes
- 2025-07-07 PASS 34 minutes
- 2025-07-08 PASS 36 minutes
- 2025-07-09 PASS 38 minutes
- 2025-07-10 PASS 37 minutes
- 2025-07-11

### Error 2025-07-11T03:39:38+00:00
```
2025-07-11T03:39:38.5448223Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-11T03:41:02.1048155Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-11T05:29:53.6607114Z 		TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (1h48m52s)
2025-07-11T05:29:53.6608584Z 		TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1h48m52s)
2025-07-11T05:29:53.6610154Z 		TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (1h48m52s)
```

- 2025-07-12 PASS 38 minutes
- 2025-07-13 PASS 43 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 38 minutes
- 2025-07-16 PASS 37 minutes
- 2025-07-17 PASS 39 minutes
- 2025-07-18 PASS 40 minutes
- 2025-07-19 PASS 37 minutes
- 2025-07-20

### Error 2025-07-20T01:01:02+00:00
```
2025-07-20T01:01:02.4835922Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-20T01:01:52.4736990Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-20T01:02:29.4126007Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-20T01:02:29.4126869Z     resource_advanced_cluster_test.go:1041: Step 1/4 error: Error running apply: exit status 1
2025-07-20T01:02:29.4127287Z         
2025-07-20T01:02:29.4127657Z         Error: error when getting project properties after create
2025-07-20T01:02:29.4128152Z         
2025-07-20T01:02:29.4128564Z           with mongodbatlas_project.cluster_project,
2025-07-20T01:02:29.4129446Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-20T01:02:29.4130071Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-20T01:02:29.4130383Z         
2025-07-20T01:02:29.4131032Z         error getting project (687c4004823af9166ef949f2): error getting project's
2025-07-20T01:02:29.4131499Z         limits (687c4004823af9166ef949f2):
2025-07-20T01:02:29.4132070Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c4004823af9166ef949f2/limits
2025-07-20T01:02:29.4132737Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T01:02:29.4133297Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T01:02:29.4133670Z         BadRequestDetail: 
2025-07-20T01:02:29.4541998Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (37.00s)
```

- 2025-07-21 PASS 35 minutes
- 2025-07-22 PASS 36 minutes
- 2025-07-23
  - PASS 34 minutes
  - FAIL 40 minutes

### Error 2025-07-23T11:39:48+00:00
```
2025-07-23T11:39:48.6042781Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-23T11:40:40.7740839Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-23T12:17:54.4755006Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-23T12:17:54.4755820Z     resource_advanced_cluster_test.go:1041: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-07-23T12:17:54.4756373Z         
2025-07-23T12:17:54.4756772Z         Error: error when getting project properties after create
2025-07-23T12:17:54.4757180Z         
2025-07-23T12:17:54.4757751Z           with mongodbatlas_project.cluster_project,
2025-07-23T12:17:54.4758518Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T12:17:54.4759225Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-23T12:17:54.4759551Z         
2025-07-23T12:17:54.4759988Z         error getting project (6880ca3dfc917074205c0f03): error getting project's
2025-07-23T12:17:54.4760432Z         limits (6880ca3dfc917074205c0f03):
2025-07-23T12:17:54.4760997Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6880ca3dfc917074205c0f03/limits
2025-07-23T12:17:54.4761842Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T12:17:54.4762408Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T12:17:54.4762793Z         BadRequestDetail: 
2025-07-23T12:20:46.5350694Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2405.77s)
```

  - PASS 35 minutes
  - FAIL 18 minutes

### Error 2025-07-23T16:34:08+00:00
```
2025-07-23T16:34:08.4264143Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-23T16:35:00.7862548Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-23T16:49:03.9266296Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-23T16:49:03.9267209Z     resource_advanced_cluster_test.go:1041: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-07-23T16:49:03.9267792Z         
2025-07-23T16:49:03.9268201Z         Error: error when getting project properties after create
2025-07-23T16:49:03.9268607Z         
2025-07-23T16:49:03.9268948Z           with mongodbatlas_project.cluster_project,
2025-07-23T16:49:03.9269906Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-23T16:49:03.9270763Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-23T16:49:03.9271173Z         
2025-07-23T16:49:03.9271617Z         error getting project (68810f39595a684b07e435bd): error getting project's
2025-07-23T16:49:03.9272061Z         limits (68810f39595a684b07e435bd):
2025-07-23T16:49:03.9272623Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68810f39595a684b07e435bd/limits
2025-07-23T16:49:03.9273280Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T16:49:03.9273849Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T16:49:03.9274501Z         BadRequestDetail: 
2025-07-23T16:49:11.9806646Z   
2025-07-23T16:53:15.9202509Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (1095.13s)
```

- 2025-07-24 PASS 37 minutes
- 2025-07-25 PASS 42 minutes
- 2025-07-26 PASS 39 minutes
- 2025-07-27

### Error 2025-07-27T01:03:24+00:00
```
2025-07-27T01:03:24.9272211Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-27T01:04:27.0777866Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-27T01:38:39.3471452Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-07-27T01:38:39.3472609Z     resource_advanced_cluster_test.go:1041: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-07-27T01:38:39.3473092Z         
2025-07-27T01:38:39.3473619Z         Error: error when getting project properties after create
2025-07-27T01:38:39.3474172Z         
2025-07-27T01:38:39.3474537Z           with mongodbatlas_project.cluster_project,
2025-07-27T01:38:39.3475305Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-07-27T01:38:39.3475893Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-27T01:38:39.3476195Z         
2025-07-27T01:38:39.3476618Z         error getting project (68857b20ea884d723492161e): error getting project's
2025-07-27T01:38:39.3477291Z         limits (68857b20ea884d723492161e):
2025-07-27T01:38:39.3477855Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68857b20ea884d723492161e/limits
2025-07-27T01:38:39.3478487Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-27T01:38:39.3479045Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-27T01:38:39.3479413Z         BadRequestDetail: 
2025-07-27T01:42:11.4662742Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2264.39s)
```

- 2025-07-28 PASS 39 minutes
- 2025-07-29 PASS 37 minutes
- 2025-07-30 PASS 36 minutes