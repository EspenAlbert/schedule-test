# global_cluster_config/globalclusterconfig/TestMigGlobalClusterConfig_basic Test Details
# Found 21 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-15 00:49](#error-2026-04-15t0049080000) |  | dev | flaky_client | 447.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 20 minutes
- 2026-04-09: MISSING
- 2026-04-10 PASS 28 minutes
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 18 minutes
- 2026-04-14: MISSING
- 2026-04-15

### Error 2026-04-15T00:49:08+00:00
```
2026-04-15T00:49:08.6547230Z === RUN   TestMigGlobalClusterConfig_basic
2026-04-15T00:49:08.6548477Z     resource_global_cluster_config_migration_test.go:11: Creating execution project (1): test-acc-tf-p-4916544238865655077
2026-04-15T01:16:43.9613474Z === CONT  TestMigGlobalClusterConfig_basic
2026-04-15T01:16:58.9734516Z === NAME  TestMigGlobalClusterConfig_basic
2026-04-15T01:16:58.9736452Z     pre_check.go:46: Time before creating cluster: 2026-04-15T01:16:58.973113436Z, ProjectID: 69dee084353adec0633606db, Cluster name: test-acc-tf-c-4857846403693690780
2026-04-15T01:24:08.9990381Z === NAME  TestMigGlobalClusterConfig_basic
2026-04-15T01:24:08.9991759Z     resource_global_cluster_config_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-04-15T01:24:08.9992284Z         
2026-04-15T01:24:08.9992558Z         Error: Error in create
2026-04-15T01:24:08.9992820Z         
2026-04-15T01:24:08.9993423Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-15T01:24:08.9994175Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-15T01:24:08.9994871Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-15T01:24:08.9995239Z         
2026-04-15T01:24:08.9995718Z         cluster=test-acc-tf-c-4857846403693690780 didn't reach desired state: IDLE,
2026-04-15T01:24:08.9996155Z         error: Get
2026-04-15T01:24:08.9996897Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/69dee084353adec0633606db/clusters/test-acc-tf-c-4857846403693690780":
2026-04-15T01:24:08.9997629Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-04-15T01:24:09.1526068Z --- FAIL: TestMigGlobalClusterConfig_basic (447.65s)
```

- 2026-04-16: MISSING
- 2026-04-17 PASS 19 minutes
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20 PASS 16 minutes
- 2026-04-21: MISSING
- 2026-04-22 PASS 17 minutes
- 2026-04-23: MISSING
- 2026-04-24 PASS 20 minutes
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 18 minutes
- 2026-04-28: MISSING
- 2026-04-29 PASS 21 minutes
- 2026-04-30: MISSING
- 2026-05-01 PASS 23 minutes
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 19 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 59 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 16 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 14 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 16 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 15 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 18 minutes
- 2026-05-04 PASS 15 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 17 minutes
