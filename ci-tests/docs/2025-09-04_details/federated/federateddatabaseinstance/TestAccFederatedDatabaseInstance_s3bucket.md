# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 01:01](#error-2025-08-17t0101160000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122e0aafa9a76ca8bcac1/dataFederation | qa | flaky_500 | 81.08s
[2025-08-20 14:22](#error-2025-08-20t1422190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d49f5734606989a33f3b/dataFederation/test-acc-tf-4662727154407328668 | qa | flaky_500 | 152.08s
[2025-08-24 00:46](#error-2025-08-24t0046570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d374192cd1cc589cfd4/dataFederation | qa | flaky_500 | 63.08s
[2025-08-27 00:52](#error-2025-08-27t0052490000) |  | dev |  | 25.07s
[2025-09-01 03:30](#error-2025-09-01t0330510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 20.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a minute
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS a minute
- 2025-08-09 PASS a minute
- 2025-08-10 PASS a minute
- 2025-08-11 PASS a minute
- 2025-08-12 PASS a minute
- 2025-08-13 PASS a minute
- 2025-08-14 PASS a minute
- 2025-08-15 PASS a minute
- 2025-08-16 PASS a minute
- 2025-08-17

### Error 2025-08-17T01:01:16+00:00
```
2025-08-17T01:01:16.3483413Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-08-17T01:01:16.3490762Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-08-17T01:01:16.3614750Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-08-17T01:01:16.3615845Z     resource_federated_database_instance_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-08-17T01:01:16.3616818Z         
2025-08-17T01:01:16.3620083Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122e0aafa9a76ca8bcac1/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-17T01:01:16.3622164Z         
2025-08-17T01:01:16.3622844Z           with mongodbatlas_federated_database_instance.test,
2025-08-17T01:01:16.3624157Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-08-17T01:01:16.3625404Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-08-17T01:01:16.3625998Z         
2025-08-17T01:01:16.3645367Z    test_terraform_path=/home/runner/work/_temp/0381493b-bf86-4352-944e-79e2d1ada3cc/terraform test_name=TestAccFederatedDatabaseInstanceDSPlural_basic
2025-08-17T01:01:16.3659483Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (81.81s)
```

- 2025-08-18 PASS a minute
- 2025-08-19 PASS a minute
- 2025-08-20
  - PASS a minute
  - FAIL 2 minutes

### Error 2025-08-20T14:22:19+00:00
```
2025-08-20T14:22:19.8646441Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-08-20T14:22:19.8654439Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-08-20T14:22:19.8771654Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-08-20T14:22:19.8772715Z     resource_federated_database_instance_test.go:83: Step 2/2 error running import: exit status 1
2025-08-20T14:22:19.8773477Z         
2025-08-20T14:22:19.8777101Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-4662727154407328668): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d49f5734606989a33f3b/dataFederation/test-acc-tf-4662727154407328668 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-20T14:22:19.8779658Z         
2025-08-20T14:22:19.8782329Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (152.76s)
```

- 2025-08-21 PASS a minute
- 2025-08-22 PASS a minute
- 2025-08-23 PASS a minute
- 2025-08-24

### Error 2025-08-24T00:46:57+00:00
```
2025-08-24T00:46:57.7635417Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-08-24T00:46:57.7668868Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-08-24T00:46:57.7751442Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-08-24T00:46:57.7752561Z     resource_federated_database_instance_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:46:57.7753353Z         
2025-08-24T00:46:57.7756435Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d374192cd1cc589cfd4/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-24T00:46:57.7758513Z         
2025-08-24T00:46:57.7759344Z           with mongodbatlas_federated_database_instance.test,
2025-08-24T00:46:57.7760661Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-08-24T00:46:57.7761913Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-08-24T00:46:57.7762511Z         
2025-08-24T00:46:57.7797945Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (63.81s)
```

- 2025-08-25 PASS a minute
- 2025-08-26 PASS a minute
- 2025-08-27

### Error 2025-08-27T00:52:49+00:00
```
2025-08-27T00:52:49.1061633Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-08-27T00:52:49.1072314Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-08-27T00:52:49.1128669Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-08-27T00:52:49.1129947Z     resource_federated_database_instance_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-08-27T00:52:49.1130768Z         
2025-08-27T00:52:49.1132360Z         Error: creating IAM Role (mongodb-atlas-test-acc-tf-7552549122279692666): LimitExceeded: Cannot exceed quota for RolesPerAccount: 1500
2025-08-27T00:52:49.1133826Z         	status code: 409, request id: 6b604fe9-0e7d-4835-b94c-943161b17e47
2025-08-27T00:52:49.1134422Z         
2025-08-27T00:52:49.1134900Z           with aws_iam_role.test_role,
2025-08-27T00:52:49.1135918Z           on terraform_plugin_test.tf line 44, in resource "aws_iam_role" "test_role":
2025-08-27T00:52:49.1136841Z           44: resource "aws_iam_role" "test_role" {
2025-08-27T00:52:49.1137334Z         
2025-08-27T00:52:49.1138644Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (25.71s)
```

- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS a minute
- 2025-08-31 PASS 2 minutes
- 2025-09-01
  - FAIL 20 seconds

### Error 2025-09-01T03:30:51+00:00
```
2025-09-01T03:30:51.8820654Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-09-01T03:30:51.8827190Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-09-01T03:30:51.8902136Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-09-01T03:30:51.8902866Z     resource_federated_database_instance_test.go:83: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:30:51.8903322Z         
2025-09-01T03:30:51.8903727Z         Error: error creating project: test-acc-tf-p-224504759579167372
2025-09-01T03:30:51.8904068Z         
2025-09-01T03:30:51.8904365Z           with mongodbatlas_project.test,
2025-09-01T03:30:51.8904943Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-09-01T03:30:51.8905469Z           68: resource "mongodbatlas_project" "test" {
2025-09-01T03:30:51.8905758Z         
2025-09-01T03:30:51.8906224Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T03:30:51.8906854Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T03:30:51.8907469Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T03:30:51.8908074Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T03:30:51.8908481Z         BadRequestDetail: 
2025-09-01T03:30:51.8908810Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (20.16s)
```

  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-09-02 PASS a minute
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute