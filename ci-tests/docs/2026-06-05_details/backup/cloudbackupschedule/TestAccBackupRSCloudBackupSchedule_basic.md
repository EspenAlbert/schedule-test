# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s
[2026-05-12 01:13](#error-2026-05-12t0113580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s
[2026-05-19 01:23](#error-2026-05-19t0123220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.03s
[2026-05-28 01:00](#error-2026-05-28t0100340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.06s
[2026-05-30 01:08](#error-2026-05-30t0108310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 29 minutes
- 2026-05-08 PASS 22 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.0963385Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-05-09T01:25:50.0965282Z     resource_cloud_backup_schedule_test.go:27: Creating execution project (1): test-acc-tf-p-6059892850648015239
2026-05-09T01:25:50.0966113Z     resource_cloud_backup_schedule_test.go:27: 
2026-05-09T01:25:50.0967348Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.0969659Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.0971973Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.0974425Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.0977161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:27
2026-05-09T01:25:50.0978837Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:25:50.0979477Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.0981741Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.0982880Z         	Test:       	TestAccBackupRSCloudBackupSchedule_basic
2026-05-09T01:25:50.0985008Z         	Messages:   	Project creation failed: test-acc-tf-p-6059892850648015239, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.0986309Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (62.36s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 20 minutes
- 2026-05-12

### Error 2026-05-12T01:13:58+00:00
```
2026-05-12T01:13:58.2793634Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-05-12T01:13:58.2795047Z     resource_cloud_backup_schedule_test.go:27: Creating execution project (1): test-acc-tf-p-6736515074016064991
2026-05-12T01:13:58.2796444Z     resource_cloud_backup_schedule_test.go:27: 
2026-05-12T01:13:58.2798266Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-12T01:13:58.2800466Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-12T01:13:58.2802863Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-12T01:13:58.2804644Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-12T01:13:58.2807113Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:27
2026-05-12T01:13:58.2808436Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-12T01:13:58.2808954Z         	Error:      	Received unexpected error:
2026-05-12T01:13:58.2810899Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T01:13:58.2811979Z         	Test:       	TestAccBackupRSCloudBackupSchedule_basic
2026-05-12T01:13:58.2814047Z         	Messages:   	Project creation failed: test-acc-tf-p-6736515074016064991, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T01:13:58.2815985Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (61.77s)
```

- 2026-05-13 PASS 15 minutes
- 2026-05-14 PASS 39 minutes
- 2026-05-15 PASS 15 minutes
- 2026-05-16 PASS 14 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 22 minutes
- 2026-05-19

### Error 2026-05-19T01:23:22+00:00
```
2026-05-19T01:23:22.6879362Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-05-19T01:23:22.6880712Z     resource_cloud_backup_schedule_test.go:27: Creating execution project (1): test-acc-tf-p-3145305604518603422
2026-05-19T01:23:22.6881515Z     resource_cloud_backup_schedule_test.go:27: 
2026-05-19T01:23:22.6882571Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:23:22.6884441Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:23:22.6886281Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:23:22.6888328Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-19T01:23:22.6890546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:27
2026-05-19T01:23:22.6891879Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:23:22.6892414Z         	Error:      	Received unexpected error:
2026-05-19T01:23:22.6894413Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.6895548Z         	Test:       	TestAccBackupRSCloudBackupSchedule_basic
2026-05-19T01:23:22.6897388Z         	Messages:   	Project creation failed: test-acc-tf-p-3145305604518603422, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.6899333Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (72.34s)
```

- 2026-05-20 PASS 14 minutes
- 2026-05-21 PASS 23 minutes
- 2026-05-22 PASS 17 minutes
- 2026-05-23 PASS 16 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 18 minutes
- 2026-05-26 PASS 16 minutes
- 2026-05-27 PASS 47 minutes
- 2026-05-28

### Error 2026-05-28T01:00:34+00:00
```
2026-05-28T01:00:34.9087801Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-05-28T01:00:34.9089026Z     resource_cloud_backup_schedule_test.go:27: Creating execution project (1): test-acc-tf-p-2659598966701148560
2026-05-28T01:00:34.9090300Z     resource_cloud_backup_schedule_test.go:27: 
2026-05-28T01:00:34.9092079Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:34.9094034Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:34.9095908Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:34.9097692Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:00:34.9099848Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:27
2026-05-28T01:00:34.9101629Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:34.9102197Z         	Error:      	Received unexpected error:
2026-05-28T01:00:34.9104220Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:34.9105357Z         	Test:       	TestAccBackupRSCloudBackupSchedule_basic
2026-05-28T01:00:34.9107197Z         	Messages:   	Project creation failed: test-acc-tf-p-2659598966701148560, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:34.9108460Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (73.63s)
```

- 2026-05-29 PASS 15 minutes
- 2026-05-30

### Error 2026-05-30T01:08:31+00:00
```
2026-05-30T01:08:31.4264818Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-05-30T01:08:31.4266097Z     resource_cloud_backup_schedule_test.go:27: Creating execution project (1): test-acc-tf-p-1303135461129597214
2026-05-30T01:08:31.4267261Z     resource_cloud_backup_schedule_test.go:27: 
2026-05-30T01:08:31.4269123Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:31.4272164Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:31.4274615Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:31.4276480Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:08:31.4278683Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:27
2026-05-30T01:08:31.4280041Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:08:31.4280589Z         	Error:      	Received unexpected error:
2026-05-30T01:08:31.4282585Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4284080Z         	Test:       	TestAccBackupRSCloudBackupSchedule_basic
2026-05-30T01:08:31.4285944Z         	Messages:   	Project creation failed: test-acc-tf-p-1303135461129597214, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4287209Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (68.29s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 20 minutes
- 2026-06-02 PASS 16 minutes
- 2026-06-03 PASS 24 minutes
- 2026-06-04 PASS 30 minutes
- 2026-06-05 PASS 15 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 19 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 19 minutes
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
- 2026-05-31 PASS 15 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
