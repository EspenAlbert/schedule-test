# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_copySettings_zoneId Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:53](#error-2026-07-21t0053510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.07s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 126.01s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 27 minutes
- 2026-07-10 PASS 49 minutes
- 2026-07-11 PASS 17 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 24 minutes
- 2026-07-14 PASS 17 minutes
- 2026-07-15 PASS 20 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 15 minutes
- 2026-07-18 PASS 19 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:51+00:00
```
2026-07-21T00:53:51.4590734Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-07-21T00:53:51.4591508Z     resource_cloud_backup_schedule_test.go:288: Creating execution project (1): test-acc-tf-p-6675732364904804378
2026-07-21T00:53:51.4592364Z     resource_cloud_backup_schedule_test.go:288: 
2026-07-21T00:53:51.4593345Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:51.4595175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:51.4596971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:51.4598693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:53:51.4600826Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:288
2026-07-21T00:53:51.4602474Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:51.4603038Z         	Error:      	Received unexpected error:
2026-07-21T00:53:51.4605018Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4606210Z         	Test:       	TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-07-21T00:53:51.4608054Z         	Messages:   	Project creation failed: test-acc-tf-p-6675732364904804378, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4609293Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_zoneId (92.66s)
```

- 2026-07-22 PASS 30 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8536132Z === RUN   TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-07-23T00:50:22.8537765Z     resource_cloud_backup_schedule_test.go:288: Creating execution project (1): test-acc-tf-p-2511194219657985235
2026-07-23T00:50:22.8538875Z     resource_cloud_backup_schedule_test.go:288: 
2026-07-23T00:50:22.8540627Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8543913Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8547463Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8550793Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8554663Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:288
2026-07-23T00:50:22.8557204Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8558146Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8561683Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8563671Z         	Test:       	TestAccBackupRSCloudBackupSchedule_copySettings_zoneId
2026-07-23T00:50:22.8567134Z         	Messages:   	Project creation failed: test-acc-tf-p-2511194219657985235, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8569372Z --- FAIL: TestAccBackupRSCloudBackupSchedule_copySettings_zoneId (126.06s)
```

- 2026-07-24 PASS 25 minutes
- 2026-07-25 PASS 15 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS 53 minutes
- 2026-07-29 PASS 21 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 17 minutes
- 2026-08-01 PASS 15 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 14 minutes
- 2026-08-04 PASS 17 minutes
- 2026-08-05 PASS 15 minutes
- 2026-08-06 PASS 17 minutes
- 2026-08-07 PASS 17 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 17 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 20 minutes
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
- 2026-07-26 PASS 16 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 17 minutes
  - PASS 15 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 17 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
