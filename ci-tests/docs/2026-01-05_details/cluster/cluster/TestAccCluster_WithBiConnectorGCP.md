# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 7 TestRuns in dev, qa from 2025-12-30 to 2026-01-05 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-30 00:30](#error-2025-12-30t0030580000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69531d3fbb0cf4d0314e745c/clusters | dev | out_of_capacity | 2.04s

### Timeline
- 2025-12-29: MISSING
- 2025-12-30

### Error 2025-12-30T00:30:58+00:00
```
2025-12-30T00:30:58.6796882Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-12-30T00:31:03.8372124Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-12-30T00:31:06.1328463Z   
2025-12-30T00:31:06.1329448Z     resource_cluster_test.go:412: Step 1/2 error: Error running apply: exit status 1
2025-12-30T00:31:06.1330150Z         
2025-12-30T00:31:06.1332595Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69531d3fbb0cf4d0314e745c/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-12-30T00:31:06.1334509Z         
2025-12-30T00:31:06.1335061Z           with mongodbatlas_cluster.basic_gcp,
2025-12-30T00:31:06.1345755Z    test_working_directory=/tmp/plugintest2337894120 test_name=TestAccCluster_basicGCPRegionNameWesternUS
2025-12-30T00:31:06.1347250Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-12-30T00:31:06.1348373Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-12-30T00:31:06.1349942Z         
2025-12-30T00:31:06.1992845Z --- FAIL: TestAccCluster_WithBiConnectorGCP (2.36s)
```

- 2025-12-31 PASS 23 minutes
- 2026-01-01 PASS 16 minutes
- 2026-01-02 PASS 20 minutes
- 2026-01-03 PASS 16 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 20 minutes

## QA Environment
### Timeline
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 16 minutes
- 2026-01-05: MISSING
