# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 03:40](#error-2026-02-02t0340220000) |  | dev | timeout | 10827.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 30 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 26 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 26 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 28 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 21 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 30 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 29 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 21 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 29 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 34 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:40:22+00:00
```
2026-02-02T03:40:22.1340736Z === RUN   TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-02-02T03:40:22.1351647Z === CONT  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-02-02T03:40:22.1434673Z === NAME  TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2026-02-02T03:40:22.1435689Z     resource_migration_v1x_test.go:126: Step 1/5 error: Error running apply: exit status 1
2026-02-02T03:40:22.1436520Z         
2026-02-02T03:40:22.1437043Z         Error: Error in create (legacy)
2026-02-02T03:40:22.1437582Z         
2026-02-02T03:40:22.1438289Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:22.1439796Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:22.1440532Z           14: resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:22.1440868Z         
2026-02-02T03:40:22.1441418Z         cluster=test-acc-tf-c-9042874768780635889 didn't reach desired state: IDLE,
2026-02-02T03:40:22.1442087Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-02-02T03:40:22.1442554Z         'CREATING', timeout: 3h0m0s)
2026-02-02T03:40:22.1443003Z --- FAIL: TestV1xMigAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (10827.72s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 31 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 39 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 28 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 22 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 23 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 27 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 28 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 24 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
