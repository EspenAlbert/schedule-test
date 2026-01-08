# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-07 00:32](#error-2026-01-07t0032400000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/695da938d59b8466ea728bea/dataFederation | dev | 36.03s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 52 seconds
  - PASS 52 seconds
- 2025-12-11 PASS 56 seconds
- 2025-12-12 PASS 53 seconds
- 2025-12-13 PASS 56 seconds
- 2025-12-14: MISSING
- 2025-12-15 PASS 49 seconds
- 2025-12-16 PASS 53 seconds
- 2025-12-17 PASS 57 seconds
- 2025-12-18 PASS 57 seconds
- 2025-12-19 PASS 55 seconds
- 2025-12-20 PASS 52 seconds
- 2025-12-21: MISSING
- 2025-12-22 PASS 55 seconds
- 2025-12-23 PASS 51 seconds
- 2025-12-24 PASS 53 seconds
- 2025-12-25 PASS 54 seconds
- 2025-12-26 PASS 55 seconds
- 2025-12-27 PASS 54 seconds
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 52 seconds
- 2025-12-31 PASS 52 seconds
- 2026-01-01 PASS 51 seconds
- 2026-01-02 PASS 52 seconds
- 2026-01-03 PASS 55 seconds
- 2026-01-04: MISSING
- 2026-01-05 PASS 54 seconds
- 2026-01-06 PASS 56 seconds
- 2026-01-07

### Error 2026-01-07T00:32:40+00:00
```
2026-01-07T00:32:40.2623931Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2026-01-07T00:32:40.2638803Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-01-07T00:32:40.2784069Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-01-07T00:32:40.2785248Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-01-07T00:32:40.2786055Z         
2026-01-07T00:32:40.2789516Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da938d59b8466ea728bea/dataFederation POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (695da93caf4f6cc389e85407). Reason: Bad Request. Params: [695da93caf4f6cc389e85407], BadRequestDetail: 
2026-01-07T00:32:40.2792014Z         
2026-01-07T00:32:40.2792705Z           with mongodbatlas_federated_database_instance.test,
2026-01-07T00:32:40.2794013Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2026-01-07T00:32:40.2795221Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2026-01-07T00:32:40.2795835Z         
2026-01-07T00:32:40.2797102Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (36.28s)
```

- 2026-01-08 PASS 57 seconds

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 49 seconds
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
- 2026-01-03: MISSING
- 2026-01-04 PASS 55 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 53 seconds
