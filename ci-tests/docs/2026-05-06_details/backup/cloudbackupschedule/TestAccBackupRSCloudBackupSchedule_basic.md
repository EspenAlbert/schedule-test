# backup/cloudbackupschedule/TestAccBackupRSCloudBackupSchedule_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 01:05](#error-2026-04-16t0105000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032558379397d109c237c/clusters | dev | out_of_capacity | 9.00s
[2026-04-30 01:26](#error-2026-04-30t0126500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 117.07s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 42 minutes
- 2026-04-08 PASS 14 minutes
- 2026-04-09 PASS 23 minutes
- 2026-04-10 PASS 21 minutes
- 2026-04-11 PASS 15 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 18 minutes
- 2026-04-14 PASS 33 minutes
- 2026-04-15 PASS 15 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.7963963Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-04-16T01:05:00.7965116Z     resource_cloud_backup_schedule_test.go:27: Creating execution project (1): test-acc-tf-p-3842180183155541487
2026-04-16T01:05:00.7973451Z === CONT  TestAccBackupRSCloudBackupSchedule_basic
2026-04-16T01:05:00.7975935Z === NAME  TestAccBackupRSCloudBackupSchedule_basic
2026-04-16T01:05:00.7977181Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:36.732013353Z, ProjectID: 69e032558379397d109c237c, Cluster name: test-acc-tf-c-2997553006494599706
2026-04-16T01:05:00.7991886Z   
2026-04-16T01:05:00.7992397Z     resource_cloud_backup_schedule_test.go:30: Step 1/3 error: Error running apply: exit status 1
2026-04-16T01:05:00.7992870Z         
2026-04-16T01:05:00.7993151Z         Error: Error in create
2026-04-16T01:05:00.7993428Z         
2026-04-16T01:05:00.7993824Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T01:05:00.7994575Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T01:05:00.7995301Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T01:05:00.7995721Z         
2026-04-16T01:05:00.7996169Z         cluster name: test-acc-tf-c-2997553006494599706, API error details:
2026-04-16T01:05:00.7997070Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032558379397d109c237c/clusters
2026-04-16T01:05:00.7997790Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.7998465Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.7998996Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.7999404Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (9.02s)
```

- 2026-04-17 PASS 14 minutes
- 2026-04-18 PASS 20 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 14 minutes
- 2026-04-21 PASS 20 minutes
- 2026-04-22 PASS 53 minutes
- 2026-04-23 PASS 23 minutes
- 2026-04-24 PASS 17 minutes
- 2026-04-25 PASS 13 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 14 minutes
- 2026-04-28 PASS 14 minutes
- 2026-04-29 PASS 16 minutes
- 2026-04-30

### Error 2026-04-30T01:26:50+00:00
```
2026-04-30T01:26:50.4842841Z === RUN   TestAccBackupRSCloudBackupSchedule_basic
2026-04-30T01:26:50.4844422Z     resource_cloud_backup_schedule_test.go:27: Creating execution project (1): test-acc-tf-p-5584039331713302380
2026-04-30T01:26:50.4845432Z     resource_cloud_backup_schedule_test.go:27: 
2026-04-30T01:26:50.4846979Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:26:50.4849903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:26:50.4854106Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:26:50.4856901Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-30T01:26:50.4860149Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupschedule/resource_cloud_backup_schedule_test.go:27
2026-04-30T01:26:50.4862295Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:26:50.4863108Z         	Error:      	Received unexpected error:
2026-04-30T01:26:50.4866191Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:26:50.4867788Z         	Test:       	TestAccBackupRSCloudBackupSchedule_basic
2026-04-30T01:26:50.4870277Z         	Messages:   	Project creation failed: test-acc-tf-p-5584039331713302380, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:26:50.4872540Z --- FAIL: TestAccBackupRSCloudBackupSchedule_basic (117.68s)
```

- 2026-05-01 PASS 15 minutes
- 2026-05-02 PASS 16 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 17 minutes
- 2026-05-05 PASS 21 minutes
- 2026-05-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 14 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 17 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 17 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 19 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 18 minutes
- 2026-05-04 PASS 14 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 15 minutes
