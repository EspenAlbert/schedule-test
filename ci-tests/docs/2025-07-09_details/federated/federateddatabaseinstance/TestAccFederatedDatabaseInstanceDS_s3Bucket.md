# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 108) FAIL(x 5)
Success rate: 95.58%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 16.03s
2025-06-05 00:32 | dev | 16.09s
2025-06-22 00:46 | qa | 48.01s
2025-06-29 00:47 | qa | 68.08s
2025-07-06 00:46 | qa | 157.01s

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
#### PASS 51 seconds
### 2025-04-12
#### PASS 53 seconds
### 2025-04-13
#### PASS 47 seconds
### 2025-04-14
#### PASS 55 seconds
### 2025-04-15
#### PASS 51 seconds
### 2025-04-16
#### PASS 53 seconds
#### PASS 57 seconds
### 2025-04-17
#### PASS 51 seconds
### 2025-04-18
#### PASS 51 seconds
### 2025-04-19
#### PASS 51 seconds
### 2025-04-20
#### PASS 51 seconds
### 2025-04-21
#### PASS 52 seconds
### 2025-04-22
#### PASS 55 seconds
### 2025-04-23
#### PASS 51 seconds
### 2025-04-24
#### PASS 55 seconds
### 2025-04-25
#### PASS 56 seconds
### 2025-04-26
#### PASS a minute
### 2025-04-27
#### PASS 58 seconds
### 2025-04-28
#### PASS 54 seconds
### 2025-04-29
#### PASS 55 seconds
### 2025-04-30
#### PASS 53 seconds
#### PASS 59 seconds
### 2025-05-01
#### PASS 53 seconds
#### PASS 55 seconds
#### PASS 54 seconds
#### PASS 52 seconds
#### PASS 51 seconds
#### PASS 53 seconds
#### PASS a minute
### 2025-05-02
#### PASS 53 seconds
### 2025-05-03
#### PASS 56 seconds
### 2025-05-04
#### PASS 53 seconds
### 2025-05-05
#### PASS 51 seconds
### 2025-05-06
#### PASS 55 seconds
### 2025-05-07
#### PASS 52 seconds
### 2025-05-08
#### PASS 51 seconds
### 2025-05-09
#### PASS 51 seconds
### 2025-05-10
#### PASS 57 seconds
### 2025-05-11
#### FAIL 16 seconds
```
2025-05-11T00:29:59.9923031Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-05-11T00:29:59.9942693Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-05-11T00:30:00.0005474Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-05-11T00:30:00.0006100Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:30:00.0006545Z         
2025-05-11T00:30:00.0006952Z         Error: error creating project: test-acc-tf-p-8799508632312682197
2025-05-11T00:30:00.0007290Z         
2025-05-11T00:30:00.0007577Z           with mongodbatlas_project.test,
2025-05-11T00:30:00.0008201Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:00.0008738Z           68: resource "mongodbatlas_project" "test" {
2025-05-11T00:30:00.0009020Z         
2025-05-11T00:30:00.0009473Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:00.0009856Z         type
2025-05-11T00:30:00.0011375Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (16.31s)
```
### 2025-05-12
#### PASS 52 seconds
### 2025-05-13
#### PASS 52 seconds
#### PASS 56 seconds
### 2025-05-14
#### PASS 57 seconds
### 2025-05-15
#### PASS 55 seconds
### 2025-05-16
#### PASS 49 seconds
### 2025-05-17
#### PASS 51 seconds
### 2025-05-18
#### PASS 48 seconds
### 2025-05-19
#### PASS 52 seconds
### 2025-05-20
#### PASS 51 seconds
### 2025-05-21
#### PASS 52 seconds
### 2025-05-22
#### PASS 53 seconds
### 2025-05-23
#### PASS 53 seconds
### 2025-05-24
#### PASS 50 seconds
### 2025-05-25
#### PASS 50 seconds
### 2025-05-26
#### PASS 58 seconds
### 2025-05-27
#### PASS 51 seconds
### 2025-05-28
#### PASS 54 seconds
#### PASS 50 seconds
### 2025-05-29
#### PASS 54 seconds
### 2025-05-30
#### PASS 52 seconds
### 2025-05-31
#### PASS 53 seconds
### 2025-06-01
#### PASS 50 seconds
#### PASS 53 seconds
#### PASS 56 seconds
#### PASS 51 seconds
#### PASS 54 seconds
#### PASS 51 seconds
### 2025-06-02
#### PASS 51 seconds
#### PASS 54 seconds
#### PASS a minute
### 2025-06-03
#### PASS 53 seconds
### 2025-06-04
#### PASS 51 seconds
### 2025-06-05
#### FAIL 16 seconds
```
2025-06-05T00:32:20.9989390Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-05T00:32:20.9998667Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-05T00:32:21.0075927Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-05T00:32:21.0076545Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:32:21.0077006Z         
2025-06-05T00:32:21.0077410Z         Error: error creating project: test-acc-tf-p-3782528126205608586
2025-06-05T00:32:21.0077758Z         
2025-06-05T00:32:21.0078051Z           with mongodbatlas_project.test,
2025-06-05T00:32:21.0078646Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-06-05T00:32:21.0079179Z           68: resource "mongodbatlas_project" "test" {
2025-06-05T00:32:21.0079472Z         
2025-06-05T00:32:21.0079934Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:32:21.0080556Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:32:21.0081116Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:21.0082612Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (16.94s)
```
### 2025-06-06
#### PASS 54 seconds
### 2025-06-07
#### PASS 55 seconds
### 2025-06-08
#### PASS 49 seconds
### 2025-06-09
#### PASS 56 seconds
### 2025-06-10
#### PASS 50 seconds
### 2025-06-11
#### PASS 53 seconds
#### PASS 56 seconds
### 2025-06-12
#### PASS 55 seconds
### 2025-06-13
#### PASS 50 seconds
### 2025-06-14
#### PASS 52 seconds
### 2025-06-15
#### PASS 51 seconds
### 2025-06-16
#### PASS 55 seconds
### 2025-06-17
#### PASS 53 seconds
### 2025-06-18
#### PASS 54 seconds
### 2025-06-19
#### PASS 59 seconds
### 2025-06-20
#### PASS 57 seconds
### 2025-06-21
#### PASS 58 seconds
### 2025-06-22
#### FAIL 48 seconds
```
2025-06-22T00:46:59.2951242Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-22T00:46:59.2960878Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-22T00:46:59.3038567Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-22T00:46:59.3039219Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:46:59.3039691Z         
2025-06-22T00:46:59.3040069Z         Error: error when getting project properties after create
2025-06-22T00:46:59.3040396Z         
2025-06-22T00:46:59.3040683Z           with mongodbatlas_project.test,
2025-06-22T00:46:59.3041267Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-06-22T00:46:59.3041789Z           68: resource "mongodbatlas_project" "test" {
2025-06-22T00:46:59.3042072Z         
2025-06-22T00:46:59.3042692Z         error getting project (68574ef7ab82446d9bfb0c50): error getting project's
2025-06-22T00:46:59.3043141Z         limits (68574ef7ab82446d9bfb0c50):
2025-06-22T00:46:59.3043704Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef7ab82446d9bfb0c50/limits
2025-06-22T00:46:59.3044682Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:46:59.3045251Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:46:59.3045632Z         BadRequestDetail: 
2025-06-22T00:46:59.3045968Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (48.10s)
```
### 2025-06-23
#### PASS 53 seconds
### 2025-06-24
#### PASS 50 seconds
### 2025-06-25
#### PASS 58 seconds
### 2025-06-26
#### PASS 51 seconds
### 2025-06-27
#### PASS 55 seconds
### 2025-06-28
#### PASS 51 seconds
### 2025-06-29
#### FAIL a minute
```
2025-06-29T00:47:14.7826441Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-29T00:47:14.7832938Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-29T00:47:14.7860512Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-29T00:47:14.7861135Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-06-29T00:47:14.7861575Z         
2025-06-29T00:47:14.7863202Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860899449709c3a5a3c9364/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-29T00:47:14.7864535Z         
2025-06-29T00:47:14.7864898Z           with mongodbatlas_federated_database_instance.test,
2025-06-29T00:47:14.7865600Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-06-29T00:47:14.7866261Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-06-29T00:47:14.7866596Z         
2025-06-29T00:47:14.7866874Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (68.81s)
```
### 2025-06-30
#### PASS 51 seconds
### 2025-07-01
#### PASS 53 seconds
#### PASS 52 seconds
#### PASS 57 seconds
#### PASS 49 seconds
#### PASS 52 seconds
#### PASS 56 seconds
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
### 2025-07-09
#### PASS 58 seconds