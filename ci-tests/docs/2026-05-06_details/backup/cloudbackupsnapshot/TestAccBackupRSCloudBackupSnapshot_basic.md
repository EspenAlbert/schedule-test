# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 01:10](#error-2026-04-11t0110550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.05s
[2026-04-16 01:05](#error-2026-04-16t0105000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032551ec945fedc71760a/clusters | dev | out_of_capacity | 9.08s
[2026-04-30 01:26](#error-2026-04-30t0126500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 52 minutes
- 2026-04-08 PASS 22 minutes
- 2026-04-09 PASS 35 minutes
- 2026-04-10 PASS 34 minutes
- 2026-04-11

### Error 2026-04-11T01:10:55+00:00
```
2026-04-11T01:10:55.5207537Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-04-11T01:10:55.5208201Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-3863897007995985614
2026-04-11T01:10:55.5208688Z     resource_test.go:25: 
2026-04-11T01:10:55.5211054Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:10:55.5212699Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:10:55.5214355Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:10:55.5215901Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-11T01:10:55.5218026Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:25
2026-04-11T01:10:55.5219143Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T01:10:55.5219635Z         	Error:      	Received unexpected error:
2026-04-11T01:10:55.5221357Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:10:55.5222351Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_basic
2026-04-11T01:10:55.5223986Z         	Messages:   	Project creation failed: test-acc-tf-p-3863897007995985614, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:10:55.5225121Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (64.53s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 25 minutes
- 2026-04-14 PASS 22 minutes
- 2026-04-15 PASS 26 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.8099385Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-04-16T01:05:00.8099986Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-5260229586641846239
2026-04-16T01:05:00.8102654Z === CONT  TestAccBackupRSCloudBackupSnapshot_basic
2026-04-16T01:05:00.8104109Z === NAME  TestAccBackupRSCloudBackupSnapshot_basic
2026-04-16T01:05:00.8105009Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:38.239388564Z, ProjectID: 69e032551ec945fedc71760a, Cluster name: test-acc-tf-c-3440309100597324190
2026-04-16T01:05:00.8118664Z   
2026-04-16T01:05:00.8119088Z     resource_test.go:30: Step 1/2 error: Error running apply: exit status 1
2026-04-16T01:05:00.8119481Z         
2026-04-16T01:05:00.8119766Z         Error: Error in create
2026-04-16T01:05:00.8120039Z         
2026-04-16T01:05:00.8120430Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T01:05:00.8121177Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T01:05:00.8121891Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T01:05:00.8122255Z         
2026-04-16T01:05:00.8122712Z         cluster name: test-acc-tf-c-3440309100597324190, API error details:
2026-04-16T01:05:00.8123421Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc71760a/clusters
2026-04-16T01:05:00.8124136Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.8124846Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.8125383Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8125799Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (9.81s)
```

- 2026-04-17 PASS 23 minutes
- 2026-04-18 PASS 29 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 20 minutes
- 2026-04-21 PASS 23 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 30 minutes
- 2026-04-24 PASS 24 minutes
- 2026-04-25 PASS 23 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 24 minutes
- 2026-04-28 PASS 23 minutes
- 2026-04-29 PASS 26 minutes
- 2026-04-30

### Error 2026-04-30T01:26:50+00:00
```
2026-04-30T01:26:50.4914142Z === RUN   TestAccBackupRSCloudBackupSnapshot_basic
2026-04-30T01:26:50.4914789Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-1996542651885082193
2026-04-30T01:26:50.4915307Z     resource_test.go:25: 
2026-04-30T01:26:50.4916260Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:26:50.4918155Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:26:50.4920046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:26:50.4921833Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-30T01:26:50.4924139Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:25
2026-04-30T01:26:50.4925396Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:26:50.4925927Z         	Error:      	Received unexpected error:
2026-04-30T01:26:50.4927938Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:26:50.4929051Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_basic
2026-04-30T01:26:50.4930897Z         	Messages:   	Project creation failed: test-acc-tf-p-1996542651885082193, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:26:50.4932384Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_basic (92.13s)
```

- 2026-05-01 PASS 24 minutes
- 2026-05-02 PASS 22 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 25 minutes
- 2026-05-05 PASS 32 minutes
- 2026-05-06 PASS 30 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 21 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 23 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 23 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 22 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 27 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 22 minutes
- 2026-05-04 PASS 19 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 24 minutes
