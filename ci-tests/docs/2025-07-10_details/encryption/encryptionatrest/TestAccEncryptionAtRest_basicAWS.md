# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAWS Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 103) FAIL(x 10)
Success rate: 91.15%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-04-19 00:25](#error-2025-04-19t0025590000) |  | dev | 1.06s
[2025-04-22 00:27](#error-2025-04-22t0027260000) | CheckFailure for encryption_at_rest.test at Step: 1 Checks: 2,3,4,5,6,9 | dev | 1.03s
[2025-05-11 00:30](#error-2025-05-11t0030020000) |  | qa | 0.04s
[2025-05-25 00:31](#error-2025-05-25t0031320000) | CheckFailure for encryption_at_rest.test at Step: 1 Checks: 1,2,3,4,6,9 | qa | 1.02s
[2025-06-06 00:30](#error-2025-06-06t0030270000) |  | dev | 0.04s
[2025-06-07 00:29](#error-2025-06-07t0029080000) |  | dev | 0.04s
[2025-06-09 00:31](#error-2025-06-09t0031340000) |  | dev | 0.05s
[2025-06-10 00:38](#error-2025-06-10t0038080000) |  | dev | 0.04s
[2025-06-11 00:29](#error-2025-06-11t0029030000) |  | dev | 0.04s
[2025-06-12 00:28](#error-2025-06-12t0028460000) |  | dev | 0.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 3 seconds
- 2025-04-13 PASS 3 seconds
- 2025-04-14 PASS 7 seconds
- 2025-04-15 PASS 7 seconds
- 2025-04-16
  - PASS 4 seconds
  - PASS 7 seconds
- 2025-04-17 PASS 3 seconds
- 2025-04-18 PASS 4 seconds
- 2025-04-19

### Error 2025-04-19T00:25:59+00:00
```
2025-04-19T00:25:59.7755023Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-04-19T00:25:59.7772936Z    test_name=TestAccEncryptionAtRest_basicAWS test_terraform_path=/home/runner/work/_temp/90662eee-ea10-4ea4-8aa3-ca7d80e74fe5/terraform test_working_directory=/tmp/plugintest3676925348 test_step_number=1
2025-04-19T00:25:59.7774109Z     resource_test.go:53: Step 1/4 error: After applying this test step, the refresh plan was not empty.
2025-04-19T00:25:59.7774634Z         stdout
2025-04-19T00:25:59.7774890Z         
2025-04-19T00:25:59.7775645Z         Terraform used the selected providers to generate the following execution
2025-04-19T00:25:59.7776308Z         plan. Resource actions are indicated with the following symbols:
2025-04-19T00:25:59.7776956Z           ~ update in-place
2025-04-19T00:25:59.7777323Z          <= read (data resources)
2025-04-19T00:25:59.7777617Z         
2025-04-19T00:25:59.7778000Z         Terraform will perform the following actions:
2025-04-19T00:25:59.7778340Z         
2025-04-19T00:25:59.7778862Z           # data.mongodbatlas_encryption_at_rest.test will be read during apply
2025-04-19T00:25:59.7779506Z           # (depends on a resource or a module with changes pending)
2025-04-19T00:25:59.7780042Z          <= data "mongodbatlas_encryption_at_rest" "test" {
2025-04-19T00:25:59.7780608Z               + aws_kms_config           = (known after apply)
2025-04-19T00:25:59.7781166Z               + azure_key_vault_config   = (known after apply)
2025-04-19T00:25:59.7781857Z               + enabled_for_search_nodes = (known after apply)
2025-04-19T00:25:59.7782416Z               + google_cloud_kms_config  = (known after apply)
2025-04-19T00:25:59.7782952Z               + id                       = (known after apply)
2025-04-19T00:25:59.7783513Z               + project_id               = "6790e57a9b41416f5c216fee"
2025-04-19T00:25:59.7783886Z             }
2025-04-19T00:25:59.7784136Z         
2025-04-19T00:25:59.7784628Z           # mongodbatlas_encryption_at_rest.test will be updated in-place
2025-04-19T00:25:59.7785221Z           ~ resource "mongodbatlas_encryption_at_rest" "test" {
2025-04-19T00:25:59.7785831Z                 id                       = "6790e57a9b41416f5c216fee"
2025-04-19T00:25:59.7786349Z                 # (2 unchanged attributes hidden)
2025-04-19T00:25:59.7787498Z         
2025-04-19T00:25:59.7787837Z               ~ aws_kms_config {
2025-04-19T00:25:59.7788405Z                   + customer_master_key_id     = (sensitive value)
2025-04-19T00:25:59.7789005Z                   ~ enabled                    = false -> true
2025-04-19T00:25:59.7789647Z                   + role_id                    = "679243c15ec3be271d1d7952"
2025-04-19T00:25:59.7790324Z                   ~ valid                      = false -> (known after apply)
2025-04-19T00:25:59.7790898Z                     # (2 unchanged attributes hidden)
2025-04-19T00:25:59.7791255Z                 }
2025-04-19T00:25:59.7791523Z             }
2025-04-19T00:25:59.7791770Z         
2025-04-19T00:25:59.7792128Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-04-19T00:25:59.7792520Z --- FAIL: TestAccEncryptionAtRest_basicAWS (1.62s)
```

- 2025-04-20 PASS 7 seconds
- 2025-04-21 PASS 4 seconds
- 2025-04-22

### Error 2025-04-22T00:27:26+00:00
```
2025-04-22T00:27:26.2588544Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-04-22T00:27:26.2597783Z   
2025-04-22T00:27:26.2598655Z     resource_test.go:53: Step 1/4 error: Check failed: Check 9/9 error: Check 2/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.valid' expected "true", got "false"
2025-04-22T00:27:26.2599855Z         Check 3/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.enabled' expected "true", got "false"
2025-04-22T00:27:26.2600881Z         Check 4/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.region' expected "US_EAST_1", got ""
2025-04-22T00:27:26.2602053Z         Check 5/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.role_id' not found
2025-04-22T00:27:26.2603435Z         Check 6/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.customer_master_key_id' expected "***", got ""
2025-04-22T00:27:26.2604082Z --- FAIL: TestAccEncryptionAtRest_basicAWS (1.35s)
```

- 2025-04-23 PASS 4 seconds
- 2025-04-24 PASS 7 seconds
- 2025-04-25 PASS 3 seconds
- 2025-04-26 PASS 7 seconds
- 2025-04-27 PASS 4 seconds
- 2025-04-28 PASS 7 seconds
- 2025-04-29 PASS 3 seconds
- 2025-04-30
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-05-01
  - PASS 7 seconds
  - PASS 3 seconds
  - PASS 7 seconds
  - PASS 3 seconds
  - PASS 6 seconds
  - PASS 3 seconds
  - PASS 6 seconds
- 2025-05-02 PASS 5 seconds
- 2025-05-03 PASS 6 seconds
- 2025-05-04 PASS 4 seconds
- 2025-05-05 PASS 7 seconds
- 2025-05-06 PASS 3 seconds
- 2025-05-07 PASS 3 seconds
- 2025-05-08 PASS 7 seconds
- 2025-05-09 PASS 3 seconds
- 2025-05-10 PASS 4 seconds
- 2025-05-11

### Error 2025-05-11T00:30:02+00:00
```
2025-05-11T00:30:02.0093127Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-05-11T00:30:02.0103594Z   
2025-05-11T00:30:02.0104005Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-05-11T00:30:02.0104393Z         
2025-05-11T00:30:02.0104836Z         Error: error creating Encryption At Rest: 67978809c57f200e59f19f6a
2025-05-11T00:30:02.0105209Z         
2025-05-11T00:30:02.0105574Z           with mongodbatlas_encryption_at_rest.test,
2025-05-11T00:30:02.0106271Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-05-11T00:30:02.0106924Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-05-11T00:30:02.0107264Z         
2025-05-11T00:30:02.0107948Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:02.0108381Z         type
2025-05-11T00:30:02.0108671Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.44s)
```

- 2025-05-12 PASS 6 seconds
- 2025-05-13
  - PASS 7 seconds
  - PASS 3 seconds
- 2025-05-14 PASS 4 seconds
- 2025-05-15 PASS 4 seconds
- 2025-05-16 PASS 5 seconds
- 2025-05-17 PASS 3 seconds
- 2025-05-18 PASS 3 seconds
- 2025-05-19 PASS 4 seconds
- 2025-05-20 PASS 5 seconds
- 2025-05-21 PASS 7 seconds
- 2025-05-22 PASS 5 seconds
- 2025-05-23 PASS 7 seconds
- 2025-05-24 PASS 4 seconds
- 2025-05-25

### Error 2025-05-25T00:31:32+00:00
```
2025-05-25T00:31:32.2652503Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-05-25T00:31:32.2666214Z   
2025-05-25T00:31:32.2667877Z     resource_test.go:53: Step 1/4 error: Check failed: Check 9/9 error: Check 1/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.enabled' expected "true", got "false"
2025-05-25T00:31:32.2670252Z         Check 2/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.region' expected "US_EAST_1", got ""
2025-05-25T00:31:32.2672369Z         Check 3/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.role_id' not found
2025-05-25T00:31:32.2674282Z         Check 4/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.customer_master_key_id' expected "***", got ""
2025-05-25T00:31:32.2675405Z         Check 6/6 error: data.mongodbatlas_encryption_at_rest.test: Attribute 'aws_kms_config.valid' expected "true", got "false"
2025-05-25T00:31:32.2676024Z --- FAIL: TestAccEncryptionAtRest_basicAWS (1.18s)
```

- 2025-05-26 PASS 4 seconds
- 2025-05-27 PASS 5 seconds
- 2025-05-28
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-05-29 PASS 5 seconds
- 2025-05-30 PASS 4 seconds
- 2025-05-31 PASS 5 seconds
- 2025-06-01
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 7 seconds
- 2025-06-02
  - PASS 7 seconds
  - PASS 3 seconds
  - PASS 4 seconds
- 2025-06-03 PASS 4 seconds
- 2025-06-04 PASS 7 seconds
- 2025-06-05 PASS 7 seconds
- 2025-06-06

### Error 2025-06-06T00:30:27+00:00
```
2025-06-06T00:30:27.5384300Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-06T00:30:27.5410514Z   
2025-06-06T00:30:27.5411403Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-06-06T00:30:27.5412062Z         
2025-06-06T00:30:27.5412834Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-06T00:30:27.5413470Z         
2025-06-06T00:30:27.5414094Z           with mongodbatlas_encryption_at_rest.test,
2025-06-06T00:30:27.5415485Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-06T00:30:27.5416625Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-06T00:30:27.5417213Z         
2025-06-06T00:30:27.5418233Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-06T00:30:27.5419260Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-06T00:30:27.5420431Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-06T00:30:27.5421901Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-06T00:30:27.5423060Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-06T00:30:27.5424165Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-06T00:30:27.5424944Z         BadRequestDetail: 
2025-06-06T00:30:27.5425496Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.40s)
```

- 2025-06-07

### Error 2025-06-07T00:29:08+00:00
```
2025-06-07T00:29:08.7330667Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-07T00:29:08.7347856Z    test_step_number=1 test_name=TestAccEncryptionAtRest_basicAWS test_terraform_path=/home/runner/work/_temp/06a0f4ae-f3dc-40b5-9553-6ac9b0b7480d/terraform test_working_directory=/tmp/plugintest413564793
2025-06-07T00:29:08.7348934Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-06-07T00:29:08.7349599Z         
2025-06-07T00:29:08.7370377Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-07T00:29:08.7370979Z         
2025-06-07T00:29:08.7371705Z           with mongodbatlas_encryption_at_rest.test,
2025-06-07T00:29:08.7373204Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-07T00:29:08.7373935Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-07T00:29:08.7374345Z         
2025-06-07T00:29:08.7374997Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-07T00:29:08.7375650Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-07T00:29:08.7376374Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-07T00:29:08.7377167Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-07T00:29:08.7377885Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-07T00:29:08.7378575Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-07T00:29:08.7379072Z         BadRequestDetail: 
2025-06-07T00:29:08.7379636Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.42s)
```

- 2025-06-08 PASS 5 seconds
- 2025-06-09

### Error 2025-06-09T00:31:34+00:00
```
2025-06-09T00:31:34.5025730Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-09T00:31:34.5043056Z    test_working_directory=/tmp/plugintest4005387235 test_step_number=1 test_name=TestAccEncryptionAtRest_basicAWS
2025-06-09T00:31:34.5043933Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-06-09T00:31:34.5044340Z         
2025-06-09T00:31:34.5044785Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-09T00:31:34.5045169Z         
2025-06-09T00:31:34.5045539Z           with mongodbatlas_encryption_at_rest.test,
2025-06-09T00:31:34.5046493Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-09T00:31:34.5047142Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-09T00:31:34.5047492Z         
2025-06-09T00:31:34.5048086Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-09T00:31:34.5048688Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-09T00:31:34.5049348Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-09T00:31:34.5050249Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-09T00:31:34.5050921Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-09T00:31:34.5051556Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-09T00:31:34.5052014Z         BadRequestDetail: 
2025-06-09T00:31:34.5052493Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.49s)
```

- 2025-06-10

### Error 2025-06-10T00:38:08+00:00
```
2025-06-10T00:38:08.6534667Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-10T00:38:08.6548965Z    test_name=TestAccEncryptionAtRest_basicAWS test_terraform_path=/home/runner/work/_temp/57c73f63-ecc2-4b98-b6f0-743232347351/terraform test_working_directory=/tmp/plugintest2327634986
2025-06-10T00:38:08.6549924Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-06-10T00:38:08.6550309Z         
2025-06-10T00:38:08.6550736Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-10T00:38:08.6551105Z         
2025-06-10T00:38:08.6551461Z           with mongodbatlas_encryption_at_rest.test,
2025-06-10T00:38:08.6552319Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-10T00:38:08.6552954Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-10T00:38:08.6553283Z         
2025-06-10T00:38:08.6553854Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-10T00:38:08.6554437Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-10T00:38:08.6555083Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-10T00:38:08.6555816Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-10T00:38:08.6556471Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-10T00:38:08.6557086Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-10T00:38:08.6557526Z         BadRequestDetail: 
2025-06-10T00:38:08.6558072Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.43s)
```

- 2025-06-11
  - FAIL a moment

### Error 2025-06-11T00:29:03+00:00
```
2025-06-11T00:29:03.2165689Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-11T00:29:03.2180254Z    test_name=TestAccEncryptionAtRest_basicAWS test_terraform_path=/home/runner/work/_temp/1384a036-623a-46ad-8451-77d6c5d0803e/terraform
2025-06-11T00:29:03.2181040Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-06-11T00:29:03.2181420Z         
2025-06-11T00:29:03.2181855Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-11T00:29:03.2182218Z         
2025-06-11T00:29:03.2182583Z           with mongodbatlas_encryption_at_rest.test,
2025-06-11T00:29:03.2183276Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-11T00:29:03.2183918Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-11T00:29:03.2184252Z         
2025-06-11T00:29:03.2184832Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-11T00:29:03.2185422Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-11T00:29:03.2186080Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-11T00:29:03.2186805Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-11T00:29:03.2187454Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-11T00:29:03.2188064Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-11T00:29:03.2188492Z         BadRequestDetail: 
2025-06-11T00:29:03.2189243Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.38s)
```

  - PASS 5 seconds
- 2025-06-12

### Error 2025-06-12T00:28:46+00:00
```
2025-06-12T00:28:46.9514145Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-12T00:28:46.9529231Z   
2025-06-12T00:28:46.9529638Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-06-12T00:28:46.9530201Z         
2025-06-12T00:28:46.9530718Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-12T00:28:46.9531106Z         
2025-06-12T00:28:46.9531466Z           with mongodbatlas_encryption_at_rest.test,
2025-06-12T00:28:46.9532160Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-12T00:28:46.9532809Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-12T00:28:46.9533147Z         
2025-06-12T00:28:46.9533736Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-12T00:28:46.9534325Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-12T00:28:46.9534982Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-12T00:28:46.9535724Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-12T00:28:46.9536386Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-12T00:28:46.9537017Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-12T00:28:46.9537598Z         BadRequestDetail: 
2025-06-12T00:28:46.9538012Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.45s)
```

- 2025-06-13 PASS 7 seconds
- 2025-06-14 PASS 4 seconds
- 2025-06-15 PASS 5 seconds
- 2025-06-16 PASS 4 seconds
- 2025-06-17 PASS 7 seconds
- 2025-06-18 PASS 3 seconds
- 2025-06-19 PASS 7 seconds
- 2025-06-20 PASS 4 seconds
- 2025-06-21 PASS 4 seconds
- 2025-06-22 PASS 3 seconds
- 2025-06-23 PASS 7 seconds
- 2025-06-24 PASS 4 seconds
- 2025-06-25 PASS 5 seconds
- 2025-06-26 PASS 3 seconds
- 2025-06-27 PASS 4 seconds
- 2025-06-28 PASS 7 seconds
- 2025-06-29 PASS 6 seconds
- 2025-06-30 PASS 7 seconds
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
- 2025-07-10 PASS 3 seconds