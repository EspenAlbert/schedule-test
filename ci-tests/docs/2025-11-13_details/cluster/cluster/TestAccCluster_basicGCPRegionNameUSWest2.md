# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-16 00:29](#error-2025-10-16t0029420000) |  | dev | timeout | 10802.08s
[2025-10-22 08:27](#error-2025-10-22t0827230000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68f89568ab288813b27fc554/clusters | qa | out_of_capacity | 2.05s
[2025-10-27 00:30](#error-2025-10-27t0030260000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68febd1f29e7601e4645491e/clusters | dev | out_of_capacity | 2.06s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS 29 minutes
- 2025-10-16

### Error 2025-10-16T00:29:42+00:00
```
2025-10-16T00:29:42.6881590Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-10-16T00:29:42.6899494Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-10-16T03:29:45.3819032Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-10-16T03:29:45.3819803Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-10-16T03:29:45.3820212Z         
2025-10-16T03:29:45.3821038Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-10-16T03:29:45.3821895Z         
2025-10-16T03:29:45.3822297Z           with mongodbatlas_cluster.test,
2025-10-16T03:29:45.3822893Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-16T03:29:45.3823702Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-10-16T03:29:45.3824098Z         
2025-10-16T03:29:45.4336030Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.75s)
```

- 2025-10-17 PASS an hour
- 2025-10-18 PASS 16 minutes
- 2025-10-19 PASS 15 minutes
- 2025-10-20
  - PASS 52 minutes
  - PASS 13 minutes
- 2025-10-21 PASS 13 minutes
- 2025-10-22
  - PASS 17 minutes
  - FAIL 2 seconds

### Error 2025-10-22T08:27:23+00:00
```
2025-10-22T08:27:23.0932274Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-10-22T08:27:23.0965812Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-10-22T08:27:25.5049579Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-10-22T08:27:25.5050353Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-10-22T08:27:25.5050866Z         
2025-10-22T08:27:25.5052335Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/68f89568ab288813b27fc554/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-10-22T08:27:25.5053549Z         
2025-10-22T08:27:25.5053865Z           with mongodbatlas_cluster.test,
2025-10-22T08:27:25.5054556Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-22T08:27:25.5055093Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-10-22T08:27:25.5055382Z         
2025-10-22T08:27:25.5536689Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.46s)
```

- 2025-10-23 PASS 23 minutes
- 2025-10-24 PASS 19 minutes
- 2025-10-25 PASS 18 minutes
- 2025-10-26 PASS 12 minutes
- 2025-10-27

### Error 2025-10-27T00:30:26+00:00
```
2025-10-27T00:30:26.4560307Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-10-27T00:30:26.4606138Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-10-27T00:30:28.9631820Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-10-27T00:30:28.9632690Z     resource_cluster_test.go:1111: Step 1/1 error: Error running apply: exit status 1
2025-10-27T00:30:28.9633331Z         
2025-10-27T00:30:28.9634950Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68febd1f29e7601e4645491e/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-10-27T00:30:28.9636219Z         
2025-10-27T00:30:28.9636531Z           with mongodbatlas_cluster.test,
2025-10-27T00:30:28.9637253Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-27T00:30:28.9637787Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-10-27T00:30:28.9638079Z         
2025-10-27T00:30:29.0056024Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.55s)
```

- 2025-10-28 PASS 15 minutes
- 2025-10-29 PASS 18 minutes
- 2025-10-30 PASS 18 minutes
- 2025-10-31 PASS 17 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 12 minutes
- 2025-11-03 PASS 13 minutes
- 2025-11-04 PASS 20 minutes
- 2025-11-05
  - PASS 20 minutes
  - PASS 13 minutes
- 2025-11-06 PASS 24 minutes
- 2025-11-07 PASS 15 minutes
- 2025-11-08 PASS 38 minutes
- 2025-11-09 PASS 12 minutes
- 2025-11-10 PASS 12 minutes
- 2025-11-11 PASS 15 minutes
- 2025-11-12 PASS 17 minutes
- 2025-11-13
  - PASS 24 minutes
  - PASS 15 minutes