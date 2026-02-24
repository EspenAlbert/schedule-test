# backup/cloudbackupsnapshotexportjob/TestAccBackupSnapshotExportJob_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 03:36](#error-2026-01-31t0336470000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/697d4e407d00588dcf9edacc/cloudProviderAccess/697d4e4e7d00588dcf9f81f3 | dev | flaky_500 | 10822.08s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/698143b6b2e54ee995902b03/cloudProviderAccess/698143c1e3c7fce2317e563b | dev | out_of_capacity | 33.08s
[2026-02-24 01:20](#error-2026-02-24t0120270000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/699cf2a3ae2412ce62115a79/cloudProviderAccess/699cf2afae2412ce6211e79f | dev | flaky_500 | 1179.09s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 16 minutes
- 2026-01-27 PASS 25 minutes
- 2026-01-28 PASS 21 minutes
- 2026-01-29 PASS 25 minutes
- 2026-01-30 PASS 26 minutes
- 2026-01-31

### Error 2026-01-31T03:36:47+00:00
```
2026-01-31T03:36:47.6721769Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-01-31T03:36:47.6722500Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-3404751610064702949
2026-01-31T03:36:47.6724831Z 2026/01/31 00:35:27 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e407d00588dcf9edacc/cloudProviderAccess/697d4e4e7d00588dcf9f81f3 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2976193046421769499). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2976193046421769499], BadRequestDetail:  
2026-01-31T03:36:47.6726665Z 2026/01/31 00:35:27 retrying
2026-01-31T03:36:47.6735512Z    test_name=TestAccBackupSnapshotExportJob_basic test_terraform_path=/home/runner/work/_temp/3033667c-f882-4c6a-a87f-335c44830a1c/terraform test_working_directory=/tmp/plugintest4235408125 test_step_number=1
2026-01-31T03:36:47.6736725Z     resource_cloud_backup_snapshot_export_job_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:36:47.6737220Z         
2026-01-31T03:36:47.6737482Z         Error: Error in create
2026-01-31T03:36:47.6737735Z         
2026-01-31T03:36:47.6738115Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:47.6738865Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:47.6739709Z           17: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:47.6740067Z         
2026-01-31T03:36:47.6740548Z         cluster=test-acc-tf-c-6720131869599047187 didn't reach desired state: IDLE,
2026-01-31T03:36:47.6741047Z         error: context deadline exceeded
2026-01-31T03:36:47.6741419Z --- FAIL: TestAccBackupSnapshotExportJob_basic (10822.78s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9959244Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-02-03T00:40:22.9959966Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-2289088875445620831
2026-02-03T00:40:22.9967233Z 2026/02/03 00:39:31 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b6b2e54ee995902b03/cloudProviderAccess/698143c1e3c7fce2317e563b PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1193181443044491570). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-1193181443044491570], BadRequestDetail:  
2026-02-03T00:40:22.9969159Z 2026/02/03 00:39:31 retrying
2026-02-03T00:40:22.9977232Z   
2026-02-03T00:40:22.9977803Z     resource_cloud_backup_snapshot_export_job_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:22.9978301Z         
2026-02-03T00:40:22.9978566Z         Error: Error in create
2026-02-03T00:40:22.9978831Z         
2026-02-03T00:40:22.9979211Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:22.9979962Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:22.9980674Z           17: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:22.9981042Z         
2026-02-03T00:40:22.9981481Z         cluster name: test-acc-tf-c-5789347703338537660, API error details:
2026-02-03T00:40:22.9982184Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b6b2e54ee995902b03/clusters
2026-02-03T00:40:22.9982896Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:22.9983580Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:22.9984102Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:22.9984584Z --- FAIL: TestAccBackupSnapshotExportJob_basic (33.81s)
```

- 2026-02-04 PASS 21 minutes
- 2026-02-05 PASS 28 minutes
- 2026-02-06 PASS 22 minutes
- 2026-02-07 PASS 21 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 21 minutes
- 2026-02-10 PASS 24 minutes
- 2026-02-11 PASS 22 minutes
- 2026-02-12 PASS 23 minutes
- 2026-02-13 PASS 21 minutes
- 2026-02-14 PASS 21 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 39 minutes
- 2026-02-18 PASS 22 minutes
- 2026-02-19 PASS 37 minutes
- 2026-02-20 PASS 23 minutes
- 2026-02-21 PASS 23 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T01:20:27+00:00
```
2026-02-24T01:20:27.2778587Z === RUN   TestAccBackupSnapshotExportJob_basic
2026-02-24T01:20:27.2779867Z     resource_cloud_backup_snapshot_export_job_test.go:22: Creating execution project (1): test-acc-tf-p-5346933650452277769
2026-02-24T01:20:27.2783835Z 2026/02/24 00:37:04 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2a3ae2412ce62115a79/cloudProviderAccess/699cf2afae2412ce6211e79f PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3136396865944024748). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3136396865944024748], BadRequestDetail:  
2026-02-24T01:20:27.2787191Z 2026/02/24 00:37:04 retrying
2026-02-24T01:20:27.2803313Z    test_name=TestAccBackupSnapshotExportJob_basic
2026-02-24T01:20:27.2804499Z     resource_cloud_backup_snapshot_export_job_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:20:27.2805547Z         
2026-02-24T01:20:27.2806772Z         Error: error taking a snapshot: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:20:27.2807731Z         
2026-02-24T01:20:27.2808390Z           with mongodbatlas_cloud_backup_snapshot.test,
2026-02-24T01:20:27.2809714Z           on terraform_plugin_test.tf line 104, in resource "mongodbatlas_cloud_backup_snapshot" "test":
2026-02-24T01:20:27.2810947Z          104: resource "mongodbatlas_cloud_backup_snapshot" "test" {
2026-02-24T01:20:27.2811576Z         
2026-02-24T01:20:27.2812064Z --- FAIL: TestAccBackupSnapshotExportJob_basic (1179.89s)
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
- 2026-02-01 PASS 18 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 18 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 18 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 17 minutes
  - PASS 20 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 17 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
