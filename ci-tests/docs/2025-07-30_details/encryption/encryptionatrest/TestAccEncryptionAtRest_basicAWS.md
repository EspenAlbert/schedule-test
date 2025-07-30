# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAWS Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 24) FAIL(x 15)
Success rate: 61.54%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 00:31](#error-2025-07-14t0031260000) |  | dev |  | 1.07s
[2025-07-15 00:30](#error-2025-07-15t0030210000) |  | dev |  | 0.04s
[2025-07-16 00:30](#error-2025-07-16t0030020000) |  | dev |  | 0.05s
[2025-07-17 00:30](#error-2025-07-17t0030350000) |  | dev |  | 0.04s
[2025-07-18 00:30](#error-2025-07-18t0030110000) |  | dev |  | 0.04s
[2025-07-19 00:29](#error-2025-07-19t0029240000) |  | dev |  | 0.06s
[2025-07-21 00:32](#error-2025-07-21t0032470000) |  | dev |  | 0.04s
[2025-07-22 07:38](#error-2025-07-22t0738460000) | CheckFailure for encryption_at_rest.test at Step: 1 Checks: 1,2,3,5,6,9 | dev |  | 1.01s
[2025-07-23 14:03](#error-2025-07-23t1403040000) |  | dev |  | 0.04s
[2025-07-24 00:31](#error-2025-07-24t0031040000) |  | dev |  | 0.05s
[2025-07-25 00:31](#error-2025-07-25t0031070000) |  | dev | flaky_500 | 0.04s
[2025-07-26 00:30](#error-2025-07-26t0030020000) |  | dev |  | 0.05s
[2025-07-28 00:33](#error-2025-07-28t0033010000) |  | dev | flaky_500 | 0.04s
[2025-07-29 00:33](#error-2025-07-29t0033290000) |  | dev |  | 0.06s
[2025-07-30 00:31](#error-2025-07-30t0031100000) |  | dev | dangling_resource | 0.04s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 3 seconds
- 2025-07-02 PASS 4 seconds
- 2025-07-03 PASS 3 seconds
- 2025-07-04 PASS 3 seconds
- 2025-07-05 PASS 4 seconds
- 2025-07-06 PASS 3 seconds
- 2025-07-07 PASS 4 seconds
- 2025-07-08 PASS 4 seconds
- 2025-07-09 PASS 5 seconds
- 2025-07-10
  - PASS 3 seconds
  - PASS 5 seconds
- 2025-07-11 PASS 5 seconds
- 2025-07-12 PASS 3 seconds
- 2025-07-13 PASS 4 seconds
- 2025-07-14

### Error 2025-07-14T00:31:26+00:00
```
2025-07-14T00:31:26.1460400Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-14T00:31:26.1476242Z   
2025-07-14T00:31:26.1477060Z     resource_test.go:53: Step 1/4 error: After applying this test step, the refresh plan was not empty.
2025-07-14T00:31:26.1477554Z         stdout
2025-07-14T00:31:26.1477783Z         
2025-07-14T00:31:26.1478472Z         Terraform used the selected providers to generate the following execution
2025-07-14T00:31:26.1479093Z         plan. Resource actions are indicated with the following symbols:
2025-07-14T00:31:26.1479519Z           ~ update in-place
2025-07-14T00:31:26.1479842Z          <= read (data resources)
2025-07-14T00:31:26.1480114Z         
2025-07-14T00:31:26.1480457Z         Terraform will perform the following actions:
2025-07-14T00:31:26.1480771Z         
2025-07-14T00:31:26.1481249Z           # data.mongodbatlas_encryption_at_rest.test will be read during apply
2025-07-14T00:31:26.1481842Z           # (depends on a resource or a module with changes pending)
2025-07-14T00:31:26.1482340Z          <= data "mongodbatlas_encryption_at_rest" "test" {
2025-07-14T00:31:26.1482872Z               + aws_kms_config           = (known after apply)
2025-07-14T00:31:26.1483533Z               + azure_key_vault_config   = (known after apply)
2025-07-14T00:31:26.1484050Z               + enabled_for_search_nodes = (known after apply)
2025-07-14T00:31:26.1484559Z               + google_cloud_kms_config  = (known after apply)
2025-07-14T00:31:26.1485048Z               + id                       = (known after apply)
2025-07-14T00:31:26.1485571Z               + project_id               = "6790e57a9b41416f5c216fee"
2025-07-14T00:31:26.1485918Z             }
2025-07-14T00:31:26.1486143Z         
2025-07-14T00:31:26.1486824Z           # mongodbatlas_encryption_at_rest.test will be updated in-place
2025-07-14T00:31:26.1487815Z           ~ resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-14T00:31:26.1488496Z                 id                       = "6790e57a9b41416f5c216fee"
2025-07-14T00:31:26.1488966Z                 # (2 unchanged attributes hidden)
2025-07-14T00:31:26.1489269Z         
2025-07-14T00:31:26.1489566Z               ~ aws_kms_config {
2025-07-14T00:31:26.1490085Z                   + customer_master_key_id     = (sensitive value)
2025-07-14T00:31:26.1490624Z                   ~ enabled                    = false -> true
2025-07-14T00:31:26.1491214Z                   + role_id                    = "679243c15ec3be271d1d7952"
2025-07-14T00:31:26.1491830Z                   ~ valid                      = false -> (known after apply)
2025-07-14T00:31:26.1492362Z                     # (2 unchanged attributes hidden)
2025-07-14T00:31:26.1492685Z                 }
2025-07-14T00:31:26.1492925Z             }
2025-07-14T00:31:26.1493147Z         
2025-07-14T00:31:26.1493469Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-07-14T00:31:26.1493828Z --- FAIL: TestAccEncryptionAtRest_basicAWS (1.70s)
```

- 2025-07-15

### Error 2025-07-15T00:30:21+00:00
```
2025-07-15T00:30:21.0636225Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-15T00:30:21.0651116Z    test_name=TestAccEncryptionAtRest_basicAWS
2025-07-15T00:30:21.0651623Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-15T00:30:21.0652001Z         
2025-07-15T00:30:21.0652462Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-15T00:30:21.0652831Z         
2025-07-15T00:30:21.0653201Z           with mongodbatlas_encryption_at_rest.test,
2025-07-15T00:30:21.0653875Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-15T00:30:21.0654496Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-15T00:30:21.0654834Z         
2025-07-15T00:30:21.0655400Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-15T00:30:21.0655983Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-15T00:30:21.0656617Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-15T00:30:21.0657341Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-15T00:30:21.0657977Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-15T00:30:21.0658591Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-15T00:30:21.0659219Z         BadRequestDetail: 
2025-07-15T00:30:21.0659675Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.41s)
```

- 2025-07-16

### Error 2025-07-16T00:30:02+00:00
```
2025-07-16T00:30:02.6243420Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-16T00:30:02.6260535Z   
2025-07-16T00:30:02.6260931Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-16T00:30:02.6261313Z         
2025-07-16T00:30:02.6261741Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-16T00:30:02.6262240Z         
2025-07-16T00:30:02.6262597Z           with mongodbatlas_encryption_at_rest.test,
2025-07-16T00:30:02.6263270Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-16T00:30:02.6263897Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-16T00:30:02.6264243Z         
2025-07-16T00:30:02.6264829Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-16T00:30:02.6265427Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-16T00:30:02.6266070Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-16T00:30:02.6266804Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-16T00:30:02.6267462Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-16T00:30:02.6268091Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-16T00:30:02.6268534Z         BadRequestDetail: 
2025-07-16T00:30:02.6269060Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.46s)
```

- 2025-07-17

### Error 2025-07-17T00:30:35+00:00
```
2025-07-17T00:30:35.6032594Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-17T00:30:35.6050429Z   
2025-07-17T00:30:35.6050856Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-17T00:30:35.6051330Z         
2025-07-17T00:30:35.6051771Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-17T00:30:35.6052149Z         
2025-07-17T00:30:35.6052620Z           with mongodbatlas_encryption_at_rest.test,
2025-07-17T00:30:35.6053315Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-17T00:30:35.6053953Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-17T00:30:35.6054297Z         
2025-07-17T00:30:35.6054984Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-17T00:30:35.6055579Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-17T00:30:35.6056231Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-17T00:30:35.6057161Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-17T00:30:35.6057833Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-17T00:30:35.6058579Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-17T00:30:35.6059036Z         BadRequestDetail: 
2025-07-17T00:30:35.6059518Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.43s)
```

- 2025-07-18

### Error 2025-07-18T00:30:11+00:00
```
2025-07-18T00:30:11.1990372Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-18T00:30:11.2015261Z   
2025-07-18T00:30:11.2015934Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-18T00:30:11.2016610Z         
2025-07-18T00:30:11.2017366Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-18T00:30:11.2018012Z         
2025-07-18T00:30:11.2018564Z           with mongodbatlas_encryption_at_rest.test,
2025-07-18T00:30:11.2019612Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-18T00:30:11.2020731Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-18T00:30:11.2021318Z         
2025-07-18T00:30:11.2022332Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-18T00:30:11.2023330Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-18T00:30:11.2024079Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-18T00:30:11.2025390Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-18T00:30:11.2026557Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-18T00:30:11.2027669Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-18T00:30:11.2028480Z         BadRequestDetail: 
2025-07-18T00:30:11.2029054Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.44s)
```

- 2025-07-19

### Error 2025-07-19T00:29:24+00:00
```
2025-07-19T00:29:24.4863222Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-19T00:29:24.4879858Z    test_terraform_path=/home/runner/work/_temp/b96d6808-b2a4-428f-9c7f-69b5b7a2cb32/terraform test_working_directory=/tmp/plugintest1739237774 test_name=TestAccEncryptionAtRest_basicAWS test_step_number=1
2025-07-19T00:29:24.4881107Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-19T00:29:24.4881513Z         
2025-07-19T00:29:24.4881978Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-19T00:29:24.4882350Z         
2025-07-19T00:29:24.4882715Z           with mongodbatlas_encryption_at_rest.test,
2025-07-19T00:29:24.4883406Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-19T00:29:24.4884051Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-19T00:29:24.4884398Z         
2025-07-19T00:29:24.4884981Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-19T00:29:24.4885575Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-19T00:29:24.4886228Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-19T00:29:24.4886964Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-19T00:29:24.4887627Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-19T00:29:24.4888254Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-19T00:29:24.4888702Z         BadRequestDetail: 
2025-07-19T00:29:24.4889157Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.55s)
```

- 2025-07-20 PASS 7 seconds
- 2025-07-21
  - FAIL a moment

### Error 2025-07-21T00:32:47+00:00
```
2025-07-21T00:32:47.0681082Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-21T00:32:47.0696220Z   
2025-07-21T00:32:47.0697233Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-21T00:32:47.0697746Z         
2025-07-21T00:32:47.0698197Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-21T00:32:47.0698575Z         
2025-07-21T00:32:47.0698936Z           with mongodbatlas_encryption_at_rest.test,
2025-07-21T00:32:47.0699702Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-21T00:32:47.0700386Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-21T00:32:47.0700729Z         
2025-07-21T00:32:47.0701311Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-21T00:32:47.0701909Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-21T00:32:47.0702564Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-21T00:32:47.0703300Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-21T00:32:47.0704089Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-21T00:32:47.0704719Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-21T00:32:47.0705166Z         BadRequestDetail: 
2025-07-21T00:32:47.0705491Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.40s)
```

  - PASS 4 seconds
- 2025-07-22

### Error 2025-07-22T07:38:46+00:00
```
2025-07-22T07:38:46.6266640Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-22T07:38:46.6273475Z    test_name=TestAccEncryptionAtRest_basicAWS test_terraform_path=/home/runner/work/_temp/50d8f411-c175-44f2-8da4-9126d91d2842/terraform test_working_directory=/tmp/plugintest3962029643 test_step_number=1
2025-07-22T07:38:46.6274935Z     resource_test.go:53: Step 1/4 error: Check failed: Check 9/9 error: Check 1/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.region' expected "US_EAST_1", got ""
2025-07-22T07:38:46.6276051Z         Check 2/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.role_id' not found
2025-07-22T07:38:46.6277420Z         Check 3/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.customer_master_key_id' expected "***", got ""
2025-07-22T07:38:46.6278471Z         Check 5/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.valid' expected "true", got "false"
2025-07-22T07:38:46.6279482Z         Check 6/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.enabled' expected "true", got "false"
2025-07-22T07:38:46.6280081Z --- FAIL: TestAccEncryptionAtRest_basicAWS (1.15s)
```

- 2025-07-23
  - PASS 4 seconds
  - PASS 3 seconds
  - FAIL a moment

### Error 2025-07-23T14:03:04+00:00
```
2025-07-23T14:03:04.5463122Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-23T14:03:04.5477631Z    test_terraform_path=/home/runner/work/_temp/2dc0722c-c12b-499f-9b66-35ee1bd558ef/terraform test_working_directory=/tmp/plugintest3864029579
2025-07-23T14:03:04.5478434Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-23T14:03:04.5478818Z         
2025-07-23T14:03:04.5479255Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-23T14:03:04.5479628Z         
2025-07-23T14:03:04.5479986Z           with mongodbatlas_encryption_at_rest.test,
2025-07-23T14:03:04.5481203Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-23T14:03:04.5481830Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-23T14:03:04.5482162Z         
2025-07-23T14:03:04.5482736Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-23T14:03:04.5483329Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-23T14:03:04.5483979Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-23T14:03:04.5484697Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-23T14:03:04.5485347Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-23T14:03:04.5486000Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-23T14:03:04.5486437Z         BadRequestDetail: 
2025-07-23T14:03:04.5486888Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.39s)
```

- 2025-07-24

### Error 2025-07-24T00:31:04+00:00
```
2025-07-24T00:31:04.9881230Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-24T00:31:04.9896122Z    test_name=TestAccEncryptionAtRest_basicAWS
2025-07-24T00:31:04.9896811Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-24T00:31:04.9897199Z         
2025-07-24T00:31:04.9897638Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-24T00:31:04.9898015Z         
2025-07-24T00:31:04.9898375Z           with mongodbatlas_encryption_at_rest.test,
2025-07-24T00:31:04.9899050Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-24T00:31:04.9899683Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-24T00:31:04.9900024Z         
2025-07-24T00:31:04.9900594Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-24T00:31:04.9901177Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-24T00:31:04.9901819Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-24T00:31:04.9902544Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-24T00:31:04.9903185Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-24T00:31:04.9903797Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-24T00:31:04.9904240Z         BadRequestDetail: 
2025-07-24T00:31:04.9904687Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.53s)
```

- 2025-07-25

### Error 2025-07-25T00:31:07+00:00
```
2025-07-25T00:31:07.7066271Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-25T00:31:07.7081602Z    test_terraform_path=/home/runner/work/_temp/5000daac-ea34-4be0-a5df-11dd88691586/terraform test_working_directory=/tmp/plugintest2672545702 test_name=TestAccEncryptionAtRest_basicAWS
2025-07-25T00:31:07.7082578Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-25T00:31:07.7082975Z         
2025-07-25T00:31:07.7083417Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-25T00:31:07.7083789Z         
2025-07-25T00:31:07.7084399Z           with mongodbatlas_encryption_at_rest.test,
2025-07-25T00:31:07.7085098Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-25T00:31:07.7085740Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-25T00:31:07.7086080Z         
2025-07-25T00:31:07.7086661Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-25T00:31:07.7087260Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-25T00:31:07.7087909Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-25T00:31:07.7088638Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-25T00:31:07.7089299Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-25T00:31:07.7089921Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-25T00:31:07.7090362Z         BadRequestDetail: 
2025-07-25T00:31:07.7090864Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.45s)
```

- 2025-07-26

### Error 2025-07-26T00:30:02+00:00
```
2025-07-26T00:30:02.8959827Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-26T00:30:02.8974191Z    test_name=TestAccEncryptionAtRest_basicAWS test_terraform_path=/home/runner/work/_temp/0c161764-9dcc-48ca-9bb7-d36fd2747812/terraform test_working_directory=/tmp/plugintest1391350917 test_step_number=1
2025-07-26T00:30:02.8975201Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-26T00:30:02.8975580Z         
2025-07-26T00:30:02.8976187Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-26T00:30:02.8976571Z         
2025-07-26T00:30:02.8976937Z           with mongodbatlas_encryption_at_rest.test,
2025-07-26T00:30:02.8977627Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-26T00:30:02.8978269Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-26T00:30:02.8978605Z         
2025-07-26T00:30:02.8979190Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-26T00:30:02.8979785Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-26T00:30:02.8980438Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-26T00:30:02.8981203Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-26T00:30:02.8981868Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-26T00:30:02.8982494Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-26T00:30:02.8982940Z         BadRequestDetail: 
2025-07-26T00:30:02.8983389Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.54s)
```

- 2025-07-27 PASS 7 seconds
- 2025-07-28

### Error 2025-07-28T00:33:01+00:00
```
2025-07-28T00:33:01.2593211Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-28T00:33:01.2607624Z    test_terraform_path=/home/runner/work/_temp/2d182fc9-09c2-4b9b-97a4-5894290b063c/terraform test_name=TestAccEncryptionAtRest_basicAWS
2025-07-28T00:33:01.2608412Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-28T00:33:01.2608790Z         
2025-07-28T00:33:01.2609225Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-28T00:33:01.2609594Z         
2025-07-28T00:33:01.2609943Z           with mongodbatlas_encryption_at_rest.test,
2025-07-28T00:33:01.2610621Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-28T00:33:01.2611248Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-28T00:33:01.2611584Z         
2025-07-28T00:33:01.2612398Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-28T00:33:01.2612991Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-28T00:33:01.2613629Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-28T00:33:01.2614355Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-28T00:33:01.2615004Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-28T00:33:01.2615618Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-28T00:33:01.2616064Z         BadRequestDetail: 
2025-07-28T00:33:01.2616513Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.38s)
```

- 2025-07-29

### Error 2025-07-29T00:33:29+00:00
```
2025-07-29T00:33:29.2200878Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-29T00:33:29.2225618Z   
2025-07-29T00:33:29.2226030Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-29T00:33:29.2226649Z         
2025-07-29T00:33:29.2227094Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-29T00:33:29.2227473Z         
2025-07-29T00:33:29.2227827Z           with mongodbatlas_encryption_at_rest.test,
2025-07-29T00:33:29.2228514Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-29T00:33:29.2229152Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-29T00:33:29.2229494Z         
2025-07-29T00:33:29.2230076Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-29T00:33:29.2230666Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-29T00:33:29.2231308Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-29T00:33:29.2232043Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-29T00:33:29.2232704Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-29T00:33:29.2233328Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-29T00:33:29.2233772Z         BadRequestDetail: 
2025-07-29T00:33:29.2234316Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.56s)
```

- 2025-07-30

### Error 2025-07-30T00:31:10+00:00
GoTestErrorClassification(error_class='dangling_resource',author='human',run_id='2025-07-30T00:31:10.585000+00:00-TestAccEncryptionAtRest_basicAWS',confidence=1.0,ts_when='2 minutes ago')

```
2025-07-30T00:31:10.5858149Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-07-30T00:31:10.5873438Z    test_working_directory=/tmp/plugintest285435083
2025-07-30T00:31:10.5873962Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-07-30T00:31:10.5874359Z         
2025-07-30T00:31:10.5874799Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-30T00:31:10.5875175Z         
2025-07-30T00:31:10.5875540Z           with mongodbatlas_encryption_at_rest.test,
2025-07-30T00:31:10.5876441Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-30T00:31:10.5877106Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-30T00:31:10.5877460Z         
2025-07-30T00:31:10.5878059Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-30T00:31:10.5878700Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-30T00:31:10.5879368Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-30T00:31:10.5880129Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-30T00:31:10.5880812Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-30T00:31:10.5881455Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-30T00:31:10.5881908Z         BadRequestDetail: 
2025-07-30T00:31:10.5882232Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.42s)
```
