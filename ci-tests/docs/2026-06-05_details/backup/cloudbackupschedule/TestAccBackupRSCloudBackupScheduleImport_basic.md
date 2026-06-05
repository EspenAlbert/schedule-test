# backup/cloudbackupschedule/TestAccBackupRSCloudBackupScheduleImport_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.08s
[2026-05-28 01:00](#error-2026-05-28t0100340000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.09s
[2026-05-30 01:08](#error-2026-05-30t0108310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 25 minutes
- 2026-05-08 PASS 15 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1045499Z === RUN   TestAccBackupRSCloudBackupScheduleImport_basic
2026-05-09T01:25:50.1046248Z     resource_cloud_backup_schedule_test.go:374: Creating execution project (1): test-acc-tf-p-4280105301116262840
2026-05-09T01:25:50.1046885Z     resource_cloud_backup_schedule_test.go:374: 
2026-05-09T01:25:50.1047873Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1049750Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1051614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1053685Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.1056123Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:374
2026-05-09T01:25:50.1057493Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:25:50.1058014Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1059991Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1061301Z         	Test:       	TestAccBackupRSCloudBackupScheduleImport_basic
2026-05-09T01:25:50.1063170Z         	Messages:   	Project creation failed: test-acc-tf-p-4280105301116262840, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1064730Z --- FAIL: TestAccBackupRSCloudBackupScheduleImport_basic (75.75s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 20 minutes
- 2026-05-12 PASS 18 minutes
- 2026-05-13 PASS 20 minutes
- 2026-05-14 PASS 38 minutes
- 2026-05-15 PASS 14 minutes
- 2026-05-16 PASS 15 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 22 minutes
- 2026-05-19 PASS 16 minutes
- 2026-05-20 PASS 18 minutes
- 2026-05-21 PASS 23 minutes
- 2026-05-22 PASS 30 minutes
- 2026-05-23 PASS 17 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 16 minutes
- 2026-05-26 PASS 18 minutes
- 2026-05-27 PASS 47 minutes
- 2026-05-28

### Error 2026-05-28T01:00:34+00:00
```
2026-05-28T01:00:34.9169760Z === RUN   TestAccBackupRSCloudBackupScheduleImport_basic
2026-05-28T01:00:34.9170505Z     resource_cloud_backup_schedule_test.go:374: Creating execution project (1): test-acc-tf-p-6722089650996246236
2026-05-28T01:00:34.9171367Z     resource_cloud_backup_schedule_test.go:374: 
2026-05-28T01:00:34.9172368Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:34.9174218Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:34.9176071Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:34.9177835Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:00:34.9179985Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:374
2026-05-28T01:00:34.9181568Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:34.9182110Z         	Error:      	Received unexpected error:
2026-05-28T01:00:34.9185001Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:00:34.9186628Z         	Test:       	TestAccBackupRSCloudBackupScheduleImport_basic
2026-05-28T01:00:34.9189076Z         	Messages:   	Project creation failed: test-acc-tf-p-6722089650996246236, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:00:34.9190692Z --- FAIL: TestAccBackupRSCloudBackupScheduleImport_basic (0.91s)
```

- 2026-05-29 PASS 17 minutes
- 2026-05-30

### Error 2026-05-30T01:08:31+00:00
```
2026-05-30T01:08:31.4347089Z === RUN   TestAccBackupRSCloudBackupScheduleImport_basic
2026-05-30T01:08:31.4347845Z     resource_cloud_backup_schedule_test.go:374: Creating execution project (1): test-acc-tf-p-5055031563291159188
2026-05-30T01:08:31.4348497Z     resource_cloud_backup_schedule_test.go:374: 
2026-05-30T01:08:31.4349503Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:31.4351368Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:31.4353472Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:31.4355278Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:08:31.4357434Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:374
2026-05-30T01:08:31.4358786Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:08:31.4359336Z         	Error:      	Received unexpected error:
2026-05-30T01:08:31.4361350Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4362632Z         	Test:       	TestAccBackupRSCloudBackupScheduleImport_basic
2026-05-30T01:08:31.4364689Z         	Messages:   	Project creation failed: test-acc-tf-p-5055031563291159188, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4365970Z --- FAIL: TestAccBackupRSCloudBackupScheduleImport_basic (65.72s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 21 minutes
- 2026-06-02 PASS 15 minutes
- 2026-06-03 PASS 22 minutes
- 2026-06-04 PASS 44 minutes
- 2026-06-05 PASS 14 minutes

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
- 2026-05-24 PASS 17 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 16 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
