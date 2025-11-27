# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 22) FAIL(x 10)
Success rate: 68.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 11936.02s
[2025-11-19 00:28](#error-2025-11-19t0028460000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/691d0f3ba9e010496ad0080c/clusters/test-acc-tf-c-5754125030405865889 | dev |  | 825.05s
[2025-11-19 09:29](#error-2025-11-19t0929440000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/691d8e055ab64e7c556730f7/clusters/test-acc-tf-c-2161878351706893325 | dev |  | 473.03s
[2025-11-20 00:27](#error-2025-11-20t0027530000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/691e6087f41e983fa168f620/clusters/test-acc-tf-c-4200676386501854392 | dev |  | 553.00s
[2025-11-21 00:28](#error-2025-11-21t0028210000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/691fb222238ce57ddce3e4a6/clusters/test-acc-tf-c-4421385651130450682 | dev |  | 467.06s
[2025-11-22 00:26](#error-2025-11-22t0026550000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6921034d4aaa8d39323269a4/clusters/test-acc-tf-c-4476610525523143309 | dev |  | 468.03s
[2025-11-24 00:30](#error-2025-11-24t0030030000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6923a70921519f56cb85bb44/clusters/test-acc-tf-c-1137392421878518253 | dev |  | 508.03s
[2025-11-25 00:27](#error-2025-11-25t0027080000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6924f7d9def656331da0caed/clusters/test-acc-tf-c-5708628487276736506 | dev |  | 773.09s
[2025-11-26 00:28](#error-2025-11-26t0028270000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/692649a9131e634a70c57e67/clusters/test-acc-tf-c-1807979682074977705 | dev |  | 467.02s
[2025-11-27 00:28](#error-2025-11-27t0028150000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/69279b1d3c4d827e6c4226b6/clusters/test-acc-tf-c-1744537125732891254 | dev |  | 754.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 28 minutes
- 2025-10-30

### Error 2025-10-30T00:28:10+00:00
```
2025-10-30T00:28:10.4929085Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-10-30T00:28:10.5054668Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-10-30T00:28:55.5087359Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-10-30T00:28:55.5088880Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:55.508403012Z, ProjectID: 6902b118abf4374f3298f77b, Cluster name: test-acc-tf-c-2778914024425745007
2025-10-30T03:47:06.7537469Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-10-30T03:47:06.7538159Z     resource_cluster_test.go:1286: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:47:06.7538656Z         
2025-10-30T03:47:06.7539553Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-2778914024425745007): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:47:06.7540203Z         
2025-10-30T03:47:06.7540491Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (11936.25s)
```

- 2025-10-31 PASS 25 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 21 minutes
- 2025-11-04 PASS 20 minutes
- 2025-11-05
  - PASS 25 minutes
  - PASS 20 minutes
- 2025-11-06 PASS 28 minutes
- 2025-11-07 PASS 24 minutes
- 2025-11-08 PASS 50 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 21 minutes
- 2025-11-11 PASS 21 minutes
- 2025-11-12 PASS 26 minutes
- 2025-11-13 PASS 31 minutes
- 2025-11-14 PASS 27 minutes
- 2025-11-15 PASS 21 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 26 minutes
- 2025-11-18 PASS 23 minutes
- 2025-11-19
  - FAIL 13 minutes

### Error 2025-11-19T00:28:46+00:00
```
2025-11-19T00:28:46.1659611Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-11-19T00:28:46.1715016Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-19T00:29:06.1668887Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-19T00:29:06.1670562Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:29:06.166593682Z, ProjectID: 691d0f3ba9e010496ad0080c, Cluster name: test-acc-tf-c-5754125030405865889
2025-11-19T00:42:31.6056838Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-19T00:42:31.6057818Z     resource_cluster_test.go:1286: Step 1/2 error: Error running apply: exit status 1
2025-11-19T00:42:31.6058521Z         
2025-11-19T00:42:31.6060983Z         Error: error updating MongoDB Cluster (test-acc-tf-c-5754125030405865889): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/691d0f3ba9e010496ad0080c/clusters/test-acc-tf-c-5754125030405865889: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-94nvih-shard-0.
2025-11-19T00:42:31.6062852Z         
2025-11-19T00:42:31.6063199Z           with mongodbatlas_cluster.test,
2025-11-19T00:42:31.6063836Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-19T00:42:31.6064396Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-19T00:42:31.6064698Z         
2025-11-19T00:42:31.6488466Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (825.48s)
```

  - FAIL 7 minutes

### Error 2025-11-19T09:29:44+00:00
```
2025-11-19T09:29:44.1535474Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-11-19T09:29:44.1544606Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-19T09:30:04.1578231Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-19T09:30:04.1579885Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:30:04.1575532Z, ProjectID: 691d8e055ab64e7c556730f7, Cluster name: test-acc-tf-c-2161878351706893325
2025-11-19T09:37:37.3786213Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-19T09:37:37.3786769Z     resource_cluster_test.go:1286: Step 1/2 error: Error running apply: exit status 1
2025-11-19T09:37:37.3787133Z         
2025-11-19T09:37:37.3789843Z         Error: error updating MongoDB Cluster (test-acc-tf-c-2161878351706893325): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/691d8e055ab64e7c556730f7/clusters/test-acc-tf-c-2161878351706893325: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-iezglo-shard-0.
2025-11-19T09:37:37.3792316Z         
2025-11-19T09:37:37.3792828Z           with mongodbatlas_cluster.test,
2025-11-19T09:37:37.3793736Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-19T09:37:37.3794565Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-19T09:37:37.3795005Z         
2025-11-19T09:37:37.4219402Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (473.27s)
```

- 2025-11-20

### Error 2025-11-20T00:27:53+00:00
```
2025-11-20T00:27:53.7548424Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-11-20T00:27:53.7565660Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-20T00:28:23.7672760Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-20T00:28:23.7674427Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:28:23.767033997Z, ProjectID: 691e6087f41e983fa168f620, Cluster name: test-acc-tf-c-4200676386501854392
2025-11-20T00:37:06.7530501Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-20T00:37:06.7531176Z     resource_cluster_test.go:1286: Step 1/2 error: Error running apply: exit status 1
2025-11-20T00:37:06.7531598Z         
2025-11-20T00:37:06.7533847Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4200676386501854392): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/691e6087f41e983fa168f620/clusters/test-acc-tf-c-4200676386501854392: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-11165g-shard-0.
2025-11-20T00:37:06.7535367Z         
2025-11-20T00:37:06.7535670Z           with mongodbatlas_cluster.test,
2025-11-20T00:37:06.7536268Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-20T00:37:06.7537062Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-20T00:37:06.7537356Z         
2025-11-20T00:37:06.8021827Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (553.04s)
```

- 2025-11-21

### Error 2025-11-21T00:28:21+00:00
```
2025-11-21T00:28:21.3764287Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-11-21T00:28:21.3792631Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-21T00:28:36.3814236Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-21T00:28:36.3815579Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:28:36.381082625Z, ProjectID: 691fb222238ce57ddce3e4a6, Cluster name: test-acc-tf-c-4421385651130450682
2025-11-21T00:36:08.9184825Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-21T00:36:08.9185548Z     resource_cluster_test.go:1286: Step 1/2 error: Error running apply: exit status 1
2025-11-21T00:36:08.9186092Z         
2025-11-21T00:36:08.9188431Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4421385651130450682): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/691fb222238ce57ddce3e4a6/clusters/test-acc-tf-c-4421385651130450682: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-bfceor-shard-0.
2025-11-21T00:36:08.9190016Z         
2025-11-21T00:36:08.9190327Z           with mongodbatlas_cluster.test,
2025-11-21T00:36:08.9190917Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-21T00:36:08.9191444Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-21T00:36:08.9191891Z         
2025-11-21T00:36:08.9618517Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (467.58s)
```

- 2025-11-22

### Error 2025-11-22T00:26:55+00:00
```
2025-11-22T00:26:55.9532319Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-11-22T00:26:55.9541215Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-22T00:27:10.9567696Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-22T00:27:10.9569228Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:27:10.956468773Z, ProjectID: 6921034d4aaa8d39323269a4, Cluster name: test-acc-tf-c-4476610525523143309
2025-11-22T00:34:44.2487100Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-22T00:34:44.2487702Z     resource_cluster_test.go:1286: Step 1/2 error: Error running apply: exit status 1
2025-11-22T00:34:44.2488159Z         
2025-11-22T00:34:44.2490781Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4476610525523143309): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6921034d4aaa8d39323269a4/clusters/test-acc-tf-c-4476610525523143309: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-3eil3a-shard-0.
2025-11-22T00:34:44.2492468Z         
2025-11-22T00:34:44.2492758Z           with mongodbatlas_cluster.test,
2025-11-22T00:34:44.2493581Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-22T00:34:44.2494120Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-22T00:34:44.2494548Z         
2025-11-22T00:34:44.2926063Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (468.34s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:03+00:00
```
2025-11-24T00:30:03.7919763Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-11-24T00:30:03.8065394Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-24T00:30:58.8087157Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-24T00:30:58.8088635Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:30:58.808459587Z, ProjectID: 6923a70921519f56cb85bb44, Cluster name: test-acc-tf-c-1137392421878518253
2025-11-24T00:38:32.0705806Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-24T00:38:32.0706680Z     resource_cluster_test.go:1286: Step 1/2 error: Error running apply: exit status 1
2025-11-24T00:38:32.0707264Z         
2025-11-24T00:38:32.0709223Z         Error: error updating MongoDB Cluster (test-acc-tf-c-1137392421878518253): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6923a70921519f56cb85bb44/clusters/test-acc-tf-c-1137392421878518253: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-bgyfke-shard-0.
2025-11-24T00:38:32.0710771Z         
2025-11-24T00:38:32.0711078Z           with mongodbatlas_cluster.test,
2025-11-24T00:38:32.0711891Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-24T00:38:32.0712535Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-24T00:38:32.0712833Z         
2025-11-24T00:38:32.1145394Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (508.31s)
```

- 2025-11-25

### Error 2025-11-25T00:27:08+00:00
```
2025-11-25T00:27:08.3796807Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-11-25T00:27:08.3821515Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-25T00:27:48.3933894Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-25T00:27:48.3935212Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:27:48.393164061Z, ProjectID: 6924f7d9def656331da0caed, Cluster name: test-acc-tf-c-5708628487276736506
2025-11-25T00:40:02.2501791Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-25T00:40:02.2502618Z     resource_cluster_test.go:1286: Step 1/2 error: Error running apply: exit status 1
2025-11-25T00:40:02.2503292Z         
2025-11-25T00:40:02.2506686Z         Error: error updating MongoDB Cluster (test-acc-tf-c-5708628487276736506): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6924f7d9def656331da0caed/clusters/test-acc-tf-c-5708628487276736506: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-13v7v9-shard-0.
2025-11-25T00:40:02.2509047Z         
2025-11-25T00:40:02.2509570Z           with mongodbatlas_cluster.test,
2025-11-25T00:40:02.2510963Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-25T00:40:02.2512103Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-25T00:40:02.2512603Z         
2025-11-25T00:40:02.2947489Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (773.91s)
```

- 2025-11-26

### Error 2025-11-26T00:28:27+00:00
```
2025-11-26T00:28:27.5549124Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-11-26T00:28:27.5557467Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-26T00:28:42.5562964Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-26T00:28:42.5564386Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:28:42.556023142Z, ProjectID: 692649a9131e634a70c57e67, Cluster name: test-acc-tf-c-1807979682074977705
2025-11-26T00:36:14.7377942Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-26T00:36:14.7378632Z     resource_cluster_test.go:1286: Step 1/2 error: Error running apply: exit status 1
2025-11-26T00:36:14.7379105Z         
2025-11-26T00:36:14.7382171Z         Error: error updating MongoDB Cluster (test-acc-tf-c-1807979682074977705): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/692649a9131e634a70c57e67/clusters/test-acc-tf-c-1807979682074977705: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-j2hwqn-shard-0.
2025-11-26T00:36:14.7402432Z         
2025-11-26T00:36:14.7402907Z           with mongodbatlas_cluster.test,
2025-11-26T00:36:14.7403499Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-26T00:36:14.7404047Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-26T00:36:14.7404334Z         
2025-11-26T00:36:14.7810679Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (467.23s)
```

- 2025-11-27

### Error 2025-11-27T00:28:15+00:00
```
2025-11-27T00:28:15.4732448Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2025-11-27T00:28:15.4783417Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-27T00:28:25.4759807Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-27T00:28:25.4761122Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:28:25.475751345Z, ProjectID: 69279b1d3c4d827e6c4226b6, Cluster name: test-acc-tf-c-1744537125732891254
2025-11-27T00:40:49.9177946Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2025-11-27T00:40:49.9178911Z     resource_cluster_test.go:1286: Step 1/2 error: Error running apply: exit status 1
2025-11-27T00:40:49.9179596Z         
2025-11-27T00:40:49.9183424Z         Error: error updating MongoDB Cluster (test-acc-tf-c-1744537125732891254): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69279b1d3c4d827e6c4226b6/clusters/test-acc-tf-c-1744537125732891254: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-ee4w0k-shard-0.
2025-11-27T00:40:49.9185883Z         
2025-11-27T00:40:49.9186411Z           with mongodbatlas_cluster.test,
2025-11-27T00:40:49.9187473Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-27T00:40:49.9188424Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-27T00:40:49.9188918Z         
2025-11-27T00:40:49.9658838Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (754.49s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 23 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 23 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 22 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 23 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 21 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
