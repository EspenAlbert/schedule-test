# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 29) FAIL(x 10)
Success rate: 74.36%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 00:33](#error-2025-08-10t0033040000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6897e8bedacc1950586da239/clusters | qa | out_of_capacity | 2.06s
[2025-08-20 00:27](#error-2025-08-20t0027070000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68a51659552c1710e1fab4e8/clusters | dev | out_of_capacity | 2.05s
[2025-08-20 13:58](#error-2025-08-20t1358350000) |  | qa | timeout | 10802.07s
[2025-08-22 00:27](#error-2025-08-22t0027470000) |  | dev | timeout | 10802.07s
[2025-08-23 00:26](#error-2025-08-23t0026440000) |  | dev | timeout | 10802.08s
[2025-08-24 00:30](#error-2025-08-24t0030350000) |  | qa | timeout | 10802.08s
[2025-08-25 00:28](#error-2025-08-25t0028580000) |  | dev | timeout | 10802.07s
[2025-08-26 00:27](#error-2025-08-26t0027260000) |  | dev | timeout | 10802.07s
[2025-08-30 00:26](#error-2025-08-30t0026040000) |  | dev | timeout | 10802.05s
[2025-09-01 00:30](#error-2025-09-01t0030200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 27 minutes
- 2025-08-07 PASS 20 minutes
- 2025-08-08 PASS 18 minutes
- 2025-08-09 PASS 20 minutes
- 2025-08-10

### Error 2025-08-10T00:33:04+00:00
```
2025-08-10T00:33:04.0506110Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-08-10T00:33:04.0743042Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-10T00:33:06.5769477Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-10T00:33:06.5770255Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-08-10T00:33:06.5770682Z         
2025-08-10T00:33:06.5772207Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/6897e8bedacc1950586da239/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-08-10T00:33:06.5773393Z         
2025-08-10T00:33:06.5773785Z           with mongodbatlas_cluster.test,
2025-08-10T00:33:06.5774635Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-08-10T00:33:06.5775412Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-08-10T00:33:06.5775697Z         
2025-08-10T00:33:06.6276980Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.56s)
```

- 2025-08-11 PASS an hour
- 2025-08-12
  - PASS 31 minutes
  - PASS 16 minutes
- 2025-08-13 PASS 34 minutes
- 2025-08-14 PASS 17 minutes
- 2025-08-15 PASS 19 minutes
- 2025-08-16 PASS 44 minutes
- 2025-08-17 PASS 39 minutes
- 2025-08-18 PASS 20 minutes
- 2025-08-19 PASS 18 minutes
- 2025-08-20
  - FAIL 2 seconds

### Error 2025-08-20T00:27:07+00:00
```
2025-08-20T00:27:07.1898707Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-08-20T00:27:07.1915398Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-20T00:27:09.6509492Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-20T00:27:09.6510212Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-08-20T00:27:09.6510738Z         
2025-08-20T00:27:09.6512341Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68a51659552c1710e1fab4e8/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-08-20T00:27:09.6513464Z         
2025-08-20T00:27:09.6513844Z           with mongodbatlas_cluster.test,
2025-08-20T00:27:09.6514829Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-08-20T00:27:09.6515359Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-08-20T00:27:09.6515641Z         
2025-08-20T00:27:09.6951745Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.50s)
```

  - FAIL 3 hours

### Error 2025-08-20T13:58:35+00:00
```
2025-08-20T13:58:35.3836518Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-08-20T13:58:35.3926196Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-20T16:58:38.0405158Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-20T16:58:38.0406193Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-08-20T16:58:38.0406974Z         
2025-08-20T16:58:38.0408664Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-20T16:58:38.0409424Z         
2025-08-20T16:58:38.0409717Z           with mongodbatlas_cluster.test,
2025-08-20T16:58:38.0410331Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-08-20T16:58:38.0410934Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-08-20T16:58:38.0411441Z         
2025-08-20T16:58:38.0875112Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.70s)
```

- 2025-08-21 PASS 34 minutes
- 2025-08-22

### Error 2025-08-22T00:27:47+00:00
```
2025-08-22T00:27:47.1575324Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-08-22T00:27:47.1636400Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-22T03:27:49.8223420Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-22T03:27:49.8224366Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-08-22T03:27:49.8225032Z         
2025-08-22T03:27:49.8226302Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-22T03:27:49.8227237Z         
2025-08-22T03:27:49.8227740Z           with mongodbatlas_cluster.test,
2025-08-22T03:27:49.8228525Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-08-22T03:27:49.8229063Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-08-22T03:27:49.8229348Z         
2025-08-22T03:27:49.8744111Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.70s)
```

- 2025-08-23

### Error 2025-08-23T00:26:44+00:00
```
2025-08-23T00:26:44.6397949Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-08-23T00:26:44.6497922Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-23T03:26:47.3770754Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-23T03:26:47.3771730Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-08-23T03:26:47.3772846Z         
2025-08-23T03:26:47.3774042Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-23T03:26:47.3774710Z         
2025-08-23T03:26:47.3775238Z           with mongodbatlas_cluster.test,
2025-08-23T03:26:47.3775824Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-08-23T03:26:47.3776346Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-08-23T03:26:47.3776629Z         
2025-08-23T03:26:47.4265030Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.78s)
```

- 2025-08-24

### Error 2025-08-24T00:30:35+00:00
```
2025-08-24T00:30:35.9496397Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-08-24T00:30:35.9505979Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-24T03:30:38.7097953Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-24T03:30:38.7098921Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-08-24T03:30:38.7099606Z         
2025-08-24T03:30:38.7100836Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-24T03:30:38.7101774Z         
2025-08-24T03:30:38.7102269Z           with mongodbatlas_cluster.test,
2025-08-24T03:30:38.7103001Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-08-24T03:30:38.7103657Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-08-24T03:30:38.7104041Z         
2025-08-24T03:30:38.7585358Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.81s)
```

- 2025-08-25

### Error 2025-08-25T00:28:58+00:00
```
2025-08-25T00:28:58.2838909Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-08-25T00:28:58.2848293Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-25T03:29:00.9138859Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-25T03:29:00.9139794Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-08-25T03:29:00.9140393Z         
2025-08-25T03:29:00.9141262Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-25T03:29:00.9141894Z         
2025-08-25T03:29:00.9142190Z           with mongodbatlas_cluster.test,
2025-08-25T03:29:00.9142893Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-08-25T03:29:00.9143520Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-08-25T03:29:00.9143812Z         
2025-08-25T03:29:00.9600567Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.68s)
```

- 2025-08-26

### Error 2025-08-26T00:27:26+00:00
```
2025-08-26T00:27:26.4909160Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-08-26T00:27:26.4976245Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-26T03:27:29.1846076Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-26T03:27:29.1847056Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-08-26T03:27:29.1847778Z         
2025-08-26T03:27:29.1849357Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-26T03:27:29.1850074Z         
2025-08-26T03:27:29.1850377Z           with mongodbatlas_cluster.test,
2025-08-26T03:27:29.1850981Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-08-26T03:27:29.1851828Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-08-26T03:27:29.1852183Z         
2025-08-26T03:27:29.2303905Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.74s)
```

- 2025-08-27 PASS 34 minutes
- 2025-08-28 PASS 18 minutes
- 2025-08-29 PASS 30 minutes
- 2025-08-30

### Error 2025-08-30T00:26:04+00:00
```
2025-08-30T00:26:04.3030241Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-08-30T00:26:04.3177503Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-30T03:26:06.7585864Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-08-30T03:26:06.7586808Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-08-30T03:26:06.7587480Z         
2025-08-30T03:26:06.7588750Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-08-30T03:26:06.7589636Z         
2025-08-30T03:26:06.7590147Z           with mongodbatlas_cluster.test,
2025-08-30T03:26:06.7591176Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-08-30T03:26:06.7592105Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-08-30T03:26:06.7592895Z         
2025-08-30T03:26:06.8225113Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.51s)
```

- 2025-08-31 PASS 19 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.1352495Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-09-01T00:30:20.2514249Z     shared_resource.go:93: 
2025-09-01T00:30:20.2515821Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:20.2518394Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:20.2520641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:20.2522953Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:20.2525009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:20.2527177Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1107
2025-09-01T00:30:20.2528064Z         	Error:      	Received unexpected error:
2025-09-01T00:30:20.2531201Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.2532659Z         	Test:       	TestAccCluster_basicGCPRegionNameUSWest2
2025-09-01T00:30:20.2534939Z         	Messages:   	Project creation failed: test-acc-tf-p-9220270818310649845, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:20.2536390Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (0.12s)
```

  - PASS an hour
  - PASS an hour
  - PASS 24 minutes
  - PASS 12 minutes
  - PASS 19 minutes
  - PASS 15 minutes
  - PASS 20 minutes
- 2025-09-02 PASS 20 minutes
- 2025-09-03 PASS 28 minutes
- 2025-09-04 PASS 15 minutes