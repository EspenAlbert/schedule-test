# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstanceDSPlural_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-17 00:43](#error-2026-01-17t0043450000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/696ad833bab4422df29a4ed9/dataFederation | dev | 38.01s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 57 seconds
- 2026-01-09 PASS 51 seconds
- 2026-01-10 PASS 52 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 52 seconds
- 2026-01-13 PASS 53 seconds
- 2026-01-14 PASS 52 seconds
- 2026-01-15 PASS 53 seconds
- 2026-01-16 PASS 52 seconds
- 2026-01-17

### Error 2026-01-17T00:43:45+00:00
```
2026-01-17T00:43:45.2324437Z === RUN   TestAccFederatedDatabaseInstanceDSPlural_basic
2026-01-17T00:43:45.2337841Z === CONT  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-01-17T00:43:45.2409620Z === NAME  TestAccFederatedDatabaseInstanceDSPlural_basic
2026-01-17T00:43:45.2411024Z     data_source_federated_database_instances_test.go:24: Step 1/1 error: Error running apply: exit status 1
2026-01-17T00:43:45.2412042Z         
2026-01-17T00:43:45.2415851Z         Error: error creating MongoDB Atlas Federated Database Instace: https://cloud-dev.mongodb.com/api/atlas/v2/groups/696ad833bab4422df29a4ed9/dataFederation POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (696ad839eb83155461d095b1). Reason: Bad Request. Params: [696ad839eb83155461d095b1], BadRequestDetail: 
2026-01-17T00:43:45.2418534Z         
2026-01-17T00:43:45.2419266Z           with mongodbatlas_federated_database_instance.test,
2026-01-17T00:43:45.2420953Z           on terraform_plugin_test.tf line 89, in resource "mongodbatlas_federated_database_instance" "test":
2026-01-17T00:43:45.2422395Z           89: resource "mongodbatlas_federated_database_instance" "test" {
2026-01-17T00:43:45.2423132Z         
2026-01-17T00:43:45.2423738Z --- FAIL: TestAccFederatedDatabaseInstanceDSPlural_basic (38.13s)
```

- 2026-01-18: MISSING
- 2026-01-19 PASS 52 seconds
- 2026-01-20 PASS 54 seconds
- 2026-01-21 PASS 51 seconds
- 2026-01-22 PASS 53 seconds
- 2026-01-23 PASS 51 seconds
- 2026-01-24 PASS 55 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 56 seconds
- 2026-01-27 PASS 54 seconds
- 2026-01-28 PASS 53 seconds
- 2026-01-29 PASS 55 seconds
- 2026-01-30 PASS 55 seconds
- 2026-01-31 PASS 54 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 51 seconds
- 2026-02-03 PASS 53 seconds
- 2026-02-04 PASS 53 seconds
- 2026-02-05 PASS 51 seconds
- 2026-02-06 PASS 54 seconds

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 53 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 55 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 51 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 49 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 55 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 55 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 52 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
