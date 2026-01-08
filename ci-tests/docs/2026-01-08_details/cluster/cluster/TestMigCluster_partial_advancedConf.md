# cluster/cluster/TestMigCluster_partial_advancedConf Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da926af4f6cc389e78487/clusters/test-acc-tf-c-5959232763414505482 | dev | flaky_500 | 277.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 18 minutes
  - PASS 15 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 15 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 14 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 16 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 16 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 15 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 18 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 12 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 17 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 16 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 16 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:32+00:00
```
2026-01-07T00:30:32.7359332Z === RUN   TestMigCluster_partial_advancedConf
2026-01-07T00:30:39.8826886Z === CONT  TestMigCluster_partial_advancedConf
2026-01-07T00:31:14.8984402Z === NAME  TestMigCluster_partial_advancedConf
2026-01-07T00:31:14.8987762Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:14.89812822Z, ProjectID: 695da926af4f6cc389e78487, Cluster name: test-acc-tf-c-5959232763414505482
2026-01-07T00:35:17.0779659Z === NAME  TestMigCluster_partial_advancedConf
2026-01-07T00:35:17.0780665Z     resource_cluster_migration_test.go:15: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:35:17.0781419Z         
2026-01-07T00:35:17.0784786Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da926af4f6cc389e78487/clusters/test-acc-tf-c-5959232763414505482 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-01-07T00:35:17.0786956Z         
2026-01-07T00:35:17.0787507Z           with mongodbatlas_cluster.test,
2026-01-07T00:35:17.0788635Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cluster" "test":
2026-01-07T00:35:17.0789558Z           14: 		resource "mongodbatlas_cluster" "test" {
2026-01-07T00:35:17.0789859Z         
2026-01-07T00:35:17.2332096Z --- FAIL: TestMigCluster_partial_advancedConf (277.35s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 14 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 15 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 11 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 12 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 minutes
