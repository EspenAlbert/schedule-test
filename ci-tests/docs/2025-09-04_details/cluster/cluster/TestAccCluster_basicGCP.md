# cluster/cluster/TestAccCluster_basicGCP Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-30 00:25](#error-2025-08-30t0025590000) |  | dev | timeout | 10802.06s
[2025-09-01 00:30](#error-2025-09-01t0030180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 19 minutes
- 2025-08-07 PASS 26 minutes
- 2025-08-08 PASS 27 minutes
- 2025-08-09 PASS 29 minutes
- 2025-08-10 PASS 29 minutes
- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 33 minutes
  - PASS 16 minutes
- 2025-08-13 PASS 22 minutes
- 2025-08-14 PASS 22 minutes
- 2025-08-15 PASS 17 minutes
- 2025-08-16 PASS 46 minutes
- 2025-08-17 PASS 28 minutes
- 2025-08-18 PASS 29 minutes
- 2025-08-19 PASS 20 minutes
- 2025-08-20
  - PASS 20 minutes
  - PASS 18 minutes
- 2025-08-21 PASS 23 minutes
- 2025-08-22 PASS 19 minutes
- 2025-08-23 PASS 23 minutes
- 2025-08-24 PASS 17 minutes
- 2025-08-25 PASS 30 minutes
- 2025-08-26 PASS 22 minutes
- 2025-08-27 PASS 32 minutes
- 2025-08-28 PASS 25 minutes
- 2025-08-29 PASS 33 minutes
- 2025-08-30

### Error 2025-08-30T00:25:59+00:00
```
2025-08-30T00:25:59.0845219Z === RUN   TestAccCluster_basicGCP
2025-08-30T00:26:04.3067994Z === CONT  TestAccCluster_basicGCP
2025-08-30T03:26:06.8650023Z === NAME  TestAccCluster_basicGCP
2025-08-30T03:26:06.8650719Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2025-08-30T03:26:06.8651119Z         
2025-08-30T03:26:06.8651991Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-30T03:26:06.8652641Z         
2025-08-30T03:26:06.8653158Z           with mongodbatlas_cluster.basic_gcp,
2025-08-30T03:26:06.8653927Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-08-30T03:26:06.8654529Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-08-30T03:26:06.8654913Z         
2025-08-30T03:26:06.9155714Z --- FAIL: TestAccCluster_basicGCP (10802.61s)
```

- 2025-08-31 PASS 27 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:18+00:00
```
2025-09-01T00:30:18.9241892Z === RUN   TestAccCluster_basicGCP
2025-09-01T00:30:19.0485534Z     shared_resource.go:93: 
2025-09-01T00:30:19.0487119Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:19.0489178Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:19.0491251Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:19.0493437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:19.0495793Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:19.0497846Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:371
2025-09-01T00:30:19.0498624Z         	Error:      	Received unexpected error:
2025-09-01T00:30:19.0501364Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:19.0502712Z         	Test:       	TestAccCluster_basicGCP
2025-09-01T00:30:19.0504963Z         	Messages:   	Project creation failed: test-acc-tf-p-4326430551261724466, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:19.0506337Z --- FAIL: TestAccCluster_basicGCP (0.13s)
```

  - PASS an hour
  - PASS an hour
  - PASS 20 minutes
  - PASS 31 minutes
  - PASS 20 minutes
  - PASS 19 minutes
  - PASS 20 minutes
- 2025-09-02 PASS 23 minutes
- 2025-09-03 PASS 31 minutes
- 2025-09-04 PASS 19 minutes