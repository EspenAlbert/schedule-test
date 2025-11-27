# advanced_cluster_sa_mig/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 12 TestRuns in dev from 2025-10-30 to 2025-11-27 from master branch: 1 unique tests, PASS(x 7) FAIL(x 5)
Success rate: 58.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-30 00:28](#error-2025-10-30t0028160000) |  | dev |  | 3584.02s
[2025-11-20 00:27](#error-2025-11-20t0027590000) |  | dev | flaky_500 | 527.05s
[2025-11-22 00:26](#error-2025-11-22t0026550000) |  | dev |  | 3574.10s
[2025-11-25 00:27](#error-2025-11-25t0027120000) |  | dev |  | 3571.07s
[2025-11-27 00:28](#error-2025-11-27t0028280000) |  | dev |  | 3594.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30

### Error 2025-10-30T00:28:16+00:00
```
2025-10-30T00:28:16.9538936Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-10-30T00:28:16.9549380Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-10-30T01:28:01.1667647Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-10-30T01:28:01.1670190Z     resource_migration_test.go:16: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T01:28:01.1671006Z         
2025-10-30T01:28:01.1671410Z         Error: Error in delete
2025-10-30T01:28:01.1671823Z         
2025-10-30T01:28:01.1672537Z         cluster=test-acc-tf-c-1248927666683770545 didn't reach desired state:
2025-10-30T01:28:01.1673188Z         DELETED, error:
2025-10-30T01:28:01.1673929Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b123e2dc7470847be852/clusters/test-acc-tf-c-1248927666683770545
2025-10-30T01:28:01.1674737Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-10-30T01:28:01.1675158Z         BadRequestDetail: 
2025-10-30T01:28:01.1797897Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (3584.23s)
```

- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03: MISSING
- 2025-11-04 PASS 23 minutes
- 2025-11-05: MISSING
- 2025-11-06 PASS 26 minutes
- 2025-11-07: MISSING
- 2025-11-08 PASS 48 minutes
- 2025-11-09: MISSING
- 2025-11-10: MISSING
- 2025-11-11 PASS 20 minutes
- 2025-11-12: MISSING
- 2025-11-13 PASS 33 minutes
- 2025-11-14: MISSING
- 2025-11-15 PASS 22 minutes
- 2025-11-16: MISSING
- 2025-11-17: MISSING
- 2025-11-18 PASS 22 minutes
- 2025-11-19: MISSING
- 2025-11-20

### Error 2025-11-20T00:27:59+00:00
```
2025-11-20T00:27:59.9038162Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-20T00:27:59.9051037Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-20T00:36:46.6646147Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-20T00:36:46.6646743Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-11-20T00:36:46.6647188Z         
2025-11-20T00:36:46.6647444Z         Error: Error in create
2025-11-20T00:36:46.6647696Z         
2025-11-20T00:36:46.6648031Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T00:36:46.6648708Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T00:36:46.6649340Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T00:36:46.6649657Z         
2025-11-20T00:36:46.6650124Z         cluster=test-acc-tf-c-2492889354059983102 didn't reach desired state: IDLE,
2025-11-20T00:36:46.6650546Z         error: Get
2025-11-20T00:36:46.6651320Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/691e6091a0b6e4670df2b51d/clusters/test-acc-tf-c-2492889354059983102":
2025-11-20T00:36:46.6652089Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-11-20T00:36:47.4037909Z    test_terraform_path=/home/runner/work/_temp/a832a547-045b-4816-9875-86ae1d3696bc/terraform test_name=TestMigAdvancedCluster_replicaSetMultiCloud test_working_directory=/tmp/plugintest2931812313 test_step_number=1
2025-11-20T00:36:47.4040483Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-20T00:36:47.4041393Z         
2025-11-20T00:36:47.4041884Z         Error: error when destroying resource
2025-11-20T00:36:47.4042328Z         
2025-11-20T00:36:47.4042854Z         error deleting project (691e6091a0b6e4670df2b51d):
2025-11-20T00:36:47.4044102Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/691e6091a0b6e4670df2b51d
2025-11-20T00:36:47.4045007Z         DELETE: HTTP 409 Conflict (Error code:
2025-11-20T00:36:47.4045749Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_CLUSTERS") Detail: Cannot close group while
2025-11-20T00:36:47.4046378Z         it has active clusters; please terminate all clusters. Reason: Conflict.
2025-11-20T00:36:47.4046819Z         Params: [], BadRequestDetail: 
2025-11-20T00:36:47.4136275Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (527.51s)
```

- 2025-11-21: MISSING
- 2025-11-22

### Error 2025-11-22T00:26:55+00:00
```
2025-11-22T00:26:55.8945109Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-22T00:26:55.8956327Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-22T01:26:30.4003072Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-22T01:26:30.4004018Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-11-22T01:26:30.4004718Z         
2025-11-22T01:26:30.4005156Z         Error: Error in create
2025-11-22T01:26:30.4005575Z         
2025-11-22T01:26:30.4006146Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T01:26:30.4007487Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T01:26:30.4008556Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T01:26:30.4009117Z         
2025-11-22T01:26:30.4009933Z         cluster=test-acc-tf-c-3006123101475883211 didn't reach desired state: IDLE,
2025-11-22T01:26:30.4010653Z         error:
2025-11-22T01:26:30.4012064Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/692103514aaa8d393232883d/clusters/test-acc-tf-c-3006123101475883211
2025-11-22T01:26:30.4013492Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-11-22T01:26:30.4014165Z         BadRequestDetail: 
2025-11-22T01:26:30.8441734Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-22T01:26:30.8442791Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-22T01:26:30.8443514Z         
2025-11-22T01:26:30.8444010Z         Error: error when destroying resource
2025-11-22T01:26:30.8444471Z         
2025-11-22T01:26:30.8445030Z         error deleting project (692103514aaa8d393232883d):
2025-11-22T01:26:30.8446002Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/692103514aaa8d393232883d
2025-11-22T01:26:30.8447124Z         DELETE: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-11-22T01:26:30.8447840Z         BadRequestDetail: 
2025-11-22T01:26:30.8534855Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (3574.96s)
```

- 2025-11-23: MISSING
- 2025-11-24: MISSING
- 2025-11-25

### Error 2025-11-25T00:27:12+00:00
```
2025-11-25T00:27:12.9852381Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-25T00:27:12.9866619Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-25T01:26:44.2645013Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-25T01:26:44.2645996Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-11-25T01:26:44.2646616Z         
2025-11-25T01:26:44.2647012Z         Error: Error in create
2025-11-25T01:26:44.2647401Z         
2025-11-25T01:26:44.2647928Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T01:26:44.2649271Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T01:26:44.2650223Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T01:26:44.2650680Z         
2025-11-25T01:26:44.2651118Z         cluster=test-acc-tf-c-797903022601347351 didn't reach desired state: IDLE,
2025-11-25T01:26:44.2651515Z         error:
2025-11-25T01:26:44.2652215Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6924f7e2def656331da1322b/clusters/test-acc-tf-c-797903022601347351
2025-11-25T01:26:44.2653068Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-11-25T01:26:44.2653473Z         BadRequestDetail: 
2025-11-25T01:26:44.6358959Z    test_working_directory=/tmp/plugintest2916027590 test_name=TestMigAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/6dd441c4-af6e-4a7b-99b7-27b71a762b0f/terraform test_step_number=1
2025-11-25T01:26:44.6360210Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-25T01:26:44.6360665Z         
2025-11-25T01:26:44.6360966Z         Error: error when destroying resource
2025-11-25T01:26:44.6361254Z         
2025-11-25T01:26:44.6361592Z         error deleting project (6924f7e2def656331da1322b):
2025-11-25T01:26:44.6362193Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6924f7e2def656331da1322b
2025-11-25T01:26:44.6362910Z         DELETE: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-11-25T01:26:44.6363339Z         BadRequestDetail: 
2025-11-25T01:26:44.6457522Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (3571.66s)
```

- 2025-11-26: MISSING
- 2025-11-27

### Error 2025-11-27T00:28:28+00:00
```
2025-11-27T00:28:28.5414561Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-27T00:28:28.5427926Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-27T01:28:21.9540845Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-27T01:28:21.9541486Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-11-27T01:28:21.9541984Z         
2025-11-27T01:28:21.9542627Z         Error: Error in create
2025-11-27T01:28:21.9543028Z         
2025-11-27T01:28:21.9543376Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T01:28:21.9544523Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T01:28:21.9545296Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T01:28:21.9545627Z         
2025-11-27T01:28:21.9546209Z         cluster=test-acc-tf-c-4493023456886466268 didn't reach desired state: IDLE,
2025-11-27T01:28:21.9546620Z         error:
2025-11-27T01:28:21.9547482Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69279b2eb358b3221e8ce192/clusters/test-acc-tf-c-4493023456886466268
2025-11-27T01:28:21.9548484Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-11-27T01:28:21.9548920Z         BadRequestDetail: 
2025-11-27T01:28:22.5933974Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-11-27T01:28:22.5934728Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-11-27T01:28:22.5935242Z         
2025-11-27T01:28:22.5935985Z         Error: error when destroying resource
2025-11-27T01:28:22.5936371Z         
2025-11-27T01:28:22.5936796Z         error deleting project (69279b2eb358b3221e8ce192):
2025-11-27T01:28:22.5937538Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69279b2eb358b3221e8ce192
2025-11-27T01:28:22.5938359Z         DELETE: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-11-27T01:28:22.5938936Z         BadRequestDetail: 
2025-11-27T01:28:22.6034547Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (3594.06s)
```

