# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveBasic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035180000) |  | dev | timeout | 10805.06s
[2026-02-02 00:38](#error-2026-02-02t0038460000) |  | dev | timeout | 10807.01s
[2026-02-03 00:39](#error-2026-02-03t0039280000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698143beb2e54ee995907df2/clusters | dev | out_of_capacity | 6.06s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 15 minutes
- 2026-01-27 PASS 21 minutes
- 2026-01-28 PASS 20 minutes
- 2026-01-29 PASS 23 minutes
- 2026-01-30 PASS 24 minutes
- 2026-01-31

### Error 2026-01-31T00:35:18+00:00
```
2026-01-31T00:35:18.6269527Z === RUN   TestAccAdvancedCluster_moveBasic
2026-01-31T00:36:56.2143880Z === CONT  TestAccAdvancedCluster_moveBasic
2026-01-31T03:37:01.7202925Z === NAME  TestAccAdvancedCluster_moveBasic
2026-01-31T03:37:01.7204182Z     move_upgrade_state_test.go:19: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:37:01.7205055Z         
2026-01-31T03:37:01.7206534Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-31T03:37:01.7221586Z         
2026-01-31T03:37:01.7222629Z           with mongodbatlas_cluster.old,
2026-01-31T03:37:01.7224004Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2026-01-31T03:37:01.7225087Z           12: 		resource "mongodbatlas_cluster" "old" {
2026-01-31T03:37:01.7229050Z         
2026-01-31T03:37:01.8016566Z --- FAIL: TestAccAdvancedCluster_moveBasic (10805.58s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:46+00:00
```
2026-02-02T00:38:46.2848189Z === RUN   TestAccAdvancedCluster_moveBasic
2026-02-02T00:40:19.9016466Z === CONT  TestAccAdvancedCluster_moveBasic
2026-02-02T03:40:26.8839324Z === NAME  TestAccAdvancedCluster_moveBasic
2026-02-02T03:40:26.8841541Z     move_upgrade_state_test.go:19: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:40:26.8842916Z         
2026-02-02T03:40:26.8844534Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:40:26.8847723Z         
2026-02-02T03:40:26.8848415Z           with mongodbatlas_cluster.old,
2026-02-02T03:40:26.8849972Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2026-02-02T03:40:26.8851534Z           12: 		resource "mongodbatlas_cluster" "old" {
2026-02-02T03:40:26.8852417Z         
2026-02-02T03:40:27.0252844Z --- FAIL: TestAccAdvancedCluster_moveBasic (10807.13s)
```

- 2026-02-03

### Error 2026-02-03T00:39:28+00:00
```
2026-02-03T00:39:28.9658504Z === RUN   TestAccAdvancedCluster_moveBasic
2026-02-03T00:42:03.6230945Z === CONT  TestAccAdvancedCluster_moveBasic
2026-02-03T00:42:09.8505075Z === NAME  TestAccAdvancedCluster_moveBasic
2026-02-03T00:42:09.8506218Z     move_upgrade_state_test.go:19: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:42:09.8506877Z         
2026-02-03T00:42:09.8509317Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698143beb2e54ee995907df2/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-03T00:42:09.8510826Z         
2026-02-03T00:42:09.8511271Z           with mongodbatlas_cluster.old,
2026-02-03T00:42:09.8512303Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2026-02-03T00:42:09.8513332Z           12: 		resource "mongodbatlas_cluster" "old" {
2026-02-03T00:42:09.8513845Z         
2026-02-03T00:42:10.1833944Z --- FAIL: TestAccAdvancedCluster_moveBasic (6.56s)
```

- 2026-02-04 PASS 18 minutes
- 2026-02-05 PASS 20 minutes
- 2026-02-06 PASS 23 minutes
- 2026-02-07 PASS 17 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 21 minutes
- 2026-02-10 PASS 18 minutes
- 2026-02-11 PASS 17 minutes
- 2026-02-12 PASS 18 minutes
- 2026-02-13 PASS 24 minutes
- 2026-02-14 PASS 19 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 18 minutes
- 2026-02-17 PASS 18 minutes
- 2026-02-18 PASS 21 minutes
- 2026-02-19 PASS 29 minutes
- 2026-02-20 PASS 22 minutes
- 2026-02-21 PASS 17 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24 PASS 22 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 24 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 17 minutes
  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 18 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
