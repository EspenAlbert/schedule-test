# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da93ad59b8466ea729f4f/clusters/test-acc-tf-c-4539738035778483450 | dev | flaky_500 | 108.01s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 23 minutes
  - PASS 17 minutes
- 2025-12-11 PASS 23 minutes
- 2025-12-12 PASS 24 minutes
- 2025-12-13 PASS 23 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 21 minutes
- 2025-12-16 PASS 20 minutes
- 2025-12-17 PASS 24 minutes
- 2025-12-18 PASS 23 minutes
- 2025-12-19 PASS 21 minutes
- 2025-12-20 PASS 20 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 27 minutes
- 2025-12-23 PASS 19 minutes
- 2025-12-24 PASS 26 minutes
- 2025-12-25 PASS 35 minutes
- 2025-12-26 PASS 17 minutes
- 2025-12-27 PASS 19 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 18 minutes
- 2025-12-31 PASS 21 minutes
- 2026-01-01 PASS 19 minutes
- 2026-01-02 PASS 20 minutes
- 2026-01-03 PASS 18 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 20 minutes
- 2026-01-06 PASS 20 minutes
- 2026-01-07

### Error 2026-01-07T00:30:54+00:00
```
2026-01-07T00:30:54.0499957Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-01-07T00:31:16.8348390Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-01-07T00:31:31.8422862Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-01-07T00:31:31.8424328Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:31.841926012Z, ProjectID: 695da93ad59b8466ea729f4f, Cluster name: test-acc-tf-c-4539738035778483450
2026-01-07T00:33:04.8591823Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-01-07T00:33:04.8592883Z     resource_test.go:309: Step 2/3 error: Error running apply: exit status 1
2026-01-07T00:33:04.8593292Z         
2026-01-07T00:33:04.8593553Z         Error: Error in create
2026-01-07T00:33:04.8593807Z         
2026-01-07T00:33:04.8594120Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:33:04.8594828Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:33:04.8595509Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:33:04.8595810Z         
2026-01-07T00:33:04.8596250Z         cluster=test-acc-tf-c-4539738035778483450 didn't reach desired state: IDLE,
2026-01-07T00:33:04.8596640Z         error:
2026-01-07T00:33:04.8597315Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da93ad59b8466ea729f4f/clusters/test-acc-tf-c-4539738035778483450
2026-01-07T00:33:04.8598072Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:33:04.8598608Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:33:04.8598983Z         BadRequestDetail: 
2026-01-07T00:33:04.9064074Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (108.07s)
```

- 2026-01-08 PASS 21 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 18 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 13 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 15 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 17 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 22 minutes
