# project/projectinvitation/TestAccProjectDSProjectInvitation_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL(x 2)
Success rate: 94.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:42](#error-2025-08-24t0042090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d359bbb8c4ee1f82d9c/limits | qa | flaky_500 | 33.08s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 10 seconds
- 2025-08-07 PASS 53 seconds
- 2025-08-08 PASS 5 seconds
- 2025-08-09 PASS 7 seconds
- 2025-08-10 PASS 13 seconds
- 2025-08-11 PASS 8 seconds
- 2025-08-12
  - PASS 10 seconds
  - PASS 5 seconds
- 2025-08-13 PASS 5 seconds
- 2025-08-14 PASS 6 seconds
- 2025-08-15 PASS 7 seconds
- 2025-08-16 PASS 7 seconds
- 2025-08-17 PASS 23 seconds
- 2025-08-18 PASS 6 seconds
- 2025-08-19 PASS 9 seconds
- 2025-08-20
  - PASS 6 seconds
  - PASS 8 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23 PASS 6 seconds
- 2025-08-24

### Error 2025-08-24T00:42:09+00:00
```
2025-08-24T00:42:09.0626263Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-08-24T00:42:09.0639003Z   
2025-08-24T00:42:09.0639586Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-08-24T00:42:09.0640031Z         
2025-08-24T00:42:09.0640414Z         Error: error when getting project properties after create
2025-08-24T00:42:09.0640748Z         
2025-08-24T00:42:09.0641046Z           with mongodbatlas_project.test,
2025-08-24T00:42:09.0641640Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:09.0642183Z           13: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:09.0642477Z         
2025-08-24T00:42:09.0642928Z         error getting project (68aa5d359bbb8c4ee1f82d9c): error getting project's
2025-08-24T00:42:09.0643398Z         limits (68aa5d359bbb8c4ee1f82d9c):
2025-08-24T00:42:09.0643977Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d359bbb8c4ee1f82d9c/limits
2025-08-24T00:42:09.0644670Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:09.0645246Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:09.0645630Z         BadRequestDetail: 
2025-08-24T00:42:09.0645948Z --- FAIL: TestAccProjectDSProjectInvitation_basic (33.80s)
```

- 2025-08-25 PASS 5 seconds
- 2025-08-26 PASS 9 seconds
- 2025-08-27 PASS 8 seconds
- 2025-08-28 PASS 8 seconds
- 2025-08-29 PASS 5 seconds
- 2025-08-30 PASS 6 seconds
- 2025-08-31 PASS 8 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2718238Z === RUN   TestAccProjectDSProjectInvitation_basic
2025-09-01T00:34:53.2730725Z   
2025-09-01T00:34:53.2731343Z     data_source_project_invitation_test.go:22: Step 1/1 error: Error running apply: exit status 1
2025-09-01T00:34:53.2731783Z         
2025-09-01T00:34:53.2732196Z         Error: error creating project: test-acc-tf-p-2728143409814348829
2025-09-01T00:34:53.2732545Z         
2025-09-01T00:34:53.2732843Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2733438Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2733977Z           13: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2734269Z         
2025-09-01T00:34:53.2734744Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2735386Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2735999Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2736808Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2737245Z         BadRequestDetail: 
2025-09-01T00:34:53.2737580Z --- FAIL: TestAccProjectDSProjectInvitation_basic (0.53s)
```

  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 6 seconds
- 2025-09-04 PASS 7 seconds