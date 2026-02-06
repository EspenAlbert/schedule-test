# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 03:40](#error-2026-02-02t0340220000) |  | dev | timeout | 10827.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 29 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 26 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 24 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 35 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 22 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 29 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 23 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 21 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 26 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 39 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:40:22+00:00
```
2026-02-02T03:40:22.1346973Z === RUN   TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-02-02T03:40:22.1352494Z === CONT  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-02-02T03:40:22.1407032Z === NAME  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-02-02T03:40:22.1407636Z     resource_migration_v1x_test.go:344: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:40:22.1408053Z         
2026-02-02T03:40:22.1408308Z         Error: Error in create
2026-02-02T03:40:22.1408548Z         
2026-02-02T03:40:22.1408896Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:22.1409931Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:22.1411040Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:22.1411566Z         
2026-02-02T03:40:22.1412406Z         cluster=test-acc-tf-c-3909325774376975279 didn't reach desired state: IDLE,
2026-02-02T03:40:22.1413545Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-02-02T03:40:22.1414011Z         'CREATING', timeout: 3h0m0s)
2026-02-02T03:40:22.1421687Z    test_working_directory=/tmp/plugintest490128915 test_step_number=1
2026-02-02T03:40:22.1422371Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-02T03:40:22.1422824Z         
2026-02-02T03:40:22.1423134Z         Error: error when destroying resource
2026-02-02T03:40:22.1423413Z         
2026-02-02T03:40:22.1423804Z         error deleting project (697ff22e197cc66080b12d42):
2026-02-02T03:40:22.1424491Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff22e197cc66080b12d42
2026-02-02T03:40:22.1425223Z         DELETE: HTTP 409 Conflict (Error code:
2026-02-02T03:40:22.1425818Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-02-02T03:40:22.1426550Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-02-02T03:40:22.1427041Z         Params: [], BadRequestDetail: 
2026-02-02T03:40:22.1427437Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetMultiCloud (10827.03s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 26 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 33 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 21 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 27 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 22 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 25 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 26 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 26 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 23 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
