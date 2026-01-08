# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da93eaf4f6cc389e85604/clusters/test-acc-tf-c-552407031421319369 | dev | flaky_500 | 101.00s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 42 minutes
  - PASS 41 minutes
- 2025-12-11 PASS 42 minutes
- 2025-12-12 PASS 41 minutes
- 2025-12-13 PASS 41 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 35 minutes
- 2025-12-16 PASS 39 minutes
- 2025-12-17 PASS 40 minutes
- 2025-12-18 PASS 40 minutes
- 2025-12-19 PASS 41 minutes
- 2025-12-20 PASS 39 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 46 minutes
- 2025-12-23 PASS 37 minutes
- 2025-12-24 PASS 44 minutes
- 2025-12-25 PASS 54 minutes
- 2025-12-26 PASS 37 minutes
- 2025-12-27 PASS 37 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 38 minutes
- 2025-12-31 PASS 39 minutes
- 2026-01-01 PASS 35 minutes
- 2026-01-02 PASS 38 minutes
- 2026-01-03 PASS 36 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 41 minutes
- 2026-01-06 PASS 36 minutes
- 2026-01-07

### Error 2026-01-07T00:30:54+00:00
```
2026-01-07T00:30:54.0500965Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2026-01-07T00:31:16.8345373Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2026-01-07T00:31:21.8399785Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2026-01-07T00:31:21.8404259Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:21.8333215Z, ProjectID: 695da93eaf4f6cc389e85604, Cluster name: test-acc-tf-c-552407031421319369
2026-01-07T00:32:55.6852116Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2026-01-07T00:32:55.6853077Z     resource_test.go:364: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:32:55.6853664Z         
2026-01-07T00:32:55.6854057Z         Error: Error in create
2026-01-07T00:32:55.6854441Z         
2026-01-07T00:32:55.6854945Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:32:55.6855963Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:32:55.6856894Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:32:55.6857386Z         
2026-01-07T00:32:55.6858087Z         cluster=test-acc-tf-c-552407031421319369 didn't reach desired state: IDLE,
2026-01-07T00:32:55.6858707Z         error:
2026-01-07T00:32:55.6859834Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da93eaf4f6cc389e85604/clusters/test-acc-tf-c-552407031421319369
2026-01-07T00:32:55.6861071Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:55.6861986Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:55.6864345Z         BadRequestDetail: 
2026-01-07T00:32:55.7425794Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (101.02s)
```

- 2026-01-08 PASS 37 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 39 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 30 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 32 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 32 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 32 minutes
