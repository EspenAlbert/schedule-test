# generic/x509authenticationdatabaseuser/TestMigGenericX509AuthDBUser_withCustomerX509 Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 03:30](#error-2025-09-01t0330180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 13 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 10 seconds
- 2025-08-10 PASS 16 seconds
- 2025-08-11 PASS 17 seconds
- 2025-08-12 PASS 15 seconds
- 2025-08-13 PASS 12 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15 PASS 13 seconds
- 2025-08-16 PASS 10 seconds
- 2025-08-17 PASS 14 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 9 seconds
- 2025-08-20
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-08-21 PASS 12 seconds
- 2025-08-22 PASS 15 seconds
- 2025-08-23 PASS 14 seconds
- 2025-08-24 PASS 11 seconds
- 2025-08-25 PASS 15 seconds
- 2025-08-26 PASS 16 seconds
- 2025-08-27 PASS 11 seconds
- 2025-08-28 PASS 14 seconds
- 2025-08-29 PASS 14 seconds
- 2025-08-30 PASS 13 seconds
- 2025-08-31 PASS 9 seconds
- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T03:30:18+00:00
```
2025-09-01T03:30:18.2337734Z === RUN   TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-01T03:30:18.2349861Z === CONT  TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-01T03:30:18.2365302Z   
2025-09-01T03:30:18.2384658Z === NAME  TestMigGenericX509AuthDBUser_withCustomerX509
2025-09-01T03:30:18.2385450Z     resource_x509_authentication_database_user_migration_test.go:48: Step 1/2 error: Error running apply: exit status 1
2025-09-01T03:30:18.2386158Z         
2025-09-01T03:30:18.2386651Z         Error: error creating project: test-acc-tf-p-8515605626655551910
2025-09-01T03:30:18.2387074Z         
2025-09-01T03:30:18.2387437Z           with mongodbatlas_project.test,
2025-09-01T03:30:18.2388120Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-01T03:30:18.2388744Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-01T03:30:18.2389109Z         
2025-09-01T03:30:18.2389663Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T03:30:18.2390403Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T03:30:18.2391112Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T03:30:18.2391812Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T03:30:18.2392310Z         BadRequestDetail: 
2025-09-01T03:30:18.2392870Z --- FAIL: TestMigGenericX509AuthDBUser_withCustomerX509 (2.07s)
```

  - PASS 14 seconds
  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 10 seconds
  - PASS 14 seconds
- 2025-09-02 PASS 9 seconds
- 2025-09-03 PASS 15 seconds
- 2025-09-04 PASS 11 seconds