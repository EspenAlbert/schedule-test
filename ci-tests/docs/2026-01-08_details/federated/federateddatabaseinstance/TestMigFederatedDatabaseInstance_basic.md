# federated/federateddatabaseinstance/TestMigFederatedDatabaseInstance_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-10 to 2026-01-08 from master branch: 1 unique tests, PASS(x 17) FAIL
Success rate: 94.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-07 00:32](#error-2026-01-07t0032400000) | UNEXPECTED_ERROR /api/atlas/v2/groups/695da92cd59b8466ea71e7bc | dev | flaky_500 | 13.02s

### Timeline
- 2025-12-09: MISSING
- 2025-12-10
  - PASS 20 seconds
  - PASS 16 seconds
- 2025-12-11: MISSING
- 2025-12-12 PASS 20 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 15 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 21 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 20 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 19 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 17 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 21 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 17 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 16 seconds
- 2026-01-03: MISSING
- 2026-01-04: MISSING
- 2026-01-05 PASS 16 seconds
- 2026-01-06: MISSING
- 2026-01-07

### Error 2026-01-07T00:32:40+00:00
```
2026-01-07T00:32:40.2625597Z === RUN   TestMigFederatedDatabaseInstance_basic
2026-01-07T00:32:40.2636066Z === CONT  TestMigFederatedDatabaseInstance_basic
2026-01-07T00:32:40.2688086Z === NAME  TestMigFederatedDatabaseInstance_basic
2026-01-07T00:32:40.2689582Z     resource_federated_database_instance_migration_test.go:21: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2026-01-07T00:32:40.2690528Z         
2026-01-07T00:32:40.2691103Z         Error: error when getting project from Atlas
2026-01-07T00:32:40.2691796Z         
2026-01-07T00:32:40.2692499Z           with mongodbatlas_project.test,
2026-01-07T00:32:40.2693555Z           on terraform_plugin_test.tf line 15, in resource "mongodbatlas_project" "test":
2026-01-07T00:32:40.2694499Z           15: resource "mongodbatlas_project" "test" {
2026-01-07T00:32:40.2695008Z         
2026-01-07T00:32:40.2695587Z         error getting project (695da92cd59b8466ea71e7bc):
2026-01-07T00:32:40.2696599Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/695da92cd59b8466ea71e7bc
2026-01-07T00:32:40.2697739Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-07T00:32:40.2698746Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-07T00:32:40.2699434Z         BadRequestDetail: 
2026-01-07T00:32:40.2700964Z --- FAIL: TestMigFederatedDatabaseInstance_basic (13.17s)
```

- 2026-01-08: MISSING

## QA Environment
### Timeline
- 2025-12-09: MISSING
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 16 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 15 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 18 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
- 2026-01-03: MISSING
- 2026-01-04 PASS 17 seconds
- 2026-01-05: MISSING
- 2026-01-06: MISSING
- 2026-01-07: MISSING
- 2026-01-08 PASS 15 seconds
