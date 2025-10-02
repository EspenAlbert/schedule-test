# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_azure Test Details
# Found 44 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL(x 3)
Success rate: 93.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-11 00:46](#error-2025-09-11t0046290000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68c217554e35e91a1b2b2615/clusters | dev | out_of_capacity | 15.06s
[2025-09-15 05:52](#error-2025-09-15t0552100000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68c7a64ef3fa172369815243/clusters | dev | out_of_capacity | 15.07s
[2025-09-15 09:21](#error-2025-09-15t0921250000) |  | qa |  | 10810.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 22 minutes
- 2025-09-04 PASS 11 minutes
- 2025-09-05 PASS 11 minutes
- 2025-09-06 PASS 16 minutes
- 2025-09-07 PASS 13 minutes
- 2025-09-08
  - PASS 17 minutes
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-09-09 PASS 12 minutes
- 2025-09-10 PASS 16 minutes
- 2025-09-11

### Error 2025-09-11T00:46:29+00:00
```
2025-09-11T00:46:29.4224479Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2025-09-11T00:46:29.4227228Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2025-09-11T00:46:29.4232130Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2025-09-11T00:46:29.4233499Z     pre_check.go:32: Time before creating cluster: 2025-09-11T00:27:21.201758552Z, ProjectID: 68c217554e35e91a1b2b2615, Cluster name: test-acc-tf-c-5870843249883760893
2025-09-11T00:46:29.4249527Z    test_name=TestAccBackupRSCloudBackupSchedule_azure test_terraform_path=/home/runner/work/_temp/1dca4bee-b8c6-4186-9bcf-dceeb06b1c2a/terraform test_working_directory=/tmp/plugintest4052007670 test_step_number=1
2025-09-11T00:46:29.4251430Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2025-09-11T00:46:29.4251972Z         
2025-09-11T00:46:29.4252244Z         Error: Error in create
2025-09-11T00:46:29.4252512Z         
2025-09-11T00:46:29.4252992Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-11T00:46:29.4253828Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-11T00:46:29.4254715Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-11T00:46:29.4255176Z         
2025-09-11T00:46:29.4255704Z         cluster name: test-acc-tf-c-5870843249883760893, API error details:
2025-09-11T00:46:29.4256594Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c217554e35e91a1b2b2615/clusters
2025-09-11T00:46:29.4257546Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-09-11T00:46:29.4258406Z         region is currently out of capacity for the requested instance size. Reason:
2025-09-11T00:46:29.4259054Z         Conflict. Params: [], BadRequestDetail: 
2025-09-11T00:46:29.4259450Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (15.58s)
```

- 2025-09-12 PASS 12 minutes
- 2025-09-13 PASS 18 minutes
- 2025-09-14 PASS 23 minutes
- 2025-09-15
  - PASS 15 minutes
  - FAIL 15 seconds

### Error 2025-09-15T05:52:10+00:00
```
2025-09-15T05:52:10.2131922Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2025-09-15T05:52:10.2135304Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2025-09-15T05:52:10.2142850Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2025-09-15T05:52:10.2144009Z     pre_check.go:32: Time before creating cluster: 2025-09-15T05:38:39.727221689Z, ProjectID: 68c7a64ef3fa172369815243, Cluster name: test-acc-tf-c-4240807129626798973
2025-09-15T05:52:10.2160149Z    test_step_number=1
2025-09-15T05:52:10.2160768Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2025-09-15T05:52:10.2161213Z         
2025-09-15T05:52:10.2161565Z         Error: Error in create
2025-09-15T05:52:10.2161864Z         
2025-09-15T05:52:10.2162257Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-15T05:52:10.2163230Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-15T05:52:10.2164021Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-15T05:52:10.2164404Z         
2025-09-15T05:52:10.2164926Z         cluster name: test-acc-tf-c-4240807129626798973, API error details:
2025-09-15T05:52:10.2165708Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c7a64ef3fa172369815243/clusters
2025-09-15T05:52:10.2166523Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-09-15T05:52:10.2167296Z         region is currently out of capacity for the requested instance size. Reason:
2025-09-15T05:52:10.2167820Z         Conflict. Params: [], BadRequestDetail: 
2025-09-15T05:52:10.2168303Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (15.67s)
```

  - FAIL 3 hours

### Error 2025-09-15T09:21:25+00:00
```
2025-09-15T09:21:25.2853073Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2025-09-15T09:21:25.2856322Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2025-09-15T09:21:25.2862659Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2025-09-15T09:21:25.2864161Z     pre_check.go:32: Time before creating cluster: 2025-09-15T06:20:53.985972918Z, ProjectID: 68c7b039fe60767b7f9aecf4, Cluster name: test-acc-tf-c-5692883252740547589
2025-09-15T09:21:25.2905054Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2025-09-15T09:21:25.2906128Z     resource_cloud_backup_schedule_test.go:410: Step 1/3 error: Error running apply: exit status 1
2025-09-15T09:21:25.2906877Z         
2025-09-15T09:21:25.2907322Z         Error: Error in create
2025-09-15T09:21:25.2907737Z         
2025-09-15T09:21:25.2908373Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-15T09:21:25.2909799Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-15T09:21:25.2910977Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-15T09:21:25.2911569Z         
2025-09-15T09:21:25.2912390Z         cluster=test-acc-tf-c-5692883252740547589 didn't reach desired state: IDLE,
2025-09-15T09:21:25.2913224Z         error: context deadline exceeded
2025-09-15T09:21:25.2913869Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (10810.89s)
```

- 2025-09-16 PASS 17 minutes
- 2025-09-17 PASS 12 minutes
- 2025-09-18 PASS 20 minutes
- 2025-09-19 PASS 14 minutes
- 2025-09-20 PASS 16 minutes
- 2025-09-21 PASS 14 minutes
- 2025-09-22 PASS 13 minutes
- 2025-09-23 PASS 13 minutes
- 2025-09-24 PASS 14 minutes
- 2025-09-25 PASS 14 minutes
- 2025-09-26 PASS 17 minutes
- 2025-09-27 PASS 14 minutes
- 2025-09-28 PASS 12 minutes
- 2025-09-29
  - PASS 13 minutes
  - PASS 11 minutes
- 2025-09-30
  - PASS 13 minutes
  - PASS 18 minutes
  - PASS 11 minutes
- 2025-10-01
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 15 minutes
  - PASS 11 minutes
- 2025-10-02 PASS 12 minutes