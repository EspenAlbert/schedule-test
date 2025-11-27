# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028060000) |  | dev | timeout | 11922.10s
[2025-11-11 00:28](#error-2025-11-11t0028520000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69128340693ab71da4440479/clusters | dev | out_of_capacity | 2.04s
[2025-11-26 00:28](#error-2025-11-26t0028230000) |  | dev | timeout | 10804.04s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 22 minutes
- 2025-10-30

### Error 2025-10-30T00:28:06+00:00
```
2025-10-30T00:28:06.1399478Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-10-30T00:28:10.4935684Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-10-30T03:46:53.4595370Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-10-30T03:46:53.4596036Z     resource_cluster_test.go:413: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:46:53.4596734Z         
2025-10-30T03:46:53.4597653Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-4407285395979735678): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:46:53.4598300Z         
2025-10-30T03:46:53.4598565Z --- FAIL: TestAccCluster_WithBiConnectorGCP (11922.97s)
```

- 2025-10-31 PASS 25 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 17 minutes
- 2025-11-04 PASS 27 minutes
- 2025-11-05
  - PASS 20 minutes
  - PASS 15 minutes
- 2025-11-06 PASS 20 minutes
- 2025-11-07 PASS 19 minutes
- 2025-11-08 PASS 42 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 17 minutes
- 2025-11-11

### Error 2025-11-11T00:28:52+00:00
```
2025-11-11T00:28:52.0633464Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-11-11T00:28:57.6739188Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-11-11T00:29:00.0494343Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-11-11T00:29:00.0495530Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-11-11T00:29:00.0495951Z         
2025-11-11T00:29:00.0497601Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69128340693ab71da4440479/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-11-11T00:29:00.0498803Z         
2025-11-11T00:29:00.0499277Z           with mongodbatlas_cluster.basic_gcp,
2025-11-11T00:29:00.0500004Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-11-11T00:29:00.0500577Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-11-11T00:29:00.0500889Z         
2025-11-11T00:29:00.0982710Z --- FAIL: TestAccCluster_WithBiConnectorGCP (2.42s)
```

- 2025-11-12 PASS 19 minutes
- 2025-11-13 PASS 29 minutes
- 2025-11-14 PASS 23 minutes
- 2025-11-15 PASS 16 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 19 minutes
- 2025-11-18 PASS 18 minutes
- 2025-11-19
  - PASS 19 minutes
  - PASS 14 minutes
- 2025-11-20 PASS 28 minutes
- 2025-11-21 PASS 18 minutes
- 2025-11-22 PASS 19 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 16 minutes
- 2025-11-25 PASS 20 minutes
- 2025-11-26

### Error 2025-11-26T00:28:23+00:00
```
2025-11-26T00:28:23.6174581Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-11-26T00:28:27.5632456Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-11-26T03:28:30.2639985Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-11-26T03:28:30.2640952Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-11-26T03:28:30.2641608Z         
2025-11-26T03:28:30.2642855Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-11-26T03:28:30.2643610Z         
2025-11-26T03:28:30.2643926Z           with mongodbatlas_cluster.basic_gcp,
2025-11-26T03:28:30.2644549Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-11-26T03:28:30.2645223Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-11-26T03:28:30.2645745Z         
2025-11-26T03:28:30.2938239Z    test_working_directory=/tmp/plugintest3812527856 test_step_number=1 test_name=TestAccCluster_basicGCPRegionNameUSWest2 test_terraform_path=/home/runner/work/_temp/e19746d8-e539-49b8-8412-24da413eb4e7/terraform
2025-11-26T03:28:30.3225269Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10804.44s)
```

- 2025-11-27 PASS 27 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 15 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 16 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 18 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 19 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 15 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
