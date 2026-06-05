# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_defaultWrite Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:05](#error-2026-05-09t0105570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.08s
[2026-05-18 01:00](#error-2026-05-18t0100370000) |  | dev | flaky_500 | 1218.02s
[2026-05-28 01:01](#error-2026-05-28t0101320000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS 52 minutes
- 2026-05-09

### Error 2026-05-09T01:05:57+00:00
```
2026-05-09T01:05:57.1242728Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-05-09T01:07:44.8815846Z     shared_resource.go:160: 
2026-05-09T01:07:44.8817019Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:44.8818763Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-09T01:07:44.8823080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-09T01:07:44.8825213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-09T01:07:44.8826980Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-09T01:07:44.8828806Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:373
2026-05-09T01:07:44.8829583Z         	Error:      	Received unexpected error:
2026-05-09T01:07:44.8831502Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:44.8832563Z         	Test:       	TestAccClusterAdvancedCluster_defaultWrite
2026-05-09T01:07:44.8834250Z         	Messages:   	Project creation failed: test-acc-tf-p-754914816832835105, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:44.8835498Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (107.76s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 50 minutes
- 2026-05-12 PASS 49 minutes
- 2026-05-13 PASS 45 minutes
- 2026-05-14 PASS an hour
- 2026-05-15 PASS 41 minutes
- 2026-05-16 PASS 35 minutes
- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:00:37+00:00
```
2026-05-18T01:00:37.1226790Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-05-18T01:02:22.1415300Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2026-05-18T01:03:26.4682365Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-05-18T01:03:26.4683618Z     pre_check.go:46: Time before creating cluster: 2026-05-18T01:03:26.467880221Z, ProjectID: 6a0a64b56fb087b449da62b3, Cluster name: test-acc-tf-c-3060370570049051206
2026-05-18T01:22:36.5965641Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-05-18T01:22:36.5966357Z     resource_test.go:396: Step 1/3 error: Error running apply: exit status 1
2026-05-18T01:22:36.5966900Z         
2026-05-18T01:22:36.5967209Z         Error: Error in create
2026-05-18T01:22:36.5967500Z         
2026-05-18T01:22:36.5967873Z           with mongodbatlas_advanced_cluster.test,
2026-05-18T01:22:36.5968577Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-18T01:22:36.5969235Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-05-18T01:22:36.5969582Z         
2026-05-18T01:22:36.5970070Z         cluster=test-acc-tf-c-3060370570049051206 didn't reach desired state: IDLE,
2026-05-18T01:22:36.5970780Z         error:
2026-05-18T01:22:36.5971527Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0a64b56fb087b449da62b3/clusters/test-acc-tf-c-3060370570049051206
2026-05-18T01:22:36.5972748Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-18T01:22:36.5973242Z         BadRequestDetail: 
2026-05-18T01:22:36.6484448Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (1218.18s)
```

- 2026-05-19 PASS 38 minutes
- 2026-05-20 PASS 47 minutes
- 2026-05-21 PASS 58 minutes
- 2026-05-22 PASS an hour
- 2026-05-23 PASS 49 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 48 minutes
- 2026-05-26 PASS 37 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:01:32+00:00
```
2026-05-28T01:01:32.3375976Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-05-28T01:01:32.9916930Z     shared_resource.go:160: 
2026-05-28T01:01:32.9918398Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:32.9920623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:32.9922908Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:32.9924971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:32.9927266Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:32.9929410Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:374
2026-05-28T01:01:32.9930243Z         	Error:      	Received unexpected error:
2026-05-28T01:01:32.9933141Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:32.9934598Z         	Test:       	TestAccClusterAdvancedCluster_defaultWrite
2026-05-28T01:01:32.9936957Z         	Messages:   	Project creation failed: test-acc-tf-p-7317255820080262369, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:32.9938596Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (0.66s)
```

- 2026-05-29 PASS 54 minutes
- 2026-05-30 PASS 35 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 35 minutes
- 2026-06-03 PASS an hour
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 45 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 42 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 38 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 38 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 35 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
