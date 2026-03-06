# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 28) FAIL(x 8)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 00:38](#error-2026-02-05t0038590000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6983e6a3304923ebd1859e98/clusters | dev | out_of_capacity | 8.05s
[2026-02-16 00:39](#error-2026-02-16t0039380000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6992674a60ee1ae24ac9cd1d/clusters | dev | out_of_capacity | 8.06s
[2026-02-19 00:39](#error-2026-02-19t0039470000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69965bd35b4417cf65b8f84a/clusters | dev | out_of_capacity | 9.09s
[2026-02-21 00:36](#error-2026-02-21t0036580000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6998fe2a23648dd3abd58fec/clusters | dev | out_of_capacity | 8.07s
[2026-02-23 00:39](#error-2026-02-23t0039260000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699ba1be9c9b77e72d260109/clusters | dev | out_of_capacity | 9.07s
[2026-02-24 00:37](#error-2026-02-24t0037050000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699cf2b18dfec41eaa8533ad/clusters | dev | out_of_capacity | 9.04s
[2026-02-26 00:36](#error-2026-02-26t0036420000) | OUT_OF_CAPACITY /api/atlas/v2/groups/699f959a6ef93d0b6c18da44/clusters | dev | out_of_capacity | 10.01s
[2026-03-04 00:38](#error-2026-03-04t0038040000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69a77eeca0aca1fefeebc447/clusters | dev | out_of_capacity | 10.06s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T00:38:59+00:00
```
2026-02-05T00:38:59.3531284Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-05T00:40:26.3016526Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-05T00:40:31.8592306Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-05T00:40:31.8593501Z     resource_test.go:158: Step 1/3 error: Error running apply: exit status 1
2026-02-05T00:40:31.8594239Z         
2026-02-05T00:40:31.8594702Z         Error: Error in create
2026-02-05T00:40:31.8595177Z         
2026-02-05T00:40:31.8595766Z           with mongodbatlas_advanced_cluster.test,
2026-02-05T00:40:31.8596980Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-05T00:40:31.8598641Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-05T00:40:31.8599258Z         
2026-02-05T00:40:31.8600068Z         cluster name: test-acc-tf-c-1927968992264014809, API error details:
2026-02-05T00:40:31.8601386Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a3304923ebd1859e98/clusters
2026-02-05T00:40:31.8602710Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-05T00:40:31.8604904Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-05T00:40:31.8605842Z         Conflict. Params: [], BadRequestDetail: 
2026-02-05T00:40:31.9030513Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (8.53s)
```

- 2026-02-06 PASS an hour
- 2026-02-07 PASS an hour
- 2026-02-08: MISSING
- 2026-02-09 PASS an hour
- 2026-02-10 PASS an hour
- 2026-02-11 PASS an hour
- 2026-02-12 PASS an hour
- 2026-02-13 PASS an hour
- 2026-02-14 PASS an hour
- 2026-02-15: MISSING
- 2026-02-16

### Error 2026-02-16T00:39:38+00:00
```
2026-02-16T00:39:38.5393667Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-16T00:41:04.9193272Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-16T00:41:11.2121658Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-16T00:41:11.2122668Z     resource_test.go:158: Step 1/3 error: Error running apply: exit status 1
2026-02-16T00:41:11.2123340Z         
2026-02-16T00:41:11.2123767Z         Error: Error in create
2026-02-16T00:41:11.2124177Z         
2026-02-16T00:41:11.2124796Z           with mongodbatlas_advanced_cluster.test,
2026-02-16T00:41:11.2132089Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-16T00:41:11.2133355Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-16T00:41:11.2133936Z         
2026-02-16T00:41:11.2134742Z         cluster name: test-acc-tf-c-3948501926694943154, API error details:
2026-02-16T00:41:11.2136213Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6992674a60ee1ae24ac9cd1d/clusters
2026-02-16T00:41:11.2146855Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-16T00:41:11.2148270Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-16T00:41:11.2149228Z         Conflict. Params: [], BadRequestDetail: 
2026-02-16T00:41:11.2964483Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (8.57s)
```

- 2026-02-17 PASS an hour
- 2026-02-18 PASS an hour
- 2026-02-19

### Error 2026-02-19T00:39:47+00:00
```
2026-02-19T00:39:47.5478215Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-19T00:42:27.0704963Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-19T00:42:33.0279176Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-19T00:42:33.0280142Z     resource_test.go:157: Step 1/3 error: Error running apply: exit status 1
2026-02-19T00:42:33.0280808Z         
2026-02-19T00:42:33.0281235Z         Error: Error in create
2026-02-19T00:42:33.0281653Z         
2026-02-19T00:42:33.0282221Z           with mongodbatlas_advanced_cluster.test,
2026-02-19T00:42:33.0283395Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-19T00:42:33.0284710Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-19T00:42:33.0285252Z         
2026-02-19T00:42:33.0285986Z         cluster name: test-acc-tf-c-7645192299005033086, API error details:
2026-02-19T00:42:33.0287187Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69965bd35b4417cf65b8f84a/clusters
2026-02-19T00:42:33.0288382Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-19T00:42:33.0339581Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-19T00:42:33.0340637Z         Conflict. Params: [], BadRequestDetail: 
2026-02-19T00:42:33.0941174Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (9.90s)
```

- 2026-02-20 PASS an hour
- 2026-02-21

### Error 2026-02-21T00:36:58+00:00
```
2026-02-21T00:36:58.8733100Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-21T00:38:40.1830081Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-21T00:38:45.8033664Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-21T00:38:45.8034565Z     resource_test.go:157: Step 1/3 error: Error running apply: exit status 1
2026-02-21T00:38:45.8035096Z         
2026-02-21T00:38:45.8035493Z         Error: Error in create
2026-02-21T00:38:45.8035753Z         
2026-02-21T00:38:45.8036199Z           with mongodbatlas_advanced_cluster.test,
2026-02-21T00:38:45.8037252Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-21T00:38:45.8038029Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-21T00:38:45.8039101Z         
2026-02-21T00:38:45.8039557Z         cluster name: test-acc-tf-c-5002059949792194085, API error details:
2026-02-21T00:38:45.8040282Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6998fe2a23648dd3abd58fec/clusters
2026-02-21T00:38:45.8040985Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-21T00:38:45.8041646Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-21T00:38:45.8042155Z         Conflict. Params: [], BadRequestDetail: 
2026-02-21T00:38:45.8510983Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (8.74s)
```

- 2026-02-22: MISSING
- 2026-02-23

### Error 2026-02-23T00:39:26+00:00
```
2026-02-23T00:39:26.1362279Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-23T00:40:58.0681886Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-23T00:41:05.0477134Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-23T00:41:05.0478012Z     resource_test.go:157: Step 1/3 error: Error running apply: exit status 1
2026-02-23T00:41:05.0478709Z         
2026-02-23T00:41:05.0479152Z         Error: Error in create
2026-02-23T00:41:05.0479521Z         
2026-02-23T00:41:05.0480050Z           with mongodbatlas_advanced_cluster.test,
2026-02-23T00:41:05.0481255Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-23T00:41:05.0482708Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-23T00:41:05.0483307Z         
2026-02-23T00:41:05.0484144Z         cluster name: test-acc-tf-c-3344939456036784984, API error details:
2026-02-23T00:41:05.0485422Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699ba1be9c9b77e72d260109/clusters
2026-02-23T00:41:05.0486712Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-23T00:41:05.0487941Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-23T00:41:05.0488875Z         Conflict. Params: [], BadRequestDetail: 
2026-02-23T00:41:05.0956541Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (9.72s)
```

- 2026-02-24

### Error 2026-02-24T00:37:05+00:00
```
2026-02-24T00:37:05.0256337Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-24T00:40:00.5506135Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-24T00:40:06.2362012Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-24T00:40:06.2362882Z     resource_test.go:157: Step 1/3 error: Error running apply: exit status 1
2026-02-24T00:40:06.2363419Z         
2026-02-24T00:40:06.2363693Z         Error: Error in create
2026-02-24T00:40:06.2363949Z         
2026-02-24T00:40:06.2364415Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:40:06.2365227Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:40:06.2366017Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:40:06.2366355Z         
2026-02-24T00:40:06.2366915Z         cluster name: test-acc-tf-c-3640470920272894424, API error details:
2026-02-24T00:40:06.2367759Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2b18dfec41eaa8533ad/clusters
2026-02-24T00:40:06.2368617Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-24T00:40:06.2369412Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-24T00:40:06.2370057Z         Conflict. Params: [], BadRequestDetail: 
2026-02-24T00:40:06.2830925Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (9.41s)
```

- 2026-02-25 PASS an hour
- 2026-02-26

### Error 2026-02-26T00:36:42+00:00
```
2026-02-26T00:36:42.6427579Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-26T00:39:22.1868613Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-26T00:39:28.9550707Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-26T00:39:28.9551349Z     resource_test.go:157: Step 1/3 error: Error running apply: exit status 1
2026-02-26T00:39:28.9551811Z         
2026-02-26T00:39:28.9552063Z         Error: Error in create
2026-02-26T00:39:28.9552498Z         
2026-02-26T00:39:28.9552851Z           with mongodbatlas_advanced_cluster.test,
2026-02-26T00:39:28.9553637Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-26T00:39:28.9554279Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-26T00:39:28.9554597Z         
2026-02-26T00:39:28.9555020Z         cluster name: test-acc-tf-c-8541523988676908321, API error details:
2026-02-26T00:39:28.9555728Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699f959a6ef93d0b6c18da44/clusters
2026-02-26T00:39:28.9556475Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-26T00:39:28.9557149Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-26T00:39:28.9557652Z         Conflict. Params: [], BadRequestDetail: 
2026-02-26T00:39:29.0096252Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10.07s)
```

- 2026-02-27 PASS an hour
- 2026-02-28 PASS an hour
- 2026-03-01: MISSING
- 2026-03-02
  - PASS an hour
  - PASS an hour
- 2026-03-03 PASS an hour
- 2026-03-04

### Error 2026-03-04T00:38:04+00:00
```
2026-03-04T00:38:04.8848847Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-03-04T00:39:33.1288464Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-03-04T00:39:39.9668437Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-03-04T00:39:39.9669994Z     resource_test.go:157: Step 1/3 error: Error running apply: exit status 1
2026-03-04T00:39:39.9670894Z         
2026-03-04T00:39:39.9671344Z         Error: Error in create
2026-03-04T00:39:39.9671953Z         
2026-03-04T00:39:39.9672710Z           with mongodbatlas_advanced_cluster.test,
2026-03-04T00:39:39.9674325Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-03-04T00:39:39.9675541Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-03-04T00:39:39.9676361Z         
2026-03-04T00:39:39.9677186Z         cluster name: test-acc-tf-c-6377614939228264999, API error details:
2026-03-04T00:39:39.9678688Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77eeca0aca1fefeebc447/clusters
2026-03-04T00:39:39.9679999Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-03-04T00:39:39.9681237Z         region is currently out of capacity for the requested instance size. Reason:
2026-03-04T00:39:39.9682182Z         Conflict. Params: [], BadRequestDetail: 
2026-03-04T00:39:40.0769817Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10.58s)
```

- 2026-03-05 PASS an hour
- 2026-03-06 PASS an hour

## QA Environment
### Timeline
- 2026-02-04 PASS 37 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 42 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 48 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 40 minutes
  - PASS 36 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 42 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 42 minutes
- 2026-03-02 PASS 34 minutes
- 2026-03-03 PASS 39 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
