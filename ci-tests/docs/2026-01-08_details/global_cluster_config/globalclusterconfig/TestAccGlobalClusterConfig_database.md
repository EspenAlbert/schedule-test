# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_database Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030350000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da929af4f6cc389e798c2/clusters/test-acc-tf-c-21027896711953830 | dev | flaky_500 | 127.09s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 23 minutes
  - PASS 23 minutes
- 2025-12-11 PASS 24 minutes
- 2025-12-12 PASS 27 minutes
- 2025-12-13 PASS 24 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 23 minutes
- 2025-12-16 PASS 22 minutes
- 2025-12-17 PASS 25 minutes
- 2025-12-18 PASS 24 minutes
- 2025-12-19 PASS 27 minutes
- 2025-12-20 PASS 23 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 24 minutes
- 2025-12-23 PASS 23 minutes
- 2025-12-24 PASS 28 minutes
- 2025-12-25 PASS 36 minutes
- 2025-12-26 PASS 23 minutes
- 2025-12-27 PASS 21 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 23 minutes
- 2025-12-31 PASS 24 minutes
- 2026-01-01 PASS 21 minutes
- 2026-01-02 PASS 25 minutes
- 2026-01-03 PASS 22 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 25 minutes
- 2026-01-06 PASS 22 minutes
- 2026-01-07

### Error 2026-01-07T00:30:35+00:00
```
2026-01-07T00:30:35.0746173Z === RUN   TestAccGlobalClusterConfig_database
2026-01-07T00:30:40.0797152Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:30:40.07909379Z, ProjectID: 695da929af4f6cc389e798c2, Cluster name: test-acc-tf-c-21027896711953830
2026-01-07T00:32:42.8827983Z    test_name=TestAccGlobalClusterConfig_database test_terraform_path=/home/runner/work/_temp/19816eb3-2580-4099-ad34-a85b96aab8c7/terraform test_working_directory=/tmp/plugintest2635265345
2026-01-07T00:32:42.8829507Z     resource_global_cluster_config_test.go:161: Step 1/5 error: Error running apply: exit status 1
2026-01-07T00:32:42.8830145Z         
2026-01-07T00:32:42.8830476Z         Error: Error in create
2026-01-07T00:32:42.8830912Z         
2026-01-07T00:32:42.8831538Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:32:42.8832660Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:32:42.8833825Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:32:42.8834398Z         
2026-01-07T00:32:42.8835359Z         cluster=test-acc-tf-c-21027896711953830 didn't reach desired state: IDLE,
2026-01-07T00:32:42.8836073Z         error:
2026-01-07T00:32:42.8837323Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da929af4f6cc389e798c2/clusters/test-acc-tf-c-21027896711953830
2026-01-07T00:32:42.8838753Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:42.8839798Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:42.8840913Z         BadRequestDetail: 
2026-01-07T00:32:42.9308850Z --- FAIL: TestAccGlobalClusterConfig_database (127.86s)
```

- 2026-01-08 PASS 24 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 27 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 22 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 22 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 23 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 minutes
