# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da95ad59b8466ea72dd3d/clusters/test-acc-tf-c-5412787358875551807 | dev | flaky_500 | 42.04s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 25 minutes
  - PASS 25 minutes
- 2025-12-11: MISSING
- 2025-12-12 PASS 24 minutes
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 22 minutes
- 2025-12-16: MISSING
- 2025-12-17 PASS 26 minutes
- 2025-12-18: MISSING
- 2025-12-19 PASS 26 minutes
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 27 minutes
- 2025-12-23: MISSING
- 2025-12-24 PASS 26 minutes
- 2025-12-25: MISSING
- 2025-12-26 PASS 19 minutes
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 25 minutes
- 2026-01-01: MISSING
- 2026-01-02 PASS 24 minutes
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 26 minutes
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:30:48+00:00
```
2026-01-07T00:30:48.0736458Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:31:16.8421228Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:31:58.3484917Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2026-01-07T00:31:58.3485428Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:31:58.3485797Z         
2026-01-07T00:31:58.3486051Z         Error: Error in create
2026-01-07T00:31:58.3486289Z         
2026-01-07T00:31:58.3486596Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:58.3487186Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:58.3487728Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:58.3488299Z         
2026-01-07T00:31:58.3488723Z         cluster=test-acc-tf-c-5412787358875551807 didn't reach desired state: IDLE,
2026-01-07T00:31:58.3489103Z         error:
2026-01-07T00:31:58.3489756Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95ad59b8466ea72dd3d/clusters/test-acc-tf-c-5412787358875551807
2026-01-07T00:31:58.3490608Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:58.3491145Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:58.3491511Z         BadRequestDetail: 
2026-01-07T00:31:59.2037759Z    test_terraform_path=/home/runner/work/_temp/c3449c42-367b-4643-b3d9-335cf3ea8ac8/terraform test_working_directory=/tmp/plugintest2142173905 test_name=TestMigAdvancedCluster_replicaSetMultiCloud test_step_number=1
2026-01-07T00:31:59.2038968Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:31:59.2039369Z         
2026-01-07T00:31:59.2039712Z         Error: error when destroying resource
2026-01-07T00:31:59.2040046Z         
2026-01-07T00:31:59.2040390Z         error deleting project (695da95ad59b8466ea72dd3d):
2026-01-07T00:31:59.2040975Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95ad59b8466ea72dd3d
2026-01-07T00:31:59.2041568Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-07T00:31:59.2042143Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-07T00:31:59.2042882Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-07T00:31:59.2043326Z         Params: [], BadRequestDetail: 
2026-01-07T00:31:59.2099530Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (42.37s)
```

- 2026-01-08: MISSING

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
- 2025-12-21 PASS 21 minutes
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
- 2026-01-04 PASS 21 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 minutes
