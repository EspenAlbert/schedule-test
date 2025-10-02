# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 23 TestRuns in dev, qa from 2025-09-19 to 2025-10-02 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-26 00:27](#error-2025-09-26t0027180000) |  | dev | timeout | 10808.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05: MISSING
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 24 minutes
- 2025-09-20 PASS 26 minutes
- 2025-09-21 PASS 22 minutes
- 2025-09-22 PASS 22 minutes
- 2025-09-23 PASS 23 minutes
- 2025-09-24 PASS 24 minutes
- 2025-09-25 PASS 25 minutes
- 2025-09-26

### Error 2025-09-26T00:27:18+00:00
```
2025-09-26T00:27:18.1479709Z === RUN   TestV1xMigAdvancedCluster_replicaSetMultiCloud
2025-09-26T00:27:18.1504813Z === CONT  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2025-09-26T03:27:26.0474418Z === NAME  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2025-09-26T03:27:26.0475029Z     resource_migration_v1x_test.go:358: Step 1/3 error: Error running apply: exit status 1
2025-09-26T03:27:26.0475434Z         
2025-09-26T03:27:26.0476152Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-26T03:27:26.0476682Z         
2025-09-26T03:27:26.0476998Z           with mongodbatlas_advanced_cluster.test,
2025-09-26T03:27:26.0477650Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-26T03:27:26.0478259Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-26T03:27:26.0478569Z         
2025-09-26T03:27:26.9606532Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-26T03:27:26.9607337Z         
2025-09-26T03:27:26.9607861Z         Error: error when destroying resource
2025-09-26T03:27:26.9608259Z         
2025-09-26T03:27:26.9608606Z         error deleting project (68d5dde9f8df4c6a73fc79e4):
2025-09-26T03:27:26.9609198Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d5dde9f8df4c6a73fc79e4
2025-09-26T03:27:26.9609680Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-26T03:27:26.9610219Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-09-26T03:27:26.9611374Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-09-26T03:27:26.9611847Z         Params: [], BadRequestDetail: 
2025-09-26T03:27:26.9741591Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetMultiCloud (10808.83s)
```

- 2025-09-27 PASS 24 minutes
- 2025-09-28 PASS 19 minutes
- 2025-09-29 PASS 26 minutes
- 2025-09-30
  - PASS 19 minutes
  - PASS 21 minutes
  - PASS 21 minutes
- 2025-10-01
  - PASS 22 minutes
  - PASS 26 minutes
  - PASS 17 minutes
  - PASS 18 minutes
  - PASS 41 minutes
  - PASS 17 minutes
  - PASS 20 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 27 minutes