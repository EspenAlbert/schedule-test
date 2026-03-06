# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_iss Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 00:40](#error-2026-02-13t0040590000) |  | dev | timeout | 10821.01s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS an hour
- 2026-02-06 PASS 28 minutes
- 2026-02-07 PASS 26 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 26 minutes
- 2026-02-11 PASS 25 minutes
- 2026-02-12 PASS 26 minutes
- 2026-02-13

### Error 2026-02-13T00:40:59+00:00
```
2026-02-13T00:40:59.7042571Z === RUN   TestAccGlobalClusterConfig_iss
2026-02-13T01:35:21.4768839Z === CONT  TestAccGlobalClusterConfig_iss
2026-02-13T01:35:41.4855430Z === NAME  TestAccGlobalClusterConfig_iss
2026-02-13T01:35:41.4859356Z     pre_check.go:46: Time before creating cluster: 2026-02-13T01:35:41.484935821Z, ProjectID: 698e7319e8046ccdbd56daf4, Cluster name: test-acc-tf-c-3622259283240553532
2026-02-13T04:35:42.4847387Z === NAME  TestAccGlobalClusterConfig_iss
2026-02-13T04:35:42.4848128Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-02-13T04:35:42.4848590Z         
2026-02-13T04:35:42.4848840Z         Error: Error in create
2026-02-13T04:35:42.4849087Z         
2026-02-13T04:35:42.4849464Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-13T04:35:42.4850202Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-13T04:35:42.4851228Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-13T04:35:42.4851713Z         
2026-02-13T04:35:42.4852194Z         cluster=test-acc-tf-c-3622259283240553532 didn't reach desired state: IDLE,
2026-02-13T04:35:42.4852687Z         error: context deadline exceeded
2026-02-13T04:35:42.5337958Z --- FAIL: TestAccGlobalClusterConfig_iss (10821.06s)
```

- 2026-02-14 PASS 28 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 27 minutes
- 2026-02-17 PASS 25 minutes
- 2026-02-18 PASS 28 minutes
- 2026-02-19 PASS 26 minutes
- 2026-02-20 PASS 26 minutes
- 2026-02-21 PASS 25 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 25 minutes
- 2026-02-24 PASS 26 minutes
- 2026-02-25 PASS 24 minutes
- 2026-02-26 PASS 24 minutes
- 2026-02-27 PASS 24 minutes
- 2026-02-28 PASS 25 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 24 minutes
- 2026-03-03 PASS 24 minutes
- 2026-03-04 PASS 25 minutes
- 2026-03-05 PASS 30 minutes
- 2026-03-06 PASS 30 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 15 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 16 minutes
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
- 2026-03-03 PASS 16 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
