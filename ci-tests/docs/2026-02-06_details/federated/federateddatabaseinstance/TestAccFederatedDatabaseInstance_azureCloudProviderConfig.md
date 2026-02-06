# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_azureCloudProviderConfig Test Details
# Found 35 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-09 00:51](#error-2026-01-09t0051170000) | API Error CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/{groupId}/cloudProviderAccess | dev | real_test_failure | 11.03s
[2026-01-31 03:35](#error-2026-01-31t0335480000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/697d4e3dff188f1e45c4534d/cloudProviderAccess | dev |  | 10.07s
[2026-02-02 03:39](#error-2026-02-02t0339080000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/697ff205197cc66080b017c1/cloudProviderAccess | dev |  | 11.09s
[2026-02-03 00:40](#error-2026-02-03t0040270000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/698143b2b2e54ee9958ff9cf/cloudProviderAccess | dev |  | 12.02s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 10 seconds
- 2026-01-09
  - FAIL 11 seconds

### Error 2026-01-09T00:51:17+00:00
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2026-01-09T00:51:17.776000+00:00-TestAccFederatedDatabaseInstance_azureCloudProviderConfig',confidence=1.0,ts_when='28 days ago')
API Error CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/{groupId}/cloudProviderAccess
```
2026-01-09T00:51:17.7767988Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-01-09T00:51:17.7769638Z     resource_federated_database_instance_test.go:109: Creating execution project (1): test-acc-tf-p-5863529735329057127
2026-01-09T00:51:17.7776600Z === CONT  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-01-09T00:51:17.7798390Z === NAME  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-01-09T00:51:17.7799113Z     resource_federated_database_instance_test.go:121: Step 1/2 error: Error running apply: exit status 1
2026-01-09T00:51:17.7799613Z         
2026-01-09T00:51:17.7802050Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69604c7d54a7941f1c86d629/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-01-09T00:51:17.7803628Z         
2026-01-09T00:51:17.7804018Z           with mongodbatlas_cloud_provider_access_setup.test,
2026-01-09T00:51:17.7804802Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2026-01-09T00:51:17.7805537Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2026-01-09T00:51:17.7805911Z         
2026-01-09T00:51:17.7806266Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (11.27s)
```

  - PASS 5 seconds
  - PASS 7 seconds
- 2026-01-10 PASS 13 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 12 seconds
- 2026-01-13 PASS 10 seconds
- 2026-01-14 PASS 8 seconds
- 2026-01-15 PASS 13 seconds
- 2026-01-16 PASS 11 seconds
- 2026-01-17 PASS 14 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 12 seconds
- 2026-01-20 PASS 14 seconds
- 2026-01-21 PASS 10 seconds
- 2026-01-22 PASS 11 seconds
- 2026-01-23 PASS 12 seconds
- 2026-01-24 PASS 11 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 9 seconds
- 2026-01-27 PASS 14 seconds
- 2026-01-28 PASS 11 seconds
- 2026-01-29 PASS 13 seconds
- 2026-01-30 PASS 12 seconds
- 2026-01-31

### Error 2026-01-31T03:35:48+00:00
```
2026-01-31T03:35:48.8038220Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-01-31T03:35:48.8039756Z     resource_federated_database_instance_test.go:109: Creating execution project (1): test-acc-tf-p-3021248919788871586
2026-01-31T03:35:48.8048006Z === CONT  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-01-31T03:35:48.8069365Z === NAME  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-01-31T03:35:48.8070073Z     resource_federated_database_instance_test.go:121: Step 1/2 error: Error running apply: exit status 1
2026-01-31T03:35:48.8070556Z         
2026-01-31T03:35:48.8072773Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e3dff188f1e45c4534d/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-01-31T03:35:48.8075952Z         
2026-01-31T03:35:48.8076711Z           with mongodbatlas_cloud_provider_access_setup.test,
2026-01-31T03:35:48.8078203Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2026-01-31T03:35:48.8079628Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2026-01-31T03:35:48.8080333Z         
2026-01-31T03:35:48.8080775Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (10.70s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T03:39:08+00:00
```
2026-02-02T03:39:08.6117037Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-02-02T03:39:08.6118429Z     resource_federated_database_instance_test.go:109: Creating execution project (1): test-acc-tf-p-2542574673835998103
2026-02-02T03:39:08.6124665Z === CONT  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-02-02T03:39:08.6154575Z === NAME  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-02-02T03:39:08.6155790Z     resource_federated_database_instance_test.go:121: Step 1/2 error: Error running apply: exit status 1
2026-02-02T03:39:08.6156605Z         
2026-02-02T03:39:08.6160440Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff205197cc66080b017c1/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-02-02T03:39:08.6163194Z         
2026-02-02T03:39:08.6166705Z           with mongodbatlas_cloud_provider_access_setup.test,
2026-02-02T03:39:08.6168050Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2026-02-02T03:39:08.6169308Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2026-02-02T03:39:08.6169931Z         
2026-02-02T03:39:08.6170531Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (11.91s)
```

- 2026-02-03

### Error 2026-02-03T00:40:27+00:00
```
2026-02-03T00:40:27.4923233Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-02-03T00:40:27.4924623Z     resource_federated_database_instance_test.go:109: Creating execution project (1): test-acc-tf-p-175618154961125449
2026-02-03T00:40:27.4930936Z === CONT  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-02-03T00:40:27.5024194Z === NAME  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-02-03T00:40:27.5025429Z     resource_federated_database_instance_test.go:121: Step 1/2 error: Error running apply: exit status 1
2026-02-03T00:40:27.5026266Z         
2026-02-03T00:40:27.5030372Z         Error: error creating cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143b2b2e54ee9958ff9cf/cloudProviderAccess POST: HTTP 400 Bad Request (Error code: "CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL") Detail: Atlas cannot authenticate with the service principal (48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1). Reason: Bad Request. Params: [48f1d2a6-d0e9-482a-83a4-b8dd7dddc5c1], BadRequestDetail: 
2026-02-03T00:40:27.5033092Z         
2026-02-03T00:40:27.5033762Z           with mongodbatlas_cloud_provider_access_setup.test,
2026-02-03T00:40:27.5035090Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cloud_provider_access_setup" "test":
2026-02-03T00:40:27.5036527Z           12: 	resource "mongodbatlas_cloud_provider_access_setup" "test" {
2026-02-03T00:40:27.5037310Z         
2026-02-03T00:40:27.5037968Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (12.23s)
```

- 2026-02-04 PASS 13 seconds
- 2026-02-05 PASS 14 seconds
- 2026-02-06 PASS 10 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 8 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 12 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 11 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 11 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 13 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 9 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 16 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
