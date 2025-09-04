# config/customdbrole/TestAccConfigRSCustomDBRoles_UpdatedInheritRoles Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:33](#error-2025-08-17t0033150000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122d3f746882a383c8b8c/limits | qa | flaky_500 | 81.04s
[2025-08-24 00:32](#error-2025-08-24t0032330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d294192cd1cc589b7ce/limits | qa | flaky_500 | 33.01s
[2025-08-31 00:32](#error-2025-08-31t0032170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b3977e0a66c308153ef9de/limits | qa | flaky_500 | 58.05s
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 31 seconds
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS 28 seconds
- 2025-08-09 PASS 30 seconds
- 2025-08-10 PASS 30 seconds
- 2025-08-11 PASS 35 seconds
- 2025-08-12 PASS 29 seconds
- 2025-08-13 PASS 29 seconds
- 2025-08-14 PASS 29 seconds
- 2025-08-15 PASS 28 seconds
- 2025-08-16 PASS 27 seconds
- 2025-08-17

### Error 2025-08-17T00:33:15+00:00
```
2025-08-17T00:33:15.5066182Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-08-17T00:33:15.5068774Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-08-17T00:33:15.5093685Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-08-17T00:33:15.5094853Z     resource_custom_db_role_test.go:498: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:33:15.5095825Z         
2025-08-17T00:33:15.5096469Z         Error: error when getting project properties after create
2025-08-17T00:33:15.5097012Z         
2025-08-17T00:33:15.5097503Z           with mongodbatlas_project.test,
2025-08-17T00:33:15.5098535Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T00:33:15.5099793Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T00:33:15.5100329Z         
2025-08-17T00:33:15.5101193Z         error getting project (68a122d3f746882a383c8b8c): error getting project's
2025-08-17T00:33:15.5102003Z         limits (68a122d3f746882a383c8b8c):
2025-08-17T00:33:15.5102963Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d3f746882a383c8b8c/limits
2025-08-17T00:33:15.5104084Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:33:15.5105061Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:33:15.5105883Z         BadRequestDetail: 
2025-08-17T00:33:15.5128469Z   
2025-08-17T00:33:15.5176670Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (81.36s)
```

- 2025-08-18 PASS 28 seconds
- 2025-08-19 PASS 36 seconds
- 2025-08-20
  - PASS 30 seconds
  - PASS 33 seconds
- 2025-08-21 PASS 28 seconds
- 2025-08-22 PASS 28 seconds
- 2025-08-23 PASS 32 seconds
- 2025-08-24

### Error 2025-08-24T00:32:33+00:00
```
2025-08-24T00:32:33.3450096Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-08-24T00:32:33.3452660Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-08-24T00:32:33.3478281Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-08-24T00:32:33.3479287Z     resource_custom_db_role_test.go:498: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:32:33.3479989Z         
2025-08-24T00:32:33.3480642Z         Error: error when getting project properties after create
2025-08-24T00:32:33.3481196Z         
2025-08-24T00:32:33.3481694Z           with mongodbatlas_project.test,
2025-08-24T00:32:33.3482712Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:33.3483641Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:33.3484128Z         
2025-08-24T00:32:33.3485087Z         error getting project (68aa5d294192cd1cc589b7ce): error getting project's
2025-08-24T00:32:33.3485873Z         limits (68aa5d294192cd1cc589b7ce):
2025-08-24T00:32:33.3486862Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d294192cd1cc589b7ce/limits
2025-08-24T00:32:33.3488017Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:33.3489012Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:33.3489680Z         BadRequestDetail: 
2025-08-24T00:32:33.3490332Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (33.12s)
```

- 2025-08-25 PASS 33 seconds
- 2025-08-26 PASS 29 seconds
- 2025-08-27 PASS 29 seconds
- 2025-08-28 PASS 27 seconds
- 2025-08-29 PASS 31 seconds
- 2025-08-30 PASS 28 seconds
- 2025-08-31

### Error 2025-08-31T00:32:17+00:00
```
2025-08-31T00:32:17.7200357Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-08-31T00:32:17.7203014Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-08-31T00:32:17.7257380Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-08-31T00:32:17.7258579Z     resource_custom_db_role_test.go:498: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-31T00:32:17.7259193Z         
2025-08-31T00:32:17.7259902Z         Error: error when getting project properties after create
2025-08-31T00:32:17.7260496Z         
2025-08-31T00:32:17.7261039Z           with mongodbatlas_project.test,
2025-08-31T00:32:17.7262112Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-31T00:32:17.7263087Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:32:17.7263602Z         
2025-08-31T00:32:17.7264603Z         error getting project (68b3977e0a66c308153ef9de): error getting project's
2025-08-31T00:32:17.7265441Z         limits (68b3977e0a66c308153ef9de):
2025-08-31T00:32:17.7266449Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b3977e0a66c308153ef9de/limits
2025-08-31T00:32:17.7267651Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:32:17.7268755Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:32:17.7269450Z         BadRequestDetail: 
2025-08-31T00:32:17.7270103Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (58.52s)
```

- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1390434Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-01T00:31:13.1392381Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-01T00:31:13.1445707Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-09-01T00:31:13.1446698Z     resource_custom_db_role_test.go:498: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:31:13.1447406Z         
2025-09-01T00:31:13.1448102Z         Error: error creating project: test-acc-tf-p-3300203108762089116
2025-09-01T00:31:13.1448695Z         
2025-09-01T00:31:13.1449192Z           with mongodbatlas_project.test,
2025-09-01T00:31:13.1450369Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:31:13.1451310Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:31:13.1451800Z         
2025-09-01T00:31:13.1452625Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:31:13.1453734Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:31:13.1454874Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:31:13.1455906Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:31:13.1456623Z         BadRequestDetail: 
2025-09-01T00:31:13.1507160Z   
2025-09-01T00:31:13.1610713Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (0.86s)
```

  - PASS 27 seconds
  - PASS 34 seconds
  - PASS 34 seconds
  - PASS 28 seconds
  - PASS 29 seconds
  - PASS 28 seconds
  - PASS 31 seconds
- 2025-09-02 PASS 29 seconds
- 2025-09-03 PASS 28 seconds
- 2025-09-04 PASS 30 seconds