# project/project/TestMigProject_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:41](#error-2025-08-17t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122dbaafa9a76ca8bc5bc/limits | qa | flaky_500 | 56.05s
[2025-08-24 00:42](#error-2025-08-24t0042090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d364192cd1cc589ce5e/limits | qa | flaky_500 | 36.01s
[2025-08-31 00:45](#error-2025-08-31t0045030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397870a66c308153f07f2/limits | qa | flaky_500 | 38.03s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 15 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 8 seconds
- 2025-08-10 PASS 14 seconds
- 2025-08-11 PASS 12 seconds
- 2025-08-12
  - PASS 13 seconds
  - PASS 8 seconds
- 2025-08-13 PASS 10 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 10 seconds
- 2025-08-16 PASS 10 seconds
- 2025-08-17

### Error 2025-08-17T00:41:24+00:00
```
2025-08-17T00:41:24.5151039Z === RUN   TestMigProject_basic
2025-08-17T00:41:24.5169729Z   
2025-08-17T00:41:24.5170745Z     resource_project_migration_test.go:24: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:41:24.5171661Z         
2025-08-17T00:41:24.5172063Z         Error: error when getting project properties after create
2025-08-17T00:41:24.5172407Z         
2025-08-17T00:41:24.5172702Z           with mongodbatlas_project.test,
2025-08-17T00:41:24.5173293Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T00:41:24.5173822Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T00:41:24.5174103Z         
2025-08-17T00:41:24.5174773Z         error getting project (68a122dbaafa9a76ca8bc5bc): error getting project's
2025-08-17T00:41:24.5175236Z         limits (68a122dbaafa9a76ca8bc5bc):
2025-08-17T00:41:24.5175802Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122dbaafa9a76ca8bc5bc/limits
2025-08-17T00:41:24.5176477Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:41:24.5177050Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:41:24.5177431Z         BadRequestDetail: 
2025-08-17T00:41:24.5177691Z --- FAIL: TestMigProject_basic (56.53s)
```

- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 12 seconds
- 2025-08-20
  - PASS 9 seconds
  - PASS 13 seconds
- 2025-08-21 PASS 12 seconds
- 2025-08-22 PASS 8 seconds
- 2025-08-23 PASS 9 seconds
- 2025-08-24

### Error 2025-08-24T00:42:09+00:00
```
2025-08-24T00:42:09.0376706Z === RUN   TestMigProject_basic
2025-08-24T00:42:09.0387327Z   
2025-08-24T00:42:09.0387950Z     resource_project_migration_test.go:24: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-24T00:42:09.0388478Z         
2025-08-24T00:42:09.0388895Z         Error: error when getting project properties after create
2025-08-24T00:42:09.0389336Z         
2025-08-24T00:42:09.0389655Z           with mongodbatlas_project.test,
2025-08-24T00:42:09.0390300Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:09.0390891Z           14: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:09.0391201Z         
2025-08-24T00:42:09.0391912Z         error getting project (68aa5d364192cd1cc589ce5e): error getting project's
2025-08-24T00:42:09.0392436Z         limits (68aa5d364192cd1cc589ce5e):
2025-08-24T00:42:09.0393055Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d364192cd1cc589ce5e/limits
2025-08-24T00:42:09.0393785Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:09.0394410Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:09.0394915Z         BadRequestDetail: 
2025-08-24T00:42:09.0395197Z --- FAIL: TestMigProject_basic (36.09s)
```

- 2025-08-25 PASS 11 seconds
- 2025-08-26 PASS 13 seconds
- 2025-08-27 PASS 12 seconds
- 2025-08-28 PASS 12 seconds
- 2025-08-29 PASS 10 seconds
- 2025-08-30 PASS 8 seconds
- 2025-08-31

### Error 2025-08-31T00:45:03+00:00
```
2025-08-31T00:45:03.7462614Z === RUN   TestMigProject_basic
2025-08-31T00:45:03.7492780Z    test_name=TestMigProject_basic test_terraform_path=/home/runner/work/_temp/19bede8d-e9f3-4e59-9c28-03b9edc97393/terraform test_working_directory=/tmp/plugintest3499965262
2025-08-31T00:45:03.7494137Z     resource_project_migration_test.go:24: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-31T00:45:03.7494705Z         
2025-08-31T00:45:03.7495098Z         Error: error when getting project properties after create
2025-08-31T00:45:03.7495521Z         
2025-08-31T00:45:03.7495817Z           with mongodbatlas_project.test,
2025-08-31T00:45:03.7496506Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-08-31T00:45:03.7497157Z           14: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:45:03.7497441Z         
2025-08-31T00:45:03.7498246Z         error getting project (68b397870a66c308153f07f2): error getting project's
2025-08-31T00:45:03.7498846Z         limits (68b397870a66c308153f07f2):
2025-08-31T00:45:03.7499510Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397870a66c308153f07f2/limits
2025-08-31T00:45:03.7500407Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:45:03.7501086Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:45:03.7501544Z         BadRequestDetail: 
2025-08-31T00:45:03.7501838Z --- FAIL: TestMigProject_basic (38.33s)
```

- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2381370Z === RUN   TestMigProject_basic
2025-09-01T00:34:53.2394669Z    test_terraform_path=/home/runner/work/_temp/fb33b513-ebaa-40af-9cae-1ded3d2fd2ee/terraform test_name=TestMigProject_basic
2025-09-01T00:34:53.2395647Z     resource_project_migration_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:34:53.2396423Z         
2025-09-01T00:34:53.2397187Z         Error: error creating project: test-acc-tf-p-5649612222871210922
2025-09-01T00:34:53.2397655Z         
2025-09-01T00:34:53.2397968Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2398724Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2399371Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2399672Z         
2025-09-01T00:34:53.2400254Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2401451Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2402254Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2402985Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2403405Z         BadRequestDetail: 
2025-09-01T00:34:53.2403773Z --- FAIL: TestMigProject_basic (2.45s)
```

  - PASS 13 seconds
  - PASS 14 seconds
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 12 seconds
  - PASS 10 seconds
- 2025-09-02 PASS 12 seconds
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 9 seconds