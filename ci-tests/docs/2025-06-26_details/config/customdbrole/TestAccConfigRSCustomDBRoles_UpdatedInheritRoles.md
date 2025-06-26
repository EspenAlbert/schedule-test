# config/customdbrole/TestAccConfigRSCustomDBRoles_UpdatedInheritRoles Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 35 seconds
```
2025-06-20T00:30:41.1277534Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-20T00:30:41.1279090Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-20T00:30:41.1281684Z --- PASS: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (35.66s)
```
### 2025-06-21
#### PASS 28 seconds
```
2025-06-21T00:30:24.1321783Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-21T00:30:24.1324303Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-21T00:30:24.1328269Z --- PASS: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (28.86s)
```
### 2025-06-22
#### FAIL 34 seconds
```
2025-06-22T00:33:39.3552661Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-22T00:33:39.3556030Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-22T00:33:39.3621625Z === NAME  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-22T00:33:39.3622767Z     resource_custom_db_role_test.go:498: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:33:39.3623505Z         
2025-06-22T00:33:39.3624182Z         Error: error when getting project properties after create
2025-06-22T00:33:39.3624771Z         
2025-06-22T00:33:39.3625291Z           with mongodbatlas_project.test,
2025-06-22T00:33:39.3626724Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:33:39.3627720Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:33:39.3628234Z         
2025-06-22T00:33:39.3629038Z         error getting project (68574ef0af7a0954e84adda3): error getting project's
2025-06-22T00:33:39.3629856Z         limits (68574ef0af7a0954e84adda3):
2025-06-22T00:33:39.3630938Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574ef0af7a0954e84adda3/limits
2025-06-22T00:33:39.3632385Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:33:39.3633469Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:33:39.3634183Z         BadRequestDetail: 
2025-06-22T00:33:39.3634818Z --- FAIL: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (34.14s)
```
### 2025-06-23
#### PASS 33 seconds
```
2025-06-23T00:32:57.6856324Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-23T00:32:57.6858476Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-23T00:32:57.6876459Z --- PASS: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (33.47s)
```
### 2025-06-24
#### PASS 29 seconds
```
2025-06-24T00:30:45.8662087Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-24T00:30:45.8664591Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-24T00:30:45.8670121Z --- PASS: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (29.93s)
```
### 2025-06-25
#### PASS 29 seconds
```
2025-06-25T00:31:06.5573893Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-25T00:31:06.5576355Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-25T00:31:06.5579467Z --- PASS: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (29.34s)
```
### 2025-06-26
#### PASS 28 seconds
```
2025-06-26T00:31:01.9427131Z === RUN   TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-26T00:31:01.9430157Z === CONT  TestAccConfigRSCustomDBRoles_UpdatedInheritRoles
2025-06-26T00:31:01.9432550Z --- PASS: TestAccConfigRSCustomDBRoles_UpdatedInheritRoles (28.96s)
```