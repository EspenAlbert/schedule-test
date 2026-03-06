# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema Test Details
# Found 23 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 03:42](#error-2026-02-13t0342270000) |  | dev | timeout | 10810.00s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS 52 minutes
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 48 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 48 minutes
- 2026-02-12: MISSING
- 2026-02-13

### Error 2026-02-13T03:42:27+00:00
```
2026-02-13T03:42:27.2938887Z === RUN   TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-02-13T03:42:27.2947653Z === CONT  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-02-13T03:42:27.2959902Z === NAME  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-02-13T03:42:27.2960601Z     resource_migration_v1x_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-02-13T03:42:27.2961046Z         
2026-02-13T03:42:27.2961301Z         Error: Error in create
2026-02-13T03:42:27.2961977Z         
2026-02-13T03:42:27.2962310Z           with mongodbatlas_advanced_cluster.test,
2026-02-13T03:42:27.2962991Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-13T03:42:27.2963614Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-02-13T03:42:27.2963944Z         
2026-02-13T03:42:27.2964406Z         cluster=test-acc-tf-c-5821528343927882827 didn't reach desired state: IDLE,
2026-02-13T03:42:27.2965221Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-02-13T03:42:27.2965692Z         'REPAIRING', timeout: 3h0m0s)
2026-02-13T03:42:27.2966130Z --- FAIL: TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema (10810.05s)
```

- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 50 minutes
- 2026-02-17: MISSING
- 2026-02-18 PASS 49 minutes
- 2026-02-19: MISSING
- 2026-02-20 PASS 48 minutes
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 47 minutes
- 2026-02-24: MISSING
- 2026-02-25 PASS 47 minutes
- 2026-02-26: MISSING
- 2026-02-27 PASS 52 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 47 minutes
  - PASS 48 minutes
- 2026-03-03: MISSING
- 2026-03-04 PASS 49 minutes
- 2026-03-05: MISSING
- 2026-03-06 PASS 57 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 26 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 27 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 30 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 27 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 27 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 33 minutes
- 2026-03-02
  - PASS 21 minutes
  - PASS 19 minutes
- 2026-03-03 PASS 24 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
