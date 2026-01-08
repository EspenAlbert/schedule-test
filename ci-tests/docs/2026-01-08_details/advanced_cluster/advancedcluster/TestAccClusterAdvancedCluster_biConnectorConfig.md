# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_biConnectorConfig Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da940af4f6cc389e85eca/clusters | dev | flaky_500 | 55.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 29 minutes
  - PASS 22 minutes
- 2025-12-11 PASS 25 minutes
- 2025-12-12 PASS 24 minutes
- 2025-12-13 PASS 25 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 22 minutes
- 2025-12-16 PASS 19 minutes
- 2025-12-17 PASS 27 minutes
- 2025-12-18 PASS 24 minutes
- 2025-12-19 PASS 24 minutes
- 2025-12-20 PASS 21 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 27 minutes
- 2025-12-23 PASS 22 minutes
- 2025-12-24 PASS 26 minutes
- 2025-12-25 PASS 39 minutes
- 2025-12-26 PASS 20 minutes
- 2025-12-27 PASS 18 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 22 minutes
- 2025-12-31 PASS 25 minutes
- 2026-01-01 PASS 16 minutes
- 2026-01-02 PASS 24 minutes
- 2026-01-03 PASS 20 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 24 minutes
- 2026-01-06 PASS 21 minutes
- 2026-01-07

### Error 2026-01-07T00:30:58+00:00
```
2026-01-07T00:30:58.1061159Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2026-01-07T00:31:16.9310035Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2026-01-07T00:32:11.8504089Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2026-01-07T00:32:11.8505254Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:32:11.850099495Z, ProjectID: 695da940af4f6cc389e85eca, Cluster name: test-acc-tf-c-8102355840155149581
2026-01-07T00:32:12.8052652Z    test_terraform_path=/home/runner/work/_temp/c3449c42-367b-4643-b3d9-335cf3ea8ac8/terraform test_working_directory=/tmp/plugintest4126709522
2026-01-07T00:32:12.8053654Z     resource_test.go:863: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:32:12.8054014Z         
2026-01-07T00:32:12.8054360Z         Error: Error in create
2026-01-07T00:32:12.8054599Z         
2026-01-07T00:32:12.8055079Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:32:12.8055662Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:32:12.8056208Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:32:12.8056507Z         
2026-01-07T00:32:12.8056884Z         cluster name: test-acc-tf-c-8102355840155149581, API error details:
2026-01-07T00:32:12.8057508Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da940af4f6cc389e85eca/clusters
2026-01-07T00:32:12.8058131Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:12.8058667Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:12.8059188Z         BadRequestDetail: 
2026-01-07T00:32:12.8515930Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (55.92s)
```

- 2026-01-08 PASS 21 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 25 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 16 minutes
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
- 2026-01-08 PASS 19 minutes
