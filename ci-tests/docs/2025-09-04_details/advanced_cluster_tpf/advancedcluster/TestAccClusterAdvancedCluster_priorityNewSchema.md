# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_priorityNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 3)
Success rate: 91.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-20 01:34](#error-2025-08-20t0134330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68a51679552c1710e1fb5b69/clusters | dev | out_of_capacity | 6.00s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2025-09-01 07:49](#error-2025-09-01t0749130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 16 minutes
- 2025-08-07 PASS 40 minutes
- 2025-08-08 PASS 20 minutes
- 2025-08-09 PASS 20 minutes
- 2025-08-10 PASS 40 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 18 minutes
  - PASS 13 minutes
- 2025-08-13 PASS 21 minutes
- 2025-08-14 PASS 21 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 43 minutes
- 2025-08-17 PASS 28 minutes
- 2025-08-18 PASS 18 minutes
- 2025-08-19 PASS 17 minutes
- 2025-08-20
  - FAIL 6 seconds

### Error 2025-08-20T01:34:33+00:00
```
2025-08-20T01:34:33.2732783Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-08-20T01:34:33.2774644Z === CONT  TestAccClusterAdvancedCluster_priorityNewSchema
2025-08-20T01:34:33.2800684Z === NAME  TestAccClusterAdvancedCluster_priorityNewSchema
2025-08-20T01:34:33.2801490Z     resource_advanced_cluster_test.go:1097: Step 2/4 error: Error running apply: exit status 1
2025-08-20T01:34:33.2801905Z         
2025-08-20T01:34:33.2802154Z         Error: Error in create
2025-08-20T01:34:33.2802394Z         
2025-08-20T01:34:33.2802712Z           with mongodbatlas_advanced_cluster.test,
2025-08-20T01:34:33.2803345Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-20T01:34:33.2803931Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-20T01:34:33.2804232Z         
2025-08-20T01:34:33.2804647Z         cluster name: test-acc-tf-c-6652087563630322485, API error details:
2025-08-20T01:34:33.2805308Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a51679552c1710e1fb5b69/clusters
2025-08-20T01:34:33.2805977Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-08-20T01:34:33.2806608Z         region is currently out of capacity for the requested instance size. Reason:
2025-08-20T01:34:33.2807087Z         Conflict. Params: [], BadRequestDetail: 
2025-08-20T01:34:33.2807475Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (6.00s)
```

  - PASS 21 minutes
- 2025-08-21 PASS 18 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 23 minutes
- 2025-08-24 PASS 15 minutes
- 2025-08-25 PASS 31 minutes
- 2025-08-26 PASS 30 minutes
- 2025-08-27 PASS 26 minutes
- 2025-08-28 PASS 16 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 17 minutes
- 2025-08-31 PASS 18 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7360186Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-09-01T00:30:49.7360562Z     shared_resource.go:93: 
2025-09-01T00:30:49.7361694Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7363407Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7365124Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7366813Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7368661Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7370607Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1097
2025-09-01T00:30:49.7371642Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7374271Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7375570Z         	Test:       	TestAccClusterAdvancedCluster_priorityNewSchema
2025-09-01T00:30:49.7377755Z         	Messages:   	Project creation failed: test-acc-tf-p-112495922839604274, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7379184Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (0.17s)
```

  - FAIL a moment

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6659017Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-09-01T07:49:13.6659554Z     shared_resource.go:93: 
2025-09-01T07:49:13.6660494Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T07:49:13.6662379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T07:49:13.6664136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T07:49:13.6665879Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T07:49:13.6667616Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T07:49:13.6669825Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1097
2025-09-01T07:49:13.6670661Z         	Error:      	Received unexpected error:
2025-09-01T07:49:13.6673374Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T07:49:13.6674693Z         	Test:       	TestAccClusterAdvancedCluster_priorityNewSchema
2025-09-01T07:49:13.6676948Z         	Messages:   	Project creation failed: test-acc-tf-p-3655360719756860541, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T07:49:13.6678392Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (0.11s)
```

  - PASS an hour
  - PASS 18 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-09-02 PASS 17 minutes
- 2025-09-03 PASS 33 minutes
- 2025-09-04 PASS 22 minutes