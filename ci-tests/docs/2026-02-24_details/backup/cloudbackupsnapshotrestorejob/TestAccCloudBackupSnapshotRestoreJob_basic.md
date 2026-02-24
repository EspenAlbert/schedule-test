# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336540000) |  | dev | timeout | 10803.04s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143ccb2e54ee995910c46/clusters | dev | out_of_capacity | 5.08s
[2026-02-24 01:20](#error-2026-02-24t0120270000) |  | dev | flaky_500 | 1440.09s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 21 minutes
- 2026-01-27 PASS 23 minutes
- 2026-01-28 PASS 23 minutes
- 2026-01-29 PASS 29 minutes
- 2026-01-30 PASS 32 minutes
- 2026-01-31

### Error 2026-01-31T03:36:54+00:00
```
2026-01-31T03:36:54.4625414Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-01-31T03:36:54.4627175Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-6249055278210138206
2026-01-31T03:36:54.4630587Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2026-01-31T03:36:54.4651411Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2026-01-31T03:36:54.4652809Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:36:54.4653730Z         
2026-01-31T03:36:54.4654187Z         Error: Error in create
2026-01-31T03:36:54.4654629Z         
2026-01-31T03:36:54.4655308Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:54.4656667Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:54.4658190Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:54.4658838Z         
2026-01-31T03:36:54.4659698Z         cluster=test-acc-tf-c-5708564488918299702 didn't reach desired state: IDLE,
2026-01-31T03:36:54.4660582Z         error: context deadline exceeded
2026-01-31T03:36:54.4661283Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (10803.37s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9986686Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-02-03T00:40:22.9987430Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-1257261102732029630
2026-02-03T00:40:22.9989352Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2026-02-03T00:40:23.0003349Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2026-02-03T00:40:23.0004015Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:23.0004622Z         
2026-02-03T00:40:23.0004886Z         Error: Error in create
2026-02-03T00:40:23.0005147Z         
2026-02-03T00:40:23.0005533Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:23.0006279Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:23.0006979Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:23.0007342Z         
2026-02-03T00:40:23.0007774Z         cluster name: test-acc-tf-c-9093428694612511465, API error details:
2026-02-03T00:40:23.0008478Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143ccb2e54ee995910c46/clusters
2026-02-03T00:40:23.0009190Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:23.0009870Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:23.0010399Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:23.0010806Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (5.84s)
```

- 2026-02-04 PASS 39 minutes
- 2026-02-05 PASS 25 minutes
- 2026-02-06 PASS 24 minutes
- 2026-02-07 PASS 23 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 24 minutes
- 2026-02-10 PASS 26 minutes
- 2026-02-11 PASS 23 minutes
- 2026-02-12 PASS 22 minutes
- 2026-02-13 PASS 24 minutes
- 2026-02-14 PASS 23 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 23 minutes
- 2026-02-18 PASS 25 minutes
- 2026-02-19 PASS 31 minutes
- 2026-02-20 PASS 27 minutes
- 2026-02-21 PASS 22 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 25 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2819049Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2026-02-24T01:20:27.2820374Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Creating execution project (1): test-acc-tf-p-124839683414035327
2026-02-24T01:20:27.2823813Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2026-02-24T01:20:27.2844263Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2026-02-24T01:20:27.2845704Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:20:27.2846618Z         
2026-02-24T01:20:27.2847845Z         Error: error taking a snapshot: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2848802Z         
2026-02-24T01:20:27.2849462Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-02-24T01:20:27.2850787Z           on terraform_plugin_test.tf line 38, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-02-24T01:20:27.2852029Z           38: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-02-24T01:20:27.2852657Z         
2026-02-24T01:20:27.2868237Z    test_terraform_path=/home/runner/work/_temp/52ba8357-b941-451b-bbc0-55a5946c1e86/terraform test_working_directory=/tmp/plugintest3087447250
2026-02-24T01:20:27.2878673Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (1440.89s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 27 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 26 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 30 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 25 minutes
  - PASS 19 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 22 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
