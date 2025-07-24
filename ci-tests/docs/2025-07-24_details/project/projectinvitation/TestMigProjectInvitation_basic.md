# project/projectinvitation/TestMigProjectInvitation_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:43](#error-2025-06-29t0043460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089cb49709c3a5a3ca137/limits | qa | flaky_500 | 36.05s
[2025-07-06 00:37](#error-2025-07-06t0037510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c42c690ae45e168be017/limits | qa | flaky_500 | 33.09s
[2025-07-10 13:15](#error-2025-07-10t1315100000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb2efd583001f9eec42e/limits | qa | flaky_500 | 34.08s
[2025-07-13 00:39](#error-2025-07-13t0039280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fea6006d8d55bbaa2f92/limits | qa | flaky_500 | 42.09s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 15 seconds
- 2025-06-26 PASS 14 seconds
- 2025-06-27 PASS 11 seconds
- 2025-06-28 PASS 9 seconds
- 2025-06-29

### Error 2025-06-29T00:43:46+00:00
```
2025-06-29T00:43:46.9644685Z === RUN   TestMigProjectInvitation_basic
2025-06-29T00:43:46.9652088Z   
2025-06-29T00:43:46.9652577Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-06-29T00:43:46.9653028Z         
2025-06-29T00:43:46.9653399Z         Error: error when getting project properties after create
2025-06-29T00:43:46.9653721Z         
2025-06-29T00:43:46.9654011Z           with mongodbatlas_project.test,
2025-06-29T00:43:46.9654726Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-29T00:43:46.9655266Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:43:46.9655550Z         
2025-06-29T00:43:46.9655979Z         error getting project (686089cb49709c3a5a3ca137): error getting project's
2025-06-29T00:43:46.9656432Z         limits (686089cb49709c3a5a3ca137):
2025-06-29T00:43:46.9656987Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686089cb49709c3a5a3ca137/limits
2025-06-29T00:43:46.9657753Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:43:46.9658319Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:43:46.9658707Z         BadRequestDetail: 
2025-06-29T00:43:46.9658995Z --- FAIL: TestMigProjectInvitation_basic (36.46s)
```

- 2025-06-30 PASS 15 seconds
- 2025-07-01
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 15 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 12 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 8 seconds
- 2025-07-06

### Error 2025-07-06T00:37:51+00:00
```
2025-07-06T00:37:51.5603223Z === RUN   TestMigProjectInvitation_basic
2025-07-06T00:37:51.5610524Z   
2025-07-06T00:37:51.5611028Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:37:51.5611476Z         
2025-07-06T00:37:51.5611838Z         Error: error when getting project properties after create
2025-07-06T00:37:51.5612160Z         
2025-07-06T00:37:51.5612441Z           with mongodbatlas_project.test,
2025-07-06T00:37:51.5613020Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-06T00:37:51.5613649Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:37:51.5613932Z         
2025-07-06T00:37:51.5614352Z         error getting project (6869c42c690ae45e168be017): error getting project's
2025-07-06T00:37:51.5614788Z         limits (6869c42c690ae45e168be017):
2025-07-06T00:37:51.5615552Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c42c690ae45e168be017/limits
2025-07-06T00:37:51.5616387Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:37:51.5616965Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:37:51.5617345Z         BadRequestDetail: 
2025-07-06T00:37:51.5617638Z --- FAIL: TestMigProjectInvitation_basic (33.94s)
```

- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 10 seconds
- 2025-07-09 PASS 10 seconds
- 2025-07-10
  - PASS 14 seconds
  - FAIL 34 seconds

### Error 2025-07-10T13:15:10+00:00
```
2025-07-10T13:15:10.8840334Z === RUN   TestMigProjectInvitation_basic
2025-07-10T13:15:10.8847768Z    test_working_directory=/tmp/plugintest3747308025
2025-07-10T13:15:10.8848379Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:15:10.8848835Z         
2025-07-10T13:15:10.8849192Z         Error: error when getting project properties after create
2025-07-10T13:15:10.8849507Z         
2025-07-10T13:15:10.8849788Z           with mongodbatlas_project.test,
2025-07-10T13:15:10.8850357Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-10T13:15:10.8850879Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:15:10.8851153Z         
2025-07-10T13:15:10.8851584Z         error getting project (686fbb2efd583001f9eec42e): error getting project's
2025-07-10T13:15:10.8852028Z         limits (686fbb2efd583001f9eec42e):
2025-07-10T13:15:10.8852581Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb2efd583001f9eec42e/limits
2025-07-10T13:15:10.8853238Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:15:10.8853801Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:15:10.8854175Z         BadRequestDetail: 
2025-07-10T13:15:10.8854459Z --- FAIL: TestMigProjectInvitation_basic (34.82s)
```

- 2025-07-11 PASS 15 seconds
- 2025-07-12 PASS 13 seconds
- 2025-07-13

### Error 2025-07-13T00:39:28+00:00
```
2025-07-13T00:39:28.2993982Z === RUN   TestMigProjectInvitation_basic
2025-07-13T00:39:28.3006471Z    test_working_directory=/tmp/plugintest1881161250 test_step_number=2 test_name=TestMigProjectInvitation_basic
2025-07-13T00:39:28.3007369Z     resource_project_invitation_migration_test.go:22: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-07-13T00:39:28.3008031Z         
2025-07-13T00:39:28.3008414Z         Error: error when getting project properties after create
2025-07-13T00:39:28.3008742Z         
2025-07-13T00:39:28.3009043Z           with mongodbatlas_project.test,
2025-07-13T00:39:28.3009646Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-13T00:39:28.3010188Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-13T00:39:28.3010478Z         
2025-07-13T00:39:28.3010923Z         error getting project (6872fea6006d8d55bbaa2f92): error getting project's
2025-07-13T00:39:28.3011388Z         limits (6872fea6006d8d55bbaa2f92):
2025-07-13T00:39:28.3011961Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fea6006d8d55bbaa2f92/limits
2025-07-13T00:39:28.3012628Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:39:28.3013358Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:39:28.3013992Z         BadRequestDetail: 
2025-07-13T00:39:28.3014299Z --- FAIL: TestMigProjectInvitation_basic (42.90s)
```

- 2025-07-14 PASS 17 seconds
- 2025-07-15 PASS 10 seconds
- 2025-07-16 PASS 14 seconds
- 2025-07-17 PASS 15 seconds
- 2025-07-18 PASS 13 seconds
- 2025-07-19 PASS 11 seconds
- 2025-07-20 PASS 8 seconds
- 2025-07-21 PASS 14 seconds
- 2025-07-22 PASS 12 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 14 seconds
- 2025-07-24 PASS 14 seconds