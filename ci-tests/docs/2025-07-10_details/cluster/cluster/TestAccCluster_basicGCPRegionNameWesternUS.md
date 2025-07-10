# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 104) FAIL(x 12)
Success rate: 89.66%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-28 00:28](#error-2025-04-28t0028580000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/680ecbc7122f5b15cc627ba5/clusters | dev | out_of_capacity | 2.06s
[2025-05-10 00:26](#error-2025-05-10t0026460000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/681e9d4202a18b36536d0bcf/clusters | dev | out_of_capacity | 2.10s
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.00s
[2025-05-13 00:28](#error-2025-05-13t0028300000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6822922cf8f6353e90d79f55/clusters | dev | out_of_capacity | 2.06s
[2025-05-24 00:27](#error-2025-05-24t0027340000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68311274b315030f7d4e368d/clusters | dev | out_of_capacity | 2.08s
[2025-06-01 00:40](#error-2025-06-01t0040590000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/683ba19a4e6c592331c54a0f/clusters | dev | out_of_capacity | 2.06s
[2025-06-05 00:28](#error-2025-06-05t0028480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-4646526762676109680 | dev | flaky_500 | 183.03s
[2025-06-06 00:30](#error-2025-06-06t0030080000) |  | dev | timeout | 10802.07s
[2025-06-29 00:32](#error-2025-06-29t0032170000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6860898f49709c3a5a3c8fd7/clusters | qa | out_of_capacity | 2.08s
[2025-07-04 00:28](#error-2025-07-04t0028530000) |  | dev | timeout | 10802.06s
[2025-07-05 00:28](#error-2025-07-05t0028090000) |  | dev | timeout | 10802.06s
[2025-07-07 00:31](#error-2025-07-07t0031360000) |  | dev | timeout | 10802.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 15 minutes
- 2025-04-13 PASS 16 minutes
- 2025-04-14 PASS 12 minutes
- 2025-04-15 PASS 13 minutes
- 2025-04-16
  - PASS 22 minutes
  - PASS 14 minutes
- 2025-04-17 PASS 17 minutes
- 2025-04-18 PASS 14 minutes
- 2025-04-19 PASS 13 minutes
- 2025-04-20 PASS 14 minutes
- 2025-04-21 PASS 13 minutes
- 2025-04-22 PASS 13 minutes
- 2025-04-23 PASS 13 minutes
- 2025-04-24 PASS 15 minutes
- 2025-04-25 PASS 12 minutes
- 2025-04-26 PASS 16 minutes
- 2025-04-27 PASS 12 minutes
- 2025-04-28

### Error 2025-04-28T00:28:58+00:00
```
2025-04-28T00:28:58.3752937Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-04-28T00:28:58.3778357Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-04-28T00:29:00.9060428Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-04-28T00:29:00.9061129Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-04-28T00:29:00.9061671Z         
2025-04-28T00:29:00.9064275Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/680ecbc7122f5b15cc627ba5/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-04-28T00:29:00.9065883Z         
2025-04-28T00:29:00.9066209Z           with mongodbatlas_cluster.test,
2025-04-28T00:29:00.9066852Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-04-28T00:29:00.9067533Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-04-28T00:29:00.9067841Z         
2025-04-28T00:29:00.9610855Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.58s)
```

- 2025-04-29 PASS 13 minutes
- 2025-04-30 PASS 15 minutes
- 2025-05-01
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - PASS 11 minutes
- 2025-05-02 PASS 14 minutes
- 2025-05-03 PASS 13 minutes
- 2025-05-04 PASS 13 minutes
- 2025-05-05 PASS 12 minutes
- 2025-05-06 PASS 14 minutes
- 2025-05-07 PASS 13 minutes
- 2025-05-08 PASS 13 minutes
- 2025-05-09 PASS 15 minutes
- 2025-05-10

### Error 2025-05-10T00:26:46+00:00
```
2025-05-10T00:26:46.3803054Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-10T00:26:46.3945613Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-10T00:26:49.2961854Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-10T00:26:49.2962783Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-05-10T00:26:49.2963335Z         
2025-05-10T00:26:49.2965241Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/681e9d4202a18b36536d0bcf/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-05-10T00:26:49.2966633Z         
2025-05-10T00:26:49.2966954Z           with mongodbatlas_cluster.test,
2025-05-10T00:26:49.2967811Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-05-10T00:26:49.2968600Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-05-10T00:26:49.2968898Z         
2025-05-10T00:26:49.3410679Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.95s)
```

- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.3849231Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-11T00:29:40.3880950Z     shared_resource.go:84: 
2025-05-11T00:29:40.3882707Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3885386Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3887385Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.3889131Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.3890938Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1084
2025-05-11T00:29:40.3891691Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.3892554Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3912464Z         	Test:       	TestAccCluster_basicGCPRegionNameWesternUS
2025-05-11T00:29:40.3913569Z         	Messages:   	Project creation failed: test-acc-tf-p-1781642921808062059, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3914309Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (0.01s)
```

- 2025-05-12 PASS 12 minutes
- 2025-05-13
  - FAIL 2 seconds

### Error 2025-05-13T00:28:30+00:00
```
2025-05-13T00:28:30.1656463Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-13T00:28:30.1668511Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-13T00:28:32.7506813Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-13T00:28:32.7507438Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-05-13T00:28:32.7507859Z         
2025-05-13T00:28:32.7509417Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6822922cf8f6353e90d79f55/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-05-13T00:28:32.7510439Z         
2025-05-13T00:28:32.7511013Z           with mongodbatlas_cluster.test,
2025-05-13T00:28:32.7511691Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-05-13T00:28:32.7512474Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-05-13T00:28:32.7512770Z         
2025-05-13T00:28:32.7933783Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.63s)
```

  - PASS 13 minutes
- 2025-05-14 PASS 12 minutes
- 2025-05-15 PASS 13 minutes
- 2025-05-16 PASS 14 minutes
- 2025-05-17 PASS 12 minutes
- 2025-05-18 PASS 14 minutes
- 2025-05-19 PASS 13 minutes
- 2025-05-20 PASS 13 minutes
- 2025-05-21 PASS 12 minutes
- 2025-05-22 PASS 15 minutes
- 2025-05-23 PASS 31 minutes
- 2025-05-24

### Error 2025-05-24T00:27:34+00:00
```
2025-05-24T00:27:34.4352734Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-05-24T00:27:34.4428174Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-24T00:27:37.1918783Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-05-24T00:27:37.1919654Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-05-24T00:27:37.1920308Z         
2025-05-24T00:27:37.1921981Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68311274b315030f7d4e368d/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-05-24T00:27:37.1923611Z         
2025-05-24T00:27:37.1924090Z           with mongodbatlas_cluster.test,
2025-05-24T00:27:37.1925005Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-05-24T00:27:37.1925700Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-05-24T00:27:37.1926155Z         
2025-05-24T00:27:37.2435488Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.80s)
```

- 2025-05-25 PASS 14 minutes
- 2025-05-26 PASS 12 minutes
- 2025-05-27 PASS 12 minutes
- 2025-05-28
  - PASS 25 minutes
  - PASS 11 minutes
  - PASS 14 minutes
  - PASS 12 minutes
- 2025-05-29
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-05-30
  - PASS 12 minutes
  - PASS 12 minutes
- 2025-05-31 PASS 12 minutes
- 2025-06-01
  - FAIL 2 seconds

### Error 2025-06-01T00:40:59+00:00
```
2025-06-01T00:40:59.9710967Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T00:40:59.9734953Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T00:41:02.5543163Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-01T00:41:02.5543883Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-06-01T00:41:02.5544716Z         
2025-06-01T00:41:02.5546573Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/683ba19a4e6c592331c54a0f/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-06-01T00:41:02.5547578Z         
2025-06-01T00:41:02.5547898Z           with mongodbatlas_cluster.test,
2025-06-01T00:41:02.5548515Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-01T00:41:02.5549078Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-01T00:41:02.5549385Z         
2025-06-01T00:41:02.5991322Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.63s)
```

  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 11 minutes
  - PASS 12 minutes
- 2025-06-02
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 13 minutes
- 2025-06-03 PASS 13 minutes
- 2025-06-04 PASS 2 hours
- 2025-06-05

### Error 2025-06-05T00:28:48+00:00
```
2025-06-05T00:28:48.8412968Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-05T00:28:48.8424364Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-05T00:31:52.0212408Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-05T00:31:52.0213486Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:31:52.0214296Z         
2025-06-05T00:31:52.0218200Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-4646526762676109680 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:52.0220602Z         
2025-06-05T00:31:52.0221234Z           with mongodbatlas_cluster.test,
2025-06-05T00:31:52.0222407Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:31:52.0223814Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-05T00:31:52.0224758Z         
2025-06-05T00:31:52.0860851Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (183.25s)
```

- 2025-06-06

### Error 2025-06-06T00:30:08+00:00
```
2025-06-06T00:30:08.0290089Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-06T00:30:08.0306565Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-06T03:30:10.6847215Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-06T03:30:10.6848155Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-06-06T03:30:10.6848845Z         
2025-06-06T03:30:10.6850273Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-06-06T03:30:10.6851367Z         
2025-06-06T03:30:10.6851674Z           with mongodbatlas_cluster.test,
2025-06-06T03:30:10.6852272Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-06T03:30:10.6853148Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-06T03:30:10.6853569Z         
2025-06-06T03:30:10.7285020Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.70s)
```

- 2025-06-07 PASS 12 minutes
- 2025-06-08 PASS 12 minutes
- 2025-06-09 PASS 12 minutes
- 2025-06-10 PASS 30 minutes
- 2025-06-11
  - PASS 11 minutes
  - PASS 13 minutes
- 2025-06-12 PASS 16 minutes
- 2025-06-13 PASS 12 minutes
- 2025-06-14 PASS 21 minutes
- 2025-06-15 PASS 14 minutes
- 2025-06-16 PASS 17 minutes
- 2025-06-17 PASS 14 minutes
- 2025-06-18 PASS 20 minutes
- 2025-06-19 PASS 30 minutes
- 2025-06-20 PASS 15 minutes
- 2025-06-21 PASS 14 minutes
- 2025-06-22 PASS 13 minutes
- 2025-06-23 PASS 11 minutes
- 2025-06-24 PASS 13 minutes
- 2025-06-25 PASS 17 minutes
- 2025-06-26 PASS 14 minutes
- 2025-06-27 PASS 13 minutes
- 2025-06-28 PASS 13 minutes
- 2025-06-29

### Error 2025-06-29T00:32:17+00:00
```
2025-06-29T00:32:17.2268270Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-06-29T00:32:17.2341116Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-29T00:32:19.9650336Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-06-29T00:32:19.9650979Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-06-29T00:32:19.9651544Z         
2025-06-29T00:32:19.9653298Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/6860898f49709c3a5a3c8fd7/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-06-29T00:32:19.9655133Z         
2025-06-29T00:32:19.9655430Z           with mongodbatlas_cluster.test,
2025-06-29T00:32:19.9656131Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-29T00:32:19.9656758Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-29T00:32:19.9657190Z         
2025-06-29T00:32:20.0178117Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.78s)
```

- 2025-06-30 PASS 12 minutes
- 2025-07-01
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 12 minutes
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-07-02 PASS 12 minutes
- 2025-07-03 PASS 15 minutes
- 2025-07-04

### Error 2025-07-04T00:28:53+00:00
```
2025-07-04T00:28:53.1079943Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-07-04T00:28:53.1096818Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-04T03:28:55.6597377Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-04T03:28:55.6598275Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-07-04T03:28:55.6598925Z         
2025-07-04T03:28:55.6600118Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-04T03:28:55.6601148Z         
2025-07-04T03:28:55.6601641Z           with mongodbatlas_cluster.test,
2025-07-04T03:28:55.6602646Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-04T03:28:55.6603544Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-04T03:28:55.6604015Z         
2025-07-04T03:28:55.7203735Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.61s)
```

- 2025-07-05

### Error 2025-07-05T00:28:09+00:00
```
2025-07-05T00:28:09.1103413Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-07-05T00:28:09.1155937Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-05T03:28:11.6463400Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-05T03:28:11.6464228Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-07-05T03:28:11.6464626Z         
2025-07-05T03:28:11.6465641Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-05T03:28:11.6466312Z         
2025-07-05T03:28:11.6466626Z           with mongodbatlas_cluster.test,
2025-07-05T03:28:11.6467477Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-05T03:28:11.6468010Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-05T03:28:11.6468405Z         
2025-07-05T03:28:11.7058151Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.59s)
```

- 2025-07-06 PASS 12 minutes
- 2025-07-07

### Error 2025-07-07T00:31:36+00:00
```
2025-07-07T00:31:36.2391379Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-07-07T00:31:36.2483914Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-07T03:31:39.0109824Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-07-07T03:31:39.0110803Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-07-07T03:31:39.0111466Z         
2025-07-07T03:31:39.0112706Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-07T03:31:39.0113882Z         
2025-07-07T03:31:39.0114178Z           with mongodbatlas_cluster.test,
2025-07-07T03:31:39.0115139Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-07-07T03:31:39.0115676Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-07-07T03:31:39.0115964Z         
2025-07-07T03:31:39.0557108Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.81s)
```

- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 13 minutes
- 2025-07-10 PASS 18 minutes