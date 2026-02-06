# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestV1xMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 18) FAIL(x 2)
Success rate: 90.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-12 00:33](#error-2026-01-12t0033240000) |  | dev | flaky_client | 975.00s
[2026-02-02 00:38](#error-2026-02-02t0038460000) |  | dev | timeout | 10811.10s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 26 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12

### Error 2026-01-12T00:33:24+00:00
```
2026-01-12T00:33:24.4207830Z === RUN   TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-01-12T00:33:24.4211541Z === CONT  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-01-12T00:49:38.3197271Z === NAME  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-01-12T00:49:38.3197932Z     resource_migration_v1x_test.go:344: Step 1/3 error: Error running apply: exit status 1
2026-01-12T00:49:38.3198396Z         
2026-01-12T00:49:38.3199736Z         Error: error creating advanced cluster: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/696441658fb1a814e65a47ab/clusters/test-acc-tf-c-3729001002242556945": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2026-01-12T00:49:38.3200724Z         
2026-01-12T00:49:38.3201067Z           with mongodbatlas_advanced_cluster.test,
2026-01-12T00:49:38.3201783Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-12T00:49:38.3202461Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-12T00:49:38.3202799Z         
2026-01-12T00:49:39.4178153Z    test_name=TestV1xMigAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/f3bc8593-ea39-4738-80f8-d38ff6ea24f6/terraform test_working_directory=/tmp/plugintest2224876527 test_step_number=1
2026-01-12T00:49:39.4179704Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-01-12T00:49:39.4180518Z         
2026-01-12T00:49:39.4181030Z         Error: error when destroying resource
2026-01-12T00:49:39.4181563Z         
2026-01-12T00:49:39.4182015Z         error deleting project (696441658fb1a814e65a47ab):
2026-01-12T00:49:39.4182615Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/696441658fb1a814e65a47ab
2026-01-12T00:49:39.4183128Z         DELETE: HTTP 409 Conflict (Error code:
2026-01-12T00:49:39.4183671Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-01-12T00:49:39.4184625Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-01-12T00:49:39.4185221Z         Params: [], BadRequestDetail: 
2026-01-12T00:49:39.4315493Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetMultiCloud (975.01s)
```

- 2026-01-13: MISSING
- 2026-01-14 PASS 23 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 33 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 24 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 29 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 29 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 22 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS an hour
- 2026-01-29: MISSING
- 2026-01-30 PASS 40 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:46+00:00
```
2026-02-02T00:38:46.6819369Z === RUN   TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-02-02T00:38:46.6824947Z === CONT  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-02-02T03:38:57.8092455Z === NAME  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-02-02T03:38:57.8093103Z     resource_migration_v1x_test.go:344: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:38:57.8093563Z         
2026-02-02T03:38:57.8094326Z         Error: error creating advanced cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2026-02-02T03:38:57.8095180Z         
2026-02-02T03:38:57.8095520Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:38:57.8096206Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:38:57.8097442Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:38:57.8097792Z         
2026-02-02T03:38:58.6284131Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-02T03:38:58.6284995Z         
2026-02-02T03:38:58.6285547Z         Error: error when destroying resource
2026-02-02T03:38:58.6285974Z         
2026-02-02T03:38:58.6286640Z         error deleting project (697ff21e71768356d7f8cc90):
2026-02-02T03:38:58.6287287Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff21e71768356d7f8cc90
2026-02-02T03:38:58.6287823Z         DELETE: HTTP 409 Conflict (Error code:
2026-02-02T03:38:58.6288393Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-02-02T03:38:58.6289052Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-02-02T03:38:58.6289540Z         Params: [], BadRequestDetail: 
2026-02-02T03:38:58.6423251Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetMultiCloud (10811.96s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 25 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 39 minutes

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
- 2026-01-22 PASS 24 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 27 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 29 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 23 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
