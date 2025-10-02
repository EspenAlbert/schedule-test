# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basicDownload Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 43) FAIL
Success rate: 97.73%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 05:58](#error-2025-10-01t0558570000) |  | dev | flaky_500 | 5.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 35 minutes
- 2025-09-04 PASS 28 minutes
- 2025-09-05 PASS 19 minutes
- 2025-09-06 PASS 29 minutes
- 2025-09-07 PASS 26 minutes
- 2025-09-08
  - PASS 31 minutes
  - PASS 24 minutes
  - PASS 32 minutes
- 2025-09-09 PASS 32 minutes
- 2025-09-10 PASS 28 minutes
- 2025-09-11 PASS 26 minutes
- 2025-09-12 PASS 21 minutes
- 2025-09-13 PASS 29 minutes
- 2025-09-14 PASS 17 minutes
- 2025-09-15
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-09-16 PASS 24 minutes
- 2025-09-17 PASS 24 minutes
- 2025-09-18 PASS 26 minutes
- 2025-09-19 PASS 21 minutes
- 2025-09-20 PASS 20 minutes
- 2025-09-21 PASS 17 minutes
- 2025-09-22 PASS 17 minutes
- 2025-09-23 PASS 19 minutes
- 2025-09-24 PASS 20 minutes
- 2025-09-25 PASS 19 minutes
- 2025-09-26 PASS 20 minutes
- 2025-09-27 PASS 22 minutes
- 2025-09-28 PASS 22 minutes
- 2025-09-29
  - PASS 21 minutes
  - PASS 16 minutes
- 2025-09-30
  - PASS 23 minutes
  - PASS 18 minutes
  - PASS 19 minutes
- 2025-10-01
  - PASS 19 minutes
  - PASS 17 minutes
  - FAIL 5 seconds

### Error 2025-10-01T05:58:57+00:00
```
2025-10-01T05:58:57.7658454Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-10-01T05:58:57.7660720Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-10-01T05:58:57.7662512Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-10-01T05:58:57.7664217Z     pre_check.go:32: Time before creating cluster: 2025-10-01T04:57:02.861559209Z, ProjectID: 68dcb4955b2d552e98f7d556, Cluster name: test-acc-tf-c-7050001500371920237
2025-10-01T05:58:57.7690938Z    test_terraform_path=/home/runner/work/_temp/920764a5-1707-43de-9713-8c96ab1835fc/terraform
2025-10-01T05:58:57.7692570Z     resource_cloud_backup_snapshot_restore_job_test.go:47: Step 1/2 error: Error running apply: exit status 1
2025-10-01T05:58:57.7693469Z         
2025-10-01T05:58:57.7693960Z         Error: Error in create
2025-10-01T05:58:57.7694423Z         
2025-10-01T05:58:57.7695124Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-01T05:58:57.7696499Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-01T05:58:57.7697762Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-01T05:58:57.7698399Z         
2025-10-01T05:58:57.7699282Z         cluster name: test-acc-tf-c-7050001500371920237, API error details:
2025-10-01T05:58:57.7700593Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcb4955b2d552e98f7d556/clusters
2025-10-01T05:58:57.7701802Z         POST: HTTP 403 Forbidden (Error code:
2025-10-01T05:58:57.7702805Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-10-01T05:58:57.7703964Z         Configuration. Contains selections that are unavailable due to your
2025-10-01T05:58:57.7705103Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-10-01T05:58:57.7705874Z         BadRequestDetail: 
2025-10-01T05:58:57.7706567Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (5.93s)
```

  - PASS 16 minutes
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 20 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 29 minutes