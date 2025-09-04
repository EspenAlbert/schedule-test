# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s
[2025-09-01 11:01](#error-2025-09-01t1101140000) | DUPLICATE_CLUSTER_NAME /api/atlas/v2/groups/68b551fbe551ff23b4098ade/clusters | dev | 127.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 18 minutes
- 2025-08-07 PASS 42 minutes
- 2025-08-08 PASS 32 minutes
- 2025-08-09 PASS 24 minutes
- 2025-08-10 PASS 30 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-08-13 PASS 25 minutes
- 2025-08-14 PASS 34 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 55 minutes
- 2025-08-17 PASS 31 minutes
- 2025-08-18 PASS 31 minutes
- 2025-08-19 PASS 25 minutes
- 2025-08-20
  - PASS 26 minutes
  - PASS 22 minutes
- 2025-08-21 PASS 21 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 23 minutes
- 2025-08-24 PASS 18 minutes
- 2025-08-25 PASS 17 minutes
- 2025-08-26 PASS 38 minutes
- 2025-08-27 PASS 23 minutes
- 2025-08-28 PASS 23 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 23 minutes
- 2025-08-31 PASS 25 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7498447Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-09-01T00:30:49.7498876Z     shared_resource.go:93: 
2025-09-01T00:30:49.7499737Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7501560Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7503411Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7505111Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7506813Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7508758Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1414
2025-09-01T00:30:49.7509577Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7512425Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7513828Z         	Test:       	TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-09-01T00:30:49.7516072Z         	Messages:   	Project creation failed: test-acc-tf-p-497194837627186804, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7517561Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (0.16s)
```

  - PASS an hour
  - FAIL 2 minutes

### Error 2025-09-01T11:01:14+00:00
```
2025-09-01T11:01:14.4506760Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-09-01T11:01:14.4542947Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-09-01T11:01:14.4691863Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-09-01T11:01:14.4692509Z     resource_advanced_cluster_test.go:1434: Step 2/6 error: Error running apply: exit status 1
2025-09-01T11:01:14.4692921Z         
2025-09-01T11:01:14.4693163Z         Error: Error in create
2025-09-01T11:01:14.4693397Z         
2025-09-01T11:01:14.4693712Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T11:01:14.4694343Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T11:01:14.4694926Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T11:01:14.4695231Z         
2025-09-01T11:01:14.4695770Z         cluster name: test-acc-tf-c-5481847374693773244, API error details:
2025-09-01T11:01:14.4696469Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551fbe551ff23b4098ade/clusters
2025-09-01T11:01:14.4697137Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2025-09-01T11:01:14.4697749Z         cluster or serverless instance named test-acc-tf-c-5481847374693773244 is
2025-09-01T11:01:14.4698349Z         already present in group 68b551fbe551ff23b4098ade. Reason: Bad Request.
2025-09-01T11:01:14.4698947Z         Params: [cluster or serverless instance test-acc-tf-c-5481847374693773244
2025-09-01T11:01:14.4699430Z         68b551fbe551ff23b4098ade], BadRequestDetail: 
2025-09-01T11:01:14.4700026Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (127.94s)
```

  - PASS 18 minutes
  - PASS 31 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-09-02 PASS 24 minutes
- 2025-09-03 PASS 33 minutes
- 2025-09-04 PASS 27 minutes