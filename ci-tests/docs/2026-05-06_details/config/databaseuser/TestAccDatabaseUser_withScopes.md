# config/databaseuser/TestAccDatabaseUser_withScopes Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 8)
Success rate: 77.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-16 00:54](#error-2026-04-16t0054080000) | ATLAS_SCOPE_CLUSTER_NOT_FOUND /api/atlas/v2/groups/69e032fc81002038a8a13bf0/databaseUsers | dev | 1.06s
[2026-04-17 00:51](#error-2026-04-17t0051490000) | ATLAS_SCOPE_CLUSTER_NOT_FOUND /api/atlas/v2/groups/69e1839a6dfdaa5fce0602eb/databaseUsers | dev | 2.09s
[2026-04-18 00:48](#error-2026-04-18t0048110000) | ATLAS_SCOPE_CLUSTER_NOT_FOUND /api/atlas/v2/groups/69e2d475eb355eaa1b2fe121/databaseUsers | dev | 1.06s
[2026-04-20 00:52](#error-2026-04-20t0052170000) | ATLAS_SCOPE_CLUSTER_NOT_FOUND /api/atlas/v2/groups/69e5783ba0e73895b4ec4082/databaseUsers | dev | 2.06s
[2026-04-21 00:52](#error-2026-04-21t0052220000) | ATLAS_SCOPE_CLUSTER_NOT_FOUND /api/atlas/v2/groups/69e6c9f3aa6b8d9141667ecd/databaseUsers | dev | 2.02s
[2026-04-22 01:17](#error-2026-04-22t0117120000) | ATLAS_SCOPE_CLUSTER_NOT_FOUND /api/atlas/v2/groups/69e81a66632b92cc72e4ea6c/databaseUsers | dev | 5.04s
[2026-04-23 00:55](#error-2026-04-23t0055000000) | ATLAS_SCOPE_CLUSTER_NOT_FOUND /api/atlas/v2/groups/69e96d7f2d49a6262d6cbc65/databaseUsers | dev | 1.05s
[2026-04-24 00:54](#error-2026-04-24t0054160000) | ATLAS_SCOPE_CLUSTER_NOT_FOUND /api/atlas/v2/groups/69eabeadd0fc1bc324799af7/databaseUsers | dev | 2.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 10 seconds
- 2026-04-08 PASS 29 seconds
- 2026-04-09 PASS 12 seconds
- 2026-04-10 PASS 22 seconds
- 2026-04-11 PASS 11 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 30 seconds
- 2026-04-14 PASS 11 seconds
- 2026-04-15 PASS 21 seconds
- 2026-04-16

### Error 2026-04-16T00:54:08+00:00
```
2026-04-16T00:54:08.6248525Z === RUN   TestAccDatabaseUser_withScopes
2026-04-16T00:54:08.6250978Z === CONT  TestAccDatabaseUser_withScopes
2026-04-16T00:54:08.6268727Z === NAME  TestAccDatabaseUser_withScopes
2026-04-16T00:54:08.6269162Z     resource_database_user_test.go:353: Step 1/4 error: Error running apply: exit status 1
2026-04-16T00:54:08.6269506Z         
2026-04-16T00:54:08.6269765Z         Error: error during database user creation
2026-04-16T00:54:08.6270007Z         
2026-04-16T00:54:08.6270258Z           with mongodbatlas_database_user.test,
2026-04-16T00:54:08.6270890Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_database_user" "test":
2026-04-16T00:54:08.6271376Z           17: 		resource "mongodbatlas_database_user" "test" {
2026-04-16T00:54:08.6271625Z         
2026-04-16T00:54:08.6272061Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032fc81002038a8a13bf0/databaseUsers
2026-04-16T00:54:08.6272585Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SCOPE_CLUSTER_NOT_FOUND")
2026-04-16T00:54:08.6273066Z         Detail: The scope cluster name "test-acc-tf-8540289714817488357" does not
2026-04-16T00:54:08.6273481Z         exist in this project. Reason: Bad Request. Params:
2026-04-16T00:54:08.6273852Z         [test-acc-tf-8540289714817488357], BadRequestDetail: 
2026-04-16T00:54:08.6274274Z --- FAIL: TestAccDatabaseUser_withScopes (1.64s)
```

- 2026-04-17

### Error 2026-04-17T00:51:49+00:00
```
2026-04-17T00:51:49.5707872Z === RUN   TestAccDatabaseUser_withScopes
2026-04-17T00:51:49.5714557Z === CONT  TestAccDatabaseUser_withScopes
2026-04-17T00:51:49.5731152Z === NAME  TestAccDatabaseUser_withScopes
2026-04-17T00:51:49.5731731Z     resource_database_user_test.go:353: Step 1/4 error: Error running apply: exit status 1
2026-04-17T00:51:49.5732170Z         
2026-04-17T00:51:49.5732502Z         Error: error during database user creation
2026-04-17T00:51:49.5732804Z         
2026-04-17T00:51:49.5733127Z           with mongodbatlas_database_user.test,
2026-04-17T00:51:49.5733792Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_database_user" "test":
2026-04-17T00:51:49.5734412Z           17: 		resource "mongodbatlas_database_user" "test" {
2026-04-17T00:51:49.5734736Z         
2026-04-17T00:51:49.5735288Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e1839a6dfdaa5fce0602eb/databaseUsers
2026-04-17T00:51:49.5735993Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SCOPE_CLUSTER_NOT_FOUND")
2026-04-17T00:51:49.5736632Z         Detail: The scope cluster name "test-acc-tf-395887685484831215" does not
2026-04-17T00:51:49.5737175Z         exist in this project. Reason: Bad Request. Params:
2026-04-17T00:51:49.5737667Z         [test-acc-tf-395887685484831215], BadRequestDetail: 
2026-04-17T00:51:49.5738183Z --- FAIL: TestAccDatabaseUser_withScopes (2.93s)
```

- 2026-04-18

### Error 2026-04-18T00:48:11+00:00
```
2026-04-18T00:48:11.0417544Z === RUN   TestAccDatabaseUser_withScopes
2026-04-18T00:48:11.0424864Z === CONT  TestAccDatabaseUser_withScopes
2026-04-18T00:48:11.0450235Z === NAME  TestAccDatabaseUser_withScopes
2026-04-18T00:48:11.0451214Z     resource_database_user_test.go:353: Step 1/4 error: Error running apply: exit status 1
2026-04-18T00:48:11.0451979Z         
2026-04-18T00:48:11.0452547Z         Error: error during database user creation
2026-04-18T00:48:11.0453089Z         
2026-04-18T00:48:11.0453531Z           with mongodbatlas_database_user.test,
2026-04-18T00:48:11.0454713Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_database_user" "test":
2026-04-18T00:48:11.0456033Z           17: 		resource "mongodbatlas_database_user" "test" {
2026-04-18T00:48:11.0456461Z         
2026-04-18T00:48:11.0457031Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e2d475eb355eaa1b2fe121/databaseUsers
2026-04-18T00:48:11.0457752Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SCOPE_CLUSTER_NOT_FOUND")
2026-04-18T00:48:11.0458403Z         Detail: The scope cluster name "test-acc-tf-4383069558156033089" does not
2026-04-18T00:48:11.0458952Z         exist in this project. Reason: Bad Request. Params:
2026-04-18T00:48:11.0459807Z         [test-acc-tf-4383069558156033089], BadRequestDetail: 
2026-04-18T00:48:11.0460484Z --- FAIL: TestAccDatabaseUser_withScopes (1.62s)
```

- 2026-04-19: MISSING
- 2026-04-20

### Error 2026-04-20T00:52:17+00:00
```
2026-04-20T00:52:17.8134679Z === RUN   TestAccDatabaseUser_withScopes
2026-04-20T00:52:17.8139493Z === CONT  TestAccDatabaseUser_withScopes
2026-04-20T00:52:17.8156031Z === NAME  TestAccDatabaseUser_withScopes
2026-04-20T00:52:17.8156591Z     resource_database_user_test.go:353: Step 1/4 error: Error running apply: exit status 1
2026-04-20T00:52:17.8157031Z         
2026-04-20T00:52:17.8157366Z         Error: error during database user creation
2026-04-20T00:52:17.8157674Z         
2026-04-20T00:52:17.8158005Z           with mongodbatlas_database_user.test,
2026-04-20T00:52:17.8158783Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_database_user" "test":
2026-04-20T00:52:17.8159417Z           17: 		resource "mongodbatlas_database_user" "test" {
2026-04-20T00:52:17.8159748Z         
2026-04-20T00:52:17.8160307Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e5783ba0e73895b4ec4082/databaseUsers
2026-04-20T00:52:17.8161005Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SCOPE_CLUSTER_NOT_FOUND")
2026-04-20T00:52:17.8161643Z         Detail: The scope cluster name "test-acc-tf-2742230645021963159" does not
2026-04-20T00:52:17.8162190Z         exist in this project. Reason: Bad Request. Params:
2026-04-20T00:52:17.8162678Z         [test-acc-tf-2742230645021963159], BadRequestDetail: 
2026-04-20T00:52:17.8163054Z --- FAIL: TestAccDatabaseUser_withScopes (2.62s)
```

- 2026-04-21

### Error 2026-04-21T00:52:22+00:00
```
2026-04-21T00:52:22.9766345Z === RUN   TestAccDatabaseUser_withScopes
2026-04-21T00:52:22.9772135Z === CONT  TestAccDatabaseUser_withScopes
2026-04-21T00:52:22.9800435Z === NAME  TestAccDatabaseUser_withScopes
2026-04-21T00:52:22.9801532Z     resource_database_user_test.go:353: Step 1/4 error: Error running apply: exit status 1
2026-04-21T00:52:22.9802335Z         
2026-04-21T00:52:22.9802932Z         Error: error during database user creation
2026-04-21T00:52:22.9803467Z         
2026-04-21T00:52:22.9804049Z           with mongodbatlas_database_user.test,
2026-04-21T00:52:22.9805266Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_database_user" "test":
2026-04-21T00:52:22.9806706Z           17: 		resource "mongodbatlas_database_user" "test" {
2026-04-21T00:52:22.9807293Z         
2026-04-21T00:52:22.9808301Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e6c9f3aa6b8d9141667ecd/databaseUsers
2026-04-21T00:52:22.9809615Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SCOPE_CLUSTER_NOT_FOUND")
2026-04-21T00:52:22.9810826Z         Detail: The scope cluster name "test-acc-tf-1620084000953181972" does not
2026-04-21T00:52:22.9811752Z         exist in this project. Reason: Bad Request. Params:
2026-04-21T00:52:22.9812691Z         [test-acc-tf-1620084000953181972], BadRequestDetail: 
2026-04-21T00:52:22.9813345Z --- FAIL: TestAccDatabaseUser_withScopes (2.21s)
```

- 2026-04-22

### Error 2026-04-22T01:17:12+00:00
```
2026-04-22T01:17:12.1318672Z === RUN   TestAccDatabaseUser_withScopes
2026-04-22T01:17:12.1332156Z === CONT  TestAccDatabaseUser_withScopes
2026-04-22T01:17:12.1351194Z   
2026-04-22T01:17:12.1351736Z     resource_database_user_test.go:353: Step 1/4 error: Error running apply: exit status 1
2026-04-22T01:17:12.1352198Z         
2026-04-22T01:17:12.1352552Z         Error: error during database user creation
2026-04-22T01:17:12.1353046Z         
2026-04-22T01:17:12.1353399Z           with mongodbatlas_database_user.test,
2026-04-22T01:17:12.1354317Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_database_user" "test":
2026-04-22T01:17:12.1354979Z           17: 		resource "mongodbatlas_database_user" "test" {
2026-04-22T01:17:12.1355329Z         
2026-04-22T01:17:12.1355905Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e81a66632b92cc72e4ea6c/databaseUsers
2026-04-22T01:17:12.1356628Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SCOPE_CLUSTER_NOT_FOUND")
2026-04-22T01:17:12.1357277Z         Detail: The scope cluster name "test-acc-tf-8689555871109213850" does not
2026-04-22T01:17:12.1357841Z         exist in this project. Reason: Bad Request. Params:
2026-04-22T01:17:12.1358347Z         [test-acc-tf-8689555871109213850], BadRequestDetail: 
2026-04-22T01:17:12.1358756Z --- FAIL: TestAccDatabaseUser_withScopes (5.45s)
```

- 2026-04-23

### Error 2026-04-23T00:55:00+00:00
```
2026-04-23T00:55:00.3539374Z === RUN   TestAccDatabaseUser_withScopes
2026-04-23T00:55:00.3543755Z === CONT  TestAccDatabaseUser_withScopes
2026-04-23T00:55:00.3557365Z === NAME  TestAccDatabaseUser_withScopes
2026-04-23T00:55:00.3557926Z     resource_database_user_test.go:353: Step 1/4 error: Error running apply: exit status 1
2026-04-23T00:55:00.3558361Z         
2026-04-23T00:55:00.3558823Z         Error: error during database user creation
2026-04-23T00:55:00.3559141Z         
2026-04-23T00:55:00.3559464Z           with mongodbatlas_database_user.test,
2026-04-23T00:55:00.3560133Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_database_user" "test":
2026-04-23T00:55:00.3560755Z           17: 		resource "mongodbatlas_database_user" "test" {
2026-04-23T00:55:00.3561070Z         
2026-04-23T00:55:00.3561628Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e96d7f2d49a6262d6cbc65/databaseUsers
2026-04-23T00:55:00.3562514Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SCOPE_CLUSTER_NOT_FOUND")
2026-04-23T00:55:00.3563164Z         Detail: The scope cluster name "test-acc-tf-552492000023305333" does not
2026-04-23T00:55:00.3563715Z         exist in this project. Reason: Bad Request. Params:
2026-04-23T00:55:00.3564208Z         [test-acc-tf-552492000023305333], BadRequestDetail: 
2026-04-23T00:55:00.3564601Z --- FAIL: TestAccDatabaseUser_withScopes (1.52s)
```

- 2026-04-24

### Error 2026-04-24T00:54:16+00:00
```
2026-04-24T00:54:16.6267294Z === RUN   TestAccDatabaseUser_withScopes
2026-04-24T00:54:16.6273608Z === CONT  TestAccDatabaseUser_withScopes
2026-04-24T00:54:16.6300470Z === NAME  TestAccDatabaseUser_withScopes
2026-04-24T00:54:16.6301398Z     resource_database_user_test.go:353: Step 1/4 error: Error running apply: exit status 1
2026-04-24T00:54:16.6302074Z         
2026-04-24T00:54:16.6302752Z         Error: error during database user creation
2026-04-24T00:54:16.6303215Z         
2026-04-24T00:54:16.6303724Z           with mongodbatlas_database_user.test,
2026-04-24T00:54:16.6304954Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_database_user" "test":
2026-04-24T00:54:16.6305930Z           17: 		resource "mongodbatlas_database_user" "test" {
2026-04-24T00:54:16.6306426Z         
2026-04-24T00:54:16.6307301Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69eabeadd0fc1bc324799af7/databaseUsers
2026-04-24T00:54:16.6308442Z         POST: HTTP 400 Bad Request (Error code: "ATLAS_SCOPE_CLUSTER_NOT_FOUND")
2026-04-24T00:54:16.6309439Z         Detail: The scope cluster name "test-acc-tf-2945982082236404893" does not
2026-04-24T00:54:16.6310293Z         exist in this project. Reason: Bad Request. Params:
2026-04-24T00:54:16.6311069Z         [test-acc-tf-2945982082236404893], BadRequestDetail: 
2026-04-24T00:54:16.6311652Z --- FAIL: TestAccDatabaseUser_withScopes (2.54s)
```

- 2026-04-25 PASS 11 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 30 seconds
- 2026-04-28 PASS 10 seconds
- 2026-04-29 PASS 22 seconds
- 2026-04-30 PASS 10 seconds
- 2026-05-01 PASS 29 seconds
- 2026-05-02 PASS 13 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 29 seconds
- 2026-05-05 PASS 13 seconds
- 2026-05-06 PASS 18 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 21 seconds
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
  - PASS 21 seconds
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
- 2026-05-03 PASS 30 seconds
- 2026-05-04 PASS 29 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 24 seconds
