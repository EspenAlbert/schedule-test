# encryption/encryptionatrestprivateendpoint/TestMigEncryptionAtRestPrivateEndpoint_AWS_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 26) FAIL(x 13)
Success rate: 66.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-15 00:30](#error-2025-07-15t0030210000) |  | dev |  | 1.05s
[2025-07-16 00:30](#error-2025-07-16t0030020000) |  | dev |  | 1.07s
[2025-07-17 00:30](#error-2025-07-17t0030350000) |  | dev |  | 1.08s
[2025-07-18 00:30](#error-2025-07-18t0030110000) |  | dev |  | 2.00s
[2025-07-19 00:29](#error-2025-07-19t0029240000) |  | dev |  | 1.09s
[2025-07-21 00:32](#error-2025-07-21t0032470000) |  | dev |  | 1.05s
[2025-07-23 14:09](#error-2025-07-23t1409370000) |  | dev |  | 1.05s
[2025-07-24 00:34](#error-2025-07-24t0034520000) |  | dev | unknown | 1.08s
[2025-07-25 00:34](#error-2025-07-25t0034460000) |  | dev | flaky_500 | 2.00s
[2025-07-26 00:35](#error-2025-07-26t0035330000) |  | dev |  | 1.08s
[2025-07-28 00:36](#error-2025-07-28t0036110000) |  | dev |  | 1.06s
[2025-07-29 00:37](#error-2025-07-29t0037090000) |  | dev |  | 2.01s
[2025-07-30 00:34](#error-2025-07-30t0034480000) |  | dev | flaky_500 | 1.07s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 4 seconds
- 2025-07-02 PASS 4 seconds
- 2025-07-03 PASS 4 seconds
- 2025-07-04 PASS 3 seconds
- 2025-07-05 PASS 4 seconds
- 2025-07-06 PASS 4 seconds
- 2025-07-07 PASS 4 seconds
- 2025-07-08 PASS 4 seconds
- 2025-07-09 PASS 5 seconds
- 2025-07-10
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-07-11 PASS 4 seconds
- 2025-07-12 PASS 4 seconds
- 2025-07-13 PASS 4 seconds
- 2025-07-14 PASS 4 seconds
- 2025-07-15

### Error 2025-07-15T00:30:21+00:00
```
2025-07-15T00:30:21.0682622Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-15T00:30:21.0692059Z   
2025-07-15T00:30:21.0692494Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-15T00:30:21.0692905Z         
2025-07-15T00:30:21.0693331Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-15T00:30:21.0693699Z         
2025-07-15T00:30:21.0694057Z           with mongodbatlas_encryption_at_rest.test,
2025-07-15T00:30:21.0694711Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-15T00:30:21.0695337Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-15T00:30:21.0695672Z         
2025-07-15T00:30:21.0696228Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-15T00:30:21.0696808Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-15T00:30:21.0697440Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-15T00:30:21.0698158Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-15T00:30:21.0699696Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-15T00:30:21.0700364Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-15T00:30:21.0700812Z         BadRequestDetail: 
2025-07-15T00:30:21.0701203Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (1.54s)
```

- 2025-07-16

### Error 2025-07-16T00:30:02+00:00
```
2025-07-16T00:30:02.6302895Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-16T00:30:02.6318794Z   
2025-07-16T00:30:02.6319532Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-16T00:30:02.6320400Z         
2025-07-16T00:30:02.6321167Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-16T00:30:02.6321793Z         
2025-07-16T00:30:02.6322388Z           with mongodbatlas_encryption_at_rest.test,
2025-07-16T00:30:02.6323550Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-16T00:30:02.6324625Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-16T00:30:02.6325200Z         
2025-07-16T00:30:02.6326177Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-16T00:30:02.6327172Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-16T00:30:02.6328285Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-16T00:30:02.6329551Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-16T00:30:02.6330804Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-16T00:30:02.6331885Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-16T00:30:02.6332640Z         BadRequestDetail: 
2025-07-16T00:30:02.6333289Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (1.67s)
```

- 2025-07-17

### Error 2025-07-17T00:30:35+00:00
```
2025-07-17T00:30:35.6083608Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-17T00:30:35.6092623Z    test_terraform_path=/home/runner/work/_temp/d481639b-0443-47ad-87e2-6a35a3d6c4a9/terraform test_name=TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-17T00:30:35.6093524Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-17T00:30:35.6093944Z         
2025-07-17T00:30:35.6094381Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-17T00:30:35.6094755Z         
2025-07-17T00:30:35.6095118Z           with mongodbatlas_encryption_at_rest.test,
2025-07-17T00:30:35.6095796Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-17T00:30:35.6096436Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-17T00:30:35.6096786Z         
2025-07-17T00:30:35.6097590Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-17T00:30:35.6098186Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-17T00:30:35.6098833Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-17T00:30:35.6099565Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-17T00:30:35.6100233Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-17T00:30:35.6100861Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-17T00:30:35.6101314Z         BadRequestDetail: 
2025-07-17T00:30:35.6101702Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (1.83s)
```

- 2025-07-18

### Error 2025-07-18T00:30:11+00:00
```
2025-07-18T00:30:11.2065883Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-18T00:30:11.2080958Z   
2025-07-18T00:30:11.2081671Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-18T00:30:11.2082106Z         
2025-07-18T00:30:11.2082754Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-18T00:30:11.2083391Z         
2025-07-18T00:30:11.2084011Z           with mongodbatlas_encryption_at_rest.test,
2025-07-18T00:30:11.2085202Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-18T00:30:11.2086315Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-18T00:30:11.2086815Z         
2025-07-18T00:30:11.2087461Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-18T00:30:11.2088619Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-18T00:30:11.2089780Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-18T00:30:11.2091102Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-18T00:30:11.2092101Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-18T00:30:11.2092841Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-18T00:30:11.2093621Z         BadRequestDetail: 
2025-07-18T00:30:11.2094266Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (2.01s)
```

- 2025-07-19

### Error 2025-07-19T00:29:24+00:00
```
2025-07-19T00:29:24.4914461Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-19T00:29:24.4924369Z   
2025-07-19T00:29:24.4925222Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-19T00:29:24.4926015Z         
2025-07-19T00:29:24.4926467Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-19T00:29:24.4926855Z         
2025-07-19T00:29:24.4927231Z           with mongodbatlas_encryption_at_rest.test,
2025-07-19T00:29:24.4927917Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-19T00:29:24.4928556Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-19T00:29:24.4928897Z         
2025-07-19T00:29:24.4929483Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-19T00:29:24.4930073Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-19T00:29:24.4930935Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-19T00:29:24.4931674Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-19T00:29:24.4932330Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-19T00:29:24.4932951Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-19T00:29:24.4933398Z         BadRequestDetail: 
2025-07-19T00:29:24.4933790Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (1.88s)
```

- 2025-07-20 PASS 5 seconds
- 2025-07-21
  - FAIL a second

### Error 2025-07-21T00:32:47+00:00
```
2025-07-21T00:32:47.0748676Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-21T00:32:47.0758307Z   
2025-07-21T00:32:47.0758756Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-21T00:32:47.0759176Z         
2025-07-21T00:32:47.0759620Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-21T00:32:47.0759995Z         
2025-07-21T00:32:47.0760364Z           with mongodbatlas_encryption_at_rest.test,
2025-07-21T00:32:47.0761042Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-21T00:32:47.0761678Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-21T00:32:47.0762026Z         
2025-07-21T00:32:47.0762613Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-21T00:32:47.0763207Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-21T00:32:47.0763879Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-21T00:32:47.0764643Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-21T00:32:47.0765301Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-21T00:32:47.0765929Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-21T00:32:47.0766524Z         BadRequestDetail: 
2025-07-21T00:32:47.0766948Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (1.54s)
```

  - PASS 4 seconds
- 2025-07-22 PASS 4 seconds
- 2025-07-23
  - PASS 4 seconds
  - PASS 4 seconds
  - FAIL a second

### Error 2025-07-23T14:09:37+00:00
```
2025-07-23T14:09:37.0757675Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-23T14:09:37.0768898Z   
2025-07-23T14:09:37.0769374Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-23T14:09:37.0769802Z         
2025-07-23T14:09:37.0770252Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-23T14:09:37.0770846Z         
2025-07-23T14:09:37.0771213Z           with mongodbatlas_encryption_at_rest.test,
2025-07-23T14:09:37.0771893Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-23T14:09:37.0772534Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-23T14:09:37.0772880Z         
2025-07-23T14:09:37.0773458Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-23T14:09:37.0774046Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-23T14:09:37.0774694Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-23T14:09:37.0775428Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-23T14:09:37.0776073Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-23T14:09:37.0776896Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-23T14:09:37.0777396Z         BadRequestDetail: 
2025-07-23T14:09:37.0777783Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (1.53s)
```

- 2025-07-24

### Error 2025-07-24T00:34:52+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-24T00:34:52.541000+00:00-TestMigEncryptionAtRestPrivateEndpoint_AWS_basic',confidence=1.0,ts_when='5 days ago')

```
2025-07-24T00:34:52.5414107Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-24T00:34:52.5424667Z   
2025-07-24T00:34:52.5425138Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-24T00:34:52.5425568Z         
2025-07-24T00:34:52.5426001Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-24T00:34:52.5426655Z         
2025-07-24T00:34:52.5427268Z           with mongodbatlas_encryption_at_rest.test,
2025-07-24T00:34:52.5427978Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-24T00:34:52.5428610Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-24T00:34:52.5428956Z         
2025-07-24T00:34:52.5429532Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-24T00:34:52.5430111Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-24T00:34:52.5430807Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-24T00:34:52.5431542Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-24T00:34:52.5432201Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-24T00:34:52.5433050Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-24T00:34:52.5433515Z         BadRequestDetail: 
2025-07-24T00:34:52.5433906Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (1.85s)
```

- 2025-07-25

### Error 2025-07-25T00:34:46+00:00
```
2025-07-25T00:34:46.9999752Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-25T00:34:47.0010218Z    test_name=TestMigEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/5000daac-ea34-4be0-a5df-11dd88691586/terraform test_working_directory=/tmp/plugintest3038803432
2025-07-25T00:34:47.0011337Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-25T00:34:47.0011769Z         
2025-07-25T00:34:47.0012216Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-25T00:34:47.0012601Z         
2025-07-25T00:34:47.0012968Z           with mongodbatlas_encryption_at_rest.test,
2025-07-25T00:34:47.0013655Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-25T00:34:47.0014562Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-25T00:34:47.0014917Z         
2025-07-25T00:34:47.0015511Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-25T00:34:47.0016116Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-25T00:34:47.0016772Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-25T00:34:47.0017525Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-25T00:34:47.0018188Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-25T00:34:47.0019084Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-25T00:34:47.0019547Z         BadRequestDetail: 
2025-07-25T00:34:47.0019937Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (2.02s)
```

- 2025-07-26

### Error 2025-07-26T00:35:33+00:00
```
2025-07-26T00:35:33.7971486Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-26T00:35:33.7987952Z   
2025-07-26T00:35:33.7988744Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-26T00:35:33.7989472Z         
2025-07-26T00:35:33.7990236Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-26T00:35:33.7990880Z         
2025-07-26T00:35:33.7991519Z           with mongodbatlas_encryption_at_rest.test,
2025-07-26T00:35:33.7992714Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-26T00:35:33.7993825Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-26T00:35:33.7994402Z         
2025-07-26T00:35:33.7995418Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-26T00:35:33.7996617Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-26T00:35:33.7997783Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-26T00:35:33.7999092Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-26T00:35:33.8000238Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-26T00:35:33.8001571Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-26T00:35:33.8002372Z         BadRequestDetail: 
2025-07-26T00:35:33.8003030Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (1.85s)
```

- 2025-07-27 PASS 5 seconds
- 2025-07-28

### Error 2025-07-28T00:36:11+00:00
```
2025-07-28T00:36:11.1606568Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-28T00:36:11.1623420Z   
2025-07-28T00:36:11.1624225Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-28T00:36:11.1624953Z         
2025-07-28T00:36:11.1625734Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-28T00:36:11.1626395Z         
2025-07-28T00:36:11.1627037Z           with mongodbatlas_encryption_at_rest.test,
2025-07-28T00:36:11.1628258Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-28T00:36:11.1629377Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-28T00:36:11.1629975Z         
2025-07-28T00:36:11.1631020Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-28T00:36:11.1632240Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-28T00:36:11.1633436Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-28T00:36:11.1634776Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-28T00:36:11.1635949Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-28T00:36:11.1637291Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-28T00:36:11.1638094Z         BadRequestDetail: 
2025-07-28T00:36:11.1638759Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (1.62s)
```

- 2025-07-29

### Error 2025-07-29T00:37:09+00:00
```
2025-07-29T00:37:09.8643126Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-29T00:37:09.8659172Z    test_name=TestMigEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/00b9d767-46f2-4d95-bee5-f98bc223bd9c/terraform
2025-07-29T00:37:09.8660858Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-29T00:37:09.8661621Z         
2025-07-29T00:37:09.8662423Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-29T00:37:09.8663109Z         
2025-07-29T00:37:09.8663752Z           with mongodbatlas_encryption_at_rest.test,
2025-07-29T00:37:09.8665015Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-29T00:37:09.8666180Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-29T00:37:09.8668658Z         
2025-07-29T00:37:09.8669746Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-29T00:37:09.8670824Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-29T00:37:09.8672021Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-29T00:37:09.8673372Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-29T00:37:09.8674551Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-29T00:37:09.8675923Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-29T00:37:09.8676943Z         BadRequestDetail: 
2025-07-29T00:37:09.8677831Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (2.11s)
```

- 2025-07-30

### Error 2025-07-30T00:34:48+00:00
```
2025-07-30T00:34:48.5233484Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-30T00:34:48.5247517Z   
2025-07-30T00:34:48.5248087Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-07-30T00:34:48.5248601Z         
2025-07-30T00:34:48.5249134Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-30T00:34:48.5249600Z         
2025-07-30T00:34:48.5250035Z           with mongodbatlas_encryption_at_rest.test,
2025-07-30T00:34:48.5250874Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-30T00:34:48.5251560Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-30T00:34:48.5251903Z         
2025-07-30T00:34:48.5252482Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-30T00:34:48.5253063Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-30T00:34:48.5253706Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-30T00:34:48.5254431Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-30T00:34:48.5255083Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-30T00:34:48.5255892Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-30T00:34:48.5256625Z         BadRequestDetail: 
2025-07-30T00:34:48.5257008Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (1.70s)
```
