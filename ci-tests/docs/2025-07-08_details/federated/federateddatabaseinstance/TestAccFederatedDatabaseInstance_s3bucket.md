# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
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