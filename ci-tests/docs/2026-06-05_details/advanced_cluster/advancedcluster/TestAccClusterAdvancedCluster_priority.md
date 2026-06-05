# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priority Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-15 00:57](#error-2026-05-15t0057150000) |  | dev | 160.03s
[2026-05-28 01:02](#error-2026-05-28t0102450000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 32 minutes
- 2026-05-08 PASS 20 minutes
- 2026-05-09 PASS 22 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 21 minutes
- 2026-05-12 PASS 21 minutes
- 2026-05-13 PASS 16 minutes
- 2026-05-14 PASS 47 minutes
- 2026-05-15

### Error 2026-05-15T00:57:15+00:00
```
2026-05-15T00:57:15.5974966Z === RUN   TestAccClusterAdvancedCluster_priority
2026-05-15T00:58:38.0010039Z === CONT  TestAccClusterAdvancedCluster_priority
2026-05-15T01:01:17.2037395Z === NAME  TestAccClusterAdvancedCluster_priority
2026-05-15T01:01:17.2038219Z     resource_test.go:818: Step 2/4 error: Error running apply: exit status 1
2026-05-15T01:01:17.2039032Z         
2026-05-15T01:01:17.2039428Z         Error: Error in create
2026-05-15T01:01:17.2039881Z         
2026-05-15T01:01:17.2040423Z           with mongodbatlas_advanced_cluster.test,
2026-05-15T01:01:17.2041379Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-15T01:01:17.2042213Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-15T01:01:17.2043166Z         
2026-05-15T01:01:17.2044114Z         cluster=test-acc-tf-c-5906365114398252509 didn't reach desired state: IDLE,
2026-05-15T01:01:17.2044841Z         error:
2026-05-15T01:01:17.2046099Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f69bf5881c97de68a2e/clusters/test-acc-tf-c-5906365114398252509
2026-05-15T01:01:17.2047784Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-15T01:01:17.2048491Z         BadRequestDetail: 
2026-05-15T01:01:17.2573748Z --- FAIL: TestAccClusterAdvancedCluster_priority (160.28s)
```

- 2026-05-16 PASS 15 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 29 minutes
- 2026-05-19 PASS 14 minutes
- 2026-05-20 PASS 16 minutes
- 2026-05-21 PASS 17 minutes
- 2026-05-22 PASS 30 minutes
- 2026-05-23 PASS 27 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 18 minutes
- 2026-05-26 PASS 17 minutes
- 2026-05-27 PASS 54 minutes
- 2026-05-28

### Error 2026-05-28T01:02:45+00:00
```
2026-05-28T01:02:45.7461157Z === RUN   TestAccClusterAdvancedCluster_priority
2026-05-28T01:02:46.1589491Z     shared_resource.go:160: 
2026-05-28T01:02:46.1590698Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:46.1592560Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:02:46.1594401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:02:46.1596221Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:02:46.1598270Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:02:46.1600208Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:818
2026-05-28T01:02:46.1601059Z         	Error:      	Received unexpected error:
2026-05-28T01:02:46.1603999Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:46.1605852Z         	Test:       	TestAccClusterAdvancedCluster_priority
2026-05-28T01:02:46.1608360Z         	Messages:   	Project creation failed: test-acc-tf-p-2484312218112234981, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:46.1609882Z --- FAIL: TestAccClusterAdvancedCluster_priority (0.42s)
```

- 2026-05-29 PASS 15 minutes
- 2026-05-30 PASS 14 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 29 minutes
- 2026-06-02 PASS 15 minutes
- 2026-06-03 PASS 38 minutes
- 2026-06-04 PASS 38 minutes
- 2026-06-05 PASS 19 minutes

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
- 2026-05-17 PASS 15 minutes
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
- 2026-05-31 PASS 17 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
