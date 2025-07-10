# network/privateendpointregionalmode/TestMigPrivateEndpointRegionalMode_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 109) FAIL(x 4)
Success rate: 96.46%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029570000) |  | qa |  | 4.03s
[2025-06-05 00:54](#error-2025-06-05t0054090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 6.05s
[2025-06-29 00:44](#error-2025-06-29t0044250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860898556291349dce6c800/limits | qa | flaky_500 | 100.08s
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c406690ae45e168bd269/limits | qa | flaky_500 | 102.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 17 seconds
- 2025-04-13 PASS 17 seconds
- 2025-04-14 PASS 21 seconds
- 2025-04-15 PASS 16 seconds
- 2025-04-16
  - PASS 24 seconds
  - PASS 18 seconds
- 2025-04-17 PASS 16 seconds
- 2025-04-18 PASS 19 seconds
- 2025-04-19 PASS 23 seconds
- 2025-04-20 PASS 23 seconds
- 2025-04-21 PASS 23 seconds
- 2025-04-22 PASS 16 seconds
- 2025-04-23 PASS 16 seconds
- 2025-04-24 PASS 18 seconds
- 2025-04-25 PASS 23 seconds
- 2025-04-26 PASS 43 seconds
- 2025-04-27 PASS 18 seconds
- 2025-04-28 PASS 22 seconds
- 2025-04-29 PASS 19 seconds
- 2025-04-30
  - PASS 22 seconds
  - PASS 18 seconds
- 2025-05-01
  - PASS 16 seconds
  - PASS 23 seconds
  - PASS 16 seconds
  - PASS 16 seconds
  - PASS 15 seconds
  - PASS 22 seconds
  - PASS 21 seconds
- 2025-05-02 PASS 16 seconds
- 2025-05-03 PASS 15 seconds
- 2025-05-04 PASS 23 seconds
- 2025-05-05 PASS 16 seconds
- 2025-05-06 PASS 16 seconds
- 2025-05-07 PASS 17 seconds
- 2025-05-08 PASS 16 seconds
- 2025-05-09 PASS 42 seconds
- 2025-05-10 PASS 49 seconds
- 2025-05-11

### Error 2025-05-11T00:29:57+00:00
```
2025-05-11T00:29:57.8809464Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-05-11T00:29:57.8812508Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-05-11T00:29:57.8835177Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2025-05-11T00:29:57.8835899Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:57.8836434Z         
2025-05-11T00:29:57.8836881Z         Error: error creating project: test-acc-tf-p-8267184192011665647
2025-05-11T00:29:57.8837281Z         
2025-05-11T00:29:57.8837642Z           with mongodbatlas_project.project,
2025-05-11T00:29:57.8838297Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "project":
2025-05-11T00:29:57.8839065Z           14: 		resource "mongodbatlas_project" "project" {
2025-05-11T00:29:57.8839417Z         
2025-05-11T00:29:57.8839920Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:57.8840354Z         type
2025-05-11T00:29:57.8840690Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (4.31s)
```

- 2025-05-12 PASS 43 seconds
- 2025-05-13
  - PASS 45 seconds
  - PASS 44 seconds
- 2025-05-14 PASS 51 seconds
- 2025-05-15 PASS 44 seconds
- 2025-05-16 PASS 45 seconds
- 2025-05-17 PASS 46 seconds
- 2025-05-18 PASS 43 seconds
- 2025-05-19 PASS 49 seconds
- 2025-05-20 PASS 47 seconds
- 2025-05-21 PASS 44 seconds
- 2025-05-22 PASS 43 seconds
- 2025-05-23 PASS 50 seconds
- 2025-05-24 PASS 46 seconds
- 2025-05-25 PASS 51 seconds
- 2025-05-26 PASS 51 seconds
- 2025-05-27 PASS 45 seconds
- 2025-05-28
  - PASS 53 seconds
  - PASS 49 seconds
- 2025-05-29 PASS a minute
- 2025-05-30 PASS a minute
- 2025-05-31 PASS a minute
- 2025-06-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-06-02
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-06-03 PASS a minute
- 2025-06-04 PASS a minute
- 2025-06-05

### Error 2025-06-05T00:54:09+00:00
```
2025-06-05T00:54:09.2550672Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-06-05T00:54:09.2572332Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-06-05T00:54:09.2597609Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2025-06-05T00:54:09.2598317Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:54:09.2598841Z         
2025-06-05T00:54:09.2599283Z         Error: error creating project: test-acc-tf-p-6722962497799386318
2025-06-05T00:54:09.2599665Z         
2025-06-05T00:54:09.2600001Z           with mongodbatlas_project.project,
2025-06-05T00:54:09.2600654Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "project":
2025-06-05T00:54:09.2601253Z           14: 		resource "mongodbatlas_project" "project" {
2025-06-05T00:54:09.2601577Z         
2025-06-05T00:54:09.2602068Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:54:09.2602717Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:54:09.2603317Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:54:09.2603775Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (6.47s)
```

- 2025-06-06 PASS a minute
- 2025-06-07 PASS a minute
- 2025-06-08 PASS a minute
- 2025-06-09 PASS a minute
- 2025-06-10 PASS a minute
- 2025-06-11
  - PASS a minute
  - PASS a minute
- 2025-06-12 PASS a minute
- 2025-06-13 PASS a minute
- 2025-06-14 PASS a minute
- 2025-06-15 PASS a minute
- 2025-06-16 PASS a minute
- 2025-06-17 PASS a minute
- 2025-06-18 PASS a minute
- 2025-06-19 PASS a minute
- 2025-06-20 PASS a minute
- 2025-06-21 PASS a minute
- 2025-06-22 PASS a minute
- 2025-06-23 PASS a minute
- 2025-06-24 PASS a minute
- 2025-06-25 PASS a minute
- 2025-06-26 PASS a minute
- 2025-06-27 PASS a minute
- 2025-06-28 PASS a minute
- 2025-06-29

### Error 2025-06-29T00:44:25+00:00
```
2025-06-29T00:44:25.8060741Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-06-29T00:44:25.8065849Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-06-29T00:44:25.8124323Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2025-06-29T00:44:25.8125290Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:44:25.8125908Z         
2025-06-29T00:44:25.8126390Z         Error: error when getting project properties after create
2025-06-29T00:44:25.8126824Z         
2025-06-29T00:44:25.8127190Z           with mongodbatlas_project.project,
2025-06-29T00:44:25.8127949Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-06-29T00:44:25.8128658Z           12: 		resource "mongodbatlas_project" "project" {
2025-06-29T00:44:25.8128977Z         
2025-06-29T00:44:25.8129558Z         error getting project (6860898556291349dce6c800): error getting project's
2025-06-29T00:44:25.8130254Z         limits (6860898556291349dce6c800):
2025-06-29T00:44:25.8130890Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898556291349dce6c800/limits
2025-06-29T00:44:25.8131699Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:44:25.8132416Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:44:25.8132935Z         BadRequestDetail: 
2025-06-29T00:44:25.8133867Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (100.83s)
```

- 2025-06-30 PASS a minute
- 2025-07-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06

### Error 2025-07-06T00:44:46+00:00
```
2025-07-06T00:44:46.6397294Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6400130Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6446039Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6446810Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6447372Z         
2025-07-06T00:44:46.6447768Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6448115Z         
2025-07-06T00:44:46.6448441Z           with mongodbatlas_project.project,
2025-07-06T00:44:46.6449077Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "project":
2025-07-06T00:44:46.6449663Z           14: 		resource "mongodbatlas_project" "project" {
2025-07-06T00:44:46.6450105Z         
2025-07-06T00:44:46.6450568Z         error getting project (6869c406690ae45e168bd269): error getting project's
2025-07-06T00:44:46.6451045Z         limits (6869c406690ae45e168bd269):
2025-07-06T00:44:46.6451633Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c406690ae45e168bd269/limits
2025-07-06T00:44:46.6452321Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6452914Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6453327Z         BadRequestDetail: 
2025-07-06T00:44:46.6454228Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (102.86s)
```

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10 PASS a minute