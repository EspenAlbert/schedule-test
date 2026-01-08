# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030390000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-6227294785007817336 | dev | flaky_500 | 243.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 46 minutes
  - PASS 38 minutes
- 2025-12-11 PASS 46 minutes
- 2025-12-12 PASS 45 minutes
- 2025-12-13 PASS 41 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 38 minutes
- 2025-12-16 PASS 42 minutes
- 2025-12-17 PASS 44 minutes
- 2025-12-18 PASS 45 minutes
- 2025-12-19 PASS 48 minutes
- 2025-12-20 PASS 43 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 48 minutes
- 2025-12-23 PASS 46 minutes
- 2025-12-24 PASS 48 minutes
- 2025-12-25 PASS an hour
- 2025-12-26 PASS 45 minutes
- 2025-12-27 PASS 42 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 38 minutes
- 2025-12-31 PASS 48 minutes
- 2026-01-01 PASS 43 minutes
- 2026-01-02 PASS 45 minutes
- 2026-01-03 PASS 40 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 45 minutes
- 2026-01-06 PASS 42 minutes
- 2026-01-07

### Error 2026-01-07T00:30:39+00:00
```
2026-01-07T00:30:39.8814220Z === RUN   TestAccCluster_RegionsConfig
2026-01-07T00:30:39.8827406Z === CONT  TestAccCluster_RegionsConfig
2026-01-07T00:34:43.0858214Z === NAME  TestAccCluster_RegionsConfig
2026-01-07T00:34:43.0858994Z     resource_cluster_test.go:1182: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:34:43.0859666Z         
2026-01-07T00:34:43.0861472Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92baf4f6cc389e7cd9f/clusters/test-acc-tf-c-6227294785007817336 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:34:43.0863127Z         
2026-01-07T00:34:43.0863426Z           with mongodbatlas_cluster.test,
2026-01-07T00:34:43.0864203Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-01-07T00:34:43.0864735Z           12: 	resource "mongodbatlas_cluster" "test" {
2026-01-07T00:34:43.0865020Z         
2026-01-07T00:34:43.1305703Z    test_working_directory=/tmp/plugintest2359614600
2026-01-07T00:34:43.1374487Z --- FAIL: TestAccCluster_RegionsConfig (243.25s)
```

- 2026-01-08 PASS 42 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 44 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 37 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 41 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 41 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 43 minutes
