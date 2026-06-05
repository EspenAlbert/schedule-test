# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_skipDestroy Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-28 01:00](#error-2026-05-28t0100340000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.08s
[2026-05-30 01:08](#error-2026-05-30t0108310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 29 minutes
- 2026-05-08 PASS 22 minutes
- 2026-05-09 PASS 23 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 17 minutes
- 2026-05-12 PASS 18 minutes
- 2026-05-13 PASS 13 minutes
- 2026-05-14 PASS 38 minutes
- 2026-05-15 PASS 17 minutes
- 2026-05-16 PASS 14 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 19 minutes
- 2026-05-19 PASS 15 minutes
- 2026-05-20 PASS 17 minutes
- 2026-05-21 PASS 22 minutes
- 2026-05-22 PASS 30 minutes
- 2026-05-23 PASS 14 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 15 minutes
- 2026-05-26 PASS 16 minutes
- 2026-05-27 PASS 47 minutes
- 2026-05-28

### Error 2026-05-28T01:00:34+00:00
```
2026-05-28T01:00:34.9212766Z === RUN   TestAccBackupRSCloudBackupSchedule_skipDestroy
2026-05-28T01:00:34.9213500Z     resource_cloud_backup_schedule_test.go:475: Creating execution project (1): test-acc-tf-p-1060559869424857452
2026-05-28T01:00:34.9214140Z     resource_cloud_backup_schedule_test.go:475: 
2026-05-28T01:00:34.9215133Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:34.9216982Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:34.9218830Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:34.9220727Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:00:34.9223135Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:475
2026-05-28T01:00:34.9224480Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:34.9225015Z         	Error:      	Received unexpected error:
2026-05-28T01:00:34.9227916Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:00:34.9229402Z         	Test:       	TestAccBackupRSCloudBackupSchedule_skipDestroy
2026-05-28T01:00:34.9232185Z         	Messages:   	Project creation failed: test-acc-tf-p-1060559869424857452, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:00:34.9233827Z --- FAIL: TestAccBackupRSCloudBackupSchedule_skipDestroy (0.80s)
```

- 2026-05-29 PASS 14 minutes
- 2026-05-30

### Error 2026-05-30T01:08:31+00:00
```
2026-05-30T01:08:31.4385692Z === RUN   TestAccBackupRSCloudBackupSchedule_skipDestroy
2026-05-30T01:08:31.4386439Z     resource_cloud_backup_schedule_test.go:475: Creating execution project (1): test-acc-tf-p-5193142462980759799
2026-05-30T01:08:31.4387086Z     resource_cloud_backup_schedule_test.go:475: 
2026-05-30T01:08:31.4388088Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:31.4389946Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:31.4391792Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:31.4393709Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:08:31.4395871Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:475
2026-05-30T01:08:31.4397217Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:08:31.4398004Z         	Error:      	Received unexpected error:
2026-05-30T01:08:31.4399991Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4401158Z         	Test:       	TestAccBackupRSCloudBackupSchedule_skipDestroy
2026-05-30T01:08:31.4403007Z         	Messages:   	Project creation failed: test-acc-tf-p-5193142462980759799, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4404405Z --- FAIL: TestAccBackupRSCloudBackupSchedule_skipDestroy (92.57s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 19 minutes
- 2026-06-02 PASS 15 minutes
- 2026-06-03 PASS 22 minutes
- 2026-06-04 PASS 30 minutes
- 2026-06-05 PASS 18 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 20 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 18 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 18 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 15 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
