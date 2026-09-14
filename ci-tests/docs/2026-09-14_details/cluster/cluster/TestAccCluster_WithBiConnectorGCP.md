# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-11 00:41](#error-2026-09-11t0041460000) |  | dev | timeout | 10807.04s

### Timeline
- 2026-09-07 PASS an hour
- 2026-09-08 PASS 48 minutes
- 2026-09-09 PASS 40 minutes
- 2026-09-10 PASS an hour
- 2026-09-11
  - FAIL 3 hours

### Error 2026-09-11T00:41:46+00:00
```
2026-09-11T00:41:46.0486437Z === RUN   TestAccCluster_WithBiConnectorGCP
2026-09-11T00:41:53.7426595Z === CONT  TestAccCluster_WithBiConnectorGCP
2026-09-11T03:41:57.1600928Z === NAME  TestAccCluster_WithBiConnectorGCP
2026-09-11T03:41:57.1601914Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2026-09-11T03:41:57.1602528Z         
2026-09-11T03:41:57.1603317Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'REPAIRING', timeout: 3h0m0s)
2026-09-11T03:41:57.1604071Z         
2026-09-11T03:41:57.1604408Z           with mongodbatlas_cluster.basic_gcp,
2026-09-11T03:41:57.1605245Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-09-11T03:41:57.1606187Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-09-11T03:41:57.1606543Z         
2026-09-11T03:41:57.2160927Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10807.44s)
```

  - PASS 36 minutes
- 2026-09-12 PASS 28 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 24 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 24 minutes
- 2026-09-14: MISSING
