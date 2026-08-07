# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 35 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058070000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.02s
[2026-07-11 00:55](#error-2026-07-11t0055150000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 3.06s
[2026-07-21 00:53](#error-2026-07-21t0053120000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.06s
[2026-07-23 00:49](#error-2026-07-23t0049390000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:07+00:00
```
2026-07-09T00:58:07.1106211Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-07-09T00:58:24.4724047Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-07-09T00:58:26.5754455Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-07-09T00:58:26.5755373Z     resource_test.go:792: Step 1/5 error: Error running apply: exit status 1
2026-07-09T00:58:26.5755782Z         
2026-07-09T00:58:26.5756361Z         Error: error creating project: test-acc-tf-p-4256502511675051847
2026-07-09T00:58:26.5756841Z         
2026-07-09T00:58:26.5757282Z           with mongodbatlas_project.cluster_project,
2026-07-09T00:58:26.5758044Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-09T00:58:26.5758721Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-09T00:58:26.5759073Z         
2026-07-09T00:58:26.5759578Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-09T00:58:26.5760276Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-09T00:58:26.5760944Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-09T00:58:26.5761610Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-09T00:58:26.5762052Z         BadRequestDetail: 
2026-07-09T00:58:26.6213334Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2.16s)
```

- 2026-07-10 PASS 59 minutes
- 2026-07-11

### Error 2026-07-11T00:55:15+00:00
```
2026-07-11T00:55:15.0021226Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-07-11T00:56:44.4377602Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-07-11T00:56:47.9017049Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-07-11T00:56:47.9018650Z     resource_test.go:792: Step 1/5 error: Error running apply: exit status 1
2026-07-11T00:56:47.9019624Z         
2026-07-11T00:56:47.9020560Z         Error: error creating project: test-acc-tf-p-2320555446560116016
2026-07-11T00:56:47.9042933Z         
2026-07-11T00:56:47.9044218Z           with mongodbatlas_project.cluster_project,
2026-07-11T00:56:47.9045638Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-11T00:56:47.9046924Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-11T00:56:47.9047646Z         
2026-07-11T00:56:47.9048623Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-11T00:56:47.9050159Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-11T00:56:47.9051468Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-11T00:56:47.9052715Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-11T00:56:47.9053716Z         BadRequestDetail: 
2026-07-11T00:56:47.9631757Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (3.63s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 45 minutes
- 2026-07-14 PASS 43 minutes
- 2026-07-15 PASS 37 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 40 minutes
- 2026-07-18 PASS 41 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:12+00:00
```
2026-07-21T00:53:12.6379432Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-07-21T00:53:23.4313542Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-07-21T00:53:25.9503286Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-07-21T00:53:25.9504356Z     resource_test.go:792: Step 1/5 error: Error running apply: exit status 1
2026-07-21T00:53:25.9504873Z         
2026-07-21T00:53:25.9505475Z         Error: error creating project: test-acc-tf-p-439785511679608456
2026-07-21T00:53:25.9506060Z         
2026-07-21T00:53:25.9506635Z           with mongodbatlas_project.cluster_project,
2026-07-21T00:53:25.9507819Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-21T00:53:25.9508983Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-21T00:53:25.9509548Z         
2026-07-21T00:53:25.9510519Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-21T00:53:25.9511634Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-21T00:53:25.9512732Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-21T00:53:25.9513859Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-21T00:53:25.9514591Z         BadRequestDetail: 
2026-07-21T00:53:25.9580113Z   
2026-07-21T00:53:26.0136499Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2.59s)
```

- 2026-07-22 PASS an hour
- 2026-07-23

### Error 2026-07-23T00:49:39+00:00
```
2026-07-23T00:49:39.8972982Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-07-23T00:49:49.7217142Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-07-23T00:49:51.9446136Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-07-23T00:49:51.9446980Z     resource_test.go:792: Step 1/5 error: Error running apply: exit status 1
2026-07-23T00:49:51.9447445Z         
2026-07-23T00:49:51.9447895Z         Error: error creating project: test-acc-tf-p-8991773850651376170
2026-07-23T00:49:51.9448518Z         
2026-07-23T00:49:51.9448891Z           with mongodbatlas_project.cluster_project,
2026-07-23T00:49:51.9449613Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-07-23T00:49:51.9450298Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-07-23T00:49:51.9450656Z         
2026-07-23T00:49:51.9451152Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-07-23T00:49:51.9452130Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-07-23T00:49:51.9452876Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-07-23T00:49:51.9453542Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-07-23T00:49:51.9453985Z         BadRequestDetail: 
2026-07-23T00:49:51.9932212Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (2.28s)
```

- 2026-07-24 PASS an hour
- 2026-07-25 PASS 41 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 48 minutes
- 2026-07-30 PASS an hour
- 2026-07-31
  - PASS 35 minutes
  - PASS 34 minutes
- 2026-08-01 PASS 34 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 37 minutes
- 2026-08-04 PASS 36 minutes
- 2026-08-05 PASS 35 minutes
- 2026-08-06 PASS 34 minutes
- 2026-08-07 PASS 34 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 40 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 38 minutes
  - PASS 34 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 42 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 38 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 37 minutes
  - PASS 36 minutes
- 2026-07-30 PASS 35 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 35 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
