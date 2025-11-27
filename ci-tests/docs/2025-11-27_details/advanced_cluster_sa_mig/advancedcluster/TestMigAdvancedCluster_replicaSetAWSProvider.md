# advanced_cluster_sa_mig/advancedcluster/TestMigAdvancedCluster_replicaSetAWSProvider Test Details
# Found 12 TestRuns in dev from 2025-10-30 to 2025-11-27 from master branch: 1 unique tests, PASS(x 8) FAIL(x 4)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-11-20 00:27](#error-2025-11-20t0027570000) |  | dev | flaky_client | 201.00s
[2025-11-22 00:26](#error-2025-11-22t0026530000) |  | dev |  | 3576.09s
[2025-11-25 00:27](#error-2025-11-25t0027100000) |  | dev |  | 3573.05s
[2025-11-27 00:28](#error-2025-11-27t0028240000) |  | dev | flaky_500 | 3597.01s

### Timeline
- 2025-10-28: MISSING
- 2025-10-29: MISSING
- 2025-10-30 PASS 17 minutes
- 2025-10-31: MISSING
- 2025-11-01: MISSING
- 2025-11-02: MISSING
- 2025-11-03: MISSING
- 2025-11-04 PASS 13 minutes
- 2025-11-05: MISSING
- 2025-11-06 PASS 23 minutes
- 2025-11-07: MISSING
- 2025-11-08 PASS 41 minutes
- 2025-11-09: MISSING
- 2025-11-10: MISSING
- 2025-11-11 PASS 15 minutes
- 2025-11-12: MISSING
- 2025-11-13 PASS 27 minutes
- 2025-11-14: MISSING
- 2025-11-15 PASS 16 minutes
- 2025-11-16: MISSING
- 2025-11-17: MISSING
- 2025-11-18 PASS 15 minutes
- 2025-11-19: MISSING
- 2025-11-20

### Error 2025-11-20T00:27:57+00:00
```
2025-11-20T00:27:57.1063502Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-20T00:27:59.9047550Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-20T00:28:04.9073551Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-20T00:28:04.9076148Z     pre_check.go:46: Time before creating cluster: 2025-11-20T00:28:04.906999116Z, ProjectID: 691e608df41e983fa169525f, Cluster name: test-acc-tf-c-8455405887957898660
2025-11-20T00:29:37.8341073Z   
2025-11-20T00:31:17.9548319Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-20T00:31:17.9548923Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-11-20T00:31:17.9549344Z         
2025-11-20T00:31:17.9549599Z         Error: Error in create
2025-11-20T00:31:17.9549846Z         
2025-11-20T00:31:17.9550178Z           with mongodbatlas_advanced_cluster.test,
2025-11-20T00:31:17.9550856Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-20T00:31:17.9551486Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-20T00:31:17.9551791Z         
2025-11-20T00:31:17.9552382Z         cluster=test-acc-tf-c-8455405887957898660 didn't reach desired state: IDLE,
2025-11-20T00:31:17.9552791Z         error: Get
2025-11-20T00:31:17.9553516Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/691e608df41e983fa169525f/clusters/test-acc-tf-c-8455405887957898660":
2025-11-20T00:31:17.9554504Z         dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-11-20T00:31:18.1123164Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (201.01s)
```

- 2025-11-21: MISSING
- 2025-11-22

### Error 2025-11-22T00:26:53+00:00
```
2025-11-22T00:26:53.7068179Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-22T00:26:55.8950821Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-22T00:27:00.8977290Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-22T00:27:00.8979131Z     pre_check.go:46: Time before creating cluster: 2025-11-22T00:27:00.897447837Z, ProjectID: 6921034da2a1e670f52920b3, Cluster name: test-acc-tf-c-1205751349388922482
2025-11-22T01:26:30.3978639Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-22T01:26:30.3979528Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-11-22T01:26:30.3980128Z         
2025-11-22T01:26:30.3980532Z         Error: Error in create
2025-11-22T01:26:30.3980901Z         
2025-11-22T01:26:30.3981586Z           with mongodbatlas_advanced_cluster.test,
2025-11-22T01:26:30.3982667Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-22T01:26:30.3983593Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-22T01:26:30.3984113Z         
2025-11-22T01:26:30.3984950Z         cluster=test-acc-tf-c-1205751349388922482 didn't reach desired state: IDLE,
2025-11-22T01:26:30.3985661Z         error:
2025-11-22T01:26:30.3986923Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6921034da2a1e670f52920b3/clusters/test-acc-tf-c-1205751349388922482
2025-11-22T01:26:30.3988216Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-11-22T01:26:30.3988914Z         BadRequestDetail: 
2025-11-22T01:26:30.4000926Z    test_terraform_path=/home/runner/work/_temp/6e45d198-87e0-4709-beff-5d238653326d/terraform test_working_directory=/tmp/plugintest1821283537
2025-11-22T01:26:30.5739234Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (3576.87s)
```

- 2025-11-23: MISSING
- 2025-11-24: MISSING
- 2025-11-25

### Error 2025-11-25T00:27:10+00:00
```
2025-11-25T00:27:10.3750866Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-25T00:27:12.9864520Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-25T00:27:17.9882975Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-25T00:27:17.9884797Z     pre_check.go:46: Time before creating cluster: 2025-11-25T00:27:17.988000333Z, ProjectID: 6924f7de2b3b85618cf88468, Cluster name: test-acc-tf-c-1297081604104685669
2025-11-25T01:26:43.6940816Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-25T01:26:43.6941572Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-11-25T01:26:43.6941977Z         
2025-11-25T01:26:43.6942648Z         Error: Error in create
2025-11-25T01:26:43.6942893Z         
2025-11-25T01:26:43.6943211Z           with mongodbatlas_advanced_cluster.test,
2025-11-25T01:26:43.6943859Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-25T01:26:43.6944452Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-25T01:26:43.6944759Z         
2025-11-25T01:26:43.6945200Z         cluster=test-acc-tf-c-1297081604104685669 didn't reach desired state: IDLE,
2025-11-25T01:26:43.6945591Z         error:
2025-11-25T01:26:43.6946302Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6924f7de2b3b85618cf88468/clusters/test-acc-tf-c-1297081604104685669
2025-11-25T01:26:43.6947071Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-11-25T01:26:43.6947486Z         BadRequestDetail: 
2025-11-25T01:26:43.8529003Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (3573.48s)
```

- 2025-11-26: MISSING
- 2025-11-27

### Error 2025-11-27T00:28:24+00:00
```
2025-11-27T00:28:24.8418753Z === RUN   TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-27T00:28:28.5426581Z === CONT  TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-27T00:28:33.5447476Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-27T00:28:33.5450005Z     pre_check.go:46: Time before creating cluster: 2025-11-27T00:28:33.544288303Z, ProjectID: 69279b293c4d827e6c42a341, Cluster name: test-acc-tf-c-2603649542587209392
2025-11-27T01:28:21.8121704Z === NAME  TestMigAdvancedCluster_replicaSetAWSProvider
2025-11-27T01:28:21.8122668Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-11-27T01:28:21.8123092Z         
2025-11-27T01:28:21.8123357Z         Error: Error in create
2025-11-27T01:28:21.8123608Z         
2025-11-27T01:28:21.8123943Z           with mongodbatlas_advanced_cluster.test,
2025-11-27T01:28:21.8124617Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_advanced_cluster" "test":
2025-11-27T01:28:21.8125235Z           14: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-11-27T01:28:21.8125550Z         
2025-11-27T01:28:21.8126014Z         cluster=test-acc-tf-c-2603649542587209392 didn't reach desired state: IDLE,
2025-11-27T01:28:21.8126420Z         error:
2025-11-27T01:28:21.8127168Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69279b293c4d827e6c42a341/clusters/test-acc-tf-c-2603649542587209392
2025-11-27T01:28:21.8128171Z         GET: HTTP 401 Unauthorized (Error code: "") Detail:  Reason: . Params: [],
2025-11-27T01:28:21.8128599Z         BadRequestDetail: 
2025-11-27T01:28:21.9540548Z   
2025-11-27T01:28:21.9763453Z --- FAIL: TestMigAdvancedCluster_replicaSetAWSProvider (3597.13s)
```

