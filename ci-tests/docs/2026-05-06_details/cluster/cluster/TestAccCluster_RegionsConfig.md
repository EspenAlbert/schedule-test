# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:45](#error-2026-04-07t0045070000) |  | dev | timeout | 13943.02s
[2026-04-16 00:53](#error-2026-04-16t0053120000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69e032f41ec945fedc72ffc3/clusters | dev | out_of_capacity | 2.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:45:07+00:00
```
2026-04-07T00:45:07.9986802Z === RUN   TestAccCluster_RegionsConfig
2026-04-07T00:45:08.0006861Z === CONT  TestAccCluster_RegionsConfig
2026-04-07T04:37:31.1615580Z === NAME  TestAccCluster_RegionsConfig
2026-04-07T04:37:31.1616269Z     resource_cluster_test.go:1184: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:37:31.1616793Z         
2026-04-07T04:37:31.1617734Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-5382047330276325154): timeout while waiting for state to become 'DELETED' (last state: 'DELETING', timeout: 3h0m0s)
2026-04-07T04:37:31.1618426Z         
2026-04-07T04:37:31.1618685Z --- FAIL: TestAccCluster_RegionsConfig (13943.16s)
```

- 2026-04-08 PASS 51 minutes
- 2026-04-09 PASS an hour
- 2026-04-10 PASS an hour
- 2026-04-11 PASS 41 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 52 minutes
- 2026-04-14 PASS 52 minutes
- 2026-04-15 PASS 52 minutes
- 2026-04-16

### Error 2026-04-16T00:53:12+00:00
```
2026-04-16T00:53:12.0701573Z === RUN   TestAccCluster_RegionsConfig
2026-04-16T00:53:12.1133683Z === CONT  TestAccCluster_RegionsConfig
2026-04-16T00:53:14.3630330Z === NAME  TestAccCluster_RegionsConfig
2026-04-16T00:53:14.3631314Z     resource_cluster_test.go:1184: Step 1/3 error: Error running apply: exit status 1
2026-04-16T00:53:14.3632056Z         
2026-04-16T00:53:14.3634666Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69e032f41ec945fedc72ffc3/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-04-16T00:53:14.3636750Z         
2026-04-16T00:53:14.3637437Z           with mongodbatlas_cluster.test,
2026-04-16T00:53:14.3639040Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-04-16T00:53:14.3640368Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-04-16T00:53:14.3641062Z         
2026-04-16T00:53:14.4327335Z --- FAIL: TestAccCluster_RegionsConfig (2.35s)
```

- 2026-04-17 PASS 52 minutes
- 2026-04-18 PASS 55 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 42 minutes
- 2026-04-21 PASS an hour
- 2026-04-22 PASS an hour
- 2026-04-23 PASS an hour
- 2026-04-24 PASS 52 minutes
- 2026-04-25 PASS 44 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS an hour
- 2026-04-28 PASS 55 minutes
- 2026-04-29 PASS 57 minutes
- 2026-04-30 PASS an hour
- 2026-05-01 PASS 59 minutes
- 2026-05-02 PASS 52 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS an hour
- 2026-05-05 PASS an hour
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 47 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 46 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 46 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 53 minutes
  - PASS 39 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 54 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 45 minutes
- 2026-05-04 PASS 55 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 56 minutes
