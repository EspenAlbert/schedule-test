# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-17 00:28](#error-2025-11-17t0028540000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/691a6c44840cb2065b9a7adf/clusters | dev | out_of_capacity | 2.04s
[2025-11-21 00:28](#error-2025-11-21t0028210000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/691fb222238ce57ddce3e4a6/clusters | dev | out_of_capacity | 2.05s
[2025-11-26 00:28](#error-2025-11-26t0028270000) |  | dev | timeout | 10802.08s
[2025-11-27 00:28](#error-2025-11-27t0028150000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69279b1d3c4d827e6c4226b6/clusters | dev | out_of_capacity | 2.05s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 18 minutes
- 2025-10-30 PASS 18 minutes
- 2025-10-31 PASS 17 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 13 minutes
- 2025-11-04 PASS 20 minutes
- 2025-11-05
  - PASS 20 minutes
  - PASS 13 minutes
- 2025-11-06 PASS 24 minutes
- 2025-11-07 PASS 15 minutes
- 2025-11-08 PASS 38 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 12 minutes
- 2025-11-11 PASS 15 minutes
- 2025-11-12 PASS 17 minutes
- 2025-11-13 PASS 24 minutes
- 2025-11-14 PASS 17 minutes
- 2025-11-15 PASS 16 minutes
- 2025-11-16: MISSING
- 2025-11-17

### Error 2025-11-17T00:28:54+00:00
```
2025-11-17T00:28:54.7455359Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-11-17T00:28:54.7469544Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-11-17T00:28:57.0693101Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-11-17T00:28:57.0693756Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-11-17T00:28:57.0694266Z         
2025-11-17T00:28:57.0695910Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/691a6c44840cb2065b9a7adf/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-11-17T00:28:57.0697081Z         
2025-11-17T00:28:57.0697591Z           with mongodbatlas_cluster.test,
2025-11-17T00:28:57.0698220Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-17T00:28:57.0698798Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-11-17T00:28:57.0699100Z         
2025-11-17T00:28:57.1121763Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.37s)
```

- 2025-11-18 PASS 16 minutes
- 2025-11-19
  - PASS 17 minutes
  - PASS 12 minutes
- 2025-11-20 PASS 25 minutes
- 2025-11-21

### Error 2025-11-21T00:28:21+00:00
```
2025-11-21T00:28:21.3760249Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-11-21T00:28:21.4025783Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-11-21T00:28:23.8359859Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-11-21T00:28:23.8360482Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-11-21T00:28:23.8360899Z         
2025-11-21T00:28:23.8362386Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/691fb222238ce57ddce3e4a6/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-11-21T00:28:23.8364019Z         
2025-11-21T00:28:23.8364327Z           with mongodbatlas_cluster.test,
2025-11-21T00:28:23.8364926Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-21T00:28:23.8365480Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-11-21T00:28:23.8365774Z         
2025-11-21T00:28:23.8805221Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.48s)
```

- 2025-11-22 PASS 15 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 15 minutes
- 2025-11-25 PASS 17 minutes
- 2025-11-26

### Error 2025-11-26T00:28:27+00:00
```
2025-11-26T00:28:27.5546025Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-11-26T00:28:27.5638205Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-11-26T03:28:30.2939970Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-11-26T03:28:30.2940731Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-11-26T03:28:30.2941317Z         
2025-11-26T03:28:30.2942097Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-11-26T03:28:30.2942979Z         
2025-11-26T03:28:30.2943409Z           with mongodbatlas_cluster.test,
2025-11-26T03:28:30.2944320Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-26T03:28:30.2945555Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-11-26T03:28:30.2946036Z         
2025-11-26T03:28:30.3124596Z    test_working_directory=/tmp/plugintest2515234461 test_step_number=1 test_name=TestAccCluster_basicGCP
2025-11-26T03:28:30.3650924Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.79s)
```

- 2025-11-27

### Error 2025-11-27T00:28:15+00:00
```
2025-11-27T00:28:15.4728556Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-11-27T00:28:15.4781206Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-11-27T00:28:17.9140664Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-11-27T00:28:17.9141612Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-11-27T00:28:17.9142506Z         
2025-11-27T00:28:17.9144913Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69279b1d3c4d827e6c4226b6/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-11-27T00:28:17.9146606Z         
2025-11-27T00:28:17.9147222Z           with mongodbatlas_cluster.test,
2025-11-27T00:28:17.9148269Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-11-27T00:28:17.9149199Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-11-27T00:28:17.9149686Z         
2025-11-27T00:28:17.9672975Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.49s)
```


## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 12 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 12 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 15 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 13 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 13 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
