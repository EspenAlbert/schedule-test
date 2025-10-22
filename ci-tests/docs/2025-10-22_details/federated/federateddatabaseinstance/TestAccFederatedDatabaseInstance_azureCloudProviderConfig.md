# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_azureCloudProviderConfig Test Details
# Found 42 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-25 00:41](#error-2025-09-25t0041580000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68d48c3f8256687520041c11/cloudProviderAccess | dev | flaky_500 | 5.09s

## Timeline
- 2025-09-22: MISSING
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
- 2025-10-03 PASS 10 seconds
- 2025-10-04 PASS 11 seconds
- 2025-10-05 PASS 10 seconds
- 2025-10-06 PASS 11 seconds
- 2025-10-07 PASS 12 seconds
- 2025-10-08 PASS 12 seconds
- 2025-10-09 PASS 13 seconds
- 2025-10-10 PASS 10 seconds
- 2025-10-11 PASS 12 seconds
- 2025-10-12 PASS 14 seconds
- 2025-10-13 PASS 11 seconds
- 2025-10-14 PASS 11 seconds
- 2025-10-15 PASS 13 seconds
- 2025-10-16 PASS 11 seconds
- 2025-10-17 PASS 11 seconds
- 2025-10-18 PASS 12 seconds
- 2025-10-19 PASS 2 minutes
- 2025-10-20
  - PASS 12 seconds
  - PASS 10 seconds
- 2025-10-21 PASS 11 seconds
- 2025-10-22
  - PASS 13 seconds
  - PASS 12 seconds