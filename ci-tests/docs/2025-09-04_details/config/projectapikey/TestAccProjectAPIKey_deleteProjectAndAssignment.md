# config/projectapikey/TestAccProjectAPIKey_deleteProjectAndAssignment Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:32](#error-2025-08-24t0032440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d8b9bbb8c4ee1f8536f/limits | qa | flaky_500 | 32.10s
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 13 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 11 seconds
- 2025-08-10 PASS 48 seconds
- 2025-08-11 PASS 16 seconds
- 2025-08-12 PASS 10 seconds
- 2025-08-13 PASS 10 seconds
- 2025-08-14 PASS 12 seconds
- 2025-08-15 PASS 9 seconds
- 2025-08-16 PASS 9 seconds
- 2025-08-17 PASS 21 seconds
- 2025-08-18 PASS 10 seconds
- 2025-08-19 PASS 14 seconds
- 2025-08-20
  - PASS 10 seconds
  - PASS 32 seconds
- 2025-08-21 PASS 10 seconds
- 2025-08-22 PASS 9 seconds
- 2025-08-23 PASS 11 seconds
- 2025-08-24

### Error 2025-08-24T00:32:44+00:00
```
2025-08-24T00:32:44.0956420Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-08-24T00:32:44.0962412Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-08-24T00:32:44.1008010Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-08-24T00:32:44.1009279Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:32:44.1010288Z         
2025-08-24T00:32:44.1011257Z         Error: error when getting project properties after create
2025-08-24T00:32:44.1099465Z         
2025-08-24T00:32:44.1100274Z           with mongodbatlas_project.project2,
2025-08-24T00:32:44.1101469Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "project2":
2025-08-24T00:32:44.1102516Z           13: 		resource "mongodbatlas_project" "project2" {
2025-08-24T00:32:44.1103072Z         
2025-08-24T00:32:44.1103906Z         error getting project (68aa5d8b9bbb8c4ee1f8536f): error getting project's
2025-08-24T00:32:44.1105453Z         limits (68aa5d8b9bbb8c4ee1f8536f):
2025-08-24T00:32:44.1106539Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d8b9bbb8c4ee1f8536f/limits
2025-08-24T00:32:44.1107777Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:44.1108864Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:44.1109578Z         BadRequestDetail: 
2025-08-24T00:32:44.1110212Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (32.96s)
```

- 2025-08-25 PASS 13 seconds
- 2025-08-26 PASS 11 seconds
- 2025-08-27 PASS 12 seconds
- 2025-08-28 PASS 9 seconds
- 2025-08-29 PASS 10 seconds
- 2025-08-30 PASS 10 seconds
- 2025-08-31 PASS 20 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.3255384Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-01T00:31:13.3256714Z     resource_project_api_key_test.go:189: Creating execution project: test-acc-tf-p-3117591422400797287
2025-09-01T00:31:13.3257645Z     resource_project_api_key_test.go:189: 
2025-09-01T00:31:13.3259202Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:13.3262293Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:13.3265657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:189
2025-09-01T00:31:13.3267042Z         	Error:      	Received unexpected error:
2025-09-01T00:31:13.3302544Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.3304988Z         	Test:       	TestAccProjectAPIKey_deleteProjectAndAssignment
2025-09-01T00:31:13.3309136Z         	Messages:   	Project creation failed: test-acc-tf-p-3117591422400797287, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.3311781Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (0.17s)
```

  - PASS 10 seconds
  - PASS 13 seconds
  - PASS 15 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 10 seconds
- 2025-09-02 PASS 10 seconds
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 11 seconds