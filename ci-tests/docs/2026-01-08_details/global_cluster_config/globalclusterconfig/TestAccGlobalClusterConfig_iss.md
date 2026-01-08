# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_iss Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da929af4f6cc389e798c2/clusters/test-acc-tf-c-3368306782718220959 | dev | flaky_500 | 142.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-12-11 PASS 14 minutes
- 2025-12-12 PASS 16 minutes
- 2025-12-13 PASS 14 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 14 minutes
- 2025-12-16 PASS 15 minutes
- 2025-12-17 PASS 13 minutes
- 2025-12-18 PASS 15 minutes
- 2025-12-19 PASS 17 minutes
- 2025-12-20 PASS 16 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 16 minutes
- 2025-12-23 PASS 16 minutes
- 2025-12-24 PASS 16 minutes
- 2025-12-25 PASS 18 minutes
- 2025-12-26 PASS 16 minutes
- 2025-12-27 PASS 16 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 15 minutes
- 2025-12-31 PASS 15 minutes
- 2026-01-01 PASS 13 minutes
- 2026-01-02 PASS 14 minutes
- 2026-01-03 PASS 14 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 15 minutes
- 2026-01-06 PASS 15 minutes
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.0741554Z === RUN   TestAccGlobalClusterConfig_iss
2026-01-07T00:32:42.9310839Z === CONT  TestAccGlobalClusterConfig_iss
2026-01-07T00:33:02.9384161Z === NAME  TestAccGlobalClusterConfig_iss
2026-01-07T00:33:02.9385761Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:33:02.938082444Z, ProjectID: 695da929af4f6cc389e798c2, Cluster name: test-acc-tf-c-3368306782718220959
2026-01-07T00:33:24.0838068Z    test_terraform_path=/home/runner/work/_temp/19816eb3-2580-4099-ad34-a85b96aab8c7/terraform test_name=TestAccGlobalClusterConfig_withBackup test_working_directory=/tmp/plugintest2104481097
2026-01-07T00:35:05.0464133Z === NAME  TestAccGlobalClusterConfig_iss
2026-01-07T00:35:05.0465250Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-01-07T00:35:05.0465992Z         
2026-01-07T00:35:05.0466406Z         Error: Error in create
2026-01-07T00:35:05.0466808Z         
2026-01-07T00:35:05.0467419Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:35:05.0468624Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:35:05.0469759Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:35:05.0470326Z         
2026-01-07T00:35:05.0471102Z         cluster=test-acc-tf-c-3368306782718220959 didn't reach desired state: IDLE,
2026-01-07T00:35:05.0471779Z         error:
2026-01-07T00:35:05.0473030Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da929af4f6cc389e798c2/clusters/test-acc-tf-c-3368306782718220959
2026-01-07T00:35:05.0474428Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:35:05.0475887Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:35:05.0476549Z         BadRequestDetail: 
2026-01-07T00:35:05.1002976Z --- FAIL: TestAccGlobalClusterConfig_iss (142.17s)
```

- 2026-01-08 PASS 15 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 13 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 13 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 16 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 14 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 14 minutes
