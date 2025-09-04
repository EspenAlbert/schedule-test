# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_priorityNewSchema Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 15 minutes
- 2025-08-07 PASS 28 minutes
- 2025-08-08 PASS 25 minutes
- 2025-08-09 PASS 22 minutes
- 2025-08-10 PASS 24 minutes
- 2025-08-11 PASS 46 minutes
- 2025-08-12
  - PASS 17 minutes
  - PASS 13 minutes
- 2025-08-13 PASS 18 minutes
- 2025-08-14 PASS 16 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 41 minutes
- 2025-08-17 PASS 28 minutes
- 2025-08-18 PASS 19 minutes
- 2025-08-19 PASS 18 minutes
- 2025-08-20
  - PASS 18 minutes
  - PASS 18 minutes
- 2025-08-21 PASS 22 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 19 minutes
- 2025-08-24 PASS 15 minutes
- 2025-08-25 PASS 25 minutes
- 2025-08-26 PASS 19 minutes
- 2025-08-27 PASS 23 minutes
- 2025-08-28 PASS 17 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 17 minutes
- 2025-08-31 PASS 16 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.4829170Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-09-01T00:30:43.6015707Z     shared_resource.go:93: 
2025-09-01T00:30:43.6017360Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:43.6019867Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:43.6022269Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:43.6024304Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:43.6026490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:43.6028788Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1097
2025-09-01T00:30:43.6029749Z         	Error:      	Received unexpected error:
2025-09-01T00:30:43.6032610Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.6033968Z         	Test:       	TestAccClusterAdvancedCluster_priorityNewSchema
2025-09-01T00:30:43.6036330Z         	Messages:   	Project creation failed: test-acc-tf-p-2873858616630439157, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.6037794Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (0.12s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:46+00:00
```
2025-09-01T05:58:46.2520551Z === RUN   TestAccClusterAdvancedCluster_priorityNewSchema
2025-09-01T05:58:46.4176766Z     shared_resource.go:93: 
2025-09-01T05:58:46.4179401Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:46.4181731Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:46.4184046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:46.4186330Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:46.4188880Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:46.4191513Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1097
2025-09-01T05:58:46.4192609Z         	Error:      	Received unexpected error:
2025-09-01T05:58:46.4195349Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:46.4196685Z         	Test:       	TestAccClusterAdvancedCluster_priorityNewSchema
2025-09-01T05:58:46.4199058Z         	Messages:   	Project creation failed: test-acc-tf-p-9156065445548203964, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:46.4200472Z --- FAIL: TestAccClusterAdvancedCluster_priorityNewSchema (0.17s)
```

  - PASS an hour
  - PASS 19 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-09-02 PASS 17 minutes
- 2025-09-03 PASS 37 minutes
- 2025-09-04 PASS 21 minutes