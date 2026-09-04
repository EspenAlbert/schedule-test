# cluster/cluster/TestAccCluster_basicAWS_UnpauseToPaused Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 10) FAIL
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-02 00:43](#error-2026-09-02t0043120000) | OPERATION_INVALID_MEMBER_REPLICATION_LAG /api/atlas/v1.0/groups/6a97711c7f32ed5349f8f0d4/clusters/test-acc-tf-c-3902631273362758082 | dev | 1825.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 20 minutes
- 2026-08-07 PASS 22 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
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
- 2026-08-09: MISSING
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13: MISSING
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27: MISSING
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 22 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
