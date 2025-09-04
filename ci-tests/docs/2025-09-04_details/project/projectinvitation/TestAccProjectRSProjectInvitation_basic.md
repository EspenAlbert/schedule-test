# project/projectinvitation/TestAccProjectRSProjectInvitation_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-20 14:14](#error-2025-08-20t1414130000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d4b25734606989a35162/limits | qa | flaky_500 | 38.07s
[2025-08-24 00:42](#error-2025-08-24t0042090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d7b4192cd1cc589ee1c/limits | qa | flaky_500 | 32.05s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2025-09-01 06:04](#error-2025-09-01t0604500000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 14 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 7 seconds
- 2025-08-09 PASS 8 seconds
- 2025-08-10 PASS 10 seconds
- 2025-08-11 PASS 12 seconds
- 2025-08-12
  - PASS 13 seconds
  - PASS 6 seconds
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS 7 seconds
- 2025-08-15 PASS 9 seconds
- 2025-08-16 PASS 7 seconds
- 2025-08-17 PASS 7 seconds
- 2025-08-18 PASS 7 seconds
- 2025-08-19 PASS 12 seconds
- 2025-08-20
  - PASS 8 seconds
  - FAIL 38 seconds

### Error 2025-08-20T14:14:13+00:00
```
2025-08-20T14:14:13.0596679Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-08-20T14:14:13.0608526Z    test_step_number=2 test_terraform_path=/home/runner/work/_temp/b1e24623-9099-4574-a360-53a74d38537b/terraform test_working_directory=/tmp/plugintest2205769260 test_name=TestAccProjectRSProjectInvitation_basic
2025-08-20T14:14:13.0609665Z     resource_project_invitation_test.go:26: Step 2/3 error: Error running pre-apply plan: exit status 1
2025-08-20T14:14:13.0610105Z         
2025-08-20T14:14:13.0610620Z         Error: error when getting project properties after create
2025-08-20T14:14:13.0610954Z         
2025-08-20T14:14:13.0611243Z           with mongodbatlas_project.test,
2025-08-20T14:14:13.0611835Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-20T14:14:13.0612376Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-20T14:14:13.0612829Z         
2025-08-20T14:14:13.0613272Z         error getting project (68a5d4b25734606989a35162): error getting project's
2025-08-20T14:14:13.0613718Z         limits (68a5d4b25734606989a35162):
2025-08-20T14:14:13.0614276Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4b25734606989a35162/limits
2025-08-20T14:14:13.0615044Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:14:13.0615613Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:14:13.0616003Z         BadRequestDetail: 
2025-08-20T14:14:13.0616321Z --- FAIL: TestAccProjectRSProjectInvitation_basic (38.67s)
```

- 2025-08-21 PASS 11 seconds
- 2025-08-22 PASS 7 seconds
- 2025-08-23 PASS 7 seconds
- 2025-08-24

### Error 2025-08-24T00:42:09+00:00
```
2025-08-24T00:42:09.0661329Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-08-24T00:42:09.0674002Z   
2025-08-24T00:42:09.0674460Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-08-24T00:42:09.0674886Z         
2025-08-24T00:42:09.0675260Z         Error: error when getting project properties after create
2025-08-24T00:42:09.0675586Z         
2025-08-24T00:42:09.0675882Z           with mongodbatlas_project.test,
2025-08-24T00:42:09.0676577Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:09.0677119Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:09.0677410Z         
2025-08-24T00:42:09.0677861Z         error getting project (68aa5d7b4192cd1cc589ee1c): error getting project's
2025-08-24T00:42:09.0678323Z         limits (68aa5d7b4192cd1cc589ee1c):
2025-08-24T00:42:09.0678905Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d7b4192cd1cc589ee1c/limits
2025-08-24T00:42:09.0679574Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:09.0680162Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:09.0680548Z         BadRequestDetail: 
2025-08-24T00:42:09.0680868Z --- FAIL: TestAccProjectRSProjectInvitation_basic (32.55s)
```

- 2025-08-25 PASS 8 seconds
- 2025-08-26 PASS 11 seconds
- 2025-08-27 PASS 12 seconds
- 2025-08-28 PASS 12 seconds
- 2025-08-29 PASS 8 seconds
- 2025-08-30 PASS 8 seconds
- 2025-08-31 PASS 12 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2752391Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-09-01T00:34:53.2763862Z    test_terraform_path=/home/runner/work/_temp/fb33b513-ebaa-40af-9cae-1ded3d2fd2ee/terraform test_name=TestAccProjectRSProjectInvitation_basic test_working_directory=/tmp/plugintest1125507812
2025-09-01T00:34:53.2764908Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-09-01T00:34:53.2765439Z         
2025-09-01T00:34:53.2765848Z         Error: error creating project: test-acc-tf-p-5752161888251035046
2025-09-01T00:34:53.2766201Z         
2025-09-01T00:34:53.2766499Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2767081Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2767624Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2767914Z         
2025-09-01T00:34:53.2768384Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2769024Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2769995Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2770606Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2771119Z         BadRequestDetail: 
2025-09-01T00:34:53.2771458Z --- FAIL: TestAccProjectRSProjectInvitation_basic (0.63s)
```

  - FAIL a moment

### Error 2025-09-01T06:04:50+00:00
```
2025-09-01T06:04:50.5728458Z === RUN   TestAccProjectRSProjectInvitation_basic
2025-09-01T06:04:50.5764074Z   
2025-09-01T06:04:50.5764842Z     resource_project_invitation_test.go:26: Step 1/3 error: Error running apply: exit status 1
2025-09-01T06:04:50.5765479Z         
2025-09-01T06:04:50.5765910Z         Error: error creating project: test-acc-tf-p-2136727602384758487
2025-09-01T06:04:50.5766265Z         
2025-09-01T06:04:50.5766568Z           with mongodbatlas_project.test,
2025-09-01T06:04:50.5767172Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T06:04:50.5767724Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T06:04:50.5768019Z         
2025-09-01T06:04:50.5768511Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T06:04:50.5769170Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T06:04:50.5769800Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T06:04:50.5770407Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T06:04:50.5770831Z         BadRequestDetail: 
2025-09-01T06:04:50.5771176Z --- FAIL: TestAccProjectRSProjectInvitation_basic (0.64s)
```

  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 13 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 12 seconds
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 7 seconds