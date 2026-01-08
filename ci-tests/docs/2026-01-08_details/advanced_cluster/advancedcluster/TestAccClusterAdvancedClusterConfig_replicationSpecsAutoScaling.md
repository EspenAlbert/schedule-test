# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da93eaf4f6cc389e85604/clusters/test-acc-tf-c-3135213204296639776 | dev | flaky_500 | 197.00s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 33 minutes
  - PASS 28 minutes
- 2025-12-11 PASS 31 minutes
- 2025-12-12 PASS 34 minutes
- 2025-12-13 PASS 30 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 29 minutes
- 2025-12-16 PASS 28 minutes
- 2025-12-17 PASS 33 minutes
- 2025-12-18 PASS 31 minutes
- 2025-12-19 PASS 33 minutes
- 2025-12-20 PASS 26 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 32 minutes
- 2025-12-23 PASS 27 minutes
- 2025-12-24 PASS 33 minutes
- 2025-12-25 PASS 47 minutes
- 2025-12-26 PASS 28 minutes
- 2025-12-27 PASS 26 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 27 minutes
- 2025-12-31 PASS 32 minutes
- 2026-01-01 PASS 26 minutes
- 2026-01-02 PASS 30 minutes
- 2026-01-03 PASS 24 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 31 minutes
- 2026-01-06 PASS 27 minutes
- 2026-01-07

### Error 2026-01-07T00:30:56+00:00
```
2026-01-07T00:30:56.1611078Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-01-07T00:31:16.9200724Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-01-07T00:32:01.8485748Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-01-07T00:32:01.8487266Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:32:01.848221223Z, ProjectID: 695da93eaf4f6cc389e85604, Cluster name: test-acc-tf-c-3135213204296639776
2026-01-07T00:34:33.9250662Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling
2026-01-07T00:34:33.9251242Z     resource_test.go:442: Step 1/5 error: Error running apply: exit status 1
2026-01-07T00:34:33.9251758Z         
2026-01-07T00:34:33.9252013Z         Error: Error in create
2026-01-07T00:34:33.9252417Z         
2026-01-07T00:34:33.9252955Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:34:33.9253559Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:34:33.9254125Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:34:33.9254425Z         
2026-01-07T00:34:33.9254855Z         cluster=test-acc-tf-c-3135213204296639776 didn't reach desired state: IDLE,
2026-01-07T00:34:33.9255233Z         error:
2026-01-07T00:34:33.9255891Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da93eaf4f6cc389e85604/clusters/test-acc-tf-c-3135213204296639776
2026-01-07T00:34:33.9256634Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:34:33.9257162Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:34:33.9257522Z         BadRequestDetail: 
2026-01-07T00:34:33.9708848Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAutoScaling (197.05s)
```

- 2026-01-08 PASS 28 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 31 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 25 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 26 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 26 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 25 minutes
