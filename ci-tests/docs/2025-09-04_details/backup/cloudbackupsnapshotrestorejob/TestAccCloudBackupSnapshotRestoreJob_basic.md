# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-27 01:11](#error-2025-08-27t0111590000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68ae511e8c9e474c785bd954/clusters/test-acc-tf-c-252589345635889902/backup/restoreJobs | dev | flaky_500 | 2117.03s
[2025-09-01 05:30](#error-2025-09-01t0530140000) |  | dev | timeout | 10815.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 32 minutes
- 2025-08-07 PASS 33 minutes
- 2025-08-08 PASS 26 minutes
- 2025-08-09 PASS 31 minutes
- 2025-08-10 PASS 40 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 25 minutes
  - PASS 17 minutes
- 2025-08-13 PASS 32 minutes
- 2025-08-14 PASS 30 minutes
- 2025-08-15 PASS 20 minutes
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 37 minutes
- 2025-08-18 PASS 29 minutes
- 2025-08-19 PASS 32 minutes
- 2025-08-20
  - PASS 31 minutes
  - PASS 27 minutes
- 2025-08-21 PASS 26 minutes
- 2025-08-22 PASS 18 minutes
- 2025-08-23 PASS 32 minutes
- 2025-08-24 PASS 22 minutes
- 2025-08-25 PASS 25 minutes
- 2025-08-26 PASS 35 minutes
- 2025-08-27

### Error 2025-08-27T01:11:59+00:00
```
2025-08-27T01:11:59.2187226Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2025-08-27T01:11:59.2189591Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2025-08-27T01:11:59.2193141Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2025-08-27T01:11:59.2194123Z     pre_check.go:40: Time before creating cluster: 2025-08-27T00:28:32.130818727Z, ProjectID: 68ae511e8c9e474c785bd954, Cluster name: test-acc-tf-c-252589345635889902
2025-08-27T01:11:59.2201918Z   
2025-08-27T01:11:59.2226599Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2025-08-27T01:11:59.2227256Z     resource_cloud_backup_snapshot_restore_job_test.go:31: Step 1/2 error: Error running apply: exit status 1
2025-08-27T01:11:59.2227714Z         
2025-08-27T01:11:59.2229467Z         Error: error restore a snapshot: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ae511e8c9e474c785bd954/clusters/test-acc-tf-c-252589345635889902/backup/restoreJobs POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-27T01:11:59.2230717Z         
2025-08-27T01:11:59.2231138Z           with mongodbatlas_cloud_backup_snapshot_restore_job.test,
2025-08-27T01:11:59.2231932Z           on terraform_plugin_test.tf line 47, in resource "mongodbatlas_cloud_backup_snapshot_restore_job" "test":
2025-08-27T01:11:59.2232667Z           47: 		resource "mongodbatlas_cloud_backup_snapshot_restore_job" "test" {
2025-08-27T01:11:59.2233028Z         
2025-08-27T01:11:59.2233783Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (2117.30s)
```

- 2025-08-28 PASS 29 minutes
- 2025-08-29 PASS 38 minutes
- 2025-08-30 PASS 27 minutes
- 2025-08-31 PASS 26 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T05:30:14+00:00
```
2025-09-01T05:30:14.9615626Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2025-09-01T05:30:14.9618062Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2025-09-01T05:30:14.9621540Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2025-09-01T05:30:14.9622344Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:32:17.366370955Z, ProjectID: 68b4e9807af6b0372e946583, Cluster name: test-acc-tf-c-5993541716015049832
2025-09-01T05:30:14.9628256Z   
2025-09-01T05:30:14.9656108Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2025-09-01T05:30:14.9656734Z     resource_cloud_backup_snapshot_restore_job_test.go:31: Step 1/2 error: Error running apply: exit status 1
2025-09-01T05:30:14.9657179Z         
2025-09-01T05:30:14.9657877Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T05:30:14.9658402Z         
2025-09-01T05:30:14.9658757Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T05:30:14.9659444Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T05:30:14.9660072Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T05:30:14.9660403Z         
2025-09-01T05:30:14.9660787Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (10815.80s)
```

  - PASS an hour
  - PASS an hour
  - PASS 31 minutes
  - PASS 20 minutes
  - PASS 26 minutes
  - PASS 22 minutes
  - PASS 28 minutes
- 2025-09-02 PASS 30 minutes
- 2025-09-03 PASS 30 minutes
- 2025-09-04 PASS 35 minutes