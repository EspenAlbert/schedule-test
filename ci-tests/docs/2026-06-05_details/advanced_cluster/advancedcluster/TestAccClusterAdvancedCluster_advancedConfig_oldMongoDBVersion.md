# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:03](#error-2026-05-09t0103240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.04s
[2026-05-15 00:57](#error-2026-05-15t0057110000) |  | dev | timeout | 10816.00s
[2026-05-28 01:01](#error-2026-05-28t0101290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 46 minutes
- 2026-05-08 PASS 26 minutes
- 2026-05-09

### Error 2026-05-09T01:03:24+00:00
```
2026-05-09T01:03:24.7326564Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-05-09T01:04:41.1686174Z     shared_resource.go:160: 
2026-05-09T01:04:41.1687796Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:04:41.1690656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T01:04:41.1694150Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T01:04:41.1697440Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T01:04:41.1700437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T01:04:41.1703609Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:275
2026-05-09T01:04:41.1705062Z         	Error:      	Received unexpected error:
2026-05-09T01:04:41.1708336Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:04:41.1710336Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-05-09T01:04:41.1713413Z         	Messages:   	Project creation failed: test-acc-tf-p-491043241169994329, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:04:41.1715676Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (76.44s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 30 minutes
- 2026-05-12 PASS 25 minutes
- 2026-05-13 PASS 25 minutes
- 2026-05-14 PASS 47 minutes
- 2026-05-15

### Error 2026-05-15T00:57:11+00:00
```
2026-05-15T00:57:11.8551790Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-05-15T00:58:37.0231122Z === CONT  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-05-15T00:58:52.0045248Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-05-15T00:58:52.0046970Z     pre_check.go:46: Time before creating cluster: 2026-05-15T00:58:52.00419624Z, ProjectID: 6a066f64bf5881c97de662d8, Cluster name: test-acc-tf-c-3901535123624146794
2026-05-15T03:58:52.9236701Z === NAME  TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-05-15T03:58:52.9237649Z     resource_test.go:294: Step 2/3 error: Error running apply: exit status 1
2026-05-15T03:58:52.9238210Z         
2026-05-15T03:58:52.9238803Z         Error: Error in create
2026-05-15T03:58:52.9239490Z         
2026-05-15T03:58:52.9239990Z           with mongodbatlas_advanced_cluster.test,
2026-05-15T03:58:52.9240816Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-15T03:58:52.9241454Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-15T03:58:52.9241771Z         
2026-05-15T03:58:52.9242302Z         cluster=test-acc-tf-c-3901535123624146794 didn't reach desired state: IDLE,
2026-05-15T03:58:52.9243032Z         error: context deadline exceeded
2026-05-15T03:58:52.9744948Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (10816.03s)
```

- 2026-05-16 PASS 22 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 39 minutes
- 2026-05-19 PASS 23 minutes
- 2026-05-20 PASS 29 minutes
- 2026-05-21 PASS 24 minutes
- 2026-05-22 PASS 43 minutes
- 2026-05-23 PASS 31 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 28 minutes
- 2026-05-26 PASS 25 minutes
- 2026-05-27 PASS 54 minutes
- 2026-05-28

### Error 2026-05-28T01:01:29+00:00
```
2026-05-28T01:01:29.7985980Z === RUN   TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-05-28T01:01:30.8145855Z     shared_resource.go:160: 
2026-05-28T01:01:30.8147051Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:30.8149135Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:30.8151369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:30.8153166Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:30.8154923Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:30.8156790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:276
2026-05-28T01:01:30.8157719Z         	Error:      	Received unexpected error:
2026-05-28T01:01:30.8160576Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:30.8162267Z         	Test:       	TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion
2026-05-28T01:01:30.8164704Z         	Messages:   	Project creation failed: test-acc-tf-p-2790479943753077404, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:30.8166283Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig_oldMongoDBVersion (1.02s)
```

- 2026-05-29 PASS 29 minutes
- 2026-05-30 PASS 21 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 34 minutes
- 2026-06-02 PASS 20 minutes
- 2026-06-03 PASS 42 minutes
- 2026-06-04 PASS 46 minutes
- 2026-06-05 PASS 26 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 28 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 26 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 25 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 22 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
