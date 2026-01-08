# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_defaultWrite Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da93eaf4f6cc389e85604/clusters | dev | flaky_500 | 54.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 39 minutes
  - PASS 34 minutes
- 2025-12-11 PASS 39 minutes
- 2025-12-12 PASS 44 minutes
- 2025-12-13 PASS 36 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 32 minutes
- 2025-12-16 PASS 37 minutes
- 2025-12-17 PASS 37 minutes
- 2025-12-18 PASS 38 minutes
- 2025-12-19 PASS 37 minutes
- 2025-12-20 PASS 34 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 38 minutes
- 2025-12-23 PASS 36 minutes
- 2025-12-24 PASS 36 minutes
- 2025-12-25 PASS 52 minutes
- 2025-12-26 PASS 34 minutes
- 2025-12-27 PASS 33 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 32 minutes
- 2025-12-31 PASS 36 minutes
- 2026-01-01 PASS 30 minutes
- 2026-01-02 PASS 37 minutes
- 2026-01-03 PASS 32 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 37 minutes
- 2026-01-06 PASS 33 minutes
- 2026-01-07

### Error 2026-01-07T00:30:56+00:00
```
2026-01-07T00:30:56.1609727Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-01-07T00:31:23.4620826Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2026-01-07T00:31:23.5265341Z    test_working_directory=/tmp/plugintest543484324
2026-01-07T00:32:16.8509384Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-01-07T00:32:16.8510900Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:32:16.850660363Z, ProjectID: 695da93eaf4f6cc389e85604, Cluster name: test-acc-tf-c-3404852528240698404
2026-01-07T00:32:17.8190279Z    test_working_directory=/tmp/plugintest1331902524 test_terraform_path=/home/runner/work/_temp/c3449c42-367b-4643-b3d9-335cf3ea8ac8/terraform test_name=TestAccClusterAdvancedCluster_defaultWrite
2026-01-07T00:32:17.8191385Z     resource_test.go:411: Step 1/3 error: Error running apply: exit status 1
2026-01-07T00:32:17.8192028Z         
2026-01-07T00:32:17.8192354Z         Error: Error in create
2026-01-07T00:32:17.8192766Z         
2026-01-07T00:32:17.8193075Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:32:17.8193863Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:32:17.8194502Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:32:17.8194860Z         
2026-01-07T00:32:17.8195335Z         cluster name: test-acc-tf-c-3404852528240698404, API error details:
2026-01-07T00:32:17.8195948Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da93eaf4f6cc389e85604/clusters
2026-01-07T00:32:17.8196569Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:17.8197110Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:17.8197475Z         BadRequestDetail: 
2026-01-07T00:32:17.8644907Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (54.40s)
```

- 2026-01-08 PASS 32 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 35 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 29 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 28 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 29 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 29 minutes
