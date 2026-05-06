# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 23 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-22 03:47](#error-2026-04-22t0347090000) |  | dev | timeout | 10827.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 14 minutes
  - PASS 14 minutes
- 2026-04-09: MISSING
- 2026-04-10 PASS 28 minutes
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 18 minutes
- 2026-04-14: MISSING
- 2026-04-15 PASS 15 minutes
- 2026-04-16: MISSING
- 2026-04-17 PASS 16 minutes
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20 PASS 15 minutes
- 2026-04-21: MISSING
- 2026-04-22

### Error 2026-04-22T03:47:09+00:00
```
2026-04-22T03:47:09.3404590Z === RUN   TestV1xMigAdvancedCluster_replicaSetAWSProvider
2026-04-22T03:47:09.3407995Z === CONT  TestV1xMigAdvancedCluster_replicaSetAWSProvider
2026-04-22T03:47:09.3430983Z === NAME  TestV1xMigAdvancedCluster_replicaSetAWSProvider
2026-04-22T03:47:09.3431843Z     resource_migration_v1x_test.go:302: Step 1/3 error: Error running apply: exit status 1
2026-04-22T03:47:09.3432461Z         
2026-04-22T03:47:09.3432843Z         Error: Error in create
2026-04-22T03:47:09.3433208Z         
2026-04-22T03:47:09.3433710Z           with mongodbatlas_advanced_cluster.test,
2026-04-22T03:47:09.3434513Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-22T03:47:09.3435145Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-22T03:47:09.3435475Z         
2026-04-22T03:47:09.3435930Z         cluster=test-acc-tf-c-4563983306427989336 didn't reach desired state: IDLE,
2026-04-22T03:47:09.3436544Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-04-22T03:47:09.3436974Z         'CREATING', timeout: 3h0m0s)
2026-04-22T03:47:09.3437356Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetAWSProvider (10827.29s)
```

- 2026-04-23: MISSING
- 2026-04-24 PASS 17 minutes
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 16 minutes
- 2026-04-28: MISSING
- 2026-04-29 PASS 15 minutes
- 2026-04-30: MISSING
- 2026-05-01 PASS 16 minutes
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 17 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 25 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 16 minutes
  - PASS 13 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 16 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 15 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 20 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 16 minutes
- 2026-05-04 PASS an hour
- 2026-05-05: MISSING
- 2026-05-06 PASS 15 minutes
