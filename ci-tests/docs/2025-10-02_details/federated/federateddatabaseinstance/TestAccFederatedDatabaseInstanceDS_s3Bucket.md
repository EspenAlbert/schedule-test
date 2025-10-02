# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:47](#error-2025-09-07t0047560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1d38704811492b538b5/dataFederation | qa | flaky_500 | 66.04s
[2025-09-14 00:41](#error-2025-09-14t0041180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c45d444485797b21ba7/limits | qa | flaky_500 | 49.02s
[2025-09-15 06:33](#error-2025-09-15t0633000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b04fd444485797b5e8da/limits | qa | flaky_500 | 48.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 57 seconds
- 2025-09-04 PASS 56 seconds
- 2025-09-05 PASS 52 seconds
- 2025-09-06 PASS 54 seconds
- 2025-09-07

### Error 2025-09-07T00:47:56+00:00
```
2025-09-07T00:47:56.6560335Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-07T00:47:56.6571694Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-07T00:47:56.6639946Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-07T00:47:56.6640565Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-09-07T00:47:56.6641006Z         
2025-09-07T00:47:56.6642618Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d38704811492b538b5/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-07T00:47:56.6643885Z         
2025-09-07T00:47:56.6644247Z           with mongodbatlas_federated_database_instance.test,
2025-09-07T00:47:56.6644942Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-07T00:47:56.6645594Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-09-07T00:47:56.6645937Z         
2025-09-07T00:47:56.6661992Z    test_name=TestAccFederatedDatabaseInstanceDSPlural_basic test_terraform_path=/home/runner/work/_temp/6c10dbbb-c6ae-4454-815f-dcde75bf0cf3/terraform test_working_directory=/tmp/plugintest826135023 test_step_number=1
2025-09-07T00:47:56.6705629Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-07T00:47:56.6706337Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-07T00:47:56.6706767Z         
2025-09-07T00:47:56.6709102Z         Error: error deleting cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d38704811492b538b5/cloudProviderAccess/AWS/68bcd1d6df5af52d2d4d5881 DELETE: HTTP 400 Bad Request (Error code: "AWS_IAM_ROLE_IN_USE") Detail: Cannot remove the AWS IAM role because it is still in use. Reason: Bad Request. Params: [Cannot remove the AWS IAM role (68bcd1d6df5af52d2d4d5881) because it is still in use.], BadRequestDetail: 
2025-09-07T00:47:56.6710603Z         
2025-09-07T00:47:56.6710886Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (66.37s)
```

- 2025-09-08
  - PASS 53 seconds
  - PASS a minute
  - PASS a minute
- 2025-09-09 PASS 57 seconds
- 2025-09-10 PASS 53 seconds
- 2025-09-11 PASS 53 seconds
- 2025-09-12 PASS 52 seconds
- 2025-09-13 PASS a minute
- 2025-09-14

### Error 2025-09-14T00:41:18+00:00
```
2025-09-14T00:41:18.3198718Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-14T00:41:18.3211857Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-14T00:41:18.3295258Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-14T00:41:18.3296241Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-09-14T00:41:18.3297155Z         
2025-09-14T00:41:18.3297887Z         Error: error when getting project properties after create
2025-09-14T00:41:18.3298507Z         
2025-09-14T00:41:18.3298917Z           with mongodbatlas_project.test,
2025-09-14T00:41:18.3299546Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-09-14T00:41:18.3300112Z           68: resource "mongodbatlas_project" "test" {
2025-09-14T00:41:18.3300419Z         
2025-09-14T00:41:18.3300877Z         error getting project (68c60c45d444485797b21ba7): error getting project's
2025-09-14T00:41:18.3301349Z         limits (68c60c45d444485797b21ba7):
2025-09-14T00:41:18.3301936Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c45d444485797b21ba7/limits
2025-09-14T00:41:18.3302624Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:18.3303999Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:18.3304760Z         BadRequestDetail: 
2025-09-14T00:41:18.3318273Z   
2025-09-14T00:41:18.3346263Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (49.23s)
```

- 2025-09-15
  - PASS 56 seconds
  - FAIL 48 seconds

### Error 2025-09-15T06:33:00+00:00
```
2025-09-15T06:33:00.5991238Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-15T06:33:00.6002592Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-15T06:33:00.6138043Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-15T06:33:00.6138665Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-09-15T06:33:00.6139116Z         
2025-09-15T06:33:00.6139488Z         Error: error when getting project properties after create
2025-09-15T06:33:00.6139811Z         
2025-09-15T06:33:00.6140099Z           with mongodbatlas_project.test,
2025-09-15T06:33:00.6140690Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-09-15T06:33:00.6141217Z           68: resource "mongodbatlas_project" "test" {
2025-09-15T06:33:00.6141503Z         
2025-09-15T06:33:00.6141936Z         error getting project (68c7b04fd444485797b5e8da): error getting project's
2025-09-15T06:33:00.6142403Z         limits (68c7b04fd444485797b5e8da):
2025-09-15T06:33:00.6143098Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04fd444485797b5e8da/limits
2025-09-15T06:33:00.6143763Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:00.6144326Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:00.6144706Z         BadRequestDetail: 
2025-09-15T06:33:00.6145928Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (48.73s)
```

- 2025-09-16 PASS 56 seconds
- 2025-09-17 PASS 56 seconds
- 2025-09-18 PASS 53 seconds
- 2025-09-19 PASS 55 seconds
- 2025-09-20 PASS 53 seconds
- 2025-09-21 PASS a minute
- 2025-09-22 PASS 51 seconds
- 2025-09-23 PASS 59 seconds
- 2025-09-24 PASS 57 seconds
- 2025-09-25 PASS 50 seconds
- 2025-09-26 PASS 52 seconds
- 2025-09-27 PASS 55 seconds
- 2025-09-28 PASS 54 seconds
- 2025-09-29 PASS a minute
- 2025-09-30
  - PASS 54 seconds
  - PASS 58 seconds
  - PASS 51 seconds
  - PASS 59 seconds
- 2025-10-01
  - PASS 52 seconds
  - PASS 56 seconds
  - PASS 54 seconds
  - PASS 53 seconds
  - PASS 53 seconds
  - PASS 53 seconds
  - PASS 54 seconds
  - PASS 56 seconds
- 2025-10-02 PASS 58 seconds