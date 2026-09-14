# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 5 TestRuns in dev, qa from 2026-09-09 to 2026-09-14 from master branch: 1 unique tests, PASS(x 4) FAIL
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-11 03:42](#error-2026-09-11t0342490000) |  | dev | timeout | 10834.08s

### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09 PASS 34 minutes
- 2026-09-10: MISSING
- 2026-09-11
  - FAIL 3 hours

### Error 2026-09-11T03:42:49+00:00
```
2026-09-11T03:42:49.6960995Z === RUN   TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-09-11T03:42:49.6965276Z === CONT  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-09-11T03:42:49.6977323Z === NAME  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-09-11T03:42:49.6977989Z     resource_migration_v1x_test.go:344: Step 1/3 error: Error running apply: exit status 1
2026-09-11T03:42:49.6985227Z         
2026-09-11T03:42:49.6985756Z         Error: Error in create
2026-09-11T03:42:49.6986067Z         
2026-09-11T03:42:49.6986652Z           with mongodbatlas_advanced_cluster.test,
2026-09-11T03:42:49.6987381Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2026-09-11T03:42:49.6988048Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-09-11T03:42:49.6988411Z         
2026-09-11T03:42:49.6988910Z         cluster=test-acc-tf-c-4240597724624972567 didn't reach desired state: IDLE,
2026-09-11T03:42:49.6989573Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-09-11T03:42:49.6990050Z         'REPAIRING', timeout: 3h0m0s)
2026-09-11T03:42:49.6997111Z   
2026-09-11T03:42:49.6997743Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-11T03:42:49.6998239Z         
2026-09-11T03:42:49.6998727Z         Error: error when destroying resource
2026-09-11T03:42:49.6999050Z         
2026-09-11T03:42:49.6999433Z         error deleting project (6aa34e7fb5d7eda74f7def54):
2026-09-11T03:42:49.7000063Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa34e7fb5d7eda74f7def54
2026-09-11T03:42:49.7000589Z         DELETE: HTTP 409 Conflict (Error code:
2026-09-11T03:42:49.7001176Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-09-11T03:42:49.7001855Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-09-11T03:42:49.7002350Z         Params: [], BadRequestDetail: 
2026-09-11T03:42:49.7002764Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetMultiCloud (10834.81s)
```

  - PASS 36 minutes
- 2026-09-12: MISSING
- 2026-09-13: MISSING
- 2026-09-14 PASS 24 minutes

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 26 minutes
- 2026-09-14: MISSING
