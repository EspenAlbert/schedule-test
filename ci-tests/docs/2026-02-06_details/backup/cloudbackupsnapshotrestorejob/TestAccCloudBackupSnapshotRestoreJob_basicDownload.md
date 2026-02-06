# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basicDownload Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336540000) |  | dev | timeout | 10805.09s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143ccb2e54ee995910c46/clusters | dev | out_of_capacity | 6.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 23 minutes
- 2026-01-09 PASS 27 minutes
- 2026-01-10 PASS 21 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 22 minutes
- 2026-01-13 PASS 29 minutes
- 2026-01-14 PASS 23 minutes
- 2026-01-15 PASS 25 minutes
- 2026-01-16 PASS 26 minutes
- 2026-01-17 PASS 22 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 23 minutes
- 2026-01-20 PASS 24 minutes
- 2026-01-21 PASS 27 minutes
- 2026-01-22 PASS 23 minutes
- 2026-01-23 PASS 29 minutes
- 2026-01-24 PASS 20 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 21 minutes
- 2026-01-27 PASS 24 minutes
- 2026-01-28 PASS 25 minutes
- 2026-01-29 PASS 24 minutes
- 2026-01-30 PASS 32 minutes
- 2026-01-31

### Error 2026-01-31T03:36:54+00:00
```
2026-01-31T03:36:54.4629061Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-01-31T03:36:54.4631327Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-01-31T03:36:54.4633206Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:36:22.543292566Z, ProjectID: 697d4e7fff188f1e45c5922e, Cluster name: test-acc-tf-c-6679534717590502394
2026-01-31T03:36:54.4650954Z   
2026-01-31T03:36:54.4679634Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-01-31T03:36:54.4680912Z     resource_cloud_backup_snapshot_restore_job_test.go:47: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:36:54.4681803Z         
2026-01-31T03:36:54.4682258Z         Error: Error in create
2026-01-31T03:36:54.4682884Z         
2026-01-31T03:36:54.4683574Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:54.4684936Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:54.4686210Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:54.4686844Z         
2026-01-31T03:36:54.4687701Z         cluster=test-acc-tf-c-6679534717590502394 didn't reach desired state: IDLE,
2026-01-31T03:36:54.4688585Z         error: context deadline exceeded
2026-01-31T03:36:54.4689330Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (10805.93s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9988474Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-02-03T00:40:22.9989767Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-02-03T00:40:23.0003073Z   
2026-02-03T00:40:23.0011264Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basicDownload
2026-02-03T00:40:23.0012199Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:50.111383519Z, ProjectID: 698143ccb2e54ee995910c46, Cluster name: test-acc-tf-c-6298780033990298033
2026-02-03T00:40:23.0025623Z    test_working_directory=/tmp/plugintest1265511431 test_step_number=1
2026-02-03T00:40:23.0026338Z     resource_cloud_backup_snapshot_restore_job_test.go:47: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:23.0026848Z         
2026-02-03T00:40:23.0027121Z         Error: Error in create
2026-02-03T00:40:23.0027381Z         
2026-02-03T00:40:23.0027762Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:23.0028507Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:23.0029219Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:23.0029574Z         
2026-02-03T00:40:23.0030012Z         cluster name: test-acc-tf-c-6298780033990298033, API error details:
2026-02-03T00:40:23.0030715Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143ccb2e54ee995910c46/clusters
2026-02-03T00:40:23.0031435Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:23.0032112Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:23.0032649Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:23.0033081Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basicDownload (6.00s)
```

- 2026-02-04 PASS 19 minutes
- 2026-02-05 PASS 27 minutes
- 2026-02-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 19 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 25 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 21 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 23 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 25 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 26 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 21 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
