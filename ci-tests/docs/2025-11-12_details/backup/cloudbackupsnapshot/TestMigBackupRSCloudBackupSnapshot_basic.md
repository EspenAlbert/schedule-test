# backup/cloudbackupsnapshot/TestMigBackupRSCloudBackupSnapshot_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-09 03:25](#error-2025-10-09t0325590000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/68e7015ba6da7526606686f6/clusters/test-acc-tf-c-6690182884902049977/backup/snapshots/68e705c4c2a3cd169306d604 | dev | timeout | 10428.10s
[2025-10-12 03:11](#error-2025-10-12t0311350000) | CANNOT_DELETE_IN_PROGRESS_SNAPSHOT /api/atlas/v2/groups/68eaf638454e3b49aeac0595/clusters/test-acc-tf-c-1062105466693339268/backup/snapshots/68eafb32454e3b49aeac77e4 | qa | timeout | 8166.09s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 29 minutes
- 2025-10-05 PASS 18 minutes
- 2025-10-06 PASS 20 minutes
- 2025-10-07 PASS 21 minutes
- 2025-10-08 PASS 22 minutes
- 2025-10-09

### Error 2025-10-09T03:25:59+00:00
```
2025-10-09T03:25:59.9170217Z === RUN   TestMigBackupRSCloudBackupSnapshot_basic
2025-10-09T03:25:59.9171016Z     resource_migration_test.go:15: Creating execution project: test-acc-tf-p-8435809098290687498
2025-10-09T03:25:59.9175235Z === CONT  TestMigBackupRSCloudBackupSnapshot_basic
2025-10-09T03:25:59.9229062Z === NAME  TestMigBackupRSCloudBackupSnapshot_basic
2025-10-09T03:25:59.9229736Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-10-09T03:25:59.9230149Z         
2025-10-09T03:25:59.9230949Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-10-09T03:25:59.9232142Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-09T03:25:59.9234721Z         cleanup failed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e7015ba6da7526606686f6/clusters/test-acc-tf-c-6690182884902049977/backup/snapshots/68e705c4c2a3cd169306d604 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 68e705c4c2a3cd169306d604. Reason: Bad Request. Params: [68e705c4c2a3cd169306d604], BadRequestDetail: 
2025-10-09T03:25:59.9236210Z         
2025-10-09T03:25:59.9236597Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-09T03:25:59.9237297Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-09T03:25:59.9238102Z           39: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-09T03:25:59.9238564Z         
2025-10-09T03:25:59.9270201Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_basic (10428.98s)
```

- 2025-10-10 PASS 27 minutes
- 2025-10-11 PASS 24 minutes
- 2025-10-12

### Error 2025-10-12T03:11:35+00:00
```
2025-10-12T03:11:35.9386195Z === RUN   TestMigBackupRSCloudBackupSnapshot_basic
2025-10-12T03:11:35.9387202Z     resource_migration_test.go:15: Creating execution project: test-acc-tf-p-1678223270866954569
2025-10-12T03:11:35.9394146Z === CONT  TestMigBackupRSCloudBackupSnapshot_basic
2025-10-12T03:11:35.9415938Z === NAME  TestMigBackupRSCloudBackupSnapshot_basic
2025-10-12T03:11:35.9416760Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-10-12T03:11:35.9417544Z         
2025-10-12T03:11:35.9419081Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'inProgress', timeout: 1h0m0s)
2025-10-12T03:11:35.9420785Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-12T03:11:35.9423360Z         cleanup failed: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf638454e3b49aeac0595/clusters/test-acc-tf-c-1062105466693339268/backup/snapshots/68eafb32454e3b49aeac77e4 DELETE: HTTP 400 Bad Request (Error code: "CANNOT_DELETE_IN_PROGRESS_SNAPSHOT") Detail: Cannot delete an in progress snapshot 68eafb32454e3b49aeac77e4. Reason: Bad Request. Params: [68eafb32454e3b49aeac77e4], BadRequestDetail: 
2025-10-12T03:11:35.9425114Z         
2025-10-12T03:11:35.9425488Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-12T03:11:35.9426183Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-12T03:11:35.9426836Z           39: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-12T03:11:35.9427162Z         
2025-10-12T03:11:35.9428205Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_basic (8166.90s)
```

- 2025-10-13 PASS 22 minutes
- 2025-10-14 PASS 19 minutes
- 2025-10-15 PASS 20 minutes
- 2025-10-16 PASS 33 minutes
- 2025-10-17 PASS 26 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 22 minutes
- 2025-10-20 PASS 18 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 21 minutes
  - PASS 18 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS 20 minutes
- 2025-10-25: MISSING
- 2025-10-26 PASS 18 minutes
- 2025-10-27 PASS an hour
- 2025-10-28: MISSING
- 2025-10-29 PASS 33 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 21 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 20 minutes
- 2025-11-03 PASS 21 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 24 minutes
  - PASS 22 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 21 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 19 minutes
- 2025-11-10 PASS 18 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 22 minutes