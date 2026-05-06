# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:53](#error-2026-04-16t0053020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032b21ec945fedc7295a9/clusters | dev | out_of_capacity | 50.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS an hour
- 2026-04-08 PASS 21 minutes
- 2026-04-09 PASS 32 minutes
- 2026-04-10 PASS 23 minutes
- 2026-04-11 PASS 19 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 27 minutes
- 2026-04-14 PASS 20 minutes
- 2026-04-15 PASS 23 minutes
- 2026-04-16

### Error 2026-04-16T00:53:02+00:00
```
2026-04-16T00:53:02.4653514Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-04-16T00:54:54.3159026Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-04-16T00:55:44.0136482Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-04-16T00:55:44.0137946Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:55:44.0132957Z, ProjectID: 69e032b21ec945fedc7295a9, Cluster name: test-acc-tf-c-3238933076433962823
2026-04-16T00:55:44.7987417Z   
2026-04-16T00:55:44.7987858Z     resource_test.go:269: Step 2/3 error: Error running apply: exit status 1
2026-04-16T00:55:44.7988391Z         
2026-04-16T00:55:44.7988851Z         Error: Error in create
2026-04-16T00:55:44.7989146Z         
2026-04-16T00:55:44.7989614Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:44.7990306Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:44.7990948Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:44.7991272Z         
2026-04-16T00:55:44.7991696Z         cluster name: test-acc-tf-c-3238933076433962823, API error details:
2026-04-16T00:55:44.7992404Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032b21ec945fedc7295a9/clusters
2026-04-16T00:55:44.7993150Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:44.7993834Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:44.7994605Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:44.8480590Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (50.86s)
```

- 2026-04-17 PASS 22 minutes
- 2026-04-18 PASS 34 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 29 minutes
- 2026-04-22 PASS 39 minutes
- 2026-04-23 PASS 38 minutes
- 2026-04-24 PASS 21 minutes
- 2026-04-25 PASS 24 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 26 minutes
- 2026-04-28 PASS 37 minutes
- 2026-04-29 PASS 27 minutes
- 2026-04-30 PASS 31 minutes
- 2026-05-01 PASS 25 minutes
- 2026-05-02 PASS 22 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 22 minutes
- 2026-05-05 PASS 35 minutes
- 2026-05-06 PASS 35 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 20 minutes
  - PASS 16 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 22 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 21 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 22 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 21 minutes
- 2026-05-04 PASS 20 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 20 minutes
