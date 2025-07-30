# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL(x 2)
Success rate: 94.59%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:46](#error-2025-07-06t0046420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40f690ae45e168bd8a5/dataFederation | qa | flaky_500 | 157.01s
[2025-07-10 13:21](#error-2025-07-10t1321490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb0b006d8d55bb9e6c75/dataFederation | qa | flaky_500 | 67.01s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 53 seconds
  - PASS 52 seconds
  - PASS 57 seconds
  - PASS 49 seconds
  - PASS 52 seconds
  - PASS 56 seconds
- 2025-07-02 PASS 52 seconds
- 2025-07-03 PASS 55 seconds
- 2025-07-04 PASS 55 seconds
- 2025-07-05 PASS 54 seconds
- 2025-07-06

### Error 2025-07-06T00:46:42+00:00
```
2025-07-06T00:46:42.9592406Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-07-06T00:46:42.9603196Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-07-06T00:46:42.9730412Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-07-06T00:46:42.9731049Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-07-06T00:46:42.9731492Z         
2025-07-06T00:46:42.9733114Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40f690ae45e168bd8a5/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-06T00:46:42.9734278Z         
2025-07-06T00:46:42.9734642Z           with mongodbatlas_federated_database_instance.test,
2025-07-06T00:46:42.9735350Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-06T00:46:42.9736013Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-06T00:46:42.9736344Z         
2025-07-06T00:46:42.9765631Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-07-06T00:46:42.9766219Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:46:42.9766639Z         
2025-07-06T00:46:42.9769071Z         Error: error deleting cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40f690ae45e168bd8a5/cloudProviderAccess/AWS/6869c4117267b5775b6835dd DELETE: HTTP 400 Bad Request (Error code: "AWS_IAM_ROLE_IN_USE") Detail: Cannot remove the AWS IAM role because it is still in use. Reason: Bad Request. Params: [Cannot remove the AWS IAM role (6869c4117267b5775b6835dd) because it is still in use.], BadRequestDetail: 
2025-07-06T00:46:42.9770559Z         
2025-07-06T00:46:42.9770847Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (157.14s)
```

- 2025-07-07 PASS 52 seconds
- 2025-07-08 PASS 52 seconds
- 2025-07-09 PASS 58 seconds
- 2025-07-10
  - PASS 51 seconds
  - FAIL a minute

### Error 2025-07-10T13:21:49+00:00
```
2025-07-10T13:21:49.2103814Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-07-10T13:21:49.2111077Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-07-10T13:21:49.2174516Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-07-10T13:21:49.2175177Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-07-10T13:21:49.2175638Z         
2025-07-10T13:21:49.2177311Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb0b006d8d55bb9e6c75/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-10T13:21:49.2178471Z         
2025-07-10T13:21:49.2178845Z           with mongodbatlas_federated_database_instance.test,
2025-07-10T13:21:49.2179569Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-10T13:21:49.2180262Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-10T13:21:49.2180605Z         
2025-07-10T13:21:49.2192794Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-07-10T13:21:49.2193655Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:21:49.2194091Z         
2025-07-10T13:21:49.2196307Z         Error: error deleting cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb0b006d8d55bb9e6c75/cloudProviderAccess/AWS/686fbb0d006d8d55bb9e6d91 DELETE: HTTP 400 Bad Request (Error code: "AWS_IAM_ROLE_IN_USE") Detail: Cannot remove the AWS IAM role because it is still in use. Reason: Bad Request. Params: [Cannot remove the AWS IAM role (686fbb0d006d8d55bb9e6d91) because it is still in use.], BadRequestDetail: 
2025-07-10T13:21:49.2197812Z         
2025-07-10T13:21:49.2198283Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (67.13s)
```

- 2025-07-11 PASS 55 seconds
- 2025-07-12 PASS 49 seconds
- 2025-07-13 PASS a minute
- 2025-07-14 PASS 57 seconds
- 2025-07-15 PASS 52 seconds
- 2025-07-16 PASS 57 seconds
- 2025-07-17 PASS 53 seconds
- 2025-07-18 PASS a minute
- 2025-07-19 PASS 49 seconds
- 2025-07-20 PASS a minute
- 2025-07-21 PASS 50 seconds
- 2025-07-22 PASS 55 seconds
- 2025-07-23
  - PASS 58 seconds
  - PASS a minute
- 2025-07-24 PASS 54 seconds
- 2025-07-25 PASS 53 seconds
- 2025-07-26 PASS 54 seconds
- 2025-07-27 PASS a minute
- 2025-07-28 PASS 52 seconds
- 2025-07-29 PASS 56 seconds
- 2025-07-30 PASS 57 seconds