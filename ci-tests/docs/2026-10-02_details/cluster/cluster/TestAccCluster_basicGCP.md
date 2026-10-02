# cluster/cluster/TestAccCluster_basicGCP Test Details
# Found 37 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-12 00:41](#error-2026-09-12t0041210000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/6aa49faf7423f4722c005f89/clusters | dev | out_of_capacity | 2.04s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 2 hours
- 2026-09-03
  - PASS 28 minutes
  - PASS 2 hours
- 2026-09-04 PASS 2 hours
- 2026-09-05 PASS 33 minutes
- 2026-09-06: MISSING
- 2026-09-07
  - PASS an hour
  - PASS an hour
- 2026-09-08 PASS 32 minutes
- 2026-09-09 PASS 27 minutes
- 2026-09-10 PASS 39 minutes
- 2026-09-11
  - PASS an hour
  - PASS 42 minutes
- 2026-09-12

### Error 2026-09-12T00:41:21+00:00
```
2026-09-12T00:41:21.9175760Z === RUN   TestAccCluster_basicGCP
2026-09-12T00:41:27.9968229Z === CONT  TestAccCluster_basicGCP
2026-09-12T00:41:30.3074958Z === NAME  TestAccCluster_basicGCP
2026-09-12T00:41:30.3075698Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2026-09-12T00:41:30.3076147Z         
2026-09-12T00:41:30.3077828Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6aa49faf7423f4722c005f89/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2026-09-12T00:41:30.3079160Z         
2026-09-12T00:41:30.3079517Z           with mongodbatlas_cluster.basic_gcp,
2026-09-12T00:41:30.3080367Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2026-09-12T00:41:30.3081018Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2026-09-12T00:41:30.3081367Z         
2026-09-12T00:41:30.3617132Z --- FAIL: TestAccCluster_basicGCP (2.37s)
```

- 2026-09-13: MISSING
- 2026-09-14 PASS 25 minutes
- 2026-09-15 PASS 27 minutes
- 2026-09-16 PASS 26 minutes
- 2026-09-17 PASS 26 minutes
- 2026-09-18 PASS 26 minutes
- 2026-09-19 PASS 24 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 25 minutes
- 2026-09-22 PASS 25 minutes
- 2026-09-23
  - PASS 26 minutes
  - PASS 27 minutes
- 2026-09-24 PASS 27 minutes
- 2026-09-25 PASS 25 minutes
- 2026-09-26 PASS 24 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 25 minutes
- 2026-09-29 PASS 24 minutes
- 2026-09-30 PASS 28 minutes
- 2026-10-01 PASS 25 minutes
- 2026-10-02 PASS 25 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 25 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 26 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 27 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 24 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 26 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 26 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
