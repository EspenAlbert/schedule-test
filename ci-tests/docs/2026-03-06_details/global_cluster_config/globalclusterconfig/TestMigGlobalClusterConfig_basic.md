# global_cluster_config/globalclusterconfig/TestMigGlobalClusterConfig_basic Test Details
# Found 20 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-18 00:38](#error-2026-02-18t0038540000) |  | dev | flaky_client | 317.06s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06 PASS 22 minutes
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09 PASS 22 minutes
- 2026-02-10: MISSING
- 2026-02-11 PASS 22 minutes
- 2026-02-12: MISSING
- 2026-02-13 PASS 22 minutes
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16 PASS 23 minutes
- 2026-02-17: MISSING
- 2026-02-18

### Error 2026-02-18T00:38:54+00:00
```
2026-02-18T00:38:54.5709339Z === RUN   TestMigGlobalClusterConfig_basic
2026-02-18T00:38:54.5711069Z     resource_global_cluster_config_migration_test.go:11: Creating execution project (1): test-acc-tf-p-8297560141129580474
2026-02-18T00:47:42.9139760Z === CONT  TestMigGlobalClusterConfig_basic
2026-02-18T00:47:47.9181702Z === NAME  TestMigGlobalClusterConfig_basic
2026-02-18T00:47:47.9183447Z     pre_check.go:46: Time before creating cluster: 2026-02-18T00:47:47.917833425Z, ProjectID: 69950a1e245f62926c4888bd, Cluster name: test-acc-tf-c-4625671000563591901
2026-02-18T00:52:57.9984680Z === NAME  TestMigGlobalClusterConfig_basic
2026-02-18T00:52:57.9985335Z     resource_global_cluster_config_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-02-18T00:52:57.9985837Z         
2026-02-18T00:52:57.9986084Z         Error: Error in create
2026-02-18T00:52:57.9986330Z         
2026-02-18T00:52:57.9986696Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-18T00:52:57.9988022Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-18T00:52:57.9988743Z           14: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-18T00:52:57.9989094Z         
2026-02-18T00:52:57.9989555Z         cluster=test-acc-tf-c-4625671000563591901 didn't reach desired state: IDLE,
2026-02-18T00:52:57.9989983Z         error: Get
2026-02-18T00:52:57.9990733Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/69950a1e245f62926c4888bd/clusters/test-acc-tf-c-4625671000563591901":
2026-02-18T00:52:57.9991462Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-02-18T00:52:58.1611075Z --- FAIL: TestMigGlobalClusterConfig_basic (317.60s)
```

- 2026-02-19: MISSING
- 2026-02-20 PASS 23 minutes
- 2026-02-21: MISSING
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24: MISSING
- 2026-02-25 PASS 23 minutes
- 2026-02-26: MISSING
- 2026-02-27 PASS 22 minutes
- 2026-02-28: MISSING
- 2026-03-01: MISSING
- 2026-03-02 PASS 23 minutes
- 2026-03-03: MISSING
- 2026-03-04 PASS 22 minutes
- 2026-03-05: MISSING
- 2026-03-06 PASS 27 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 14 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 17 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 16 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 16 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 15 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 15 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
