# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_atlasCluster Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 39) FAIL(x 4)
Success rate: 90.70%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-14 00:41](#error-2025-09-14t0041180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c34d444485797b1f1ef/dataFederation | qa | flaky_500 | 759.10s
[2025-09-15 06:33](#error-2025-09-15t0633000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03efe60767b7f9af64c/dataFederation | qa | flaky_500 | 730.07s
[2025-09-28 00:45](#error-2025-09-28t0045020000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68d88177e664a15fb5ae594d/clusters | qa | out_of_capacity | 914.10s
[2025-09-30 07:54](#error-2025-09-30t0754050000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68db89bbbb7b8c0d70347b34/clusters | qa | out_of_capacity | 735.06s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 32 minutes
- 2025-09-04 PASS 27 minutes
- 2025-09-05 PASS 20 minutes
- 2025-09-06 PASS 22 minutes
- 2025-09-07 PASS 19 minutes
- 2025-09-08
  - PASS 24 minutes
  - PASS 17 minutes
  - PASS 22 minutes
- 2025-09-09 PASS 18 minutes
- 2025-09-10 PASS 21 minutes
- 2025-09-11 PASS 19 minutes
- 2025-09-12 PASS 14 minutes
- 2025-09-13 PASS 20 minutes
- 2025-09-14

### Error 2025-09-14T00:41:18+00:00
```
2025-09-14T00:41:18.3210350Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-09-14T00:41:18.3213280Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-14T00:41:18.3217612Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-14T00:41:18.3219250Z     pre_check.go:32: Time before creating cluster: 2025-09-14T00:28:43.000640092Z, ProjectID: 68c60c34d444485797b1f1ef, Cluster name: test-acc-tf-c-5712692019856408098
2025-09-14T00:41:18.3236639Z    test_terraform_path=/home/runner/work/_temp/78f333c7-e49e-42dc-8d07-31e1046abc71/terraform test_working_directory=/tmp/plugintest701887769 test_step_number=1 test_name=TestAccFederatedDatabaseInstance_basic
2025-09-14T00:41:18.3359752Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-14T00:41:18.3360394Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:41:18.3361478Z         
2025-09-14T00:41:18.3363706Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c34d444485797b1f1ef/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-14T00:41:18.3364950Z         
2025-09-14T00:41:18.3365336Z           with mongodbatlas_federated_database_instance.test,
2025-09-14T00:41:18.3366089Z           on terraform_plugin_test.tf line 65, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-14T00:41:18.3366808Z           65: 	  resource "mongodbatlas_federated_database_instance" "test" {
2025-09-14T00:41:18.3367173Z         
2025-09-14T00:41:18.3367481Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (759.99s)
```

- 2025-09-15
  - PASS 13 minutes
  - FAIL 12 minutes

### Error 2025-09-15T06:33:00+00:00
```
2025-09-15T06:33:00.6001271Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-09-15T06:33:00.6003247Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-15T06:33:00.6006038Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-15T06:33:00.6007068Z     pre_check.go:32: Time before creating cluster: 2025-09-15T06:20:54.546140569Z, ProjectID: 68c7b03efe60767b7f9af64c, Cluster name: test-acc-tf-c-3296427628924320452
2025-09-15T06:33:00.6021655Z   
2025-09-15T06:33:00.6157926Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-15T06:33:00.6158729Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:33:00.6159173Z         
2025-09-15T06:33:00.6160848Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03efe60767b7f9af64c/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-15T06:33:00.6161999Z         
2025-09-15T06:33:00.6162369Z           with mongodbatlas_federated_database_instance.test,
2025-09-15T06:33:00.6163099Z           on terraform_plugin_test.tf line 65, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-15T06:33:00.6163780Z           65: 	  resource "mongodbatlas_federated_database_instance" "test" {
2025-09-15T06:33:00.6164114Z         
2025-09-15T06:33:00.6164412Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (730.67s)
```

- 2025-09-16 PASS 15 minutes
- 2025-09-17 PASS 17 minutes
- 2025-09-18 PASS 22 minutes
- 2025-09-19 PASS 14 minutes
- 2025-09-20 PASS 28 minutes
- 2025-09-21 PASS 18 minutes
- 2025-09-22 PASS 15 minutes
- 2025-09-23 PASS 16 minutes
- 2025-09-24 PASS 17 minutes
- 2025-09-25 PASS 15 minutes
- 2025-09-26 PASS 16 minutes
- 2025-09-27 PASS 17 minutes
- 2025-09-28

### Error 2025-09-28T00:45:02+00:00
```
2025-09-28T00:45:02.1014660Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-09-28T00:45:02.1018412Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-28T00:45:02.1041139Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-28T00:45:02.1042503Z     pre_check.go:32: Time before creating cluster: 2025-09-28T00:29:51.765657499Z, ProjectID: 68d88177e664a15fb5ae594d, Cluster name: test-acc-tf-c-3971850509605678102
2025-09-28T00:45:02.1070891Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-28T00:45:02.1071538Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2025-09-28T00:45:02.1071991Z         
2025-09-28T00:45:02.1072242Z         Error: Error in create
2025-09-28T00:45:02.1072489Z         
2025-09-28T00:45:02.1072844Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-09-28T00:45:02.1073532Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-09-28T00:45:02.1074181Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-09-28T00:45:02.1074529Z         
2025-09-28T00:45:02.1074941Z         cluster name: test-acc-tf-c-3971850509605678102, API error details:
2025-09-28T00:45:02.1075600Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68d88177e664a15fb5ae594d/clusters
2025-09-28T00:45:02.1076448Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-09-28T00:45:02.1077225Z         region is currently out of capacity for the requested instance size. Reason:
2025-09-28T00:45:02.1077726Z         Conflict. Params: [], BadRequestDetail: 
2025-09-28T00:45:02.1078125Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (914.96s)
```

- 2025-09-29 PASS 14 minutes
- 2025-09-30
  - PASS 15 minutes
  - FAIL 12 minutes

### Error 2025-09-30T07:54:05+00:00
```
2025-09-30T07:54:05.3664237Z === RUN   TestAccFederatedDatabaseInstance_atlasCluster
2025-09-30T07:54:05.3668514Z === CONT  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-30T07:54:05.3669768Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-30T07:54:05.3671084Z     pre_check.go:32: Time before creating cluster: 2025-09-30T07:41:54.375879388Z, ProjectID: 68db89bbbb7b8c0d70347b34, Cluster name: test-acc-tf-c-9201676691842177787
2025-09-30T07:54:05.3715546Z === NAME  TestAccFederatedDatabaseInstance_atlasCluster
2025-09-30T07:54:05.3716740Z     resource_federated_database_instance_test.go:169: Step 1/1 error: Error running apply: exit status 1
2025-09-30T07:54:05.3717479Z         
2025-09-30T07:54:05.3718183Z         Error: Error in create
2025-09-30T07:54:05.3718614Z         
2025-09-30T07:54:05.3719220Z           with mongodbatlas_advanced_cluster.cluster2,
2025-09-30T07:54:05.3720378Z           on terraform_plugin_test.tf line 39, in resource "mongodbatlas_advanced_cluster" "cluster2":
2025-09-30T07:54:05.3721395Z           39: resource "mongodbatlas_advanced_cluster" "cluster2" {
2025-09-30T07:54:05.3721959Z         
2025-09-30T07:54:05.3722678Z         cluster name: test-acc-tf-c-3958644362169273890, API error details:
2025-09-30T07:54:05.3723849Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68db89bbbb7b8c0d70347b34/clusters
2025-09-30T07:54:05.3724981Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-09-30T07:54:05.3726301Z         region is currently out of capacity for the requested instance size. Reason:
2025-09-30T07:54:05.3727086Z         Conflict. Params: [], BadRequestDetail: 
2025-09-30T07:54:05.3727691Z --- FAIL: TestAccFederatedDatabaseInstance_atlasCluster (735.58s)
```

  - PASS 12 minutes
  - PASS 12 minutes
- 2025-10-01
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 18 minutes
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-10-02 PASS 12 minutes