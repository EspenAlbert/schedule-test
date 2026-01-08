# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:30](#error-2026-01-07t0030580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da95bd59b8466ea72dd75/clusters | dev | flaky_500 | 11.05s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 49 minutes
  - PASS 45 minutes
- 2025-12-11 PASS 51 minutes
- 2025-12-12 PASS 48 minutes
- 2025-12-13 PASS 47 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 46 minutes
- 2025-12-16 PASS 46 minutes
- 2025-12-17 PASS 51 minutes
- 2025-12-18 PASS 49 minutes
- 2025-12-19 PASS 53 minutes
- 2025-12-20 PASS 49 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 52 minutes
- 2025-12-23 PASS 50 minutes
- 2025-12-24 PASS 51 minutes
- 2025-12-25 PASS an hour
- 2025-12-26 PASS 49 minutes
- 2025-12-27 PASS 50 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 47 minutes
- 2025-12-31 PASS 50 minutes
- 2026-01-01 PASS 45 minutes
- 2026-01-02 PASS 52 minutes
- 2026-01-03 PASS 46 minutes
- 2026-01-04: MISSING
- 2026-01-05 PASS 47 minutes
- 2026-01-06 PASS 50 minutes
- 2026-01-07

### Error 2026-01-07T00:30:58+00:00
```
2026-01-07T00:30:58.1049580Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-01-07T00:31:16.8612900Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-01-07T00:31:27.6763784Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-01-07T00:31:27.6764490Z     resource_test.go:694: Step 1/4 error: Error running apply: exit status 1
2026-01-07T00:31:27.6764866Z         
2026-01-07T00:31:27.6765128Z         Error: Error in create
2026-01-07T00:31:27.6765377Z         
2026-01-07T00:31:27.6765711Z           with mongodbatlas_advanced_cluster.test,
2026-01-07T00:31:27.6766372Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-07T00:31:27.6767021Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-07T00:31:27.6767424Z         
2026-01-07T00:31:27.6767896Z         cluster name: test-acc-tf-c-5383221682937032758, API error details:
2026-01-07T00:31:27.6768521Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95bd59b8466ea72dd75/clusters
2026-01-07T00:31:27.6769151Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:27.6769710Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:27.6770090Z         BadRequestDetail: 
2026-01-07T00:31:27.9824154Z    test_name=TestAccClusterAdvancedCluster_withLabels test_terraform_path=/home/runner/work/_temp/c3449c42-367b-4643-b3d9-335cf3ea8ac8/terraform test_working_directory=/tmp/plugintest1664424991 test_step_number=1
2026-01-07T00:31:28.3143363Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-01-07T00:31:28.3144139Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-07T00:31:28.3144546Z         
2026-01-07T00:31:28.3144841Z         Error: error when destroying resource
2026-01-07T00:31:28.3145115Z         
2026-01-07T00:31:28.3145795Z         error deleting project (695da95bd59b8466ea72dd75):
2026-01-07T00:31:28.3146340Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da95bd59b8466ea72dd75
2026-01-07T00:31:28.3146805Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-07T00:31:28.3147321Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-07T00:31:28.3148028Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-07T00:31:28.3148458Z         Params: [], BadRequestDetail: 
2026-01-07T00:31:28.3149013Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11.47s)
```

- 2026-01-08 PASS 47 minutes

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 50 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 48 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 46 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 45 minutes
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 47 minutes
