# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_sharded Test Details
# Found 42 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 03:28](#error-2025-10-07t0328100000) |  | dev |  | 10805.09s
[2025-10-09 03:25](#error-2025-10-09t0325590000) |  | dev | timeout | 10436.02s
[2025-10-20 10:45](#error-2025-10-20t1045140000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e465a13b66d7cb6020f/clusters | dev | out_of_capacity | 15.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 40 minutes
- 2025-09-24 PASS 41 minutes
- 2025-09-25 PASS 41 minutes
- 2025-09-26 PASS 41 minutes
- 2025-09-27 PASS 36 minutes
- 2025-09-28 PASS 28 minutes
- 2025-09-29
  - PASS 43 minutes
  - PASS 23 minutes
- 2025-09-30
  - PASS 28 minutes
  - PASS 27 minutes
  - PASS 26 minutes
- 2025-10-01
  - PASS an hour
  - PASS 26 minutes
  - PASS 27 minutes
  - PASS 24 minutes
  - PASS 49 minutes
  - PASS 26 minutes
  - PASS 23 minutes
  - PASS 24 minutes
- 2025-10-02 PASS 2 hours
- 2025-10-03 PASS 25 minutes
- 2025-10-04 PASS 32 minutes
- 2025-10-05 PASS 23 minutes
- 2025-10-06 PASS 29 minutes
- 2025-10-07

### Error 2025-10-07T03:28:10+00:00
```
2025-10-07T03:28:10.5705743Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-07T03:28:10.5708026Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-07T03:28:10.5710049Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-07T03:28:10.5710963Z     pre_check.go:36: Time before creating cluster: 2025-10-07T00:27:39.152560472Z, ProjectID: 68e45e74507f48738a082f5c, Cluster name: test-acc-tf-c-6429265337145452936
2025-10-07T03:28:10.5748632Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-07T03:28:10.5749319Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-10-07T03:28:10.5749725Z         
2025-10-07T03:28:10.5750003Z         Error: Error in create
2025-10-07T03:28:10.5750289Z         
2025-10-07T03:28:10.5750676Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-10-07T03:28:10.5751402Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-10-07T03:28:10.5752095Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-10-07T03:28:10.5752455Z         
2025-10-07T03:28:10.5752950Z         cluster=test-acc-tf-c-6429265337145452936 didn't reach desired state: IDLE,
2025-10-07T03:28:10.5753451Z         error: context deadline exceeded
2025-10-07T03:28:10.5753889Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10805.88s)
```

- 2025-10-08 PASS 31 minutes
- 2025-10-09

### Error 2025-10-09T03:25:59+00:00
```
2025-10-09T03:25:59.9173494Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-09T03:25:59.9175612Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-09T03:25:59.9180725Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-09T03:25:59.9181850Z     pre_check.go:36: Time before creating cluster: 2025-10-09T00:27:25.880684423Z, ProjectID: 68e7015ba6da7526606686f6, Cluster name: test-acc-tf-c-3337907227004478939
2025-10-09T03:25:59.9184899Z   diagnostic_summary=
2025-10-09T03:25:59.9186930Z   
2025-10-09T03:25:59.9190703Z   diagnostic_summary=
2025-10-09T03:25:59.9195894Z   
2025-10-09T03:25:59.9263347Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-09T03:25:59.9264145Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-10-09T03:25:59.9264518Z         
2025-10-09T03:25:59.9265283Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'queued', timeout: 1h0m0s)
2025-10-09T03:25:59.9266457Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-09T03:25:59.9267057Z         
2025-10-09T03:25:59.9267424Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-09T03:25:59.9268120Z           on terraform_plugin_test.tf line 65, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-09T03:25:59.9268897Z           65: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-09T03:25:59.9269297Z         
2025-10-09T03:25:59.9270660Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (10436.23s)
```

- 2025-10-10 PASS 29 minutes
- 2025-10-11 PASS 42 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 28 minutes
- 2025-10-14 PASS 25 minutes
- 2025-10-15 PASS 28 minutes
- 2025-10-16 PASS 35 minutes
- 2025-10-17 PASS 28 minutes
- 2025-10-18 PASS 29 minutes
- 2025-10-19 PASS 24 minutes
- 2025-10-20
  - PASS 38 minutes
  - FAIL 15 seconds

### Error 2025-10-20T10:45:14+00:00
```
2025-10-20T10:45:14.5737999Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-20T10:45:14.5742697Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-20T10:45:14.5746862Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2025-10-20T10:45:14.5747714Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:26:32.405124443Z, ProjectID: 68f60e465a13b66d7cb6020f, Cluster name: test-acc-tf-c-6015784795318241836
2025-10-20T10:45:14.5760945Z    test_working_directory=/tmp/plugintest2638687489 test_step_number=1
2025-10-20T10:45:14.5761506Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2025-10-20T10:45:14.5761877Z         
2025-10-20T10:45:14.5762140Z         Error: Error in create
2025-10-20T10:45:14.5762393Z         
2025-10-20T10:45:14.5762764Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-10-20T10:45:14.5763464Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-10-20T10:45:14.5764121Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-10-20T10:45:14.5764450Z         
2025-10-20T10:45:14.5764876Z         cluster name: test-acc-tf-c-6015784795318241836, API error details:
2025-10-20T10:45:14.5765566Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e465a13b66d7cb6020f/clusters
2025-10-20T10:45:14.5766264Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:45:14.5766922Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:45:14.5767419Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:45:14.5767813Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (15.60s)
```

- 2025-10-21 PASS 23 minutes
- 2025-10-22
  - PASS 32 minutes
  - PASS 24 minutes