# config/customdbrole/TestAccCustomDBRoles_Basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 16 seconds
```
2025-07-01T08:35:29.4567382Z === RUN   TestAccCustomDBRoles_Basic
2025-07-01T08:35:29.4571879Z === CONT  TestAccCustomDBRoles_Basic
2025-07-01T08:35:29.4572177Z --- PASS: TestAccCustomDBRoles_Basic (16.90s)
```
### 2025-07-02
#### PASS 16 seconds
```
2025-07-02T00:30:40.8594331Z === RUN   TestAccCustomDBRoles_Basic
2025-07-02T00:30:40.8598650Z === CONT  TestAccCustomDBRoles_Basic
2025-07-02T00:30:40.8598948Z --- PASS: TestAccCustomDBRoles_Basic (16.56s)
```
### 2025-07-03
#### PASS 18 seconds
```
2025-07-03T00:31:22.4201090Z === RUN   TestAccCustomDBRoles_Basic
2025-07-03T00:31:22.4210288Z === CONT  TestAccCustomDBRoles_Basic
2025-07-03T00:31:22.4210815Z --- PASS: TestAccCustomDBRoles_Basic (18.25s)
```
### 2025-07-04
#### PASS 17 seconds
```
2025-07-04T00:30:47.2379155Z === RUN   TestAccCustomDBRoles_Basic
2025-07-04T00:30:47.2383721Z === CONT  TestAccCustomDBRoles_Basic
2025-07-04T00:30:47.2384848Z --- PASS: TestAccCustomDBRoles_Basic (17.46s)
```
### 2025-07-05
#### PASS 20 seconds
```
2025-07-05T00:29:58.2599591Z === RUN   TestAccCustomDBRoles_Basic
2025-07-05T00:29:58.2604025Z === CONT  TestAccCustomDBRoles_Basic
2025-07-05T00:29:58.2604677Z --- PASS: TestAccCustomDBRoles_Basic (20.09s)
```
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
```
2025-07-07T00:33:18.3421690Z === RUN   TestAccCustomDBRoles_Basic
2025-07-07T00:33:18.3429335Z === CONT  TestAccCustomDBRoles_Basic
2025-07-07T00:33:18.3429838Z --- PASS: TestAccCustomDBRoles_Basic (16.36s)
```
### 2025-07-08
#### PASS 19 seconds
```
2025-07-08T00:31:20.9914945Z === RUN   TestAccCustomDBRoles_Basic
2025-07-08T00:31:20.9919860Z === CONT  TestAccCustomDBRoles_Basic
2025-07-08T00:31:20.9920396Z --- PASS: TestAccCustomDBRoles_Basic (19.60s)
```