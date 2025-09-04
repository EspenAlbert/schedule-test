# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558470000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 39 minutes
- 2025-08-07 PASS 59 minutes
- 2025-08-08 PASS 36 minutes
- 2025-08-09 PASS 42 minutes
- 2025-08-10 PASS an hour
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 37 minutes
  - PASS 29 minutes
- 2025-08-13 PASS 33 minutes
- 2025-08-14 PASS 41 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 51 minutes
- 2025-08-18 PASS 37 minutes
- 2025-08-19 PASS 38 minutes
- 2025-08-20
  - PASS 36 minutes
  - PASS an hour
- 2025-08-21 PASS 35 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 39 minutes
- 2025-08-24 PASS 28 minutes
- 2025-08-25 PASS 32 minutes
- 2025-08-26 PASS 41 minutes
- 2025-08-27 PASS 56 minutes
- 2025-08-28 PASS 38 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 37 minutes
- 2025-08-31 PASS 38 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:44+00:00
```
2025-09-01T00:30:44.0235532Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-09-01T00:30:44.1411824Z     shared_resource.go:93: 
2025-09-01T00:30:44.1413211Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:44.1415107Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:44.1417257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:44.1419130Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:44.1421297Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:44.1423262Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1340
2025-09-01T00:30:44.1424092Z         	Error:      	Received unexpected error:
2025-09-01T00:30:44.1426896Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:44.1428336Z         	Test:       	TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-09-01T00:30:44.1430642Z         	Messages:   	Project creation failed: test-acc-tf-p-8867495407787334951, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:44.1432159Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (0.12s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:47+00:00
```
2025-09-01T05:58:47.0598513Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-09-01T05:58:47.2155577Z     shared_resource.go:93: 
2025-09-01T05:58:47.2157719Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:47.2160097Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:47.2162229Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:47.2163944Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:47.2165637Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:47.2167693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1340
2025-09-01T05:58:47.2168508Z         	Error:      	Received unexpected error:
2025-09-01T05:58:47.2171178Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:47.2172551Z         	Test:       	TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2025-09-01T05:58:47.2174826Z         	Messages:   	Project creation failed: test-acc-tf-p-439259909047970369, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:47.2176318Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (0.16s)
```

  - PASS an hour
  - PASS 35 minutes
  - PASS 42 minutes
  - PASS 38 minutes
  - PASS 35 minutes
  - PASS 34 minutes
- 2025-09-02 PASS 38 minutes
- 2025-09-03 PASS 44 minutes
- 2025-09-04 PASS 39 minutes