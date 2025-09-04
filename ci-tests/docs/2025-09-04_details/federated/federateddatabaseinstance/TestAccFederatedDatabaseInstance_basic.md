# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:46](#error-2025-08-24t0046570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2a9bbb8c4ee1f81acb/dataFederation/test-acc-tf-4711297843648059442 | qa | flaky_500 | 94.00s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 18 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 15 seconds
- 2025-08-09 PASS 14 seconds
- 2025-08-10 PASS 29 seconds
- 2025-08-11 PASS 16 seconds
- 2025-08-12 PASS 13 seconds
- 2025-08-13 PASS 13 seconds
- 2025-08-14 PASS 14 seconds
- 2025-08-15 PASS 14 seconds
- 2025-08-16 PASS 16 seconds
- 2025-08-17 PASS 31 seconds
- 2025-08-18 PASS 17 seconds
- 2025-08-19 PASS 11 seconds
- 2025-08-20
  - PASS 17 seconds
  - PASS 14 seconds
- 2025-08-21 PASS 11 seconds
- 2025-08-22 PASS 13 seconds
- 2025-08-23 PASS 12 seconds
- 2025-08-24

### Error 2025-08-24T00:46:57+00:00
```
2025-08-24T00:46:57.7634167Z === RUN   TestAccFederatedDatabaseInstance_basic
2025-08-24T00:46:57.7670155Z === CONT  TestAccFederatedDatabaseInstance_basic
2025-08-24T00:46:57.7821446Z === NAME  TestAccFederatedDatabaseInstance_basic
2025-08-24T00:46:57.7822575Z     resource_federated_database_instance_test.go:41: Step 1/3 error: Error running apply: exit status 1
2025-08-24T00:46:57.7823366Z         
2025-08-24T00:46:57.7827138Z         Error: error reading MongoDB Atlas Federated Database Instace (test-acc-tf-4711297843648059442): https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2a9bbb8c4ee1f81acb/dataFederation/test-acc-tf-4711297843648059442 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-08-24T00:46:57.7829765Z         
2025-08-24T00:46:57.7830433Z           with mongodbatlas_federated_database_instance.test,
2025-08-24T00:46:57.7831740Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_federated_database_instance" "test":
2025-08-24T00:46:57.7832958Z           18: resource "mongodbatlas_federated_database_instance" "test" {
2025-08-24T00:46:57.7833575Z         
2025-08-24T00:46:57.7858302Z --- FAIL: TestAccFederatedDatabaseInstance_basic (94.05s)
```

- 2025-08-25 PASS 17 seconds
- 2025-08-26 PASS 13 seconds
- 2025-08-27 PASS 15 seconds
- 2025-08-28 PASS 17 seconds
- 2025-08-29 PASS 14 seconds
- 2025-08-30 PASS 14 seconds
- 2025-08-31 PASS 12 seconds
- 2025-09-01
  - PASS 13 seconds
  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 12 seconds
  - PASS 13 seconds
  - PASS 13 seconds
- 2025-09-02 PASS 17 seconds
- 2025-09-03 PASS 16 seconds
- 2025-09-04 PASS 15 seconds