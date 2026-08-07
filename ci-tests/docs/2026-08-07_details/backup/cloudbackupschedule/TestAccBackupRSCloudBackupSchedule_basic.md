# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-16 01:58](#error-2026-07-16t0158560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.02s
[2026-07-18 01:03](#error-2026-07-18t0103440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-07-21 00:53](#error-2026-07-21t0053510000) |  | dev | flaky_500 | 42.01s
[2026-07-23 00:50](#error-2026-07-23t0050220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS 26 minutes
- 2026-07-10 PASS 33 minutes
- 2026-07-11 PASS 15 minutes
- 2026-07-12: MISSING
- 2026-07-13 PASS 21 minutes
- 2026-07-14 PASS 17 minutes
- 2026-07-15 PASS 16 minutes
- 2026-07-16

### Error 2026-07-16T01:58:56+00:00
```
2026-07-16T01:58:56.7450988Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-07-16T01:58:56.7452222Z     resource_cloud_backup_schedule_test.go:27: Creating execution project (1): test-acc-tf-p-3216236301257631822
2026-07-16T01:58:56.7453307Z     resource_cloud_backup_schedule_test.go:27: 
2026-07-16T01:58:56.7454411Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T01:58:56.7456764Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T01:58:56.7458814Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T01:58:56.7460653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-16T01:58:56.7462848Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:27
2026-07-16T01:58:56.7464498Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T01:58:56.7465036Z         	Error:      	Received unexpected error:
2026-07-16T01:58:56.7467330Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:58:56.7468446Z         	Test:       	TestAccBackupRSCloudBackupSchedule_basic
2026-07-16T01:58:56.7470259Z         	Messages:   	Project creation failed: test-acc-tf-p-3216236301257631822, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:58:56.7471477Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (78.24s)
```

- 2026-07-17 PASS 19 minutes
- 2026-07-18

### Error 2026-07-18T01:03:44+00:00
```
2026-07-18T01:03:44.2961067Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-07-18T01:03:44.2962401Z     resource_cloud_backup_schedule_test.go:27: Creating execution project (1): test-acc-tf-p-1406165804319596413
2026-07-18T01:03:44.2963457Z     resource_cloud_backup_schedule_test.go:27: 
2026-07-18T01:03:44.2965202Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:03:44.2968543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:03:44.2991427Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:03:44.2993253Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-18T01:03:44.2995381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:27
2026-07-18T01:03:44.2996713Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:03:44.2997272Z         	Error:      	Received unexpected error:
2026-07-18T01:03:44.2999232Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:03:44.3000953Z         	Test:       	TestAccBackupRSCloudBackupSchedule_basic
2026-07-18T01:03:44.3002783Z         	Messages:   	Project creation failed: test-acc-tf-p-1406165804319596413, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:03:44.3004055Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (63.12s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:51+00:00
```
2026-07-21T00:53:51.4535493Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-07-21T00:53:51.4536760Z     resource_cloud_backup_schedule_test.go:27: Creating execution project (1): test-acc-tf-p-8368874007593880937
2026-07-21T00:53:51.4537702Z     resource_cloud_backup_schedule_test.go:27: 
2026-07-21T00:53:51.4538767Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:51.4540619Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:51.4542653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:51.4544432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-21T00:53:51.4546555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:27
2026-07-21T00:53:51.4547873Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:51.4548432Z         	Error:      	Received unexpected error:
2026-07-21T00:53:51.4549382Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:53:51.4550056Z         	Test:       	TestAccBackupRSCloudBackupSchedule_basic
2026-07-21T00:53:51.4551185Z         	Messages:   	Project creation failed: test-acc-tf-p-8368874007593880937, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-21T00:53:51.4552242Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (42.13s)
```

- 2026-07-22 PASS 30 minutes
- 2026-07-23

### Error 2026-07-23T00:50:22+00:00
```
2026-07-23T00:50:22.8422175Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-07-23T00:50:22.8423742Z     resource_cloud_backup_schedule_test.go:27: Creating execution project (1): test-acc-tf-p-330379117315205660
2026-07-23T00:50:22.8427541Z     resource_cloud_backup_schedule_test.go:27: 
2026-07-23T00:50:22.8429392Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:50:22.8432750Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:50:22.8436261Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:50:22.8439689Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-07-23T00:50:22.8443520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:27
2026-07-23T00:50:22.8445898Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:50:22.8447064Z         	Error:      	Received unexpected error:
2026-07-23T00:50:22.8450614Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8452609Z         	Test:       	TestAccBackupRSCloudBackupSchedule_basic
2026-07-23T00:50:22.8456131Z         	Messages:   	Project creation failed: test-acc-tf-p-330379117315205660, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:50:22.8458892Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (61.29s)
```

- 2026-07-24 PASS 30 minutes
- 2026-07-25 PASS 15 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS an hour
- 2026-07-28 PASS an hour
- 2026-07-29 PASS 22 minutes
- 2026-07-30 PASS an hour
- 2026-07-31 PASS 15 minutes
- 2026-08-01 PASS 16 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 16 minutes
- 2026-08-04 PASS 14 minutes
- 2026-08-05 PASS 18 minutes
- 2026-08-06 PASS 15 minutes
- 2026-08-07 PASS 16 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 17 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 22 minutes
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
- 2026-07-26 PASS 16 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 15 minutes
  - PASS 19 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 16 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
