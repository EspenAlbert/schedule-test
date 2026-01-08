# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:32](#error-2026-01-07t0032400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da926af4f6cc389e78439/clusters/test-acc-tf-c-7740350088052360308 | dev | flaky_500 | 97.00s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 18 minutes
  - PASS 15 minutes
- 2025-12-11 PASS 14 minutes
- 2025-12-12 PASS 17 minutes
- 2025-12-13 PASS 15 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 14 minutes
- 2025-12-16 PASS 15 minutes
- 2025-12-17 PASS 15 minutes
- 2025-12-18 PASS 18 minutes
- 2025-12-19 PASS 17 minutes
- 2025-12-20 PASS 15 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 18 minutes
- 2025-12-23 PASS 16 minutes
- 2025-12-24 PASS 15 minutes
- 2025-12-25 PASS 23 minutes
- 2025-12-26 PASS 14 minutes
- 2025-12-27 PASS 14 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 15 minutes
- 2025-12-31 PASS 17 minutes
- 2026-01-01 PASS 14 minutes
- 2026-01-02 PASS 17 minutes
- 2026-01-03 PASS 15 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 15 minutes
- 2026-01-06 PASS 15 minutes
- 2026-01-07

### Error 2026-01-07T00:32:40+00:00
```
2026-01-07T00:32:40.2633506Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2026-01-07T00:32:40.2636697Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-07T00:32:40.2639484Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-07T00:32:40.2641016Z     pre_check.go:46: Time before creating cluster: 2026-01-07T00:30:38.036060959Z, ProjectID: 695da926af4f6cc389e78439, Cluster name: test-acc-tf-c-7740350088052360308
2026-01-07T00:32:40.2662277Z    test_name=TestAccFederatedDatabaseInstance_basic test_step_number=1 test_terraform_path=/home/runner/work/_temp/5bb486bf-5e1f-43f4-b133-f792715bf264/terraform test_working_directory=/tmp/plugintest2847288430
2026-01-07T00:32:40.2838962Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2026-01-07T00:32:40.2840075Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2026-01-07T00:32:40.2840876Z         
2026-01-07T00:32:40.2841331Z         Error: Error in create
2026-01-07T00:32:40.2841748Z         
2026-01-07T00:32:40.2842555Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-01-07T00:32:40.2843814Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-01-07T00:32:40.2844977Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-01-07T00:32:40.2845568Z         
2026-01-07T00:32:40.2846371Z         cluster=test-acc-tf-c-7740350088052360308 didn't reach desired state: IDLE,
2026-01-07T00:32:40.2847067Z         error:
2026-01-07T00:32:40.2848330Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da926af4f6cc389e78439/clusters/test-acc-tf-c-7740350088052360308
2026-01-07T00:32:40.2849757Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:40.2850784Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:40.2851470Z         BadRequestDetail: 
2026-01-07T00:32:40.2852064Z         
2026-01-07T00:32:40.2852503Z         Error: Error in create
2026-01-07T00:32:40.2852926Z         
2026-01-07T00:32:40.2853533Z           with mongodbatlas_advanced_cluster.cluster2,
2026-01-07T00:32:40.2854724Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2026-01-07T00:32:40.2855820Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2026-01-07T00:32:40.2856382Z         
2026-01-07T00:32:40.2857174Z         cluster=test-acc-tf-c-8824081108449534461 didn't reach desired state: IDLE,
2026-01-07T00:32:40.2857868Z         error:
2026-01-07T00:32:40.2859129Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da926af4f6cc389e78439/clusters/test-acc-tf-c-8824081108449534461
2026-01-07T00:32:40.2860555Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:40.2861562Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:40.2862608Z         BadRequestDetail: 
2026-01-07T00:32:40.2863213Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (97.01s)
```

- 2026-01-08 PASS 15 minutes

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
- 2025-12-21 PASS 12 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 15 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 13 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 minutes
