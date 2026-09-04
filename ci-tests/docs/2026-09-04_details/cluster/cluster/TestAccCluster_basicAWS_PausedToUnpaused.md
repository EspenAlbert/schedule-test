# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 11 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 9) FAIL(x 2)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-28 03:08](#error-2026-08-28t0308380000) | OPERATION_INVALID_SHARDS_NO_PRIMARY /api/atlas/v1.0/groups/6a90fbb463fde9550ed1b34a/clusters/test-acc-tf-c-4722332762804942442 | dev | 864.03s
[2026-08-31 00:47](#error-2026-08-31t0047150000) | OPERATION_INVALID_MEMBER_REPLICATION_LAG /api/atlas/v1.0/groups/6a94cf11aa75b90f4a280027/clusters/test-acc-tf-c-4068242820477147854 | dev | 1551.10s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 24 minutes
- 2026-08-07 PASS 23 minutes
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
- 2026-08-28

### Error 2026-08-28T03:08:38+00:00
```
2026-08-28T03:08:38.1198026Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-08-28T03:08:38.1209426Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-08-28T03:09:38.1496881Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-08-28T03:09:38.1500795Z     pre_check.go:46: Time before creating cluster: 2026-08-28T03:09:38.149357555Z, ProjectID: 6a90fbb463fde9550ed1b34a, Cluster name: test-acc-tf-c-4722332762804942442
2026-08-28T03:20:57.4104646Z   
2026-08-28T03:23:02.3440869Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-08-28T03:23:02.3441767Z     resource_cluster_test.go:1239: Step 1/2 error: Error running apply: exit status 1
2026-08-28T03:23:02.3442451Z         
2026-08-28T03:23:02.3446882Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4722332762804942442): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a90fbb463fde9550ed1b34a/clusters/test-acc-tf-c-4722332762804942442: 400 (request "OPERATION_INVALID_SHARDS_NO_PRIMARY") The operation cannot begin because monitoring indicates these shards have no primary: atlas-de2m0b-shard-0.
2026-08-28T03:23:02.3448460Z         
2026-08-28T03:23:02.3448807Z           with mongodbatlas_cluster.test,
2026-08-28T03:23:02.3449453Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-28T03:23:02.3450041Z           12: resource "mongodbatlas_cluster" "test" {
2026-08-28T03:23:02.3450670Z         
2026-08-28T03:23:02.4002353Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (864.28s)
```

- 2026-08-29 PASS 25 minutes
- 2026-08-30: MISSING
- 2026-08-31

### Error 2026-08-31T00:47:15+00:00
```
2026-08-31T00:47:15.6744506Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-08-31T00:47:15.6932437Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-08-31T00:47:55.6852705Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-08-31T00:47:55.6854564Z     pre_check.go:46: Time before creating cluster: 2026-08-31T00:47:55.685036818Z, ProjectID: 6a94cf11aa75b90f4a280027, Cluster name: test-acc-tf-c-4068242820477147854
2026-08-31T01:13:07.5836367Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-08-31T01:13:07.5836995Z     resource_cluster_test.go:1239: Step 1/2 error: Error running apply: exit status 1
2026-08-31T01:13:07.5837703Z         
2026-08-31T01:13:07.5839800Z         Error: error updating MongoDB Cluster (test-acc-tf-c-4068242820477147854): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6a94cf11aa75b90f4a280027/clusters/test-acc-tf-c-4068242820477147854: 400 (request "OPERATION_INVALID_MEMBER_REPLICATION_LAG") The operation cannot begin because monitoring indicates these nodes have too much replication lag: atlas-ca6toq-shard-00-02.ishked.mongodb-dev.net (290sec).
2026-08-31T01:13:07.5841507Z         
2026-08-31T01:13:07.5841989Z           with mongodbatlas_cluster.test,
2026-08-31T01:13:07.5842591Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-08-31T01:13:07.5843157Z           12: resource "mongodbatlas_cluster" "test" {
2026-08-31T01:13:07.5843469Z         
2026-08-31T01:13:07.6363649Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (1551.95s)
```

- 2026-09-01 PASS 24 minutes
- 2026-09-02 PASS 28 minutes
- 2026-09-03
  - PASS 25 minutes
  - PASS 24 minutes
- 2026-09-04 PASS 38 minutes

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
- 2026-08-30 PASS 23 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
