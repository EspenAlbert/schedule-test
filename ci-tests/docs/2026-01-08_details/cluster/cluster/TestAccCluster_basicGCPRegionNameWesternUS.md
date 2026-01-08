# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-30 00:31](#error-2025-12-30t0031030000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69531d45dd218acc90d37017/clusters | dev | out_of_capacity | 2.04s
[2026-01-02 00:31](#error-2026-01-02t0031500000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/695711f3bb847ea0da190f21/clusters | dev | out_of_capacity | 2.05s
[2026-01-03 00:30](#error-2026-01-03t0030030000) |  | dev | timeout | 10802.06s
[2026-01-07 00:30](#error-2026-01-07t0030390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-825437124647604272 | dev | flaky_500 | 323.04s
[2026-01-08 00:32](#error-2026-01-08t0032050000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/695efb039caa787b31ee33f1/clusters | dev | out_of_capacity | 2.04s

### Timeline
- 2025-12-09: MISSING
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
- 2026-01-06 PASS 23 minutes
- 2026-01-07

### Error 2026-01-07T00:30:39+00:00
```
2026-01-07T00:30:39.8811224Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2026-01-07T00:30:39.8912260Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2026-01-07T00:36:03.2237452Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2026-01-07T00:36:03.2238068Z     resource_cluster_test.go:1062: Step 1/1 error: Error running apply: exit status 1
2026-01-07T00:36:03.2238579Z         
2026-01-07T00:36:03.2240427Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-825437124647604272 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:36:03.2241905Z         
2026-01-07T00:36:03.2242506Z           with mongodbatlas_cluster.test,
2026-01-07T00:36:03.2243654Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-07T00:36:03.2244528Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-07T00:36:03.2244824Z         
2026-01-07T00:36:03.2689052Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (323.39s)
```

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


## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-04 00:34](#error-2026-01-04t0034470000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6959b5a5c5c82b0c8dbefb2e/clusters | qa | out_of_capacity | 2.03s

### Timeline
- 2025-12-09: MISSING
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
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 minutes
