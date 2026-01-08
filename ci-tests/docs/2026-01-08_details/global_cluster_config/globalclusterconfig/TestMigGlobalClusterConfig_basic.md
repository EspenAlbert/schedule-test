# global_cluster_config/globalclusterconfig/TestMigGlobalClusterConfig_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da929af4f6cc389e798c2/clusters/test-acc-tf-c-5855626668799620905 | dev | flaky_500 | 100.06s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 16 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 14 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 17 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 16 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 16 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 16 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 15 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 15 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 15 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 13 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:32+00:00
```
2026-01-07T00:30:32.9803617Z === RUN   TestMigGlobalClusterConfig_basic
2026-01-07T00:30:32.9805296Z     resource_global_cluster_config_migration_test.go:11: Creating execution project (1): test-acc-tf-p-4937183544640307570
2026-01-07T00:32:42.9309450Z === CONT  TestMigGlobalClusterConfig_basic
2026-01-07T00:32:47.9312031Z === NAME  TestMigGlobalClusterConfig_basic
2026-01-07T00:32:47.9314153Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:32:47.930888538Z, ProjectID: 695da929af4f6cc389e798c2, Cluster name: test-acc-tf-c-5855626668799620905
2026-01-07T00:34:21.2576242Z === NAME  TestMigGlobalClusterConfig_basic
2026-01-07T00:34:21.2576871Z     resource_global_cluster_config_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:34:21.2577346Z         
2026-01-07T00:34:21.2577601Z         Error: Error in create
2026-01-07T00:34:21.2577851Z         
2026-01-07T00:34:21.2578214Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:34:21.2578906Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:34:21.2579554Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:34:21.2579889Z         
2026-01-07T00:34:21.2580337Z         cluster=test-acc-tf-c-5855626668799620905 didn't reach desired state: IDLE,
2026-01-07T00:34:21.2580733Z         error:
2026-01-07T00:34:21.2581448Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da929af4f6cc389e798c2/clusters/test-acc-tf-c-5855626668799620905
2026-01-07T00:34:21.2582267Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:34:21.2582842Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:34:21.2583228Z         BadRequestDetail: 
2026-01-07T00:34:21.4185045Z --- FAIL: TestMigGlobalClusterConfig_basic (100.58s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 13 minutes
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
- 2025-12-28 PASS 13 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 15 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
