# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_azureCloudProviderConfig Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 5)
Success rate: 88.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:47](#error-2025-09-07t0047560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1c2df5af52d2d4d3b31/dataFederation | qa | flaky_500 | 36.07s
[2025-09-08 09:49](#error-2025-09-08t0949220000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a30cddbf4f6e498ceb/dataFederation | qa | flaky_500 | 34.06s
[2025-09-14 00:41](#error-2025-09-14t0041180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c34d444485797b1f1ef/dataFederation | qa | flaky_500 | 37.06s
[2025-09-15 06:33](#error-2025-09-15t0633000000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03efe60767b7f9af64c/dataFederation | qa | flaky_500 | 36.01s
[2025-09-25 00:41](#error-2025-09-25t0041580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68d48c3f8256687520041c11/cloudProviderAccess | dev | flaky_500 | 5.09s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds
- 2025-09-05 PASS 11 seconds
- 2025-09-06 PASS 12 seconds
- 2025-09-07

### Error 2025-09-07T00:47:56+00:00
```
2025-09-07T00:47:56.6567361Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-07T00:47:56.6568794Z     resource_federated_database_instance_test.go:109: Creating execution project: test-acc-tf-p-570913931895575296
2025-09-07T00:47:56.6573011Z === CONT  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-07T00:47:56.6602346Z === NAME  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-07T00:47:56.6603020Z     resource_federated_database_instance_test.go:121: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:47:56.6603466Z         
2025-09-07T00:47:56.6605210Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1c2df5af52d2d4d3b31/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-07T00:47:56.6606364Z         
2025-09-07T00:47:56.6606724Z           with mongodbatlas_federated_database_instance.test,
2025-09-07T00:47:56.6607459Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-07T00:47:56.6608184Z           23: resource "mongodbatlas_federated_database_instance" "test" {
2025-09-07T00:47:56.6608520Z         
2025-09-07T00:47:56.6608854Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (36.66s)
```

- 2025-09-08
  - PASS 11 seconds
  - FAIL 34 seconds

### Error 2025-09-08T09:49:22+00:00
```
2025-09-08T09:49:22.3705907Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-08T09:49:22.3707280Z     resource_federated_database_instance_test.go:109: Creating execution project: test-acc-tf-p-5698271588890295569
2025-09-08T09:49:22.3713012Z === CONT  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-08T09:49:22.3739917Z === NAME  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-08T09:49:22.3741237Z     resource_federated_database_instance_test.go:121: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:49:22.3742249Z         
2025-09-08T09:49:22.3745316Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a30cddbf4f6e498ceb/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-08T09:49:22.3747401Z         
2025-09-08T09:49:22.3748075Z           with mongodbatlas_federated_database_instance.test,
2025-09-08T09:49:22.3749393Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-08T09:49:22.3751274Z           23: resource "mongodbatlas_federated_database_instance" "test" {
2025-09-08T09:49:22.3751892Z         
2025-09-08T09:49:22.3752513Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (34.57s)
```

  - PASS 12 seconds
- 2025-09-09 PASS 13 seconds
- 2025-09-10 PASS 9 seconds
- 2025-09-11 PASS 11 seconds
- 2025-09-12 PASS 12 seconds
- 2025-09-13 PASS 11 seconds
- 2025-09-14

### Error 2025-09-14T00:41:18+00:00
```
2025-09-14T00:41:18.3206281Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-14T00:41:18.3208145Z     resource_federated_database_instance_test.go:109: Creating execution project: test-acc-tf-p-9005277339983989564
2025-09-14T00:41:18.3216825Z === CONT  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-14T00:41:18.3258989Z === NAME  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-14T00:41:18.3259700Z     resource_federated_database_instance_test.go:121: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:41:18.3260176Z         
2025-09-14T00:41:18.3261885Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c34d444485797b1f1ef/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-14T00:41:18.3263200Z         
2025-09-14T00:41:18.3263751Z           with mongodbatlas_federated_database_instance.test,
2025-09-14T00:41:18.3264492Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-14T00:41:18.3265183Z           23: resource "mongodbatlas_federated_database_instance" "test" {
2025-09-14T00:41:18.3265539Z         
2025-09-14T00:41:18.3265898Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (37.62s)
```

- 2025-09-15
  - PASS 11 seconds
  - FAIL 36 seconds

### Error 2025-09-15T06:33:00+00:00
```
2025-09-15T06:33:00.5998027Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-15T06:33:00.5999342Z     resource_federated_database_instance_test.go:109: Creating execution project: test-acc-tf-p-4406367908982058314
2025-09-15T06:33:00.6005061Z === CONT  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-15T06:33:00.6022063Z === NAME  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-15T06:33:00.6022857Z     resource_federated_database_instance_test.go:121: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:33:00.6023315Z         
2025-09-15T06:33:00.6025291Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03efe60767b7f9af64c/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-15T06:33:00.6026920Z         
2025-09-15T06:33:00.6027408Z           with mongodbatlas_federated_database_instance.test,
2025-09-15T06:33:00.6028373Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_federated_database_instance" "test":
2025-09-15T06:33:00.6029187Z           23: resource "mongodbatlas_federated_database_instance" "test" {
2025-09-15T06:33:00.6029630Z         
2025-09-15T06:33:00.6029983Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (36.06s)
```

- 2025-09-16 PASS 13 seconds
- 2025-09-17 PASS 13 seconds
- 2025-09-18 PASS 8 seconds
- 2025-09-19 PASS 11 seconds
- 2025-09-20 PASS 13 seconds
- 2025-09-21 PASS 11 seconds
- 2025-09-22 PASS 11 seconds
- 2025-09-23 PASS 12 seconds
- 2025-09-24 PASS 10 seconds
- 2025-09-25

### Error 2025-09-25T00:41:58+00:00
```
2025-09-25T00:41:58.2031154Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-25T00:41:58.2032662Z     resource_federated_database_instance_test.go:109: Creating execution project: test-acc-tf-p-773831973686750549
2025-09-25T00:41:58.2066968Z === CONT  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-25T00:41:58.2088867Z === NAME  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-09-25T00:41:58.2090284Z     resource_federated_database_instance_test.go:121: Step 1/2 error: Error running apply: exit status 1
2025-09-25T00:41:58.2091330Z         
2025-09-25T00:41:58.2094343Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d48c3f8256687520041c11/cloudProviderAccess POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-09-25T00:41:58.2096330Z         
2025-09-25T00:41:58.2097026Z           with mongodbatlas_cloud_provider_access_setup.test,
2025-09-25T00:41:58.2098369Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2025-09-25T00:41:58.2099832Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2025-09-25T00:41:58.2100458Z         
2025-09-25T00:41:58.2101054Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (5.94s)
```

- 2025-09-26 PASS 10 seconds
- 2025-09-27 PASS 12 seconds
- 2025-09-28 PASS 11 seconds
- 2025-09-29 PASS 10 seconds
- 2025-09-30
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 13 seconds
- 2025-10-01
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 13 seconds
  - PASS 13 seconds
- 2025-10-02 PASS 13 seconds