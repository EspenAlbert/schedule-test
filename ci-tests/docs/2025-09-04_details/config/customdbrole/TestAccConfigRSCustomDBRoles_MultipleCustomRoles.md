# config/customdbrole/TestAccConfigRSCustomDBRoles_MultipleCustomRoles Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:33](#error-2025-08-17t0033150000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122d3aafa9a76ca8bb8ee/limits | qa | flaky_500 | 81.05s
[2025-08-24 00:32](#error-2025-08-24t0032330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d299bbb8c4ee1f8172f/limits | qa | flaky_500 | 62.02s
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 32 seconds
- 2025-08-07 PASS 2 minutes
- 2025-08-08 PASS 28 seconds
- 2025-08-09 PASS 31 seconds
- 2025-08-10 PASS 27 seconds
- 2025-08-11 PASS 35 seconds
- 2025-08-12 PASS 30 seconds
- 2025-08-13 PASS 27 seconds
- 2025-08-14 PASS 29 seconds
- 2025-08-15 PASS 29 seconds
- 2025-08-16 PASS 29 seconds
- 2025-08-17

### Error 2025-08-17T00:33:15+00:00
```
2025-08-17T00:33:15.5064506Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-08-17T00:33:15.5068105Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-08-17T00:33:15.5128926Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-08-17T00:33:15.5130093Z     resource_custom_db_role_test.go:367: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:33:15.5130907Z         
2025-08-17T00:33:15.5131544Z         Error: error when getting project properties after create
2025-08-17T00:33:15.5132121Z         
2025-08-17T00:33:15.5132629Z           with mongodbatlas_project.test,
2025-08-17T00:33:15.5133685Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-17T00:33:15.5134626Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-17T00:33:15.5135130Z         
2025-08-17T00:33:15.5136084Z         error getting project (68a122d3aafa9a76ca8bb8ee): error getting project's
2025-08-17T00:33:15.5136871Z         limits (68a122d3aafa9a76ca8bb8ee):
2025-08-17T00:33:15.5137856Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d3aafa9a76ca8bb8ee/limits
2025-08-17T00:33:15.5139003Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:33:15.5140214Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:33:15.5140870Z         BadRequestDetail: 
2025-08-17T00:33:15.5162142Z    test_working_directory=/tmp/plugintest2446347170 test_name=TestAccConfigRSCustomDBRoles_WithInheritedRoles test_terraform_path=/home/runner/work/_temp/35a2692a-80ca-42d8-b298-5a765753c3c8/terraform test_step_number=2
2025-08-17T00:33:15.5177508Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (81.49s)
```

- 2025-08-18 PASS 30 seconds
- 2025-08-19 PASS 35 seconds
- 2025-08-20
  - PASS 31 seconds
  - PASS 33 seconds
- 2025-08-21 PASS 30 seconds
- 2025-08-22 PASS 29 seconds
- 2025-08-23 PASS 32 seconds
- 2025-08-24

### Error 2025-08-24T00:32:33+00:00
```
2025-08-24T00:32:33.3448742Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-08-24T00:32:33.3451975Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-08-24T00:32:33.3513629Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-08-24T00:32:33.3514961Z     resource_custom_db_role_test.go:367: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-24T00:32:33.3515836Z         
2025-08-24T00:32:33.3516688Z         Error: error when getting project properties after create
2025-08-24T00:32:33.3517308Z         
2025-08-24T00:32:33.3517847Z           with mongodbatlas_project.test,
2025-08-24T00:32:33.3518899Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:33.3519886Z           12: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:33.3520403Z         
2025-08-24T00:32:33.3521252Z         error getting project (68aa5d299bbb8c4ee1f8172f): error getting project's
2025-08-24T00:32:33.3522038Z         limits (68aa5d299bbb8c4ee1f8172f):
2025-08-24T00:32:33.3523033Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d299bbb8c4ee1f8172f/limits
2025-08-24T00:32:33.3524237Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:33.3525345Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:33.3526022Z         BadRequestDetail: 
2025-08-24T00:32:33.3547841Z   
2025-08-24T00:32:33.3560785Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (62.24s)
```

- 2025-08-25 PASS 34 seconds
- 2025-08-26 PASS 29 seconds
- 2025-08-27 PASS 28 seconds
- 2025-08-28 PASS 27 seconds
- 2025-08-29 PASS 33 seconds
- 2025-08-30 PASS 28 seconds
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1388985Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-09-01T00:31:13.1393030Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-09-01T00:31:13.1444574Z    test_name=TestAccConfigRSCustomDBRoles_UpdatedInheritRoles test_working_directory=/tmp/plugintest1189613961 test_step_number=1
2025-09-01T00:31:13.1507584Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2025-09-01T00:31:13.1508512Z     resource_custom_db_role_test.go:367: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:31:13.1509168Z         
2025-09-01T00:31:13.1509974Z         Error: error creating project: test-acc-tf-p-4755823006463162479
2025-09-01T00:31:13.1510529Z         
2025-09-01T00:31:13.1511004Z           with mongodbatlas_project.test,
2025-09-01T00:31:13.1511969Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-01T00:31:13.1513028Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:31:13.1513487Z         
2025-09-01T00:31:13.1514237Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:31:13.1515323Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:31:13.1516356Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:31:13.1517352Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:31:13.1518021Z         BadRequestDetail: 
2025-09-01T00:31:13.1567991Z   
2025-09-01T00:31:13.1609680Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (0.86s)
```

  - PASS 28 seconds
  - PASS 34 seconds
  - PASS 35 seconds
  - PASS 28 seconds
  - PASS 28 seconds
  - PASS 28 seconds
  - PASS 30 seconds
- 2025-09-02 PASS 28 seconds
- 2025-09-03 PASS 30 seconds
- 2025-09-04 PASS 31 seconds