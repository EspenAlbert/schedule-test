# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS a minute
```
2025-07-01T08:46:24.2984689Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-07-01T08:46:24.2989035Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-07-01T08:46:24.3008572Z --- PASS: TestAccFederatedDatabaseInstance_s3bucket (65.01s)
```
### 2025-07-02
#### PASS a minute
```
2025-07-02T00:41:47.8799570Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-07-02T00:41:47.8808120Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-07-02T00:41:47.8834686Z --- PASS: TestAccFederatedDatabaseInstance_s3bucket (64.23s)
```
### 2025-07-03
#### PASS a minute
```
2025-07-03T00:43:17.6276654Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-07-03T00:43:17.6281948Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-07-03T00:43:17.6296814Z --- PASS: TestAccFederatedDatabaseInstance_s3bucket (67.29s)
```
### 2025-07-04
#### PASS a minute
```
2025-07-04T00:42:31.4232929Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-07-04T00:42:31.4240985Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-07-04T00:42:31.4268924Z --- PASS: TestAccFederatedDatabaseInstance_s3bucket (67.25s)
```
### 2025-07-05
#### PASS a minute
```
2025-07-05T00:40:35.5951789Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-07-05T00:40:35.5956772Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-07-05T00:40:35.5974303Z --- PASS: TestAccFederatedDatabaseInstance_s3bucket (67.81s)
```
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
```
2025-07-07T00:45:41.9631386Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-07-07T00:45:41.9637056Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-07-07T00:45:41.9652582Z --- PASS: TestAccFederatedDatabaseInstance_s3bucket (64.17s)
```
### 2025-07-08
#### PASS a minute
```
2025-07-08T00:43:40.0038652Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2025-07-08T00:43:40.0046397Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2025-07-08T00:43:40.0071319Z --- PASS: TestAccFederatedDatabaseInstance_s3bucket (65.75s)
```