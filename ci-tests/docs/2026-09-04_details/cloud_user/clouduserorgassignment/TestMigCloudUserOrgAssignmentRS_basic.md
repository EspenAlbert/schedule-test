# cloud_user/clouduserorgassignment/TestMigCloudUserOrgAssignmentRS_basic Test Details
# Found 19 TestRuns in dev, qa from 2026-08-07 to 2026-09-04 from master branch: 1 unique tests, PASS(x 18) FAIL
Success rate: 94.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-08-14 00:33](#error-2026-08-14t0033120000) | MAX_USERS_PER_ORG_EXCEEDED /api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/users | dev | flaky_500 | 3.01s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07 PASS 6 seconds
- 2026-08-08: MISSING
- 2026-08-09: MISSING
- 2026-08-10 PASS 5 seconds
- 2026-08-11: MISSING
- 2026-08-12 PASS 5 seconds
- 2026-08-13: MISSING
- 2026-08-14

### Error 2026-08-14T00:33:12+00:00
```
2026-08-14T00:33:12.8310576Z === RUN   TestMigCloudUserOrgAssignmentRS_basic
2026-08-14T00:33:12.8316171Z === CONT  TestMigCloudUserOrgAssignmentRS_basic
2026-08-14T00:33:12.8329048Z    test_working_directory=/tmp/plugintest2319947772
2026-08-14T00:33:12.8330358Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2026-08-14T00:33:12.8331061Z         
2026-08-14T00:33:12.8331746Z         Error: error assigning user to OrgID(64808d5f33a0c71e882ef19c):
2026-08-14T00:33:12.8332504Z         
2026-08-14T00:33:12.8333129Z           with mongodbatlas_cloud_user_org_assignment.test,
2026-08-14T00:33:12.8334383Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_cloud_user_org_assignment" "test":
2026-08-14T00:33:12.8335571Z           14: resource "mongodbatlas_cloud_user_org_assignment" "test" {
2026-08-14T00:33:12.8336156Z         
2026-08-14T00:33:12.8336974Z         https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c/users
2026-08-14T00:33:12.8338128Z         POST: HTTP 400 Bad Request (Error code: "MAX_USERS_PER_ORG_EXCEEDED") Detail:
2026-08-14T00:33:12.8339211Z         Maximum number of users per org (500) in 64808d5f33a0c71e882ef19c exceeded
2026-08-14T00:33:12.8340196Z         while trying to add users. Reason: Bad Request. Params: [500
2026-08-14T00:33:12.8340988Z         64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-08-14T00:33:12.8341607Z --- FAIL: TestMigCloudUserOrgAssignmentRS_basic (3.08s)
```

- 2026-08-15: MISSING
- 2026-08-16: MISSING
- 2026-08-17 PASS 6 seconds
- 2026-08-18: MISSING
- 2026-08-19 PASS 6 seconds
- 2026-08-20: MISSING
- 2026-08-21 PASS 8 seconds
- 2026-08-22: MISSING
- 2026-08-23: MISSING
- 2026-08-24 PASS 6 seconds
- 2026-08-25: MISSING
- 2026-08-26 PASS 6 seconds
- 2026-08-27: MISSING
- 2026-08-28 PASS 6 seconds
- 2026-08-29: MISSING
- 2026-08-30: MISSING
- 2026-08-31 PASS 6 seconds
- 2026-09-01: MISSING
- 2026-09-02 PASS 6 seconds
- 2026-09-03: MISSING
- 2026-09-04 PASS 6 seconds

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 6 seconds
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 6 seconds
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 7 seconds
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 6 seconds
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 6 seconds
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 6 seconds
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
