# advanced_cluster/advancedcluster/TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-29 10:43](#error-2026-09-29t1043320000) | USER_CANNOT_ACCESS_GROUP /api/atlas/v2/groups/6abb9abd8c821dc23ada2769/containers | dev | 1981.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 50 minutes
- 2026-09-03
  - PASS 37 minutes
  - PASS 39 minutes
- 2026-09-04 PASS 40 minutes
- 2026-09-05 PASS 45 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 37 minutes
- 2026-09-08 PASS 36 minutes
- 2026-09-09 PASS 47 minutes
- 2026-09-10 PASS 41 minutes
- 2026-09-11
  - PASS 55 minutes
  - PASS 55 minutes
- 2026-09-12 PASS 41 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 38 minutes
- 2026-09-15 PASS 45 minutes
- 2026-09-16 PASS 40 minutes
- 2026-09-17 PASS 40 minutes
- 2026-09-18 PASS 40 minutes
- 2026-09-19 PASS 43 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 40 minutes
- 2026-09-22
  - PASS 41 minutes
  - PASS 41 minutes
- 2026-09-23
  - PASS 39 minutes
  - PASS 59 minutes
- 2026-09-24 PASS 41 minutes
- 2026-09-25 PASS 41 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 39 minutes
- 2026-09-29
  - PASS 45 minutes
  - FAIL 33 minutes

### Error 2026-09-29T10:43:32+00:00
```
2026-09-29T10:43:32.0207532Z === RUN   TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-09-29T11:02:21.2674749Z === CONT  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-09-29T11:33:49.7276789Z === NAME  TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData
2026-09-29T11:33:49.7278032Z     resource_test.go:792: Step 2/5 error: Error running post-apply refresh plan: exit status 1
2026-09-29T11:33:49.7279013Z         
2026-09-29T11:33:49.7279537Z         Error: error resolving container IDs
2026-09-29T11:33:49.7280033Z         
2026-09-29T11:33:49.7280670Z           with data.mongodbatlas_advanced_clusters.test,
2026-09-29T11:33:49.7281836Z           on terraform_plugin_test.tf line 50, in data "mongodbatlas_advanced_clusters" "test":
2026-09-29T11:33:49.7282879Z           50: 	data "mongodbatlas_advanced_clusters" "test" {
2026-09-29T11:33:49.7283790Z         
2026-09-29T11:33:49.7284525Z         cluster name = test-acc-tf-c-3257924709147501247, error details:
2026-09-29T11:33:49.7285748Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb9abd8c821dc23ada2769/containers
2026-09-29T11:33:49.7286973Z         GET: HTTP 401 Unauthorized (Error code: "USER_CANNOT_ACCESS_GROUP") Detail:
2026-09-29T11:33:49.7288046Z         User cannot access this group. Reason: Unauthorized. Params: [],
2026-09-29T11:33:49.7288973Z         BadRequestDetail: 
2026-09-29T11:35:22.7608888Z --- FAIL: TestAccAdvancedCluster_replicaSetScalingStrategyAndRedactClientLogData (1981.49s)
```

  - PASS 38 minutes
- 2026-09-30 PASS 44 minutes
- 2026-10-01 PASS 36 minutes
- 2026-10-02 PASS 36 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 34 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 35 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 35 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 37 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 36 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 37 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
