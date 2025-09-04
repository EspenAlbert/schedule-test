# project/projectinvitation/TestMigProjectInvitation_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:41](#error-2025-08-17t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122f3f746882a383ca90b/limits | qa | flaky_500 | 37.05s
[2025-08-24 00:42](#error-2025-08-24t0042090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d584192cd1cc589e7d1/limits | qa | flaky_500 | 35.07s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.05s
[2025-09-01 06:04](#error-2025-09-01t0604500000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 16 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 9 seconds
- 2025-08-10 PASS 11 seconds
- 2025-08-11 PASS 14 seconds
- 2025-08-12
  - PASS 15 seconds
  - PASS 9 seconds
- 2025-08-13 PASS 10 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15 PASS 11 seconds
- 2025-08-16 PASS 9 seconds
- 2025-08-17

### Error 2025-08-17T00:41:24+00:00
```
2025-08-17T00:41:24.5279245Z === RUN   TestMigProjectInvitation_basic
2025-08-17T00:41:24.5286767Z   
2025-08-17T00:41:24.5287311Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-08-17T00:41:24.5287776Z         
2025-08-17T00:41:24.5288158Z         Error: error when getting project properties after create
2025-08-17T00:41:24.5288487Z         
2025-08-17T00:41:24.5288787Z           with mongodbatlas_project.test,
2025-08-17T00:41:24.5289382Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-08-17T00:41:24.5290049Z           14: 		resource "mongodbatlas_project" "test" {
2025-08-17T00:41:24.5290343Z         
2025-08-17T00:41:24.5290786Z         error getting project (68a122f3f746882a383ca90b): error getting project's
2025-08-17T00:41:24.5291245Z         limits (68a122f3f746882a383ca90b):
2025-08-17T00:41:24.5291817Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122f3f746882a383ca90b/limits
2025-08-17T00:41:24.5292476Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:41:24.5293053Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:41:24.5293449Z         BadRequestDetail: 
2025-08-17T00:41:24.5293742Z --- FAIL: TestMigProjectInvitation_basic (37.45s)
```

- 2025-08-18 PASS 10 seconds
- 2025-08-19 PASS 16 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 14 seconds
- 2025-08-21 PASS 13 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 10 seconds
- 2025-08-24

### Error 2025-08-24T00:42:09+00:00
```
2025-08-24T00:42:09.0646535Z === RUN   TestMigProjectInvitation_basic
2025-08-24T00:42:09.0653955Z   
2025-08-24T00:42:09.0654455Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:42:09.0654912Z         
2025-08-24T00:42:09.0655289Z         Error: error when getting project properties after create
2025-08-24T00:42:09.0655621Z         
2025-08-24T00:42:09.0655921Z           with mongodbatlas_project.test,
2025-08-24T00:42:09.0656606Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:09.0657156Z           14: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:09.0657450Z         
2025-08-24T00:42:09.0657899Z         error getting project (68aa5d584192cd1cc589e7d1): error getting project's
2025-08-24T00:42:09.0658356Z         limits (68aa5d584192cd1cc589e7d1):
2025-08-24T00:42:09.0658931Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d584192cd1cc589e7d1/limits
2025-08-24T00:42:09.0659600Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:09.0660171Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:09.0660559Z         BadRequestDetail: 
2025-08-24T00:42:09.0660857Z --- FAIL: TestMigProjectInvitation_basic (35.67s)
```

- 2025-08-25 PASS 11 seconds
- 2025-08-26 PASS 14 seconds
- 2025-08-27 PASS 12 seconds
- 2025-08-28 PASS 12 seconds
- 2025-08-29 PASS 8 seconds
- 2025-08-30 PASS 9 seconds
- 2025-08-31 PASS 38 seconds
- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2737942Z === RUN   TestMigProjectInvitation_basic
2025-09-01T00:34:53.2745377Z   
2025-09-01T00:34:53.2745922Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:34:53.2746378Z         
2025-09-01T00:34:53.2746786Z         Error: error creating project: test-acc-tf-p-3895421545562465363
2025-09-01T00:34:53.2747134Z         
2025-09-01T00:34:53.2747438Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2748024Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2748571Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2748866Z         
2025-09-01T00:34:53.2749337Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2749979Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2750601Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2751324Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2751734Z         BadRequestDetail: 
2025-09-01T00:34:53.2752031Z --- FAIL: TestMigProjectInvitation_basic (2.51s)
```

  - FAIL 2 seconds

### Error 2025-09-01T06:04:50+00:00
```
2025-09-01T06:04:50.5712992Z === RUN   TestMigProjectInvitation_basic
2025-09-01T06:04:50.5719941Z    test_step_number=1 test_working_directory=/tmp/plugintest1461230190
2025-09-01T06:04:50.5721008Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-01T06:04:50.5722072Z         
2025-09-01T06:04:50.5722722Z         Error: error creating project: test-acc-tf-p-5893407934529312038
2025-09-01T06:04:50.5723086Z         
2025-09-01T06:04:50.5723397Z           with mongodbatlas_project.test,
2025-09-01T06:04:50.5724013Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-01T06:04:50.5724572Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-01T06:04:50.5724863Z         
2025-09-01T06:04:50.5725372Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T06:04:50.5726037Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T06:04:50.5726667Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T06:04:50.5727295Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T06:04:50.5727786Z         BadRequestDetail: 
2025-09-01T06:04:50.5728096Z --- FAIL: TestMigProjectInvitation_basic (2.10s)
```

  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 14 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 14 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 8 seconds