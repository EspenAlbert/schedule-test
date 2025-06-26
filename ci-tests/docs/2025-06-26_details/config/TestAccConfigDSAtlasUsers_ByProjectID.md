# config/TestAccConfigDSAtlasUsers_ByProjectID Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 9 seconds
```
2025-06-20T00:29:33.0818471Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-06-20T00:29:33.0893374Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-06-20T00:29:33.0901577Z --- PASS: TestAccConfigDSAtlasUsers_ByProjectID (9.26s)
```
### 2025-06-21
#### PASS 4 seconds
```
2025-06-21T00:29:25.9032621Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-06-21T00:29:25.9261644Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-06-21T00:29:25.9276373Z --- PASS: TestAccConfigDSAtlasUsers_ByProjectID (4.84s)
```
### 2025-06-22
#### FAIL 34 seconds
```
2025-06-22T00:32:35.7918821Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-06-22T00:32:35.8127153Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-06-22T00:32:35.8196879Z === NAME  TestAccConfigDSAtlasUsers_ByProjectID
2025-06-22T00:32:35.8197920Z     data_source_atlas_users_test.go:48: Step 1/1 error: Error running apply: exit status 1
2025-06-22T00:32:35.8198648Z         
2025-06-22T00:32:35.8199331Z         Error: error when getting project properties after create
2025-06-22T00:32:35.8199899Z         
2025-06-22T00:32:35.8200402Z           with mongodbatlas_project.test,
2025-06-22T00:32:35.8201596Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-22T00:32:35.8202537Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-22T00:32:35.8203019Z         
2025-06-22T00:32:35.8203795Z         error getting project (68574eefab82446d9bfb0749): error getting project's
2025-06-22T00:32:35.8204593Z         limits (68574eefab82446d9bfb0749):
2025-06-22T00:32:35.8205591Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574eefab82446d9bfb0749/limits
2025-06-22T00:32:35.8206742Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-22T00:32:35.8207746Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:32:35.8208421Z         BadRequestDetail: 
2025-06-22T00:32:35.8208942Z --- FAIL: TestAccConfigDSAtlasUsers_ByProjectID (34.71s)
```
### 2025-06-23
#### PASS 8 seconds
```
2025-06-23T00:31:50.1358356Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-06-23T00:31:50.1419116Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-06-23T00:31:50.1427882Z --- PASS: TestAccConfigDSAtlasUsers_ByProjectID (8.97s)
```
### 2025-06-24
#### PASS 6 seconds
```
2025-06-24T00:29:38.1169451Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-06-24T00:29:38.1264979Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-06-24T00:29:38.1279890Z --- PASS: TestAccConfigDSAtlasUsers_ByProjectID (6.50s)
```
### 2025-06-25
#### PASS 6 seconds
```
2025-06-25T00:29:57.6930188Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-06-25T00:29:57.7136622Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-06-25T00:29:57.7190107Z --- PASS: TestAccConfigDSAtlasUsers_ByProjectID (6.13s)
```
### 2025-06-26
#### PASS 6 seconds
```
2025-06-26T00:29:53.1037510Z === RUN   TestAccConfigDSAtlasUsers_ByProjectID
2025-06-26T00:29:53.1209136Z === CONT  TestAccConfigDSAtlasUsers_ByProjectID
2025-06-26T00:29:53.1223985Z --- PASS: TestAccConfigDSAtlasUsers_ByProjectID (6.26s)
```