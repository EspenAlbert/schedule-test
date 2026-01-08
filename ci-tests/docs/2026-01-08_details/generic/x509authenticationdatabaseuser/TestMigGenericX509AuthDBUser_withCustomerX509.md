# generic/x509authenticationdatabaseuser/TestMigGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:31](#error-2026-01-07t0031470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92fd59b8466ea7230ec | dev | flaky_500 | 6.05s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 13 seconds
  - PASS 16 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 18 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 10 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 12 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 12 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 10 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 11 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 10 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 16 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 13 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 14 seconds
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:31:47+00:00
```
2026-01-07T00:31:47.1239380Z === RUN   TestMigGenericX509AuthDBUser_withCustomerX509
2026-01-07T00:31:47.1243637Z === CONT  TestMigGenericX509AuthDBUser_withCustomerX509
2026-01-07T00:31:47.1273130Z === NAME  TestMigGenericX509AuthDBUser_withCustomerX509
2026-01-07T00:31:47.1273853Z     resource_x509_authentication_database_user_migration_test.go:48: Step 1/2 error: Error running apply: exit status 1
2026-01-07T00:31:47.1274396Z         
2026-01-07T00:31:47.1274772Z         Error: error when getting project after create
2026-01-07T00:31:47.1275128Z         
2026-01-07T00:31:47.1275473Z           with mongodbatlas_project.test,
2026-01-07T00:31:47.1276091Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2026-01-07T00:31:47.1276780Z           14: 		resource "mongodbatlas_project" "test" {
2026-01-07T00:31:47.1277286Z         
2026-01-07T00:31:47.1277775Z         error getting project (695da92fd59b8466ea7230ec):
2026-01-07T00:31:47.1278469Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92fd59b8466ea7230ec
2026-01-07T00:31:47.1279284Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:31:47.1279975Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:31:47.1280634Z         BadRequestDetail: 
2026-01-07T00:31:47.1281129Z --- FAIL: TestMigGenericX509AuthDBUser_withCustomerX509 (6.49s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 10 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 8 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 12 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 9 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 13 seconds
