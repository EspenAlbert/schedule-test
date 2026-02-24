# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_azureCloudProviderConfig Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-31 03:35](#error-2026-01-31t0335480000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/697d4e3dff188f1e45c4534d/cloudProviderAccess | dev | 10.07s
[2026-02-02 03:39](#error-2026-02-02t0339080000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/697ff205197cc66080b017c1/cloudProviderAccess | dev | 11.09s
[2026-02-03 00:40](#error-2026-02-03t0040270000) | CANNOT_AUTHENTICATE_SERVICE_PRINCIPAL /api/atlas/v2/groups/698143b2b2e54ee9958ff9cf/cloudProviderAccess | dev | 12.02s
[2026-02-19 01:07](#error-2026-02-19t0107530000) |  | dev | 0.06s

### Timeline
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
- 2026-02-07 PASS 20 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 11 seconds
- 2026-02-10 PASS 11 seconds
- 2026-02-11 PASS 12 seconds
- 2026-02-12 PASS 15 seconds
- 2026-02-13 PASS 12 seconds
- 2026-02-14 PASS 13 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 13 seconds
- 2026-02-17 PASS 14 seconds
- 2026-02-18 PASS 12 seconds
- 2026-02-19

### Error 2026-02-19T01:07:53+00:00
```
2026-02-19T01:07:53.0104195Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-02-19T01:07:53.0105754Z     resource_federated_database_instance_test.go:109: Creating execution project (1): test-acc-tf-p-7849820395002713806
2026-02-19T01:07:53.0106472Z     resource_federated_database_instance_test.go:109: 
2026-02-19T01:07:53.0107510Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-19T01:07:53.0109323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-02-19T01:07:53.0111435Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-02-19T01:07:53.0113656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/federateddatabaseinstance/resource_federated_database_instance_test.go:109
2026-02-19T01:07:53.0114614Z         	Error:      	Received unexpected error:
2026-02-19T01:07:53.0115405Z         	            	Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": EOF
2026-02-19T01:07:53.0116075Z         	Test:       	TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2026-02-19T01:07:53.0117151Z         	Messages:   	Project creation failed: test-acc-tf-p-7849820395002713806, err: Post "https://cloud-dev.mongodb.com/api/atlas/v2/groups": EOF
2026-02-19T01:07:53.0117920Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (0.58s)
```

- 2026-02-20 PASS 13 seconds
- 2026-02-21 PASS 13 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 13 seconds
- 2026-02-24 PASS 14 seconds

## QA Environment
### Timeline
- 2026-01-25: MISSING
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
- 2026-02-07: MISSING
- 2026-02-08 PASS 12 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 13 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 22 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 12 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
