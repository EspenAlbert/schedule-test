# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDS_s3Bucket Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-10 00:50](#error-2025-12-10t0050140000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6938bf87342a5d087f20ee5b/dataFederation | dev | 40.01s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 56 seconds
- 2025-12-05 PASS 55 seconds
- 2025-12-06 PASS 59 seconds
- 2025-12-07: MISSING
- 2025-12-08 PASS 51 seconds
- 2025-12-09 PASS 53 seconds
- 2025-12-10
  - FAIL 40 seconds

### Error 2025-12-10T00:50:14+00:00
```
2025-12-10T00:50:14.0107848Z === RUN   TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-12-10T00:50:14.0119399Z === CONT  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-12-10T00:50:14.0171255Z === NAME  TestAccFederatedDatabaseInstanceDS_s3Bucket
2025-12-10T00:50:14.0172499Z     data_source_federated_database_instance_test.go:29: Step 1/1 error: Error running apply: exit status 1
2025-12-10T00:50:14.0173306Z         
2025-12-10T00:50:14.0176999Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6938bf87342a5d087f20ee5b/dataFederation POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (6938bf8b9fefc72ee28aa27d). Reason: Bad Request. Params: [6938bf8b9fefc72ee28aa27d], BadRequestDetail: 
2025-12-10T00:50:14.0179318Z         
2025-12-10T00:50:14.0179994Z           with mongodbatlas_federated_database_instance.test,
2025-12-10T00:50:14.0181323Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2025-12-10T00:50:14.0182693Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2025-12-10T00:50:14.0183313Z         
2025-12-10T00:50:14.0183831Z --- FAIL: TestAccFederatedDatabaseInstanceDS_s3Bucket (40.14s)
```

  - PASS 51 seconds
- 2025-12-11 PASS 51 seconds
- 2025-12-12 PASS 53 seconds
- 2025-12-13 PASS 56 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 50 seconds
- 2025-12-16 PASS a minute
- 2025-12-17 PASS 55 seconds
- 2025-12-18 PASS 58 seconds
- 2025-12-19 PASS 56 seconds
- 2025-12-20 PASS 52 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 56 seconds
- 2025-12-23 PASS 51 seconds
- 2025-12-24 PASS 51 seconds
- 2025-12-25 PASS 55 seconds
- 2025-12-26 PASS 56 seconds
- 2025-12-27 PASS 54 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 52 seconds
- 2025-12-31 PASS 50 seconds
- 2026-01-01 PASS 50 seconds
- 2026-01-02 PASS 51 seconds

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 51 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 58 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 48 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 51 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 54 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
