# backup/onlinearchive/TestAccOnlineArchive_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev | timeout | 10821.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 18 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3726667Z === RUN   TestAccOnlineArchive_deleteOnCreateTimeout
2025-10-30T04:45:03.3728536Z === CONT  TestAccOnlineArchive_deleteOnCreateTimeout
2025-10-30T04:45:03.3734380Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2025-10-30T04:45:03.3735200Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:45:39.046411889Z, ProjectID: 6902b51ce2dc7470847e2166, Cluster name: test-acc-tf-c-6981169937196542871
2025-10-30T04:45:03.3789875Z === NAME  TestAccOnlineArchive_deleteOnCreateTimeout
2025-10-30T04:45:03.3790474Z     resource_test.go:532: Step 1/2 error: Error running apply: exit status 1
2025-10-30T04:45:03.3790847Z         
2025-10-30T04:45:03.3791097Z         Error: Error in create
2025-10-30T04:45:03.3791351Z         
2025-10-30T04:45:03.3791711Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-30T04:45:03.3792408Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-30T04:45:03.3793081Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-30T04:45:03.3793421Z         
2025-10-30T04:45:03.3793872Z         cluster=test-acc-tf-c-6981169937196542871 didn't reach desired state: IDLE,
2025-10-30T04:45:03.3794341Z         error: context deadline exceeded
2025-10-30T04:45:03.3794727Z --- FAIL: TestAccOnlineArchive_deleteOnCreateTimeout (10821.10s)
```

- 2025-10-31 PASS 18 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 13 minutes
- 2025-11-04 PASS 26 minutes
- 2025-11-05
  - PASS 15 minutes
  - PASS 16 minutes
- 2025-11-06 PASS 21 minutes
- 2025-11-07 PASS 16 minutes
- 2025-11-08 PASS 15 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 15 minutes
- 2025-11-11 PASS 16 minutes
- 2025-11-12 PASS 18 minutes
- 2025-11-13 PASS 34 minutes
- 2025-11-14 PASS 19 minutes
- 2025-11-15 PASS 15 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 17 minutes
- 2025-11-18 PASS 17 minutes
- 2025-11-19
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-11-20 PASS 25 minutes
- 2025-11-21 PASS 16 minutes
- 2025-11-22 PASS 15 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 14 minutes
- 2025-11-25 PASS 15 minutes
- 2025-11-26 PASS 12 minutes
- 2025-11-27 PASS 18 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 17 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 17 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 16 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 20 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 19 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
