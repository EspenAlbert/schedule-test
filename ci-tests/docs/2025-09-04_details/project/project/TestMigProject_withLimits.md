# project/project/TestMigProject_withLimits Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 5)
Success rate: 87.18%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-10 00:39](#error-2025-08-10t0039430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6897e8f0dacc1950586dd7da/limits | qa | flaky_500 | 44.04s
[2025-08-20 14:14](#error-2025-08-20t1414130000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d4dff98188003c99bdb1/limits | qa | flaky_500 | 67.08s
[2025-08-24 00:42](#error-2025-08-24t0042090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d9f9bbb8c4ee1f85899/limits | qa | flaky_500 | 35.07s
[2025-08-31 00:45](#error-2025-08-31t0045030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397cd7e07f9709daef1d1/limits | qa | flaky_500 | 67.06s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.10s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 27 seconds
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS 13 seconds
- 2025-08-09 PASS 11 seconds
- 2025-08-10

### Error 2025-08-10T00:39:43+00:00
```
2025-08-10T00:39:43.8575862Z === RUN   TestMigProject_withLimits
2025-08-10T00:39:43.8592618Z    test_terraform_path=/home/runner/work/_temp/ed68cf79-8601-4a87-a3c6-962c5011f100/terraform test_step_number=2
2025-08-10T00:39:43.8593465Z     resource_project_migration_test.go:124: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-08-10T00:39:43.8594107Z         
2025-08-10T00:39:43.8594440Z         Error: error when getting project properties
2025-08-10T00:39:43.8594734Z         
2025-08-10T00:39:43.8595042Z           with data.mongodbatlas_project.test,
2025-08-10T00:39:43.8595616Z           on terraform_plugin_test.tf line 29, in data "mongodbatlas_project" "test":
2025-08-10T00:39:43.8596130Z           29: 		data "mongodbatlas_project" "test" {
2025-08-10T00:39:43.8596408Z         
2025-08-10T00:39:43.8596843Z         error getting project (6897e8f0dacc1950586dd7da): error getting project's
2025-08-10T00:39:43.8597294Z         limits (6897e8f0dacc1950586dd7da):
2025-08-10T00:39:43.8597877Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8f0dacc1950586dd7da/limits
2025-08-10T00:39:43.8598733Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-10T00:39:43.8599307Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-10T00:39:43.8599700Z         BadRequestDetail: 
2025-08-10T00:39:43.8599975Z --- FAIL: TestMigProject_withLimits (44.42s)
```

- 2025-08-11 PASS 21 seconds
- 2025-08-12
  - PASS 22 seconds
  - PASS 12 seconds
- 2025-08-13 PASS 10 seconds
- 2025-08-14 PASS 11 seconds
- 2025-08-15 PASS 17 seconds
- 2025-08-16 PASS 12 seconds
- 2025-08-17 PASS 13 seconds
- 2025-08-18 PASS 14 seconds
- 2025-08-19 PASS 20 seconds
- 2025-08-20
  - PASS 14 seconds
  - FAIL a minute

### Error 2025-08-20T14:14:13+00:00
```
2025-08-20T14:14:13.0473363Z === RUN   TestMigProject_withLimits
2025-08-20T14:14:13.0485037Z    test_step_number=2 test_name=TestMigProject_withLimits test_terraform_path=/home/runner/work/_temp/b1e24623-9099-4574-a360-53a74d38537b/terraform test_working_directory=/tmp/plugintest4246939277
2025-08-20T14:14:13.0486131Z     resource_project_migration_test.go:124: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-08-20T14:14:13.0486579Z         
2025-08-20T14:14:13.0487032Z         Error: error when getting project properties
2025-08-20T14:14:13.0487337Z         
2025-08-20T14:14:13.0487655Z           with data.mongodbatlas_project.test,
2025-08-20T14:14:13.0488231Z           on terraform_plugin_test.tf line 29, in data "mongodbatlas_project" "test":
2025-08-20T14:14:13.0488740Z           29: 		data "mongodbatlas_project" "test" {
2025-08-20T14:14:13.0489015Z         
2025-08-20T14:14:13.0489459Z         error getting project (68a5d4dff98188003c99bdb1): error getting project's
2025-08-20T14:14:13.0489910Z         limits (68a5d4dff98188003c99bdb1):
2025-08-20T14:14:13.0490474Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4dff98188003c99bdb1/limits
2025-08-20T14:14:13.0491138Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:14:13.0491709Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:14:13.0492128Z         BadRequestDetail: 
2025-08-20T14:14:13.0492398Z --- FAIL: TestMigProject_withLimits (67.82s)
```

- 2025-08-21 PASS 18 seconds
- 2025-08-22 PASS 12 seconds
- 2025-08-23 PASS 13 seconds
- 2025-08-24

### Error 2025-08-24T00:42:09+00:00
```
2025-08-24T00:42:09.0444887Z === RUN   TestMigProject_withLimits
2025-08-24T00:42:09.0452150Z    test_terraform_path=/home/runner/work/_temp/1a92612f-a7bd-43c8-9b02-683bcfefdfca/terraform test_working_directory=/tmp/plugintest607399717
2025-08-24T00:42:09.0453027Z     resource_project_migration_test.go:124: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:42:09.0453451Z         
2025-08-24T00:42:09.0453835Z         Error: error when getting project properties after create
2025-08-24T00:42:09.0454167Z         
2025-08-24T00:42:09.0454469Z           with mongodbatlas_project.test,
2025-08-24T00:42:09.0455063Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:09.0455612Z           14: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:09.0455901Z         
2025-08-24T00:42:09.0456632Z         error getting project (68aa5d9f9bbb8c4ee1f85899): error getting project's
2025-08-24T00:42:09.0457139Z         limits (68aa5d9f9bbb8c4ee1f85899):
2025-08-24T00:42:09.0457746Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d9f9bbb8c4ee1f85899/limits
2025-08-24T00:42:09.0458428Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:09.0459007Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:09.0459401Z         BadRequestDetail: 
2025-08-24T00:42:09.0459687Z --- FAIL: TestMigProject_withLimits (35.72s)
```

- 2025-08-25 PASS 16 seconds
- 2025-08-26 PASS 20 seconds
- 2025-08-27 PASS 18 seconds
- 2025-08-28 PASS 20 seconds
- 2025-08-29 PASS 11 seconds
- 2025-08-30 PASS 11 seconds
- 2025-08-31

### Error 2025-08-31T00:45:03+00:00
```
2025-08-31T00:45:03.7503682Z === RUN   TestMigProject_withLimits
2025-08-31T00:45:03.7516213Z    test_name=TestMigProject_withLimits test_terraform_path=/home/runner/work/_temp/19bede8d-e9f3-4e59-9c28-03b9edc97393/terraform test_working_directory=/tmp/plugintest1986643378 test_step_number=2
2025-08-31T00:45:03.7517361Z     resource_project_migration_test.go:124: Step 2/2 error: Error running post-apply non-refresh plan: exit status 1
2025-08-31T00:45:03.7517837Z         
2025-08-31T00:45:03.7518155Z         Error: error when getting project properties
2025-08-31T00:45:03.7518452Z         
2025-08-31T00:45:03.7518768Z           with data.mongodbatlas_project.test,
2025-08-31T00:45:03.7519338Z           on terraform_plugin_test.tf line 29, in data "mongodbatlas_project" "test":
2025-08-31T00:45:03.7520047Z           29: 		data "mongodbatlas_project" "test" {
2025-08-31T00:45:03.7520330Z         
2025-08-31T00:45:03.7520865Z         error getting project (68b397cd7e07f9709daef1d1): error getting project's
2025-08-31T00:45:03.7521384Z         limits (68b397cd7e07f9709daef1d1):
2025-08-31T00:45:03.7521979Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397cd7e07f9709daef1d1/limits
2025-08-31T00:45:03.7522783Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:45:03.7523366Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:45:03.7523754Z         BadRequestDetail: 
2025-08-31T00:45:03.7524024Z --- FAIL: TestMigProject_withLimits (67.60s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2437477Z === RUN   TestMigProject_withLimits
2025-09-01T00:34:53.2444845Z   
2025-09-01T00:34:53.2445299Z     resource_project_migration_test.go:124: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:34:53.2445751Z         
2025-09-01T00:34:53.2446151Z         Error: error creating project: test-acc-tf-p-6021531025836767296
2025-09-01T00:34:53.2446498Z         
2025-09-01T00:34:53.2446791Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2447374Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2447901Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2448192Z         
2025-09-01T00:34:53.2448666Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2449298Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2449905Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2450628Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2451244Z         BadRequestDetail: 
2025-09-01T00:34:53.2451533Z --- FAIL: TestMigProject_withLimits (1.98s)
```

  - PASS 20 seconds
  - PASS 21 seconds
  - PASS 19 seconds
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 20 seconds
  - PASS 12 seconds
- 2025-09-02 PASS 24 seconds
- 2025-09-03 PASS 11 seconds
- 2025-09-04 PASS 12 seconds