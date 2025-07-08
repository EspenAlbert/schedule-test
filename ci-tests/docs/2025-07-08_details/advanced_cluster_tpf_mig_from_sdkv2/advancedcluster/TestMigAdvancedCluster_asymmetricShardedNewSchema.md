# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_asymmetricShardedNewSchema Test Details
# Found 8 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 15 minutes
#### PASS 12 minutes
### 2025-07-03
#### PASS 14 minutes
### 2025-07-04
#### PASS 24 minutes
### 2025-07-05
#### PASS 13 minutes
### 2025-07-06
#### FAIL 34 seconds
```
2025-07-06T00:32:16.1518557Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-06T00:32:16.1519589Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-06T00:32:16.1562160Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-06T00:32:50.9362278Z === NAME  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-06T00:32:50.9363366Z     resource_advanced_cluster_migration_test.go:35: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:32:50.9364132Z         
2025-07-06T00:32:50.9364773Z         Error: error when getting project properties after create
2025-07-06T00:32:50.9365333Z         
2025-07-06T00:32:50.9365887Z           with mongodbatlas_project.cluster_project,
2025-07-06T00:32:50.9366982Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-07-06T00:32:50.9368070Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-07-06T00:32:50.9368593Z         
2025-07-06T00:32:50.9369321Z         error getting project (6869c4127267b5775b683636): error getting project's
2025-07-06T00:32:50.9370660Z         limits (6869c4127267b5775b683636):
2025-07-06T00:32:50.9371655Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4127267b5775b683636/limits
2025-07-06T00:32:50.9372798Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:32:50.9373783Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:32:50.9374459Z         BadRequestDetail: 
2025-07-06T00:32:51.1171531Z --- FAIL: TestMigAdvancedCluster_asymmetricShardedNewSchema (34.96s)
```
### 2025-07-07
#### PASS 14 minutes
### 2025-07-08
#### PASS 17 minutes