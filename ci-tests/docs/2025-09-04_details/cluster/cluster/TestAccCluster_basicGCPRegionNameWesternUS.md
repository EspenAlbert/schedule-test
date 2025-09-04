# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-15 00:30](#error-2025-08-15t0030110000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/689e7f9235dc4c7be808dd71/clusters | dev | out_of_capacity | 2.07s
[2025-08-30 00:26](#error-2025-08-30t0026040000) |  | dev | timeout | 10802.05s
[2025-09-01 00:30](#error-2025-09-01t0030200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 19 minutes
- 2025-08-07 PASS 23 minutes
- 2025-08-08 PASS 18 minutes
- 2025-08-09 PASS 21 minutes
- 2025-08-10 PASS 28 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 31 minutes
  - PASS 15 minutes
- 2025-08-13 PASS 34 minutes
- 2025-08-14 PASS 25 minutes
- 2025-08-15

### Error 2025-08-15T00:30:11+00:00
```
2025-08-15T00:30:11.9937149Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-08-15T00:30:11.9953951Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-08-15T00:30:14.6090627Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-08-15T00:30:14.6091369Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-08-15T00:30:14.6091832Z         
2025-08-15T00:30:14.6093292Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/689e7f9235dc4c7be808dd71/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-08-15T00:30:14.6094457Z         
2025-08-15T00:30:14.6094937Z           with mongodbatlas_cluster.test,
2025-08-15T00:30:14.6095659Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-08-15T00:30:14.6096198Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-08-15T00:30:14.6096508Z         
2025-08-15T00:30:14.6671407Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.67s)
```

- 2025-08-16 PASS 49 minutes
- 2025-08-17 PASS 39 minutes
- 2025-08-18 PASS 23 minutes
- 2025-08-19 PASS 20 minutes
- 2025-08-20
  - PASS 19 minutes
  - PASS 16 minutes
- 2025-08-21 PASS 17 minutes
- 2025-08-22 PASS 14 minutes
- 2025-08-23 PASS 20 minutes
- 2025-08-24 PASS 13 minutes
- 2025-08-25 PASS 15 minutes
- 2025-08-26 PASS 32 minutes
- 2025-08-27 PASS 34 minutes
- 2025-08-28 PASS 18 minutes
- 2025-08-29 PASS 30 minutes
- 2025-08-30

### Error 2025-08-30T00:26:04+00:00
```
2025-08-30T00:26:04.3029025Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-08-30T00:26:04.3178477Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-08-30T03:26:06.8021262Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-08-30T03:26:06.8022177Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-08-30T03:26:06.8022822Z         
2025-08-30T03:26:06.8024237Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-30T03:26:06.8025138Z         
2025-08-30T03:26:06.8025639Z           with mongodbatlas_cluster.test,
2025-08-30T03:26:06.8026599Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-08-30T03:26:06.8027474Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-08-30T03:26:06.8027933Z         
2025-08-30T03:26:06.8491678Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.53s)
```

- 2025-08-31 PASS 26 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.0195218Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-09-01T00:30:20.1330234Z     shared_resource.go:93: 
2025-09-01T00:30:20.1332248Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:20.1334472Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:20.1336695Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:20.1338798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:20.1340807Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:20.1343024Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1084
2025-09-01T00:30:20.1343902Z         	Error:      	Received unexpected error:
2025-09-01T00:30:20.1347013Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.1348372Z         	Test:       	TestAccCluster_basicGCPRegionNameWesternUS
2025-09-01T00:30:20.1350589Z         	Messages:   	Project creation failed: test-acc-tf-p-8254792166678664979, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.1352091Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (0.12s)
```

  - PASS an hour
  - PASS an hour
  - PASS 24 minutes
  - PASS 15 minutes
  - PASS 18 minutes
  - PASS 17 minutes
  - PASS 18 minutes
- 2025-09-02 PASS 20 minutes
- 2025-09-03 PASS 17 minutes
- 2025-09-04 PASS 23 minutes