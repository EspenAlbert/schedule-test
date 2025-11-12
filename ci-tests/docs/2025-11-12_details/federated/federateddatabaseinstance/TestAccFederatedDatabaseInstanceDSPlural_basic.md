# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-05 00:59](#error-2025-10-05t0059370000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68e1bbfefec65822ddfca3bc/dataFederation | qa | flaky_500 | 159.03s
[2025-10-19 00:45](#error-2025-10-19t0045410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68f4317d21ed692ad0019bf5/dataFederation | qa | flaky_500 | 96.04s
[2025-10-30 00:44](#error-2025-10-30t0044190000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6902b120e2dc7470847bc678 | dev | flaky_500 | 52.10s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 53 seconds
- 2025-10-05

### Error 2025-10-05T00:59:37+00:00
```
2025-10-05T00:59:37.7033944Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-05T00:59:37.7046738Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-05T00:59:37.7120857Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-05T00:59:37.7121519Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-10-05T00:59:37.7121984Z         
2025-10-05T00:59:37.7123877Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfefec65822ddfca3bc/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-05T00:59:37.7125196Z         
2025-10-05T00:59:37.7125581Z           with mongodbatlas_federated_database_instance.test,
2025-10-05T00:59:37.7126315Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-10-05T00:59:37.7127001Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-10-05T00:59:37.7127350Z         
2025-10-05T00:59:37.7139707Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-05T00:59:37.7140528Z         
2025-10-05T00:59:37.7144032Z         Error: error deleting cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfefec65822ddfca3bc/cloudProviderAccess/AWS/68e1bc01f758b3057a1af958 DELETE: HTTP 400 Bad Request (Error code: "AWS_IAM_ROLE_IN_USE") Detail: Cannot remove the AWS IAM role because it is still in use. Reason: Bad Request. Params: [Cannot remove the AWS IAM role (68e1bc01f758b3057a1af958) because it is still in use.], BadRequestDetail: 
2025-10-05T00:59:37.7145593Z         
2025-10-05T00:59:37.7145931Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (159.34s)
```

- 2025-10-06 PASS 50 seconds
- 2025-10-07 PASS 51 seconds
- 2025-10-08 PASS 56 seconds
- 2025-10-09 PASS 58 seconds
- 2025-10-10 PASS 57 seconds
- 2025-10-11 PASS 53 seconds
- 2025-10-12 PASS 57 seconds
- 2025-10-13 PASS 54 seconds
- 2025-10-14 PASS 55 seconds
- 2025-10-15 PASS 57 seconds
- 2025-10-16 PASS 54 seconds
- 2025-10-17 PASS 58 seconds
- 2025-10-18 PASS 53 seconds
- 2025-10-19

### Error 2025-10-19T00:45:41+00:00
```
2025-10-19T00:45:41.1034216Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-19T00:45:41.1045582Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-19T00:45:41.1139378Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-19T00:45:41.1140068Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-10-19T00:45:41.1140563Z         
2025-10-19T00:45:41.1142273Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4317d21ed692ad0019bf5/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-19T00:45:41.1143468Z         
2025-10-19T00:45:41.1143865Z           with mongodbatlas_federated_database_instance.test,
2025-10-19T00:45:41.1144621Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-10-19T00:45:41.1145317Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-10-19T00:45:41.1145679Z         
2025-10-19T00:45:41.1147975Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f4317d21ed692ad0019bf5/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-10-19T00:45:41.1149194Z         
2025-10-19T00:45:41.1149593Z           with mongodbatlas_federated_database_instance.test2,
2025-10-19T00:45:41.1150354Z           on terraform_plugin_test.tf line 165, in resource "mongodbatlas_federated_database_instance" "test2":
2025-10-19T00:45:41.1151061Z          165: resource "mongodbatlas_federated_database_instance" "test2" {
2025-10-19T00:45:41.1151430Z         
2025-10-19T00:45:41.1151760Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (96.37s)
```

- 2025-10-20
  - PASS 56 seconds
  - PASS 54 seconds
- 2025-10-21 PASS 51 seconds
- 2025-10-22
  - PASS 51 seconds
  - PASS 58 seconds
- 2025-10-23 PASS 53 seconds
- 2025-10-24 PASS 55 seconds
- 2025-10-25 PASS 51 seconds
- 2025-10-26 PASS 55 seconds
- 2025-10-27 PASS 53 seconds
- 2025-10-28 PASS 53 seconds
- 2025-10-29 PASS 56 seconds
- 2025-10-30

### Error 2025-10-30T00:44:19+00:00
```
2025-10-30T00:44:19.1611466Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-30T00:44:19.1619073Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-30T00:44:19.1658909Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-10-30T00:44:19.1659692Z     data_source_federated_database_instances_test.go:24: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-30T00:44:19.1660239Z         
2025-10-30T00:44:19.1660546Z         Error: error when destroying resource
2025-10-30T00:44:19.1660820Z         
2025-10-30T00:44:19.1661159Z         error deleting project (6902b120e2dc7470847bc678):
2025-10-30T00:44:19.1661722Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6902b120e2dc7470847bc678
2025-10-30T00:44:19.1662346Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-10-30T00:44:19.1662934Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-30T00:44:19.1663342Z         BadRequestDetail: 
2025-10-30T00:44:19.1663692Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (52.97s)
```

- 2025-10-31 PASS 56 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 55 seconds
- 2025-11-03 PASS 50 seconds
- 2025-11-04 PASS 50 seconds
- 2025-11-05
  - PASS 53 seconds
  - PASS 53 seconds
- 2025-11-06 PASS 56 seconds
- 2025-11-07 PASS 55 seconds
- 2025-11-08 PASS 49 seconds
- 2025-11-09 PASS 53 seconds
- 2025-11-10 PASS 51 seconds
- 2025-11-11 PASS 50 seconds
- 2025-11-12 PASS 55 seconds