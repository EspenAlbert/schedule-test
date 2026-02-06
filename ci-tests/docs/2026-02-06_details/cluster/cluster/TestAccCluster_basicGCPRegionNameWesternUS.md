# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-08 00:32](#error-2026-01-08t0032050000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/695efb039caa787b31ee33f1/clusters | dev | out_of_capacity | 2.04s
[2026-01-10 00:31](#error-2026-01-10t0031080000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69619dcaa6d3974abfe106ef/clusters | dev | out_of_capacity | 2.03s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08

### Error 2026-01-08T00:32:05+00:00
```
2026-01-08T00:32:05.3141062Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2026-01-08T00:32:05.3166330Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2026-01-08T00:32:07.7129780Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2026-01-08T00:32:07.7130511Z     resource_cluster_test.go:1062: Step 1/1 error: Error running apply: exit status 1
2026-01-08T00:32:07.7131095Z         
2026-01-08T00:32:07.7132886Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/695efb039caa787b31ee33f1/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-01-08T00:32:07.7134133Z         
2026-01-08T00:32:07.7134631Z           with mongodbatlas_cluster.test,
2026-01-08T00:32:07.7135253Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-08T00:32:07.7135817Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-08T00:32:07.7136115Z         
2026-01-08T00:32:07.7583224Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.44s)
```

- 2026-01-09 PASS 28 minutes
- 2026-01-10

### Error 2026-01-10T00:31:08+00:00
```
2026-01-10T00:31:08.7769111Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2026-01-10T00:31:08.7837769Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2026-01-10T00:31:11.0733831Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2026-01-10T00:31:11.0734561Z     resource_cluster_test.go:1062: Step 1/1 error: Error running apply: exit status 1
2026-01-10T00:31:11.0735116Z         
2026-01-10T00:31:11.0736995Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69619dcaa6d3974abfe106ef/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-01-10T00:31:11.0738260Z         
2026-01-10T00:31:11.0738561Z           with mongodbatlas_cluster.test,
2026-01-10T00:31:11.0739195Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-10T00:31:11.0739767Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-10T00:31:11.0740070Z         
2026-01-10T00:31:11.1176161Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.33s)
```

- 2026-01-11: MISSING
- 2026-01-12 PASS 20 minutes
- 2026-01-13 PASS 25 minutes
- 2026-01-14 PASS 20 minutes
- 2026-01-15 PASS 22 minutes
- 2026-01-16 PASS 23 minutes
- 2026-01-17 PASS 19 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 17 minutes
- 2026-01-20 PASS 22 minutes
- 2026-01-21 PASS 22 minutes
- 2026-01-22 PASS 20 minutes
- 2026-01-23 PASS 20 minutes
- 2026-01-24 PASS 17 minutes
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

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
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
- 2026-01-22 PASS 18 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 23 minutes
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
