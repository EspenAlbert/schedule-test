# federated/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 57 seconds
```
2025-06-20T00:41:29.7101739Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-20T00:41:29.7111226Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-20T00:41:29.7127145Z --- PASS: TestAccFederatedDatabaseInstanceDS_s3Bucket (57.87s)
```
### 2025-06-21
#### PASS 58 seconds
```
2025-06-21T00:42:51.6792205Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-21T00:42:51.6801624Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-21T00:42:51.6820827Z --- PASS: TestAccFederatedDatabaseInstanceDS_s3Bucket (58.72s)
```
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
```
2025-06-23T00:45:10.8971019Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-23T00:45:10.8979020Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-23T00:45:10.8995548Z --- PASS: TestAccFederatedDatabaseInstanceDS_s3Bucket (53.81s)
```
### 2025-06-24
#### PASS 50 seconds
```
2025-06-24T00:41:55.7862503Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-24T00:41:55.7872506Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-24T00:41:55.7890612Z --- PASS: TestAccFederatedDatabaseInstanceDS_s3Bucket (50.48s)
```
### 2025-06-25
#### PASS 58 seconds
```
2025-06-25T00:43:35.3851835Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-25T00:43:35.3862728Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-25T00:43:35.3891740Z --- PASS: TestAccFederatedDatabaseInstanceDS_s3Bucket (58.32s)
```
### 2025-06-26
#### PASS 51 seconds
```
2025-06-26T00:43:16.8355949Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-26T00:43:16.8364176Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-06-26T00:43:16.8381637Z --- PASS: TestAccFederatedDatabaseInstanceDS_s3Bucket (51.22s)
```