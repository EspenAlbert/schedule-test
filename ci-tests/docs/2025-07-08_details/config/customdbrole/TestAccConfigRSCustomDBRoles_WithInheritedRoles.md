# config/customdbrole/TestAccConfigRSCustomDBRoles_WithInheritedRoles Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 37 seconds
### 2025-07-03
#### PASS 46 seconds
### 2025-07-04
#### PASS 39 seconds
### 2025-07-05
#### PASS 52 seconds
### 2025-07-06
#### FAIL a minute
```
2025-07-06T00:33:17.8236122Z === RUN   TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-07-06T00:33:17.8316425Z === CONT  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-07-06T00:33:17.8425904Z === NAME  TestAccConfigRSCustomDBRoles_WithInheritedRoles
2025-07-06T00:33:17.8426943Z     resource_custom_db_role_test.go:176: Step 2/2 error: Error running pre-apply plan: exit status 1
2025-07-06T00:33:17.8427837Z         
2025-07-06T00:33:17.8428459Z         Error: error when getting project properties after create
2025-07-06T00:33:17.8428993Z         
2025-07-06T00:33:17.8429475Z           with mongodbatlas_project.test,
2025-07-06T00:33:17.8430474Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2025-07-06T00:33:17.8431373Z           13: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:33:17.8431840Z         
2025-07-06T00:33:17.8432580Z         error getting project (6869c4027267b5775b682a24): error getting project's
2025-07-06T00:33:17.8433325Z         limits (6869c4027267b5775b682a24):
2025-07-06T00:33:17.8434280Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4027267b5775b682a24/limits
2025-07-06T00:33:17.8435549Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:33:17.8436551Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:33:17.8437229Z         BadRequestDetail: 
2025-07-06T00:33:17.8438664Z --- FAIL: TestAccConfigRSCustomDBRoles_WithInheritedRoles (63.78s)
```
### 2025-07-07
#### PASS 37 seconds
### 2025-07-08
#### PASS 46 seconds