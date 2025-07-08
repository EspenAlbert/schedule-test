# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 52 seconds
### 2025-07-03
#### PASS 55 seconds
### 2025-07-04
#### PASS 55 seconds
### 2025-07-05
#### PASS 54 seconds
### 2025-07-06
#### FAIL 2 minutes
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
### 2025-07-07
#### PASS 52 seconds
### 2025-07-08
#### PASS 52 seconds