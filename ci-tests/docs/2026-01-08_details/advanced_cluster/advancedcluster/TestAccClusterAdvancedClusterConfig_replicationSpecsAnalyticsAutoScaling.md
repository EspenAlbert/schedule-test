# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da93eaf4f6cc389e85604/clusters/test-acc-tf-c-6287264742855279490 | dev | flaky_500 | 81.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 43 minutes
  - PASS 40 minutes
- 2025-12-11 PASS 44 minutes
- 2025-12-12 PASS 47 minutes
- 2025-12-13 PASS 42 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 38 minutes
- 2025-12-16 PASS 39 minutes
- 2025-12-17 PASS 44 minutes
- 2025-12-18 PASS 42 minutes
- 2025-12-19 PASS 45 minutes
- 2025-12-20 PASS 42 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 46 minutes
- 2025-12-23 PASS 44 minutes
- 2025-12-24 PASS 45 minutes
- 2025-12-25 PASS an hour
- 2025-12-26 PASS 40 minutes
- 2025-12-27 PASS 41 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 43 minutes
- 2025-12-31 PASS 44 minutes
- 2026-01-01 PASS 38 minutes
- 2026-01-02 PASS 42 minutes
- 2026-01-03 PASS 40 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 43 minutes
- 2026-01-06 PASS 44 minutes
- 2026-01-07

### Error 2026-01-07T00:30:56+00:00
```
2026-01-07T00:30:56.1613085Z === RUN   TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-01-07T00:31:16.9306826Z === CONT  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-01-07T00:32:06.8493798Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-01-07T00:32:06.8494946Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:32:06.849077299Z, ProjectID: 695da93eaf4f6cc389e85604, Cluster name: test-acc-tf-c-6287264742855279490
2026-01-07T00:32:38.1222139Z === NAME  TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling
2026-01-07T00:32:38.1223387Z     resource_test.go:501: Step 1/5 error: Error running apply: exit status 1
2026-01-07T00:32:38.1223984Z         
2026-01-07T00:32:38.1224383Z         Error: Error in create
2026-01-07T00:32:38.1224797Z         
2026-01-07T00:32:38.1225327Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:32:38.1226415Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:32:38.1227376Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:32:38.1227905Z         
2026-01-07T00:32:38.1228666Z         cluster=test-acc-tf-c-6287264742855279490 didn't reach desired state: IDLE,
2026-01-07T00:32:38.1229333Z         error:
2026-01-07T00:32:38.1230582Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da93eaf4f6cc389e85604/clusters/test-acc-tf-c-6287264742855279490
2026-01-07T00:32:38.1231926Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:38.1233008Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:38.1233613Z         BadRequestDetail: 
2026-01-07T00:32:38.1745606Z --- FAIL: TestAccClusterAdvancedClusterConfig_replicationSpecsAnalyticsAutoScaling (81.24s)
```

- 2026-01-08 PASS 39 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 43 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 38 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 36 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 36 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 38 minutes
