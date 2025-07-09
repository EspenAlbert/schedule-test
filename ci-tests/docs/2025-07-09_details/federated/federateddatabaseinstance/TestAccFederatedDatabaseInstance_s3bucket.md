# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 109) FAIL(x 4)
Success rate: 96.46%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 16.01s
2025-06-05 00:32 | dev | 15.10s
2025-06-29 00:47 | qa | 94.06s
2025-07-06 00:46 | qa | 157.04s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS a minute
### 2025-04-12
#### PASS a minute
### 2025-04-13
#### PASS 59 seconds
### 2025-04-14
#### PASS a minute
### 2025-04-15
#### PASS a minute
### 2025-04-16
#### PASS a minute
#### PASS a minute
### 2025-04-17
#### PASS a minute
### 2025-04-18
#### PASS a minute
### 2025-04-19
#### PASS a minute
### 2025-04-20
#### PASS a minute
### 2025-04-21
#### PASS a minute
### 2025-04-22
#### PASS a minute
### 2025-04-23
#### PASS a minute
### 2025-04-24
#### PASS a minute
### 2025-04-25
#### PASS a minute
### 2025-04-26
#### PASS a minute
### 2025-04-27
#### PASS a minute
### 2025-04-28
#### PASS a minute
### 2025-04-29
#### PASS a minute
### 2025-04-30
#### PASS a minute
#### PASS a minute
### 2025-05-01
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
### 2025-05-02
#### PASS a minute
### 2025-05-03
#### PASS a minute
### 2025-05-04
#### PASS a minute
### 2025-05-05
#### PASS a minute
### 2025-05-06
#### PASS a minute
### 2025-05-07
#### PASS a minute
### 2025-05-08
#### PASS a minute
### 2025-05-09
#### PASS a minute
### 2025-05-10
#### PASS a minute
### 2025-05-11
#### FAIL 16 seconds
```
2025-05-11T00:29:59.9927749Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-05-11T00:29:59.9943764Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-05-11T00:29:59.9984735Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-05-11T00:29:59.9985350Z     resource_federated_database_instance_test.go:80: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:59.9985799Z         
2025-05-11T00:29:59.9986200Z         Error: error creating project: test-acc-tf-p-2586918142124429698
2025-05-11T00:29:59.9986541Z         
2025-05-11T00:29:59.9986837Z           with mongodbatlas_project.test,
2025-05-11T00:29:59.9987417Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:59.9987958Z           68: resource "mongodbatlas_project" "test" {
2025-05-11T00:29:59.9988245Z         
2025-05-11T00:29:59.9988695Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:59.9989085Z         type
2025-05-11T00:29:59.9994701Z   
2025-05-11T00:30:00.0010261Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (16.10s)
```
### 2025-05-12
#### PASS a minute
### 2025-05-13
#### PASS a minute
#### PASS a minute
### 2025-05-14
#### PASS a minute
### 2025-05-15
#### PASS a minute
### 2025-05-16
#### PASS a minute
### 2025-05-17
#### PASS a minute
### 2025-05-18
#### PASS a minute
### 2025-05-19
#### PASS a minute
### 2025-05-20
#### PASS a minute
### 2025-05-21
#### PASS a minute
### 2025-05-22
#### PASS a minute
### 2025-05-23
#### PASS a minute
### 2025-05-24
#### PASS a minute
### 2025-05-25
#### PASS a minute
### 2025-05-26
#### PASS a minute
### 2025-05-27
#### PASS a minute
### 2025-05-28
#### PASS a minute
#### PASS a minute
### 2025-05-29
#### PASS a minute
### 2025-05-30
#### PASS a minute
### 2025-05-31
#### PASS a minute
### 2025-06-01
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
### 2025-06-02
#### PASS a minute
#### PASS a minute
#### PASS a minute
### 2025-06-03
#### PASS a minute
### 2025-06-04
#### PASS a minute
### 2025-06-05
#### FAIL 15 seconds
```
2025-06-05T00:32:20.9994960Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-06-05T00:32:21.0000128Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-06-05T00:32:21.0043579Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-06-05T00:32:21.0044200Z     resource_federated_database_instance_test.go:80: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:32:21.0044650Z         
2025-06-05T00:32:21.0045054Z         Error: error creating project: test-acc-tf-p-65225268358274724
2025-06-05T00:32:21.0045397Z         
2025-06-05T00:32:21.0045696Z           with mongodbatlas_project.test,
2025-06-05T00:32:21.0046286Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-06-05T00:32:21.0046827Z           68: resource "mongodbatlas_project" "test" {
2025-06-05T00:32:21.0047116Z         
2025-06-05T00:32:21.0047576Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:32:21.0048192Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:32:21.0048761Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:21.0059344Z   
2025-06-05T00:32:21.0081705Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (15.98s)
```
### 2025-06-06
#### PASS a minute
### 2025-06-07
#### PASS a minute
### 2025-06-08
#### PASS a minute
### 2025-06-09
#### PASS a minute
### 2025-06-10
#### PASS a minute
### 2025-06-11
#### PASS a minute
#### PASS a minute
### 2025-06-12
#### PASS a minute
### 2025-06-13
#### PASS a minute
### 2025-06-14
#### PASS a minute
### 2025-06-15
#### PASS a minute
### 2025-06-16
#### PASS a minute
### 2025-06-17
#### PASS a minute
### 2025-06-18
#### PASS a minute
### 2025-06-19
#### PASS a minute
### 2025-06-20
#### PASS a minute
### 2025-06-21
#### PASS a minute
### 2025-06-22
#### PASS a minute
### 2025-06-23
#### PASS a minute
### 2025-06-24
#### PASS a minute
### 2025-06-25
#### PASS a minute
### 2025-06-26
#### PASS a minute
### 2025-06-27
#### PASS a minute
### 2025-06-28
#### PASS a minute
### 2025-06-29
#### FAIL a minute
```
2025-06-29T00:47:14.7830426Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-06-29T00:47:14.7834266Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-06-29T00:47:14.7898359Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2025-06-29T00:47:14.7899144Z     resource_federated_database_instance_test.go:80: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:47:14.7899634Z         
2025-06-29T00:47:14.7899996Z         Error: error when getting project properties after create
2025-06-29T00:47:14.7900309Z         
2025-06-29T00:47:14.7900592Z           with mongodbatlas_project.test,
2025-06-29T00:47:14.7901160Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-06-29T00:47:14.7901670Z           68: resource "mongodbatlas_project" "test" {
2025-06-29T00:47:14.7901949Z         
2025-06-29T00:47:14.7902373Z         error getting project (6860899456291349dce6d1e0): error getting project's
2025-06-29T00:47:14.7902804Z         limits (6860899456291349dce6d1e0):
2025-06-29T00:47:14.7903469Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860899456291349dce6d1e0/limits
2025-06-29T00:47:14.7904117Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:47:14.7904676Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:47:14.7905051Z         BadRequestDetail: 
2025-06-29T00:47:14.7905364Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (94.57s)
```
### 2025-06-30
#### PASS a minute
### 2025-07-01
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
#### PASS a minute
### 2025-07-02
#### PASS a minute
### 2025-07-03
#### PASS a minute
### 2025-07-04
#### PASS a minute
### 2025-07-05
#### PASS a minute
### 2025-07-06
#### FAIL 2 minutes
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
### 2025-07-07
#### PASS a minute
### 2025-07-08
#### PASS a minute
### 2025-07-09
#### PASS a minute