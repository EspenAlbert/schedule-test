# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_onePolicy Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-16 01:58](#error-2026-07-16t0158560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.08s
[2026-07-21 00:53](#error-2026-07-21t0053510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 25 minutes
- 2026-07-10 PASS 38 minutes
- 2026-07-11 PASS 16 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 17 minutes
- 2026-07-14 PASS 17 minutes
- 2026-07-15 PASS 14 minutes
- 2026-07-16

### Error 2026-07-16T01:58:56+00:00
```
2026-07-16T01:58:56.7491268Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2026-07-16T01:58:56.7492016Z     resource_cloud_backup_schedule_test.go:219: Creating execution project (1): test-acc-tf-p-3323522401406475753
2026-07-16T01:58:56.7492656Z     resource_cloud_backup_schedule_test.go:219: 
2026-07-16T01:58:56.7493637Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T01:58:56.7495457Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T01:58:56.7498100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T01:58:56.7499852Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-16T01:58:56.7502126Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:219
2026-07-16T01:58:56.7503451Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T01:58:56.7503983Z         	Error:      	Received unexpected error:
2026-07-16T01:58:56.7506167Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:58:56.7507297Z         	Test:       	TestAccBackupRSCloudBackupSchedule_onePolicy
2026-07-16T01:58:56.7509142Z         	Messages:   	Project creation failed: test-acc-tf-p-3323522401406475753, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:58:56.7510392Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (69.82s)
```

- 2026-07-17 PASS 15 minutes
- 2026-07-18 PASS 18 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:51+00:00
```
2026-07-21T00:53:51.4572050Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2026-07-21T00:53:51.4572809Z     resource_cloud_backup_schedule_test.go:219: Creating execution project (1): test-acc-tf-p-9161266490106042172
2026-07-21T00:53:51.4573459Z     resource_cloud_backup_schedule_test.go:219: 
2026-07-21T00:53:51.4574453Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:51.4576255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:51.4578057Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:51.4579777Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:53:51.4582109Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:219
2026-07-21T00:53:51.4583435Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:51.4583996Z         	Error:      	Received unexpected error:
2026-07-21T00:53:51.4585968Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4587047Z         	Test:       	TestAccBackupRSCloudBackupSchedule_onePolicy
2026-07-21T00:53:51.4588833Z         	Messages:   	Project creation failed: test-acc-tf-p-9161266490106042172, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4590228Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (62.01s)
```

- 2026-07-22 PASS 30 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8502251Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2026-07-23T00:50:22.8503544Z     resource_cloud_backup_schedule_test.go:219: Creating execution project (1): test-acc-tf-p-5261439409018578993
2026-07-23T00:50:22.8504659Z     resource_cloud_backup_schedule_test.go:219: 
2026-07-23T00:50:22.8506415Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8510072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8513372Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8516510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8520680Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:219
2026-07-23T00:50:22.8523103Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8524026Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8527818Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8529978Z         	Test:       	TestAccBackupRSCloudBackupSchedule_onePolicy
2026-07-23T00:50:22.8533177Z         	Messages:   	Project creation failed: test-acc-tf-p-5261439409018578993, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8535286Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (63.92s)
```

- 2026-07-24 PASS 25 minutes
- 2026-07-25 PASS 18 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 16 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 15 minutes
- 2026-08-01 PASS 15 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04 PASS 17 minutes
- 2026-08-05 PASS 17 minutes
- 2026-08-06 PASS 15 minutes
- 2026-08-07 PASS 18 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 18 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 22 minutes
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
- 2026-07-26 PASS 18 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 16 minutes
  - PASS 16 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 14 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
