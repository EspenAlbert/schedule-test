# cluster/cluster/TestAccCluster_basicAWS_UnpauseToPaused Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-02 00:43](#error-2026-09-02t0043120000) | OPERATION_INVALID_MEMBER_REPLICATION_LAG /api/atlas/v1.0/groups/6a97711c7f32ed5349f8f0d4/clusters/test-acc-tf-c-3902631273362758082 | dev | 1825.09s
[2026-09-11 06:40](#error-2026-09-11t0640570000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6aa3a277f7fcc4bbebf4e4e9/clusters/test-acc-tf-c-7785303011426283587 | dev | 1178.03s
[2026-09-23 00:40](#error-2026-09-23t0040290000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6ab31ffad27ba93df642137a/clusters/test-acc-tf-c-6082113996757379362 | dev | 1106.04s
[2026-09-23 08:25](#error-2026-09-23t0825510000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6ab38d0caa941871fb3a9346/clusters/test-acc-tf-c-8140005423432527663 | dev | 1103.08s

### Timeline
- 2026-09-01: MISSING
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
- 2026-09-05 PASS 20 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - PASS 22 minutes
  - PASS 21 minutes
- 2026-09-08 PASS 21 minutes
- 2026-09-09 PASS 19 minutes
- 2026-09-10 PASS 20 minutes
- 2026-09-11
  - PASS an hour
  - FAIL 19 minutes

### Error 2026-09-11T06:40:57+00:00
```
2026-09-11T06:40:57.7452845Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-09-11T06:40:57.7463779Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2026-09-11T06:41:12.7494900Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-09-11T06:41:12.7497017Z     pre_check.go:46: Time before creating cluster: 2026-09-11T06:41:12.749175413Z, ProjectID: 6aa3a277f7fcc4bbebf4e4e9, Cluster name: test-acc-tf-c-7785303011426283587
2026-09-11T06:57:43.8995151Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-09-11T06:57:43.8996372Z     resource_cluster_test.go:1200: Step 2/3 error: Error running apply: exit status 1
2026-09-11T06:57:43.8997127Z         
2026-09-11T06:57:43.9000622Z         Error: error updating MongoDB Cluster (test-acc-tf-c-7785303011426283587): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6aa3a277f7fcc4bbebf4e4e9/clusters/test-acc-tf-c-7785303011426283587: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-orm3i2-shard-0.
2026-09-11T06:57:43.9002996Z         
2026-09-11T06:57:43.9003515Z           with mongodbatlas_cluster.test,
2026-09-11T06:57:43.9004605Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-11T06:57:43.9005780Z           12: resource "mongodbatlas_cluster" "test" {
2026-09-11T06:57:43.9006331Z         
2026-09-11T07:00:36.0024753Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (1178.26s)
```

- 2026-09-12 PASS 20 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 21 minutes
- 2026-09-15 PASS 23 minutes
- 2026-09-16 PASS 21 minutes
- 2026-09-17 PASS 21 minutes
- 2026-09-18 PASS 25 minutes
- 2026-09-19 PASS 21 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 21 minutes
- 2026-09-22 PASS 22 minutes
- 2026-09-23
  - FAIL 18 minutes

### Error 2026-09-23T00:40:29+00:00
```
2026-09-23T00:40:29.0699910Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-09-23T00:40:29.0775348Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2026-09-23T00:41:24.0960831Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-09-23T00:41:24.0962564Z     pre_check.go:46: Time before creating cluster: 2026-09-23T00:41:24.095733786Z, ProjectID: 6ab31ffad27ba93df642137a, Cluster name: test-acc-tf-c-6082113996757379362
2026-09-23T00:56:43.8579335Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-09-23T00:56:43.8579870Z     resource_cluster_test.go:1200: Step 2/3 error: Error running apply: exit status 1
2026-09-23T00:56:43.8580371Z         
2026-09-23T00:56:43.8582918Z         Error: error updating MongoDB Cluster (test-acc-tf-c-6082113996757379362): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6ab31ffad27ba93df642137a/clusters/test-acc-tf-c-6082113996757379362: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-djrt54-shard-0.
2026-09-23T00:56:43.8584795Z         
2026-09-23T00:56:43.8585223Z           with mongodbatlas_cluster.test,
2026-09-23T00:56:43.8586123Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-23T00:56:43.8586923Z           12: resource "mongodbatlas_cluster" "test" {
2026-09-23T00:56:43.8587371Z         
2026-09-23T00:58:55.4859413Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (1106.41s)
```

  - FAIL 18 minutes

### Error 2026-09-23T08:25:51+00:00
```
2026-09-23T08:25:51.2503918Z === RUN   TestAccCluster_basicAWS_UnpauseToPaused
2026-09-23T08:25:51.3196632Z === CONT  TestAccCluster_basicAWS_UnpauseToPaused
2026-09-23T08:26:46.2711511Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-09-23T08:26:46.2714175Z     pre_check.go:46: Time before creating cluster: 2026-09-23T08:26:46.270795181Z, ProjectID: 6ab38d0caa941871fb3a9346, Cluster name: test-acc-tf-c-8140005423432527663
2026-09-23T08:42:03.8186754Z === NAME  TestAccCluster_basicAWS_UnpauseToPaused
2026-09-23T08:42:03.8187591Z     resource_cluster_test.go:1200: Step 2/3 error: Error running apply: exit status 1
2026-09-23T08:42:03.8188443Z         
2026-09-23T08:42:03.8192476Z         Error: error updating MongoDB Cluster (test-acc-tf-c-8140005423432527663): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6ab38d0caa941871fb3a9346/clusters/test-acc-tf-c-8140005423432527663: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-9rkcx4-shard-0.
2026-09-23T08:42:03.8194620Z         
2026-09-23T08:42:03.8194959Z           with mongodbatlas_cluster.test,
2026-09-23T08:42:03.8195920Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-09-23T08:42:03.8196534Z           12: resource "mongodbatlas_cluster" "test" {
2026-09-23T08:42:03.8196974Z         
2026-09-23T08:44:15.0575036Z --- FAIL: TestAccCluster_basicAWS_UnpauseToPaused (1103.80s)
```

- 2026-09-24 PASS 20 minutes
- 2026-09-25 PASS 22 minutes
- 2026-09-26 PASS 21 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 21 minutes
- 2026-09-29 PASS 24 minutes
- 2026-09-30 PASS 23 minutes
- 2026-10-01 PASS 22 minutes
- 2026-10-02 PASS 23 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 22 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 21 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 22 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 20 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 22 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 21 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
