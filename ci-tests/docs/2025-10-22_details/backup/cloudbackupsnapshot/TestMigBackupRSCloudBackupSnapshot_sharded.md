# backup/cloudbackupsnapshot/TestMigBackupRSCloudBackupSnapshot_sharded Test Details
# Found 39 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 03:28](#error-2025-10-07t0328100000) |  | dev |  | 10803.07s
[2025-10-09 03:25](#error-2025-10-09t0325590000) |  | dev | timeout | 10728.04s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 41 minutes
- 2025-09-24 PASS 40 minutes
- 2025-09-25 PASS 42 minutes
- 2025-09-26 PASS 40 minutes
- 2025-09-27 PASS 27 minutes
- 2025-09-28 PASS 26 minutes
- 2025-09-29
  - PASS 34 minutes
  - PASS 24 minutes
- 2025-09-30
  - PASS 28 minutes
  - PASS 27 minutes
  - PASS 25 minutes
- 2025-10-01
  - PASS an hour
  - PASS 26 minutes
  - PASS 25 minutes
  - PASS 25 minutes
  - PASS 36 minutes
  - PASS 25 minutes
  - PASS 24 minutes
  - PASS 26 minutes
- 2025-10-02 PASS 2 hours
- 2025-10-03 PASS 27 minutes
- 2025-10-04 PASS 33 minutes
- 2025-10-05 PASS 25 minutes
- 2025-10-06 PASS 26 minutes
- 2025-10-07

### Error 2025-10-07T03:28:10+00:00
```
2025-10-07T03:28:10.5704099Z === RUN   TestMigBackupRSCloudBackupSnapshot_sharded
2025-10-07T03:28:10.5709643Z === CONT  TestMigBackupRSCloudBackupSnapshot_sharded
2025-10-07T03:28:10.5731355Z === NAME  TestMigBackupRSCloudBackupSnapshot_sharded
2025-10-07T03:28:10.5731932Z     resource_migration_test.go:56: Step 1/2 error: Error running apply: exit status 1
2025-10-07T03:28:10.5732366Z         
2025-10-07T03:28:10.5732642Z         Error: Error in create
2025-10-07T03:28:10.5732924Z         
2025-10-07T03:28:10.5733307Z           with mongodbatlas_advanced_cluster.my_cluster,
2025-10-07T03:28:10.5734020Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2025-10-07T03:28:10.5734692Z           14: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2025-10-07T03:28:10.5735049Z         
2025-10-07T03:28:10.5735530Z         cluster=test-acc-tf-c-2913479716767936956 didn't reach desired state: IDLE,
2025-10-07T03:28:10.5736029Z         error: context deadline exceeded
2025-10-07T03:28:10.5736452Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_sharded (10803.66s)
```

- 2025-10-08 PASS 29 minutes
- 2025-10-09

### Error 2025-10-09T03:25:59+00:00
```
2025-10-09T03:25:59.9171980Z === RUN   TestMigBackupRSCloudBackupSnapshot_sharded
2025-10-09T03:25:59.9176834Z === CONT  TestMigBackupRSCloudBackupSnapshot_sharded
2025-10-09T03:25:59.9245590Z === NAME  TestMigBackupRSCloudBackupSnapshot_sharded
2025-10-09T03:25:59.9246144Z     resource_migration_test.go:56: Step 1/2 error: Error running apply: exit status 1
2025-10-09T03:25:59.9246542Z         
2025-10-09T03:25:59.9247311Z         Error: error creating a snapshot: timeout while waiting for state to become 'completed, failed' (last state: 'queued', timeout: 1h0m0s)
2025-10-09T03:25:59.9248599Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-09T03:25:59.9249190Z         
2025-10-09T03:25:59.9249560Z           with mongodbatlas_cloud_backup_snapshot.test,
2025-10-09T03:25:59.9250260Z           on terraform_plugin_test.tf line 67, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2025-10-09T03:25:59.9250946Z           67: 		resource "mongodbatlas_cloud_backup_snapshot" "test" {
2025-10-09T03:25:59.9251283Z         
2025-10-09T03:25:59.9252163Z   diagnostic_summary=
2025-10-09T03:25:59.9255130Z    tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_cloud_backup_snapshot tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_req_id=84700105-18b5-0f97-4d46-a46a832965a2 diagnostic_detail=""
2025-10-09T03:25:59.9263084Z   
2025-10-09T03:25:59.9271562Z --- FAIL: TestMigBackupRSCloudBackupSnapshot_sharded (10728.44s)
```

- 2025-10-10 PASS 30 minutes
- 2025-10-11 PASS 42 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 30 minutes
- 2025-10-14 PASS 24 minutes
- 2025-10-15 PASS 27 minutes
- 2025-10-16 PASS 36 minutes
- 2025-10-17 PASS 28 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 24 minutes
- 2025-10-20 PASS 43 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 29 minutes
  - PASS 24 minutes