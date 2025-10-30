# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-25 00:27](#error-2025-10-25t0027440000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68fc197e992f263060d3b6e4/clusters | dev | out_of_capacity | 2.06s
[2025-10-30 00:28](#error-2025-10-30t0028060000) |  | dev | timeout | 11922.10s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 20 minutes
  - PASS 15 minutes
  - PASS 18 minutes
  - PASS 14 minutes
  - PASS 32 minutes
  - PASS 16 minutes
  - PASS 27 minutes
  - PASS 13 minutes
- 2025-10-02 PASS 17 minutes
- 2025-10-03 PASS 18 minutes
- 2025-10-04 PASS 22 minutes
- 2025-10-05 PASS 14 minutes
- 2025-10-06 PASS 16 minutes
- 2025-10-07 PASS 17 minutes
- 2025-10-08 PASS 17 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 23 minutes
- 2025-10-11 PASS 23 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 21 minutes
- 2025-10-14 PASS 28 minutes
- 2025-10-15 PASS 19 minutes
- 2025-10-16 PASS 33 minutes
- 2025-10-17 PASS 21 minutes
- 2025-10-18 PASS 18 minutes
- 2025-10-19 PASS 16 minutes
- 2025-10-20
  - PASS 23 minutes
  - PASS 14 minutes
- 2025-10-21 PASS 16 minutes
- 2025-10-22
  - PASS 33 minutes
  - PASS 14 minutes
- 2025-10-23 PASS 24 minutes
- 2025-10-24 PASS 18 minutes
- 2025-10-25

### Error 2025-10-25T00:27:44+00:00
```
2025-10-25T00:27:44.5711445Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-10-25T00:27:49.6820641Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-10-25T00:27:52.2138136Z    test_name=TestAccCluster_WithBiConnectorGCP test_terraform_path=/home/runner/work/_temp/fb1a4505-37f7-416f-b6b3-96009aec9405/terraform test_working_directory=/tmp/plugintest578100595
2025-10-25T00:27:52.2139365Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-10-25T00:27:52.2140169Z         
2025-10-25T00:27:52.2142372Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68fc197e992f263060d3b6e4/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-10-25T00:27:52.2143981Z         
2025-10-25T00:27:52.2144356Z           with mongodbatlas_cluster.basic_gcp,
2025-10-25T00:27:52.2145229Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-10-25T00:27:52.2146011Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-10-25T00:27:52.2146322Z         
2025-10-25T00:27:52.2602254Z --- FAIL: TestAccCluster_WithBiConnectorGCP (2.58s)
```

- 2025-10-26 PASS 16 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 19 minutes
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
