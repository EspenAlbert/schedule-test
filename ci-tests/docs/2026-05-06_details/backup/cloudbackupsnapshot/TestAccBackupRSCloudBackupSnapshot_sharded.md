# backup/cloudbackupsnapshot/TestAccBackupRSCloudBackupSnapshot_sharded Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 04:08](#error-2026-04-07t0408390000) |  | dev | timeout | 12173.02s
[2026-04-16 01:05](#error-2026-04-16t0105000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032551ec945fedc71760a/clusters | dev | out_of_capacity | 16.02s
[2026-04-30 01:26](#error-2026-04-30t0126500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T04:08:39+00:00
```
2026-04-07T04:08:39.4108142Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-04-07T04:08:39.4112969Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2026-04-07T04:08:39.4120342Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-04-07T04:08:39.4122021Z     pre_check.go:46: Time before creating cluster: 2026-04-07T00:45:30.294492207Z, ProjectID: 69d45380425cee31650b20cb, Cluster name: test-acc-tf-c-8851203629906576958
2026-04-07T04:08:39.4124800Z   diagnostic_summary=
2026-04-07T04:08:39.4136475Z    tf_req_id=8da0cac0-eecf-93bc-e493-76002068740c tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.11 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_cloud_backup_snapshot diagnostic_detail=""
2026-04-07T04:08:39.4168344Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-04-07T04:08:39.4169484Z     resource_test.go:79: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:08:39.4170363Z         
2026-04-07T04:08:39.4170838Z         Error: Error in delete
2026-04-07T04:08:39.4171299Z         
2026-04-07T04:08:39.4172149Z         cluster=test-acc-tf-c-8851203629906576958 didn't reach desired state:
2026-04-07T04:08:39.4173365Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2026-04-07T04:08:39.4174227Z         state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:08:39.4175136Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (12173.20s)
```

- 2026-04-08 PASS 30 minutes
- 2026-04-09 PASS 39 minutes
- 2026-04-10 PASS 43 minutes
- 2026-04-11 PASS 27 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 35 minutes
- 2026-04-14 PASS 27 minutes
- 2026-04-15 PASS 29 minutes
- 2026-04-16

### Error 2026-04-16T01:05:00+00:00
```
2026-04-16T01:05:00.8100885Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-04-16T01:05:00.8103731Z === CONT  TestAccBackupRSCloudBackupSnapshot_sharded
2026-04-16T01:05:00.8149951Z === NAME  TestAccBackupRSCloudBackupSnapshot_sharded
2026-04-16T01:05:00.8150855Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:48.241873256Z, ProjectID: 69e032551ec945fedc71760a, Cluster name: test-acc-tf-c-5247406264573156878
2026-04-16T01:05:00.8164461Z   
2026-04-16T01:05:00.8164867Z     resource_test.go:79: Step 1/1 error: Error running apply: exit status 1
2026-04-16T01:05:00.8165265Z         
2026-04-16T01:05:00.8165543Z         Error: Error in create
2026-04-16T01:05:00.8165814Z         
2026-04-16T01:05:00.8166200Z           with mongodbatlas_advanced_cluster.my_cluster,
2026-04-16T01:05:00.8167054Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "my_cluster":
2026-04-16T01:05:00.8167757Z           12: 		resource "mongodbatlas_advanced_cluster" "my_cluster" {
2026-04-16T01:05:00.8168121Z         
2026-04-16T01:05:00.8168570Z         cluster name: test-acc-tf-c-5247406264573156878, API error details:
2026-04-16T01:05:00.8169268Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc71760a/clusters
2026-04-16T01:05:00.8169980Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T01:05:00.8170660Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T01:05:00.8171191Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T01:05:00.8171606Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (16.19s)
```

- 2026-04-17 PASS 29 minutes
- 2026-04-18 PASS 36 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 26 minutes
- 2026-04-21 PASS 33 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 33 minutes
- 2026-04-24 PASS 31 minutes
- 2026-04-25 PASS 28 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 32 minutes
- 2026-04-28 PASS 29 minutes
- 2026-04-29 PASS 32 minutes
- 2026-04-30

### Error 2026-04-30T01:26:50+00:00
```
2026-04-30T01:26:50.4932828Z === RUN   TestAccBackupRSCloudBackupSnapshot_sharded
2026-04-30T01:26:50.4933435Z     resource_test.go:73: Creating execution project (1): test-acc-tf-p-3821610529836032712
2026-04-30T01:26:50.4934132Z     resource_test.go:73: 
2026-04-30T01:26:50.4935061Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:26:50.4936936Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:26:50.4938851Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:26:50.4940868Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudbackupsnapshot/resource_test.go:73
2026-04-30T01:26:50.4941897Z         	Error:      	Received unexpected error:
2026-04-30T01:26:50.4944424Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:26:50.4945837Z         	Test:       	TestAccBackupRSCloudBackupSnapshot_sharded
2026-04-30T01:26:50.4947843Z         	Messages:   	Project creation failed: test-acc-tf-p-3821610529836032712, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:26:50.4949280Z --- FAIL: TestAccBackupRSCloudBackupSnapshot_sharded (61.82s)
```

- 2026-05-01 PASS 47 minutes
- 2026-05-02 PASS 27 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 29 minutes
- 2026-05-05 PASS 39 minutes
- 2026-05-06 PASS 37 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 27 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 28 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 26 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 29 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 33 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 30 minutes
- 2026-05-04 PASS 30 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 31 minutes
