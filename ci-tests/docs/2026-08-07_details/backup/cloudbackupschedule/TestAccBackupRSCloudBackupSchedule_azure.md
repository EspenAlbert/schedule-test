# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_azure Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-21 00:53](#error-2026-07-21t0053510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.02s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 27 minutes
- 2026-07-10 PASS 39 minutes
- 2026-07-11 PASS 15 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 13 minutes
- 2026-07-14 PASS 14 minutes
- 2026-07-15 PASS 14 minutes
- 2026-07-16 PASS an hour
- 2026-07-17 PASS 12 minutes
- 2026-07-18 PASS 16 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:51+00:00
```
2026-07-21T00:53:51.4628565Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-07-21T00:53:51.4629298Z     resource_cloud_backup_schedule_test.go:429: Creating execution project (1): test-acc-tf-p-3374910819335773849
2026-07-21T00:53:51.4629929Z     resource_cloud_backup_schedule_test.go:429: 
2026-07-21T00:53:51.4630904Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:51.4632824Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:51.4634661Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:51.4636513Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:53:51.4638645Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:429
2026-07-21T00:53:51.4639962Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:51.4640505Z         	Error:      	Received unexpected error:
2026-07-21T00:53:51.4642684Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4643764Z         	Test:       	TestAccBackupRSCloudBackupSchedule_azure
2026-07-21T00:53:51.4645550Z         	Messages:   	Project creation failed: test-acc-tf-p-3374910819335773849, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4646732Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (78.24s)
```

- 2026-07-22 PASS 18 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8607845Z === RUN   TestAccBackupRSCloudBackupSchedule_azure
2026-07-23T00:50:22.8609097Z     resource_cloud_backup_schedule_test.go:429: Creating execution project (1): test-acc-tf-p-7263954757538733843
2026-07-23T00:50:22.8610207Z     resource_cloud_backup_schedule_test.go:429: 
2026-07-23T00:50:22.8612114Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8615388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8618911Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8622087Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8626009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:429
2026-07-23T00:50:22.8628598Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8629525Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8634667Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:50:22.8637338Z         	Test:       	TestAccBackupRSCloudBackupSchedule_azure
2026-07-23T00:50:22.8641581Z         	Messages:   	Project creation failed: test-acc-tf-p-7263954757538733843, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:50:22.8644284Z --- FAIL: TestAccBackupRSCloudBackupSchedule_azure (0.57s)
```

- 2026-07-24 PASS 24 minutes
- 2026-07-25 PASS 12 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 hours
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 12 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 13 minutes
- 2026-08-01 PASS 12 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04 PASS 14 minutes
- 2026-08-05 PASS 11 minutes
- 2026-08-06 PASS 12 minutes
- 2026-08-07 PASS 12 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 14 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 13 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 13 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 12 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 12 minutes
  - PASS 13 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 12 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
