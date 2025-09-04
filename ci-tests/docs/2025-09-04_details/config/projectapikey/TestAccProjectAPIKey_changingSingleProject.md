# config/projectapikey/TestAccProjectAPIKey_changingSingleProject Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 4)
Success rate: 89.47%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-20 14:01](#error-2025-08-20t1401070000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a5d4def98188003c99bbc1/limits | qa | flaky_500 | 69.07s
[2025-08-24 00:32](#error-2025-08-24t0032440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d8b9bbb8c4ee1f8538e/limits | qa | flaky_500 | 33.05s
[2025-08-31 00:32](#error-2025-08-31t0032280000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68b397db7e07f9709daef74e/limits | qa | flaky_500 | 65.06s
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 57 seconds
- 2025-08-07 PASS 7 minutes
- 2025-08-08 PASS 24 seconds
- 2025-08-09 PASS 38 seconds
- 2025-08-10 PASS 50 seconds
- 2025-08-11 PASS 48 seconds
- 2025-08-12 PASS 26 seconds
- 2025-08-13 PASS 27 seconds
- 2025-08-14 PASS 32 seconds
- 2025-08-15 PASS 22 seconds
- 2025-08-16 PASS 24 seconds
- 2025-08-17 PASS 32 seconds
- 2025-08-18 PASS 28 seconds
- 2025-08-19 PASS 48 seconds
- 2025-08-20
  - PASS 33 seconds
  - FAIL a minute

### Error 2025-08-20T14:01:07+00:00
```
2025-08-20T14:01:07.1096709Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-08-20T14:01:07.1110080Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-08-20T14:01:07.1154366Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-08-20T14:01:07.1155566Z     resource_project_api_key_test.go:63: Step 2/4 error: Error running post-apply refresh plan: exit status 1
2025-08-20T14:01:07.1156374Z         
2025-08-20T14:01:07.1157033Z         Error: error when getting project properties after create
2025-08-20T14:01:07.1157654Z         
2025-08-20T14:01:07.1158195Z           with mongodbatlas_project.proj2,
2025-08-20T14:01:07.1159266Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-08-20T14:01:07.1160243Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-08-20T14:01:07.1160747Z         
2025-08-20T14:01:07.1161540Z         error getting project (68a5d4def98188003c99bbc1): error getting project's
2025-08-20T14:01:07.1162364Z         limits (68a5d4def98188003c99bbc1):
2025-08-20T14:01:07.1164055Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a5d4def98188003c99bbc1/limits
2025-08-20T14:01:07.1165259Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-20T14:01:07.1166298Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-20T14:01:07.1166997Z         BadRequestDetail: 
2025-08-20T14:01:07.1167568Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (69.71s)
```

- 2025-08-21 PASS 23 seconds
- 2025-08-22 PASS 22 seconds
- 2025-08-23 PASS 42 seconds
- 2025-08-24

### Error 2025-08-24T00:32:44+00:00
```
2025-08-24T00:32:44.0932808Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-08-24T00:32:44.0961152Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-08-24T00:32:44.1134184Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-08-24T00:32:44.1135467Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-08-24T00:32:44.1136215Z         
2025-08-24T00:32:44.1136931Z         Error: error when getting project properties after create
2025-08-24T00:32:44.1137538Z         
2025-08-24T00:32:44.1138089Z           with mongodbatlas_project.proj2,
2025-08-24T00:32:44.1139201Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-08-24T00:32:44.1140237Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-08-24T00:32:44.1140777Z         
2025-08-24T00:32:44.1141603Z         error getting project (68aa5d8b9bbb8c4ee1f8538e): error getting project's
2025-08-24T00:32:44.1142466Z         limits (68aa5d8b9bbb8c4ee1f8538e):
2025-08-24T00:32:44.1143548Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d8b9bbb8c4ee1f8538e/limits
2025-08-24T00:32:44.1145004Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:44.1146093Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:44.1146622Z         BadRequestDetail: 
2025-08-24T00:32:44.1147556Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (33.47s)
```

- 2025-08-25 PASS 51 seconds
- 2025-08-26 PASS 29 seconds
- 2025-08-27 PASS 31 seconds
- 2025-08-28 PASS 22 seconds
- 2025-08-29 PASS 36 seconds
- 2025-08-30 PASS 22 seconds
- 2025-08-31

### Error 2025-08-31T00:32:28+00:00
```
2025-08-31T00:32:28.6720548Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-08-31T00:32:28.6733520Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-08-31T00:32:28.6775793Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-08-31T00:32:28.6776427Z     resource_project_api_key_test.go:63: Step 3/4 error: Error running post-apply refresh plan: exit status 1
2025-08-31T00:32:28.6776897Z         
2025-08-31T00:32:28.6777283Z         Error: error when getting project properties after create
2025-08-31T00:32:28.6777609Z         
2025-08-31T00:32:28.6777904Z           with mongodbatlas_project.proj2,
2025-08-31T00:32:28.6778501Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-08-31T00:32:28.6779042Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-08-31T00:32:28.6779326Z         
2025-08-31T00:32:28.6779764Z         error getting project (68b397db7e07f9709daef74e): error getting project's
2025-08-31T00:32:28.6780217Z         limits (68b397db7e07f9709daef74e):
2025-08-31T00:32:28.6780788Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397db7e07f9709daef74e/limits
2025-08-31T00:32:28.6781448Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-31T00:32:28.6782014Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-31T00:32:28.6782682Z         BadRequestDetail: 
2025-08-31T00:32:28.6783199Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (65.63s)
```

- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.2964415Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-09-01T00:31:13.2965426Z     resource_project_api_key_test.go:58: Creating execution project: test-acc-tf-p-2318288976817252919
2025-09-01T00:31:13.2966333Z     resource_project_api_key_test.go:58: 
2025-09-01T00:31:13.2968165Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:13.3045698Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:13.3049053Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:58
2025-09-01T00:31:13.3050603Z         	Error:      	Received unexpected error:
2025-09-01T00:31:13.3055119Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.3057352Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2025-09-01T00:31:13.3061516Z         	Messages:   	Project creation failed: test-acc-tf-p-2318288976817252919, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.3063914Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (0.17s)
```

  - PASS 27 seconds
  - PASS 47 seconds
  - PASS 49 seconds
  - PASS 24 seconds
  - PASS 27 seconds
  - PASS 25 seconds
  - PASS 29 seconds
- 2025-09-02 PASS 23 seconds
- 2025-09-03 PASS 23 seconds
- 2025-09-04 PASS 30 seconds