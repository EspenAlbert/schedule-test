# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 01:01](#error-2025-08-17t0101160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122e1f746882a383c9956/dataFederation | qa | flaky_500 | 109.09s
[2025-08-20 14:22](#error-2025-08-20t1422190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d49f5734606989a33f2b/dataFederation/test-acc-tf-2638855539835896657 | qa | flaky_500 | 122.06s
[2025-08-24 00:46](#error-2025-08-24t0046570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d374192cd1cc589d00b/dataFederation | qa | flaky_500 | 127.02s
[2025-08-27 00:52](#error-2025-08-27t0052490000) |  | dev |  | 24.05s
[2025-09-01 03:30](#error-2025-09-01t0330510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 20.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 57 seconds
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS 53 seconds
- 2025-08-09 PASS 52 seconds
- 2025-08-10 PASS 49 seconds
- 2025-08-11 PASS 55 seconds
- 2025-08-12 PASS 52 seconds
- 2025-08-13 PASS 53 seconds
- 2025-08-14 PASS 53 seconds
- 2025-08-15 PASS 53 seconds
- 2025-08-16 PASS 56 seconds
- 2025-08-17

### Error 2025-08-17T01:01:16+00:00
```
2025-08-17T01:01:16.3479478Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-17T01:01:16.3491427Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-17T01:01:16.3646627Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-17T01:01:16.3647880Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-08-17T01:01:16.3648680Z         
2025-08-17T01:01:16.3652086Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122e1f746882a383c9956/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-17T01:01:16.3654181Z         
2025-08-17T01:01:16.3654913Z           with mongodbatlas_federated_database_instance.test,
2025-08-17T01:01:16.3656234Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-08-17T01:01:16.3657453Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-08-17T01:01:16.3658053Z         
2025-08-17T01:01:16.3709402Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-17T01:01:16.3710886Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-17T01:01:16.3711633Z         
2025-08-17T01:01:16.3715360Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-7518678969122307566): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122e1f746882a383c9956/dataFederation/test-acc-tf-7518678969122307566 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-17T01:01:16.3717826Z         
2025-08-17T01:01:16.3718358Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (109.86s)
```

- 2025-08-18 PASS 55 seconds
- 2025-08-19 PASS 50 seconds
- 2025-08-20
  - PASS 56 seconds
  - FAIL 2 minutes

### Error 2025-08-20T14:22:19+00:00
```
2025-08-20T14:22:19.8641540Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-20T14:22:19.8655754Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-20T14:22:19.8740182Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-20T14:22:19.8741651Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-08-20T14:22:19.8742561Z         
2025-08-20T14:22:19.8746194Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-2638855539835896657): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d49f5734606989a33f2b/dataFederation/test-acc-tf-2638855539835896657 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-20T14:22:19.8748560Z         
2025-08-20T14:22:19.8749257Z           with mongodbatlas_federated_database_instance.test2,
2025-08-20T14:22:19.8750626Z           on terraform_plugin_test.tf line 165, in resource "mongodbatlas_federated_database_instance" "test2":
2025-08-20T14:22:19.8752017Z          165: resource "mongodbatlas_federated_database_instance" "test2" {
2025-08-20T14:22:19.8752643Z         
2025-08-20T14:22:19.8770812Z    test_name=TestAccFederatedDatabaseInstance_s3bucket
2025-08-20T14:22:19.8781541Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (122.63s)
```

- 2025-08-21 PASS 51 seconds
- 2025-08-22 PASS 50 seconds
- 2025-08-23 PASS 52 seconds
- 2025-08-24

### Error 2025-08-24T00:46:57+00:00
```
2025-08-24T00:46:57.7631544Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-24T00:46:57.7670824Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-24T00:46:57.7846712Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-24T00:46:57.7847874Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-08-24T00:46:57.7848672Z         
2025-08-24T00:46:57.7851874Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d374192cd1cc589d00b/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-24T00:46:57.7853916Z         
2025-08-24T00:46:57.7854590Z           with mongodbatlas_federated_database_instance.test2,
2025-08-24T00:46:57.7855987Z           on terraform_plugin_test.tf line 165, in resource "mongodbatlas_federated_database_instance" "test2":
2025-08-24T00:46:57.7857206Z          165: resource "mongodbatlas_federated_database_instance" "test2" {
2025-08-24T00:46:57.7857820Z         
2025-08-24T00:46:57.7942647Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-24T00:46:57.7943754Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-24T00:46:57.7944498Z         
2025-08-24T00:46:57.7948159Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-3497812553429997312): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d374192cd1cc589d00b/dataFederation/test-acc-tf-3497812553429997312 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-24T00:46:57.7950297Z         
2025-08-24T00:46:57.7950663Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (127.19s)
```

- 2025-08-25 PASS 58 seconds
- 2025-08-26 PASS 53 seconds
- 2025-08-27

### Error 2025-08-27T00:52:49+00:00
```
2025-08-27T00:52:49.1057529Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-27T00:52:49.1073017Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-27T00:52:49.1089857Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-27T00:52:49.1091067Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-08-27T00:52:49.1092120Z         
2025-08-27T00:52:49.1093570Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-1654789038708449554): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T00:52:49.1095064Z         	status code: 409, request id: 78b0dd01-2c49-4a7e-a2f7-1684d9e0d437
2025-08-27T00:52:49.1095684Z         
2025-08-27T00:52:49.1096180Z           with aws_iam_role.test_role,
2025-08-27T00:52:49.1097176Z           on terraform_plugin_test.tf line 44, in resource "aws_iam_role" "test_role":
2025-08-27T00:52:49.1098056Z           44: resource "aws_iam_role" "test_role" {
2025-08-27T00:52:49.1098532Z         
2025-08-27T00:52:49.1108237Z    test_terraform_path=/home/runner/work/_temp/b4f40503-ded9-494f-a1e9-dd7f9ef28fd9/terraform test_name=TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-08-27T00:52:49.1137866Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (24.45s)
```

- 2025-08-28 PASS 56 seconds
- 2025-08-29 PASS 54 seconds
- 2025-08-30 PASS 52 seconds
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL 20 seconds

### Error 2025-09-01T03:30:51+00:00
```
2025-09-01T03:30:51.8817667Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-01T03:30:51.8827660Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-01T03:30:51.8873981Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-09-01T03:30:51.8874627Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-09-01T03:30:51.8875087Z         
2025-09-01T03:30:51.8875493Z         Error: error creating project: test-acc-tf-p-4159943295435378115
2025-09-01T03:30:51.8875985Z         
2025-09-01T03:30:51.8876280Z           with mongodbatlas_project.test,
2025-09-01T03:30:51.8876858Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-09-01T03:30:51.8877556Z           68: resource "mongodbatlas_project" "test" {
2025-09-01T03:30:51.8877841Z         
2025-09-01T03:30:51.8878304Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T03:30:51.8878937Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T03:30:51.8879590Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T03:30:51.8880189Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T03:30:51.8880593Z         BadRequestDetail: 
2025-09-01T03:30:51.8887765Z   
2025-09-01T03:30:51.8909259Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (20.21s)
```

  - PASS 53 seconds
  - PASS 52 seconds
  - PASS 51 seconds
  - PASS 54 seconds
  - PASS 53 seconds
  - PASS 56 seconds
  - PASS 54 seconds
- 2025-09-02 PASS 59 seconds
- 2025-09-03 PASS 57 seconds
- 2025-09-04 PASS 55 seconds