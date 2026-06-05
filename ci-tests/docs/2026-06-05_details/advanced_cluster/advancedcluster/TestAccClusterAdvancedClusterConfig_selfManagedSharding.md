# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_selfManagedSharding Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-15 00:57](#error-2026-05-15t0057130000) |  | dev | timeout | 10807.03s
[2026-05-28 01:02](#error-2026-05-28t0102440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 43 minutes
- 2026-05-08 PASS 33 minutes
- 2026-05-09 PASS 27 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 23 minutes
- 2026-05-12 PASS 23 minutes
- 2026-05-13 PASS 25 minutes
- 2026-05-14 PASS 50 minutes
- 2026-05-15

### Error 2026-05-15T00:57:13+00:00
```
2026-05-15T00:57:13.5355405Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-05-15T00:58:38.0953182Z === CONT  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-05-15T03:58:44.1858028Z === NAME  TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-05-15T03:58:44.1859220Z     resource_test.go:612: Step 1/3 error: Error running apply: exit status 1
2026-05-15T03:58:44.1859796Z         
2026-05-15T03:58:44.1860229Z         Error: Error in create
2026-05-15T03:58:44.1860595Z         
2026-05-15T03:58:44.1860945Z           with mongodbatlas_advanced_cluster.test,
2026-05-15T03:58:44.1861834Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-15T03:58:44.1862718Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-15T03:58:44.1863050Z         
2026-05-15T03:58:44.1863531Z         cluster=test-acc-tf-c-5587702222473493450 didn't reach desired state: IDLE,
2026-05-15T03:58:44.1864014Z         error: context deadline exceeded
2026-05-15T03:58:44.2330110Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (10807.26s)
```

- 2026-05-16 PASS 19 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 40 minutes
- 2026-05-19 PASS 19 minutes
- 2026-05-20 PASS 22 minutes
- 2026-05-21 PASS 22 minutes
- 2026-05-22 PASS 47 minutes
- 2026-05-23 PASS 28 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 25 minutes
- 2026-05-26 PASS 24 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:02:44+00:00
```
2026-05-28T01:02:44.2477901Z === RUN   TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-05-28T01:02:44.4859954Z     shared_resource.go:160: 
2026-05-28T01:02:44.4861213Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:44.4863092Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:02:44.4864928Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:02:44.4866706Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:02:44.4869199Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:02:44.4871096Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:605
2026-05-28T01:02:44.4871929Z         	Error:      	Received unexpected error:
2026-05-28T01:02:44.4874792Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:44.4876422Z         	Test:       	TestAccClusterAdvancedClusterConfig_selfManagedSharding
2026-05-28T01:02:44.4878958Z         	Messages:   	Project creation failed: test-acc-tf-p-3377216833256489013, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:44.4880522Z --- FAIL: TestAccClusterAdvancedClusterConfig_selfManagedSharding (0.24s)
```

- 2026-05-29 PASS 25 minutes
- 2026-05-30 PASS 19 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 31 minutes
- 2026-06-02 PASS 19 minutes
- 2026-06-03 PASS 41 minutes
- 2026-06-04 PASS 42 minutes
- 2026-06-05 PASS 26 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 27 minutes
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
