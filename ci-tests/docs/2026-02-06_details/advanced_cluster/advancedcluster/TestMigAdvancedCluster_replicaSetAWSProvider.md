# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 00:38](#error-2026-02-02t0038460000) |  | dev | timeout | 10856.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 24 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 22 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 22 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 26 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 18 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 21 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 21 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 19 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 21 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 34 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:46+00:00
```
2026-02-02T00:38:46.2855037Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2026-02-02T00:40:19.9805224Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2026-02-02T00:41:14.9232664Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2026-02-02T00:41:14.9235338Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:41:14.922858554Z, ProjectID: 697ff214197cc66080b0bf82, Cluster name: test-acc-tf-c-8376470524352932626
2026-02-02T03:41:16.4893785Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2026-02-02T03:41:16.4894874Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:41:16.4895677Z         
2026-02-02T03:41:16.4896136Z         Error: Error in create
2026-02-02T03:41:16.4896594Z         
2026-02-02T03:41:16.4897202Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:41:16.4898309Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:41:16.4899628Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:41:16.4900167Z         
2026-02-02T03:41:16.4900940Z         cluster=test-acc-tf-c-8376470524352932626 didn't reach desired state: IDLE,
2026-02-02T03:41:16.4901725Z         error: context deadline exceeded
2026-02-02T03:41:16.6602023Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (10856.68s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 23 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 20 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 18 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 18 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 21 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
