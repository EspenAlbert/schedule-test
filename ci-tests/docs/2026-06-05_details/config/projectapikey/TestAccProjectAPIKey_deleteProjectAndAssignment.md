# config/projectapikey/TestAccProjectAPIKey_deleteProjectAndAssignment Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-05-30 01:08](#error-2026-05-30t0108510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.10s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 14 seconds
  - PASS 16 seconds
- 2026-05-08 PASS 13 seconds
- 2026-05-09 PASS a minute
- 2026-05-10: MISSING
- 2026-05-11 PASS 15 seconds
- 2026-05-12 PASS 16 seconds
- 2026-05-13 PASS 14 seconds
- 2026-05-14 PASS 15 seconds
- 2026-05-15 PASS 13 seconds
- 2026-05-16 PASS 14 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 14 seconds
- 2026-05-19 PASS 14 seconds
- 2026-05-20 PASS 15 seconds
- 2026-05-21 PASS 55 seconds
- 2026-05-22 PASS 14 seconds
- 2026-05-23 PASS 16 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 15 seconds
- 2026-05-26 PASS 15 seconds
- 2026-05-27 PASS 14 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6440115Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2026-05-28T01:02:57.6440788Z     resource_project_api_key_test.go:208: Creating execution project (1): test-acc-tf-p-5534045387268526325
2026-05-28T01:02:57.6441479Z     resource_project_api_key_test.go:208: 
2026-05-28T01:02:57.6442406Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:57.6444309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:02:57.6446088Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:02:57.6448086Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:208
2026-05-28T01:02:57.6448928Z         	Error:      	Received unexpected error:
2026-05-28T01:02:57.6451836Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6453272Z         	Test:       	TestAccProjectAPIKey_deleteProjectAndAssignment
2026-05-28T01:02:57.6455634Z         	Messages:   	Project creation failed: test-acc-tf-p-5534045387268526325, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:57.6457203Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (0.41s)
```

- 2026-05-29 PASS 11 seconds
- 2026-05-30

### Error 2026-05-30T01:08:51+00:00
```
2026-05-30T01:08:51.9443367Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2026-05-30T01:08:51.9446773Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2026-05-30T01:08:51.9469470Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2026-05-30T01:08:51.9470108Z     resource_project_api_key_test.go:213: Step 1/2 error: Error running apply: exit status 1
2026-05-30T01:08:51.9470592Z         
2026-05-30T01:08:51.9471056Z         Error: error creating project: test-acc-tf-p-3068502397887429517
2026-05-30T01:08:51.9471464Z         
2026-05-30T01:08:51.9471833Z           with mongodbatlas_project.project2,
2026-05-30T01:08:51.9472531Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "project2":
2026-05-30T01:08:51.9473180Z           13: 		resource "mongodbatlas_project" "project2" {
2026-05-30T01:08:51.9473532Z         
2026-05-30T01:08:51.9474047Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:08:51.9486561Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:08:51.9487294Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:51.9488233Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (86.98s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 11 seconds
- 2026-06-02 PASS 16 seconds
- 2026-06-03 PASS 18 seconds
- 2026-06-04 PASS 18 seconds
- 2026-06-05 PASS 13 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 12 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 13 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 13 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 11 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
