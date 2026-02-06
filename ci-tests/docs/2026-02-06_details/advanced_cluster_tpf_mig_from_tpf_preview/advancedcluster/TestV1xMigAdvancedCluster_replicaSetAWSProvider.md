# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 03:40](#error-2026-02-02t0340220000) |  | dev | timeout | 10832.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 20 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 16 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 17 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 19 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 16 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 23 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 22 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 17 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 27 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:40:22+00:00
```
2026-02-02T03:40:22.1345462Z === RUN   TestV1xMigAdvancedCluster_replicaSetAWSProvider
2026-02-02T03:40:22.1353227Z === CONT  TestV1xMigAdvancedCluster_replicaSetAWSProvider
2026-02-02T03:40:22.1365507Z   
2026-02-02T03:40:22.1450266Z === NAME  TestV1xMigAdvancedCluster_replicaSetAWSProvider
2026-02-02T03:40:22.1451017Z     resource_migration_v1x_test.go:302: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:40:22.1451444Z         
2026-02-02T03:40:22.1451700Z         Error: Error in create
2026-02-02T03:40:22.1451941Z         
2026-02-02T03:40:22.1452288Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:22.1453075Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:22.1453732Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:22.1454051Z         
2026-02-02T03:40:22.1454588Z         cluster=test-acc-tf-c-3560205764797796411 didn't reach desired state: IDLE,
2026-02-02T03:40:22.1455247Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-02-02T03:40:22.1455706Z         'CREATING', timeout: 3h0m0s)
2026-02-02T03:40:22.1456085Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetAWSProvider (10832.83s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 19 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 18 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 13 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 16 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 14 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 18 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 14 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
