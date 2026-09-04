# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_sharded Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-14 01:46](#error-2026-08-14t0146120000) |  | dev | 4395.10s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 30 minutes
- 2026-08-07 PASS 31 minutes
- 2026-08-08 PASS 26 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 27 minutes
- 2026-08-11 PASS 29 minutes
- 2026-08-12 PASS 28 minutes
- 2026-08-13 PASS 26 minutes
- 2026-08-14

### Error 2026-08-14T01:46:12+00:00
```
2026-08-14T01:46:12.3313478Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-08-14T01:46:12.3315744Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2026-08-14T01:46:12.3320060Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-08-14T01:46:12.3320735Z     pre_check.go:46: Time before creating cluster: 2026-08-14T00:33:10.666767942Z, ProjectID: 6a7e623533ce881fa8856c20, Cluster name: test-acc-tf-c-8977732667771714615
2026-08-14T01:46:12.3322726Z   diagnostic_summary=
2026-08-14T01:46:12.3326998Z    diagnostic_detail="" tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-08-14T01:46:12.3370300Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-08-14T01:46:12.3370862Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2026-08-14T01:46:12.3371231Z         
2026-08-14T01:46:12.3371791Z         Error: error creating a snapshot: error creating MongoDB snapshot(6a7e692118285eb9af5a75e6) status was: failed
2026-08-14T01:46:12.3372231Z         
2026-08-14T01:46:12.3372596Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-08-14T01:46:12.3373186Z           on terraform_plugin_test.tf line 65, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-08-14T01:46:12.3373749Z           65: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-08-14T01:46:12.3374276Z         
2026-08-14T01:46:12.3375047Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (4395.97s)
```

- 2026-08-15 PASS 26 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 28 minutes
- 2026-08-18 PASS 26 minutes
- 2026-08-19 PASS 28 minutes
- 2026-08-20 PASS 27 minutes
- 2026-08-21 PASS 25 minutes
- 2026-08-22 PASS 26 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 28 minutes
- 2026-08-25 PASS 28 minutes
- 2026-08-26 PASS 26 minutes
- 2026-08-27 PASS an hour
- 2026-08-28 PASS 53 minutes
- 2026-08-29 PASS 36 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 39 minutes
- 2026-09-01 PASS 32 minutes
- 2026-09-02 PASS 30 minutes
- 2026-09-03 PASS 33 minutes
- 2026-09-04 PASS 52 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 28 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 25 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 26 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 26 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 27 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 26 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
