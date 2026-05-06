# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-10 00:44](#error-2026-04-10t0044330000) | OPERATION_INVALID_UNHEALTHY_NODES /api/atlas/v1.0/groups/69d847ed399332cee384c0ec/clusters/test-acc-tf-c-8945787798093508800 | dev |  | 987.07s
[2026-04-16 00:53](#error-2026-04-16t0053120000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e032f41ec945fedc72ffc3/clusters | dev | out_of_capacity | 35.07s
[2026-04-24 00:51](#error-2026-04-24t0051180000) | CANNOT_PAUSE_CLUSTER_WITH_PENDING_CHANGES /api/atlas/v1.0/groups/69eabe83d0fc1bc324788962/clusters/test-acc-tf-c-3964014916854648013 | dev |  | 573.09s
[2026-04-28 00:55](#error-2026-04-28t0055230000) | CANNOT_PAUSE_CLUSTER_WITH_PENDING_CHANGES /api/atlas/v1.0/groups/69f005763c93ff81902c5f40/clusters/test-acc-tf-c-3160721732131517385 | dev |  | 549.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 56 minutes
- 2026-04-08 PASS 24 minutes
- 2026-04-09 PASS 42 minutes
- 2026-04-10

### Error 2026-04-10T00:44:33+00:00
```
2026-04-10T00:44:33.8953207Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-04-10T00:44:33.8985755Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-04-10T00:45:13.9055322Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-04-10T00:45:13.9057514Z     pre_check.go:46: Time before creating cluster: 2026-04-10T00:45:13.905215998Z, ProjectID: 69d847ed399332cee384c0ec, Cluster name: test-acc-tf-c-8945787798093508800
2026-04-10T01:01:01.5389697Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-04-10T01:01:01.5390255Z     resource_cluster_test.go:1262: Step 1/2 error: Error running apply: exit status 1
2026-04-10T01:01:01.5390692Z         
2026-04-10T01:01:01.5394150Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8945787798093508800): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69d847ed399332cee384c0ec/clusters/test-acc-tf-c-8945787798093508800: 400 (request "OPERATION_INVALID_UNHEALTHY_NODES") The operation cannot begin because monitoring indicates these nodes are not in the primary or secondary state: atlas-hyoznc-shard-00-00.nx5ooj.mongodb-dev.net, atlas-hyoznc-shard-00-02.nx5ooj.mongodb-dev.net, atlas-hyoznc-shard-00-01.nx5ooj.mongodb-dev.net.
2026-04-10T01:01:01.5396457Z         
2026-04-10T01:01:01.5397234Z           with mongodbatlas_cluster.test,
2026-04-10T01:01:01.5397915Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-10T01:01:01.5398498Z           12: resource "mongodbatlas_cluster" "test" {
2026-04-10T01:01:01.5398806Z         
2026-04-10T01:01:01.5813159Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (987.68s)
```

- 2026-04-11 PASS 20 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 31 minutes
- 2026-04-14 PASS 22 minutes
- 2026-04-15 PASS 28 minutes
- 2026-04-16

### Error 2026-04-16T00:53:12+00:00
```
2026-04-16T00:53:12.0709292Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-04-16T00:53:12.1364264Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-04-16T00:53:47.0835610Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-04-16T00:53:47.0837652Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:53:47.083224349Z, ProjectID: 69e032f41ec945fedc72ffc3, Cluster name: test-acc-tf-c-8409617303307806655
2026-04-16T00:53:47.7783232Z   
2026-04-16T00:53:47.7784195Z     resource_cluster_test.go:1262: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:53:47.7784768Z         
2026-04-16T00:53:47.7786599Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e032f41ec945fedc72ffc3/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:47.7787909Z         
2026-04-16T00:53:47.7788251Z           with mongodbatlas_cluster.test,
2026-04-16T00:53:47.7789370Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-16T00:53:47.7790462Z           12: resource "mongodbatlas_cluster" "test" {
2026-04-16T00:53:47.7791006Z         
2026-04-16T00:53:47.8253238Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (35.74s)
```

- 2026-04-17 PASS 25 minutes
- 2026-04-18 PASS 30 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 21 minutes
- 2026-04-21 PASS 32 minutes
- 2026-04-22 PASS an hour
- 2026-04-23 PASS 29 minutes
- 2026-04-24

### Error 2026-04-24T00:51:18+00:00
```
2026-04-24T00:51:18.7563736Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-04-24T00:51:18.8268031Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-04-24T00:52:08.7801645Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-04-24T00:52:08.7803834Z     pre_check.go:46: Time before creating cluster: 2026-04-24T00:52:08.7797974Z, ProjectID: 69eabe83d0fc1bc324788962, Cluster name: test-acc-tf-c-3964014916854648013
2026-04-24T01:00:52.6251456Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-04-24T01:00:52.6252227Z     resource_cluster_test.go:1262: Step 1/2 error: Error running apply: exit status 1
2026-04-24T01:00:52.6252720Z         
2026-04-24T01:00:52.6255050Z         Error: error updating MongoDB Cluster (test-acc-tf-c-3964014916854648013): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69eabe83d0fc1bc324788962/clusters/test-acc-tf-c-3964014916854648013: 409 (request "CANNOT_PAUSE_CLUSTER_WITH_PENDING_CHANGES") Cannot pause a cluster with pending changes.
2026-04-24T01:00:52.6256361Z         
2026-04-24T01:00:52.6256684Z           with mongodbatlas_cluster.test,
2026-04-24T01:00:52.6257584Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-24T01:00:52.6258189Z           12: resource "mongodbatlas_cluster" "test" {
2026-04-24T01:00:52.6258502Z         
2026-04-24T01:00:52.6720638Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (573.91s)
```

- 2026-04-25 PASS 24 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 27 minutes
- 2026-04-28

### Error 2026-04-28T00:55:23+00:00
```
2026-04-28T00:55:23.8625421Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-04-28T00:55:23.8743549Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-04-28T00:55:48.8707186Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-04-28T00:55:48.8708403Z     pre_check.go:46: Time before creating cluster: 2026-04-28T00:55:48.870489203Z, ProjectID: 69f005763c93ff81902c5f40, Cluster name: test-acc-tf-c-3160721732131517385
2026-04-28T01:04:33.2436818Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-04-28T01:04:33.2437500Z     resource_cluster_test.go:1262: Step 1/2 error: Error running apply: exit status 1
2026-04-28T01:04:33.2437936Z         
2026-04-28T01:04:33.2439622Z         Error: error updating MongoDB Cluster (test-acc-tf-c-3160721732131517385): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69f005763c93ff81902c5f40/clusters/test-acc-tf-c-3160721732131517385: 409 (request "CANNOT_PAUSE_CLUSTER_WITH_PENDING_CHANGES") Cannot pause a cluster with pending changes.
2026-04-28T01:04:33.2440937Z         
2026-04-28T01:04:33.2441237Z           with mongodbatlas_cluster.test,
2026-04-28T01:04:33.2442058Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-28T01:04:33.2442634Z           12: resource "mongodbatlas_cluster" "test" {
2026-04-28T01:04:33.2442925Z         
2026-04-28T01:04:33.2972095Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (549.43s)
```

- 2026-04-29 PASS 28 minutes
- 2026-04-30 PASS 42 minutes
- 2026-05-01 PASS 28 minutes
- 2026-05-02 PASS 21 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 26 minutes
- 2026-05-05 PASS 50 minutes
- 2026-05-06 PASS 36 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 26 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 26 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 26 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 24 minutes
  - PASS 19 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 31 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 27 minutes
- 2026-05-04 PASS 24 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 26 minutes
