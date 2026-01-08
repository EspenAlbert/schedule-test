# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_s3bucket Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-07 00:32](#error-2026-01-07t0032400000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/695da938d59b8466ea728956/dataFederation | dev | 35.10s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS a minute
  - PASS a minute
- 2025-12-11 PASS a minute
- 2025-12-12 PASS a minute
- 2025-12-13 PASS a minute
- 2025-12-14: MISSING
- 2025-12-15 PASS a minute
- 2025-12-16 PASS a minute
- 2025-12-17 PASS a minute
- 2025-12-18 PASS a minute
- 2025-12-19 PASS a minute
- 2025-12-20 PASS a minute
- 2025-12-21: MISSING
- 2025-12-22 PASS a minute
- 2025-12-23 PASS a minute
- 2025-12-24 PASS a minute
- 2025-12-25 PASS a minute
- 2025-12-26 PASS a minute
- 2025-12-27 PASS a minute
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS a minute
- 2025-12-31 PASS a minute
- 2026-01-01 PASS a minute
- 2026-01-02 PASS a minute
- 2026-01-03 PASS a minute
- 2026-01-04: MISSING
- 2026-01-05 PASS a minute
- 2026-01-06 PASS a minute
- 2026-01-07

### Error 2026-01-07T00:32:40+00:00
```
2026-01-07T00:32:40.2628344Z === RUN   TestAccFederatedDatabaseInstance_s3bucket
2026-01-07T00:32:40.2635456Z === CONT  TestAccFederatedDatabaseInstance_s3bucket
2026-01-07T00:32:40.2749553Z === NAME  TestAccFederatedDatabaseInstance_s3bucket
2026-01-07T00:32:40.2750632Z     resource_federated_database_instance_test.go:83: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:32:40.2751452Z         
2026-01-07T00:32:40.2755112Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da938d59b8466ea728956/dataFederation POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (695da93cd59b8466ea72a50b). Reason: Bad Request. Params: [695da93cd59b8466ea72a50b], BadRequestDetail: 
2026-01-07T00:32:40.2757456Z         
2026-01-07T00:32:40.2758127Z           with mongodbatlas_federated_database_instance.test,
2026-01-07T00:32:40.2759429Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2026-01-07T00:32:40.2760633Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2026-01-07T00:32:40.2761235Z         
2026-01-07T00:32:40.2796315Z --- FAIL: TestAccFederatedDatabaseInstance_s3bucket (35.98s)
```

- 2026-01-08 PASS a minute

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS a minute
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS a minute
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS a minute
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS a minute
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS a minute
