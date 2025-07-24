# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 3)
Success rate: 91.89%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:47](#error-2025-06-29t0047140000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860899449709c3a5a3c9368/dataFederation | qa | flaky_500 | 123.09s
[2025-07-06 00:46](#error-2025-07-06t0046420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40f690ae45e168bd7bb/dataFederation | qa | flaky_500 | 164.05s
[2025-07-13 00:46](#error-2025-07-13t0046210000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fe99207f456171041385/dataFederation | qa | flaky_500 | 100.01s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 57 seconds
- 2025-06-26 PASS 51 seconds
- 2025-06-27 PASS 55 seconds
- 2025-06-28 PASS 51 seconds
- 2025-06-29

### Error 2025-06-29T00:47:14+00:00
```
2025-06-29T00:47:14.7827757Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-06-29T00:47:14.7834643Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-06-29T00:47:14.7879301Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-06-29T00:47:14.7880017Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running post-apply non-refresh plan: exit status 1
2025-06-29T00:47:14.7880524Z         
2025-06-29T00:47:14.7882221Z         Error: error getting MongoDB Atlas Federated Database Instances information: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860899449709c3a5a3c9368/dataFederation GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-29T00:47:14.7883944Z         
2025-06-29T00:47:14.7884346Z           with data.mongodbatlas_federated_database_instances.test,
2025-06-29T00:47:14.7885058Z           on terraform_plugin_test.tf line 202, in data "mongodbatlas_federated_database_instances" "test":
2025-06-29T00:47:14.7885814Z          202: data "mongodbatlas_federated_database_instances" "test" {
2025-06-29T00:47:14.7886159Z         
2025-06-29T00:47:14.7897710Z    test_name=TestAccFederatedDatabaseInstance_s3bucket test_terraform_path=/home/runner/work/_temp/84233ee0-47fa-468c-945c-beaa4b666225/terraform
2025-06-29T00:47:14.7916497Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-06-29T00:47:14.7917106Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-29T00:47:14.7917520Z         
2025-06-29T00:47:14.7919480Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-3473743858128985429): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860899449709c3a5a3c9368/dataFederation/test-acc-tf-3473743858128985429 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-29T00:47:14.7920842Z         
2025-06-29T00:47:14.7921141Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (123.90s)
```

- 2025-06-30 PASS 50 seconds
- 2025-07-01
  - PASS 53 seconds
  - PASS 53 seconds
  - PASS 58 seconds
  - PASS 50 seconds
  - PASS 52 seconds
  - PASS 56 seconds
- 2025-07-02 PASS 51 seconds
- 2025-07-03 PASS 56 seconds
- 2025-07-04 PASS 56 seconds
- 2025-07-05 PASS 54 seconds
- 2025-07-06

### Error 2025-07-06T00:46:42+00:00
```
2025-07-06T00:46:42.9594678Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-07-06T00:46:42.9606766Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-07-06T00:46:42.9707426Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-07-06T00:46:42.9708721Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-07-06T00:46:42.9709508Z         
2025-07-06T00:46:42.9712458Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40f690ae45e168bd7bb/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-06T00:46:42.9714449Z         
2025-07-06T00:46:42.9715095Z           with mongodbatlas_federated_database_instance.test,
2025-07-06T00:46:42.9716541Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-06T00:46:42.9717732Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-06T00:46:42.9718483Z         
2025-07-06T00:46:42.9798538Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-07-06T00:46:42.9799133Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:46:42.9799550Z         
2025-07-06T00:46:42.9801498Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-3719571083662546171): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40f690ae45e168bd7bb/dataFederation/test-acc-tf-3719571083662546171 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-06T00:46:42.9802978Z         
2025-07-06T00:46:42.9803283Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (164.47s)
```

- 2025-07-07 PASS 52 seconds
- 2025-07-08 PASS 51 seconds
- 2025-07-09 PASS 58 seconds
- 2025-07-10
  - PASS 52 seconds
  - PASS 2 minutes
- 2025-07-11 PASS 54 seconds
- 2025-07-12 PASS 49 seconds
- 2025-07-13

### Error 2025-07-13T00:46:21+00:00
```
2025-07-13T00:46:21.1657952Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-07-13T00:46:21.1666855Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-07-13T00:46:21.1693462Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-07-13T00:46:21.1694220Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running post-apply non-refresh plan: exit status 1
2025-07-13T00:46:21.1694751Z         
2025-07-13T00:46:21.1696487Z         Error: error getting MongoDB Atlas Federated Database Instances information: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe99207f456171041385/dataFederation GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-13T00:46:21.1697694Z         
2025-07-13T00:46:21.1698105Z           with data.mongodbatlas_federated_database_instances.test,
2025-07-13T00:46:21.1698841Z           on terraform_plugin_test.tf line 202, in data "mongodbatlas_federated_database_instances" "test":
2025-07-13T00:46:21.1699517Z          202: data "mongodbatlas_federated_database_instances" "test" {
2025-07-13T00:46:21.1699865Z         
2025-07-13T00:46:21.1795168Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-07-13T00:46:21.1796295Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:46:21.1797081Z         
2025-07-13T00:46:21.1800760Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-1368646055897117780): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe99207f456171041385/dataFederation/test-acc-tf-1368646055897117780 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-13T00:46:21.1803568Z         
2025-07-13T00:46:21.1807548Z         Error: error deleting MongoDB Atlas Federated Database Instace (test-acc-tf-7515360435114524063): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe99207f456171041385/dataFederation/test-acc-tf-7515360435114524063 DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-13T00:46:21.1809999Z         
2025-07-13T00:46:21.1810567Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (100.10s)
```

- 2025-07-14 PASS 57 seconds
- 2025-07-15 PASS 52 seconds
- 2025-07-16 PASS 58 seconds
- 2025-07-17 PASS 53 seconds
- 2025-07-18 PASS a minute
- 2025-07-19 PASS 49 seconds
- 2025-07-20 PASS a minute
- 2025-07-21 PASS 51 seconds
- 2025-07-22 PASS 56 seconds
- 2025-07-23
  - PASS a minute
  - PASS a minute
- 2025-07-24 PASS 53 seconds