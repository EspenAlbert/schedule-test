# network/privatelinkendpoint/TestMigNetworkPrivateLinkEndpoint_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-31 00:42](#error-2025-08-31t0042070000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b3977a0a66c308153eece3/limits | qa | flaky_500 | 244.05s
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 3.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 4 minutes
- 2025-08-07 PASS 5 minutes
- 2025-08-08 PASS 3 minutes
- 2025-08-09 PASS 4 minutes
- 2025-08-10 PASS 3 minutes
- 2025-08-11 PASS 4 minutes
- 2025-08-12 PASS 3 minutes
- 2025-08-13 PASS 4 minutes
- 2025-08-14 PASS 3 minutes
- 2025-08-15 PASS 4 minutes
- 2025-08-16 PASS 3 minutes
- 2025-08-17 PASS 3 minutes
- 2025-08-18 PASS 4 minutes
- 2025-08-19 PASS 4 minutes
- 2025-08-20
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-08-21 PASS 4 minutes
- 2025-08-22 PASS 3 minutes
- 2025-08-23 PASS 4 minutes
- 2025-08-24 PASS 4 minutes
- 2025-08-25 PASS 3 minutes
- 2025-08-26 PASS 3 minutes
- 2025-08-27 PASS 4 minutes
- 2025-08-28 PASS 3 minutes
- 2025-08-29 PASS 3 minutes
- 2025-08-30 PASS 4 minutes
- 2025-08-31

### Error 2025-08-31T00:42:07+00:00
```
2025-08-31T00:42:07.1223890Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-08-31T00:42:07.1227199Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-08-31T00:42:07.1258091Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-08-31T00:42:07.1258812Z     resource_privatelink_endpoint_migration_test.go:22: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-31T00:42:07.1259339Z         
2025-08-31T00:42:07.1259731Z         Error: error when getting project properties after create
2025-08-31T00:42:07.1260075Z         
2025-08-31T00:42:07.1260392Z           with mongodbatlas_project.test,
2025-08-31T00:42:07.1261007Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-08-31T00:42:07.1261582Z           14: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:42:07.1261885Z         
2025-08-31T00:42:07.1262554Z         error getting project (68b3977a0a66c308153eece3): error getting project's
2025-08-31T00:42:07.1263023Z         limits (68b3977a0a66c308153eece3):
2025-08-31T00:42:07.1263737Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b3977a0a66c308153eece3/limits
2025-08-31T00:42:07.1264422Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:42:07.1265009Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:42:07.1265419Z         BadRequestDetail: 
2025-08-31T00:42:07.1266276Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (244.46s)
```

- 2025-09-01
  - FAIL 3 seconds

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5825967Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-09-01T00:42:46.5829410Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-09-01T00:42:46.5898341Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-09-01T00:42:46.5899006Z     resource_privatelink_endpoint_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:42:46.5899484Z         
2025-09-01T00:42:46.5899914Z         Error: error creating project: test-acc-tf-p-1360643724298590891
2025-09-01T00:42:46.5900272Z         
2025-09-01T00:42:46.5900585Z           with mongodbatlas_project.test,
2025-09-01T00:42:46.5901315Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-01T00:42:46.5901873Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:42:46.5902178Z         
2025-09-01T00:42:46.5902664Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:42:46.5903326Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:42:46.5903965Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:42:46.5904583Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:42:46.5905002Z         BadRequestDetail: 
2025-09-01T00:42:46.5905357Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (3.26s)
```

  - PASS 5 minutes
  - PASS 7 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-09-02 PASS 3 minutes
- 2025-09-03 PASS 4 minutes
- 2025-09-04 PASS 4 minutes