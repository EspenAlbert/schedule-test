# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-10 00:44](#error-2026-01-10t0044550000) | DATA_FEDERATION_CANNOT_GET_S3_BUCKET_REGION /api/atlas/v2/groups/69619dd9a60ed1a0cc2911bf/dataFederation | dev | 39.08s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a minute
- 2026-01-09 PASS a minute
- 2026-01-10

### Error 2026-01-10T00:44:55+00:00
```
2026-01-10T00:44:55.8005886Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2026-01-10T00:44:55.8012837Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2026-01-10T00:44:55.8070648Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2026-01-10T00:44:55.8071777Z     resource_federated_database_instance_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-01-10T00:44:55.8072608Z         
2026-01-10T00:44:55.8079913Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69619dd9a60ed1a0cc2911bf/dataFederation POST: HTTP 400 Bad Request (Error code: "DATA_FEDERATION_CANNOT_GET_S3_BUCKET_REGION") Detail: Data Federation cannot determine the region for the specified test S3 bucket (***) with the provided IAM role. Ensure that the IAM role provides access to retrieve the bucket's location. Data Federation cannot retrieve region of specified S3 bucket (***). Reason: Bad Request. Params: [*** Data Federation cannot retrieve region of specified S3 bucket (***)], BadRequestDetail: 
2026-01-10T00:44:55.8083891Z         
2026-01-10T00:44:55.8084570Z           with mongodbatlas_federated_database_instance.test,
2026-01-10T00:44:55.8085918Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2026-01-10T00:44:55.8087177Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2026-01-10T00:44:55.8087805Z         
2026-01-10T00:44:55.8088295Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (39.83s)
```

- 2026-01-11: MISSING
- 2026-01-12 PASS a minute
- 2026-01-13 PASS a minute
- 2026-01-14 PASS a minute
- 2026-01-15 PASS a minute
- 2026-01-16 PASS a minute
- 2026-01-17 PASS a minute
- 2026-01-18: MISSING
- 2026-01-19 PASS a minute
- 2026-01-20 PASS a minute
- 2026-01-21 PASS a minute
- 2026-01-22 PASS a minute
- 2026-01-23 PASS a minute
- 2026-01-24 PASS a minute
- 2026-01-25: MISSING
- 2026-01-26 PASS a minute
- 2026-01-27 PASS a minute
- 2026-01-28 PASS a minute
- 2026-01-29 PASS a minute
- 2026-01-30 PASS a minute
- 2026-01-31 PASS a minute
- 2026-02-01: MISSING
- 2026-02-02 PASS a minute
- 2026-02-03 PASS a minute
- 2026-02-04 PASS a minute
- 2026-02-05 PASS a minute
- 2026-02-06 PASS a minute

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a minute
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS a minute
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS a minute
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS a minute
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS a minute
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS a minute
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS a minute
- 2026-02-05: MISSING
- 2026-02-06: MISSING
