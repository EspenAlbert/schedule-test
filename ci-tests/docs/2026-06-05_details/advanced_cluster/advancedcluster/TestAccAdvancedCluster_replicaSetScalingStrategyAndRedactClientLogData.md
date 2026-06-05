# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 01:02](#error-2026-05-28t0102450000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 53 minutes
- 2026-05-08 PASS 50 minutes
- 2026-05-09 PASS 43 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 37 minutes
- 2026-05-12 PASS 42 minutes
- 2026-05-13 PASS 39 minutes
- 2026-05-14 PASS an hour
- 2026-05-15 PASS 39 minutes
- 2026-05-16 PASS 35 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19 PASS 36 minutes
- 2026-05-20 PASS 37 minutes
- 2026-05-21 PASS 54 minutes
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 40 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 41 minutes
- 2026-05-26 PASS 37 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:02:45+00:00
```
2026-05-28T01:02:45.7460006Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-05-28T01:02:49.4529115Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-05-28T01:02:50.9991317Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-05-28T01:02:50.9992602Z     resource_test.go:790: Step 1/5 error: Error running apply: exit status 1
2026-05-28T01:02:50.9993417Z         
2026-05-28T01:02:50.9994256Z         Error: error creating project: test-acc-tf-p-1310951374589282660
2026-05-28T01:02:50.9995210Z         
2026-05-28T01:02:50.9996018Z           with mongodbatlas_project.cluster_project,
2026-05-28T01:02:50.9997300Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2026-05-28T01:02:50.9998799Z           12: 		resource "mongodbatlas_project" "cluster_project" {
2026-05-28T01:02:50.9999446Z         
2026-05-28T01:02:51.0000380Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:02:51.0001652Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:02:51.0003136Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:02:51.0004352Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:02:51.0005198Z         BadRequestDetail: 
2026-05-28T01:02:51.0909116Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1.64s)
```

- 2026-05-29 PASS 40 minutes
- 2026-05-30 PASS 36 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 36 minutes
- 2026-06-03 PASS 48 minutes
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 39 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 38 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 35 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 38 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 36 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
