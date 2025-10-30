# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_replicaSetMultiCloud Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 39) FAIL
Success rate: 97.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028180000) |  | dev | flaky_500 | 12606.08s

## Timeline
- 2025-09-30 PASS 31 minutes
- 2025-10-01
  - PASS 34 minutes
  - PASS 31 minutes
  - PASS an hour
  - PASS 46 minutes
  - PASS 51 minutes
  - PASS 36 minutes
  - PASS 34 minutes
  - PASS 31 minutes
- 2025-10-02 PASS 51 minutes
- 2025-10-03 PASS 40 minutes
- 2025-10-04 PASS 36 minutes
- 2025-10-05 PASS 34 minutes
- 2025-10-06 PASS 36 minutes
- 2025-10-07 PASS 45 minutes
- 2025-10-08 PASS 39 minutes
- 2025-10-09 PASS 3 hours
- 2025-10-10 PASS 42 minutes
- 2025-10-11 PASS 42 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 45 minutes
- 2025-10-14 PASS 33 minutes
- 2025-10-15 PASS 35 minutes
- 2025-10-16 PASS an hour
- 2025-10-17 PASS 43 minutes
- 2025-10-18 PASS 34 minutes
- 2025-10-19 PASS 40 minutes
- 2025-10-20
  - PASS 46 minutes
  - PASS 37 minutes
- 2025-10-21 PASS 34 minutes
- 2025-10-22
  - PASS 44 minutes
  - PASS 36 minutes
- 2025-10-23 PASS an hour
- 2025-10-24 PASS 48 minutes
- 2025-10-25 PASS an hour
- 2025-10-26 PASS 38 minutes
- 2025-10-27 PASS 2 hours
- 2025-10-28 PASS 35 minutes
- 2025-10-29 PASS 46 minutes
- 2025-10-30

### Error 2025-10-30T00:28:18+00:00
```
2025-10-30T00:28:18.3895357Z === RUN   TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-10-30T00:29:52.4851367Z === CONT  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-10-30T03:29:59.0645921Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-10-30T03:29:59.0646580Z     resource_test.go:164: Step 1/3 error: Error running apply: exit status 1
2025-10-30T03:29:59.0646998Z         
2025-10-30T03:29:59.0647278Z         Error: Error in create
2025-10-30T03:29:59.0647551Z         
2025-10-30T03:29:59.0647922Z           with mongodbatlas_advanced_cluster.test,
2025-10-30T03:29:59.0648649Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2025-10-30T03:29:59.0649324Z           17: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-10-30T03:29:59.0649670Z         
2025-10-30T03:29:59.0650192Z         cluster=test-acc-tf-c-6074820074370069813 didn't reach desired state: IDLE,
2025-10-30T03:29:59.0650809Z         error: context deadline exceeded
2025-10-30T03:35:47.4672363Z   
2025-10-30T03:59:59.3184750Z === NAME  TestAccClusterAdvancedCluster_replicaSetMultiCloud
2025-10-30T03:59:59.3185500Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T03:59:59.3186401Z         
2025-10-30T03:59:59.3186812Z         Error: error when destroying resource
2025-10-30T03:59:59.3187196Z         
2025-10-30T03:59:59.3187641Z         error deleting project (6902b183abf4374f329a556d):
2025-10-30T03:59:59.3188338Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b183abf4374f329a556d
2025-10-30T03:59:59.3188943Z         DELETE: HTTP 409 Conflict (Error code:
2025-10-30T03:59:59.3189581Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-10-30T03:59:59.3190335Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-10-30T03:59:59.3190871Z         Params: [], BadRequestDetail: 
2025-10-30T03:59:59.3191374Z --- FAIL: TestAccClusterAdvancedCluster_replicaSetMultiCloud (12606.83s)
```
