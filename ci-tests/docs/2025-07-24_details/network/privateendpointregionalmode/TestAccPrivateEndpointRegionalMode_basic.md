# network/privateendpointregionalmode/TestAccPrivateEndpointRegionalMode_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:44](#error-2025-06-29t0044250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860898349709c3a5a3c86f1/limits | qa | flaky_500 | 94.09s
[2025-07-06 00:44](#error-2025-07-06t0044460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c4047267b5775b682c01/limits | qa | flaky_500 | 99.03s
[2025-07-10 13:19](#error-2025-07-10t1319330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafafd583001f9eeb0c7/limits | qa | flaky_500 | 95.05s
[2025-07-13 00:57](#error-2025-07-13t0057570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fe8f006d8d55bbaa22e4/limits | qa | flaky_500 | 97.08s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS a minute
- 2025-06-26 PASS a minute
- 2025-06-27 PASS a minute
- 2025-06-28 PASS a minute
- 2025-06-29

### Error 2025-06-29T00:44:25+00:00
```
2025-06-29T00:44:25.8062289Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-06-29T00:44:25.8066511Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-06-29T00:44:25.8088292Z    test_terraform_path=/home/runner/work/_temp/ed926ef8-ba6c-45b8-b680-dede15945ee1/terraform test_name=TestAccPrivateEndpointRegionalMode_basic test_working_directory=/tmp/plugintest3700592994 test_step_number=1
2025-06-29T00:44:25.8090751Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:44:25.8091680Z         
2025-06-29T00:44:25.8092386Z         Error: error when getting project properties after create
2025-06-29T00:44:25.8092974Z         
2025-06-29T00:44:25.8093534Z           with mongodbatlas_project.project,
2025-06-29T00:44:25.8094649Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-06-29T00:44:25.8095708Z           12: 		resource "mongodbatlas_project" "project" {
2025-06-29T00:44:25.8096250Z         
2025-06-29T00:44:25.8097056Z         error getting project (6860898349709c3a5a3c86f1): error getting project's
2025-06-29T00:44:25.8097872Z         limits (6860898349709c3a5a3c86f1):
2025-06-29T00:44:25.8098899Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898349709c3a5a3c86f1/limits
2025-06-29T00:44:25.8100269Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:44:25.8101332Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:44:25.8102046Z         BadRequestDetail: 
2025-06-29T00:44:25.8123857Z    test_name=TestMigPrivateEndpointRegionalMode_basic
2025-06-29T00:44:25.8133284Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (94.86s)
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
2025-07-06T00:44:46.6398062Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6400501Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6430210Z   
2025-07-06T00:44:46.6430837Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6431378Z         
2025-07-06T00:44:46.6431787Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6432136Z         
2025-07-06T00:44:46.6432477Z           with mongodbatlas_project.project,
2025-07-06T00:44:46.6433116Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-07-06T00:44:46.6433704Z           12: 		resource "mongodbatlas_project" "project" {
2025-07-06T00:44:46.6434026Z         
2025-07-06T00:44:46.6434844Z         error getting project (6869c4047267b5775b682c01): error getting project's
2025-07-06T00:44:46.6435327Z         limits (6869c4047267b5775b682c01):
2025-07-06T00:44:46.6435921Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4047267b5775b682c01/limits
2025-07-06T00:44:46.6436608Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6437208Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6437621Z         BadRequestDetail: 
2025-07-06T00:44:46.6445763Z   
2025-07-06T00:44:46.6453678Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (99.31s)
```

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10
  - PASS a minute
  - FAIL a minute

### Error 2025-07-10T13:19:33+00:00
```
2025-07-10T13:19:33.8565056Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-07-10T13:19:33.8567449Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-07-10T13:19:33.8575293Z    test_working_directory=/tmp/plugintest932193237 test_step_number=1
2025-07-10T13:19:33.8596930Z === NAME  TestAccPrivateEndpointRegionalMode_basic
2025-07-10T13:19:33.8597646Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-10T13:19:33.8598175Z         
2025-07-10T13:19:33.8598573Z         Error: error when getting project properties after create
2025-07-10T13:19:33.8598915Z         
2025-07-10T13:19:33.8599241Z           with mongodbatlas_project.project,
2025-07-10T13:19:33.8599868Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-07-10T13:19:33.8600449Z           12: 		resource "mongodbatlas_project" "project" {
2025-07-10T13:19:33.8600764Z         
2025-07-10T13:19:33.8601447Z         error getting project (686fbafafd583001f9eeb0c7): error getting project's
2025-07-10T13:19:33.8601923Z         limits (686fbafafd583001f9eeb0c7):
2025-07-10T13:19:33.8602516Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafafd583001f9eeb0c7/limits
2025-07-10T13:19:33.8603199Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:19:33.8603791Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:19:33.8604197Z         BadRequestDetail: 
2025-07-10T13:19:33.8604548Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (95.45s)
```

- 2025-07-11 PASS a minute
- 2025-07-12 PASS a minute
- 2025-07-13

### Error 2025-07-13T00:57:57+00:00
```
2025-07-13T00:57:57.7962965Z === RUN   TestAccPrivateEndpointRegionalMode_basic
2025-07-13T00:57:57.7966976Z === CONT  TestAccPrivateEndpointRegionalMode_basic
2025-07-13T00:57:57.7980607Z   
2025-07-13T00:57:57.7981350Z     resource_private_endpoint_regional_mode_test.go:16: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-13T00:57:57.7981881Z         
2025-07-13T00:57:57.7982279Z         Error: error when getting project properties after create
2025-07-13T00:57:57.7982635Z         
2025-07-13T00:57:57.7982966Z           with mongodbatlas_project.project,
2025-07-13T00:57:57.7983597Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "project":
2025-07-13T00:57:57.7984170Z           12: 		resource "mongodbatlas_project" "project" {
2025-07-13T00:57:57.7984490Z         
2025-07-13T00:57:57.7984955Z         error getting project (6872fe8f006d8d55bbaa22e4): error getting project's
2025-07-13T00:57:57.7985428Z         limits (6872fe8f006d8d55bbaa22e4):
2025-07-13T00:57:57.7986238Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe8f006d8d55bbaa22e4/limits
2025-07-13T00:57:57.7986926Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:57:57.7987526Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:57:57.7987934Z         BadRequestDetail: 
2025-07-13T00:57:57.7988287Z --- FAIL: TestAccPrivateEndpointRegionalMode_basic (97.78s)
```

- 2025-07-14 PASS a minute
- 2025-07-15 PASS a minute
- 2025-07-16 PASS a minute
- 2025-07-17 PASS a minute
- 2025-07-18 PASS a minute
- 2025-07-19 PASS a minute
- 2025-07-20 PASS 2 minutes
- 2025-07-21 PASS a minute
- 2025-07-22 PASS a minute
- 2025-07-23
  - PASS a minute
  - PASS a minute
  - PASS 2 minutes
- 2025-07-24 PASS a minute