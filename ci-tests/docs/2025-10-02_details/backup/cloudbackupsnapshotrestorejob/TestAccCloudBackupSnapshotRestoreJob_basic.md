# backup/cloudbackupsnapshotrestorejob/TestAccCloudBackupSnapshotRestoreJob_basic Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL(x 3)
Success rate: 93.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-06 01:17](#error-2025-09-06t0117320000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v2/groups/68bb7ff5debb2e1954e3fb53/clusters | dev | flaky_500 | 15.08s
[2025-09-15 01:06](#error-2025-09-15t0106240000) |  | dev |  | 0.08s
[2025-09-17 01:10](#error-2025-09-17t0110160000) |  | dev |  | 0.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 30 minutes
- 2025-09-04 PASS 35 minutes
- 2025-09-05 PASS 22 minutes
- 2025-09-06

### Error 2025-09-06T01:17:32+00:00
```
2025-09-06T01:17:32.1626862Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2025-09-06T01:17:32.1629836Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2025-09-06T01:17:32.1633352Z === NAME  TestAccCloudBackupSnapshotRestoreJob_basic
2025-09-06T01:17:32.1634190Z     pre_check.go:40: Time before creating cluster: 2025-09-06T00:27:50.474430205Z, ProjectID: 68bb7ff5debb2e1954e3fb53, Cluster name: test-acc-tf-c-347013830845005052
2025-09-06T01:17:32.1646223Z    test_step_number=1 test_name=TestAccCloudBackupSnapshotRestoreJob_basic test_terraform_path=/home/runner/work/_temp/c3c231d7-ab9b-4140-8d6e-6f68777db761/terraform test_working_directory=/tmp/plugintest1417819803
2025-09-06T01:17:32.1647397Z     resource_cloud_backup_snapshot_restore_job_test.go:31: Step 1/2 error: Error running apply: exit status 1
2025-09-06T01:17:32.1647871Z         
2025-09-06T01:17:32.1650166Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68bb7ff5debb2e1954e3fb53/clusters POST: HTTP 403 Forbidden (Error code: "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies. Reason: Forbidden. Params: [], BadRequestDetail: 
2025-09-06T01:17:32.1651546Z         
2025-09-06T01:17:32.1651928Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-06T01:17:32.1652662Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-06T01:17:32.1653336Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-06T01:17:32.1653686Z         
2025-09-06T01:17:32.1654105Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (15.80s)
```

- 2025-09-07 PASS 25 minutes
- 2025-09-08
  - PASS 34 minutes
  - PASS 22 minutes
  - PASS 32 minutes
- 2025-09-09 PASS 31 minutes
- 2025-09-10 PASS 26 minutes
- 2025-09-11 PASS 24 minutes
- 2025-09-12 PASS 22 minutes
- 2025-09-13 PASS 27 minutes
- 2025-09-14 PASS 18 minutes
- 2025-09-15
  - FAIL a moment

### Error 2025-09-15T01:06:24+00:00
```
2025-09-15T01:06:24.1707440Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2025-09-15T01:06:24.1711882Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2025-09-15T01:06:24.1736082Z   
2025-09-15T01:06:24.1737015Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-09-15T01:06:24.1737861Z         
2025-09-15T01:06:24.1738328Z         Error: Error in create
2025-09-15T01:06:24.1738768Z         
2025-09-15T01:06:24.1739428Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-15T01:06:24.1740846Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-15T01:06:24.1742296Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-15T01:06:24.1742926Z         
2025-09-15T01:06:24.1743673Z         cluster name: test-acc-tf-c-3101560013278339156, API error details:
2025-09-15T01:06:24.1744890Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c75e448418093dd1b083b1/clusters
2025-09-15T01:06:24.1746001Z         POST: HTTP 403 Forbidden (Error code:
2025-09-15T01:06:24.1746909Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-09-15T01:06:24.1747978Z         Configuration. Contains selections that are unavailable due to your
2025-09-15T01:06:24.1749036Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-09-15T01:06:24.1749767Z         BadRequestDetail: 
2025-09-15T01:06:24.1750364Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (0.77s)
```

  - PASS 18 minutes
  - PASS 16 minutes
- 2025-09-16 PASS 24 minutes
- 2025-09-17

### Error 2025-09-17T01:10:16+00:00
```
2025-09-17T01:10:16.3783667Z === RUN   TestAccCloudBackupSnapshotRestoreJob_basic
2025-09-17T01:10:16.3787999Z === CONT  TestAccCloudBackupSnapshotRestoreJob_basic
2025-09-17T01:10:16.3812071Z   
2025-09-17T01:10:16.3813203Z     resource_cloud_backup_snapshot_restore_job_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-09-17T01:10:16.3814054Z         
2025-09-17T01:10:16.3814511Z         Error: Error in create
2025-09-17T01:10:16.3815141Z         
2025-09-17T01:10:16.3815800Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-17T01:10:16.3817062Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-17T01:10:16.3818410Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-17T01:10:16.3818984Z         
2025-09-17T01:10:16.3819722Z         cluster name: test-acc-tf-c-4927545265555703115, API error details:
2025-09-17T01:10:16.3820927Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ca00d769d8c04598b6e6e7/clusters
2025-09-17T01:10:16.3821871Z         POST: HTTP 403 Forbidden (Error code:
2025-09-17T01:10:16.3822791Z         "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Detail: Invalid
2025-09-17T01:10:16.3823898Z         Configuration. Contains selections that are unavailable due to your
2025-09-17T01:10:16.3825156Z         organization's resource policies. Reason: Forbidden. Params: [],
2025-09-17T01:10:16.3825899Z         BadRequestDetail: 
2025-09-17T01:10:16.3826492Z --- FAIL: TestAccCloudBackupSnapshotRestoreJob_basic (0.82s)
```

- 2025-09-18 PASS 26 minutes
- 2025-09-19 PASS 22 minutes
- 2025-09-20 PASS 21 minutes
- 2025-09-21 PASS 19 minutes
- 2025-09-22 PASS 20 minutes
- 2025-09-23 PASS 21 minutes
- 2025-09-24 PASS 20 minutes
- 2025-09-25 PASS 22 minutes
- 2025-09-26 PASS 22 minutes
- 2025-09-27 PASS 22 minutes
- 2025-09-28 PASS 24 minutes
- 2025-09-29
  - PASS 21 minutes
  - PASS 17 minutes
- 2025-09-30
  - PASS 22 minutes
  - PASS 21 minutes
  - PASS 19 minutes
- 2025-10-01
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS an hour
  - PASS 19 minutes
  - PASS 22 minutes
  - PASS 18 minutes
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 25 minutes