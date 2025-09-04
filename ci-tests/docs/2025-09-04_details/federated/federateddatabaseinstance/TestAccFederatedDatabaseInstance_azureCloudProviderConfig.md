# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_azureCloudProviderConfig Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:46](#error-2025-08-24t0046570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d274192cd1cc589b1f9/dataFederation | qa | flaky_500 | 125.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 12 seconds
- 2025-08-07 PASS 48 seconds
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 12 seconds
- 2025-08-10 PASS 28 seconds
- 2025-08-11 PASS 10 seconds
- 2025-08-12 PASS 10 seconds
- 2025-08-13 PASS 7 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15 PASS 9 seconds
- 2025-08-16 PASS 9 seconds
- 2025-08-17 PASS 8 seconds
- 2025-08-18 PASS 10 seconds
- 2025-08-19 PASS 11 seconds
- 2025-08-20
  - PASS 13 seconds
  - PASS 8 seconds
- 2025-08-21 PASS 9 seconds
- 2025-08-22 PASS 12 seconds
- 2025-08-23 PASS 11 seconds
- 2025-08-24

### Error 2025-08-24T00:46:57+00:00
```
2025-08-24T00:46:57.7636801Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-08-24T00:46:57.7638267Z     resource_federated_database_instance_test.go:109: Creating execution project: test-acc-tf-p-2923088670703948009
2025-08-24T00:46:57.7672295Z === CONT  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-08-24T00:46:57.7879974Z === NAME  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-08-24T00:46:57.7881193Z     resource_federated_database_instance_test.go:121: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:46:57.7881988Z         
2025-08-24T00:46:57.7884985Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d274192cd1cc589b1f9/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-24T00:46:57.7887195Z         
2025-08-24T00:46:57.7887872Z           with mongodbatlas_federated_database_instance.test,
2025-08-24T00:46:57.7889413Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_federated_database_instance" "test":
2025-08-24T00:46:57.7890638Z           23: resource "mongodbatlas_federated_database_instance" "test" {
2025-08-24T00:46:57.7891237Z         
2025-08-24T00:46:57.7911875Z    test_working_directory=/tmp/plugintest667904204 test_name=TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-08-24T00:46:57.7913362Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-24T00:46:57.7914115Z         
2025-08-24T00:46:57.7918984Z         Error: error deleting cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d274192cd1cc589b1f9/cloudProviderAccess/AZURE/68aa5d2d4192cd1cc589c2d7 DELETE: HTTP 400 Bad Request (Error code: "AZURE_SERVICE_PRINCIPAL_IN_USE") Detail: Cannot remove the Azure Service Principal because it is still in use. Reason: Bad Request. Params: [Cannot remove the Azure Service Principal (68aa5d2d4192cd1cc589c2d7) because it is still in use.], BadRequestDetail: 
2025-08-24T00:46:57.7921922Z         
2025-08-24T00:46:57.7922548Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (125.63s)
```

- 2025-08-25 PASS 11 seconds
- 2025-08-26 PASS 11 seconds
- 2025-08-27 PASS 21 seconds
- 2025-08-28 PASS 13 seconds
- 2025-08-29 PASS 8 seconds
- 2025-08-30 PASS 11 seconds
- 2025-08-31 PASS 10 seconds
- 2025-09-01
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 10 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds