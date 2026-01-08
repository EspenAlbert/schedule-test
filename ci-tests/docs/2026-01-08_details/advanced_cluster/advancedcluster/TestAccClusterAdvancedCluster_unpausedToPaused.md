# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_unpausedToPaused Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da93ad59b8466ea729f4f/clusters | dev | flaky_500 | 26.01s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-12-11 PASS 24 minutes
- 2025-12-12 PASS 25 minutes
- 2025-12-13 PASS 23 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 22 minutes
- 2025-12-16 PASS 20 minutes
- 2025-12-17 PASS 25 minutes
- 2025-12-18 PASS 24 minutes
- 2025-12-19 PASS 27 minutes
- 2025-12-20 PASS 22 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 27 minutes
- 2025-12-23 PASS 21 minutes
- 2025-12-24 PASS 28 minutes
- 2025-12-25 PASS 37 minutes
- 2025-12-26 PASS 21 minutes
- 2025-12-27 PASS 21 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 20 minutes
- 2025-12-31 PASS 25 minutes
- 2026-01-01 PASS 20 minutes
- 2026-01-02 PASS 26 minutes
- 2026-01-03 PASS 22 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 26 minutes
- 2026-01-06 PASS 20 minutes
- 2026-01-07

### Error 2026-01-07T00:30:54+00:00
```
2026-01-07T00:30:54.0497449Z === RUN   TestAccClusterAdvancedCluster_unpausedToPaused
2026-01-07T00:31:16.8349657Z === CONT  TestAccClusterAdvancedCluster_unpausedToPaused
2026-01-07T00:31:41.8437264Z === NAME  TestAccClusterAdvancedCluster_unpausedToPaused
2026-01-07T00:31:41.8438656Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:31:41.843381263Z, ProjectID: 695da93ad59b8466ea729f4f, Cluster name: test-acc-tf-c-72090740802266604
2026-01-07T00:31:42.8606771Z    test_working_directory=/tmp/plugintest2324075239 test_name=TestAccClusterAdvancedCluster_unpausedToPaused test_terraform_path=/home/runner/work/_temp/c3449c42-367b-4643-b3d9-335cf3ea8ac8/terraform
2026-01-07T00:31:42.8607912Z     resource_test.go:235: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:31:42.8608334Z         
2026-01-07T00:31:42.8608676Z         Error: Error in create
2026-01-07T00:31:42.8609027Z         
2026-01-07T00:31:42.8609478Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:42.8610089Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:42.8610724Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:42.8611088Z         
2026-01-07T00:31:42.8611476Z         cluster name: test-acc-tf-c-72090740802266604, API error details:
2026-01-07T00:31:42.8612181Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da93ad59b8466ea729f4f/clusters
2026-01-07T00:31:42.8613114Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:42.8613811Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:42.8614240Z         BadRequestDetail: 
2026-01-07T00:31:42.9133038Z --- FAIL: TestAccClusterAdvancedCluster_unpausedToPaused (26.08s)
```

- 2026-01-08 PASS 21 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 26 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 18 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 18 minutes
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
- 2026-01-08 PASS 20 minutes
