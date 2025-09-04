# project/project/TestAccProject_updatedToEmptyRoles Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:42](#error-2025-08-24t0042090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5dc39bbb8c4ee1f866e4/limits | qa | flaky_500 | 42.00s
[2025-08-31 00:45](#error-2025-08-31t0045030000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b398117e07f9709daf0fa1/limits | qa | flaky_500 | 44.05s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 1.10s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 17 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 9 seconds
- 2025-08-10 PASS 39 seconds
- 2025-08-11 PASS 14 seconds
- 2025-08-12
  - PASS 17 seconds
  - PASS 9 seconds
- 2025-08-13 PASS 9 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 11 seconds
- 2025-08-16 PASS 9 seconds
- 2025-08-17 PASS 9 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 16 seconds
- 2025-08-20
  - PASS 9 seconds
  - PASS 17 seconds
- 2025-08-21 PASS 13 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 10 seconds
- 2025-08-24

### Error 2025-08-24T00:42:09+00:00
```
2025-08-24T00:42:09.0464085Z === RUN   TestAccProject_updatedToEmptyRoles
2025-08-24T00:42:09.0469891Z === CONT  TestAccProject_updatedToEmptyRoles
2025-08-24T00:42:09.0617669Z === NAME  TestAccProject_updatedToEmptyRoles
2025-08-24T00:42:09.0618257Z     resource_project_test.go:768: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-24T00:42:09.0618701Z         
2025-08-24T00:42:09.0619079Z         Error: error when getting project properties after create
2025-08-24T00:42:09.0619408Z         
2025-08-24T00:42:09.0619709Z           with mongodbatlas_project.test,
2025-08-24T00:42:09.0620309Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:09.0620852Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:09.0621141Z         
2025-08-24T00:42:09.0621599Z         error getting project (68aa5dc39bbb8c4ee1f866e4): error getting project's
2025-08-24T00:42:09.0622078Z         limits (68aa5dc39bbb8c4ee1f866e4):
2025-08-24T00:42:09.0622664Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5dc39bbb8c4ee1f866e4/limits
2025-08-24T00:42:09.0623472Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:09.0624060Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:09.0624449Z         BadRequestDetail: 
2025-08-24T00:42:09.0624751Z --- FAIL: TestAccProject_updatedToEmptyRoles (42.01s)
```

- 2025-08-25 PASS 9 seconds
- 2025-08-26 PASS 15 seconds
- 2025-08-27 PASS 11 seconds
- 2025-08-28 PASS 12 seconds
- 2025-08-29 PASS 9 seconds
- 2025-08-30 PASS 9 seconds
- 2025-08-31

### Error 2025-08-31T00:45:03+00:00
```
2025-08-31T00:45:03.7528378Z === RUN   TestAccProject_updatedToEmptyRoles
2025-08-31T00:45:03.7534408Z === CONT  TestAccProject_updatedToEmptyRoles
2025-08-31T00:45:03.7671212Z === NAME  TestAccProject_updatedToEmptyRoles
2025-08-31T00:45:03.7671745Z     resource_project_test.go:768: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-08-31T00:45:03.7672150Z         
2025-08-31T00:45:03.7672525Z         Error: error when getting project properties after create
2025-08-31T00:45:03.7672849Z         
2025-08-31T00:45:03.7673133Z           with mongodbatlas_project.test,
2025-08-31T00:45:03.7673721Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-31T00:45:03.7674250Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-31T00:45:03.7674532Z         
2025-08-31T00:45:03.7674971Z         error getting project (68b398117e07f9709daf0fa1): error getting project's
2025-08-31T00:45:03.7675410Z         limits (68b398117e07f9709daf0fa1):
2025-08-31T00:45:03.7675966Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b398117e07f9709daf0fa1/limits
2025-08-31T00:45:03.7676622Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:45:03.7677193Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:45:03.7677569Z         BadRequestDetail: 
2025-08-31T00:45:03.7689619Z    test_terraform_path=/home/runner/work/_temp/19bede8d-e9f3-4e59-9c28-03b9edc97393/terraform
2025-08-31T00:45:03.7697317Z --- FAIL: TestAccProject_updatedToEmptyRoles (44.54s)
```

- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2456029Z === RUN   TestAccProject_updatedToEmptyRoles
2025-09-01T00:34:53.2463019Z === CONT  TestAccProject_updatedToEmptyRoles
2025-09-01T00:34:53.2629482Z === NAME  TestAccProject_updatedToEmptyRoles
2025-09-01T00:34:53.2630066Z     resource_project_test.go:768: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:34:53.2630568Z         
2025-09-01T00:34:53.2631209Z         Error: error creating project: test-acc-tf-p-7025954735690808035
2025-09-01T00:34:53.2631636Z         
2025-09-01T00:34:53.2631955Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2632671Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2633339Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2633685Z         
2025-09-01T00:34:53.2634243Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2635004Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2635743Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2636472Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2636891Z         BadRequestDetail: 
2025-09-01T00:34:53.2645023Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/fb33b513-ebaa-40af-9cae-1ded3d2fd2ee/terraform test_working_directory=/tmp/plugintest3907882176
2025-09-01T00:34:53.2714005Z --- FAIL: TestAccProject_updatedToEmptyRoles (1.96s)
```

  - PASS 13 seconds
  - PASS 14 seconds
  - PASS 13 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 14 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 15 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 9 seconds