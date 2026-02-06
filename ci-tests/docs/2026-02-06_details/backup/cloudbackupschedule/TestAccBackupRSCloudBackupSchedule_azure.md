# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_azure Test Details
# Found 32 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-29 00:58](#error-2026-01-29t0058260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697aab81364effe4d2b98b88/clusters | dev | out_of_capacity | 6.01s
[2026-01-31 03:36](#error-2026-01-31t0336470000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d4e3f7d00588dcf9eccf6/clusters | dev | out_of_capacity | 11.00s
[2026-02-03 00:40](#error-2026-02-03t0040220000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/clusters | dev | out_of_capacity | 10.09s
[2026-02-05 02:50](#error-2026-02-05t0250200000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6983e69a304923ebd185245d/clusters | dev | out_of_capacity | 11.01s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
- 2026-01-09 PASS 17 minutes
- 2026-01-10 PASS 13 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 15 minutes
- 2026-01-13 PASS 23 minutes
- 2026-01-14 PASS 14 minutes
- 2026-01-15 PASS 19 minutes
- 2026-01-16 PASS 15 minutes
- 2026-01-17 PASS 12 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 12 minutes
- 2026-01-20 PASS 17 minutes
- 2026-01-21 PASS 14 minutes
- 2026-01-22 PASS 16 minutes
- 2026-01-23 PASS 14 minutes
- 2026-01-24 PASS 13 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 12 minutes
- 2026-01-27 PASS 14 minutes
- 2026-01-28 PASS 13 minutes
- 2026-01-29

### Error 2026-01-29T00:58:26+00:00
```
2026-01-29T00:58:26.1326575Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-01-29T00:58:26.1329053Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-01-29T00:58:26.1330541Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-01-29T00:58:26.1331688Z     pre_check.go:46: Time before creating cluster: 2026-01-29T00:36:25.369835674Z, ProjectID: 697aab81364effe4d2b98b88, Cluster name: test-acc-tf-c-653238578964086914
2026-01-29T00:58:26.1349227Z    test_name=TestAccBackupRSCloudBackupSchedule_azure test_terraform_path=/home/runner/work/_temp/99c629c5-7a15-431b-8234-de2d9e93fe2a/terraform
2026-01-29T00:58:26.1350333Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2026-01-29T00:58:26.1350954Z         
2026-01-29T00:58:26.1351271Z         Error: Error in create
2026-01-29T00:58:26.1351622Z         
2026-01-29T00:58:26.1352308Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-29T00:58:26.1353252Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-29T00:58:26.1353973Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-29T00:58:26.1354342Z         
2026-01-29T00:58:26.1354964Z         cluster name: test-acc-tf-c-653238578964086914, API error details:
2026-01-29T00:58:26.1355676Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697aab81364effe4d2b98b88/clusters
2026-01-29T00:58:26.1356542Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-29T00:58:26.1357354Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-29T00:58:26.1358028Z         Conflict. Params: [], BadRequestDetail: 
2026-01-29T00:58:26.1358508Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (6.15s)
```

- 2026-01-30 PASS 25 minutes
- 2026-01-31

### Error 2026-01-31T03:36:47+00:00
```
2026-01-31T03:36:47.6487974Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-01-31T03:36:47.6491397Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-01-31T03:36:47.6498263Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-01-31T03:36:47.6500039Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:35:24.889312804Z, ProjectID: 697d4e3f7d00588dcf9eccf6, Cluster name: test-acc-tf-c-1494813214590450578
2026-01-31T03:36:47.6519165Z   
2026-01-31T03:36:47.6519668Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:36:47.6520149Z         
2026-01-31T03:36:47.6520410Z         Error: Error in create
2026-01-31T03:36:47.6520674Z         
2026-01-31T03:36:47.6521053Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-31T03:36:47.6521803Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-31T03:36:47.6522503Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-31T03:36:47.6523160Z         
2026-01-31T03:36:47.6523611Z         cluster name: test-acc-tf-c-1494813214590450578, API error details:
2026-01-31T03:36:47.6524326Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e3f7d00588dcf9eccf6/clusters
2026-01-31T03:36:47.6525046Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T03:36:47.6525740Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T03:36:47.6526278Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T03:36:47.6526679Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (11.03s)
```

- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:40:22+00:00
```
2026-02-03T00:40:22.9658472Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-02-03T00:40:22.9660605Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-02-03T00:40:22.9688314Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-02-03T00:40:22.9689224Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:39:30.187714017Z, ProjectID: 698143b5e3c7fce2317dd5f6, Cluster name: test-acc-tf-c-312247449165373730
2026-02-03T00:40:22.9702757Z    test_working_directory=/tmp/plugintest1287115701 test_name=TestAccBackupRSCloudBackupSchedule_azure
2026-02-03T00:40:22.9703561Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:40:22.9704028Z         
2026-02-03T00:40:22.9704290Z         Error: Error in create
2026-02-03T00:40:22.9704770Z         
2026-02-03T00:40:22.9705154Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-03T00:40:22.9705898Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-03T00:40:22.9755027Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-03T00:40:22.9755457Z         
2026-02-03T00:40:22.9755922Z         cluster name: test-acc-tf-c-312247449165373730, API error details:
2026-02-03T00:40:22.9756651Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b5e3c7fce2317dd5f6/clusters
2026-02-03T00:40:22.9757376Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:40:22.9758063Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:40:22.9758591Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:40:22.9759000Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (10.87s)
```

- 2026-02-04 PASS 28 minutes
- 2026-02-05

### Error 2026-02-05T02:50:20+00:00
```
2026-02-05T02:50:20.2355778Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-02-05T02:50:20.2358850Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-02-05T02:50:20.2365174Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-02-05T02:50:20.2366804Z     pre_check.go:46: Time before creating cluster: 2026-02-05T00:39:02.561038701Z, ProjectID: 6983e69a304923ebd185245d, Cluster name: test-acc-tf-c-2373532110598912219
2026-02-05T02:50:20.2391377Z    test_working_directory=/tmp/plugintest2228696035 test_name=TestAccBackupRSCloudBackupSchedule_azure
2026-02-05T02:50:20.2392853Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2026-02-05T02:50:20.2393696Z         
2026-02-05T02:50:20.2394171Z         Error: Error in create
2026-02-05T02:50:20.2394633Z         
2026-02-05T02:50:20.2395322Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-02-05T02:50:20.2396684Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-02-05T02:50:20.2397978Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-02-05T02:50:20.2398628Z         
2026-02-05T02:50:20.2399422Z         cluster name: test-acc-tf-c-2373532110598912219, API error details:
2026-02-05T02:50:20.2400864Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e69a304923ebd185245d/clusters
2026-02-05T02:50:20.2402162Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-05T02:50:20.2403400Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-05T02:50:20.2404349Z         Conflict. Params: [], BadRequestDetail: 
2026-02-05T02:50:20.2405077Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (11.08s)
```

- 2026-02-06 PASS 16 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 11 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 14 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 10 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 11 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 12 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 14 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 11 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
