# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 23 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-22 00:46](#error-2026-04-22t0046240000) |  | dev | timeout | 10832.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 16 minutes
  - PASS 15 minutes
- 2026-04-09: MISSING
- 2026-04-10 PASS 30 minutes
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 20 minutes
- 2026-04-14: MISSING
- 2026-04-15 PASS 15 minutes
- 2026-04-16: MISSING
- 2026-04-17 PASS 20 minutes
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20 PASS 16 minutes
- 2026-04-21: MISSING
- 2026-04-22

### Error 2026-04-22T00:46:24+00:00
```
2026-04-22T00:46:24.0739121Z === RUN   TestV1xMigAdvancedCluster_replicaSetAWSProvider
2026-04-22T00:46:24.0744448Z === CONT  TestV1xMigAdvancedCluster_replicaSetAWSProvider
2026-04-22T03:46:56.2747962Z === NAME  TestV1xMigAdvancedCluster_replicaSetAWSProvider
2026-04-22T03:46:56.2750158Z     resource_migration_v1x_test.go:302: Step 1/3 error: Error running apply: exit status 1
2026-04-22T03:46:56.2750838Z         
2026-04-22T03:46:56.2752110Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-04-22T03:46:56.2753400Z         
2026-04-22T03:46:56.2753775Z           with mongodbatlas_advanced_cluster.test,
2026-04-22T03:46:56.2754453Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-22T03:46:56.2755095Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-22T03:46:56.2755421Z         
2026-04-22T03:46:56.4673856Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetAWSProvider (10832.39s)
```

- 2026-04-23: MISSING
- 2026-04-24 PASS 15 minutes
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 15 minutes
- 2026-04-28: MISSING
- 2026-04-29 PASS 22 minutes
- 2026-04-30: MISSING
- 2026-05-01 PASS 43 minutes
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 15 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 21 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 17 minutes
  - PASS 14 minutes
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
- 2026-04-26 PASS 18 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 17 minutes
- 2026-05-04 PASS 16 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 17 minutes
