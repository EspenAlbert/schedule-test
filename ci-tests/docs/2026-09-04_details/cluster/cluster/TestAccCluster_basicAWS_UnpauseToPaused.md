# cluster/cluster/TestAccCluster_basicAWS_UnpauseToPaused Test Details
# Found 33 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-27 01:46](#error-2026-08-27t0146590000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6a8f97116af220b06a0f6cb8/clusters/test-acc-tf-c-3509624778068263160 | dev | 1133.05s
[2026-09-02 00:43](#error-2026-09-02t0043120000) | OPERATION_INVALID_MEMBER_REPLICATION_LAG /api/atlas/v1.0/groups/6a97711c7f32ed5349f8f0d4/clusters/test-acc-tf-c-3902631273362758082 | dev | 1825.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 20 minutes
- 2026-08-07 PASS 22 minutes
- 2026-08-08 PASS 19 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 20 minutes
- 2026-08-11 PASS 21 minutes
- 2026-08-12 PASS 19 minutes
- 2026-08-13 PASS 24 minutes
- 2026-08-14 PASS 20 minutes
- 2026-08-15 PASS 20 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 21 minutes
- 2026-08-18 PASS 19 minutes
- 2026-08-19 PASS 20 minutes
- 2026-08-20 PASS 20 minutes
- 2026-08-21 PASS 20 minutes
- 2026-08-22 PASS 19 minutes
- 2026-08-23: MISSING
- 2026-08-24 PASS 20 minutes
- 2026-08-25 PASS 20 minutes
- 2026-08-26 PASS 22 minutes
- 2026-08-27

### Error 2026-08-27T01:46:59+00:00
```
2026-08-27T01:46:59.6726470Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-08-27T01:46:59.6743893Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2026-08-27T01:47:04.6738389Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-08-27T01:47:04.6740098Z     pre_check.go:46: Time before creating cluster: 2026-08-27T01:47:04.673460116Z, ProjectID: 6a8f97116af220b06a0f6cb8, Cluster name: test-acc-tf-c-3509624778068263160
2026-08-27T02:03:31.8329948Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-08-27T02:03:31.8332297Z     resource_cluster_test.go:1200: Step 2/3 error: Error running apply: exit status 1
2026-08-27T02:03:31.8332933Z         
2026-08-27T02:03:31.8335887Z         Error: error updating MongoDB Cluster (test-acc-tf-c-3509624778068263160): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a8f97116af220b06a0f6cb8/clusters/test-acc-tf-c-3509624778068263160: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-14k0b1-shard-0.
2026-08-27T02:03:31.8337552Z         
2026-08-27T02:03:31.8338204Z           with mongodbatlas_cluster.test,
2026-08-27T02:03:31.8338874Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-27T02:03:31.8339478Z           12: resource "mongodbatlas_cluster" "test" {
2026-08-27T02:03:31.8339815Z         
2026-08-27T02:05:53.1866104Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (1133.51s)
```

- 2026-08-28 PASS 20 minutes
- 2026-08-29 PASS 21 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 23 minutes
- 2026-09-01 PASS 21 minutes
- 2026-09-02

### Error 2026-09-02T00:43:12+00:00
```
2026-09-02T00:43:12.0774211Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-09-02T00:43:12.1434610Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2026-09-02T00:44:07.0963031Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-09-02T00:44:07.0964960Z     pre_check.go:46: Time before creating cluster: 2026-09-02T00:44:07.095978258Z, ProjectID: 6a97711c7f32ed5349f8f0d4, Cluster name: test-acc-tf-c-3902631273362758082
2026-09-02T01:11:26.0092897Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-09-02T01:11:26.0094900Z     resource_cluster_test.go:1200: Step 2/3 error: Error running apply: exit status 1
2026-09-02T01:11:26.0095829Z         
2026-09-02T01:11:26.0101084Z         Error: error updating MongoDB Cluster (test-acc-tf-c-3902631273362758082): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a97711c7f32ed5349f8f0d4/clusters/test-acc-tf-c-3902631273362758082: 400 (request "OPERATION_INVALID_MEMBER_REPLICATION_LAG") The operation cannot begin because monitoring indicates these nodes have too much replication lag: atlas-3c6op5-shard-00-00.9psab2.mongodb-dev.net (250sec).
2026-09-02T01:11:26.0104549Z         
2026-09-02T01:11:26.0106097Z           with mongodbatlas_cluster.test,
2026-09-02T01:11:26.0107286Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-02T01:11:26.0108342Z           12: resource "mongodbatlas_cluster" "test" {
2026-09-02T01:11:26.0108898Z         
2026-09-02T01:13:38.0082673Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (1825.92s)
```

- 2026-09-03
  - PASS 21 minutes
  - PASS 21 minutes
- 2026-09-04 PASS 32 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 20 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 21 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 21 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 21 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 22 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 22 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
