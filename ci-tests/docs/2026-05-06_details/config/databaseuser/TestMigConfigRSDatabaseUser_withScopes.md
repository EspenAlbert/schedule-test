# config/databaseuser/TestMigConfigRSDatabaseUser_withScopes Test Details
# Found 22 TestRuns in dev, qa from 2026-04-08 to 2026-05-06 from master branch: 1 unique tests, PASS(x 18) FAIL(x 4)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-17 00:51](#error-2026-04-17t0051490000) | ATLAS_SCOPE_CLUSTER_NOT_FOUND /api/atlas/v2/groups/69e1839a6dfdaa5fce0602eb/databaseUsers | dev |  | 7.07s
[2026-04-20 00:52](#error-2026-04-20t0052170000) | ATLAS_SCOPE_CLUSTER_NOT_FOUND /api/atlas/v2/groups/69e5783ba0e73895b4ec4082/databaseUsers | dev |  | 8.08s
[2026-04-22 01:17](#error-2026-04-22t0117120000) | ATLAS_SCOPE_CLUSTER_NOT_FOUND /api/atlas/v2/groups/69e81a66632b92cc72e4ea6c/databaseUsers | dev | flaky_500 | 12.04s
[2026-04-24 00:54](#error-2026-04-24t0054160000) | ATLAS_SCOPE_CLUSTER_NOT_FOUND /api/atlas/v2/groups/69eabeadd0fc1bc324799af7/databaseUsers | dev |  | 8.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 28 seconds
- 2026-04-09: MISSING
- 2026-04-10 PASS 21 seconds
- 2026-04-11: MISSING
- 2026-04-12: MISSING
- 2026-04-13 PASS 31 seconds
- 2026-04-14: MISSING
- 2026-04-15 PASS 20 seconds
- 2026-04-16: MISSING
- 2026-04-17

### Error 2026-04-17T00:51:49+00:00
```
2026-04-17T00:51:49.5701096Z === RUN   TestMigConfigRSDatabaseUser_withScopes
2026-04-17T00:51:49.5715192Z === CONT  TestMigConfigRSDatabaseUser_withScopes
2026-04-17T00:51:49.5746180Z === NAME  TestMigConfigRSDatabaseUser_withScopes
2026-04-17T00:51:49.5747192Z     resource_database_user_migration_test.go:214: Step 1/2 error: Error running apply: exit status 1
2026-04-17T00:51:49.5748342Z         
2026-04-17T00:51:49.5748999Z         Error: error during database user creation
2026-04-17T00:51:49.5749590Z         
2026-04-17T00:51:49.5750225Z           with mongodbatlas_database_user.test,
2026-04-17T00:51:49.5751426Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_database_user" "test":
2026-04-17T00:51:49.5752078Z           14: 		resource "mongodbatlas_database_user" "test" {
2026-04-17T00:51:49.5752406Z         
2026-04-17T00:51:49.5753190Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e1839a6dfdaa5fce0602eb/databaseUsers
2026-04-17T00:51:49.5753914Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SCOPE_CLUSTER_NOT_FOUND")
2026-04-17T00:51:49.5754556Z         Detail: The scope cluster name "test-acc-tf-6625415582475396027" does not
2026-04-17T00:51:49.5755114Z         exist in this project. Reason: Bad Request. Params:
2026-04-17T00:51:49.5755929Z         [test-acc-tf-6625415582475396027], BadRequestDetail: 
2026-04-17T00:51:49.5756507Z --- FAIL: TestMigConfigRSDatabaseUser_withScopes (7.68s)
```

- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20

### Error 2026-04-20T00:52:17+00:00
```
2026-04-20T00:52:17.8127965Z === RUN   TestMigConfigRSDatabaseUser_withScopes
2026-04-20T00:52:17.8141580Z === CONT  TestMigConfigRSDatabaseUser_withScopes
2026-04-20T00:52:17.8171279Z === NAME  TestMigConfigRSDatabaseUser_withScopes
2026-04-20T00:52:17.8171933Z     resource_database_user_migration_test.go:214: Step 1/2 error: Error running apply: exit status 1
2026-04-20T00:52:17.8172407Z         
2026-04-20T00:52:17.8172741Z         Error: error during database user creation
2026-04-20T00:52:17.8173067Z         
2026-04-20T00:52:17.8173396Z           with mongodbatlas_database_user.test,
2026-04-20T00:52:17.8174069Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_database_user" "test":
2026-04-20T00:52:17.8174698Z           14: 		resource "mongodbatlas_database_user" "test" {
2026-04-20T00:52:17.8175022Z         
2026-04-20T00:52:17.8175583Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e5783ba0e73895b4ec4082/databaseUsers
2026-04-20T00:52:17.8176283Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SCOPE_CLUSTER_NOT_FOUND")
2026-04-20T00:52:17.8176925Z         Detail: The scope cluster name "test-acc-tf-3757252842931175882" does not
2026-04-20T00:52:17.8177470Z         exist in this project. Reason: Bad Request. Params:
2026-04-20T00:52:17.8177959Z         [test-acc-tf-3757252842931175882], BadRequestDetail: 
2026-04-20T00:52:17.8178596Z --- FAIL: TestMigConfigRSDatabaseUser_withScopes (8.83s)
```

- 2026-04-21: MISSING
- 2026-04-22

### Error 2026-04-22T01:17:12+00:00
```
2026-04-22T01:17:12.1308179Z === RUN   TestMigConfigRSDatabaseUser_withScopes
2026-04-22T01:17:12.1326821Z === CONT  TestMigConfigRSDatabaseUser_withScopes
2026-04-22T01:17:12.1366936Z === NAME  TestMigConfigRSDatabaseUser_withScopes
2026-04-22T01:17:12.1367584Z     resource_database_user_migration_test.go:214: Step 1/2 error: Error running apply: exit status 1
2026-04-22T01:17:12.1368236Z         
2026-04-22T01:17:12.1368584Z         Error: error during database user creation
2026-04-22T01:17:12.1368918Z         
2026-04-22T01:17:12.1369267Z           with mongodbatlas_database_user.test,
2026-04-22T01:17:12.1369936Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_database_user" "test":
2026-04-22T01:17:12.1370599Z           14: 		resource "mongodbatlas_database_user" "test" {
2026-04-22T01:17:12.1370948Z         
2026-04-22T01:17:12.1371512Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a66632b92cc72e4ea6c/databaseUsers
2026-04-22T01:17:12.1372217Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SCOPE_CLUSTER_NOT_FOUND")
2026-04-22T01:17:12.1372864Z         Detail: The scope cluster name "test-acc-tf-5893050892291353399" does not
2026-04-22T01:17:12.1373422Z         exist in this project. Reason: Bad Request. Params:
2026-04-22T01:17:12.1374063Z         [test-acc-tf-5893050892291353399], BadRequestDetail: 
2026-04-22T01:17:12.1374500Z --- FAIL: TestMigConfigRSDatabaseUser_withScopes (12.38s)
```

- 2026-04-23: MISSING
- 2026-04-24

### Error 2026-04-24T00:54:16+00:00
```
2026-04-24T00:54:16.6257581Z === RUN   TestMigConfigRSDatabaseUser_withScopes
2026-04-24T00:54:16.6279964Z === CONT  TestMigConfigRSDatabaseUser_withScopes
2026-04-24T00:54:16.6300124Z   
2026-04-24T00:54:16.6323698Z === NAME  TestMigConfigRSDatabaseUser_withScopes
2026-04-24T00:54:16.6324594Z     resource_database_user_migration_test.go:214: Step 1/2 error: Error running apply: exit status 1
2026-04-24T00:54:16.6325078Z         
2026-04-24T00:54:16.6325419Z         Error: error during database user creation
2026-04-24T00:54:16.6325729Z         
2026-04-24T00:54:16.6326054Z           with mongodbatlas_database_user.test,
2026-04-24T00:54:16.6326734Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_database_user" "test":
2026-04-24T00:54:16.6327378Z           14: 		resource "mongodbatlas_database_user" "test" {
2026-04-24T00:54:16.6327705Z         
2026-04-24T00:54:16.6328287Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69eabeadd0fc1bc324799af7/databaseUsers
2026-04-24T00:54:16.6329008Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SCOPE_CLUSTER_NOT_FOUND")
2026-04-24T00:54:16.6329654Z         Detail: The scope cluster name "test-acc-tf-7190086062304205206" does not
2026-04-24T00:54:16.6330200Z         exist in this project. Reason: Bad Request. Params:
2026-04-24T00:54:16.6330700Z         [test-acc-tf-7190086062304205206], BadRequestDetail: 
2026-04-24T00:54:16.6331116Z --- FAIL: TestMigConfigRSDatabaseUser_withScopes (8.00s)
```

- 2026-04-25: MISSING
- 2026-04-26: MISSING
- 2026-04-27 PASS 29 seconds
- 2026-04-28: MISSING
- 2026-04-29 PASS 21 seconds
- 2026-04-30: MISSING
- 2026-05-01 PASS 29 seconds
- 2026-05-02: MISSING
- 2026-05-03: MISSING
- 2026-05-04 PASS 29 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 17 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 22 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 28 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 29 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 19 seconds
  - PASS 30 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 32 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 29 seconds
- 2026-05-04 PASS 30 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 23 seconds
