# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_biConnectorConfig Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 2)
Success rate: 94.44%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030430000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 05:58](#error-2025-09-01t0558460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 34 minutes
- 2025-08-07 PASS 46 minutes
- 2025-08-08 PASS 24 minutes
- 2025-08-09 PASS 29 minutes
- 2025-08-10 PASS 37 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 26 minutes
  - PASS 36 minutes
- 2025-08-13 PASS 27 minutes
- 2025-08-14 PASS 26 minutes
- 2025-08-15: MISSING
- 2025-08-16 PASS 54 minutes
- 2025-08-17 PASS 44 minutes
- 2025-08-18 PASS 36 minutes
- 2025-08-19 PASS 33 minutes
- 2025-08-20
  - PASS 28 minutes
  - PASS 25 minutes
- 2025-08-21 PASS 26 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 33 minutes
- 2025-08-24 PASS 18 minutes
- 2025-08-25 PASS 32 minutes
- 2025-08-26 PASS 41 minutes
- 2025-08-27 PASS 37 minutes
- 2025-08-28 PASS 30 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 32 minutes
- 2025-08-31 PASS 25 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:43+00:00
```
2025-09-01T00:30:43.6038277Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-09-01T00:30:43.7030926Z     shared_resource.go:93: 
2025-09-01T00:30:43.7032914Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:43.7035555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:43.7037803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:43.7040010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:43.7042094Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:43.7052422Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1126
2025-09-01T00:30:43.7053422Z         	Error:      	Received unexpected error:
2025-09-01T00:30:43.7056448Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.7057790Z         	Test:       	TestAccClusterAdvancedCluster_biConnectorConfig
2025-09-01T00:30:43.7060053Z         	Messages:   	Project creation failed: test-acc-tf-p-7913297351488132039, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:43.7061678Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (0.10s)
```

  - FAIL a moment

### Error 2025-09-01T05:58:46+00:00
```
2025-09-01T05:58:46.4200884Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-09-01T05:58:46.5656796Z     shared_resource.go:93: 
2025-09-01T05:58:46.5659202Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T05:58:46.5662420Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T05:58:46.5664997Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T05:58:46.5666880Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T05:58:46.5669152Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T05:58:46.5671175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1126
2025-09-01T05:58:46.5671994Z         	Error:      	Received unexpected error:
2025-09-01T05:58:46.5674665Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:46.5675954Z         	Test:       	TestAccClusterAdvancedCluster_biConnectorConfig
2025-09-01T05:58:46.5678280Z         	Messages:   	Project creation failed: test-acc-tf-p-5875616013146542027, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T05:58:46.5679829Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (0.15s)
```

  - PASS an hour
  - PASS 23 minutes
  - PASS 21 minutes
  - PASS 19 minutes
  - PASS 21 minutes
  - PASS 24 minutes
- 2025-09-02 PASS 28 minutes
- 2025-09-03 PASS 37 minutes
- 2025-09-04 PASS 32 minutes