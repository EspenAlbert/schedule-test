# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 20 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-28 06:09](#error-2026-08-28t0609170000) |  | dev | timeout | 10826.09s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS 25 minutes
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10 PASS 24 minutes
- 2026-08-11: MISSING
- 2026-08-12 PASS 22 minutes
- 2026-08-13: MISSING
- 2026-08-14 PASS 28 minutes
- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17 PASS 22 minutes
- 2026-08-18: MISSING
- 2026-08-19 PASS 22 minutes
- 2026-08-20: MISSING
- 2026-08-21 PASS 21 minutes
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24 PASS 24 minutes
- 2026-08-25: MISSING
- 2026-08-26 PASS 25 minutes
- 2026-08-27: MISSING
- 2026-08-28

### Error 2026-08-28T06:09:17+00:00
```
2026-08-28T06:09:17.6055114Z === RUN   TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-08-28T06:09:17.6058713Z === CONT  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-08-28T06:09:17.6078652Z === NAME  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2026-08-28T06:09:17.6079822Z     resource_migration_v1x_test.go:344: Step 1/3 error: Error running apply: exit status 1
2026-08-28T06:09:17.6080552Z         
2026-08-28T06:09:17.6081138Z         Error: Error in create
2026-08-28T06:09:17.6081553Z         
2026-08-28T06:09:17.6082120Z           with mongodbatlas_advanced_cluster.test,
2026-08-28T06:09:17.6083536Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2026-08-28T06:09:17.6084618Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-08-28T06:09:17.6085170Z         
2026-08-28T06:09:17.6085975Z         cluster=test-acc-tf-c-8788679392311257370 didn't reach desired state: IDLE,
2026-08-28T06:09:17.6087066Z         error: timeout while waiting for state to become 'IDLE' (last state:
2026-08-28T06:09:17.6087846Z         'REPAIRING', timeout: 3h0m0s)
2026-08-28T06:09:17.6097593Z    test_name=TestV1xMigAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/0734a331-3950-43e2-9fe7-1302697bf669/terraform test_working_directory=/tmp/plugintest4136227804
2026-08-28T06:09:17.6099545Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-08-28T06:09:17.6100305Z         
2026-08-28T06:09:17.6100822Z         Error: error when destroying resource
2026-08-28T06:09:17.6101457Z         
2026-08-28T06:09:17.6102054Z         error deleting project (6a90fbd634dc94e0a78d581c):
2026-08-28T06:09:17.6103088Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a90fbd634dc94e0a78d581c
2026-08-28T06:09:17.6103957Z         DELETE: HTTP 409 Conflict (Error code:
2026-08-28T06:09:17.6104912Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2026-08-28T06:09:17.6106017Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2026-08-28T06:09:17.6106811Z         Params: [], BadRequestDetail: 
2026-08-28T06:09:17.6107495Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetMultiCloud (10826.92s)
```

- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 2 hours
- 2026-09-01: MISSING
- 2026-09-02 PASS 29 minutes
- 2026-09-03: MISSING
- 2026-09-04 PASS 55 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 23 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 24 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 22 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 25 minutes
- 2026-08-24: MISSING
- 2026-08-25 PASS 22 minutes
- 2026-08-26: MISSING
- 2026-08-27 PASS 25 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 24 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
