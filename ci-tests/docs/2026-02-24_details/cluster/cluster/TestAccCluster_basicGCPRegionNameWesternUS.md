# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-13 00:41](#error-2026-02-13t0041110000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/698e7324e8046ccdbd574961/clusters | dev | out_of_capacity | 2.03s
[2026-02-16 00:39](#error-2026-02-16t0039240000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6992673a60ee1ae24ac91308/clusters | dev | out_of_capacity | 2.02s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 17 minutes
- 2026-01-27 PASS 25 minutes
- 2026-01-28 PASS 25 minutes
- 2026-01-29 PASS 28 minutes
- 2026-01-30 PASS 26 minutes
- 2026-01-31 PASS 18 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 18 minutes
- 2026-02-03 PASS 18 minutes
- 2026-02-04 PASS 21 minutes
- 2026-02-05 PASS 26 minutes
- 2026-02-06 PASS 31 minutes
- 2026-02-07 PASS 25 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 23 minutes
- 2026-02-10 PASS 21 minutes
- 2026-02-11 PASS 21 minutes
- 2026-02-12 PASS 23 minutes
- 2026-02-13

### Error 2026-02-13T00:41:11+00:00
```
2026-02-13T00:41:11.9300729Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2026-02-13T00:41:11.9360414Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2026-02-13T00:41:14.1967759Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2026-02-13T00:41:14.1968341Z     resource_cluster_test.go:1063: Step 1/1 error: Error running apply: exit status 1
2026-02-13T00:41:14.1969027Z         
2026-02-13T00:41:14.1971239Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/698e7324e8046ccdbd574961/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-13T00:41:14.1972971Z         
2026-02-13T00:41:14.1973665Z           with mongodbatlas_cluster.test,
2026-02-13T00:41:14.1974739Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-13T00:41:14.1975746Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-02-13T00:41:14.1976265Z         
2026-02-13T00:41:14.2472657Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.31s)
```

- 2026-02-14 PASS 30 minutes
- 2026-02-15: MISSING
- 2026-02-16

### Error 2026-02-16T00:39:24+00:00
```
2026-02-16T00:39:24.9619593Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2026-02-16T00:39:24.9633352Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2026-02-16T00:39:27.0849522Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2026-02-16T00:39:27.0850267Z     resource_cluster_test.go:1063: Step 1/1 error: Error running apply: exit status 1
2026-02-16T00:39:27.0850697Z         
2026-02-16T00:39:27.0852099Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6992673a60ee1ae24ac91308/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-16T00:39:27.0853255Z         
2026-02-16T00:39:27.0853573Z           with mongodbatlas_cluster.test,
2026-02-16T00:39:27.0854454Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-16T00:39:27.0855181Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-02-16T00:39:27.0855484Z         
2026-02-16T00:39:27.1302369Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.17s)
```

- 2026-02-17 PASS 30 minutes
- 2026-02-18 PASS 29 minutes
- 2026-02-19 PASS 26 minutes
- 2026-02-20 PASS 25 minutes
- 2026-02-21 PASS 23 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24 PASS 25 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 24 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 19 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 25 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 24 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 20 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 20 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
