# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_azureCloudProviderConfig Test Details
# Found 11 TestRuns in dev, qa from 2025-07-22 to 2025-07-31 from master branch: 1 unique tests, PASS(x 10) FAIL
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-27 00:48](#error-2025-07-27t0048510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/688573d2ea884d723491debe/dataFederation | qa | flaky_500 | 38.03s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02: MISSING
- 2025-07-03: MISSING
- 2025-07-04: MISSING
- 2025-07-05: MISSING
- 2025-07-06: MISSING
- 2025-07-07: MISSING
- 2025-07-08: MISSING
- 2025-07-09: MISSING
- 2025-07-10: MISSING
- 2025-07-11: MISSING
- 2025-07-12: MISSING
- 2025-07-13: MISSING
- 2025-07-14: MISSING
- 2025-07-15: MISSING
- 2025-07-16: MISSING
- 2025-07-17: MISSING
- 2025-07-18: MISSING
- 2025-07-19: MISSING
- 2025-07-20: MISSING
- 2025-07-21: MISSING
- 2025-07-22 PASS 10 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-07-24 PASS 10 seconds
- 2025-07-25 PASS 12 seconds
- 2025-07-26 PASS 12 seconds
- 2025-07-27

### Error 2025-07-27T00:48:51+00:00
```
2025-07-27T00:48:51.0845791Z === RUN   TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-07-27T00:48:51.0846903Z     resource_federated_database_instance_test.go:109: Creating execution project: test-acc-tf-p-7631529453259773095
2025-07-27T00:48:51.0851425Z === CONT  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-07-27T00:48:51.0905300Z === NAME  TestAccFederatedDatabaseInstance_azureCloudProviderConfig
2025-07-27T00:48:51.0906085Z     resource_federated_database_instance_test.go:121: Step 1/2 error: Error running apply: exit status 1
2025-07-27T00:48:51.0906556Z         
2025-07-27T00:48:51.0908193Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-qa.mongodb.com/api/atlas/v2/groups/688573d2ea884d723491debe/dataFederation POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-07-27T00:48:51.0909352Z         
2025-07-27T00:48:51.0909725Z           with mongodbatlas_federated_database_instance.test,
2025-07-27T00:48:51.0910434Z           on terraform_plugin_test.tf line 23, in resource "mongodbatlas_federated_database_instance" "test":
2025-07-27T00:48:51.0911098Z           23: resource "mongodbatlas_federated_database_instance" "test" {
2025-07-27T00:48:51.0911434Z         
2025-07-27T00:48:51.0911775Z --- FAIL: TestAccFederatedDatabaseInstance_azureCloudProviderConfig (38.30s)
```

- 2025-07-28 PASS 12 seconds
- 2025-07-29 PASS 10 seconds
- 2025-07-30 PASS 11 seconds
- 2025-07-31 PASS 13 seconds