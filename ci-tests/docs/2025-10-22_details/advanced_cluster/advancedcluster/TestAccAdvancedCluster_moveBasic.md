# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveBasic Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3) SKIP(x 2)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:29](#error-2025-10-05t0029410000) | ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED /api/atlas/v1.0/groups/68e1bbf5f758b3057a1ae656/clusters | qa |  | 5.10s
[2025-10-07 00:27](#error-2025-10-07t0027340000) |  | dev | timeout | 10807.08s
[2025-10-20 10:26](#error-2025-10-20t1026270000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68f60e54de46041f5669aa57/clusters | dev | out_of_capacity | 5.04s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 17 minutes
- 2025-09-24 PASS 15 minutes
- 2025-09-25 PASS 16 minutes
- 2025-09-26 PASS 15 minutes
- 2025-09-27 PASS 15 minutes
- 2025-09-28 PASS 19 minutes
- 2025-09-29
  - PASS 14 minutes
  - PASS 11 minutes
- 2025-09-30
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 11 minutes
- 2025-10-01
  - PASS 40 minutes
  - PASS 33 minutes
  - PASS 37 minutes
  - PASS an hour
  - PASS 11 minutes
  - PASS 13 minutes
  - SKIP 2 seconds
  - SKIP 3 seconds
- 2025-10-02 PASS an hour
- 2025-10-03 PASS 34 minutes
- 2025-10-04 PASS 2 hours
- 2025-10-05

### Error 2025-10-05T00:29:41+00:00
```
2025-10-05T00:29:41.1009222Z === RUN   TestAccAdvancedCluster_moveBasic
2025-10-05T00:31:26.3840492Z === CONT  TestAccAdvancedCluster_moveBasic
2025-10-05T00:31:30.7879424Z === NAME  TestAccAdvancedCluster_moveBasic
2025-10-05T00:31:30.7880475Z     move_upgrade_state_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-10-05T00:31:30.7881291Z         
2025-10-05T00:31:30.7884493Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/68e1bbf5f758b3057a1ae656/clusters: 403 (request "ATLAS_RESOURCE_POLICIES_VIOLATION_NOT_AUTHORIZED") Invalid Configuration. Contains selections that are unavailable due to your organization's resource policies.
2025-10-05T00:31:30.7886831Z         
2025-10-05T00:31:30.7887598Z           with mongodbatlas_cluster.old,
2025-10-05T00:31:30.7888870Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-10-05T00:31:30.7890013Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-10-05T00:31:30.7890700Z         
2025-10-05T00:31:30.9967252Z --- FAIL: TestAccAdvancedCluster_moveBasic (5.96s)
```

- 2025-10-06 PASS 12 minutes
- 2025-10-07

### Error 2025-10-07T00:27:34+00:00
```
2025-10-07T00:27:34.3693703Z === RUN   TestAccAdvancedCluster_moveBasic
2025-10-07T00:30:14.9367550Z === CONT  TestAccAdvancedCluster_moveBasic
2025-10-07T03:30:19.6212493Z === NAME  TestAccAdvancedCluster_moveBasic
2025-10-07T03:30:19.6213416Z     move_upgrade_state_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-10-07T03:30:19.6219027Z         
2025-10-07T03:30:19.6220330Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-07T03:30:19.6221306Z         
2025-10-07T03:30:19.6221824Z           with mongodbatlas_cluster.old,
2025-10-07T03:30:19.6222879Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-10-07T03:30:19.6223829Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-10-07T03:30:19.6224324Z         
2025-10-07T03:30:19.6785289Z --- FAIL: TestAccAdvancedCluster_moveBasic (10807.84s)
```

- 2025-10-08 PASS 16 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 20 minutes
- 2025-10-11 PASS 17 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 15 minutes
- 2025-10-14 PASS 15 minutes
- 2025-10-15 PASS 13 minutes
- 2025-10-16 PASS 35 minutes
- 2025-10-17 PASS 16 minutes
- 2025-10-18 PASS 15 minutes
- 2025-10-19 PASS 15 minutes
- 2025-10-20
  - PASS 13 minutes
  - FAIL 5 seconds

### Error 2025-10-20T10:26:27+00:00
```
2025-10-20T10:26:27.9536178Z === RUN   TestAccAdvancedCluster_moveBasic
2025-10-20T10:28:27.7194179Z === CONT  TestAccAdvancedCluster_moveBasic
2025-10-20T10:28:30.9587488Z === NAME  TestAccAdvancedCluster_moveBasic
2025-10-20T10:28:30.9588338Z     move_upgrade_state_test.go:19: Step 1/2 error: Error running apply: exit status 1
2025-10-20T10:28:30.9588820Z         
2025-10-20T10:28:30.9590662Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68f60e54de46041f5669aa57/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-10-20T10:28:30.9591996Z         
2025-10-20T10:28:30.9592424Z           with mongodbatlas_cluster.old,
2025-10-20T10:28:30.9593172Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-10-20T10:28:30.9593724Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-10-20T10:28:30.9594025Z         
2025-10-20T10:28:31.0098254Z --- FAIL: TestAccAdvancedCluster_moveBasic (5.44s)
```

- 2025-10-21 PASS 14 minutes
- 2025-10-22
  - PASS 19 minutes
  - PASS 12 minutes