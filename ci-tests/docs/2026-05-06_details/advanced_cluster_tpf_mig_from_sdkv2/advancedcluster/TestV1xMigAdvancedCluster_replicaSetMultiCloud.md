# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 23 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 22) FAIL
Success rate: 95.65%

## DEV Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 22 minutes
  - PASS 19 minutes
- 2026-04-09: MISSING
- 2026-04-10 PASS 27 minutes
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 28 minutes
- 2026-04-14: MISSING
- 2026-04-15 PASS 25 minutes
- 2026-04-16: MISSING
- 2026-04-17 PASS 25 minutes
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20 PASS 19 minutes
- 2026-04-21: MISSING
- 2026-04-22 PASS an hour
- 2026-04-23: MISSING
- 2026-04-24 PASS 27 minutes
- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 25 minutes
- 2026-04-28: MISSING
- 2026-04-29 PASS 28 minutes
- 2026-04-30: MISSING
- 2026-05-01 PASS 24 minutes
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 28 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 30 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-08 08:40](#error-2026-04-08t0840300000) |  | qa | flaky_client | 1047.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 35 minutes
  - FAIL 17 minutes

### Error 2026-04-08T08:40:30+00:00
```
2026-04-08T08:40:30.5590944Z === RUN   TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-04-08T08:40:30.5593137Z === CONT  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-04-08T08:57:57.6445316Z === NAME  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-04-08T08:57:57.6445955Z     resource_migration_v1x_test.go:344: Step 1/3 error: Error running apply: exit status 1
2026-04-08T08:57:57.6446397Z         
2026-04-08T08:57:57.6447669Z         Error: error creating advanced cluster: Get "https://cloud-qa.mongodb.com/api/atlas/v2/groups/69d614940cd55fc24d13b1de/clusters/test-acc-tf-c-1895790615637789382": dial tcp: lookup cloud-qa.mongodb.com: i/o timeout
2026-04-08T08:57:57.6448579Z         
2026-04-08T08:57:57.6448922Z           with mongodbatlas_advanced_cluster.test,
2026-04-08T08:57:57.6449610Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2026-04-08T08:57:57.6450269Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-04-08T08:57:57.6450584Z         
2026-04-08T08:57:58.4693103Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-08T08:57:58.4693852Z         
2026-04-08T08:57:58.4694151Z         Error: error when destroying resource
2026-04-08T08:57:58.4694446Z         
2026-04-08T08:57:58.4694792Z         error deleting project (69d614940cd55fc24d13b1de):
2026-04-08T08:57:58.4695377Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69d614940cd55fc24d13b1de
2026-04-08T08:57:58.4695872Z         DELETE: HTTP 409 Conflict (Error code:
2026-04-08T08:57:58.4696423Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-04-08T08:57:58.4697070Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-04-08T08:57:58.4697530Z         Params: [], BadRequestDetail: 
2026-04-08T08:57:58.4744135Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetMultiCloud (1047.92s)
```

- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 25 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 22 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 24 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 26 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 25 minutes
- 2026-05-04 PASS 26 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 26 minutes
