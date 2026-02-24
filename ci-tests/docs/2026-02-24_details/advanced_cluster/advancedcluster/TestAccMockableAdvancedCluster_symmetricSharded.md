# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_symmetricSharded Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 22) FAIL(x 11)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-29 00:36](#error-2026-01-29t0036340000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697aab92f4a2a16d1a6955f7/clusters | dev | out_of_capacity | 7.10s
[2026-01-31 00:35](#error-2026-01-31t0035260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d4e4a7d00588dcf9f5262/clusters | dev | out_of_capacity | 5.06s
[2026-02-02 00:38](#error-2026-02-02t0038540000) |  | dev | timeout | 10807.01s
[2026-02-03 00:39](#error-2026-02-03t0039360000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c5b2e54ee99590d5b0/clusters | dev | out_of_capacity | 6.06s
[2026-02-05 00:39](#error-2026-02-05t0039040000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6983e6a6304923ebd185c058/clusters | dev | out_of_capacity | 5.09s
[2026-02-16 00:39](#error-2026-02-16t0039420000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6992674cfca6e0756f2c17cb/clusters | dev | out_of_capacity | 6.09s
[2026-02-19 00:39](#error-2026-02-19t0039560000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69965bd75b4417cf65b905f4/clusters | dev | out_of_capacity | 6.03s
[2026-02-20 00:36](#error-2026-02-20t0036590000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6997acaa73841e1a88a6a3b8/clusters | dev | out_of_capacity | 7.01s
[2026-02-21 00:37](#error-2026-02-21t0037040000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6998fe2e23648dd3abd5a3a6/clusters | dev | out_of_capacity | 6.00s
[2026-02-23 00:39](#error-2026-02-23t0039320000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699ba1c18decccf9757d60e6/clusters | dev | out_of_capacity | 7.02s
[2026-02-24 00:37](#error-2026-02-24t0037120000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699cf2b48dfec41eaa8573f2/clusters | dev | out_of_capacity | 5.05s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 32 minutes
- 2026-01-27 PASS 34 minutes
- 2026-01-28 PASS 31 minutes
- 2026-01-29

### Error 2026-01-29T00:36:34+00:00
```
2026-01-29T00:36:34.1927121Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-01-29T00:36:36.8749249Z     resource_test.go:669: Adding variable groupId=697aab92f4a2a16d1a6955f7
2026-01-29T00:36:36.8750147Z     resource_test.go:669: Adding variable clusterName=test-acc-tf-c-617484351552015226
2026-01-29T00:38:42.2008220Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-01-29T00:38:47.4492484Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-01-29T00:38:47.4493367Z     resource_test.go:669: Step 1/3 error: Error running apply: exit status 1
2026-01-29T00:38:47.4493891Z         
2026-01-29T00:38:47.4494160Z         Error: Error in create
2026-01-29T00:38:47.4494415Z         
2026-01-29T00:38:47.4494753Z           with mongodbatlas_advanced_cluster.test,
2026-01-29T00:38:47.4495427Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-29T00:38:47.4496330Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-29T00:38:47.4496665Z         
2026-01-29T00:38:47.4497090Z         cluster name: test-acc-tf-c-617484351552015226, API error details:
2026-01-29T00:38:47.4497784Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697aab92f4a2a16d1a6955f7/clusters
2026-01-29T00:38:47.4498745Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-29T00:38:47.4499547Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-29T00:38:47.4500069Z         Conflict. Params: [], BadRequestDetail: 
2026-01-29T00:38:47.4966328Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (7.98s)
```

- 2026-01-30 PASS 42 minutes
- 2026-01-31

### Error 2026-01-31T00:35:26+00:00
```
2026-01-31T00:35:26.6416397Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-01-31T00:35:26.7106972Z     resource_test.go:628: Adding variable groupId=697d4e4a7d00588dcf9f5262
2026-01-31T00:35:26.7107929Z     resource_test.go:628: Adding variable clusterName=test-acc-tf-c-540947913009785860
2026-01-31T00:36:56.1578221Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-01-31T00:37:01.6598714Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-01-31T00:37:01.6599321Z     resource_test.go:628: Step 1/3 error: Error running apply: exit status 1
2026-01-31T00:37:01.6599805Z         
2026-01-31T00:37:01.6600083Z         Error: Error in create
2026-01-31T00:37:01.6600336Z         
2026-01-31T00:37:01.6600824Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T00:37:01.6601623Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T00:37:01.6602396Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T00:37:01.6603172Z         
2026-01-31T00:37:01.6603805Z         cluster name: test-acc-tf-c-540947913009785860, API error details:
2026-01-31T00:37:01.6604545Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e4a7d00588dcf9f5262/clusters
2026-01-31T00:37:01.6605259Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T00:37:01.6605935Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T00:37:01.6606451Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T00:37:01.7058650Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (5.62s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:54+00:00
```
2026-02-02T00:38:54.4583196Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-02-02T00:38:54.5391897Z     resource_test.go:628: Adding variable groupId=697ff21c71768356d7f8c603
2026-02-02T00:38:54.5393680Z     resource_test.go:628: Adding variable clusterName=test-acc-tf-c-789829550011363391
2026-02-02T00:40:19.8905085Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-02T03:40:26.7102702Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-02T03:40:26.7103717Z     resource_test.go:628: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:40:26.7104435Z         
2026-02-02T03:40:26.7104917Z         Error: Error in create
2026-02-02T03:40:26.7105354Z         
2026-02-02T03:40:26.7106537Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.7107921Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.7109215Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.7109850Z         
2026-02-02T03:40:26.7110784Z         cluster=test-acc-tf-c-789829550011363391 didn't reach desired state: IDLE,
2026-02-02T03:40:26.7111753Z         error: context deadline exceeded
2026-02-02T03:40:26.7648223Z   
2026-02-02T03:40:26.9278329Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (10807.12s)
```

- 2026-02-03

### Error 2026-02-03T00:39:36+00:00
```
2026-02-03T00:39:36.1563522Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-02-03T00:39:36.2419080Z     resource_test.go:628: Adding variable groupId=698143c5b2e54ee99590d5b0
2026-02-03T00:39:36.2420176Z     resource_test.go:628: Adding variable clusterName=test-acc-tf-c-7730072642315732439
2026-02-03T00:42:03.6692620Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-03T00:42:09.7185231Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-03T00:42:09.7186290Z     resource_test.go:628: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:42:09.7187016Z         
2026-02-03T00:42:09.7187497Z         Error: Error in create
2026-02-03T00:42:09.7187961Z         
2026-02-03T00:42:09.7188576Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.7189953Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.7191045Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.7191619Z         
2026-02-03T00:42:09.7192687Z         cluster name: test-acc-tf-c-7730072642315732439, API error details:
2026-02-03T00:42:09.7193918Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c5b2e54ee99590d5b0/clusters
2026-02-03T00:42:09.7195138Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.7196308Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.7197231Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.7716942Z   
2026-02-03T00:42:10.1684638Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (6.58s)
```

- 2026-02-04 PASS 57 minutes
- 2026-02-05

### Error 2026-02-05T00:39:04+00:00
```
2026-02-05T00:39:04.2197999Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-02-05T00:39:04.2964292Z     resource_test.go:628: Adding variable groupId=6983e6a6304923ebd185c058
2026-02-05T00:39:04.2965003Z     resource_test.go:628: Adding variable clusterName=test-acc-tf-c-4399744607308675855
2026-02-05T00:40:26.2925098Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-05T00:40:32.0023555Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-05T00:40:32.0024249Z     resource_test.go:628: Step 1/3 error: Error running apply: exit status 1
2026-02-05T00:40:32.0024695Z         
2026-02-05T00:40:32.0024996Z         Error: Error in create
2026-02-05T00:40:32.0025326Z         
2026-02-05T00:40:32.0025670Z           with mongodbatlas_advanced_cluster.test,
2026-02-05T00:40:32.0026452Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-05T00:40:32.0027196Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-05T00:40:32.0027693Z         
2026-02-05T00:40:32.0028153Z         cluster name: test-acc-tf-c-4399744607308675855, API error details:
2026-02-05T00:40:32.0028856Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a6304923ebd185c058/clusters
2026-02-05T00:40:32.0029569Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-05T00:40:32.0030244Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-05T00:40:32.0030776Z         Conflict. Params: [], BadRequestDetail: 
2026-02-05T00:40:32.0622477Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (5.90s)
```

- 2026-02-06 PASS 56 minutes
- 2026-02-07 PASS 55 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 56 minutes
- 2026-02-10 PASS 59 minutes
- 2026-02-11 PASS 53 minutes
- 2026-02-12 PASS 52 minutes
- 2026-02-13 PASS 56 minutes
- 2026-02-14 PASS 51 minutes
- 2026-02-15: MISSING
- 2026-02-16

### Error 2026-02-16T00:39:42+00:00
```
2026-02-16T00:39:42.5760123Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-02-16T00:39:42.6480617Z     resource_test.go:628: Adding variable groupId=6992674cfca6e0756f2c17cb
2026-02-16T00:39:42.6481413Z     resource_test.go:628: Adding variable clusterName=test-acc-tf-c-2626779080255122871
2026-02-16T00:41:04.9077924Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-16T00:41:11.5531693Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-16T00:41:11.5533005Z     resource_test.go:628: Step 1/3 error: Error running apply: exit status 1
2026-02-16T00:41:11.5533786Z         
2026-02-16T00:41:11.5534320Z         Error: Error in create
2026-02-16T00:41:11.5534826Z         
2026-02-16T00:41:11.5535540Z           with mongodbatlas_advanced_cluster.test,
2026-02-16T00:41:11.5537102Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-16T00:41:11.5538409Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-16T00:41:11.5539050Z         
2026-02-16T00:41:11.5539816Z         cluster name: test-acc-tf-c-2626779080255122871, API error details:
2026-02-16T00:41:11.5541109Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6992674cfca6e0756f2c17cb/clusters
2026-02-16T00:41:11.5542376Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-16T00:41:11.5543576Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-16T00:41:11.5544478Z         Conflict. Params: [], BadRequestDetail: 
2026-02-16T00:41:11.6769497Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (6.86s)
```

- 2026-02-17 PASS 53 minutes
- 2026-02-18 PASS 53 minutes
- 2026-02-19

### Error 2026-02-19T00:39:56+00:00
```
2026-02-19T00:39:56.1299603Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-02-19T00:39:56.2105387Z     resource_test.go:627: Adding variable groupId=69965bd75b4417cf65b905f4
2026-02-19T00:39:56.2106425Z     resource_test.go:627: Adding variable clusterName=test-acc-tf-c-5681632687117755576
2026-02-19T00:42:27.0891443Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-19T00:42:33.1862012Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-19T00:42:33.1862876Z     resource_test.go:627: Step 1/3 error: Error running apply: exit status 1
2026-02-19T00:42:33.1863305Z         
2026-02-19T00:42:33.1863576Z         Error: Error in create
2026-02-19T00:42:33.1864086Z         
2026-02-19T00:42:33.1864450Z           with mongodbatlas_advanced_cluster.test,
2026-02-19T00:42:33.1865327Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-19T00:42:33.1866003Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-19T00:42:33.1866510Z         
2026-02-19T00:42:33.1867112Z         cluster name: test-acc-tf-c-5681632687117755576, API error details:
2026-02-19T00:42:33.1867829Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69965bd75b4417cf65b905f4/clusters
2026-02-19T00:42:33.1868593Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-19T00:42:33.1869298Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-19T00:42:33.1869827Z         Conflict. Params: [], BadRequestDetail: 
2026-02-19T00:42:33.2370149Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (6.25s)
```

- 2026-02-20

### Error 2026-02-20T00:36:59+00:00
```
2026-02-20T00:36:59.9548504Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-02-20T00:37:00.0320224Z     resource_test.go:627: Adding variable clusterName=test-acc-tf-c-7579512670180720665
2026-02-20T00:37:00.0321402Z     resource_test.go:627: Adding variable groupId=6997acaa73841e1a88a6a3b8
2026-02-20T00:38:24.4506227Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-20T00:38:31.4315532Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-20T00:38:31.4316835Z     resource_test.go:627: Step 1/3 error: Error running apply: exit status 1
2026-02-20T00:38:31.4317545Z         
2026-02-20T00:38:31.4317990Z         Error: Error in create
2026-02-20T00:38:31.4318439Z         
2026-02-20T00:38:31.4319060Z           with mongodbatlas_advanced_cluster.test,
2026-02-20T00:38:31.4320293Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-20T00:38:31.4321443Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-20T00:38:31.4322030Z         
2026-02-20T00:38:31.4322808Z         cluster name: test-acc-tf-c-7579512670180720665, API error details:
2026-02-20T00:38:31.4324053Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6997acaa73841e1a88a6a3b8/clusters
2026-02-20T00:38:31.4325319Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-20T00:38:31.4327113Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-20T00:38:31.4328123Z         Conflict. Params: [], BadRequestDetail: 
2026-02-20T00:38:31.4884296Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (7.13s)
```

- 2026-02-21

### Error 2026-02-21T00:37:04+00:00
```
2026-02-21T00:37:04.2329499Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-02-21T00:37:04.3056797Z     resource_test.go:627: Adding variable groupId=6998fe2e23648dd3abd5a3a6
2026-02-21T00:37:04.3058020Z     resource_test.go:627: Adding variable clusterName=test-acc-tf-c-3879169112182935471
2026-02-21T00:38:40.2777397Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-21T00:38:46.1490992Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-21T00:38:46.1491935Z     resource_test.go:627: Step 1/3 error: Error running apply: exit status 1
2026-02-21T00:38:46.1492436Z         
2026-02-21T00:38:46.1492702Z         Error: Error in create
2026-02-21T00:38:46.1493047Z         
2026-02-21T00:38:46.1493396Z           with mongodbatlas_advanced_cluster.test,
2026-02-21T00:38:46.1494183Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-21T00:38:46.1494944Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-21T00:38:46.1495331Z         
2026-02-21T00:38:46.1495878Z         cluster name: test-acc-tf-c-3879169112182935471, API error details:
2026-02-21T00:38:46.1496688Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6998fe2e23648dd3abd5a3a6/clusters
2026-02-21T00:38:46.1497721Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-21T00:38:46.1498394Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-21T00:38:46.1499099Z         Conflict. Params: [], BadRequestDetail: 
2026-02-21T00:38:46.1950991Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (6.00s)
```

- 2026-02-22: MISSING
- 2026-02-23

### Error 2026-02-23T00:39:32+00:00
```
2026-02-23T00:39:32.2201183Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-02-23T00:39:32.2896778Z     resource_test.go:627: Adding variable groupId=699ba1c18decccf9757d60e6
2026-02-23T00:39:32.2897714Z     resource_test.go:627: Adding variable clusterName=test-acc-tf-c-7858054137215705756
2026-02-23T00:40:58.0789039Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-23T00:41:05.1436304Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-23T00:41:05.1437296Z     resource_test.go:627: Step 1/3 error: Error running apply: exit status 1
2026-02-23T00:41:05.1437986Z         
2026-02-23T00:41:05.1438422Z         Error: Error in create
2026-02-23T00:41:05.1438853Z         
2026-02-23T00:41:05.1439512Z           with mongodbatlas_advanced_cluster.test,
2026-02-23T00:41:05.1440720Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-23T00:41:05.1442099Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-23T00:41:05.1442694Z         
2026-02-23T00:41:05.1443459Z         cluster name: test-acc-tf-c-7858054137215705756, API error details:
2026-02-23T00:41:05.1444821Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699ba1c18decccf9757d60e6/clusters
2026-02-23T00:41:05.1446171Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-23T00:41:05.1447548Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-23T00:41:05.1448485Z         Conflict. Params: [], BadRequestDetail: 
2026-02-23T00:41:05.2249757Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (7.22s)
```

- 2026-02-24

### Error 2026-02-24T00:37:12+00:00
```
2026-02-24T00:37:12.0244426Z === RUN   TestAccMockableAdvancedCluster_symmetricSharded
2026-02-24T00:37:12.0958180Z     resource_test.go:627: Adding variable groupId=699cf2b48dfec41eaa8573f2
2026-02-24T00:37:12.0959034Z     resource_test.go:627: Adding variable clusterName=test-acc-tf-c-7518584351234922518
2026-02-24T00:40:00.5506894Z === CONT  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-24T00:40:05.9810769Z === NAME  TestAccMockableAdvancedCluster_symmetricSharded
2026-02-24T00:40:05.9811354Z     resource_test.go:627: Step 1/3 error: Error running apply: exit status 1
2026-02-24T00:40:05.9812037Z         
2026-02-24T00:40:05.9812523Z         Error: Error in create
2026-02-24T00:40:05.9812787Z         
2026-02-24T00:40:05.9813127Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:40:05.9813798Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:40:05.9814437Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:40:05.9815326Z         
2026-02-24T00:40:05.9815790Z         cluster name: test-acc-tf-c-7518584351234922518, API error details:
2026-02-24T00:40:05.9816497Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2b48dfec41eaa8573f2/clusters
2026-02-24T00:40:05.9817252Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-24T00:40:05.9817959Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-24T00:40:05.9818494Z         Conflict. Params: [], BadRequestDetail: 
2026-02-24T00:40:06.0302844Z --- FAIL: TestAccMockableAdvancedCluster_symmetricSharded (5.55s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 33 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 27 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 31 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 39 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 32 minutes
  - PASS 29 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 32 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
