# advanced_cluster_tpf_mig_from_tpf_preview/advancedcluster/TestV1xMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 38 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-26 00:27](#error-2025-09-26t0027080000) |  | dev | timeout | 10807.00s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 24 minutes
- 2025-09-24 PASS 25 minutes
- 2025-09-25 PASS 24 minutes
- 2025-09-26

### Error 2025-09-26T00:27:08+00:00
```
2025-09-26T00:27:08.6420242Z === RUN   TestV1xMigAdvancedCluster_replicaSetMultiCloud
2025-09-26T00:27:08.6434632Z === CONT  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2025-09-26T03:27:14.9526611Z === NAME  TestV1xMigAdvancedCluster_replicaSetMultiCloud
2025-09-26T03:27:14.9527910Z     resource_migration_v1x_test.go:358: Step 1/3 error: Error running apply: exit status 1
2025-09-26T03:27:14.9528326Z         
2025-09-26T03:27:14.9528579Z         Error: Error in create
2025-09-26T03:27:14.9528811Z         
2025-09-26T03:27:14.9529130Z           with mongodbatlas_advanced_cluster.test,
2025-09-26T03:27:14.9529767Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-26T03:27:14.9530372Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-26T03:27:14.9530676Z         
2025-09-26T03:27:14.9531120Z         cluster=test-acc-tf-c-2590034129224672326 didn't reach desired state: IDLE,
2025-09-26T03:27:14.9531723Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-09-26T03:27:14.9532137Z         'CREATING', timeout: 3h0m0s)
2025-09-26T03:27:15.6449993Z   
2025-09-26T03:27:15.6450755Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-26T03:27:15.6451424Z         
2025-09-26T03:27:15.6451923Z         Error: error when destroying resource
2025-09-26T03:27:15.6452373Z         
2025-09-26T03:27:15.6452929Z         error deleting project (68d5dde014f56c035e3706dd):
2025-09-26T03:27:15.6453615Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d5dde014f56c035e3706dd
2025-09-26T03:27:15.6454116Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-26T03:27:15.6454648Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-09-26T03:27:15.6455261Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-09-26T03:27:15.6455695Z         Params: [], BadRequestDetail: 
2025-09-26T03:27:15.6594464Z --- FAIL: TestV1xMigAdvancedCluster_replicaSetMultiCloud (10807.02s)
```

- 2025-09-27 PASS 24 minutes
- 2025-09-28 PASS 21 minutes
- 2025-09-29 PASS 48 minutes
- 2025-09-30
  - PASS 25 minutes
  - PASS 20 minutes
  - PASS 19 minutes
- 2025-10-01
  - PASS 20 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 17 minutes
  - PASS 21 minutes
  - PASS 36 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 26 minutes
- 2025-10-03 PASS 19 minutes
- 2025-10-04 PASS 26 minutes
- 2025-10-05 PASS 18 minutes
- 2025-10-06 PASS 19 minutes
- 2025-10-07 PASS 20 minutes
- 2025-10-08 PASS 26 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 27 minutes
- 2025-10-11 PASS 22 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 23 minutes
- 2025-10-14 PASS 28 minutes
- 2025-10-15 PASS 23 minutes
- 2025-10-16 PASS 28 minutes
- 2025-10-17 PASS 22 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 20 minutes
- 2025-10-20 PASS 31 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 34 minutes
  - PASS 21 minutes