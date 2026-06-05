# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_export Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.08s
[2026-05-19 01:23](#error-2026-05-19t0123220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.03s
[2026-05-28 01:00](#error-2026-05-28t0100340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.01s
[2026-05-30 01:08](#error-2026-05-30t0108310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 29 minutes
- 2026-05-08 PASS 22 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.0986753Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-05-09T01:25:50.0987775Z     resource_cloud_backup_schedule_test.go:158: Creating execution project (1): test-acc-tf-p-1672123317515993008
2026-05-09T01:25:50.0988439Z     resource_cloud_backup_schedule_test.go:158: 
2026-05-09T01:25:50.0989446Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.0991355Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.0993230Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.0995289Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.0997467Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:158
2026-05-09T01:25:50.0998835Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:25:50.0999361Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1001513Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1002635Z         	Test:       	TestAccBackupRSCloudBackupSchedule_export
2026-05-09T01:25:50.1004747Z         	Messages:   	Project creation failed: test-acc-tf-p-1672123317515993008, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1006025Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (65.78s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 16 minutes
- 2026-05-12 PASS 19 minutes
- 2026-05-13 PASS 18 minutes
- 2026-05-14 PASS 28 minutes
- 2026-05-15 PASS 19 minutes
- 2026-05-16 PASS 17 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 23 minutes
- 2026-05-19

### Error 2026-05-19T01:23:22+00:00
```
2026-05-19T01:23:22.6899799Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-05-19T01:23:22.6900517Z     resource_cloud_backup_schedule_test.go:158: Creating execution project (1): test-acc-tf-p-2708602084309945467
2026-05-19T01:23:22.6901138Z     resource_cloud_backup_schedule_test.go:158: 
2026-05-19T01:23:22.6902120Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:23:22.6903956Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:23:22.6905803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:23:22.6907554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-19T01:23:22.6910091Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:158
2026-05-19T01:23:22.6911420Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:23:22.6912127Z         	Error:      	Received unexpected error:
2026-05-19T01:23:22.6914113Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.6915229Z         	Test:       	TestAccBackupRSCloudBackupSchedule_export
2026-05-19T01:23:22.6917048Z         	Messages:   	Project creation failed: test-acc-tf-p-2708602084309945467, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.6918619Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (75.35s)
```

- 2026-05-20 PASS 16 minutes
- 2026-05-21 PASS 23 minutes
- 2026-05-22 PASS 30 minutes
- 2026-05-23 PASS 16 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 19 minutes
- 2026-05-26 PASS 18 minutes
- 2026-05-27 PASS 54 minutes
- 2026-05-28

### Error 2026-05-28T01:00:34+00:00
```
2026-05-28T01:00:34.9108921Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-05-28T01:00:34.9109662Z     resource_cloud_backup_schedule_test.go:158: Creating execution project (1): test-acc-tf-p-2503805803728422450
2026-05-28T01:00:34.9110578Z     resource_cloud_backup_schedule_test.go:158: 
2026-05-28T01:00:34.9111876Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:34.9113753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:34.9115657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:34.9117450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:00:34.9119617Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:158
2026-05-28T01:00:34.9121199Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:34.9121942Z         	Error:      	Received unexpected error:
2026-05-28T01:00:34.9123983Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:34.9125098Z         	Test:       	TestAccBackupRSCloudBackupSchedule_export
2026-05-28T01:00:34.9126944Z         	Messages:   	Project creation failed: test-acc-tf-p-2503805803728422450, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:34.9128191Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (78.06s)
```

- 2026-05-29 PASS 16 minutes
- 2026-05-30

### Error 2026-05-30T01:08:31+00:00
```
2026-05-30T01:08:31.4287943Z === RUN   TestAccBackupRSCloudBackupSchedule_export
2026-05-30T01:08:31.4288693Z     resource_cloud_backup_schedule_test.go:158: Creating execution project (1): test-acc-tf-p-2102398177229125764
2026-05-30T01:08:31.4289358Z     resource_cloud_backup_schedule_test.go:158: 
2026-05-30T01:08:31.4290371Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:31.4292239Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:31.4295020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:31.4296802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:08:31.4298972Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:158
2026-05-30T01:08:31.4300339Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:08:31.4301050Z         	Error:      	Received unexpected error:
2026-05-30T01:08:31.4303062Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4304410Z         	Test:       	TestAccBackupRSCloudBackupSchedule_export
2026-05-30T01:08:31.4306275Z         	Messages:   	Project creation failed: test-acc-tf-p-2102398177229125764, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4307531Z --- FAIL: TestAccBackupRSCloudBackupSchedule_export (62.35s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 21 minutes
- 2026-06-02 PASS 16 minutes
- 2026-06-03 PASS 24 minutes
- 2026-06-04 PASS 33 minutes
- 2026-06-05 PASS 19 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 23 minutes
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
- 2026-05-24 PASS 19 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 21 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
