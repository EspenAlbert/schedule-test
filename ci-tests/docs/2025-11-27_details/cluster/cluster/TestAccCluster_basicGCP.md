# cluster/cluster/TestAccCluster_basicGCP Test Details
# Found 32 TestRuns in dev, qa from 2025-10-29 to 2025-11-27 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028060000) |  | dev | timeout | 11792.01s
[2025-11-20 00:27](#error-2025-11-20t0027480000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/691e6081a0b6e4670df1f6f1/clusters | dev | out_of_capacity | 2.05s
[2025-11-26 00:28](#error-2025-11-26t0028230000) |  | dev | timeout | 10802.08s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29 PASS 21 minutes
- 2025-10-30

### Error 2025-10-30T00:28:06+00:00
```
2025-10-30T00:28:06.1398411Z === RUN   TestAccCluster_basicGCP
2025-10-30T00:28:10.4936178Z === CONT  TestAccCluster_basicGCP
2025-10-30T03:44:42.5845162Z === NAME  TestAccCluster_basicGCP
2025-10-30T03:44:42.5845807Z     resource_cluster_test.go:374: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:44:42.5846297Z         
2025-10-30T03:44:42.5847399Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-792388596326928799): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2025-10-30T03:44:42.5848245Z         
2025-10-30T03:44:42.5848492Z --- FAIL: TestAccCluster_basicGCP (11792.09s)
```

- 2025-10-31 PASS 24 minutes
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03 PASS 21 minutes
- 2025-11-04 PASS 23 minutes
- 2025-11-05
  - PASS 20 minutes
  - PASS 19 minutes
- 2025-11-06 PASS 24 minutes
- 2025-11-07 PASS 19 minutes
- 2025-11-08 PASS 42 minutes
- 2025-11-09: MISSING
- 2025-11-10 PASS 17 minutes
- 2025-11-11 PASS 17 minutes
- 2025-11-12 PASS 19 minutes
- 2025-11-13 PASS 24 minutes
- 2025-11-14 PASS 21 minutes
- 2025-11-15 PASS 17 minutes
- 2025-11-16: MISSING
- 2025-11-17 PASS 19 minutes
- 2025-11-18 PASS 18 minutes
- 2025-11-19
  - PASS 19 minutes
  - PASS 15 minutes
- 2025-11-20

### Error 2025-11-20T00:27:48+00:00
```
2025-11-20T00:27:48.9907456Z === RUN   TestAccCluster_basicGCP
2025-11-20T00:27:53.7554735Z === CONT  TestAccCluster_basicGCP
2025-11-20T00:27:56.1925762Z === NAME  TestAccCluster_basicGCP
2025-11-20T00:27:56.1926315Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2025-11-20T00:27:56.1927016Z         
2025-11-20T00:27:56.1928601Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/691e6081a0b6e4670df1f6f1/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-11-20T00:27:56.1930319Z         
2025-11-20T00:27:56.1930883Z           with mongodbatlas_cluster.basic_gcp,
2025-11-20T00:27:56.1932015Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-11-20T00:27:56.1933115Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-11-20T00:27:56.1933657Z         
2025-11-20T00:27:56.2360279Z --- FAIL: TestAccCluster_basicGCP (2.48s)
```

- 2025-11-21 PASS 18 minutes
- 2025-11-22 PASS 18 minutes
- 2025-11-23: MISSING
- 2025-11-24 PASS 17 minutes
- 2025-11-25 PASS 20 minutes
- 2025-11-26

### Error 2025-11-26T00:28:23+00:00
```
2025-11-26T00:28:23.6174040Z === RUN   TestAccCluster_basicGCP
2025-11-26T00:28:27.5564534Z === CONT  TestAccCluster_basicGCP
2025-11-26T03:28:30.3125412Z === NAME  TestAccCluster_basicGCP
2025-11-26T03:28:30.3126251Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2025-11-26T03:28:30.3126877Z         
2025-11-26T03:28:30.3128071Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-11-26T03:28:30.3128962Z         
2025-11-26T03:28:30.3131179Z           with mongodbatlas_cluster.basic_gcp,
2025-11-26T03:28:30.3132353Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-11-26T03:28:30.3133310Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-11-26T03:28:30.3133801Z         
2025-11-26T03:28:30.3751708Z --- FAIL: TestAccCluster_basicGCP (10802.82s)
```

- 2025-11-27 PASS 23 minutes

## QA Environment
### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30: MISSING
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02 PASS 16 minutes
- 2025-11-03: MISSING
- 2025-11-04: MISSING
- 2025-11-05: MISSING
- 2025-11-06: MISSING
- 2025-11-07: MISSING
- 2025-11-08: MISSING
- 2025-11-09 PASS 17 minutes
- 2025-11-10: MISSING
- 2025-11-11: MISSING
- 2025-11-12: MISSING
- 2025-11-13 PASS 18 minutes
- 2025-11-14: MISSING
- 2025-11-15: MISSING
- 2025-11-16 PASS 17 minutes
- 2025-11-17: MISSING
- 2025-11-18: MISSING
- 2025-11-19: MISSING
- 2025-11-20: MISSING
- 2025-11-21: MISSING
- 2025-11-22: MISSING
- 2025-11-23 PASS 17 minutes
- 2025-11-24: MISSING
- 2025-11-25: MISSING
- 2025-11-26: MISSING
- 2025-11-27: MISSING
