# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 01:01](#error-2025-08-17t0101160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122e1aafa9a76ca8bcd84/dataFederation | qa | flaky_500 | 80.03s
[2025-08-20 14:22](#error-2025-08-20t1422190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d49ff98188003c99a133/limits | qa | flaky_500 | 107.06s
[2025-08-24 00:46](#error-2025-08-24t0046570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d379bbb8c4ee1f831a3/dataFederation/test-acc-tf-1448595699164619964 | qa | flaky_500 | 64.09s
[2025-08-27 00:52](#error-2025-08-27t0052490000) |  | dev |  | 25.07s
[2025-09-01 03:30](#error-2025-09-01t0330510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 20.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 55 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 50 seconds
- 2025-08-09 PASS 53 seconds
- 2025-08-10 PASS 49 seconds
- 2025-08-11 PASS 53 seconds
- 2025-08-12 PASS 52 seconds
- 2025-08-13 PASS 52 seconds
- 2025-08-14 PASS 56 seconds
- 2025-08-15 PASS 53 seconds
- 2025-08-16 PASS 56 seconds
- 2025-08-17

### Error 2025-08-17T01:01:16+00:00
```
2025-08-17T01:01:16.3477778Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-17T01:01:16.3490124Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-17T01:01:16.3582921Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-17T01:01:16.3584049Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-08-17T01:01:16.3584846Z         
2025-08-17T01:01:16.3587923Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122e1aafa9a76ca8bcd84/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-17T01:01:16.3590146Z         
2025-08-17T01:01:16.3590822Z           with mongodbatlas_federated_database_instance.test,
2025-08-17T01:01:16.3592151Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-08-17T01:01:16.3593378Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-08-17T01:01:16.3593981Z         
2025-08-17T01:01:16.3614114Z    test_name=TestAccFederatedDatabaseInstance_s3bucket
2025-08-17T01:01:16.3658545Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (80.26s)
```

- 2025-08-18 PASS 55 seconds
- 2025-08-19 PASS 50 seconds
- 2025-08-20
  - PASS 58 seconds
  - FAIL a minute

### Error 2025-08-20T14:22:19+00:00
```
2025-08-20T14:22:19.8639276Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-20T14:22:19.8653774Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-20T14:22:19.8705461Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-20T14:22:19.8706715Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-08-20T14:22:19.8707616Z         
2025-08-20T14:22:19.8708299Z         Error: error when getting project properties after create
2025-08-20T14:22:19.8708883Z         
2025-08-20T14:22:19.8709431Z           with mongodbatlas_project.test,
2025-08-20T14:22:19.8710508Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-08-20T14:22:19.8711639Z           68: resource "mongodbatlas_project" "test" {
2025-08-20T14:22:19.8712152Z         
2025-08-20T14:22:19.8712956Z         error getting project (68a5d49ff98188003c99a133): error getting project's
2025-08-20T14:22:19.8713759Z         limits (68a5d49ff98188003c99a133):
2025-08-20T14:22:19.8714785Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d49ff98188003c99a133/limits
2025-08-20T14:22:19.8715964Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:22:19.8716990Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:22:19.8717672Z         BadRequestDetail: 
2025-08-20T14:22:19.8738910Z    test_terraform_path=/home/runner/work/_temp/8f94789d-6892-4579-b9ae-ae53becb8913/terraform test_working_directory=/tmp/plugintest3772890482 test_step_number=1
2025-08-20T14:22:19.8780515Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (107.60s)
```

- 2025-08-21 PASS 52 seconds
- 2025-08-22 PASS 49 seconds
- 2025-08-23 PASS 51 seconds
- 2025-08-24

### Error 2025-08-24T00:46:57+00:00
```
2025-08-24T00:46:57.7630086Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-24T00:46:57.7668051Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-24T00:46:57.7785192Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-24T00:46:57.7786324Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-08-24T00:46:57.7787131Z         
2025-08-24T00:46:57.7790924Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-1448595699164619964): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d379bbb8c4ee1f831a3/dataFederation/test-acc-tf-1448595699164619964 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-24T00:46:57.7793359Z         
2025-08-24T00:46:57.7794039Z           with mongodbatlas_federated_database_instance.test,
2025-08-24T00:46:57.7795401Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-08-24T00:46:57.7796776Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-08-24T00:46:57.7797392Z         
2025-08-24T00:46:57.7798879Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (64.93s)
```

- 2025-08-25 PASS 57 seconds
- 2025-08-26 PASS 54 seconds
- 2025-08-27

### Error 2025-08-27T00:52:49+00:00
```
2025-08-27T00:52:49.1056099Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-27T00:52:49.1068316Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-27T00:52:49.1109694Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-27T00:52:49.1110847Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-08-27T00:52:49.1111667Z         
2025-08-27T00:52:49.1113102Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-4080411249539403554): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T00:52:49.1114568Z         	status code: 409, request id: 293cb307-b35c-495a-8a1f-3c8a3395d4cf
2025-08-27T00:52:49.1115178Z         
2025-08-27T00:52:49.1115686Z           with aws_iam_role.test_role,
2025-08-27T00:52:49.1116707Z           on terraform_plugin_test.tf line 44, in resource "aws_iam_role" "test_role":
2025-08-27T00:52:49.1117626Z           44: resource "aws_iam_role" "test_role" {
2025-08-27T00:52:49.1118120Z         
2025-08-27T00:52:49.1128040Z    test_working_directory=/tmp/plugintest2825082987
2025-08-27T00:52:49.1139567Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (25.73s)
```

- 2025-08-28 PASS 57 seconds
- 2025-08-29 PASS 53 seconds
- 2025-08-30 PASS 52 seconds
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL 20 seconds

### Error 2025-09-01T03:30:51+00:00
```
2025-09-01T03:30:51.8815996Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-01T03:30:51.8826138Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-01T03:30:51.8888016Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-09-01T03:30:51.8888628Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-09-01T03:30:51.8889072Z         
2025-09-01T03:30:51.8889476Z         Error: error creating project: test-acc-tf-p-4588001596941741640
2025-09-01T03:30:51.8889816Z         
2025-09-01T03:30:51.8890106Z           with mongodbatlas_project.test,
2025-09-01T03:30:51.8890976Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-09-01T03:30:51.8891519Z           68: resource "mongodbatlas_project" "test" {
2025-09-01T03:30:51.8891812Z         
2025-09-01T03:30:51.8892275Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T03:30:51.8893018Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T03:30:51.8893638Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T03:30:51.8894237Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T03:30:51.8894631Z         BadRequestDetail: 
2025-09-01T03:30:51.8901892Z   
2025-09-01T03:30:51.8909711Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (20.26s)
```

  - PASS 52 seconds
  - PASS 53 seconds
  - PASS 51 seconds
  - PASS 53 seconds
  - PASS 54 seconds
  - PASS 54 seconds
  - PASS 53 seconds
- 2025-09-02 PASS 58 seconds
- 2025-09-03 PASS 57 seconds
- 2025-09-04 PASS 56 seconds