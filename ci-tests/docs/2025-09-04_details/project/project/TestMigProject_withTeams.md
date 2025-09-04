# project/project/TestMigProject_withTeams Test Details
# Found 39 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 4)
Success rate: 89.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:41](#error-2025-08-17t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a12314aafa9a76ca8be04a/limits | qa | flaky_500 | 38.07s
[2025-08-20 14:14](#error-2025-08-20t1414130000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d4a95734606989a34a63/limits | qa | flaky_500 | 42.06s
[2025-08-24 00:42](#error-2025-08-24t0042090000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d5a4192cd1cc589e94a/limits | qa | flaky_500 | 34.05s
[2025-09-01 00:34](#error-2025-09-01t0034530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 2.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 15 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 9 seconds
- 2025-08-10 PASS 12 seconds
- 2025-08-11 PASS 14 seconds
- 2025-08-12
  - PASS 14 seconds
  - PASS 10 seconds
- 2025-08-13 PASS 8 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 11 seconds
- 2025-08-16 PASS 10 seconds
- 2025-08-17

### Error 2025-08-17T00:41:24+00:00
```
2025-08-17T00:41:24.5178204Z === RUN   TestMigProject_withTeams
2025-08-17T00:41:24.5194163Z   
2025-08-17T00:41:24.5195274Z     resource_project_migration_test.go:63: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-08-17T00:41:24.5196139Z         
2025-08-17T00:41:24.5196773Z         Error: error when getting project properties after create
2025-08-17T00:41:24.5197118Z         
2025-08-17T00:41:24.5197413Z           with mongodbatlas_project.test,
2025-08-17T00:41:24.5197999Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T00:41:24.5198699Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T00:41:24.5198999Z         
2025-08-17T00:41:24.5199443Z         error getting project (68a12314aafa9a76ca8be04a): error getting project's
2025-08-17T00:41:24.5199893Z         limits (68a12314aafa9a76ca8be04a):
2025-08-17T00:41:24.5200482Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a12314aafa9a76ca8be04a/limits
2025-08-17T00:41:24.5201142Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:41:24.5201706Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:41:24.5202086Z         BadRequestDetail: 
2025-08-17T00:41:24.5202365Z --- FAIL: TestMigProject_withTeams (38.72s)
```

- 2025-08-18 PASS 10 seconds
- 2025-08-19 PASS 13 seconds
- 2025-08-20
  - PASS 10 seconds
  - FAIL 42 seconds

### Error 2025-08-20T14:14:13+00:00
```
2025-08-20T14:14:13.0451153Z === RUN   TestMigProject_withTeams
2025-08-20T14:14:13.0465271Z   
2025-08-20T14:14:13.0465844Z     resource_project_migration_test.go:63: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-20T14:14:13.0466324Z         
2025-08-20T14:14:13.0466711Z         Error: error when getting project properties after create
2025-08-20T14:14:13.0467039Z         
2025-08-20T14:14:13.0467334Z           with mongodbatlas_project.test,
2025-08-20T14:14:13.0467929Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-20T14:14:13.0468476Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-20T14:14:13.0468759Z         
2025-08-20T14:14:13.0469208Z         error getting project (68a5d4a95734606989a34a63): error getting project's
2025-08-20T14:14:13.0469658Z         limits (68a5d4a95734606989a34a63):
2025-08-20T14:14:13.0470234Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4a95734606989a34a63/limits
2025-08-20T14:14:13.0471072Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:14:13.0471656Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:14:13.0472042Z         BadRequestDetail: 
2025-08-20T14:14:13.0472315Z --- FAIL: TestMigProject_withTeams (42.56s)
```

- 2025-08-21 PASS 13 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 9 seconds
- 2025-08-24

### Error 2025-08-24T00:42:09+00:00
```
2025-08-24T00:42:09.0395517Z === RUN   TestMigProject_withTeams
2025-08-24T00:42:09.0403443Z   
2025-08-24T00:42:09.0403921Z     resource_project_migration_test.go:63: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:42:09.0404345Z         
2025-08-24T00:42:09.0404745Z         Error: error when getting project properties after create
2025-08-24T00:42:09.0405085Z         
2025-08-24T00:42:09.0405388Z           with mongodbatlas_project.test,
2025-08-24T00:42:09.0406003Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-08-24T00:42:09.0406781Z           14: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:42:09.0407083Z         
2025-08-24T00:42:09.0407545Z         error getting project (68aa5d5a4192cd1cc589e94a): error getting project's
2025-08-24T00:42:09.0408013Z         limits (68aa5d5a4192cd1cc589e94a):
2025-08-24T00:42:09.0408602Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d5a4192cd1cc589e94a/limits
2025-08-24T00:42:09.0409280Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:09.0409863Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:09.0410261Z         BadRequestDetail: 
2025-08-24T00:42:09.0410597Z --- FAIL: TestMigProject_withTeams (34.52s)
```

- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 14 seconds
- 2025-08-27 PASS 13 seconds
- 2025-08-28 PASS 13 seconds
- 2025-08-29 PASS 8 seconds
- 2025-08-30 PASS 9 seconds
- 2025-08-31 PASS 13 seconds
- 2025-09-01
  - FAIL 2 seconds

### Error 2025-09-01T00:34:53+00:00
```
2025-09-01T00:34:53.2404081Z === RUN   TestMigProject_withTeams
2025-09-01T00:34:53.2412705Z   
2025-09-01T00:34:53.2414888Z     resource_project_migration_test.go:63: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:34:53.2415469Z         
2025-09-01T00:34:53.2415996Z         Error: error creating project: test-acc-tf-p-2514941053959299746
2025-09-01T00:34:53.2416365Z         
2025-09-01T00:34:53.2416750Z           with mongodbatlas_project.test,
2025-09-01T00:34:53.2417353Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-01T00:34:53.2418008Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:34:53.2418404Z         
2025-09-01T00:34:53.2418897Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:34:53.2419659Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:34:53.2420372Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:34:53.2421284Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:34:53.2421702Z         BadRequestDetail: 
2025-09-01T00:34:53.2422091Z --- FAIL: TestMigProject_withTeams (2.38s)
```

  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 13 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 13 seconds
  - PASS 10 seconds
- 2025-09-02 PASS 13 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 9 seconds