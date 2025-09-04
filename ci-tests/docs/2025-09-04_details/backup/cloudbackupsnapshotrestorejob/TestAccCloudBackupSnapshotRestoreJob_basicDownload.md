# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basicDownload Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-16 01:40](#error-2025-08-16t0140520000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/689fd0dd9471411165258b3d/clusters | dev |  | 10.07s
[2025-08-30 01:15](#error-2025-08-30t0115420000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68b2458b491e0c777e9d5391/clusters | dev |  | 10.09s
[2025-09-01 05:30](#error-2025-09-01t0530140000) |  | dev | timeout | 10810.08s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 32 minutes
- 2025-08-07 PASS 36 minutes
- 2025-08-08 PASS 23 minutes
- 2025-08-09 PASS 29 minutes
- 2025-08-10 PASS 37 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 24 minutes
  - PASS 25 minutes
- 2025-08-13 PASS 34 minutes
- 2025-08-14 PASS 30 minutes
- 2025-08-15 PASS 18 minutes
- 2025-08-16

### Error 2025-08-16T01:40:52+00:00
```
2025-08-16T01:40:52.3033411Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-08-16T01:40:52.3034601Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-08-16T01:40:52.3036871Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-08-16T01:40:52.3037707Z     pre_check.go:40: Time before creating cluster: 2025-08-16T00:29:29.829274018Z, ProjectID: 689fd0dd9471411165258b3d, Cluster name: test-acc-tf-c-9154123998364682391
2025-08-16T01:40:52.3050709Z   
2025-08-16T01:40:52.3051213Z     resource_cloud_backup_snapshot_restore_job_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-08-16T01:40:52.3051673Z         
2025-08-16T01:40:52.3053645Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/689fd0dd9471411165258b3d/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-16T01:40:52.3055017Z         
2025-08-16T01:40:52.3055375Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-08-16T01:40:52.3056189Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-16T01:40:52.3056844Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-16T01:40:52.3057180Z         
2025-08-16T01:40:52.3057490Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (10.75s)
```

- 2025-08-17 PASS 37 minutes
- 2025-08-18 PASS 29 minutes
- 2025-08-19 PASS 31 minutes
- 2025-08-20
  - PASS 29 minutes
  - PASS 26 minutes
- 2025-08-21 PASS 25 minutes
- 2025-08-22 PASS 18 minutes
- 2025-08-23 PASS 32 minutes
- 2025-08-24 PASS 22 minutes
- 2025-08-25 PASS 21 minutes
- 2025-08-26 PASS 35 minutes
- 2025-08-27 PASS 35 minutes
- 2025-08-28 PASS 29 minutes
- 2025-08-29 PASS 37 minutes
- 2025-08-30

### Error 2025-08-30T01:15:42+00:00
```
2025-08-30T01:15:42.4413984Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-08-30T01:15:42.4416235Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-08-30T01:15:42.4420675Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-08-30T01:15:42.4422507Z     pre_check.go:40: Time before creating cluster: 2025-08-30T00:28:07.852817743Z, ProjectID: 68b2458b491e0c777e9d5391, Cluster name: test-acc-tf-c-2586515898239632731
2025-08-30T01:15:42.4444508Z    test_name=TestAccCloudBackupSnapshotRestoreJob_basicDownload test_terraform_path=/home/runner/work/_temp/78b7daca-7139-4957-a262-bf6782157ac1/terraform
2025-08-30T01:15:42.4446296Z     resource_cloud_backup_snapshot_restore_job_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-08-30T01:15:42.4447129Z         
2025-08-30T01:15:42.4451112Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b2458b491e0c777e9d5391/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-08-30T01:15:42.4453776Z         
2025-08-30T01:15:42.4454452Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-08-30T01:15:42.4455966Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-30T01:15:42.4457209Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-30T01:15:42.4457821Z         
2025-08-30T01:15:42.4458413Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (10.90s)
```

- 2025-08-31 PASS 24 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T05:30:14+00:00
```
2025-09-01T05:30:14.9616366Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-09-01T05:30:14.9617671Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-09-01T05:30:14.9619943Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-09-01T05:30:14.9620881Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:32:12.362255674Z, ProjectID: 68b4e9807af6b0372e946583, Cluster name: test-acc-tf-c-7884165681214828349
2025-09-01T05:30:14.9642430Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2025-09-01T05:30:14.9643073Z     resource_cloud_backup_snapshot_restore_job_test.go:45: Step 1/2 error: Error running apply: exit status 1
2025-09-01T05:30:14.9643525Z         
2025-09-01T05:30:14.9644223Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T05:30:14.9644744Z         
2025-09-01T05:30:14.9645095Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T05:30:14.9645778Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T05:30:14.9646413Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T05:30:14.9646736Z         
2025-09-01T05:30:14.9647058Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (10810.82s)
```

  - PASS an hour
  - PASS an hour
  - PASS 27 minutes
  - PASS 21 minutes
  - PASS 19 minutes
  - PASS 25 minutes
  - PASS 22 minutes
- 2025-09-02 PASS 30 minutes
- 2025-09-03 PASS 35 minutes
- 2025-09-04 PASS 28 minutes