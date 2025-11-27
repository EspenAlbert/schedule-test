# advanced_cluster_sa_mig/advancedcluster/TestMigAdvancedCluster_singleShardedMultiCloud Test Details
# Found 12 TestRuns in dev from 2025-10-30 to 2025-11-27 from master branch: 1 unique tests, PASS(x 7) FAIL(x 5)
Success rate: 58.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028160000) |  | dev |  | 3586.00s
[2025-11-20 00:27](#error-2025-11-20t0027590000) |  | dev | flaky_client | 98.01s
[2025-11-22 00:26](#error-2025-11-22t0026550000) |  | dev |  | 3572.03s
[2025-11-25 00:27](#error-2025-11-25t0027120000) |  | dev |  | 3596.02s
[2025-11-27 00:28](#error-2025-11-27t0028280000) |  | dev | flaky_500 | 3589.07s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30

### Error 2025-10-30T00:28:16+00:00
```
2025-10-30T00:28:16.9540906Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-10-30T00:28:16.9548727Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-10-30T01:28:02.9428416Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-10-30T01:28:02.9429477Z     resource_migration_test.go:21: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T01:28:02.9430107Z         
2025-10-30T01:28:02.9430365Z         Error: Error in delete
2025-10-30T01:28:02.9430677Z         
2025-10-30T01:28:02.9431162Z         cluster=test-acc-tf-c-5480769086913990546 didn't reach desired state:
2025-10-30T01:28:02.9431673Z         DELETED, error:
2025-10-30T01:28:02.9432541Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b11eabf4374f32993d21/clusters/test-acc-tf-c-5480769086913990546
2025-10-30T01:28:02.9433488Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-10-30T01:28:02.9433988Z         BadRequestDetail: 
2025-10-30T01:28:02.9555516Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (3586.00s)
```

- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03: MISSING
- 2025-11-04 PASS 20 minutes
- 2025-11-05: MISSING
- 2025-11-06 PASS 26 minutes
- 2025-11-07: MISSING
- 2025-11-08 PASS 44 minutes
- 2025-11-09: MISSING
- 2025-11-10: MISSING
- 2025-11-11 PASS 20 minutes
- 2025-11-12: MISSING
- 2025-11-13 PASS 28 minutes
- 2025-11-14: MISSING
- 2025-11-15 PASS 20 minutes
- 2025-11-16: MISSING
- 2025-11-17: MISSING
- 2025-11-18 PASS 21 minutes
- 2025-11-19: MISSING
- 2025-11-20

### Error 2025-11-20T00:27:59+00:00
```
2025-11-20T00:27:59.9040420Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-11-20T00:27:59.9048662Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-11-20T00:29:37.8406647Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-11-20T00:29:37.8407605Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-11-20T00:29:37.8408314Z         
2025-11-20T00:29:37.8408777Z         Error: Error in create
2025-11-20T00:29:37.8409214Z         
2025-11-20T00:29:37.8409819Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T00:29:37.8410636Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T00:29:37.8411414Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T00:29:37.8411736Z         
2025-11-20T00:29:37.8412182Z         cluster=test-acc-tf-c-8117422623735838823 didn't reach desired state: IDLE,
2025-11-20T00:29:37.8412587Z         error: Get
2025-11-20T00:29:37.8413318Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/691e608df41e983fa169525f/clusters/test-acc-tf-c-8117422623735838823":
2025-11-20T00:29:37.8414315Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-11-20T00:29:38.0120677Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (98.11s)
```

- 2025-11-21: MISSING
- 2025-11-22

### Error 2025-11-22T00:26:55+00:00
```
2025-11-22T00:26:55.8946463Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-11-22T00:26:55.8955311Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-11-22T01:26:28.0608606Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-11-22T01:26:28.0609295Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-11-22T01:26:28.0609693Z         
2025-11-22T01:26:28.0610209Z         Error: Error in create
2025-11-22T01:26:28.0610450Z         
2025-11-22T01:26:28.0610770Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T01:26:28.0611574Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T01:26:28.0612213Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T01:26:28.0612516Z         
2025-11-22T01:26:28.0612949Z         cluster=test-acc-tf-c-6355557739067887871 didn't reach desired state: IDLE,
2025-11-22T01:26:28.0613342Z         error:
2025-11-22T01:26:28.0614048Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6921034da2a1e670f52920b3/clusters/test-acc-tf-c-6355557739067887871
2025-11-22T01:26:28.0614848Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-11-22T01:26:28.0615257Z         BadRequestDetail: 
2025-11-22T01:26:28.2170858Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (3572.32s)
```

- 2025-11-23: MISSING
- 2025-11-24: MISSING
- 2025-11-25

### Error 2025-11-25T00:27:12+00:00
```
2025-11-25T00:27:12.9855503Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-11-25T00:27:12.9865178Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-11-25T01:27:09.0726236Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-11-25T01:27:09.0726976Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-11-25T01:27:09.0727489Z         
2025-11-25T01:27:09.0727805Z         Error: Error in create
2025-11-25T01:27:09.0728110Z         
2025-11-25T01:27:09.0728904Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T01:27:09.0729848Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T01:27:09.0730614Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T01:27:09.0731017Z         
2025-11-25T01:27:09.0731523Z         cluster=test-acc-tf-c-5570059268519861579 didn't reach desired state: IDLE,
2025-11-25T01:27:09.0731910Z         error:
2025-11-25T01:27:09.0732616Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6924f7de2b3b85618cf88468/clusters/test-acc-tf-c-5570059268519861579
2025-11-25T01:27:09.0733391Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-11-25T01:27:09.0733802Z         BadRequestDetail: 
2025-11-25T01:27:09.2300287Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (3596.24s)
```

- 2025-11-26: MISSING
- 2025-11-27

### Error 2025-11-27T00:28:28+00:00
```
2025-11-27T00:28:28.5416506Z === RUN   TestMigAdvancedCluster_singleShardedMultiCloud
2025-11-27T00:28:28.5427283Z === CONT  TestMigAdvancedCluster_singleShardedMultiCloud
2025-11-27T01:28:18.0481028Z === NAME  TestMigAdvancedCluster_singleShardedMultiCloud
2025-11-27T01:28:18.0481963Z     resource_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-11-27T01:28:18.0482912Z         
2025-11-27T01:28:18.0483374Z         Error: Error in create
2025-11-27T01:28:18.0483826Z         
2025-11-27T01:28:18.0484184Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T01:28:18.0484879Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T01:28:18.0485500Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T01:28:18.0485829Z         
2025-11-27T01:28:18.0486296Z         cluster=test-acc-tf-c-6068289189816968132 didn't reach desired state: IDLE,
2025-11-27T01:28:18.0486705Z         error:
2025-11-27T01:28:18.0487446Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69279b293c4d827e6c42a341/clusters/test-acc-tf-c-6068289189816968132
2025-11-27T01:28:18.0488261Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-11-27T01:28:18.0488687Z         BadRequestDetail: 
2025-11-27T01:28:18.2025239Z --- FAIL: TestMigAdvancedCluster_singleShardedMultiCloud (3589.66s)
```

