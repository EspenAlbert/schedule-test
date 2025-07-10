# project/projectinvitation/TestMigProjectInvitation_basic Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 4)
Success rate: 96.49%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa |  | 1.05s
[2025-06-05 00:29](#error-2025-06-05t0029340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 4.05s
[2025-06-29 00:43](#error-2025-06-29t0043460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686089cb49709c3a5a3ca137/limits | qa | flaky_500 | 36.05s
[2025-07-06 00:37](#error-2025-07-06t0037510000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c42c690ae45e168be017/limits | qa | flaky_500 | 33.09s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 13 seconds
- 2025-04-13 PASS 10 seconds
- 2025-04-14 PASS 13 seconds
- 2025-04-15 PASS 8 seconds
- 2025-04-16
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-04-17 PASS 9 seconds
- 2025-04-18 PASS 17 seconds
- 2025-04-19 PASS 14 seconds
- 2025-04-20 PASS 9 seconds
- 2025-04-21 PASS 12 seconds
- 2025-04-22 PASS 8 seconds
- 2025-04-23 PASS 14 seconds
- 2025-04-24 PASS 9 seconds
- 2025-04-25 PASS 9 seconds
- 2025-04-26 PASS 18 seconds
- 2025-04-27 PASS 14 seconds
- 2025-04-28 PASS 10 seconds
- 2025-04-29 PASS 9 seconds
- 2025-04-30
  - PASS 16 seconds
  - PASS 14 seconds
- 2025-05-01
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 13 seconds
- 2025-05-02 PASS 12 seconds
- 2025-05-03 PASS 9 seconds
- 2025-05-04 PASS 9 seconds
- 2025-05-05 PASS 10 seconds
- 2025-05-06 PASS 11 seconds
- 2025-05-07 PASS 14 seconds
- 2025-05-08 PASS 8 seconds
- 2025-05-09 PASS 15 seconds
- 2025-05-10 PASS 10 seconds
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.3965991Z === RUN   TestMigProjectInvitation_basic
2025-05-11T00:30:20.3973185Z   
2025-05-11T00:30:20.3973724Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:20.3974310Z         
2025-05-11T00:30:20.3974854Z         Error: error creating project: test-acc-tf-p-2410888763193448422
2025-05-11T00:30:20.3975225Z         
2025-05-11T00:30:20.3975685Z           with mongodbatlas_project.test,
2025-05-11T00:30:20.3976616Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-05-11T00:30:20.3977363Z           14: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:30:20.3977673Z         
2025-05-11T00:30:20.3978272Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:20.3978734Z         type
2025-05-11T00:30:20.3979058Z --- FAIL: TestMigProjectInvitation_basic (1.52s)
```

- 2025-05-12 PASS 15 seconds
- 2025-05-13
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-05-14 PASS 15 seconds
- 2025-05-15 PASS 9 seconds
- 2025-05-16 PASS 9 seconds
- 2025-05-17 PASS 11 seconds
- 2025-05-18 PASS 7 seconds
- 2025-05-19 PASS 9 seconds
- 2025-05-20 PASS 8 seconds
- 2025-05-21 PASS 8 seconds
- 2025-05-22 PASS 11 seconds
- 2025-05-23 PASS 8 seconds
- 2025-05-24 PASS 11 seconds
- 2025-05-25 PASS 10 seconds
- 2025-05-26 PASS 11 seconds
- 2025-05-27
  - PASS 9 seconds
  - PASS 11 seconds
- 2025-05-28
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-05-29 PASS 14 seconds
- 2025-05-30 PASS 12 seconds
- 2025-05-31 PASS 9 seconds
- 2025-06-01
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 13 seconds
  - PASS 9 seconds
- 2025-06-02
  - PASS 8 seconds
  - PASS 16 seconds
  - PASS 15 seconds
- 2025-06-03 PASS 10 seconds
- 2025-06-04 PASS 14 seconds
- 2025-06-05

### Error 2025-06-05T00:29:34+00:00
```
2025-06-05T00:29:34.5144186Z === RUN   TestMigProjectInvitation_basic
2025-06-05T00:29:34.5150205Z    test_terraform_path=/home/runner/work/_temp/4383328b-21a3-41bd-b8a0-95c50737226a/terraform test_step_number=1 test_working_directory=/tmp/plugintest2385961978
2025-06-05T00:29:34.5151181Z     resource_project_invitation_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:29:34.5151752Z         
2025-06-05T00:29:34.5152163Z         Error: error creating project: test-acc-tf-p-7958040422310907795
2025-06-05T00:29:34.5152551Z         
2025-06-05T00:29:34.5152855Z           with mongodbatlas_project.test,
2025-06-05T00:29:34.5153450Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-06-05T00:29:34.5153997Z           14: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:29:34.5154299Z         
2025-06-05T00:29:34.5154756Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:29:34.5155387Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:29:34.5155958Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:29:34.5156373Z --- FAIL: TestMigProjectInvitation_basic (4.46s)
```

- 2025-06-06 PASS 15 seconds
- 2025-06-07 PASS 11 seconds
- 2025-06-08 PASS 13 seconds
- 2025-06-09 PASS 14 seconds
- 2025-06-10 PASS 16 seconds
- 2025-06-11
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-06-12 PASS 15 seconds
- 2025-06-13 PASS 16 seconds
- 2025-06-14 PASS 11 seconds
- 2025-06-15 PASS 13 seconds
- 2025-06-16 PASS 11 seconds
- 2025-06-17 PASS 8 seconds
- 2025-06-18 PASS 9 seconds
- 2025-06-19 PASS 9 seconds
- 2025-06-20 PASS 12 seconds
- 2025-06-21 PASS 15 seconds
- 2025-06-22 PASS 9 seconds
- 2025-06-23 PASS 8 seconds
- 2025-06-24 PASS 15 seconds
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
- 2025-07-10 PASS 14 seconds