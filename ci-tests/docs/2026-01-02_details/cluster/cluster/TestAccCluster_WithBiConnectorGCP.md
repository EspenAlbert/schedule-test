# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 28) FAIL(x 3)
Success rate: 90.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-18 00:27](#error-2025-12-18t0027470000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69434a80921ff51a93c7bc46/clusters | dev | out_of_capacity | 2.03s
[2025-12-23 00:31](#error-2025-12-23t0031010000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6949e2c2aeb07cf7669797e0/clusters | dev | out_of_capacity | 2.03s
[2025-12-30 00:30](#error-2025-12-30t0030580000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/69531d3fbb0cf4d0314e745c/clusters | dev | out_of_capacity | 2.04s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 35 minutes
- 2025-12-05 PASS an hour
- 2025-12-06 PASS 23 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 17 minutes
- 2025-12-09 PASS 18 minutes
- 2025-12-10
  - PASS 19 minutes
  - PASS 17 minutes
- 2025-12-11 PASS 22 minutes
- 2025-12-12 PASS 27 minutes
- 2025-12-13 PASS 21 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 17 minutes
- 2025-12-16 PASS 19 minutes
- 2025-12-17 PASS 21 minutes
- 2025-12-18

### Error 2025-12-18T00:27:47+00:00
```
2025-12-18T00:27:47.8811991Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-12-18T00:27:53.1455708Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-12-18T00:27:55.4139828Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-12-18T00:27:55.4140390Z     resource_cluster_test.go:412: Step 1/2 error: Error running apply: exit status 1
2025-12-18T00:27:55.4140799Z         
2025-12-18T00:27:55.4142650Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/69434a80921ff51a93c7bc46/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-12-18T00:27:55.4143685Z         
2025-12-18T00:27:55.4144005Z           with mongodbatlas_cluster.basic_gcp,
2025-12-18T00:27:55.4144623Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-12-18T00:27:55.4145200Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-12-18T00:27:55.4145499Z         
2025-12-18T00:27:55.4626606Z --- FAIL: TestAccCluster_WithBiConnectorGCP (2.32s)
```

- 2025-12-19 PASS 19 minutes
- 2025-12-20 PASS 18 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 19 minutes
- 2025-12-23

### Error 2025-12-23T00:31:01+00:00
```
2025-12-23T00:31:01.1213840Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-12-23T00:31:06.1126724Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-12-23T00:31:08.3954353Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-12-23T00:31:08.3955340Z     resource_cluster_test.go:412: Step 1/2 error: Error running apply: exit status 1
2025-12-23T00:31:08.3955947Z         
2025-12-23T00:31:08.3957341Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6949e2c2aeb07cf7669797e0/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-12-23T00:31:08.3958616Z         
2025-12-23T00:31:08.3958993Z           with mongodbatlas_cluster.basic_gcp,
2025-12-23T00:31:08.3960239Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-12-23T00:31:08.3961513Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-12-23T00:31:08.3962078Z         
2025-12-23T00:31:08.4434059Z --- FAIL: TestAccCluster_WithBiConnectorGCP (2.33s)
```

- 2025-12-24 PASS 18 minutes
- 2025-12-25 PASS 33 minutes
- 2025-12-26 PASS 17 minutes
- 2025-12-27 PASS 18 minutes
- 2025-12-28: MISSING
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

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 15 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 18 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 18 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 17 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 17 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
