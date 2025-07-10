# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 99) FAIL(x 17)
Success rate: 85.34%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-14 00:27](#error-2025-04-14t0027360000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/67fc56763aaa5f3ce5d634b0/clusters | dev | out_of_capacity | 2.06s
[2025-04-20 00:29](#error-2025-04-20t0029180000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68043fdc5977e021cda4f4a1/clusters | qa | out_of_capacity | 2.06s
[2025-05-01 07:43](#error-2025-05-01t0743360000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68132626f7db2d25706780dc/clusters | dev | out_of_capacity | 2.04s
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.00s
[2025-05-14 00:28](#error-2025-05-14t0028100000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6823e399eb272e4802d64b81/clusters | dev | out_of_capacity | 2.04s
[2025-05-21 00:28](#error-2025-05-21t0028340000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/682d1e3035b32c4f81db5477/clusters | dev | out_of_capacity | 2.08s
[2025-05-23 00:28](#error-2025-05-23t0028270000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/682fc12977604a5f3ce14640/clusters | dev | out_of_capacity | 2.03s
[2025-05-28 12:21](#error-2025-05-28t1221410000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6836ffd344831f420ade177b/clusters | qa | out_of_capacity | 2.05s
[2025-06-01 08:58](#error-2025-06-01t0858500000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/683c16487bf9cf70212cb6ac/clusters | dev | out_of_capacity | 2.05s
[2025-06-05 00:28](#error-2025-06-05t0028480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-3727134475115867813 | dev | flaky_500 | 183.02s
[2025-06-28 00:27](#error-2025-06-28t0027520000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/685f3705285361756493db4a/clusters | dev | out_of_capacity | 2.06s
[2025-06-30 00:30](#error-2025-06-30t0030400000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6861daaeb061b0401a4b94b8/clusters | dev | out_of_capacity | 2.06s
[2025-07-02 00:28](#error-2025-07-02t0028550000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68647d43948ea608f1ec2d35/clusters | dev | out_of_capacity | 2.06s
[2025-07-04 00:28](#error-2025-07-04t0028530000) |  | dev | timeout | 10802.06s
[2025-07-05 00:28](#error-2025-07-05t0028090000) |  | dev | timeout | 10802.06s
[2025-07-07 00:31](#error-2025-07-07t0031360000) |  | dev | timeout | 10802.08s
[2025-07-09 00:29](#error-2025-07-09t0029500000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/686db7fb72415e231233c242/clusters | dev | out_of_capacity | 2.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 14 minutes
- 2025-04-13 PASS 14 minutes
- 2025-04-14

### Error 2025-04-14T00:27:36+00:00
```
2025-04-14T00:27:36.7300086Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-04-14T00:27:36.7318461Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-04-14T00:27:39.2910417Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-04-14T00:27:39.2911336Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-04-14T00:27:39.2911742Z         
2025-04-14T00:27:39.2913352Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/67fc56763aaa5f3ce5d634b0/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-04-14T00:27:39.2914730Z         
2025-04-14T00:27:39.2915028Z           with mongodbatlas_cluster.test,
2025-04-14T00:27:39.2915900Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-04-14T00:27:39.2916537Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-04-14T00:27:39.2916822Z         
2025-04-14T00:27:39.3344944Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.60s)
```

- 2025-04-15 PASS 14 minutes
- 2025-04-16
  - PASS 25 minutes
  - PASS 14 minutes
- 2025-04-17 PASS 15 minutes
- 2025-04-18 PASS 14 minutes
- 2025-04-19 PASS 13 minutes
- 2025-04-20

### Error 2025-04-20T00:29:18+00:00
```
2025-04-20T00:29:18.9663224Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-04-20T00:29:18.9674303Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-04-20T00:29:21.5547670Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-04-20T00:29:21.5548642Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-04-20T00:29:21.5549572Z         
2025-04-20T00:29:21.5551911Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/68043fdc5977e021cda4f4a1/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-04-20T00:29:21.5552875Z         
2025-04-20T00:29:21.5553399Z           with mongodbatlas_cluster.test,
2025-04-20T00:29:21.5554131Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-04-20T00:29:21.5554891Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-04-20T00:29:21.5555256Z         
2025-04-20T00:29:21.6037023Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.64s)
```

- 2025-04-21 PASS 12 minutes
- 2025-04-22 PASS 13 minutes
- 2025-04-23 PASS 13 minutes
- 2025-04-24 PASS 12 minutes
- 2025-04-25 PASS 13 minutes
- 2025-04-26 PASS 14 minutes
- 2025-04-27 PASS 12 minutes
- 2025-04-28 PASS 11 minutes
- 2025-04-29 PASS 11 minutes
- 2025-04-30 PASS 16 minutes
- 2025-05-01
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - FAIL 2 seconds

### Error 2025-05-01T07:43:36+00:00
```
2025-05-01T07:43:36.6144134Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-01T07:43:36.6187311Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-01T07:43:38.9795454Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-01T07:43:38.9796136Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-05-01T07:43:38.9796643Z         
2025-05-01T07:43:38.9798188Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68132626f7db2d25706780dc/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-05-01T07:43:38.9799260Z         
2025-05-01T07:43:38.9799661Z           with mongodbatlas_cluster.test,
2025-05-01T07:43:38.9800557Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-05-01T07:43:38.9801619Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-05-01T07:43:38.9802017Z         
2025-05-01T07:43:39.0371619Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.42s)
```

  - PASS 11 minutes
- 2025-05-02 PASS 12 minutes
- 2025-05-03 PASS 12 minutes
- 2025-05-04 PASS 12 minutes
- 2025-05-05 PASS 11 minutes
- 2025-05-06 PASS 14 minutes
- 2025-05-07 PASS 13 minutes
- 2025-05-08 PASS 12 minutes
- 2025-05-09 PASS 15 minutes
- 2025-05-10 PASS 13 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.3914720Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-11T00:29:40.3938092Z     shared_resource.go:84: 
2025-05-11T00:29:40.3939151Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3940920Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3942853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.3944582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.3946608Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1107
2025-05-11T00:29:40.3947376Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.3948261Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3948859Z         	Test:       	TestAccCluster_basicGCPRegionNameUSWest2
2025-05-11T00:29:40.3949892Z         	Messages:   	Project creation failed: test-acc-tf-p-6238338633083474996, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3950627Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (0.01s)
```

- 2025-05-12 PASS 11 minutes
- 2025-05-13
  - PASS 14 minutes
  - PASS 12 minutes
- 2025-05-14

### Error 2025-05-14T00:28:10+00:00
```
2025-05-14T00:28:10.7166932Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-14T00:28:10.7288708Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-14T00:28:13.1056224Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-14T00:28:13.1057205Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-05-14T00:28:13.1057644Z         
2025-05-14T00:28:13.1059098Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6823e399eb272e4802d64b81/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-05-14T00:28:13.1060303Z         
2025-05-14T00:28:13.1060633Z           with mongodbatlas_cluster.test,
2025-05-14T00:28:13.1061247Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-05-14T00:28:13.1061787Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-05-14T00:28:13.1062517Z         
2025-05-14T00:28:13.1486965Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.42s)
```

- 2025-05-15 PASS 13 minutes
- 2025-05-16 PASS 14 minutes
- 2025-05-17 PASS 12 minutes
- 2025-05-18 PASS 13 minutes
- 2025-05-19 PASS 14 minutes
- 2025-05-20 PASS 14 minutes
- 2025-05-21

### Error 2025-05-21T00:28:34+00:00
```
2025-05-21T00:28:34.3171656Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-21T00:28:34.3215280Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-21T00:28:37.0465213Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-21T00:28:37.0465983Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-05-21T00:28:37.0466498Z         
2025-05-21T00:28:37.0468135Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/682d1e3035b32c4f81db5477/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-05-21T00:28:37.0469430Z         
2025-05-21T00:28:37.0469827Z           with mongodbatlas_cluster.test,
2025-05-21T00:28:37.0470432Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-05-21T00:28:37.0471074Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-05-21T00:28:37.0471475Z         
2025-05-21T00:28:37.0983424Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.78s)
```

- 2025-05-22 PASS 16 minutes
- 2025-05-23

### Error 2025-05-23T00:28:27+00:00
```
2025-05-23T00:28:27.0923562Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-23T00:28:27.0965327Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-23T00:28:29.3852240Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-23T00:28:29.3853002Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-05-23T00:28:29.3853480Z         
2025-05-23T00:28:29.3855051Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/682fc12977604a5f3ce14640/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-05-23T00:28:29.3856425Z         
2025-05-23T00:28:29.3856917Z           with mongodbatlas_cluster.test,
2025-05-23T00:28:29.3857632Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-05-23T00:28:29.3858184Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-05-23T00:28:29.3858486Z         
2025-05-23T00:28:29.4319949Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.34s)
```

- 2025-05-24 PASS 13 minutes
- 2025-05-25 PASS 14 minutes
- 2025-05-26 PASS 12 minutes
- 2025-05-27 PASS 11 minutes
- 2025-05-28
  - PASS 30 minutes
  - PASS 11 minutes
  - PASS 14 minutes
  - FAIL 2 seconds

### Error 2025-05-28T12:21:41+00:00
```
2025-05-28T12:21:41.2638537Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-05-28T12:21:41.2655424Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-28T12:21:43.6797307Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-05-28T12:21:43.6797971Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-05-28T12:21:43.6798507Z         
2025-05-28T12:21:43.6800105Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/6836ffd344831f420ade177b/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-05-28T12:21:43.6801653Z         
2025-05-28T12:21:43.6802029Z           with mongodbatlas_cluster.test,
2025-05-28T12:21:43.6802817Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-05-28T12:21:43.6803365Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-05-28T12:21:43.6803662Z         
2025-05-28T12:21:43.7333795Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.48s)
```

- 2025-05-29
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-05-30
  - PASS 33 minutes
  - PASS 11 minutes
- 2025-05-31 PASS 12 minutes
- 2025-06-01
  - PASS 10 minutes
  - PASS 13 minutes
  - FAIL 2 seconds

### Error 2025-06-01T08:58:50+00:00
```
2025-06-01T08:58:50.9685434Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T08:58:50.9697239Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T08:58:53.3938675Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-01T08:58:53.3939502Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-06-01T08:58:53.3940303Z         
2025-06-01T08:58:53.3941921Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/683c16487bf9cf70212cb6ac/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-06-01T08:58:53.3943082Z         
2025-06-01T08:58:53.3943437Z           with mongodbatlas_cluster.test,
2025-06-01T08:58:53.3944309Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-01T08:58:53.3944869Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-01T08:58:53.3945186Z         
2025-06-01T08:58:53.4447942Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.48s)
```

  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 11 minutes
- 2025-06-02
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-06-03 PASS 12 minutes
- 2025-06-04 PASS 11 minutes
- 2025-06-05

### Error 2025-06-05T00:28:48+00:00
```
2025-06-05T00:28:48.8414071Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-05T00:28:48.8423725Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-05T00:31:51.8948765Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-05T00:31:51.8950022Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:31:51.8950699Z         
2025-06-05T00:31:51.8957792Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-3727134475115867813 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:51.8960882Z         
2025-06-05T00:31:51.8961442Z           with mongodbatlas_cluster.test,
2025-06-05T00:31:51.8962509Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:31:51.8963426Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-05T00:31:51.8963925Z         
2025-06-05T00:31:51.9017648Z    test_working_directory=/tmp/plugintest361729905 test_name=TestAccCluster_RegionsConfig
2025-06-05T00:31:52.0134134Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (183.17s)
```

- 2025-06-06 PASS 12 minutes
- 2025-06-07 PASS 12 minutes
- 2025-06-08 PASS 12 minutes
- 2025-06-09 PASS 11 minutes
- 2025-06-10 PASS 27 minutes
- 2025-06-11
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-06-12 PASS 14 minutes
- 2025-06-13 PASS 13 minutes
- 2025-06-14 PASS 29 minutes
- 2025-06-15 PASS 13 minutes
- 2025-06-16 PASS 11 minutes
- 2025-06-17 PASS 14 minutes
- 2025-06-18 PASS 12 minutes
- 2025-06-19 PASS 30 minutes
- 2025-06-20 PASS 14 minutes
- 2025-06-21 PASS 14 minutes
- 2025-06-22 PASS 15 minutes
- 2025-06-23 PASS 11 minutes
- 2025-06-24 PASS 11 minutes
- 2025-06-25 PASS 13 minutes
- 2025-06-26 PASS 12 minutes
- 2025-06-27 PASS 11 minutes
- 2025-06-28

### Error 2025-06-28T00:27:52+00:00
```
2025-06-28T00:27:52.4393580Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-28T00:27:52.4436776Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-28T00:27:55.0100026Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-28T00:27:55.0101184Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-06-28T00:27:55.0101801Z         
2025-06-28T00:27:55.0103111Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/685f3705285361756493db4a/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-06-28T00:27:55.0104165Z         
2025-06-28T00:27:55.0104589Z           with mongodbatlas_cluster.test,
2025-06-28T00:27:55.0105290Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-28T00:27:55.0105812Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-28T00:27:55.0106089Z         
2025-06-28T00:27:55.0582775Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.62s)
```

- 2025-06-29 PASS 14 minutes
- 2025-06-30

### Error 2025-06-30T00:30:40+00:00
```
2025-06-30T00:30:40.1142167Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-06-30T00:30:40.1159702Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-30T00:30:42.6218229Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-06-30T00:30:42.6219173Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-06-30T00:30:42.6219824Z         
2025-06-30T00:30:42.6221402Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6861daaeb061b0401a4b94b8/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-06-30T00:30:42.6222460Z         
2025-06-30T00:30:42.6222749Z           with mongodbatlas_cluster.test,
2025-06-30T00:30:42.6223421Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-30T00:30:42.6224230Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-30T00:30:42.6225009Z         
2025-06-30T00:30:42.6733271Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.56s)
```

- 2025-07-01
  - PASS 11 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 11 minutes
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-07-02

### Error 2025-07-02T00:28:55+00:00
```
2025-07-02T00:28:55.2442937Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-02T00:28:55.2463121Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-02T00:28:57.7924609Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-02T00:28:57.7925468Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-02T00:28:57.7925869Z         
2025-07-02T00:28:57.7927295Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68647d43948ea608f1ec2d35/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-07-02T00:28:57.7928622Z         
2025-07-02T00:28:57.7929251Z           with mongodbatlas_cluster.test,
2025-07-02T00:28:57.7929848Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-02T00:28:57.7930372Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-02T00:28:57.7930658Z         
2025-07-02T00:28:57.8356428Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.59s)
```

- 2025-07-03 PASS 13 minutes
- 2025-07-04

### Error 2025-07-04T00:28:53+00:00
```
2025-07-04T00:28:53.1081336Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-04T00:28:53.1116945Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-04T03:28:55.6207128Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-04T03:28:55.6207873Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-04T03:28:55.6208278Z         
2025-07-04T03:28:55.6209164Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-04T03:28:55.6209896Z         
2025-07-04T03:28:55.6210257Z           with mongodbatlas_cluster.test,
2025-07-04T03:28:55.6211259Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-04T03:28:55.6211896Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-04T03:28:55.6212183Z         
2025-07-04T03:28:55.6889654Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.58s)
```

- 2025-07-05

### Error 2025-07-05T00:28:09+00:00
```
2025-07-05T00:28:09.1104794Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-05T00:28:09.1161896Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-05T03:28:11.6166367Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-05T03:28:11.6167202Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-05T03:28:11.6167750Z         
2025-07-05T03:28:11.6168980Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-05T03:28:11.6169739Z         
2025-07-05T03:28:11.6170086Z           with mongodbatlas_cluster.test,
2025-07-05T03:28:11.6170874Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-05T03:28:11.6171899Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-05T03:28:11.6172287Z         
2025-07-05T03:28:11.6462757Z    test_name=TestAccCluster_basicGCPRegionNameWesternUS
2025-07-05T03:28:11.6657192Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.55s)
```

- 2025-07-06 PASS 12 minutes
- 2025-07-07

### Error 2025-07-07T00:31:36+00:00
```
2025-07-07T00:31:36.2392527Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-07T00:31:36.2403593Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-07T03:31:38.9307402Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-07T03:31:38.9308333Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-07T03:31:38.9308987Z         
2025-07-07T03:31:38.9310228Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-07T03:31:38.9311168Z         
2025-07-07T03:31:38.9311616Z           with mongodbatlas_cluster.test,
2025-07-07T03:31:38.9312203Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-07T03:31:38.9312734Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-07T03:31:38.9313250Z         
2025-07-07T03:31:38.9841493Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.75s)
```

- 2025-07-08 PASS 13 minutes
- 2025-07-09

### Error 2025-07-09T00:29:50+00:00
```
2025-07-09T00:29:50.2460712Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-07-09T00:29:50.2471097Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-09T00:29:52.7800146Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-07-09T00:29:52.7800822Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-07-09T00:29:52.7801315Z         
2025-07-09T00:29:52.7802788Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/686db7fb72415e231233c242/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-07-09T00:29:52.7803832Z         
2025-07-09T00:29:52.7804249Z           with mongodbatlas_cluster.test,
2025-07-09T00:29:52.7805148Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-09T00:29:52.7805684Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-09T00:29:52.7805976Z         
2025-07-09T00:29:52.8306838Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.58s)
```

- 2025-07-10 PASS 16 minutes