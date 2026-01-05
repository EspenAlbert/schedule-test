# cluster/cluster/TestAccCluster_basicGCPRegionNameUSWest2 Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-31 00:31](#error-2025-12-31t0031440000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69546eee2534455dffdc71e9/clusters | dev | out_of_capacity | 2.03s

### Timeline
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

## QA Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 13 minutes
- 2026-01-05: MISSING
