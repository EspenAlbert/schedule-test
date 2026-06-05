# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_copySettings_zoneId Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.05s
[2026-05-19 01:23](#error-2026-05-19t0123220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.03s
[2026-05-28 01:00](#error-2026-05-28t0100340000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-05-30 01:08](#error-2026-05-30t0108310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 29 minutes
- 2026-05-08 PASS 17 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1025988Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-05-09T01:25:50.1026747Z     resource_cloud_backup_schedule_test.go:288: Creating execution project (1): test-acc-tf-p-4397555015968204276
2026-05-09T01:25:50.1027379Z     resource_cloud_backup_schedule_test.go:288: 
2026-05-09T01:25:50.1028388Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1030247Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1032116Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1033908Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.1036315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:288
2026-05-09T01:25:50.1037678Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:25:50.1038342Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1040345Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1041528Z         	Test:       	TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-05-09T01:25:50.1043423Z         	Messages:   	Project creation failed: test-acc-tf-p-4397555015968204276, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1044986Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_zoneId (65.50s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 17 minutes
- 2026-05-12 PASS 18 minutes
- 2026-05-13 PASS 15 minutes
- 2026-05-14 PASS 39 minutes
- 2026-05-15 PASS 16 minutes
- 2026-05-16 PASS 16 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 22 minutes
- 2026-05-19

### Error 2026-05-19T01:23:22+00:00
```
2026-05-19T01:23:22.6938436Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-05-19T01:23:22.6939182Z     resource_cloud_backup_schedule_test.go:288: Creating execution project (1): test-acc-tf-p-7901092375564347886
2026-05-19T01:23:22.6939797Z     resource_cloud_backup_schedule_test.go:288: 
2026-05-19T01:23:22.6940771Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:23:22.6942597Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:23:22.6944432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:23:22.6946220Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-19T01:23:22.6948783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:288
2026-05-19T01:23:22.6950142Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:23:22.6950659Z         	Error:      	Received unexpected error:
2026-05-19T01:23:22.6952633Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.6953789Z         	Test:       	TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-05-19T01:23:22.6955652Z         	Messages:   	Project creation failed: test-acc-tf-p-7901092375564347886, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.6956919Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_zoneId (84.26s)
```

- 2026-05-20 PASS 16 minutes
- 2026-05-21 PASS 22 minutes
- 2026-05-22 PASS 32 minutes
- 2026-05-23 PASS 15 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 18 minutes
- 2026-05-26 PASS 16 minutes
- 2026-05-27 PASS 47 minutes
- 2026-05-28

### Error 2026-05-28T01:00:34+00:00
```
2026-05-28T01:00:34.9148141Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-05-28T01:00:34.9148904Z     resource_cloud_backup_schedule_test.go:288: Creating execution project (1): test-acc-tf-p-7644240330109218047
2026-05-28T01:00:34.9149545Z     resource_cloud_backup_schedule_test.go:288: 
2026-05-28T01:00:34.9150541Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:34.9152626Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:34.9154491Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:34.9156257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:00:34.9158546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:288
2026-05-28T01:00:34.9159908Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:34.9160444Z         	Error:      	Received unexpected error:
2026-05-28T01:00:34.9163590Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:00:34.9165119Z         	Test:       	TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-05-28T01:00:34.9167602Z         	Messages:   	Project creation failed: test-acc-tf-p-7644240330109218047, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:00:34.9169241Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_zoneId (0.88s)
```

- 2026-05-29 PASS 14 minutes
- 2026-05-30

### Error 2026-05-30T01:08:31+00:00
```
2026-05-30T01:08:31.4327465Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-05-30T01:08:31.4328227Z     resource_cloud_backup_schedule_test.go:288: Creating execution project (1): test-acc-tf-p-529648876187875840
2026-05-30T01:08:31.4328871Z     resource_cloud_backup_schedule_test.go:288: 
2026-05-30T01:08:31.4329893Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:31.4331765Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:31.4333896Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:31.4335690Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:08:31.4337979Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:288
2026-05-30T01:08:31.4339342Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:08:31.4339890Z         	Error:      	Received unexpected error:
2026-05-30T01:08:31.4341900Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4343079Z         	Test:       	TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-05-30T01:08:31.4345235Z         	Messages:   	Project creation failed: test-acc-tf-p-529648876187875840, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4346553Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_zoneId (74.60s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 17 minutes
- 2026-06-02 PASS 16 minutes
- 2026-06-03 PASS 24 minutes
- 2026-06-04 PASS 34 minutes
- 2026-06-05 PASS 19 minutes

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
- 2026-05-24 PASS 21 minutes
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
