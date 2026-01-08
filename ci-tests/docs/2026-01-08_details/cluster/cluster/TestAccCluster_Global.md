# cluster/cluster/TestAccCluster_Global Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da928d59b8466ea71ad40/clusters/test-acc-tf-c-6485331161293880418 | dev | flaky_500 | 253.05s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 21 minutes
  - PASS 22 minutes
- 2025-12-11 PASS 17 minutes
- 2025-12-12 PASS 27 minutes
- 2025-12-13 PASS 18 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 16 minutes
- 2025-12-16 PASS 16 minutes
- 2025-12-17 PASS 20 minutes
- 2025-12-18 PASS 20 minutes
- 2025-12-19 PASS 18 minutes
- 2025-12-20 PASS 18 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 19 minutes
- 2025-12-23 PASS 20 minutes
- 2025-12-24 PASS 22 minutes
- 2025-12-25 PASS 29 minutes
- 2025-12-26 PASS 19 minutes
- 2025-12-27 PASS 19 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 19 minutes
- 2025-12-31 PASS 20 minutes
- 2026-01-01 PASS 18 minutes
- 2026-01-02 PASS 19 minutes
- 2026-01-03 PASS 17 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 21 minutes
- 2026-01-06 PASS 18 minutes
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.6594339Z === RUN   TestAccCluster_Global
2026-01-07T00:30:39.8822072Z === CONT  TestAccCluster_Global
2026-01-07T00:34:53.3314817Z === NAME  TestAccCluster_Global
2026-01-07T00:34:53.3315658Z     resource_cluster_test.go:589: Step 1/1 error: Error running apply: exit status 1
2026-01-07T00:34:53.3316314Z         
2026-01-07T00:34:53.3318787Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da928d59b8466ea71ad40/clusters/test-acc-tf-c-6485331161293880418 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:34:53.3336974Z         
2026-01-07T00:34:53.3337476Z           with mongodbatlas_cluster.test,
2026-01-07T00:34:53.3338077Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-07T00:34:53.3338602Z           12: 		resource "mongodbatlas_cluster" test {
2026-01-07T00:34:53.3338889Z         
2026-01-07T00:34:53.3741910Z --- FAIL: TestAccCluster_Global (253.49s)
```

- 2026-01-08 PASS 19 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
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
- 2025-12-21 PASS 19 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 19 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 22 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 24 minutes
