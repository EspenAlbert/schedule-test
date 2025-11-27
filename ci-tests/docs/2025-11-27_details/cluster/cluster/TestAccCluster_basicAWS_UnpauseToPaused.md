# cluster/cluster/TestAccCluster_basicAWS_UnpauseToPaused Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 23) FAIL(x 9)
Success rate: 71.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028100000) |  | dev | timeout | 11791.03s
[2025-11-19 00:28](#error-2025-11-19t0028460000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/691d0f3ba9e010496ad0080c/clusters/test-acc-tf-c-2508831205823840187 | dev |  | 1153.02s
[2025-11-19 09:29](#error-2025-11-19t0929440000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/691d8e055ab64e7c556730f7/clusters/test-acc-tf-c-6869305973977636990 | dev |  | 735.09s
[2025-11-20 00:27](#error-2025-11-20t0027530000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/691e6087f41e983fa168f620/clusters/test-acc-tf-c-5199808210689039494 | dev |  | 1181.02s
[2025-11-21 00:28](#error-2025-11-21t0028210000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/691fb222238ce57ddce3e4a6/clusters/test-acc-tf-c-8704572061068251547 | dev |  | 798.04s
[2025-11-22 00:26](#error-2025-11-22t0026550000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6921034d4aaa8d39323269a4/clusters/test-acc-tf-c-6435306856721855893 | dev |  | 964.08s
[2025-11-24 00:30](#error-2025-11-24t0030030000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6923a70921519f56cb85bb44/clusters/test-acc-tf-c-5517669820311441427 | dev |  | 983.08s
[2025-11-25 00:27](#error-2025-11-25t0027080000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6924f7d9def656331da0caed/clusters/test-acc-tf-c-2468959771643146228 | dev |  | 1197.08s
[2025-11-26 00:28](#error-2025-11-26t0028270000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/692649a9131e634a70c57e67/clusters/test-acc-tf-c-4420768579243327709 | dev |  | 777.02s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 20 minutes
- 2025-10-30

### Error 2025-10-30T00:28:10+00:00
```
2025-10-30T00:28:10.4927180Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-10-30T00:28:10.5127870Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-10-30T00:28:50.5067305Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-10-30T00:28:50.5068569Z     pre_check.go:46: Time before creating cluster: 2025-10-30T00:28:50.506407788Z, ProjectID: 6902b118abf4374f3298f77b, Cluster name: test-acc-tf-c-4225454017059833396
2025-10-30T03:44:41.8375045Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-10-30T03:44:41.8376177Z     resource_cluster_test.go:1247: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:44:41.8377322Z         
2025-10-30T03:44:41.8378902Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-4225454017059833396): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:44:41.8380028Z         
2025-10-30T03:44:41.8380489Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (11791.33s)
```

- 2025-10-31 PASS 23 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 18 minutes
- 2025-11-04 PASS 20 minutes
- 2025-11-05
  - PASS 25 minutes
  - PASS 18 minutes
- 2025-11-06 PASS 24 minutes
- 2025-11-07 PASS 22 minutes
- 2025-11-08 PASS 48 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 21 minutes
- 2025-11-11 PASS 18 minutes
- 2025-11-12 PASS 22 minutes
- 2025-11-13 PASS 26 minutes
- 2025-11-14 PASS 23 minutes
- 2025-11-15 PASS 18 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 19 minutes
- 2025-11-18 PASS 21 minutes
- 2025-11-19
  - FAIL 19 minutes

### Error 2025-11-19T00:28:46+00:00
```
2025-11-19T00:28:46.1658296Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-11-19T00:28:46.1741760Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-19T00:29:36.1778342Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-19T00:29:36.1779572Z     pre_check.go:46: Time before creating cluster: 2025-11-19T00:29:36.177567036Z, ProjectID: 691d0f3ba9e010496ad0080c, Cluster name: test-acc-tf-c-2508831205823840187
2025-11-19T00:45:06.2037301Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-19T00:45:06.2037973Z     resource_cluster_test.go:1247: Step 2/3 error: Error running apply: exit status 1
2025-11-19T00:45:06.2038384Z         
2025-11-19T00:45:06.2040754Z         Error: error updating MongoDB Cluster (test-acc-tf-c-2508831205823840187): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/691d0f3ba9e010496ad0080c/clusters/test-acc-tf-c-2508831205823840187: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-wk6hwe-shard-0.
2025-11-19T00:45:06.2042101Z         
2025-11-19T00:45:06.2042592Z           with mongodbatlas_cluster.test,
2025-11-19T00:45:06.2043196Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-19T00:45:06.2043742Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-19T00:45:06.2044033Z         
2025-11-19T00:47:59.4009250Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (1153.22s)
```

  - FAIL 12 minutes

### Error 2025-11-19T09:29:44+00:00
```
2025-11-19T09:29:44.1533938Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-11-19T09:29:44.1545146Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-19T09:30:09.1606386Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-19T09:30:09.1609145Z     pre_check.go:46: Time before creating cluster: 2025-11-19T09:30:09.160349484Z, ProjectID: 691d8e055ab64e7c556730f7, Cluster name: test-acc-tf-c-6869305973977636990
2025-11-19T09:39:47.6954111Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-19T09:39:47.6954740Z     resource_cluster_test.go:1247: Step 2/3 error: Error running apply: exit status 1
2025-11-19T09:39:47.6955153Z         
2025-11-19T09:39:47.6957429Z         Error: error updating MongoDB Cluster (test-acc-tf-c-6869305973977636990): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/691d8e055ab64e7c556730f7/clusters/test-acc-tf-c-6869305973977636990: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-kr1u65-shard-0.
2025-11-19T09:39:47.6958813Z         
2025-11-19T09:39:47.6959208Z           with mongodbatlas_cluster.test,
2025-11-19T09:39:47.6959754Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-19T09:39:47.6960239Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-19T09:39:47.6960513Z         
2025-11-19T09:42:00.0177349Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (735.87s)
```

- 2025-11-20

### Error 2025-11-20T00:27:53+00:00
```
2025-11-20T00:27:53.7547133Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-11-20T00:27:53.7559577Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-20T00:28:08.7591800Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-20T00:28:08.7593494Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:28:08.758924398Z, ProjectID: 691e6087f41e983fa168f620, Cluster name: test-acc-tf-c-5199808210689039494
2025-11-20T00:39:56.0687272Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-20T00:39:56.0687932Z     resource_cluster_test.go:1247: Step 2/3 error: Error running apply: exit status 1
2025-11-20T00:39:56.0688365Z         
2025-11-20T00:39:56.0690568Z         Error: error updating MongoDB Cluster (test-acc-tf-c-5199808210689039494): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/691e6087f41e983fa168f620/clusters/test-acc-tf-c-5199808210689039494: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-fdy9m8-shard-0.
2025-11-20T00:39:56.0691901Z         
2025-11-20T00:39:56.0692201Z           with mongodbatlas_cluster.test,
2025-11-20T00:39:56.0692802Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-20T00:39:56.0693347Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-20T00:39:56.0693642Z         
2025-11-20T00:47:34.9631867Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (1181.21s)
```

- 2025-11-21

### Error 2025-11-21T00:28:21+00:00
```
2025-11-21T00:28:21.3762874Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-11-21T00:28:21.3795476Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-21T00:28:41.3841709Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-21T00:28:41.3843508Z     pre_check.go:46: Time before creating cluster: 2025-11-21T00:28:41.383890355Z, ProjectID: 691fb222238ce57ddce3e4a6, Cluster name: test-acc-tf-c-8704572061068251547
2025-11-21T00:39:17.5054701Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-21T00:39:17.5055740Z     resource_cluster_test.go:1247: Step 2/3 error: Error running apply: exit status 1
2025-11-21T00:39:17.5056432Z         
2025-11-21T00:39:17.5059876Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8704572061068251547): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/691fb222238ce57ddce3e4a6/clusters/test-acc-tf-c-8704572061068251547: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-3qzjqb-shard-0.
2025-11-21T00:39:17.5062306Z         
2025-11-21T00:39:17.5062858Z           with mongodbatlas_cluster.test,
2025-11-21T00:39:17.5064611Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-21T00:39:17.5065572Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-21T00:39:17.5066110Z         
2025-11-21T00:41:39.8214919Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (798.44s)
```

- 2025-11-22

### Error 2025-11-22T00:26:55+00:00
```
2025-11-22T00:26:55.9526835Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-11-22T00:26:55.9544326Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-22T00:27:15.9580182Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-22T00:27:15.9582370Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:27:15.957700036Z, ProjectID: 6921034d4aaa8d39323269a4, Cluster name: test-acc-tf-c-6435306856721855893
2025-11-22T00:37:54.0818527Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-22T00:37:54.0819164Z     resource_cluster_test.go:1247: Step 2/3 error: Error running apply: exit status 1
2025-11-22T00:37:54.0819683Z         
2025-11-22T00:37:54.0822156Z         Error: error updating MongoDB Cluster (test-acc-tf-c-6435306856721855893): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6921034d4aaa8d39323269a4/clusters/test-acc-tf-c-6435306856721855893: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-qrhkzo-shard-0.
2025-11-22T00:37:54.0823475Z         
2025-11-22T00:37:54.0823764Z           with mongodbatlas_cluster.test,
2025-11-22T00:37:54.0824341Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-22T00:37:54.0824856Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-22T00:37:54.0825134Z         
2025-11-22T00:43:00.7376355Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (964.78s)
```

- 2025-11-23: MISSING
- 2025-11-24

### Error 2025-11-24T00:30:03+00:00
```
2025-11-24T00:30:03.7918465Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-11-24T00:30:03.8066287Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-24T00:31:03.8115378Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-24T00:31:03.8116605Z     pre_check.go:46: Time before creating cluster: 2025-11-24T00:31:03.811287059Z, ProjectID: 6923a70921519f56cb85bb44, Cluster name: test-acc-tf-c-5517669820311441427
2025-11-24T00:42:53.2532445Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-24T00:42:53.2533005Z     resource_cluster_test.go:1247: Step 2/3 error: Error running apply: exit status 1
2025-11-24T00:42:53.2533454Z         
2025-11-24T00:42:53.2537139Z         Error: error updating MongoDB Cluster (test-acc-tf-c-5517669820311441427): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6923a70921519f56cb85bb44/clusters/test-acc-tf-c-5517669820311441427: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-58l8fs-shard-0.
2025-11-24T00:42:53.2539755Z         
2025-11-24T00:42:53.2540296Z           with mongodbatlas_cluster.test,
2025-11-24T00:42:53.2541395Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-24T00:42:53.2542370Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-24T00:42:53.2542919Z         
2025-11-24T00:46:27.6207144Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (983.82s)
```

- 2025-11-25

### Error 2025-11-25T00:27:08+00:00
```
2025-11-25T00:27:08.3794937Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-11-25T00:27:08.3822701Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-25T00:27:53.3956637Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-25T00:27:53.3957898Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:27:53.395405297Z, ProjectID: 6924f7d9def656331da0caed, Cluster name: test-acc-tf-c-2468959771643146228
2025-11-25T00:42:00.6073518Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-25T00:42:00.6074419Z     resource_cluster_test.go:1247: Step 2/3 error: Error running apply: exit status 1
2025-11-25T00:42:00.6075091Z         
2025-11-25T00:42:00.6078330Z         Error: error updating MongoDB Cluster (test-acc-tf-c-2468959771643146228): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6924f7d9def656331da0caed/clusters/test-acc-tf-c-2468959771643146228: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-jtrpgu-shard-0.
2025-11-25T00:42:00.6080544Z         
2025-11-25T00:42:00.6081036Z           with mongodbatlas_cluster.test,
2025-11-25T00:42:00.6082175Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-25T00:42:00.6083059Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-25T00:42:00.6083541Z         
2025-11-25T00:47:06.1426116Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (1197.76s)
```

- 2025-11-26

### Error 2025-11-26T00:28:27+00:00
```
2025-11-26T00:28:27.5548116Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2025-11-26T00:28:27.5555092Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-26T00:28:37.5553436Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-26T00:28:37.5555555Z     pre_check.go:46: Time before creating cluster: 2025-11-26T00:28:37.555082933Z, ProjectID: 692649a9131e634a70c57e67, Cluster name: test-acc-tf-c-4420768579243327709
2025-11-26T00:39:12.7345880Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2025-11-26T00:39:12.7346471Z     resource_cluster_test.go:1247: Step 2/3 error: Error running apply: exit status 1
2025-11-26T00:39:12.7346958Z         
2025-11-26T00:39:12.7349523Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4420768579243327709): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/692649a9131e634a70c57e67/clusters/test-acc-tf-c-4420768579243327709: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-qb07fo-shard-0.
2025-11-26T00:39:12.7350932Z         
2025-11-26T00:39:12.7351228Z           with mongodbatlas_cluster.test,
2025-11-26T00:39:12.7351806Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-26T00:39:12.7352338Z           12: resource "mongodbatlas_cluster" "test" {
2025-11-26T00:39:12.7352626Z         
2025-11-26T00:41:24.7357221Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (777.18s)
```

- 2025-11-27 PASS 29 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 19 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 19 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 19 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 25 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 20 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
