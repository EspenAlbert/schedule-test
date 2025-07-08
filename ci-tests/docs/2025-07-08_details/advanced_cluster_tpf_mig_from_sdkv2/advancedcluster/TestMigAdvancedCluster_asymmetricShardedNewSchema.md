# advanced_cluster_tpf_mig_from_sdkv2/advancedcluster/TestMigAdvancedCluster_asymmetricShardedNewSchema Test Details
# Found 9 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 8) FAIL
Success rate: 88.89%

## Timeline
### 2025-07-01
#### PASS 14 minutes
```
2025-07-01T08:33:46.8909302Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-01T08:33:46.8910169Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-01T08:33:46.8958688Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-01T08:48:35.3259671Z --- PASS: TestMigAdvancedCluster_asymmetricShardedNewSchema (888.43s)
```
### 2025-07-02
#### PASS 15 minutes
```
2025-07-02T00:29:06.7051253Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-02T00:29:06.7052189Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-02T00:29:06.7118267Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-02T00:44:27.2016260Z --- PASS: TestMigAdvancedCluster_asymmetricShardedNewSchema (920.50s)
```
#### PASS 12 minutes
```
2025-07-02T13:36:13.4381444Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-02T13:36:13.4382420Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-02T13:36:13.4447141Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-02T13:48:29.3483407Z --- PASS: TestMigAdvancedCluster_asymmetricShardedNewSchema (735.91s)
```
### 2025-07-03
#### PASS 14 minutes
```
2025-07-03T00:29:42.6729130Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-03T00:29:42.6736753Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-03T00:29:42.6784911Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-03T00:44:05.8195779Z --- PASS: TestMigAdvancedCluster_asymmetricShardedNewSchema (863.15s)
```
### 2025-07-04
#### PASS 24 minutes
```
2025-07-04T00:29:07.3485575Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-04T00:29:07.3487081Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-04T00:29:07.3528763Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-04T00:53:57.2525386Z --- PASS: TestMigAdvancedCluster_asymmetricShardedNewSchema (1489.90s)
```
### 2025-07-05
#### PASS 13 minutes
```
2025-07-05T00:28:14.5736492Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-05T00:28:14.5739280Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-05T00:28:14.5783442Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-05T00:42:02.7548137Z --- PASS: TestMigAdvancedCluster_asymmetricShardedNewSchema (828.18s)
```
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
```
2025-07-07T00:31:43.7269754Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-07T00:31:43.7270715Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-07T00:31:43.7321111Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-07T00:45:52.8763492Z --- PASS: TestMigAdvancedCluster_asymmetricShardedNewSchema (849.15s)
```
### 2025-07-08
#### PASS 17 minutes
```
2025-07-08T00:29:35.0302502Z === RUN   TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-08T00:29:35.0303470Z     resource_advanced_cluster_migration_test.go:35: Running test SDKv2 to TPF
2025-07-08T00:29:35.0355739Z === CONT  TestMigAdvancedCluster_asymmetricShardedNewSchema
2025-07-08T00:47:03.9138557Z --- PASS: TestMigAdvancedCluster_asymmetricShardedNewSchema (1048.88s)
```