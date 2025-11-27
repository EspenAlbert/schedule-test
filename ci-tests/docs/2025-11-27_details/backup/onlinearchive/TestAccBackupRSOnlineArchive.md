# backup/onlinearchive/TestAccBackupRSOnlineArchive Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev | timeout | 10813.04s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 20 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3722955Z === RUN   TestAccBackupRSOnlineArchive
2025-10-30T04:45:03.3723487Z     resource_test.go:28: Creating execution project: test-acc-tf-p-4438390899891597033
2025-10-30T04:45:03.3727374Z === CONT  TestAccBackupRSOnlineArchive
2025-10-30T04:45:03.3731049Z === NAME  TestAccBackupRSOnlineArchive
2025-10-30T04:45:03.3732000Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:45:29.04307087Z, ProjectID: 6902b51ce2dc7470847e2166, Cluster name: test-acc-tf-c-5227040788593482355
2025-10-30T04:45:03.3761226Z === NAME  TestAccBackupRSOnlineArchive
2025-10-30T04:45:03.3761691Z     resource_test.go:35: Step 1/7 error: Error running apply: exit status 1
2025-10-30T04:45:03.3762049Z         
2025-10-30T04:45:03.3762305Z         Error: Error in create
2025-10-30T04:45:03.3762555Z         
2025-10-30T04:45:03.3762916Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-30T04:45:03.3763627Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-30T04:45:03.3764281Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-30T04:45:03.3764621Z         
2025-10-30T04:45:03.3765072Z         cluster=test-acc-tf-c-5227040788593482355 didn't reach desired state: IDLE,
2025-10-30T04:45:03.3765544Z         error: context deadline exceeded
2025-10-30T04:45:03.3765880Z --- FAIL: TestAccBackupRSOnlineArchive (10813.42s)
```

- 2025-10-31 PASS 19 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 15 minutes
- 2025-11-04 PASS 29 minutes
- 2025-11-05
  - PASS 17 minutes
  - PASS 20 minutes
- 2025-11-06 PASS 19 minutes
- 2025-11-07 PASS 21 minutes
- 2025-11-08 PASS 16 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 17 minutes
- 2025-11-11 PASS 14 minutes
- 2025-11-12 PASS 22 minutes
- 2025-11-13 PASS 36 minutes
- 2025-11-14 PASS 21 minutes
- 2025-11-15 PASS 19 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 21 minutes
- 2025-11-18 PASS 19 minutes
- 2025-11-19
  - PASS 16 minutes
  - PASS 17 minutes
- 2025-11-20 PASS 28 minutes
- 2025-11-21 PASS 16 minutes
- 2025-11-22 PASS 17 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 19 minutes
- 2025-11-25 PASS 17 minutes
- 2025-11-26 PASS 16 minutes
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
- 2025-11-09 PASS 19 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 18 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 24 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 22 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
