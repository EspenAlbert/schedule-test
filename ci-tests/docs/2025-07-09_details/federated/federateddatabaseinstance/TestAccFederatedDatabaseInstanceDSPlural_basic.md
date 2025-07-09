# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 109) FAIL(x 4)
Success rate: 96.46%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 16.03s
2025-06-05 00:32 | dev | 16.09s
2025-06-29 00:47 | qa | 123.09s
2025-07-06 00:46 | qa | 164.05s

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
#### PASS 52 seconds
### 2025-04-13
#### PASS 47 seconds
### 2025-04-14
#### PASS 55 seconds
### 2025-04-15
#### PASS 53 seconds
### 2025-04-16
#### PASS 52 seconds
#### PASS 56 seconds
### 2025-04-17
#### PASS 51 seconds
### 2025-04-18
#### PASS 50 seconds
### 2025-04-19
#### PASS 51 seconds
### 2025-04-20
#### PASS 51 seconds
### 2025-04-21
#### PASS 53 seconds
### 2025-04-22
#### PASS 55 seconds
### 2025-04-23
#### PASS 50 seconds
### 2025-04-24
#### PASS 55 seconds
### 2025-04-25
#### PASS 55 seconds
### 2025-04-26
#### PASS a minute
### 2025-04-27
#### PASS 58 seconds
### 2025-04-28
#### PASS 53 seconds
### 2025-04-29
#### PASS 53 seconds
### 2025-04-30
#### PASS 53 seconds
#### PASS 58 seconds
### 2025-05-01
#### PASS 53 seconds
#### PASS 56 seconds
#### PASS 55 seconds
#### PASS 50 seconds
#### PASS 52 seconds
#### PASS 55 seconds
#### PASS a minute
### 2025-05-02
#### PASS 53 seconds
### 2025-05-03
#### PASS 57 seconds
### 2025-05-04
#### PASS 55 seconds
### 2025-05-05
#### PASS 52 seconds
### 2025-05-06
#### PASS 55 seconds
### 2025-05-07
#### PASS 52 seconds
### 2025-05-08
#### PASS 52 seconds
### 2025-05-09
#### PASS 51 seconds
### 2025-05-10
#### PASS 57 seconds
### 2025-05-11
#### FAIL 16 seconds
```
2025-05-11T00:29:59.9924444Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-05-11T00:29:59.9944154Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-05-11T00:29:59.9952839Z    test_name=TestAccFederatedDatabaseInstance_basic test_terraform_path=/home/runner/work/_temp/6afa7ff8-9247-42f4-acf4-7ebdc89cb69a/terraform
2025-05-11T00:29:59.9994968Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-05-11T00:29:59.9995607Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:29:59.9996062Z         
2025-05-11T00:29:59.9996461Z         Error: error creating project: test-acc-tf-p-8363550823379018520
2025-05-11T00:29:59.9996797Z         
2025-05-11T00:29:59.9997204Z           with mongodbatlas_project.test,
2025-05-11T00:29:59.9997786Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:59.9998316Z           68: resource "mongodbatlas_project" "test" {
2025-05-11T00:29:59.9998594Z         
2025-05-11T00:29:59.9999039Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:59.9999463Z         type
2025-05-11T00:30:00.0004426Z    test_name=TestAccFederatedDatabaseInstanceDS_s3Bucket test_terraform_path=/home/runner/work/_temp/6afa7ff8-9247-42f4-acf4-7ebdc89cb69a/terraform test_working_directory=/tmp/plugintest1681133883 test_step_number=1
2025-05-11T00:30:00.0010913Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (16.27s)
```
### 2025-05-12
#### PASS 52 seconds
### 2025-05-13
#### PASS 52 seconds
#### PASS 55 seconds
### 2025-05-14
#### PASS 58 seconds
### 2025-05-15
#### PASS 53 seconds
### 2025-05-16
#### PASS 50 seconds
### 2025-05-17
#### PASS 49 seconds
### 2025-05-18
#### PASS 50 seconds
### 2025-05-19
#### PASS 51 seconds
### 2025-05-20
#### PASS 51 seconds
### 2025-05-21
#### PASS 53 seconds
### 2025-05-22
#### PASS 53 seconds
### 2025-05-23
#### PASS 54 seconds
### 2025-05-24
#### PASS 52 seconds
### 2025-05-25
#### PASS 50 seconds
### 2025-05-26
#### PASS 56 seconds
### 2025-05-27
#### PASS 53 seconds
### 2025-05-28
#### PASS 54 seconds
#### PASS 50 seconds
### 2025-05-29
#### PASS 52 seconds
### 2025-05-30
#### PASS 52 seconds
### 2025-05-31
#### PASS 53 seconds
### 2025-06-01
#### PASS 49 seconds
#### PASS 52 seconds
#### PASS 55 seconds
#### PASS 51 seconds
#### PASS 53 seconds
#### PASS 51 seconds
### 2025-06-02
#### PASS 51 seconds
#### PASS 55 seconds
#### PASS a minute
### 2025-06-03
#### PASS 53 seconds
### 2025-06-04
#### PASS 51 seconds
### 2025-06-05
#### FAIL 16 seconds
```
2025-06-05T00:32:20.9990653Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2025-06-05T00:32:21.0000517Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-06-05T00:32:21.0011822Z   
2025-06-05T00:32:21.0059631Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2025-06-05T00:32:21.0060280Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:32:21.0060743Z         
2025-06-05T00:32:21.0061275Z         Error: error creating project: test-acc-tf-p-554697102633659334
2025-06-05T00:32:21.0061795Z         
2025-06-05T00:32:21.0062090Z           with mongodbatlas_project.test,
2025-06-05T00:32:21.0062683Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_project" "test":
2025-06-05T00:32:21.0063216Z           68: resource "mongodbatlas_project" "test" {
2025-06-05T00:32:21.0063508Z         
2025-06-05T00:32:21.0063960Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:32:21.0064580Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:32:21.0065162Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:21.0075243Z    test_name=TestAccFederatedDatabaseInstanceDS_s3Bucket test_terraform_path=/home/runner/work/_temp/26f62576-d08f-4449-8329-0f8596777e5a/terraform
2025-06-05T00:32:21.0082154Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (16.86s)
```
### 2025-06-06
#### PASS 55 seconds
### 2025-06-07
#### PASS 56 seconds
### 2025-06-08
#### PASS 50 seconds
### 2025-06-09
#### PASS 55 seconds
### 2025-06-10
#### PASS 48 seconds
### 2025-06-11
#### PASS 51 seconds
#### PASS 56 seconds
### 2025-06-12
#### PASS 55 seconds
### 2025-06-13
#### PASS 49 seconds
### 2025-06-14
#### PASS 52 seconds
### 2025-06-15
#### PASS 51 seconds
### 2025-06-16
#### PASS 55 seconds
### 2025-06-17
#### PASS 54 seconds
### 2025-06-18
#### PASS 54 seconds
### 2025-06-19
#### PASS 55 seconds
### 2025-06-20
#### PASS 59 seconds
### 2025-06-21
#### PASS 57 seconds
### 2025-06-22
#### PASS a minute
### 2025-06-23
#### PASS 54 seconds
### 2025-06-24
#### PASS 51 seconds
### 2025-06-25
#### PASS 57 seconds
### 2025-06-26
#### PASS 51 seconds
### 2025-06-27
#### PASS 55 seconds
### 2025-06-28
#### PASS 51 seconds
### 2025-06-29
#### FAIL 2 minutes
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
### 2025-06-30
#### PASS 50 seconds
### 2025-07-01
#### PASS 53 seconds
#### PASS 53 seconds
#### PASS 58 seconds
#### PASS 50 seconds
#### PASS 52 seconds
#### PASS 56 seconds
### 2025-07-02
#### PASS 51 seconds
### 2025-07-03
#### PASS 56 seconds
### 2025-07-04
#### PASS 56 seconds
### 2025-07-05
#### PASS 54 seconds
### 2025-07-06
#### FAIL 2 minutes
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
### 2025-07-07
#### PASS 52 seconds
### 2025-07-08
#### PASS 51 seconds
### 2025-07-09
#### PASS 58 seconds