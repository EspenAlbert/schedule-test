# config/customdbrole/TestAccConfigRSCustomDBRoles_WithInheritedRoles Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-17 00:33](#error-2025-08-17t0033150000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68a122d3aafa9a76ca8bb74d/limits | qa | flaky_500 | 88.06s
[2025-08-24 00:32](#error-2025-08-24t0032330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d294192cd1cc589b7e7/limits | qa | flaky_500 | 70.04s
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 42 seconds
- 2025-08-07 PASS 3 minutes
- 2025-08-08 PASS 38 seconds
- 2025-08-09 PASS 41 seconds
- 2025-08-10 PASS 36 seconds
- 2025-08-11 PASS 50 seconds
- 2025-08-12 PASS 38 seconds
- 2025-08-13 PASS 38 seconds
- 2025-08-14 PASS 39 seconds
- 2025-08-15 PASS 38 seconds
- 2025-08-16 PASS 38 seconds
- 2025-08-17

### Error 2025-08-17T00:33:15+00:00
```
2025-08-17T00:33:15.5053589Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-08-17T00:33:15.5069437Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-08-17T00:33:15.5163865Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-08-17T00:33:15.5165094Z     resource_custom_db_role_test.go:176: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-08-17T00:33:15.5166057Z         
2025-08-17T00:33:15.5166716Z         Error: error when getting project properties after create
2025-08-17T00:33:15.5167289Z         
2025-08-17T00:33:15.5167793Z           with mongodbatlas_project.test,
2025-08-17T00:33:15.5168846Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-08-17T00:33:15.5169802Z           13: 		resource "mongodbatlas_project" "test" {
2025-08-17T00:33:15.5170306Z         
2025-08-17T00:33:15.5171107Z         error getting project (68a122d3aafa9a76ca8bb74d): error getting project's
2025-08-17T00:33:15.5171924Z         limits (68a122d3aafa9a76ca8bb74d):
2025-08-17T00:33:15.5172943Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d3aafa9a76ca8bb74d/limits
2025-08-17T00:33:15.5174141Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-17T00:33:15.5175339Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-17T00:33:15.5176054Z         BadRequestDetail: 
2025-08-17T00:33:15.5178323Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (88.57s)
```

- 2025-08-18 PASS 39 seconds
- 2025-08-19 PASS 45 seconds
- 2025-08-20
  - PASS 41 seconds
  - PASS 47 seconds
- 2025-08-21 PASS 37 seconds
- 2025-08-22 PASS 37 seconds
- 2025-08-23 PASS 44 seconds
- 2025-08-24

### Error 2025-08-24T00:32:33+00:00
```
2025-08-24T00:32:33.3447390Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-08-24T00:32:33.3453321Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-08-24T00:32:33.3548288Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-08-24T00:32:33.3549394Z     resource_custom_db_role_test.go:176: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-08-24T00:32:33.3550170Z         
2025-08-24T00:32:33.3550817Z         Error: error when getting project properties after create
2025-08-24T00:32:33.3551388Z         
2025-08-24T00:32:33.3551881Z           with mongodbatlas_project.test,
2025-08-24T00:32:33.3552907Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-08-24T00:32:33.3553870Z           13: 		resource "mongodbatlas_project" "test" {
2025-08-24T00:32:33.3554355Z         
2025-08-24T00:32:33.3555284Z         error getting project (68aa5d294192cd1cc589b7e7): error getting project's
2025-08-24T00:32:33.3556257Z         limits (68aa5d294192cd1cc589b7e7):
2025-08-24T00:32:33.3557248Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d294192cd1cc589b7e7/limits
2025-08-24T00:32:33.3558442Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:32:33.3559478Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:32:33.3560158Z         BadRequestDetail: 
2025-08-24T00:32:33.3561643Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (70.43s)
```

- 2025-08-25 PASS 46 seconds
- 2025-08-26 PASS 40 seconds
- 2025-08-27 PASS 41 seconds
- 2025-08-28 PASS 37 seconds
- 2025-08-29 PASS 41 seconds
- 2025-08-30 PASS 37 seconds
- 2025-08-31 PASS a minute
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1387674Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-09-01T00:31:13.1391719Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-09-01T00:31:13.1568416Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-09-01T00:31:13.1569364Z     resource_custom_db_role_test.go:176: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:31:13.1570164Z         
2025-09-01T00:31:13.1571011Z         Error: error creating project: test-acc-tf-p-8499268471183766496
2025-09-01T00:31:13.1571590Z         
2025-09-01T00:31:13.1572071Z           with mongodbatlas_project.test,
2025-09-01T00:31:13.1573053Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-09-01T00:31:13.1573931Z           13: 		resource "mongodbatlas_project" "test" {
2025-09-01T00:31:13.1574398Z         
2025-09-01T00:31:13.1575173Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2025-09-01T00:31:13.1576265Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2025-09-01T00:31:13.1577297Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2025-09-01T00:31:13.1578287Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2025-09-01T00:31:13.1578952Z         BadRequestDetail: 
2025-09-01T00:31:13.1611457Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (0.92s)
```

  - PASS 37 seconds
  - PASS 49 seconds
  - PASS 46 seconds
  - PASS 38 seconds
  - PASS 38 seconds
  - PASS 40 seconds
  - PASS 39 seconds
- 2025-09-02 PASS 38 seconds
- 2025-09-03 PASS 39 seconds
- 2025-09-04 PASS 41 seconds