# advanced_cluster/advancedcluster/TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2)
Success rate: 93.94%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:47](#error-2026-04-07t0047080000) |  | dev | timeout | 13625.09s
[2026-04-16 00:53](#error-2026-04-16t0053120000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e033631ec945fedc73f097/clusters | dev | out_of_capacity | 11.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:47:08+00:00
```
2026-04-07T00:47:08.2812689Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-04-07T00:48:53.7993999Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-04-07T04:35:59.6834930Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-04-07T04:35:59.6835807Z     resource_test.go:654: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T04:35:59.6836288Z         
2026-04-07T04:35:59.6836543Z         Error: Error in delete
2026-04-07T04:35:59.6836795Z         
2026-04-07T04:35:59.6837260Z         cluster=test-acc-tf-c-929554091907351815 didn't reach desired state: DELETED,
2026-04-07T04:35:59.6837905Z         error: timeout while waiting for state to become 'DELETED' (last state:
2026-04-07T04:35:59.6838352Z         'DELETING', timeout: 3h0m0s)
2026-04-07T04:35:59.6839205Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (13625.86s)
```

- 2026-04-08 PASS 53 minutes
- 2026-04-09 PASS an hour
- 2026-04-10 PASS an hour
- 2026-04-11 PASS 47 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS an hour
- 2026-04-14 PASS 47 minutes
- 2026-04-15 PASS 53 minutes
- 2026-04-16

### Error 2026-04-16T00:53:12+00:00
```
2026-04-16T00:53:12.8552135Z === RUN   TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-04-16T00:54:54.6236384Z === CONT  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-04-16T00:55:04.3281958Z === NAME  TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard
2026-04-16T00:55:04.3283355Z     resource_test.go:654: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:55:04.3284020Z         
2026-04-16T00:55:04.3284818Z         Error: Error in create
2026-04-16T00:55:04.3285253Z         
2026-04-16T00:55:04.3285871Z           with mongodbatlas_advanced_cluster.test,
2026-04-16T00:55:04.3287317Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-16T00:55:04.3288518Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-16T00:55:04.3289109Z         
2026-04-16T00:55:04.3289906Z         cluster name: test-acc-tf-c-2974873512822645975, API error details:
2026-04-16T00:55:04.3291188Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e033631ec945fedc73f097/clusters
2026-04-16T00:55:04.3292475Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:55:04.3293769Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:55:04.3295408Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:55:04.4087583Z    test_terraform_path=/home/runner/work/_temp/b00f7911-dfb1-455b-abe5-62efc714635b/terraform test_name=TestAccClusterAdvancedClusterConfig_asymmetricShardedNewSchema
2026-04-16T00:55:05.1643746Z --- FAIL: TestAccClusterAdvancedClusterConfig_symmetricShardedNewSchemaToAsymmetricAddingRemovingShard (11.16s)
```

- 2026-04-17 PASS 53 minutes
- 2026-04-18 PASS 54 minutes
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS an hour
- 2026-04-22 PASS an hour
- 2026-04-23 PASS an hour
- 2026-04-24 PASS 55 minutes
- 2026-04-25 PASS 51 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 54 minutes
- 2026-04-28 PASS 54 minutes
- 2026-04-29 PASS 52 minutes
- 2026-04-30 PASS an hour
- 2026-05-01 PASS 53 minutes
- 2026-05-02 PASS 49 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 51 minutes
- 2026-05-05 PASS an hour
- 2026-05-06 PASS an hour

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 52 minutes
  - PASS 50 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 52 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 51 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 56 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 51 minutes
- 2026-05-04 PASS 52 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 53 minutes
