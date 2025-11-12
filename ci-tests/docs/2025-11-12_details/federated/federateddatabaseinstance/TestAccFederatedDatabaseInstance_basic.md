# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-19 00:45](#error-2025-10-19t0045410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f4316f353f113dafd14697/dataFederation | qa | flaky_500 | 48.05s
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b111abf4374f32988cb3 | dev | flaky_500 | 13.05s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 12 seconds
- 2025-10-05 PASS 12 seconds
- 2025-10-06 PASS 11 seconds
- 2025-10-07 PASS 13 seconds
- 2025-10-08 PASS 14 seconds
- 2025-10-09 PASS 18 seconds
- 2025-10-10 PASS 17 seconds
- 2025-10-11 PASS 14 seconds
- 2025-10-12 PASS 16 seconds
- 2025-10-13 PASS 14 seconds
- 2025-10-14 PASS 17 seconds
- 2025-10-15 PASS 19 seconds
- 2025-10-16 PASS 13 seconds
- 2025-10-17 PASS 14 seconds
- 2025-10-18 PASS 18 seconds
- 2025-10-19

### Error 2025-10-19T00:45:41+00:00
```
2025-10-19T00:45:41.1036448Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-10-19T00:45:41.1045186Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-10-19T00:45:41.1072098Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-10-19T00:45:41.1073136Z     resource_federated_database_instance_test.go:41: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:45:41.1074022Z         
2025-10-19T00:45:41.1076579Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4316f353f113dafd14697/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-19T00:45:41.1078098Z         
2025-10-19T00:45:41.1078507Z           with mongodbatlas_federated_database_instance.test,
2025-10-19T00:45:41.1079259Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-10-19T00:45:41.1079964Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-10-19T00:45:41.1080332Z         
2025-10-19T00:45:41.1082168Z 2025/10/19 00:32:31 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4317d353f113dafd15a77/cloudProviderAccess/68f4319e353f113dafd16836 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4017730556614351905). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4017730556614351905], BadRequestDetail:  
2025-10-19T00:45:41.1084071Z 2025/10/19 00:32:31 retrying
2025-10-19T00:45:41.1084423Z --- FAIL: TestAccFederatedDatabaseInstance_basic (48.49s)
```

- 2025-10-20
  - PASS 15 seconds
  - PASS 14 seconds
- 2025-10-21 PASS 13 seconds
- 2025-10-22
  - PASS 14 seconds
  - PASS 18 seconds
- 2025-10-23 PASS 14 seconds
- 2025-10-24 PASS 16 seconds
- 2025-10-25 PASS 14 seconds
- 2025-10-26 PASS 12 seconds
- 2025-10-27 PASS 14 seconds
- 2025-10-28 PASS 13 seconds
- 2025-10-29 PASS 15 seconds
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.1612597Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-10-30T00:44:19.1618699Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-10-30T00:44:19.1632129Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-10-30T00:44:19.1632855Z     resource_federated_database_instance_test.go:41: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.1633389Z         
2025-10-30T00:44:19.1633685Z         Error: error when destroying resource
2025-10-30T00:44:19.1633969Z         
2025-10-30T00:44:19.1634308Z         error deleting project (6902b111abf4374f32988cb3):
2025-10-30T00:44:19.1634877Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b111abf4374f32988cb3
2025-10-30T00:44:19.1635502Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.1636536Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.1636952Z         BadRequestDetail: 
2025-10-30T00:44:19.1637276Z --- FAIL: TestAccFederatedDatabaseInstance_basic (13.51s)
```

- 2025-10-31 PASS 17 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 15 seconds
- 2025-11-03 PASS 11 seconds
- 2025-11-04 PASS 14 seconds
- 2025-11-05
  - PASS 13 seconds
  - PASS 13 seconds
- 2025-11-06 PASS 14 seconds
- 2025-11-07 PASS 17 seconds
- 2025-11-08 PASS 13 seconds
- 2025-11-09 PASS 13 seconds
- 2025-11-10 PASS 14 seconds
- 2025-11-11 PASS 12 seconds
- 2025-11-12 PASS 15 seconds