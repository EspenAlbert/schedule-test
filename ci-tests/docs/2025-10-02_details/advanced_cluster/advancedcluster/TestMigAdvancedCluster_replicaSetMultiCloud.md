# advanced_cluster/advancedcluster/TestMigAdvancedCluster_replicaSetMultiCloud Test Details
# Found 34 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:29](#error-2025-09-07t0029160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd227df5af52d2d4d89c2/limits | qa | flaky_500 | 38.08s
[2025-09-21 00:29](#error-2025-09-21t0029310000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf474dbd1cb41a3e7072ff/limits | qa | flaky_500 | 37.05s
[2025-09-26 00:27](#error-2025-09-26t0027090000) |  | dev |  | 10839.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 40 minutes
- 2025-09-04 PASS 32 minutes
- 2025-09-05: MISSING
- 2025-09-06 PASS 32 minutes
- 2025-09-07

### Error 2025-09-07T00:29:16+00:00
```
2025-09-07T00:29:16.5608762Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-07T00:30:25.1310999Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-07T00:31:03.7041851Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-07T00:31:03.7042487Z     resource_advanced_cluster_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:31:03.7042948Z         
2025-09-07T00:31:03.7043336Z         Error: error when getting project properties after create
2025-09-07T00:31:03.7043807Z         
2025-09-07T00:31:03.7044148Z           with mongodbatlas_project.cluster_project,
2025-09-07T00:31:03.7044796Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-09-07T00:31:03.7045406Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-07T00:31:03.7045720Z         
2025-09-07T00:31:03.7046164Z         error getting project (68bcd227df5af52d2d4d89c2): error getting project's
2025-09-07T00:31:03.7046627Z         limits (68bcd227df5af52d2d4d89c2):
2025-09-07T00:31:03.7047435Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd227df5af52d2d4d89c2/limits
2025-09-07T00:31:03.7048116Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:31:03.7048693Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:31:03.7049086Z         BadRequestDetail: 
2025-09-07T00:31:03.8888310Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (38.78s)
```

- 2025-09-08
  - PASS 35 minutes
  - PASS 28 minutes
  - PASS 28 minutes
- 2025-09-09 PASS 30 minutes
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19 PASS 23 minutes
- 2025-09-20 PASS 24 minutes
- 2025-09-21

### Error 2025-09-21T00:29:31+00:00
```
2025-09-21T00:29:31.9559661Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-21T00:31:04.3719483Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-21T00:31:41.6776709Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-21T00:31:41.6777261Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-09-21T00:31:41.6777982Z         
2025-09-21T00:31:41.6778485Z         Error: error when getting project properties after create
2025-09-21T00:31:41.6778876Z         
2025-09-21T00:31:41.6779229Z           with mongodbatlas_project.cluster_project,
2025-09-21T00:31:41.6779972Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "cluster_project":
2025-09-21T00:31:41.6780689Z           14: 		resource "mongodbatlas_project" "cluster_project" {
2025-09-21T00:31:41.6781102Z         
2025-09-21T00:31:41.6781549Z         error getting project (68cf474dbd1cb41a3e7072ff): error getting project's
2025-09-21T00:31:41.6782112Z         limits (68cf474dbd1cb41a3e7072ff):
2025-09-21T00:31:41.6782777Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf474dbd1cb41a3e7072ff/limits
2025-09-21T00:31:41.6783727Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:31:41.6784698Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:31:41.6785452Z         BadRequestDetail: 
2025-09-21T00:31:41.8945121Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (37.52s)
```

- 2025-09-22 PASS 21 minutes
- 2025-09-23 PASS 23 minutes
- 2025-09-24 PASS 23 minutes
- 2025-09-25 PASS 24 minutes
- 2025-09-26

### Error 2025-09-26T00:27:09+00:00
```
2025-09-26T00:27:09.6376874Z === RUN   TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-26T00:28:51.0183243Z === CONT  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-26T03:28:58.7209373Z === NAME  TestMigAdvancedCluster_replicaSetMultiCloud
2025-09-26T03:28:58.7209940Z     resource_migration_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-09-26T03:28:58.7210329Z         
2025-09-26T03:28:58.7210578Z         Error: Error in create
2025-09-26T03:28:58.7210815Z         
2025-09-26T03:28:58.7211133Z           with mongodbatlas_advanced_cluster.test,
2025-09-26T03:28:58.7211776Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-26T03:28:58.7212371Z           19: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-09-26T03:28:58.7212678Z         
2025-09-26T03:28:58.7213112Z         cluster=test-acc-tf-c-560725183405676862 didn't reach desired state: IDLE,
2025-09-26T03:28:58.7213562Z         error: context deadline exceeded
2025-09-26T03:28:59.2634063Z    test_name=TestAccClusterAdvancedCluster_replicaSetMultiCloud test_terraform_path=/home/runner/work/_temp/5e9fd989-fbdf-4391-bea5-8b2a71aedad0/terraform test_working_directory=/tmp/plugintest3871870288
2025-09-26T03:29:30.1342532Z --- FAIL: TestMigAdvancedCluster_replicaSetMultiCloud (10839.12s)
```

- 2025-09-27 PASS 23 minutes
- 2025-09-28 PASS 24 minutes
- 2025-09-29
  - PASS 36 minutes
  - PASS 17 minutes
- 2025-09-30
  - PASS 23 minutes
  - PASS 16 minutes
  - PASS 21 minutes
  - PASS 19 minutes
  - PASS 15 minutes
- 2025-10-01
  - PASS 20 minutes
  - PASS 18 minutes
  - PASS 33 minutes
  - PASS 17 minutes
  - PASS 24 minutes
  - PASS 23 minutes
  - PASS 34 minutes
  - PASS 17 minutes
- 2025-10-02 PASS 30 minutes