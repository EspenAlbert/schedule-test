# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-27 02:19](#error-2025-10-27t0219510000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/68febd205c665f6c63cf6582/clusters/test-acc-tf-c-8343719316254745384/backup/snapshots/68fec27d5c665f6c63d123c6 | dev | timeout | 5761.06s
[2025-10-30 04:45](#error-2025-10-30t0445030000) |  | dev | timeout | 11760.02s

## Timeline
- 2025-10-14: MISSING
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
- 2025-10-23 PASS 24 minutes
- 2025-10-24 PASS 21 minutes
- 2025-10-25 PASS 21 minutes
- 2025-10-26 PASS 17 minutes
- 2025-10-27

### Error 2025-10-27T02:19:51+00:00
```
2025-10-27T02:19:51.1210868Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-10-27T02:19:51.1215113Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-10-27T02:19:51.1215877Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-10-27T02:19:51.1216745Z     pre_check.go:36: Time before creating cluster: 2025-10-27T00:30:34.97063189Z, ProjectID: 68febd205c665f6c63cf6582, Cluster name: test-acc-tf-c-8343719316254745384
2025-10-27T02:19:51.1243195Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-10-27T02:19:51.1243720Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2025-10-27T02:19:51.1244328Z         
2025-10-27T02:19:51.1245296Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-10-27T02:19:51.1246496Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-27T02:19:51.1249172Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68febd205c665f6c63cf6582/clusters/test-acc-tf-c-8343719316254745384/backup/snapshots/68fec27d5c665f6c63d123c6 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 68fec27d5c665f6c63d123c6. Reason: Bad Request. Params: [68fec27d5c665f6c63d123c6], BadRequestDetail: 
2025-10-27T02:19:51.1250670Z         
2025-10-27T02:19:51.1251040Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-27T02:19:51.1251730Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-27T02:19:51.1252383Z           37: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-27T02:19:51.1252716Z         
2025-10-27T02:19:51.1253599Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (5761.60s)
```

- 2025-10-28 PASS 20 minutes
- 2025-10-29 PASS 22 minutes
- 2025-10-30

### Error 2025-10-30T04:45:03+00:00
```
2025-10-30T04:45:03.3495096Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2025-10-30T04:45:03.3496221Z     resource_test.go:25: Creating execution project: test-acc-tf-p-3820546354577568335
2025-10-30T04:45:03.3501194Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2025-10-30T04:45:03.3503539Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-10-30T04:45:03.3505164Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:13.320367648Z, ProjectID: 6902b115e2dc7470847b3273, Cluster name: test-acc-tf-c-2551835599604193706
2025-10-30T04:45:03.3588667Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2025-10-30T04:45:03.3589883Z     resource_test.go:30: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T04:45:03.3591019Z         
2025-10-30T04:45:03.3591607Z         Error: Error in delete
2025-10-30T04:45:03.3592060Z         
2025-10-30T04:45:03.3592876Z         cluster=test-acc-tf-c-2551835599604193706 didn't reach desired state:
2025-10-30T04:45:03.3594058Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-10-30T04:45:03.3594944Z         state: 'DELETING', timeout: 3h0m0s)
2025-10-30T04:45:03.3595636Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (11760.21s)
```

- 2025-10-31 PASS 25 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 17 minutes
- 2025-11-03 PASS 20 minutes
- 2025-11-04 PASS 21 minutes
- 2025-11-05
  - PASS 23 minutes
  - PASS 19 minutes
- 2025-11-06 PASS 26 minutes
- 2025-11-07 PASS 20 minutes
- 2025-11-08 PASS 47 minutes
- 2025-11-09 PASS 20 minutes
- 2025-11-10 PASS 20 minutes
- 2025-11-11 PASS 21 minutes
- 2025-11-12 PASS 23 minutes
- 2025-11-13
  - PASS 32 minutes
  - PASS 18 minutes