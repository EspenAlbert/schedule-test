# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveBasic Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:51](#error-2026-04-16t0051220000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e032838379397d109d0bb0/clusters | dev | out_of_capacity | 5.00s
[2026-04-30 00:58](#error-2026-04-30t0058060000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69f2a91f422bb69a2c343d57/clusters | dev | out_of_capacity | 93.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 38 minutes
- 2026-04-08 PASS 18 minutes
- 2026-04-09 PASS 38 minutes
- 2026-04-10 PASS 21 minutes
- 2026-04-11 PASS 17 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 18 minutes
- 2026-04-14 PASS 19 minutes
- 2026-04-15 PASS 14 minutes
- 2026-04-16

### Error 2026-04-16T00:51:22+00:00
```
2026-04-16T00:51:22.2095499Z === RUN   TestAccAdvancedCluster_moveBasic
2026-04-16T00:54:54.6067359Z === CONT  TestAccAdvancedCluster_moveBasic
2026-04-16T00:54:58.7895135Z === NAME  TestAccAdvancedCluster_moveBasic
2026-04-16T00:54:58.7975910Z     move_upgrade_state_test.go:19: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:54:58.8038646Z         
2026-04-16T00:54:58.8047325Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e032838379397d109d0bb0/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:54:58.8074777Z         
2026-04-16T00:54:58.8084009Z           with mongodbatlas_cluster.old,
2026-04-16T00:54:58.8085469Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2026-04-16T00:54:58.8092197Z           12: 		resource "mongodbatlas_cluster" "old" {
2026-04-16T00:54:58.8092768Z         
2026-04-16T00:54:59.0377240Z --- FAIL: TestAccAdvancedCluster_moveBasic (5.03s)
```

- 2026-04-17 PASS 14 minutes
- 2026-04-18 PASS 27 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 28 minutes
- 2026-04-22 PASS 30 minutes
- 2026-04-23 PASS 36 minutes
- 2026-04-24 PASS 15 minutes
- 2026-04-25 PASS 18 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 18 minutes
- 2026-04-28 PASS 19 minutes
- 2026-04-29 PASS 15 minutes
- 2026-04-30

### Error 2026-04-30T00:58:06+00:00
```
2026-04-30T00:58:06.7663452Z === RUN   TestAccAdvancedCluster_moveBasic
2026-04-30T01:04:31.3979332Z === CONT  TestAccAdvancedCluster_moveBasic
2026-04-30T01:04:37.3130042Z === NAME  TestAccAdvancedCluster_moveBasic
2026-04-30T01:04:37.3131040Z     move_upgrade_state_test.go:19: Step 1/2 error: Error running apply: exit status 1
2026-04-30T01:04:37.3131902Z         
2026-04-30T01:04:37.3134584Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69f2a91f422bb69a2c343d57/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-30T01:04:37.3136231Z         
2026-04-30T01:04:37.3136873Z           with mongodbatlas_cluster.old,
2026-04-30T01:04:37.3137887Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2026-04-30T01:04:37.3138739Z           12: 		resource "mongodbatlas_cluster" "old" {
2026-04-30T01:04:37.3139189Z         
2026-04-30T01:04:37.3665109Z --- FAIL: TestAccAdvancedCluster_moveBasic (93.58s)
```

- 2026-05-01 PASS 16 minutes
- 2026-05-02 PASS 20 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 15 minutes
- 2026-05-05 PASS 32 minutes
- 2026-05-06 PASS 29 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 16 minutes
  - PASS 15 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 17 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 19 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 18 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 16 minutes
- 2026-05-04 PASS 42 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 14 minutes
