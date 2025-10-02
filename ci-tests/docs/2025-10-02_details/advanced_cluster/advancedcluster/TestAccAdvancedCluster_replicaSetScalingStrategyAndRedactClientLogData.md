# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:29](#error-2025-09-07t0029310000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd225df5af52d2d4d835e/limits | qa | flaky_500 | 37.02s
[2025-09-21 00:29](#error-2025-09-21t0029400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf474cbd1cb41a3e706ebd/limits | qa | flaky_500 | 38.05s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 44 minutes
- 2025-09-04 PASS 39 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 36 minutes
- 2025-09-07

### Error 2025-09-07T00:29:31+00:00
```
2025-09-07T00:29:31.2696643Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-07T00:30:25.0965827Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-07T00:31:02.2626870Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-07T00:31:02.2627922Z     resource_advanced_cluster_test.go:1010: Step 1/5 error: Error running apply: exit status 1
2025-09-07T00:31:02.2628362Z         
2025-09-07T00:31:02.2628813Z         Error: error when getting project properties after create
2025-09-07T00:31:02.2629356Z         
2025-09-07T00:31:02.2629705Z           with mongodbatlas_project.cluster_project,
2025-09-07T00:31:02.2630371Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-07T00:31:02.2630978Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-07T00:31:02.2631301Z         
2025-09-07T00:31:02.2631746Z         error getting project (68bcd225df5af52d2d4d835e): error getting project's
2025-09-07T00:31:02.2632209Z         limits (68bcd225df5af52d2d4d835e):
2025-09-07T00:31:02.2632794Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd225df5af52d2d4d835e/limits
2025-09-07T00:31:02.2633463Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:02.2634038Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:02.2634426Z         BadRequestDetail: 
2025-09-07T00:31:02.3113780Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (37.22s)
```

- 2025-09-08
  - PASS 40 minutes
  - PASS 35 minutes
  - PASS 38 minutes
- 2025-09-09 PASS 40 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 35 minutes
- 2025-09-20 PASS 36 minutes
- 2025-09-21

### Error 2025-09-21T00:29:40+00:00
```
2025-09-21T00:29:40.3786026Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-21T00:31:04.3711449Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-21T00:31:42.7768897Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2025-09-21T00:31:42.7769577Z     resource_test.go:813: Step 1/5 error: Error running apply: exit status 1
2025-09-21T00:31:42.7769938Z         
2025-09-21T00:31:42.7770517Z         Error: error when getting project properties after create
2025-09-21T00:31:42.7770900Z         
2025-09-21T00:31:42.7771236Z           with mongodbatlas_project.cluster_project,
2025-09-21T00:31:42.7771882Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-09-21T00:31:42.7772492Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-21T00:31:42.7772795Z         
2025-09-21T00:31:42.7773231Z         error getting project (68cf474cbd1cb41a3e706ebd): error getting project's
2025-09-21T00:31:42.7773677Z         limits (68cf474cbd1cb41a3e706ebd):
2025-09-21T00:31:42.7774238Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf474cbd1cb41a3e706ebd/limits
2025-09-21T00:31:42.7774893Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:31:42.7775906Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:31:42.7776286Z         BadRequestDetail: 
2025-09-21T00:31:42.8251415Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (38.46s)
```

- 2025-09-22 PASS 35 minutes
- 2025-09-23 PASS 36 minutes
- 2025-09-24 PASS 35 minutes
- 2025-09-25 PASS 36 minutes
- 2025-09-26 PASS 37 minutes
- 2025-09-27 PASS 30 minutes
- 2025-09-28 PASS 30 minutes
- 2025-09-29
  - PASS 37 minutes
  - PASS 30 minutes
- 2025-09-30
  - PASS 32 minutes
  - PASS 31 minutes
  - PASS 30 minutes
  - PASS 31 minutes
  - PASS 29 minutes
- 2025-10-01
  - PASS 31 minutes
  - PASS 29 minutes
  - PASS 31 minutes
  - PASS 30 minutes
  - PASS 37 minutes
  - PASS 29 minutes
  - PASS 33 minutes
  - PASS 31 minutes
- 2025-10-02 PASS 34 minutes