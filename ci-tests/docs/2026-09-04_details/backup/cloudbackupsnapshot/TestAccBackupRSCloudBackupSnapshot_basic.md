# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-14 01:46](#error-2026-08-14t0146120000) |  | dev | 2621.03s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 20 minutes
- 2026-08-07 PASS 20 minutes
- 2026-08-08 PASS 22 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 21 minutes
- 2026-08-11 PASS 22 minutes
- 2026-08-12 PASS 22 minutes
- 2026-08-13 PASS 21 minutes
- 2026-08-14

### Error 2026-08-14T01:46:12+00:00
```
2026-08-14T01:46:12.3312720Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-08-14T01:46:12.3316109Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2026-08-14T01:46:12.3317348Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2026-08-14T01:46:12.3318061Z     pre_check.go:46: Time before creating cluster: 2026-08-14T00:33:00.661426915Z, ProjectID: 6a7e623533ce881fa8856c20, Cluster name: test-acc-tf-c-4748173444168261644
2026-08-14T01:46:12.3345109Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2026-08-14T01:46:12.3347105Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2026-08-14T01:46:12.3347545Z         
2026-08-14T01:46:12.3348341Z         Error: error creating a snapshot: error creating MongoDB snapshot(6a7e65e65c1e3c8ecb0cc5ae) status was: failed
2026-08-14T01:46:12.3348848Z         
2026-08-14T01:46:12.3349342Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-08-14T01:46:12.3350009Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-08-14T01:46:12.3350699Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-08-14T01:46:12.3351233Z         
2026-08-14T01:46:12.3351676Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (2621.28s)
```

- 2026-08-15 PASS 21 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 21 minutes
- 2026-08-18 PASS 23 minutes
- 2026-08-19 PASS 23 minutes
- 2026-08-20 PASS 23 minutes
- 2026-08-21 PASS 22 minutes
- 2026-08-22 PASS 22 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 20 minutes
- 2026-08-25 PASS 22 minutes
- 2026-08-26 PASS 20 minutes
- 2026-08-27 PASS 46 minutes
- 2026-08-28 PASS 40 minutes
- 2026-08-29 PASS 22 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 22 minutes
- 2026-09-01 PASS 23 minutes
- 2026-09-02 PASS 20 minutes
- 2026-09-03 PASS 26 minutes
- 2026-09-04 PASS 29 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 20 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 21 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 20 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 21 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 21 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 22 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
