# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAWS_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS a minute
```
2025-07-01T08:35:29.4541622Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-01T08:35:29.4543096Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-1499473400016305435
2025-07-01T08:35:29.4550198Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-01T08:35:29.4563223Z --- PASS: TestAccCloudProviderAccessAuthorizationAWS_basic (119.33s)
```
### 2025-07-02
#### PASS a minute
```
2025-07-02T00:30:40.8572269Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-02T00:30:40.8573612Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-7015950631187793073
2025-07-02T00:30:40.8580005Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-02T00:30:40.8590621Z --- PASS: TestAccCloudProviderAccessAuthorizationAWS_basic (108.53s)
```
### 2025-07-03
#### PASS a minute
```
2025-07-03T00:31:22.4156233Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-03T00:31:22.4166461Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-5138735624319223592
2025-07-03T00:31:22.4174130Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-03T00:31:22.4193587Z --- PASS: TestAccCloudProviderAccessAuthorizationAWS_basic (109.33s)
```
### 2025-07-04
#### PASS a minute
```
2025-07-04T00:30:47.2344664Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-04T00:30:47.2348363Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-7500676685557754027
2025-07-04T00:30:47.2355614Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-04T00:30:47.2374242Z --- PASS: TestAccCloudProviderAccessAuthorizationAWS_basic (107.74s)
```
### 2025-07-05
#### PASS a minute
```
2025-07-05T00:29:58.2577229Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-05T00:29:58.2579452Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-2543361524669446922
2025-07-05T00:29:58.2585319Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-05T00:29:58.2596190Z --- PASS: TestAccCloudProviderAccessAuthorizationAWS_basic (110.42s)
```
### 2025-07-06
#### FAIL a minute
```
2025-07-06T00:33:17.8149666Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-06T00:33:17.8151415Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-2455723482815305701
2025-07-06T00:33:17.8175271Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-06T00:33:17.8218159Z === NAME  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-06T00:33:17.8219380Z     resource_cloud_provider_access_authorization_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:33:17.8220275Z         
2025-07-06T00:33:17.8223334Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c3fd7267b5775b682780/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-06T00:33:17.8225624Z         
2025-07-06T00:33:17.8226344Z           with mongodbatlas_federated_database_instance.test,
2025-07-06T00:33:17.8227603Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-06T00:33:17.8228756Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-06T00:33:17.8229324Z         
2025-07-06T00:33:17.8229833Z --- FAIL: TestAccCloudProviderAccessAuthorizationAWS_basic (75.33s)
```
### 2025-07-07
#### PASS a minute
```
2025-07-07T00:33:18.3353524Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-07T00:33:18.3359712Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-6621859748495566020
2025-07-07T00:33:18.3397399Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-07T00:33:18.3415542Z --- PASS: TestAccCloudProviderAccessAuthorizationAWS_basic (107.44s)
```
### 2025-07-08
#### PASS a minute
```
2025-07-08T00:31:20.9879850Z === RUN   TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-08T00:31:20.9886285Z     resource_cloud_provider_access_authorization_test.go:17: Creating execution project: test-acc-tf-p-8172475691283656716
2025-07-08T00:31:20.9893386Z === CONT  TestAccCloudProviderAccessAuthorizationAWS_basic
2025-07-08T00:31:20.9911491Z --- PASS: TestAccCloudProviderAccessAuthorizationAWS_basic (114.96s)
```