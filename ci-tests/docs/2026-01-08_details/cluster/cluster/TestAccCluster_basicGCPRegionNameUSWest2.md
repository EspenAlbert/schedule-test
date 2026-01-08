# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-10 00:31](#error-2025-12-10t0031540000) |  | dev | flaky_client | 9684.05s
[2025-12-31 00:31](#error-2025-12-31t0031440000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69546eee2534455dffdc71e9/clusters | dev | out_of_capacity | 2.03s
[2026-01-07 00:30](#error-2026-01-07t0030390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-2889184790266409297 | dev | flaky_500 | 453.08s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - FAIL 2 hours

### Error 2025-12-10T00:31:54+00:00
```
2025-12-10T00:31:54.7226695Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-12-10T00:31:54.7239118Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-12-10T03:13:19.1860575Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-12-10T03:13:19.1861491Z     resource_cluster_test.go:1086: Step 1/1 error: Error running apply: exit status 1
2025-12-10T03:13:19.1861903Z         
2025-12-10T03:13:19.1863339Z         Error: error creating MongoDB Cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6938bf78342a5d087f206d87/clusters/test-acc-tf-c-3074813324527436998": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-12-10T03:13:19.1864396Z         
2025-12-10T03:13:19.1864694Z           with mongodbatlas_cluster.test,
2025-12-10T03:13:19.1867027Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-12-10T03:13:19.1868014Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-12-10T03:13:19.1868463Z         
2025-12-10T03:13:19.2347754Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (9684.51s)
```

  - PASS 14 minutes
- 2025-12-11 PASS 16 minutes
- 2025-12-12 PASS 20 minutes
- 2025-12-13 PASS 21 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 15 minutes
- 2025-12-16 PASS 15 minutes
- 2025-12-17 PASS 19 minutes
- 2025-12-18 PASS 23 minutes
- 2025-12-19 PASS 17 minutes
- 2025-12-20 PASS 16 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 15 minutes
- 2025-12-23 PASS 15 minutes
- 2025-12-24 PASS 16 minutes
- 2025-12-25 PASS 25 minutes
- 2025-12-26 PASS 15 minutes
- 2025-12-27 PASS 13 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 15 minutes
- 2025-12-31

### Error 2025-12-31T00:31:44+00:00
```
2025-12-31T00:31:44.1339180Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2025-12-31T00:31:44.1450816Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2025-12-31T00:31:46.3660845Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2025-12-31T00:31:46.3661584Z     resource_cluster_test.go:1085: Step 1/1 error: Error running apply: exit status 1
2025-12-31T00:31:46.3662372Z         
2025-12-31T00:31:46.3663954Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69546eee2534455dffdc71e9/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-12-31T00:31:46.3665205Z         
2025-12-31T00:31:46.3665572Z           with mongodbatlas_cluster.test,
2025-12-31T00:31:46.3666330Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-12-31T00:31:46.3667165Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-12-31T00:31:46.3667533Z         
2025-12-31T00:31:46.4103179Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (2.27s)
```

- 2026-01-01 PASS 14 minutes
- 2026-01-02 PASS 14 minutes
- 2026-01-03 PASS 15 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 16 minutes
- 2026-01-06 PASS 20 minutes
- 2026-01-07

### Error 2026-01-07T00:30:39+00:00
```
2026-01-07T00:30:39.8812736Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2026-01-07T00:30:39.8829478Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2026-01-07T00:38:13.6188392Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2026-01-07T00:38:13.6189125Z     resource_cluster_test.go:1085: Step 1/1 error: Error running apply: exit status 1
2026-01-07T00:38:13.6189636Z         
2026-01-07T00:38:13.6191622Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-2889184790266409297 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:38:13.6193079Z         
2026-01-07T00:38:13.6193365Z           with mongodbatlas_cluster.test,
2026-01-07T00:38:13.6193939Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-07T00:38:13.6194456Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-07T00:38:13.6194740Z         
2026-01-07T00:38:13.6619254Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (453.78s)
```

- 2026-01-08 PASS 20 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-08 06:24](#error-2026-01-08t0624580000) |  | qa | timeout | 10802.06s

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
- 2025-12-28 PASS 12 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 13 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08

### Error 2026-01-08T06:24:58+00:00
```
2026-01-08T06:24:58.5446019Z === RUN   TestAccCluster_basicGCPRegionNameUSWest2
2026-01-08T06:24:58.5461508Z === CONT  TestAccCluster_basicGCPRegionNameUSWest2
2026-01-08T09:25:01.1731029Z === NAME  TestAccCluster_basicGCPRegionNameUSWest2
2026-01-08T09:25:01.1732038Z     resource_cluster_test.go:1085: Step 1/1 error: Error running apply: exit status 1
2026-01-08T09:25:01.1732649Z         
2026-01-08T09:25:01.1733701Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-01-08T09:25:01.1734717Z         
2026-01-08T09:25:01.1735019Z           with mongodbatlas_cluster.test,
2026-01-08T09:25:01.1735637Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-08T09:25:01.1736216Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-08T09:25:01.1736839Z         
2026-01-08T09:25:01.1737337Z --- FAIL: TestAccCluster_basicGCPRegionNameUSWest2 (10802.63s)
```

