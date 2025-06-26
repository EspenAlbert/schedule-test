# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 17 minutes
```
2025-06-20T00:28:57.4973140Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-20T00:28:57.4973995Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-06-20T00:28:59.9623648Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-20T00:46:09.6333855Z --- PASS: TestMigAdvancedCluster_replicaSetMultiCloud (1029.68s)
```
### 2025-06-21
#### PASS 17 minutes
```
2025-06-21T00:28:40.8810140Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-21T00:28:40.8810996Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-06-21T00:28:42.5897616Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-21T00:45:53.6601773Z --- PASS: TestMigAdvancedCluster_replicaSetMultiCloud (1031.08s)
```
### 2025-06-22
#### FAIL 19 minutes
```
2025-06-22T00:31:57.4098032Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-22T00:31:57.4099164Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-06-22T00:31:59.6551918Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-22T00:48:09.8005264Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-22T00:48:09.8006511Z     resource_advanced_cluster_migration_test.go:22: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-06-22T00:48:09.8007065Z         
2025-06-22T00:48:09.8007565Z         Error: error when getting project properties after create
2025-06-22T00:48:09.8007889Z         
2025-06-22T00:48:09.8008228Z           with mongodbatlas_project.cluster_project,
2025-06-22T00:48:09.8008878Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "cluster_project":
2025-06-22T00:48:09.8009728Z           12: resource "mongodbatlas_project" "cluster_project" {
2025-06-22T00:48:09.8010026Z         
2025-06-22T00:48:09.8010460Z         error getting project (68574f02af7a0954e84ae860): error getting project's
2025-06-22T00:48:09.8010896Z         limits (68574f02af7a0954e84ae860):
2025-06-22T00:48:09.8011461Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574f02af7a0954e84ae860/limits
2025-06-22T00:48:09.8012117Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:48:09.8012835Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:48:09.8013212Z         BadRequestDetail: 
2025-06-22T00:51:12.1414273Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (1152.49s)
```
### 2025-06-23
#### PASS 16 minutes
```
2025-06-23T00:31:16.2735082Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-23T00:31:16.2736676Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-06-23T00:31:18.2712741Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-23T00:47:52.4119862Z --- PASS: TestMigAdvancedCluster_replicaSetMultiCloud (994.15s)
```
### 2025-06-24
#### PASS 16 minutes
```
2025-06-24T00:29:09.0350866Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-24T00:29:09.0351992Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-06-24T00:29:11.2848324Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-24T00:45:42.4657166Z --- PASS: TestMigAdvancedCluster_replicaSetMultiCloud (991.18s)
```
### 2025-06-25
#### PASS 23 minutes
```
2025-06-25T00:29:35.3348601Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-25T00:29:35.3349903Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-06-25T00:29:38.1045597Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-25T00:53:36.9831149Z --- PASS: TestMigAdvancedCluster_replicaSetMultiCloud (1438.88s)
```
### 2025-06-26
#### PASS 18 minutes
```
2025-06-26T00:29:26.6886420Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-26T00:29:26.6887729Z     resource_advanced_cluster_migration_test.go:22: Running test SDKv2 to TPF
2025-06-26T00:29:28.6717626Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-06-26T00:48:08.2848987Z --- PASS: TestMigAdvancedCluster_replicaSetMultiCloud (1119.62s)
```