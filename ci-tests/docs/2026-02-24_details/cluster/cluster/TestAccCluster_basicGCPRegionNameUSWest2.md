# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-17 00:38](#error-2026-02-17t0038330000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6993b8855f09f9ffceb5ebd0/clusters | dev | out_of_capacity | 2.05s

### Timeline
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
- 2026-02-07 PASS 25 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 26 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 25 minutes
- 2026-02-12 PASS 23 minutes
- 2026-02-13 PASS 24 minutes
- 2026-02-14 PASS 31 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 21 minutes
- 2026-02-17

### Error 2026-02-17T00:38:33+00:00
```
2026-02-17T00:38:33.7387502Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2026-02-17T00:38:33.7457452Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2026-02-17T00:38:36.2047746Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2026-02-17T00:38:36.2048924Z     resource_cluster_test.go:1086: Step 1/1 error: Error running apply: exit status 1
2026-02-17T00:38:36.2049423Z         
2026-02-17T00:38:36.2051055Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6993b8855f09f9ffceb5ebd0/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-17T00:38:36.2052872Z         
2026-02-17T00:38:36.2053387Z           with mongodbatlas_cluster.test,
2026-02-17T00:38:36.2054498Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-17T00:38:36.2055582Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-02-17T00:38:36.2056096Z         
2026-02-17T00:38:36.2501583Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.51s)
```

- 2026-02-18 PASS 25 minutes
- 2026-02-19 PASS 26 minutes
- 2026-02-20 PASS 25 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 22 minutes
- 2026-02-24 PASS 30 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-15 00:40](#error-2026-02-15t0040590000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69911619cef188b1a571f6d9/clusters | qa | out_of_capacity | 2.04s

### Timeline
- 2026-01-25: MISSING
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
- 2026-02-07: MISSING
- 2026-02-08 PASS 22 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T00:40:59+00:00
```
2026-02-15T00:40:59.5830156Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2026-02-15T00:40:59.5854857Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2026-02-15T00:41:01.9444807Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2026-02-15T00:41:01.9445542Z     resource_cluster_test.go:1086: Step 1/1 error: Error running apply: exit status 1
2026-02-15T00:41:01.9446021Z         
2026-02-15T00:41:01.9447870Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/69911619cef188b1a571f6d9/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-02-15T00:41:01.9448904Z         
2026-02-15T00:41:01.9449218Z           with mongodbatlas_cluster.test,
2026-02-15T00:41:01.9449849Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-15T00:41:01.9450424Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-02-15T00:41:01.9450735Z         
2026-02-15T00:41:01.9961101Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.41s)
```

- 2026-02-16: MISSING
- 2026-02-17 PASS 20 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 19 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
