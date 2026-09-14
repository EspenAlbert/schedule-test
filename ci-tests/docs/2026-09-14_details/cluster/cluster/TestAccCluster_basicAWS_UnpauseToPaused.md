# cluster/cluster/TestAccCluster_basicAWS_UnpauseToPaused Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-11 06:40](#error-2026-09-11t0640570000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6aa3a277f7fcc4bbebf4e4e9/clusters/test-acc-tf-c-7785303011426283587 | dev | 1178.03s

### Timeline
- 2026-09-07 PASS 21 minutes
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

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 21 minutes
- 2026-09-14: MISSING
