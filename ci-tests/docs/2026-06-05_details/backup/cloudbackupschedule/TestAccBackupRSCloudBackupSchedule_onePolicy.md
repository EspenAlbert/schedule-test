# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_onePolicy Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:25](#error-2026-05-09t0125500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-05-18 01:25](#error-2026-05-18t0125290000) |  | dev |  | 1336.03s
[2026-05-19 01:23](#error-2026-05-19t0123220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.04s
[2026-05-28 01:00](#error-2026-05-28t0100340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.06s
[2026-05-30 01:08](#error-2026-05-30t0108310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 29 minutes
- 2026-05-08 PASS 16 minutes
- 2026-05-09

### Error 2026-05-09T01:25:50+00:00
```
2026-05-09T01:25:50.1006472Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2026-05-09T01:25:50.1007206Z     resource_cloud_backup_schedule_test.go:219: Creating execution project (1): test-acc-tf-p-8664306054767280564
2026-05-09T01:25:50.1007840Z     resource_cloud_backup_schedule_test.go:219: 
2026-05-09T01:25:50.1008831Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:25:50.1010707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:25:50.1012617Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:25:50.1014695Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-09T01:25:50.1016898Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:219
2026-05-09T01:25:50.1018252Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:25:50.1018781Z         	Error:      	Received unexpected error:
2026-05-09T01:25:50.1020770Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1021900Z         	Test:       	TestAccBackupRSCloudBackupSchedule_onePolicy
2026-05-09T01:25:50.1023755Z         	Messages:   	Project creation failed: test-acc-tf-p-8664306054767280564, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:25:50.1025484Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (63.16s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 15 minutes
- 2026-05-12 PASS 18 minutes
- 2026-05-13 PASS 15 minutes
- 2026-05-14 PASS 38 minutes
- 2026-05-15 PASS 16 minutes
- 2026-05-16 PASS 16 minutes
- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:25:29+00:00
```
2026-05-18T01:25:29.0733069Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2026-05-18T01:25:29.0741258Z === CONT  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-05-18T01:25:29.0753375Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-05-18T01:25:29.0754477Z     pre_check.go:46: Time before creating cluster: 2026-05-18T01:00:50.255395944Z, ProjectID: 6a0a64a2dece59bebe103a39, Cluster name: test-acc-tf-c-9005072325894176344
2026-05-18T01:25:29.0781884Z === NAME  TestAccBackupRSCloudBackupSchedule_onePolicy
2026-05-18T01:25:29.0782668Z     resource_cloud_backup_schedule_test.go:222: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-18T01:25:29.0783248Z         
2026-05-18T01:25:29.0783538Z         Error: Error in delete
2026-05-18T01:25:29.0783819Z         
2026-05-18T01:25:29.0784283Z         cluster=test-acc-tf-c-9005072325894176344 didn't reach desired state:
2026-05-18T01:25:29.0784738Z         DELETED, error:
2026-05-18T01:25:29.0785634Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0a64a2dece59bebe103a39/clusters/test-acc-tf-c-9005072325894176344
2026-05-18T01:25:29.0786464Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-18T01:25:29.0786921Z         BadRequestDetail: 
2026-05-18T01:25:29.0787312Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (1336.33s)
```

- 2026-05-19

### Error 2026-05-19T01:23:22+00:00
```
2026-05-19T01:23:22.6919072Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2026-05-19T01:23:22.6919795Z     resource_cloud_backup_schedule_test.go:219: Creating execution project (1): test-acc-tf-p-7524113199260798337
2026-05-19T01:23:22.6920424Z     resource_cloud_backup_schedule_test.go:219: 
2026-05-19T01:23:22.6921394Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:23:22.6923227Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:23:22.6925058Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:23:22.6926799Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-19T01:23:22.6929626Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:219
2026-05-19T01:23:22.6930961Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:23:22.6931476Z         	Error:      	Received unexpected error:
2026-05-19T01:23:22.6933443Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.6934540Z         	Test:       	TestAccBackupRSCloudBackupSchedule_onePolicy
2026-05-19T01:23:22.6936501Z         	Messages:   	Project creation failed: test-acc-tf-p-7524113199260798337, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:23:22.6937727Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (81.40s)
```

- 2026-05-20 PASS 16 minutes
- 2026-05-21 PASS 22 minutes
- 2026-05-22 PASS 32 minutes
- 2026-05-23 PASS 13 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 19 minutes
- 2026-05-26 PASS 15 minutes
- 2026-05-27 PASS 47 minutes
- 2026-05-28

### Error 2026-05-28T01:00:34+00:00
```
2026-05-28T01:00:34.9128675Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2026-05-28T01:00:34.9129416Z     resource_cloud_backup_schedule_test.go:219: Creating execution project (1): test-acc-tf-p-318037894961308614
2026-05-28T01:00:34.9130062Z     resource_cloud_backup_schedule_test.go:219: 
2026-05-28T01:00:34.9131444Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:34.9133323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:34.9135173Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:34.9136934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:00:34.9139095Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:219
2026-05-28T01:00:34.9140452Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:34.9141253Z         	Error:      	Received unexpected error:
2026-05-28T01:00:34.9143256Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:34.9144386Z         	Test:       	TestAccBackupRSCloudBackupSchedule_onePolicy
2026-05-28T01:00:34.9146232Z         	Messages:   	Project creation failed: test-acc-tf-p-318037894961308614, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:34.9147632Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (71.55s)
```

- 2026-05-29 PASS 17 minutes
- 2026-05-30

### Error 2026-05-30T01:08:31+00:00
```
2026-05-30T01:08:31.4308003Z === RUN   TestAccBackupRSCloudBackupSchedule_onePolicy
2026-05-30T01:08:31.4308748Z     resource_cloud_backup_schedule_test.go:219: Creating execution project (1): test-acc-tf-p-466952515244396532
2026-05-30T01:08:31.4309396Z     resource_cloud_backup_schedule_test.go:219: 
2026-05-30T01:08:31.4310404Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:31.4312263Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:31.4314436Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:31.4316220Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-30T01:08:31.4318382Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:219
2026-05-30T01:08:31.4319730Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:08:31.4320278Z         	Error:      	Received unexpected error:
2026-05-30T01:08:31.4322266Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4323659Z         	Test:       	TestAccBackupRSCloudBackupSchedule_onePolicy
2026-05-30T01:08:31.4325519Z         	Messages:   	Project creation failed: test-acc-tf-p-466952515244396532, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:31.4326947Z --- FAIL: TestAccBackupRSCloudBackupSchedule_onePolicy (69.40s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 19 minutes
- 2026-06-02 PASS 14 minutes
- 2026-06-03 PASS 24 minutes
- 2026-06-04 PASS 44 minutes
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
- 2026-05-24 PASS 16 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 16 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
