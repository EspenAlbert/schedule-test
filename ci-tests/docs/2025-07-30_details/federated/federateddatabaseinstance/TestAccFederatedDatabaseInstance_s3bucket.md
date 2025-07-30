# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 37 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:46](#error-2025-07-06t0046420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40e7267b5775b683504/dataFederation | qa | flaky_500 | 157.04s
[2025-07-10 13:21](#error-2025-07-10t1321490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb0afd583001f9eeba8a/dataFederation | qa | flaky_500 | 66.07s
[2025-07-13 00:46](#error-2025-07-13t0046210000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fe99207f456171041381/dataFederation/test-acc-tf-1363693651715597188 | qa | flaky_500 | 104.04s
[2025-07-20 00:47](#error-2025-07-20t0047580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3942823af9166ef91949/limits | qa | flaky_500 | 48.02s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06

### Error 2025-07-06T00:46:42+00:00
```
2025-07-06T00:46:42.9598740Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-07-06T00:46:42.9605144Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-07-06T00:46:42.9747937Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-07-06T00:46:42.9748677Z     resource_federated_database_instance_test.go:80: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:46:42.9749120Z         
2025-07-06T00:46:42.9750740Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40e7267b5775b683504/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-06T00:46:42.9752023Z         
2025-07-06T00:46:42.9752383Z           with mongodbatlas_federated_database_instance.test,
2025-07-06T00:46:42.9753085Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-06T00:46:42.9753742Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-06T00:46:42.9754074Z         
2025-07-06T00:46:42.9764728Z    test_name=TestAccFederatedDatabaseInstanceDS_s3Bucket test_terraform_path=/home/runner/work/_temp/2b549042-8dde-42a6-b885-5fe31cb3ca02/terraform test_working_directory=/tmp/plugintest2275574258 test_step_number=1
2025-07-06T00:46:42.9782390Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-07-06T00:46:42.9782964Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:46:42.9783387Z         
2025-07-06T00:46:42.9785557Z         Error: error deleting cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40e7267b5775b683504/cloudProviderAccess/AWS/6869c411690ae45e168bd97c DELETE: HTTP 400 Bad Request (Error code: "AWS_IAM_ROLE_IN_USE") Detail: Cannot remove the AWS IAM role because it is still in use. Reason: Bad Request. Params: [Cannot remove the AWS IAM role (6869c411690ae45e168bd97c) because it is still in use.], BadRequestDetail: 
2025-07-06T00:46:42.9787033Z         
2025-07-06T00:46:42.9787305Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (157.39s)
```

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10
  - PASS a minute
  - FAIL a minute

### Error 2025-07-10T13:21:49+00:00
```
2025-07-10T13:21:49.2108088Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-07-10T13:21:49.2112666Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-07-10T13:21:49.2139870Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-07-10T13:21:49.2140488Z     resource_federated_database_instance_test.go:80: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:21:49.2140932Z         
2025-07-10T13:21:49.2142582Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb0afd583001f9eeba8a/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-10T13:21:49.2143964Z         
2025-07-10T13:21:49.2144339Z           with mongodbatlas_federated_database_instance.test,
2025-07-10T13:21:49.2145062Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-10T13:21:49.2145719Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-10T13:21:49.2146060Z         
2025-07-10T13:21:49.2180891Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (66.74s)
```

- 2025-07-11 PASS a minute
- 2025-07-12 PASS a minute
- 2025-07-13

### Error 2025-07-13T00:46:21+00:00
```
2025-07-13T00:46:21.1661229Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-07-13T00:46:21.1666411Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-07-13T00:46:21.1712563Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-07-13T00:46:21.1713480Z     resource_federated_database_instance_test.go:80: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-13T00:46:21.1713997Z         
2025-07-13T00:46:21.1715977Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-1363693651715597188): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe99207f456171041381/dataFederation/test-acc-tf-1363693651715597188 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-13T00:46:21.1717469Z         
2025-07-13T00:46:21.1717855Z           with mongodbatlas_federated_database_instance.test,
2025-07-13T00:46:21.1718577Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-13T00:46:21.1719256Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-13T00:46:21.1719605Z         
2025-07-13T00:46:21.1811395Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (104.42s)
```

- 2025-07-14 PASS a minute
- 2025-07-15 PASS a minute
- 2025-07-16 PASS a minute
- 2025-07-17 PASS a minute
- 2025-07-18 PASS a minute
- 2025-07-19 PASS a minute
- 2025-07-20

### Error 2025-07-20T00:47:58+00:00
```
2025-07-20T00:47:58.8012742Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-07-20T00:47:58.8020250Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-07-20T00:47:58.8120128Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-07-20T00:47:58.8121248Z     resource_federated_database_instance_test.go:80: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:47:58.8122066Z         
2025-07-20T00:47:58.8122759Z         Error: error when getting project properties after create
2025-07-20T00:47:58.8123333Z         
2025-07-20T00:47:58.8123851Z           with mongodbatlas_project.test,
2025-07-20T00:47:58.8124914Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-07-20T00:47:58.8126230Z           68: resource "mongodbatlas_project" "test" {
2025-07-20T00:47:58.8126737Z         
2025-07-20T00:47:58.8127520Z         error getting project (687c3942823af9166ef91949): error getting project's
2025-07-20T00:47:58.8128329Z         limits (687c3942823af9166ef91949):
2025-07-20T00:47:58.8129333Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3942823af9166ef91949/limits
2025-07-20T00:47:58.8130513Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:47:58.8131532Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:47:58.8132214Z         BadRequestDetail: 
2025-07-20T00:47:58.8132837Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (48.23s)
```

- 2025-07-21 PASS a minute
- 2025-07-22 PASS a minute
- 2025-07-23
  - PASS a minute
  - PASS a minute
- 2025-07-24 PASS a minute
- 2025-07-25 PASS a minute
- 2025-07-26 PASS a minute
- 2025-07-27 PASS a minute
- 2025-07-28 PASS a minute
- 2025-07-29 PASS a minute
- 2025-07-30 PASS a minute