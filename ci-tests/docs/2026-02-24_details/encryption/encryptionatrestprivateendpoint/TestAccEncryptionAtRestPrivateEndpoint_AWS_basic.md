# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_AWS_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:40](#error-2026-02-03t0040480000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/698143bab2e54ee995905c96/cloudProviderAccess/698143cae3c7fce2317eaf82 | dev | flaky_500 | 42.01s
[2026-02-04 04:36](#error-2026-02-04t0436240000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6982945e09271d271f2f7fd2/cloudProviderAccess/6982beee0b5a510cdbbe4022 | dev |  | 3553.03s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 4 minutes
- 2026-01-27 PASS 6 minutes
- 2026-01-28 PASS 6 minutes
- 2026-01-29 PASS 6 minutes
- 2026-01-30 PASS 5 minutes
- 2026-01-31 PASS 5 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 5 minutes
- 2026-02-03

### Error 2026-02-03T00:40:48+00:00
```
2026-02-03T00:40:48.1115014Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-02-03T00:40:48.1117227Z 2026/02/03 00:39:39 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bab2e54ee995905c96/cloudProviderAccess/698143cae3c7fce2317eaf82 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2474202905664053266). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2474202905664053266], BadRequestDetail:  
2026-02-03T00:40:48.1119082Z 2026/02/03 00:39:39 retrying
2026-02-03T00:40:48.1132348Z    test_terraform_path=/home/runner/work/_temp/0d721187-2f6d-4d6b-a9e7-a46ca05dc8f4/terraform test_working_directory=/tmp/plugintest1180413941 test_step_number=2 test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-02-03T00:40:48.1133486Z     resource_test.go:174: Step 2/3 error: Error running apply: exit status 1
2026-02-03T00:40:48.1133909Z         
2026-02-03T00:40:48.1134220Z         Error: error creating resource
2026-02-03T00:40:48.1134538Z         
2026-02-03T00:40:48.1135002Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-02-03T00:40:48.1136121Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-02-03T00:40:48.1136973Z           94: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-02-03T00:40:48.1137400Z         
2026-02-03T00:40:48.1138118Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bab2e54ee995905c96/encryptionAtRest/AWS/privateEndpoints
2026-02-03T00:40:48.1138992Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-02-03T00:40:48.1139627Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-02-03T00:40:48.1140060Z         BadRequestDetail: 
2026-02-03T00:40:48.1140470Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (42.14s)
```

- 2026-02-04

### Error 2026-02-04T04:36:24+00:00
```
2026-02-04T04:36:24.6767019Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-02-04T04:36:24.6769091Z 2026/02/04 03:37:19 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7fd2/cloudProviderAccess/6982beee0b5a510cdbbe4022 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8288977395473508052). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8288977395473508052], BadRequestDetail:  
2026-02-04T04:36:24.6770914Z 2026/02/04 03:37:19 retrying
2026-02-04T04:36:24.6783658Z   
2026-02-04T04:36:24.6784405Z     resource_test.go:174: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-04T04:36:24.6784938Z         
2026-02-04T04:36:24.6785271Z         Error: error when destroying resource
2026-02-04T04:36:24.6785715Z         
2026-02-04T04:36:24.6786146Z         error deleting Encryption At Rest: (6982945e09271d271f2f7fd2):
2026-02-04T04:36:24.6786898Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7fd2/encryptionAtRest
2026-02-04T04:36:24.6787515Z         PATCH: HTTP 400 Bad Request (Error code:
2026-02-04T04:36:24.6788072Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2026-02-04T04:36:24.6788742Z         Encryption at Rest cannot be disabled when private endpoints are present.
2026-02-04T04:36:24.6789324Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2026-02-04T04:36:24.6789800Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (3553.31s)
```

- 2026-02-05 PASS 57 minutes
- 2026-02-06 PASS 6 minutes
- 2026-02-07 PASS 5 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 7 minutes
- 2026-02-10 PASS 5 minutes
- 2026-02-11 PASS 6 minutes
- 2026-02-12 PASS 6 minutes
- 2026-02-13 PASS 6 minutes
- 2026-02-14 PASS 5 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 6 minutes
- 2026-02-17 PASS 5 minutes
- 2026-02-18 PASS 5 minutes
- 2026-02-19 PASS 5 minutes
- 2026-02-20 PASS 5 minutes
- 2026-02-21 PASS 5 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 5 minutes
- 2026-02-24 PASS 8 minutes

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 5 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 5 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 6 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 7 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 6 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 6 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
