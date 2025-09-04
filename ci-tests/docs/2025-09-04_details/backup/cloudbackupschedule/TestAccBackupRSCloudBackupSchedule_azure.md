# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_azure Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-08 03:31](#error-2025-08-08t0331290000) |  | dev | timeout | 10815.09s
[2025-08-09 00:54](#error-2025-08-09t0054320000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68969627da77bc53076fc8d7/clusters | dev | out_of_capacity | 30.07s
[2025-08-12 00:59](#error-2025-08-12t0059460000) | OUT_OF_CAPACITY /api/atlas/v2/groups/689a8a9cb7927105c20c6a23/clusters | dev | out_of_capacity | 25.07s
[2025-09-01 03:31](#error-2025-09-01t0331330000) |  | dev | timeout | 10815.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 13 minutes
- 2025-08-07 PASS 23 minutes
- 2025-08-08

### Error 2025-08-08T03:31:29+00:00
```
2025-08-08T03:31:29.4124989Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2025-08-08T03:31:29.4129866Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2025-08-08T03:31:29.4135487Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2025-08-08T03:31:29.4137230Z     pre_check.go:40: Time before creating cluster: 2025-08-08T00:30:58.329227629Z, ProjectID: 689545307ffcc5766e44afd6, Cluster name: test-acc-tf-c-4296705561193665764
2025-08-08T03:31:29.4181404Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2025-08-08T03:31:29.4182453Z     resource_cloud_backup_schedule_test.go:495: Step 1/3 error: Error running apply: exit status 1
2025-08-08T03:31:29.4183215Z         
2025-08-08T03:31:29.4184517Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-08T03:31:29.4185473Z         
2025-08-08T03:31:29.4186320Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-08-08T03:31:29.4187620Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-08T03:31:29.4189015Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-08T03:31:29.4189592Z         
2025-08-08T03:31:29.4190074Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (10815.88s)
```

- 2025-08-09

### Error 2025-08-09T00:54:32+00:00
```
2025-08-09T00:54:32.4628027Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2025-08-09T00:54:32.4631834Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2025-08-09T00:54:32.4652195Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2025-08-09T00:54:32.4653753Z     pre_check.go:40: Time before creating cluster: 2025-08-09T00:28:55.568079515Z, ProjectID: 68969627da77bc53076fc8d7, Cluster name: test-acc-tf-c-2333616976513348595
2025-08-09T00:54:32.4675606Z    test_step_number=1
2025-08-09T00:54:32.4676528Z     resource_cloud_backup_schedule_test.go:486: Step 1/3 error: Error running apply: exit status 1
2025-08-09T00:54:32.4677264Z         
2025-08-09T00:54:32.4680279Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68969627da77bc53076fc8d7/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2025-08-09T00:54:32.4682467Z         
2025-08-09T00:54:32.4683076Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-08-09T00:54:32.4684293Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-09T00:54:32.4685482Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-09T00:54:32.4686063Z         
2025-08-09T00:54:32.4686535Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (30.68s)
```

- 2025-08-10 PASS 24 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - FAIL 25 seconds

### Error 2025-08-12T00:59:46+00:00
```
2025-08-12T00:59:46.7191376Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2025-08-12T00:59:46.7195035Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2025-08-12T00:59:46.7201288Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2025-08-12T00:59:46.7202347Z     pre_check.go:40: Time before creating cluster: 2025-08-12T00:28:39.231639667Z, ProjectID: 689a8a9cb7927105c20c6a23, Cluster name: test-acc-tf-c-3233213308378456884
2025-08-12T00:59:46.7213774Z    test_step_number=1 test_working_directory=/tmp/plugintest2327526773 test_name=TestAccBackupRSCloudBackupSchedule_azure test_terraform_path=/home/runner/work/_temp/ad662bb2-a70b-45a2-89a0-0849f221195f/terraform
2025-08-12T00:59:46.7214891Z     resource_cloud_backup_schedule_test.go:486: Step 1/3 error: Error running apply: exit status 1
2025-08-12T00:59:46.7215482Z         
2025-08-12T00:59:46.7217153Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/689a8a9cb7927105c20c6a23/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2025-08-12T00:59:46.7218307Z         
2025-08-12T00:59:46.7218664Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-08-12T00:59:46.7219367Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-08-12T00:59:46.7220021Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-08-12T00:59:46.7220359Z         
2025-08-12T00:59:46.7220654Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (25.66s)
```

  - PASS 11 minutes
- 2025-08-13 PASS 18 minutes
- 2025-08-14 PASS 18 minutes
- 2025-08-15 PASS 11 minutes
- 2025-08-16 PASS 41 minutes
- 2025-08-17 PASS 28 minutes
- 2025-08-18 PASS 14 minutes
- 2025-08-19 PASS 16 minutes
- 2025-08-20
  - PASS 13 minutes
  - PASS 18 minutes
- 2025-08-21 PASS 19 minutes
- 2025-08-22 PASS 11 minutes
- 2025-08-23 PASS 21 minutes
- 2025-08-24 PASS 11 minutes
- 2025-08-25 PASS 26 minutes
- 2025-08-26 PASS 23 minutes
- 2025-08-27 PASS 23 minutes
- 2025-08-28 PASS 18 minutes
- 2025-08-29 PASS 31 minutes
- 2025-08-30 PASS 16 minutes
- 2025-08-31 PASS 22 minutes
- 2025-09-01
  - FAIL 3 hours

### Error 2025-09-01T03:31:33+00:00
```
2025-09-01T03:31:33.2911196Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2025-09-01T03:31:33.2913066Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2025-09-01T03:31:33.2917404Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2025-09-01T03:31:33.2918224Z     pre_check.go:40: Time before creating cluster: 2025-09-01T00:30:29.80112738Z, ProjectID: 68b4e91546ef690a79d6bd03, Cluster name: test-acc-tf-c-2035670645970938575
2025-09-01T03:31:33.2971593Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2025-09-01T03:31:33.2972185Z     resource_cloud_backup_schedule_test.go:486: Step 1/3 error: Error running apply: exit status 1
2025-09-01T03:31:33.2972624Z         
2025-09-01T03:31:33.2973343Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-01T03:31:33.2973885Z         
2025-09-01T03:31:33.2974249Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-01T03:31:33.2974944Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-01T03:31:33.2975604Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-01T03:31:33.2975938Z         
2025-09-01T03:31:33.2976227Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (10815.93s)
```

  - PASS an hour
  - PASS an hour
  - PASS 15 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 17 minutes
  - PASS 14 minutes
- 2025-09-02 PASS 14 minutes
- 2025-09-03 PASS 22 minutes
- 2025-09-04 PASS 11 minutes