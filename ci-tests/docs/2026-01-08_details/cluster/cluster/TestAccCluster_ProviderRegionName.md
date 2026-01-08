# cluster/cluster/TestAccCluster_ProviderRegionName Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928d59b8466ea71ad40/clusters/test-acc-tf-c-431667061138568714 | dev | flaky_500 | 323.05s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 36 minutes
  - PASS 36 minutes
- 2025-12-11 PASS 37 minutes
- 2025-12-12 PASS 35 minutes
- 2025-12-13 PASS 36 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 37 minutes
- 2025-12-16 PASS 36 minutes
- 2025-12-17 PASS 38 minutes
- 2025-12-18 PASS 37 minutes
- 2025-12-19 PASS 37 minutes
- 2025-12-20 PASS 37 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 38 minutes
- 2025-12-23 PASS 36 minutes
- 2025-12-24 PASS 36 minutes
- 2025-12-25 PASS 47 minutes
- 2025-12-26 PASS 34 minutes
- 2025-12-27 PASS 38 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 37 minutes
- 2025-12-31 PASS 37 minutes
- 2026-01-01 PASS 35 minutes
- 2026-01-02 PASS 37 minutes
- 2026-01-03 PASS 37 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 37 minutes
- 2026-01-06 PASS 38 minutes
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.6593334Z === RUN   TestAccCluster_ProviderRegionName
2026-01-07T00:30:39.8822558Z === CONT  TestAccCluster_ProviderRegionName
2026-01-07T00:36:03.3275960Z === NAME  TestAccCluster_ProviderRegionName
2026-01-07T00:36:03.3276810Z     resource_cluster_test.go:543: Step 2/3 error: Error running apply: exit status 1
2026-01-07T00:36:03.3277208Z         
2026-01-07T00:36:03.3279188Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928d59b8466ea71ad40/clusters/test-acc-tf-c-431667061138568714 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:36:03.3280496Z         
2026-01-07T00:36:03.3280972Z           with mongodbatlas_cluster.multi_region,
2026-01-07T00:36:03.3281716Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2026-01-07T00:36:03.3282540Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2026-01-07T00:36:03.3283060Z         
2026-01-07T00:36:03.3746177Z --- FAIL: TestAccCluster_ProviderRegionName (323.49s)
```

- 2026-01-08 PASS 35 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-14 00:33](#error-2025-12-14t0033360000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/693e05de3fd9bf6ba045ff92/clusters | qa | out_of_capacity | 3.00s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14

### Error 2025-12-14T00:33:36+00:00
```
2025-12-14T00:33:36.7179264Z === RUN   TestAccCluster_ProviderRegionName
2025-12-14T00:33:39.1701437Z === CONT  TestAccCluster_ProviderRegionName
2025-12-14T00:33:42.1526948Z === NAME  TestAccCluster_ProviderRegionName
2025-12-14T00:33:42.1527916Z     resource_cluster_test.go:544: Step 2/3 error: Error running apply: exit status 1
2025-12-14T00:33:42.1528642Z         
2025-12-14T00:33:42.1531152Z         Error: error creating MongoDB Cluster: POST https://cloud-qa.mongodb.com/api/atlas/v1.0/groups/693e05de3fd9bf6ba045ff92/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-12-14T00:33:42.1532867Z         
2025-12-14T00:33:42.1533460Z           with mongodbatlas_cluster.multi_region,
2025-12-14T00:33:42.1534765Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "multi_region":
2025-12-14T00:33:42.1535855Z           12: 		resource "mongodbatlas_cluster" "multi_region" {
2025-12-14T00:33:42.1536459Z         
2025-12-14T00:33:42.2042973Z --- FAIL: TestAccCluster_ProviderRegionName (3.04s)
```

- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 35 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 35 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 33 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 34 minutes
