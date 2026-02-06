# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-12 00:33](#error-2026-01-12t0033090000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69644143892b219ec84d1c81/clusters | dev | out_of_capacity | 2.04s
[2026-01-13 00:27](#error-2026-01-13t0027420000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6965917cb14a18047efdc72c/clusters | dev | out_of_capacity | 2.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
- 2026-01-09 PASS 21 minutes
- 2026-01-10 PASS 16 minutes
- 2026-01-11: MISSING
- 2026-01-12

### Error 2026-01-12T00:33:09+00:00
```
2026-01-12T00:33:09.1083435Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2026-01-12T00:33:09.1107554Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2026-01-12T00:33:11.4876126Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2026-01-12T00:33:11.4876960Z     resource_cluster_test.go:1085: Step 1/1 error: Error running apply: exit status 1
2026-01-12T00:33:11.4877593Z         
2026-01-12T00:33:11.4879208Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69644143892b219ec84d1c81/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-01-12T00:33:11.4880388Z         
2026-01-12T00:33:11.4880700Z           with mongodbatlas_cluster.test,
2026-01-12T00:33:11.4881790Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-12T00:33:11.4882506Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-12T00:33:11.4882821Z         
2026-01-12T00:33:11.5370257Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.43s)
```

- 2026-01-13

### Error 2026-01-13T00:27:42+00:00
```
2026-01-13T00:27:42.5631915Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2026-01-13T00:27:42.5872317Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2026-01-13T00:27:44.9278297Z    test_name=TestAccCluster_basicGCPRegionNameUSWest2 test_terraform_path=/home/runner/work/_temp/eeb6a1d2-e146-447f-92f9-017f0430b244/terraform test_working_directory=/tmp/plugintest1268149897 test_step_number=1
2026-01-13T00:27:44.9280343Z     resource_cluster_test.go:1085: Step 1/1 error: Error running apply: exit status 1
2026-01-13T00:27:44.9280788Z         
2026-01-13T00:27:44.9282841Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6965917cb14a18047efdc72c/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-01-13T00:27:44.9283997Z         
2026-01-13T00:27:44.9284297Z           with mongodbatlas_cluster.test,
2026-01-13T00:27:44.9284918Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-13T00:27:44.9285500Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-13T00:27:44.9285807Z         
2026-01-13T00:27:44.9802909Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.40s)
```

- 2026-01-14 PASS 20 minutes
- 2026-01-15 PASS 20 minutes
- 2026-01-16 PASS 21 minutes
- 2026-01-17 PASS 20 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 18 minutes
- 2026-01-20 PASS 22 minutes
- 2026-01-21 PASS 23 minutes
- 2026-01-22 PASS 16 minutes
- 2026-01-23 PASS 18 minutes
- 2026-01-24 PASS 17 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 18 minutes
- 2026-01-27 PASS 23 minutes
- 2026-01-28 PASS 21 minutes
- 2026-01-29 PASS 25 minutes
- 2026-01-30 PASS 26 minutes
- 2026-01-31 PASS 18 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 18 minutes
- 2026-02-03 PASS 18 minutes
- 2026-02-04 PASS 20 minutes
- 2026-02-05 PASS 26 minutes
- 2026-02-06 PASS 24 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-08 06:24](#error-2026-01-08t0624580000) |  | qa | timeout | 10802.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08

### Error 2026-01-08T06:24:58+00:00
```
2026-01-08T06:24:58.5446019Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2026-01-08T06:24:58.5461508Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2026-01-08T09:25:01.1731029Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2026-01-08T09:25:01.1732038Z     resource_cluster_test.go:1085: Step 1/1 error: Error running apply: exit status 1
2026-01-08T09:25:01.1732649Z         
2026-01-08T09:25:01.1733701Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-08T09:25:01.1734717Z         
2026-01-08T09:25:01.1735019Z           with mongodbatlas_cluster.test,
2026-01-08T09:25:01.1735637Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-08T09:25:01.1736216Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-08T09:25:01.1736839Z         
2026-01-08T09:25:01.1737337Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.63s)
```

- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 22 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 16 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 17 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 23 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 19 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 18 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
