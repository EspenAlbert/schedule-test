# autogen/customdbroleapi/TestAccCustomDBRoleAPI_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:54](#error-2025-08-24t0054560000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5dc09bbb8c4ee1f86489/limits | qa | flaky_500 | 34.01s
[2025-09-01 00:32](#error-2025-09-01t0032130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 seconds
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 7 seconds
- 2025-08-10 PASS 26 seconds
- 2025-08-11 PASS 12 seconds
- 2025-08-12 PASS 9 seconds
- 2025-08-13 PASS 13 seconds
- 2025-08-14 PASS 8 seconds
- 2025-08-15 PASS 7 seconds
- 2025-08-16 PASS 12 seconds
- 2025-08-17 PASS 6 seconds
- 2025-08-18 PASS 7 seconds
- 2025-08-19 PASS 12 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 13 seconds
- 2025-08-21 PASS 7 seconds
- 2025-08-22 PASS 8 seconds
- 2025-08-23 PASS 13 seconds
- 2025-08-24

### Error 2025-08-24T00:54:56+00:00
```
2025-08-24T00:54:56.8734125Z === RUN   TestAccCustomDBRoleAPI_basic
2025-08-24T00:54:56.8734708Z === CONT  TestAccCustomDBRoleAPI_basic
2025-08-24T00:54:56.8747357Z   
2025-08-24T00:54:56.8747820Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-08-24T00:54:56.8748181Z         
2025-08-24T00:54:56.8748559Z         Error: error when getting project properties after create
2025-08-24T00:54:56.8748879Z         
2025-08-24T00:54:56.8749166Z           with mongodbatlas_project.test,
2025-08-24T00:54:56.8749936Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:54:56.8750477Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:54:56.8750757Z         
2025-08-24T00:54:56.8751196Z         error getting project (68aa5dc09bbb8c4ee1f86489): error getting project's
2025-08-24T00:54:56.8751646Z         limits (68aa5dc09bbb8c4ee1f86489):
2025-08-24T00:54:56.8752214Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5dc09bbb8c4ee1f86489/limits
2025-08-24T00:54:56.8752875Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:54:56.8753441Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:54:56.8753818Z         BadRequestDetail: 
2025-08-24T00:54:56.8754098Z --- FAIL: TestAccCustomDBRoleAPI_basic (34.09s)
```

- 2025-08-25 PASS 13 seconds
- 2025-08-26 PASS 8 seconds
- 2025-08-27 PASS 12 seconds
- 2025-08-28 PASS 9 seconds
- 2025-08-29 PASS 8 seconds
- 2025-08-30 PASS 11 seconds
- 2025-08-31 PASS 7 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:32:13+00:00
```
2025-09-01T00:32:13.2781079Z === RUN   TestAccCustomDBRoleAPI_basic
2025-09-01T00:32:13.2782186Z === CONT  TestAccCustomDBRoleAPI_basic
2025-09-01T00:32:13.2853837Z   
2025-09-01T00:32:13.2854710Z     resource_test.go:25: Step 1/3 error: Error running apply: exit status 1
2025-09-01T00:32:13.2855367Z         
2025-09-01T00:32:13.2856088Z         Error: error creating project: test-acc-tf-p-6801172488634777766
2025-09-01T00:32:13.2856685Z         
2025-09-01T00:32:13.2857194Z           with mongodbatlas_project.test,
2025-09-01T00:32:13.2858219Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:32:13.2859151Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:32:13.2859656Z         
2025-09-01T00:32:13.2860464Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:32:13.2861738Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:32:13.2862825Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:32:13.2863870Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:32:13.2864589Z         BadRequestDetail: 
2025-09-01T00:32:13.2865080Z --- FAIL: TestAccCustomDBRoleAPI_basic (0.69s)
```

  - PASS 7 seconds
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 10 seconds
- 2025-09-02 PASS 11 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 12 seconds