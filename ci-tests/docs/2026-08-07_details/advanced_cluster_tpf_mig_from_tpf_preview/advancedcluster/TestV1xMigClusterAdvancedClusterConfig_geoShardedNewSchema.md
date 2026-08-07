# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema Test Details
# Found 19 TestRuns in dev, qa from 2026-07-10 to 2026-08-07 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10 PASS 49 minutes
- 2026-07-11: MISSING
- 2026-07-12: MISSING
- 2026-07-13 PASS 38 minutes
- 2026-07-14: MISSING
- 2026-07-15 PASS 34 minutes
- 2026-07-16: MISSING
- 2026-07-17 PASS 36 minutes
- 2026-07-18: MISSING
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22 PASS 59 minutes
- 2026-07-23: MISSING
- 2026-07-24 PASS 53 minutes
- 2026-07-25: MISSING
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28: MISSING
- 2026-07-29 PASS 38 minutes
- 2026-07-30: MISSING
- 2026-07-31 PASS 25 minutes
- 2026-08-01: MISSING
- 2026-08-02: MISSING
- 2026-08-03 PASS 25 minutes
- 2026-08-04: MISSING
- 2026-08-05 PASS 26 minutes
- 2026-08-06: MISSING
- 2026-08-07 PASS an hour

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-12 03:49](#error-2026-07-12t0349130000) |  | qa | timeout | 10810.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12

### Error 2026-07-12T03:49:13+00:00
```
2026-07-12T03:49:13.8502728Z === RUN   TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-07-12T03:49:13.8509893Z === CONT  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-07-12T03:49:13.8522976Z === NAME  TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema
2026-07-12T03:49:13.8523693Z     resource_migration_v1x_test.go:21: Step 1/4 error: Error running apply: exit status 1
2026-07-12T03:49:13.8524148Z         
2026-07-12T03:49:13.8524434Z         Error: Error in create
2026-07-12T03:49:13.8524715Z         
2026-07-12T03:49:13.8525073Z           with mongodbatlas_advanced_cluster.test,
2026-07-12T03:49:13.8525776Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-07-12T03:49:13.8526422Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-07-12T03:49:13.8526759Z         
2026-07-12T03:49:13.8527432Z         cluster=test-acc-tf-c-7979044478491013921 didn't reach desired state: IDLE,
2026-07-12T03:49:13.8528250Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-07-12T03:49:13.8528727Z         'CREATING', timeout: 3h0m0s)
2026-07-12T03:49:13.8529183Z --- FAIL: TestV1xMigClusterAdvancedClusterConfig_geoShardedNewSchema (10810.75s)
```

- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 31 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 41 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS an hour
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29 PASS 30 minutes
- 2026-07-30 PASS 23 minutes
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 23 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
