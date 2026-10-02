# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling Test Details
# Found 38 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-29 12:46](#error-2026-09-29t1246310000) | USER_UNAUTHORIZED /api/atlas/v2/groups/6abbb3224e4a7c917da4e591/clusters/test-acc-tf-c-48533265667802173 | dev | 1715.07s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 37 minutes
- 2026-09-03
  - PASS 35 minutes
  - PASS 33 minutes
- 2026-09-04 PASS 40 minutes
- 2026-09-05 PASS 36 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 34 minutes
- 2026-09-08 PASS 37 minutes
- 2026-09-09 PASS 38 minutes
- 2026-09-10 PASS 42 minutes
- 2026-09-11
  - PASS an hour
  - PASS an hour
- 2026-09-12 PASS 35 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 35 minutes
- 2026-09-15 PASS 34 minutes
- 2026-09-16 PASS 33 minutes
- 2026-09-17 PASS 44 minutes
- 2026-09-18 PASS 45 minutes
- 2026-09-19 PASS 35 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 34 minutes
- 2026-09-22
  - PASS 34 minutes
  - PASS 35 minutes
- 2026-09-23
  - PASS 42 minutes
  - PASS 51 minutes
- 2026-09-24 PASS 35 minutes
- 2026-09-25 PASS 34 minutes
- 2026-09-26: MISSING
- 2026-09-27: MISSING
- 2026-09-28 PASS 35 minutes
- 2026-09-29
  - PASS 36 minutes
  - PASS 36 minutes
  - FAIL 28 minutes

### Error 2026-09-29T12:46:31+00:00
```
2026-09-29T12:46:31.1412071Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-09-29T12:47:53.0470154Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-09-29T12:49:37.3606674Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-09-29T12:49:37.3608040Z     pre_check.go:46: Time before creating cluster: 2026-09-29T12:49:37.360369713Z, ProjectID: 6abbb3224e4a7c917da4e591, Cluster name: test-acc-tf-c-48533265667802173
2026-09-29T13:13:56.0616783Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-09-29T13:13:56.0617317Z     resource_test.go:430: Step 4/5 error: Error running apply: exit status 1
2026-09-29T13:13:56.0617656Z         
2026-09-29T13:13:56.0617892Z         Error: Error in update
2026-09-29T13:13:56.0618117Z         
2026-09-29T13:13:56.0618482Z           with mongodbatlas_advanced_cluster.test,
2026-09-29T13:13:56.0619080Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-29T13:13:56.0619750Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-29T13:13:56.0620088Z         
2026-09-29T13:13:56.0620478Z         cluster=test-acc-tf-c-48533265667802173 didn't reach desired state: IDLE,
2026-09-29T13:13:56.0620820Z         error:
2026-09-29T13:13:56.0621421Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abbb3224e4a7c917da4e591/clusters/test-acc-tf-c-48533265667802173
2026-09-29T13:13:56.0622093Z         GET: HTTP 401 Unauthorized (Error code: "USER_UNAUTHORIZED") Detail: Current
2026-09-29T13:13:56.0622642Z         user is not authorized to perform this action. Reason: Unauthorized. Params:
2026-09-29T13:13:56.0623233Z         [], BadRequestDetail: 
2026-09-29T13:16:28.1176421Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (1715.71s)
```

- 2026-09-30 PASS 32 minutes
- 2026-10-01 PASS 32 minutes
- 2026-10-02 PASS 34 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 31 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 32 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 32 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 32 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 33 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 35 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
