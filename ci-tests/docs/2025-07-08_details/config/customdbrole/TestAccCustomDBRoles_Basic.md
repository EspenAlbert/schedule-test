# config/customdbrole/TestAccCustomDBRoles_Basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 16 seconds
### 2025-07-03
#### PASS 18 seconds
### 2025-07-04
#### PASS 17 seconds
### 2025-07-05
#### PASS 20 seconds
### 2025-07-06
#### FAIL 14 seconds
```
2025-07-06T00:33:17.8235020Z === RUN   TestAccCustomDBRoles_Basic
2025-07-06T00:33:17.8317253Z === CONT  TestAccCustomDBRoles_Basic
2025-07-06T00:33:17.8344298Z   
2025-07-06T00:33:17.8345487Z     resource_custom_db_role_test.go:38: Step 3/4 error: Error running apply: exit status 1
2025-07-06T00:33:17.8346342Z         
2025-07-06T00:33:17.8351144Z         Error: error updating custom db role (test-acc-tf-6296991448303463705): https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c3ff690ae45e168bcbce/customDBRoles/roles/test-acc-tf-6296991448303463705 PATCH: HTTP 400 Bad Request (Error code: "INVALID_DATABASE_NAME") Detail: Invalid database name specified: . Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-06T00:33:17.8354112Z         
2025-07-06T00:33:17.8354971Z           with mongodbatlas_custom_db_role.test,
2025-07-06T00:33:17.8357784Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_custom_db_role" "test":
2025-07-06T00:33:17.8359423Z           12: 		resource "mongodbatlas_custom_db_role" "test" {
2025-07-06T00:33:17.8360223Z         
2025-07-06T00:33:17.8360642Z --- FAIL: TestAccCustomDBRoles_Basic (14.27s)
```
### 2025-07-07
#### PASS 16 seconds
### 2025-07-08
#### PASS 19 seconds