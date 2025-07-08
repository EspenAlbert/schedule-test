# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAWS_basic Test Details
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
### 2025-07-08
#### PASS a minute