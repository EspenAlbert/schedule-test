# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_azure Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 118.06s
[2026-05-28 01:00](#error-2026-05-28t0100340000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s
[2026-05-30 01:08](#error-2026-05-30t0108310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.03s
[2026-06-01 01:30](#error-2026-06-01t0130000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a1cdba6c1e670c9e62d526c/clusters | dev | out_of_capacity | 11.03s
[2026-06-05 01:24](#error-2026-06-05t0124510000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a2220d542e1e504cd7a7f23/clusters | dev | out_of_capacity | 6.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 19 minutes
- 2026-05-08 PASS 17 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1065189Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-05-09T01:25:50.1065895Z     resource_cloud_backup_schedule_test.go:429: Creating execution project (1): test-acc-tf-p-5810705159726720
2026-05-09T01:25:50.1066521Z     resource_cloud_backup_schedule_test.go:429: 
2026-05-09T01:25:50.1067504Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1069366Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1071237Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1073016Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.1075547Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:429
2026-05-09T01:25:50.1076912Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:25:50.1077435Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1079405Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1080519Z         	Test:       	TestAccBackupRSCloudBackupSchedule_azure
2026-05-09T01:25:50.1082345Z         	Messages:   	Project creation failed: test-acc-tf-p-5810705159726720, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1083610Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (118.63s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 15 minutes
- 2026-05-12 PASS 17 minutes
- 2026-05-13 PASS 15 minutes
- 2026-05-14 PASS 44 minutes
- 2026-05-15 PASS 14 minutes
- 2026-05-16 PASS 14 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 22 minutes
- 2026-05-19 PASS 13 minutes
- 2026-05-20 PASS 14 minutes
- 2026-05-21 PASS 23 minutes
- 2026-05-22 PASS 17 minutes
- 2026-05-23 PASS 13 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 15 minutes
- 2026-05-26 PASS 14 minutes
- 2026-05-27 PASS 47 minutes
- 2026-05-28

### Error 2026-05-28T01:00:34+00:00
```
2026-05-28T01:00:34.9191421Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-05-28T01:00:34.9192149Z     resource_cloud_backup_schedule_test.go:429: Creating execution project (1): test-acc-tf-p-978472979740608428
2026-05-28T01:00:34.9192792Z     resource_cloud_backup_schedule_test.go:429: 
2026-05-28T01:00:34.9193909Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:34.9195803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:34.9197654Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:34.9199422Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:00:34.9201834Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:429
2026-05-28T01:00:34.9203190Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:34.9203730Z         	Error:      	Received unexpected error:
2026-05-28T01:00:34.9206624Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:00:34.9208079Z         	Test:       	TestAccBackupRSCloudBackupSchedule_azure
2026-05-28T01:00:34.9210491Z         	Messages:   	Project creation failed: test-acc-tf-p-978472979740608428, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:00:34.9212306Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (1.03s)
```

- 2026-05-29 PASS 13 minutes
- 2026-05-30

### Error 2026-05-30T01:08:31+00:00
```
2026-05-30T01:08:31.4366448Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-05-30T01:08:31.4367184Z     resource_cloud_backup_schedule_test.go:429: Creating execution project (1): test-acc-tf-p-4218486309494777058
2026-05-30T01:08:31.4367835Z     resource_cloud_backup_schedule_test.go:429: 
2026-05-30T01:08:31.4368831Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:31.4370691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:31.4372650Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:31.4374667Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:08:31.4376815Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:429
2026-05-30T01:08:31.4378161Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:08:31.4378704Z         	Error:      	Received unexpected error:
2026-05-30T01:08:31.4380712Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4381826Z         	Test:       	TestAccBackupRSCloudBackupSchedule_azure
2026-05-30T01:08:31.4383952Z         	Messages:   	Project creation failed: test-acc-tf-p-4218486309494777058, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4385221Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (69.29s)
```

- 2026-05-31: MISSING
- 2026-06-01

### Error 2026-06-01T01:30:00+00:00
```
2026-06-01T01:30:00.9339577Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-06-01T01:30:00.9342152Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-06-01T01:30:00.9348403Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-06-01T01:30:00.9350029Z     pre_check.go:46: Time before creating cluster: 2026-06-01T01:09:07.161469512Z, ProjectID: 6a1cdba6c1e670c9e62d526c, Cluster name: test-acc-tf-c-5360044446675908225
2026-06-01T01:30:00.9381919Z   
2026-06-01T01:30:00.9382531Z     resource_cloud_backup_schedule_test.go:432: Step 1/3 error: Error running apply: exit status 1
2026-06-01T01:30:00.9383184Z         
2026-06-01T01:30:00.9383490Z         Error: Error in create
2026-06-01T01:30:00.9383781Z         
2026-06-01T01:30:00.9384292Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-06-01T01:30:00.9385133Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-06-01T01:30:00.9386035Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-06-01T01:30:00.9386509Z         
2026-06-01T01:30:00.9387072Z         cluster name: test-acc-tf-c-5360044446675908225, API error details:
2026-06-01T01:30:00.9388058Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1cdba6c1e670c9e62d526c/clusters
2026-06-01T01:30:00.9389156Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-06-01T01:30:00.9389912Z         region is currently out of capacity for the requested instance size. Reason:
2026-06-01T01:30:00.9390879Z         Conflict. Params: [], BadRequestDetail: 
2026-06-01T01:30:00.9391323Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (11.30s)
```

- 2026-06-02 PASS 14 minutes
- 2026-06-03 PASS 21 minutes
- 2026-06-04 PASS 48 minutes
- 2026-06-05

### Error 2026-06-05T01:24:51+00:00
```
2026-06-05T01:24:51.5376584Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-06-05T01:24:51.5380724Z === CONT  TestAccBackupRSCloudBackupSchedule_azure
2026-06-05T01:24:51.5386154Z === NAME  TestAccBackupRSCloudBackupSchedule_azure
2026-06-05T01:24:51.5387797Z     pre_check.go:46: Time before creating cluster: 2026-06-05T01:05:32.834425545Z, ProjectID: 6a2220d542e1e504cd7a7f23, Cluster name: test-acc-tf-c-651275850170988822
2026-06-05T01:24:51.5403142Z   
2026-06-05T01:24:51.5403704Z     resource_cloud_backup_schedule_test.go:432: Step 1/3 error: Error running apply: exit status 1
2026-06-05T01:24:51.5404432Z         
2026-06-05T01:24:51.5404747Z         Error: Error in create
2026-06-05T01:24:51.5405057Z         
2026-06-05T01:24:51.5405482Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-06-05T01:24:51.5406283Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-06-05T01:24:51.5407041Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-06-05T01:24:51.5407494Z         
2026-06-05T01:24:51.5408033Z         cluster name: test-acc-tf-c-651275850170988822, API error details:
2026-06-05T01:24:51.5408900Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220d542e1e504cd7a7f23/clusters
2026-06-05T01:24:51.5409779Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-06-05T01:24:51.5410634Z         region is currently out of capacity for the requested instance size. Reason:
2026-06-05T01:24:51.5411323Z         Conflict. Params: [], BadRequestDetail: 
2026-06-05T01:24:51.5411869Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (6.44s)
```


## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 18 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 17 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 15 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 18 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
