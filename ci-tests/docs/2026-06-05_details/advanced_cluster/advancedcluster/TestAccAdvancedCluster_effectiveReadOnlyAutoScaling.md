# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveReadOnlyAutoScaling Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 3)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-18 01:00](#error-2026-05-18t0100300000) |  | dev |  | 1791.01s
[2026-05-28 01:01](#error-2026-05-28t0101140000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.10s
[2026-06-02 01:15](#error-2026-06-02t0115590000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a1e2ea533704dfc263f6ab1/clusters | dev | out_of_capacity | 5.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 43 minutes
- 2026-05-08 PASS 20 minutes
- 2026-05-09 PASS 26 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 23 minutes
- 2026-05-12 PASS 21 minutes
- 2026-05-13 PASS 19 minutes
- 2026-05-14 PASS 54 minutes
- 2026-05-15 PASS 22 minutes
- 2026-05-16 PASS 18 minutes
- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:00:30+00:00
```
2026-05-18T01:00:30.3674249Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-05-18T01:02:22.3376786Z === CONT  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-05-18T01:22:35.9969863Z === NAME  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-05-18T01:22:35.9970674Z     effective_fields_test.go:242: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2026-05-18T01:22:35.9971241Z         
2026-05-18T01:22:35.9971823Z         Error: error reading Advanced Configuration
2026-05-18T01:22:35.9972244Z         
2026-05-18T01:22:35.9972616Z           with data.mongodbatlas_advanced_clusters.test,
2026-05-18T01:22:35.9973701Z           on terraform_plugin_test.tf line 53, in data "mongodbatlas_advanced_clusters" "test":
2026-05-18T01:22:35.9974528Z           53: 		data "mongodbatlas_advanced_clusters" "test" {
2026-05-18T01:22:35.9974867Z         
2026-05-18T01:22:35.9975311Z         cluster name: test-acc-tf-c-2691026862114348095, API error details:
2026-05-18T01:22:35.9976272Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0a64ab6fb087b449da01ac/clusters/test-acc-tf-c-2691026862114348095/processArgs
2026-05-18T01:22:35.9977133Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-18T01:22:35.9977584Z         BadRequestDetail: 
2026-05-18T01:22:36.0207360Z   
2026-05-18T01:32:12.5761017Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (1791.06s)
```

- 2026-05-19 PASS 19 minutes
- 2026-05-20 PASS 23 minutes
- 2026-05-21 PASS 22 minutes
- 2026-05-22 PASS 38 minutes
- 2026-05-23 PASS 28 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 28 minutes
- 2026-05-26 PASS 22 minutes
- 2026-05-27 PASS 59 minutes
- 2026-05-28

### Error 2026-05-28T01:01:14+00:00
```
2026-05-28T01:01:14.5792453Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-05-28T01:01:15.5348083Z     shared_resource.go:160: 
2026-05-28T01:01:15.5349428Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:15.5351262Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:01:15.5353082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:01:15.5354897Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:01:15.5357114Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:01:15.5359309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:356
2026-05-28T01:01:15.5361362Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:239
2026-05-28T01:01:15.5362201Z         	Error:      	Received unexpected error:
2026-05-28T01:01:15.5365047Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:15.5366814Z         	Test:       	TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-05-28T01:01:15.5369455Z         	Messages:   	Project creation failed: test-acc-tf-p-6303147128747272383, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:15.5371024Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (0.96s)
```

- 2026-05-29 PASS 21 minutes
- 2026-05-30 PASS 18 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 42 minutes
- 2026-06-02

### Error 2026-06-02T01:15:59+00:00
```
2026-06-02T01:15:59.2019159Z === RUN   TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-06-02T01:17:32.0581013Z === CONT  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-06-02T01:17:36.6317283Z === NAME  TestAccAdvancedCluster_effectiveReadOnlyAutoScaling
2026-06-02T01:17:36.6318690Z     effective_fields_test.go:242: Step 1/2 error: Error running apply: exit status 1
2026-06-02T01:17:36.6319773Z         
2026-06-02T01:17:36.6320574Z         Error: Error in create
2026-06-02T01:17:36.6321486Z         
2026-06-02T01:17:36.6322192Z           with mongodbatlas_advanced_cluster.test,
2026-06-02T01:17:36.6324235Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-06-02T01:17:36.6325914Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-06-02T01:17:36.6326899Z         
2026-06-02T01:17:36.6328069Z         cluster name: test-acc-tf-c-5203764250732887518, API error details:
2026-06-02T01:17:36.6330067Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a1e2ea533704dfc263f6ab1/clusters
2026-06-02T01:17:36.6331699Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-06-02T01:17:36.6333032Z         region is currently out of capacity for the requested instance size. Reason:
2026-06-02T01:17:36.6334109Z         Conflict. Params: [], BadRequestDetail: 
2026-06-02T01:17:36.7136693Z --- FAIL: TestAccAdvancedCluster_effectiveReadOnlyAutoScaling (5.31s)
```

- 2026-06-03 PASS 38 minutes
- 2026-06-04 PASS 46 minutes
- 2026-06-05 PASS 26 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 26 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 16 minutes
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
- 2026-05-31 PASS 17 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
