# cluster/cluster/TestAccCluster_basicGCP Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-17 00:30](#error-2026-01-17t0030300000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/696ad823eb83155461cfd9d5/clusters | dev | out_of_capacity | 2.04s
[2026-01-27 00:33](#error-2026-01-27t0033340000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/697807dc4f147b380f7803e0/clusters | dev | out_of_capacity | 2.03s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 20 minutes
- 2026-01-09 PASS 22 minutes
- 2026-01-10 PASS 15 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 20 minutes
- 2026-01-13 PASS 25 minutes
- 2026-01-14 PASS 19 minutes
- 2026-01-15 PASS 22 minutes
- 2026-01-16 PASS 19 minutes
- 2026-01-17

### Error 2026-01-17T00:30:30+00:00
```
2026-01-17T00:30:30.9621547Z === RUN   TestAccCluster_basicGCP
2026-01-17T00:30:35.3517948Z === CONT  TestAccCluster_basicGCP
2026-01-17T00:30:37.7269064Z === NAME  TestAccCluster_basicGCP
2026-01-17T00:30:37.7269701Z     resource_cluster_test.go:373: Step 1/2 error: Error running apply: exit status 1
2026-01-17T00:30:37.7270245Z         
2026-01-17T00:30:37.7271901Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/696ad823eb83155461cfd9d5/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-01-17T00:30:37.7273118Z         
2026-01-17T00:30:37.7273545Z           with mongodbatlas_cluster.basic_gcp,
2026-01-17T00:30:37.7274239Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-01-17T00:30:37.7274895Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-01-17T00:30:37.7275228Z         
2026-01-17T00:30:37.7715144Z --- FAIL: TestAccCluster_basicGCP (2.42s)
```

- 2026-01-18: MISSING
- 2026-01-19 PASS 17 minutes
- 2026-01-20 PASS 21 minutes
- 2026-01-21 PASS 22 minutes
- 2026-01-22 PASS 20 minutes
- 2026-01-23 PASS 20 minutes
- 2026-01-24 PASS 17 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 19 minutes
- 2026-01-27

### Error 2026-01-27T00:33:34+00:00
```
2026-01-27T00:33:34.1709862Z === RUN   TestAccCluster_basicGCP
2026-01-27T00:33:44.6118207Z === CONT  TestAccCluster_basicGCP
2026-01-27T00:33:46.8945927Z === NAME  TestAccCluster_basicGCP
2026-01-27T00:33:46.8946621Z     resource_cluster_test.go:373: Step 1/2 error: Error running apply: exit status 1
2026-01-27T00:33:46.8947065Z         
2026-01-27T00:33:46.8948465Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/697807dc4f147b380f7803e0/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-01-27T00:33:46.8949738Z         
2026-01-27T00:33:46.8950070Z           with mongodbatlas_cluster.basic_gcp,
2026-01-27T00:33:46.8951019Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-01-27T00:33:46.8951643Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-01-27T00:33:46.8951980Z         
2026-01-27T00:33:46.9434877Z --- FAIL: TestAccCluster_basicGCP (2.33s)
```

- 2026-01-28 PASS 19 minutes
- 2026-01-29 PASS 25 minutes
- 2026-01-30 PASS 26 minutes
- 2026-01-31 PASS 15 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 15 minutes
- 2026-02-03 PASS 15 minutes
- 2026-02-04 PASS 31 minutes
- 2026-02-05 PASS 23 minutes
- 2026-02-06 PASS 19 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 18 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 18 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 15 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 15 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 17 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 17 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
