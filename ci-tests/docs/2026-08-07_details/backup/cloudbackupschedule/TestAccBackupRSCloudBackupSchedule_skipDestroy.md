# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_skipDestroy Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:53](#error-2026-07-21t0053510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.02s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 26 minutes
- 2026-07-10 PASS 36 minutes
- 2026-07-11 PASS 15 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 24 minutes
- 2026-07-14 PASS 15 minutes
- 2026-07-15 PASS 16 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 25 minutes
- 2026-07-18 PASS 18 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:51+00:00
```
2026-07-21T00:53:51.4647197Z === RUN   TestAccBackupRSCloudBackupSchedule_skipDestroy
2026-07-21T00:53:51.4647937Z     resource_cloud_backup_schedule_test.go:475: Creating execution project (1): test-acc-tf-p-2157724930433782874
2026-07-21T00:53:51.4648573Z     resource_cloud_backup_schedule_test.go:475: 
2026-07-21T00:53:51.4649558Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:51.4651373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:51.4653398Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:51.4655120Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:53:51.4657243Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:475
2026-07-21T00:53:51.4658558Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:51.4659241Z         	Error:      	Received unexpected error:
2026-07-21T00:53:51.4661217Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4662517Z         	Test:       	TestAccBackupRSCloudBackupSchedule_skipDestroy
2026-07-21T00:53:51.4664340Z         	Messages:   	Project creation failed: test-acc-tf-p-2157724930433782874, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4665559Z --- FAIL: TestAccBackupRSCloudBackupSchedule_skipDestroy (102.18s)
```

- 2026-07-22 PASS 30 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8645073Z === RUN   TestAccBackupRSCloudBackupSchedule_skipDestroy
2026-07-23T00:50:22.8646346Z     resource_cloud_backup_schedule_test.go:475: Creating execution project (1): test-acc-tf-p-505797542913223565
2026-07-23T00:50:22.8647627Z     resource_cloud_backup_schedule_test.go:475: 
2026-07-23T00:50:22.8649369Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8653549Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8657099Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8660310Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8664177Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:475
2026-07-23T00:50:22.8666547Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8667663Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8672803Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:50:22.8675347Z         	Test:       	TestAccBackupRSCloudBackupSchedule_skipDestroy
2026-07-23T00:50:22.8680098Z         	Messages:   	Project creation failed: test-acc-tf-p-505797542913223565, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:50:22.8682885Z --- FAIL: TestAccBackupRSCloudBackupSchedule_skipDestroy (0.25s)
```

- 2026-07-24 PASS 24 minutes
- 2026-07-25 PASS 22 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 16 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 17 minutes
- 2026-08-01 PASS 16 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 17 minutes
- 2026-08-04 PASS 16 minutes
- 2026-08-05 PASS 15 minutes
- 2026-08-06 PASS 15 minutes
- 2026-08-07 PASS 16 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 21 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 16 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 19 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 20 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 17 minutes
  - PASS 19 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 18 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
