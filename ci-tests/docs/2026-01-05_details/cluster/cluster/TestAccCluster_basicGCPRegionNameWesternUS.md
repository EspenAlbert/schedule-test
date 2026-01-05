# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, FAIL(x 4) PASS(x 3)
Success rate: 42.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-30 00:31](#error-2025-12-30t0031030000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69531d45dd218acc90d37017/clusters | dev | out_of_capacity | 2.04s
[2026-01-02 00:31](#error-2026-01-02t0031500000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/695711f3bb847ea0da190f21/clusters | dev | out_of_capacity | 2.05s
[2026-01-03 00:30](#error-2026-01-03t0030030000) |  | dev | timeout | 10802.06s

### Timeline
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

- 2026-01-03

### Error 2026-01-03T00:30:03+00:00
```
2026-01-03T00:30:03.5222901Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2026-01-03T00:30:03.5272906Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2026-01-03T03:30:06.1104996Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2026-01-03T03:30:06.1105874Z     resource_cluster_test.go:1062: Step 1/1 error: Error running apply: exit status 1
2026-01-03T03:30:06.1106509Z         
2026-01-03T03:30:06.1107571Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-03T03:30:06.1108541Z         
2026-01-03T03:30:06.1108921Z           with mongodbatlas_cluster.test,
2026-01-03T03:30:06.1109711Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-03T03:30:06.1110439Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-03T03:30:06.1110812Z         
2026-01-03T03:30:06.1601974Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.63s)
```

- 2026-01-04: MISSING
- 2026-01-05 PASS 17 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-04 00:34](#error-2026-01-04t0034470000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6959b5a5c5c82b0c8dbefb2e/clusters | qa | out_of_capacity | 2.03s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04

### Error 2026-01-04T00:34:47+00:00
```
2026-01-04T00:34:47.3697831Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2026-01-04T00:34:47.3944608Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2026-01-04T00:34:49.6221454Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2026-01-04T00:34:49.6222322Z     resource_cluster_test.go:1062: Step 1/1 error: Error running apply: exit status 1
2026-01-04T00:34:49.6222999Z         
2026-01-04T00:34:49.6225201Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/6959b5a5c5c82b0c8dbefb2e/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-01-04T00:34:49.6226826Z         
2026-01-04T00:34:49.6227344Z           with mongodbatlas_cluster.test,
2026-01-04T00:34:49.6228390Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-04T00:34:49.6229339Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-04T00:34:49.6229836Z         
2026-01-04T00:34:49.6699706Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.28s)
```

- 2026-01-05: MISSING
