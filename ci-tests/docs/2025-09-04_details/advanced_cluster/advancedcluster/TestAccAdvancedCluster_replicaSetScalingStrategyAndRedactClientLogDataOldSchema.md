# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 00:33](#error-2025-08-10t0033350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e91739cf8e2817e3f3fc/limits | qa | flaky_500 | 2867.05s
[2025-08-24 00:31](#error-2025-08-24t0031070000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d864192cd1cc589f328/limits | qa | flaky_500 | 36.07s
[2025-08-31 00:30](#error-2025-08-31t0030090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397cc7e07f9709daeeac3/limits | qa | flaky_500 | 1998.01s
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 44 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 41 minutes
- 2025-08-09 PASS 46 minutes
- 2025-08-10

### Error 2025-08-10T00:33:35+00:00
```
2025-08-10T00:33:35.0196680Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-10T00:34:27.0033659Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-10T01:17:21.9008107Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-10T01:17:21.9009504Z     resource_advanced_cluster_test.go:1042: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-08-10T01:17:21.9010426Z         
2025-08-10T01:17:21.9011121Z         Error: error when getting project properties after create
2025-08-10T01:17:21.9011665Z         
2025-08-10T01:17:21.9012217Z           with mongodbatlas_project.cluster_project,
2025-08-10T01:17:21.9013722Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-10T01:17:21.9014377Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-10T01:17:21.9014693Z         
2025-08-10T01:17:21.9015139Z         error getting project (6897e91739cf8e2817e3f3fc): error getting project's
2025-08-10T01:17:21.9015585Z         limits (6897e91739cf8e2817e3f3fc):
2025-08-10T01:17:21.9016144Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e91739cf8e2817e3f3fc/limits
2025-08-10T01:17:21.9016792Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T01:17:21.9017349Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T01:17:21.9017719Z         BadRequestDetail: 
2025-08-10T01:22:14.5456465Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2867.54s)
```

- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS an hour
  - PASS 38 minutes
- 2025-08-13 PASS 45 minutes
- 2025-08-14 PASS 44 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 54 minutes
- 2025-08-18 PASS 41 minutes
- 2025-08-19 PASS 41 minutes
- 2025-08-20
  - PASS 45 minutes
  - PASS 41 minutes
- 2025-08-21 PASS 44 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 42 minutes
- 2025-08-24

### Error 2025-08-24T00:31:07+00:00
```
2025-08-24T00:31:07.4487637Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-24T00:32:02.0864599Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-24T00:32:38.6494753Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-24T00:32:38.6495741Z     resource_advanced_cluster_test.go:1043: Step 1/4 error: Error running apply: exit status 1
2025-08-24T00:32:38.6496187Z         
2025-08-24T00:32:38.6496586Z         Error: error when getting project properties after create
2025-08-24T00:32:38.6497120Z         
2025-08-24T00:32:38.6497577Z           with mongodbatlas_project.cluster_project,
2025-08-24T00:32:38.6498309Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-24T00:32:38.6498968Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-24T00:32:38.6499292Z         
2025-08-24T00:32:38.6499748Z         error getting project (68aa5d864192cd1cc589f328): error getting project's
2025-08-24T00:32:38.6500185Z         limits (68aa5d864192cd1cc589f328):
2025-08-24T00:32:38.6500755Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d864192cd1cc589f328/limits
2025-08-24T00:32:38.6501397Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:38.6502226Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:38.6502609Z         BadRequestDetail: 
2025-08-24T00:32:38.6935688Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (36.67s)
```

- 2025-08-25 PASS 40 minutes
- 2025-08-26 PASS 51 minutes
- 2025-08-27 PASS 46 minutes
- 2025-08-28 PASS 41 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 39 minutes
- 2025-08-31

### Error 2025-08-31T00:30:09+00:00
```
2025-08-31T00:30:09.3365697Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-31T00:31:03.8142887Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-31T00:57:59.2865454Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-08-31T00:57:59.2866526Z     resource_advanced_cluster_test.go:1043: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2025-08-31T00:57:59.2867039Z         
2025-08-31T00:57:59.2867598Z         Error: error when getting project properties after create
2025-08-31T00:57:59.2867941Z         
2025-08-31T00:57:59.2868399Z           with mongodbatlas_project.cluster_project,
2025-08-31T00:57:59.2869164Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-08-31T00:57:59.2869958Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-08-31T00:57:59.2870280Z         
2025-08-31T00:57:59.2870720Z         error getting project (68b397cc7e07f9709daeeac3): error getting project's
2025-08-31T00:57:59.2871189Z         limits (68b397cc7e07f9709daeeac3):
2025-08-31T00:57:59.2871777Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397cc7e07f9709daeeac3/limits
2025-08-31T00:57:59.2872464Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:57:59.2873047Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:57:59.2873441Z         BadRequestDetail: 
2025-08-31T01:04:21.9314466Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (1998.12s)
```

- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.3602573Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-09-01T00:30:44.5137637Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-09-01T00:30:46.5951136Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema
2025-09-01T00:30:46.5953103Z     resource_advanced_cluster_test.go:1043: Step 1/4 error: Error running apply: exit status 1
2025-09-01T00:30:46.5954123Z         
2025-09-01T00:30:46.5955079Z         Error: error creating project: test-acc-tf-p-5606661045664690010
2025-09-01T00:30:46.5956834Z         
2025-09-01T00:30:46.5957692Z           with mongodbatlas_project.cluster_project,
2025-09-01T00:30:46.5959234Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-01T00:30:46.5960658Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-01T00:30:46.5962477Z         
2025-09-01T00:30:46.5963922Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:30:46.5973661Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:30:46.5976313Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:30:46.5981524Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:30:46.5982536Z         BadRequestDetail: 
2025-09-01T00:30:46.7356790Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogDataOldSchema (2.24s)
```

  - PASS 47 minutes
  - PASS an hour
  - PASS 44 minutes
  - PASS 38 minutes
  - PASS 39 minutes
  - PASS 38 minutes
  - PASS 38 minutes
- 2025-09-02 PASS 42 minutes
- 2025-09-03 PASS 50 minutes
- 2025-09-04 PASS 43 minutes