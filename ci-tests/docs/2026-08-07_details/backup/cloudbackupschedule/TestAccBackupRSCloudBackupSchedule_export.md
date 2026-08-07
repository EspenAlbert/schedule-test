# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_export Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-16 01:58](#error-2026-07-16t0158560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.06s
[2026-07-21 00:53](#error-2026-07-21t0053510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.00s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 27 minutes
- 2026-07-10 PASS 41 minutes
- 2026-07-11 PASS 17 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 20 minutes
- 2026-07-14 PASS 19 minutes
- 2026-07-15 PASS 16 minutes
- 2026-07-16

### Error 2026-07-16T01:58:56+00:00
```
2026-07-16T01:58:56.7471949Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-07-16T01:58:56.7472744Z     resource_cloud_backup_schedule_test.go:158: Creating execution project (1): test-acc-tf-p-7685443646671788907
2026-07-16T01:58:56.7473380Z     resource_cloud_backup_schedule_test.go:158: 
2026-07-16T01:58:56.7474371Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T01:58:56.7476591Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T01:58:56.7478455Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T01:58:56.7480208Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-16T01:58:56.7482319Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:158
2026-07-16T01:58:56.7483644Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T01:58:56.7484381Z         	Error:      	Received unexpected error:
2026-07-16T01:58:56.7486627Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:58:56.7487743Z         	Test:       	TestAccBackupRSCloudBackupSchedule_export
2026-07-16T01:58:56.7489558Z         	Messages:   	Project creation failed: test-acc-tf-p-7685443646671788907, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:58:56.7490790Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (72.58s)
```

- 2026-07-17 PASS 29 minutes
- 2026-07-18 PASS 19 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:51+00:00
```
2026-07-21T00:53:51.4552732Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-07-21T00:53:51.4553760Z     resource_cloud_backup_schedule_test.go:158: Creating execution project (1): test-acc-tf-p-5063238420946006040
2026-07-21T00:53:51.4554403Z     resource_cloud_backup_schedule_test.go:158: 
2026-07-21T00:53:51.4555418Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:51.4557234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:51.4559037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:51.4560767Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:53:51.4563218Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:158
2026-07-21T00:53:51.4564570Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:51.4565116Z         	Error:      	Received unexpected error:
2026-07-21T00:53:51.4567257Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4568386Z         	Test:       	TestAccBackupRSCloudBackupSchedule_export
2026-07-21T00:53:51.4570196Z         	Messages:   	Project creation failed: test-acc-tf-p-5063238420946006040, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:51.4571404Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (71.05s)
```

- 2026-07-22 PASS 30 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8459712Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-07-23T00:50:22.8460990Z     resource_cloud_backup_schedule_test.go:158: Creating execution project (1): test-acc-tf-p-3111667222137535637
2026-07-23T00:50:22.8462111Z     resource_cloud_backup_schedule_test.go:158: 
2026-07-23T00:50:22.8463845Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8467431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8470806Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8473988Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8478045Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:158
2026-07-23T00:50:22.8480692Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8481643Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8485198Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8495781Z         	Test:       	TestAccBackupRSCloudBackupSchedule_export
2026-07-23T00:50:22.8499348Z         	Messages:   	Project creation failed: test-acc-tf-p-3111667222137535637, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8501472Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (62.42s)
```

- 2026-07-24 PASS 24 minutes
- 2026-07-25 PASS 20 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 18 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 17 minutes
- 2026-08-01 PASS 15 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04 PASS 16 minutes
- 2026-08-05 PASS 17 minutes
- 2026-08-06 PASS 16 minutes
- 2026-08-07 PASS 17 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 19 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 32 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 21 minutes
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
  - PASS 17 minutes
  - PASS 16 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 18 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
