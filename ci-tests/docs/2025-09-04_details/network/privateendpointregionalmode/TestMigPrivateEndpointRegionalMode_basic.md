# network/privateendpointregionalmode/TestMigPrivateEndpointRegionalMode_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:42](#error-2025-08-24t0042570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2c9bbb8c4ee1f81c9a/limits | qa | flaky_500 | 34.02s
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 3.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a minute
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS a minute
- 2025-08-09 PASS a minute
- 2025-08-10 PASS a minute
- 2025-08-11 PASS a minute
- 2025-08-12 PASS a minute
- 2025-08-13 PASS a minute
- 2025-08-14 PASS a minute
- 2025-08-15 PASS a minute
- 2025-08-16 PASS a minute
- 2025-08-17 PASS a minute
- 2025-08-18 PASS a minute
- 2025-08-19 PASS a minute
- 2025-08-20
  - PASS a minute
  - PASS a minute
- 2025-08-21 PASS a minute
- 2025-08-22 PASS a minute
- 2025-08-23 PASS a minute
- 2025-08-24

### Error 2025-08-24T00:42:57+00:00
```
2025-08-24T00:42:57.7168423Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-08-24T00:42:57.7173642Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-08-24T00:42:57.7189204Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2025-08-24T00:42:57.7190649Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:42:57.7191591Z         
2025-08-24T00:42:57.7192309Z         Error: error when getting project properties after create
2025-08-24T00:42:57.7193139Z         
2025-08-24T00:42:57.7193744Z           with mongodbatlas_project.project,
2025-08-24T00:42:57.7194878Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "project":
2025-08-24T00:42:57.7195945Z           14: 		resource "mongodbatlas_project" "project" {
2025-08-24T00:42:57.7196504Z         
2025-08-24T00:42:57.7197355Z         error getting project (68aa5d2c9bbb8c4ee1f81c9a): error getting project's
2025-08-24T00:42:57.7198237Z         limits (68aa5d2c9bbb8c4ee1f81c9a):
2025-08-24T00:42:57.7199345Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2c9bbb8c4ee1f81c9a/limits
2025-08-24T00:42:57.7200614Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:57.7201688Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:57.7202424Z         BadRequestDetail: 
2025-08-24T00:42:57.7203216Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (34.16s)
```

- 2025-08-25 PASS a minute
- 2025-08-26 PASS a minute
- 2025-08-27 PASS a minute
- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS a minute
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL 3 seconds

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5784223Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-09-01T00:42:46.5787185Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-09-01T00:42:46.5815824Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2025-09-01T00:42:46.5816509Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:42:46.5817014Z         
2025-09-01T00:42:46.5817716Z         Error: error creating project: test-acc-tf-p-8911627072232189725
2025-09-01T00:42:46.5818095Z         
2025-09-01T00:42:46.5818420Z           with mongodbatlas_project.project,
2025-09-01T00:42:46.5819053Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "project":
2025-09-01T00:42:46.5819639Z           14: 		resource "mongodbatlas_project" "project" {
2025-09-01T00:42:46.5819951Z         
2025-09-01T00:42:46.5820446Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:42:46.5821113Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:42:46.5821750Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:42:46.5822364Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:42:46.5822790Z         BadRequestDetail: 
2025-09-01T00:42:46.5823140Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (3.16s)
```

  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-09-02 PASS a minute
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute