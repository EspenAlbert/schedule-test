# backup/onlinearchive/TestAccBackupRSOnlineArchiveBasic Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev | timeout | 10826.02s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 20 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3724255Z === RUN   TestAccBackupRSOnlineArchiveBasic
2025-10-30T04:45:03.3728880Z === CONT  TestAccBackupRSOnlineArchiveBasic
2025-10-30T04:45:03.3735857Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-10-30T04:45:03.3736661Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:45:44.046605466Z, ProjectID: 6902b51ce2dc7470847e2166, Cluster name: test-acc-tf-c-4894702834500909716
2025-10-30T04:45:03.3745701Z    test_terraform_path=/home/runner/work/_temp/e436e89c-829f-47f7-8b03-299954dd1cc6/terraform test_name=TestAccBackupRSOnlineArchiveInvalidProcessRegion test_working_directory=/tmp/plugintest2768387059
2025-10-30T04:45:03.3804162Z === NAME  TestAccBackupRSOnlineArchiveBasic
2025-10-30T04:45:03.3804638Z     resource_test.go:131: Step 1/3 error: Error running apply: exit status 1
2025-10-30T04:45:03.3805003Z         
2025-10-30T04:45:03.3805252Z         Error: Error in create
2025-10-30T04:45:03.3805506Z         
2025-10-30T04:45:03.3805867Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-30T04:45:03.3806563Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-30T04:45:03.3807219Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-30T04:45:03.3807554Z         
2025-10-30T04:45:03.3808008Z         cluster=test-acc-tf-c-4894702834500909716 didn't reach desired state: IDLE,
2025-10-30T04:45:03.3808470Z         error: context deadline exceeded
2025-10-30T04:45:03.3808832Z --- FAIL: TestAccBackupRSOnlineArchiveBasic (10826.21s)
```

- 2025-10-31 PASS 19 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 16 minutes
- 2025-11-04 PASS 25 minutes
- 2025-11-05
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-11-06 PASS 21 minutes
- 2025-11-07 PASS 19 minutes
- 2025-11-08 PASS 16 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 16 minutes
- 2025-11-11 PASS 17 minutes
- 2025-11-12 PASS 21 minutes
- 2025-11-13 PASS 36 minutes
- 2025-11-14 PASS 22 minutes
- 2025-11-15 PASS 16 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 20 minutes
- 2025-11-18 PASS 19 minutes
- 2025-11-19
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-11-20 PASS 32 minutes
- 2025-11-21 PASS 14 minutes
- 2025-11-22 PASS 13 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 14 minutes
- 2025-11-25 PASS 17 minutes
- 2025-11-26 PASS 18 minutes
- 2025-11-27 PASS 23 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 18 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 18 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 17 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 23 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 23 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
