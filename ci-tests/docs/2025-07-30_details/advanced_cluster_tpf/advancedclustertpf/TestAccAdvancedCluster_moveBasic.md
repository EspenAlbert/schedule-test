# advanced_cluster_tpf/advancedclustertpf/TestAccAdvancedCluster_moveBasic Test Details
# Found 36 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-13 02:11](#error-2025-07-13t0211000000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6872fe99207f456171041427/clusters | qa | out_of_capacity | 2.09s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 12 minutes
  - PASS 13 minutes
  - PASS 11 minutes
  - PASS 12 minutes
  - PASS 14 minutes
- 2025-07-02 PASS 13 minutes
- 2025-07-03 PASS 13 minutes
- 2025-07-04 PASS 21 minutes
- 2025-07-05 PASS 12 minutes
- 2025-07-06 PASS 11 minutes
- 2025-07-07 PASS 13 minutes
- 2025-07-08 PASS 14 minutes
- 2025-07-09 PASS 16 minutes
- 2025-07-10
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 13 minutes
- 2025-07-13

### Error 2025-07-13T02:11:00+00:00
```
2025-07-13T02:11:00.2660500Z === RUN   TestAccAdvancedCluster_moveBasic
2025-07-13T02:11:00.2663030Z === CONT  TestAccAdvancedCluster_moveBasic
2025-07-13T02:11:00.2690566Z === NAME  TestAccAdvancedCluster_moveBasic
2025-07-13T02:11:00.2691049Z     move_upgrade_state_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-07-13T02:11:00.2691422Z         
2025-07-13T02:11:00.2692694Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/6872fe99207f456171041427/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-07-13T02:11:00.2693603Z         
2025-07-13T02:11:00.2693870Z           with mongodbatlas_cluster.old,
2025-07-13T02:11:00.2694424Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-07-13T02:11:00.2694942Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-07-13T02:11:00.2695216Z         
2025-07-13T02:11:00.2695445Z --- FAIL: TestAccAdvancedCluster_moveBasic (2.86s)
```

- 2025-07-14: MISSING
- 2025-07-15 PASS 14 minutes
- 2025-07-16 PASS 13 minutes
- 2025-07-17 PASS 15 minutes
- 2025-07-18 PASS 14 minutes
- 2025-07-19 PASS 11 minutes
- 2025-07-20 PASS 14 minutes
- 2025-07-21 PASS 12 minutes
- 2025-07-22 PASS 11 minutes
- 2025-07-23
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 12 minutes
  - PASS 14 minutes
- 2025-07-24 PASS 16 minutes
- 2025-07-25 PASS 15 minutes
- 2025-07-26 PASS 14 minutes
- 2025-07-27 PASS 14 minutes
- 2025-07-28 PASS 13 minutes
- 2025-07-29 PASS 14 minutes
- 2025-07-30 PASS 15 minutes