# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 03:25](#error-2025-10-09t0325590000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/68e7015ba6da7526606686f6/clusters/test-acc-tf-c-5267963547498777691/backup/snapshots/68e705a9c2a3cd169306d36d | dev | timeout | 10651.03s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 20 minutes
- 2025-09-24 PASS 20 minutes
- 2025-09-25 PASS 23 minutes
- 2025-09-26 PASS 20 minutes
- 2025-09-27 PASS 24 minutes
- 2025-09-28 PASS 21 minutes
- 2025-09-29
  - PASS 20 minutes
  - PASS 16 minutes
- 2025-09-30
  - PASS 25 minutes
  - PASS 24 minutes
  - PASS 21 minutes
- 2025-10-01
  - PASS 19 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 16 minutes
  - PASS 21 minutes
- 2025-10-02 PASS 25 minutes
- 2025-10-03 PASS 19 minutes
- 2025-10-04 PASS 31 minutes
- 2025-10-05 PASS 17 minutes
- 2025-10-06 PASS 21 minutes
- 2025-10-07 PASS 19 minutes
- 2025-10-08 PASS 20 minutes
- 2025-10-09

### Error 2025-10-09T03:25:59+00:00
```
2025-10-09T03:25:59.9172757Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-10-09T03:25:59.9176463Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-10-09T03:25:59.9179159Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-10-09T03:25:59.9180027Z     pre_check.go:36: Time before creating cluster: 2025-10-09T00:27:20.87813055Z, ProjectID: 68e7015ba6da7526606686f6, Cluster name: test-acc-tf-c-5267963547498777691
2025-10-09T03:25:59.9207725Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-10-09T03:25:59.9208456Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-10-09T03:25:59.9208850Z         
2025-10-09T03:25:59.9209809Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-10-09T03:25:59.9211051Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-09T03:25:59.9214409Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e7015ba6da7526606686f6/clusters/test-acc-tf-c-5267963547498777691/backup/snapshots/68e705a9c2a3cd169306d36d DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 68e705a9c2a3cd169306d36d. Reason: Bad Request. Params: [68e705a9c2a3cd169306d36d], BadRequestDetail: 
2025-10-09T03:25:59.9215918Z         
2025-10-09T03:25:59.9216297Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-09T03:25:59.9216997Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-09T03:25:59.9217665Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-09T03:25:59.9218013Z         
2025-10-09T03:25:59.9271117Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (10651.31s)
```

- 2025-10-10 PASS 26 minutes
- 2025-10-11 PASS 23 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 23 minutes
- 2025-10-14 PASS 19 minutes
- 2025-10-15 PASS 21 minutes
- 2025-10-16 PASS 35 minutes
- 2025-10-17 PASS 26 minutes
- 2025-10-18 PASS 20 minutes
- 2025-10-19 PASS 20 minutes
- 2025-10-20
  - PASS 35 minutes
  - PASS 18 minutes
- 2025-10-21 PASS 20 minutes
- 2025-10-22
  - PASS 24 minutes
  - PASS 22 minutes