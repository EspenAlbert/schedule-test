# network/privateendpointregionalmode/TestAccPrivateEndpointRegionalMode_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:43](#error-2025-08-17t0043360000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122cdaafa9a76ca8ba7f0/limits | qa | flaky_500 | 129.05s
[2025-08-24 00:42](#error-2025-08-24t0042570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d2a4192cd1cc589bd77/limits | qa | flaky_500 | 100.04s
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.05s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a minute
- 2025-08-07 PASS 3 minutes
- 2025-08-08 PASS a minute
- 2025-08-09 PASS a minute
- 2025-08-10 PASS a minute
- 2025-08-11 PASS a minute
- 2025-08-12 PASS a minute
- 2025-08-13 PASS a minute
- 2025-08-14 PASS a minute
- 2025-08-15 PASS a minute
- 2025-08-16 PASS a minute
- 2025-08-17

### Error 2025-08-17T00:43:36+00:00
```
2025-08-17T00:43:36.9917928Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-08-17T00:43:36.9920637Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-08-17T00:43:36.9934914Z === NAME  TestAccPrivateEndpointRegionalMode_basic
2025-08-17T00:43:36.9935644Z     resource_private_endpoint_regional_mode_test.go:16: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:43:36.9936182Z         
2025-08-17T00:43:36.9936589Z         Error: error when getting project properties after create
2025-08-17T00:43:36.9937213Z         
2025-08-17T00:43:36.9937563Z           with mongodbatlas_project.project,
2025-08-17T00:43:36.9938202Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-08-17T00:43:36.9938797Z           12: 		resource "mongodbatlas_project" "project" {
2025-08-17T00:43:36.9939135Z         
2025-08-17T00:43:36.9939604Z         error getting project (68a122cdaafa9a76ca8ba7f0): error getting project's
2025-08-17T00:43:36.9940101Z         limits (68a122cdaafa9a76ca8ba7f0):
2025-08-17T00:43:36.9940715Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122cdaafa9a76ca8ba7f0/limits
2025-08-17T00:43:36.9941424Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:43:36.9942034Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:43:36.9942469Z         BadRequestDetail: 
2025-08-17T00:43:36.9942840Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (129.49s)
```

- 2025-08-18 PASS a minute
- 2025-08-19 PASS a minute
- 2025-08-20
  - PASS a minute
  - PASS a minute
- 2025-08-21 PASS a minute
- 2025-08-22 PASS a minute
- 2025-08-23 PASS a minute
- 2025-08-24

### Error 2025-08-24T00:42:57+00:00
```
2025-08-24T00:42:57.7169824Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-08-24T00:42:57.7174341Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-08-24T00:42:57.7187497Z    test_name=TestMigPrivateEndpointRegionalMode_basic test_terraform_path=/home/runner/work/_temp/0d03cadb-0891-4d90-98ed-aa943cbba9a5/terraform test_working_directory=/tmp/plugintest3558527139 test_step_number=1
2025-08-24T00:42:57.7227417Z === NAME  TestAccPrivateEndpointRegionalMode_basic
2025-08-24T00:42:57.7228710Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-24T00:42:57.7229674Z         
2025-08-24T00:42:57.7230394Z         Error: error when getting project properties after create
2025-08-24T00:42:57.7231017Z         
2025-08-24T00:42:57.7231603Z           with mongodbatlas_project.project,
2025-08-24T00:42:57.7233107Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-08-24T00:42:57.7234186Z           12: 		resource "mongodbatlas_project" "project" {
2025-08-24T00:42:57.7234731Z         
2025-08-24T00:42:57.7235596Z         error getting project (68aa5d2a4192cd1cc589bd77): error getting project's
2025-08-24T00:42:57.7236464Z         limits (68aa5d2a4192cd1cc589bd77):
2025-08-24T00:42:57.7237531Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d2a4192cd1cc589bd77/limits
2025-08-24T00:42:57.7238802Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:42:57.7239890Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:42:57.7240624Z         BadRequestDetail: 
2025-08-24T00:42:57.7241240Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (100.36s)
```

- 2025-08-25 PASS a minute
- 2025-08-26 PASS a minute
- 2025-08-27 PASS a minute
- 2025-08-28 PASS a minute
- 2025-08-29 PASS a minute
- 2025-08-30 PASS a minute
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL a second

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5784987Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-09-01T00:42:46.5787799Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-09-01T00:42:46.5800836Z   
2025-09-01T00:42:46.5801368Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:42:46.5801841Z         
2025-09-01T00:42:46.5802275Z         Error: error creating project: test-acc-tf-p-4448021309525673025
2025-09-01T00:42:46.5802637Z         
2025-09-01T00:42:46.5802961Z           with mongodbatlas_project.project,
2025-09-01T00:42:46.5803598Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-09-01T00:42:46.5804181Z           12: 		resource "mongodbatlas_project" "project" {
2025-09-01T00:42:46.5804490Z         
2025-09-01T00:42:46.5804980Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:42:46.5805641Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:42:46.5806277Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:42:46.5806900Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:42:46.5807448Z         BadRequestDetail: 
2025-09-01T00:42:46.5807794Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (1.53s)
```

  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-09-02 PASS a minute
- 2025-09-03 PASS a minute
- 2025-09-04 PASS a minute