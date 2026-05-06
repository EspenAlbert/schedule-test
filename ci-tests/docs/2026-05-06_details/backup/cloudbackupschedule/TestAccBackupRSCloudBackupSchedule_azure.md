# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_azure Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-08 01:02](#error-2026-04-08t0102240000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69d5a50b74e39a6641492589/clusters | dev | out_of_capacity | 11.08s
[2026-04-09 01:06](#error-2026-04-09t0106340000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69d6f4f29bb208aac6061e2a/clusters | dev | out_of_capacity | 16.00s
[2026-04-11 00:59](#error-2026-04-11t0059450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69d998fd92f7ea8dceec0a6e/clusters | dev | out_of_capacity | 10.10s
[2026-04-24 03:51](#error-2026-04-24t0351590000) |  | dev | timeout | 10811.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 40 minutes
- 2026-04-08

### Error 2026-04-08T01:02:24+00:00
```
2026-04-08T01:02:24.2353756Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-04-08T01:02:24.2355462Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-04-08T01:02:24.2361614Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-04-08T01:02:24.2362712Z     pre_check.go:46: Time before creating cluster: 2026-04-08T00:45:13.613719272Z, ProjectID: 69d5a50b74e39a6641492589, Cluster name: test-acc-tf-c-4421271771588616883
2026-04-08T01:02:24.2378607Z    test_name=TestAccBackupRSCloudBackupSchedule_azure
2026-04-08T01:02:24.2379272Z     resource_cloud_backup_schedule_test.go:432: Step 1/3 error: Error running apply: exit status 1
2026-04-08T01:02:24.2379903Z         
2026-04-08T01:02:24.2380371Z         Error: Error in create
2026-04-08T01:02:24.2380831Z         
2026-04-08T01:02:24.2381501Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-08T01:02:24.2382726Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-08T01:02:24.2383594Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-08T01:02:24.2383963Z         
2026-04-08T01:02:24.2384495Z         cluster name: test-acc-tf-c-4421271771588616883, API error details:
2026-04-08T01:02:24.2385240Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a50b74e39a6641492589/clusters
2026-04-08T01:02:24.2386076Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-08T01:02:24.2387005Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-08T01:02:24.2387748Z         Conflict. Params: [], BadRequestDetail: 
2026-04-08T01:02:24.2388294Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (11.82s)
```

- 2026-04-09

### Error 2026-04-09T01:06:34+00:00
```
2026-04-09T01:06:34.4343008Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-04-09T01:06:34.4345378Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-04-09T01:06:34.4350204Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-04-09T01:06:34.4351091Z     pre_check.go:46: Time before creating cluster: 2026-04-09T00:38:31.588718851Z, ProjectID: 69d6f4f29bb208aac6061e2a, Cluster name: test-acc-tf-c-6115620134978780229
2026-04-09T01:06:34.4365652Z   
2026-04-09T01:06:34.4366153Z     resource_cloud_backup_schedule_test.go:432: Step 1/3 error: Error running apply: exit status 1
2026-04-09T01:06:34.4366618Z         
2026-04-09T01:06:34.4366882Z         Error: Error in create
2026-04-09T01:06:34.4367138Z         
2026-04-09T01:06:34.4367521Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-09T01:06:34.4368945Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-09T01:06:34.4369702Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-09T01:06:34.4370069Z         
2026-04-09T01:06:34.4370518Z         cluster name: test-acc-tf-c-6115620134978780229, API error details:
2026-04-09T01:06:34.4371238Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f4f29bb208aac6061e2a/clusters
2026-04-09T01:06:34.4371965Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-09T01:06:34.4372648Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-09T01:06:34.4373335Z         Conflict. Params: [], BadRequestDetail: 
2026-04-09T01:06:34.4373742Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (16.03s)
```

- 2026-04-10 PASS 28 minutes
- 2026-04-11

### Error 2026-04-11T00:59:45+00:00
```
2026-04-11T00:59:45.1644471Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-04-11T00:59:45.1646524Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-04-11T00:59:45.1652633Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-04-11T00:59:45.1654015Z     pre_check.go:46: Time before creating cluster: 2026-04-11T00:43:14.159156659Z, ProjectID: 69d998fd92f7ea8dceec0a6e, Cluster name: test-acc-tf-c-7207855673424771377
2026-04-11T00:59:45.1676653Z   
2026-04-11T00:59:45.1677551Z     resource_cloud_backup_schedule_test.go:432: Step 1/3 error: Error running apply: exit status 1
2026-04-11T00:59:45.1678238Z         
2026-04-11T00:59:45.1678671Z         Error: Error in create
2026-04-11T00:59:45.1679132Z         
2026-04-11T00:59:45.1679835Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-11T00:59:45.1681234Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-11T00:59:45.1682483Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-11T00:59:45.1683022Z         
2026-04-11T00:59:45.1683784Z         cluster name: test-acc-tf-c-7207855673424771377, API error details:
2026-04-11T00:59:45.1685052Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d998fd92f7ea8dceec0a6e/clusters
2026-04-11T00:59:45.1686042Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-11T00:59:45.1687215Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-11T00:59:45.1688072Z         Conflict. Params: [], BadRequestDetail: 
2026-04-11T00:59:45.1688813Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (10.98s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 12 minutes
- 2026-04-14 PASS 14 minutes
- 2026-04-15 PASS 13 minutes
- 2026-04-16 PASS 14 minutes
- 2026-04-17 PASS 19 minutes
- 2026-04-18 PASS 16 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 12 minutes
- 2026-04-21 PASS 24 minutes
- 2026-04-22 PASS 52 minutes
- 2026-04-23 PASS 23 minutes
- 2026-04-24

### Error 2026-04-24T03:51:59+00:00
```
2026-04-24T03:51:59.9476342Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-04-24T03:51:59.9477891Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-04-24T03:51:59.9483540Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-04-24T03:51:59.9484446Z     pre_check.go:46: Time before creating cluster: 2026-04-24T00:51:27.566166941Z, ProjectID: 69eabe8390d634ef33c7a78d, Cluster name: test-acc-tf-c-5480586254324373041
2026-04-24T03:51:59.9520954Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-04-24T03:51:59.9521607Z     resource_cloud_backup_schedule_test.go:432: Step 1/3 error: Error running apply: exit status 1
2026-04-24T03:51:59.9522073Z         
2026-04-24T03:51:59.9522357Z         Error: Error in create
2026-04-24T03:51:59.9522624Z         
2026-04-24T03:51:59.9523014Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-24T03:51:59.9523894Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-24T03:51:59.9524609Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-24T03:51:59.9524965Z         
2026-04-24T03:51:59.9525733Z         cluster=test-acc-tf-c-5480586254324373041 didn't reach desired state: IDLE,
2026-04-24T03:51:59.9526228Z         error: context deadline exceeded
2026-04-24T03:51:59.9526625Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (10811.17s)
```

- 2026-04-25 PASS 16 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 19 minutes
- 2026-04-28 PASS 12 minutes
- 2026-04-29 PASS 15 minutes
- 2026-04-30 PASS 28 minutes
- 2026-05-01 PASS 14 minutes
- 2026-05-02 PASS 17 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 23 minutes
- 2026-05-05 PASS 24 minutes
- 2026-05-06 PASS 19 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 15 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 14 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 14 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 13 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 16 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 15 minutes
- 2026-05-04 PASS 13 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 21 minutes
