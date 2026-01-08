# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da935af4f6cc389e82ad8/clusters/test-acc-tf-c-4757200091656728824 | dev | flaky_500 | 280.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 25 minutes
  - PASS 16 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 22 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 15 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 23 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 24 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 22 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 20 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 17 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 21 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 24 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 21 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:48+00:00
```
2026-01-07T00:30:48.0735253Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2026-01-07T00:31:16.8430290Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2026-01-07T00:31:51.8474509Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2026-01-07T00:31:51.8476021Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:51.847143498Z, ProjectID: 695da935af4f6cc389e82ad8, Cluster name: test-acc-tf-c-4757200091656728824
2026-01-07T00:31:54.0542931Z   
2026-01-07T00:35:56.9010860Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2026-01-07T00:35:56.9011375Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:35:56.9011740Z         
2026-01-07T00:35:56.9011985Z         Error: Error in create
2026-01-07T00:35:56.9012229Z         
2026-01-07T00:35:56.9012675Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:35:56.9013338Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:35:56.9013892Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:35:56.9014196Z         
2026-01-07T00:35:56.9014618Z         cluster=test-acc-tf-c-4757200091656728824 didn't reach desired state: IDLE,
2026-01-07T00:35:56.9014986Z         error:
2026-01-07T00:35:56.9015635Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da935af4f6cc389e82ad8/clusters/test-acc-tf-c-4757200091656728824
2026-01-07T00:35:56.9016368Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:56.9016902Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:56.9017267Z         BadRequestDetail: 
2026-01-07T00:35:57.0760717Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (280.24s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 20 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 17 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 21 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 19 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
