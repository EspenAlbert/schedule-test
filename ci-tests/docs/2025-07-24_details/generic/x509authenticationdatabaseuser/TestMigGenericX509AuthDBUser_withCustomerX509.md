# generic/x509authenticationdatabaseuser/TestMigGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-20 00:34](#error-2025-07-20t0034050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c3938823af9166ef91260/limits | qa | flaky_500 | 37.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 10 seconds
- 2025-06-26 PASS 11 seconds
- 2025-06-27 PASS 15 seconds
- 2025-06-28 PASS 11 seconds
- 2025-06-29 PASS 14 seconds
- 2025-06-30 PASS 16 seconds
- 2025-07-01
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 15 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 16 seconds
- 2025-07-03 PASS 13 seconds
- 2025-07-04 PASS 14 seconds
- 2025-07-05 PASS 9 seconds
- 2025-07-06 PASS 15 seconds
- 2025-07-07 PASS 11 seconds
- 2025-07-08 PASS 15 seconds
- 2025-07-09 PASS 9 seconds
- 2025-07-10
  - PASS 9 seconds
  - PASS 15 seconds
- 2025-07-11 PASS 12 seconds
- 2025-07-12 PASS 15 seconds
- 2025-07-13 PASS 10 seconds
- 2025-07-14 PASS 10 seconds
- 2025-07-15 PASS 9 seconds
- 2025-07-16 PASS 14 seconds
- 2025-07-17 PASS 14 seconds
- 2025-07-18 PASS 14 seconds
- 2025-07-19 PASS 9 seconds
- 2025-07-20

### Error 2025-07-20T00:34:05+00:00
```
2025-07-20T00:34:05.9569287Z === RUN   TestMigGenericX509AuthDBUser_withCustomerX509
2025-07-20T00:34:05.9574618Z === CONT  TestMigGenericX509AuthDBUser_withCustomerX509
2025-07-20T00:34:05.9615985Z === NAME  TestMigGenericX509AuthDBUser_withCustomerX509
2025-07-20T00:34:05.9617150Z     resource_x509_authentication_database_user_migration_test.go:48: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-07-20T00:34:05.9617798Z         
2025-07-20T00:34:05.9618261Z         Error: error when getting project properties after create
2025-07-20T00:34:05.9618677Z         
2025-07-20T00:34:05.9619044Z           with mongodbatlas_project.test,
2025-07-20T00:34:05.9619730Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T00:34:05.9620359Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T00:34:05.9620734Z         
2025-07-20T00:34:05.9621260Z         error getting project (687c3938823af9166ef91260): error getting project's
2025-07-20T00:34:05.9621805Z         limits (687c3938823af9166ef91260):
2025-07-20T00:34:05.9622473Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c3938823af9166ef91260/limits
2025-07-20T00:34:05.9623230Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T00:34:05.9623906Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T00:34:05.9624385Z         BadRequestDetail: 
2025-07-20T00:34:05.9624804Z --- FAIL: TestMigGenericX509AuthDBUser_withCustomerX509 (37.91s)
```

- 2025-07-21 PASS 14 seconds
- 2025-07-22 PASS 14 seconds
- 2025-07-23
  - PASS 15 seconds
  - PASS 10 seconds
- 2025-07-24 PASS 16 seconds