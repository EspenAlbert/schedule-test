# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-09 00:30](#error-2025-12-09t0030510000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69376db73c12b02ea31758e4/clusters | dev | out_of_capacity | 2.03s
[2025-12-30 00:31](#error-2025-12-30t0031030000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69531d45dd218acc90d37017/clusters | dev | out_of_capacity | 2.04s
[2026-01-02 00:31](#error-2026-01-02t0031500000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/695711f3bb847ea0da190f21/clusters | dev | out_of_capacity | 2.05s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 36 minutes
- 2025-12-05 PASS an hour
- 2025-12-06 PASS 18 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 16 minutes
- 2025-12-09

### Error 2025-12-09T00:30:51+00:00
```
2025-12-09T00:30:51.9371204Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-12-09T00:30:51.9387546Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-12-09T00:30:54.1579267Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-12-09T00:30:54.1579830Z     resource_cluster_test.go:1063: Step 1/1 error: Error running apply: exit status 1
2025-12-09T00:30:54.1580339Z         
2025-12-09T00:30:54.1581864Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69376db73c12b02ea31758e4/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-12-09T00:30:54.1582925Z         
2025-12-09T00:30:54.1583338Z           with mongodbatlas_cluster.test,
2025-12-09T00:30:54.1584193Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-12-09T00:30:54.1584732Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-12-09T00:30:54.1585021Z         
2025-12-09T00:30:54.2031104Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.27s)
```

- 2025-12-10
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-12-11 PASS 20 minutes
- 2025-12-12 PASS 19 minutes
- 2025-12-13 PASS 18 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 18 minutes
- 2025-12-16 PASS 17 minutes
- 2025-12-17 PASS 19 minutes
- 2025-12-18 PASS 23 minutes
- 2025-12-19 PASS 16 minutes
- 2025-12-20 PASS 14 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 15 minutes
- 2025-12-23 PASS 16 minutes
- 2025-12-24 PASS 18 minutes
- 2025-12-25 PASS 25 minutes
- 2025-12-26 PASS 16 minutes
- 2025-12-27 PASS 15 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30

### Error 2025-12-30T00:31:03+00:00
```
2025-12-30T00:31:03.8213650Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-12-30T00:31:03.8312947Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-12-30T00:31:06.1350237Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-12-30T00:31:06.1350951Z     resource_cluster_test.go:1062: Step 1/1 error: Error running apply: exit status 1
2025-12-30T00:31:06.1351357Z         
2025-12-30T00:31:06.1352675Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69531d45dd218acc90d37017/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-12-30T00:31:06.1353630Z         
2025-12-30T00:31:06.1353922Z           with mongodbatlas_cluster.test,
2025-12-30T00:31:06.1354508Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-12-30T00:31:06.1355050Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-12-30T00:31:06.1355342Z         
2025-12-30T00:31:06.1976963Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.37s)
```

- 2025-12-31 PASS 17 minutes
- 2026-01-01 PASS 18 minutes
- 2026-01-02

### Error 2026-01-02T00:31:50+00:00
```
2026-01-02T00:31:50.6368547Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2026-01-02T00:31:50.6440812Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2026-01-02T00:31:53.0863098Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2026-01-02T00:31:53.0864083Z     resource_cluster_test.go:1062: Step 1/1 error: Error running apply: exit status 1
2026-01-02T00:31:53.0864731Z         
2026-01-02T00:31:53.0866032Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/695711f3bb847ea0da190f21/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-01-02T00:31:53.0867290Z         
2026-01-02T00:31:53.0867759Z           with mongodbatlas_cluster.test,
2026-01-02T00:31:53.0868452Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-02T00:31:53.0868998Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-02T00:31:53.0869302Z         
2026-01-02T00:31:53.1304683Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.49s)
```


## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 13 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 13 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 15 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 13 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 15 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
