# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_AWS_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 105) FAIL(x 8)
Success rate: 92.92%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030050000) |  | qa |  | 0.04s
[2025-06-05 01:09](#error-2025-06-05t0109200000) |  | dev | timeout | 1202.07s
[2025-06-06 00:30](#error-2025-06-06t0030270000) |  | dev |  | 0.04s
[2025-06-07 00:29](#error-2025-06-07t0029080000) |  | dev |  | 0.05s
[2025-06-09 00:31](#error-2025-06-09t0031340000) |  | dev |  | 0.05s
[2025-06-10 00:38](#error-2025-06-10t0038080000) |  | dev |  | 0.04s
[2025-06-11 00:29](#error-2025-06-11t0029030000) |  | dev |  | 0.04s
[2025-06-12 00:28](#error-2025-06-12t0028460000) |  | dev |  | 0.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 5 minutes
- 2025-04-13 PASS 4 minutes
- 2025-04-14 PASS 3 minutes
- 2025-04-15 PASS 4 minutes
- 2025-04-16
  - PASS 5 minutes
  - PASS 4 minutes
- 2025-04-17 PASS 5 minutes
- 2025-04-18 PASS 5 minutes
- 2025-04-19 PASS 4 minutes
- 2025-04-20 PASS 4 minutes
- 2025-04-21 PASS 4 minutes
- 2025-04-22 PASS 4 minutes
- 2025-04-23 PASS 5 minutes
- 2025-04-24 PASS 4 minutes
- 2025-04-25 PASS 4 minutes
- 2025-04-26 PASS 4 minutes
- 2025-04-27 PASS 4 minutes
- 2025-04-28 PASS 3 minutes
- 2025-04-29 PASS 4 minutes
- 2025-04-30
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-01
  - PASS 5 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 5 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-05-02 PASS 5 minutes
- 2025-05-03 PASS 4 minutes
- 2025-05-04 PASS 4 minutes
- 2025-05-05 PASS 4 minutes
- 2025-05-06 PASS 4 minutes
- 2025-05-07 PASS 3 minutes
- 2025-05-08 PASS 4 minutes
- 2025-05-09 PASS 4 minutes
- 2025-05-10 PASS 5 minutes
- 2025-05-11

### Error 2025-05-11T00:30:05+00:00
```
2025-05-11T00:30:05.5056829Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-05-11T00:30:05.5072670Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/3267a76f-3abc-4c5b-9dba-02f9a63f1b49/terraform test_working_directory=/tmp/plugintest3947301862 test_step_number=1
2025-05-11T00:30:05.5074601Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-05-11T00:30:05.5075271Z         
2025-05-11T00:30:05.5076276Z         Error: error creating Encryption At Rest: 67978809c57f200e59f19f6a
2025-05-11T00:30:05.5076926Z         
2025-05-11T00:30:05.5077562Z           with mongodbatlas_encryption_at_rest.test,
2025-05-11T00:30:05.5078939Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-05-11T00:30:05.5080066Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-05-11T00:30:05.5080650Z         
2025-05-11T00:30:05.5081512Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:05.5082243Z         type
2025-05-11T00:30:05.5082836Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.37s)
```

- 2025-05-12 PASS 4 minutes
- 2025-05-13
  - PASS 5 minutes
  - PASS 4 minutes
- 2025-05-14 PASS 5 minutes
- 2025-05-15 PASS 4 minutes
- 2025-05-16 PASS 4 minutes
- 2025-05-17 PASS 7 minutes
- 2025-05-18 PASS 4 minutes
- 2025-05-19 PASS 4 minutes
- 2025-05-20 PASS 5 minutes
- 2025-05-21 PASS 5 minutes
- 2025-05-22 PASS 5 minutes
- 2025-05-23 PASS 5 minutes
- 2025-05-24 PASS 4 minutes
- 2025-05-25 PASS 4 minutes
- 2025-05-26 PASS 4 minutes
- 2025-05-27 PASS 5 minutes
- 2025-05-28
  - PASS 4 minutes
  - PASS 5 minutes
- 2025-05-29 PASS 4 minutes
- 2025-05-30 PASS 4 minutes
- 2025-05-31 PASS 4 minutes
- 2025-06-01
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 4 minutes
  - PASS 5 minutes
- 2025-06-02
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-06-03 PASS 5 minutes
- 2025-06-04 PASS 4 minutes
- 2025-06-05

### Error 2025-06-05T01:09:20+00:00
```
2025-06-05T01:09:20.7868624Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-06-05T01:09:20.7878745Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/eeeedc53-2298-41de-8964-f6f4c4782704/terraform
2025-06-05T01:09:20.7879610Z     resource_test.go:129: Step 2/3 error: Error running apply: exit status 1
2025-06-05T01:09:20.7880020Z         
2025-06-05T01:09:20.7880447Z         Error: error when waiting for status transition in creation
2025-06-05T01:09:20.7880817Z         
2025-06-05T01:09:20.7881275Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2025-06-05T01:09:20.7882105Z           on terraform_plugin_test.tf line 27, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2025-06-05T01:09:20.7882899Z           27: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2025-06-05T01:09:20.7883313Z         
2025-06-05T01:09:20.7883793Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2025-06-05T01:09:20.7884353Z         FAILED' (last state: 'INITIATING', timeout: 20m0s)
2025-06-05T01:09:20.7910110Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/eeeedc53-2298-41de-8964-f6f4c4782704/terraform test_working_directory=/tmp/plugintest3043671276 test_step_number=2
2025-06-05T01:09:20.7912022Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-05T01:09:20.7912777Z         
2025-06-05T01:09:20.7913317Z         Error: error when destroying resource
2025-06-05T01:09:20.7913830Z         
2025-06-05T01:09:20.7914534Z         error deleting Encryption At Rest: (6790e57a9b41416f5c216fee):
2025-06-05T01:09:20.7915767Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-05T01:09:20.7916825Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-05T01:09:20.7917931Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2025-06-05T01:09:20.7919090Z         Encryption at Rest cannot be disabled when private endpoints are present.
2025-06-05T01:09:20.7920030Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-05T01:09:20.7920814Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (1202.72s)
```

- 2025-06-06

### Error 2025-06-06T00:30:27+00:00
```
2025-06-06T00:30:27.5520156Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-06-06T00:30:27.5535426Z   
2025-06-06T00:30:27.5535833Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-06-06T00:30:27.5536217Z         
2025-06-06T00:30:27.5536655Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-06T00:30:27.5537023Z         
2025-06-06T00:30:27.5537388Z           with mongodbatlas_encryption_at_rest.test,
2025-06-06T00:30:27.5538068Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-06T00:30:27.5538718Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-06T00:30:27.5539061Z         
2025-06-06T00:30:27.5539638Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-06T00:30:27.5540220Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-06T00:30:27.5540991Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-06T00:30:27.5541724Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-06T00:30:27.5542502Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-06T00:30:27.5543134Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-06T00:30:27.5543584Z         BadRequestDetail: 
2025-06-06T00:30:27.5543974Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.43s)
```

- 2025-06-07

### Error 2025-06-07T00:29:08+00:00
```
2025-06-07T00:29:08.7454923Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-06-07T00:29:08.7470683Z    test_step_number=1 test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/06a0f4ae-f3dc-40b5-9553-6ac9b0b7480d/terraform test_working_directory=/tmp/plugintest2559977864
2025-06-07T00:29:08.7472027Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-06-07T00:29:08.7472481Z         
2025-06-07T00:29:08.7472964Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-07T00:29:08.7473383Z         
2025-06-07T00:29:08.7473790Z           with mongodbatlas_encryption_at_rest.test,
2025-06-07T00:29:08.7474526Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-07T00:29:08.7475212Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-07T00:29:08.7475604Z         
2025-06-07T00:29:08.7476241Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-07T00:29:08.7476891Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-07T00:29:08.7477601Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-07T00:29:08.7478391Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-07T00:29:08.7479109Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-07T00:29:08.7479791Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-07T00:29:08.7480302Z         BadRequestDetail: 
2025-06-07T00:29:08.7480742Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.47s)
```

- 2025-06-08 PASS 4 minutes
- 2025-06-09

### Error 2025-06-09T00:31:34+00:00
```
2025-06-09T00:31:34.5124062Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-06-09T00:31:34.5142413Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/0b91ce5b-8046-4c08-847c-1466358e2a30/terraform test_working_directory=/tmp/plugintest3775575040
2025-06-09T00:31:34.5143581Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-06-09T00:31:34.5144157Z         
2025-06-09T00:31:34.5144729Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-09T00:31:34.5145358Z         
2025-06-09T00:31:34.5145840Z           with mongodbatlas_encryption_at_rest.test,
2025-06-09T00:31:34.5146905Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-09T00:31:34.5147667Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-09T00:31:34.5148272Z         
2025-06-09T00:31:34.5149115Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-09T00:31:34.5149921Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-09T00:31:34.5150728Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-09T00:31:34.5151668Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-09T00:31:34.5152458Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-09T00:31:34.5153288Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-09T00:31:34.5153976Z         BadRequestDetail: 
2025-06-09T00:31:34.5154517Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.53s)
```

- 2025-06-10

### Error 2025-06-10T00:38:08+00:00
```
2025-06-10T00:38:08.6643647Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-06-10T00:38:08.6658996Z   
2025-06-10T00:38:08.6659408Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-06-10T00:38:08.6659790Z         
2025-06-10T00:38:08.6660217Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-10T00:38:08.6660588Z         
2025-06-10T00:38:08.6660938Z           with mongodbatlas_encryption_at_rest.test,
2025-06-10T00:38:08.6661611Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-10T00:38:08.6662441Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-10T00:38:08.6662783Z         
2025-06-10T00:38:08.6663362Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-10T00:38:08.6663939Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-10T00:38:08.6664585Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-10T00:38:08.6665319Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-10T00:38:08.6665979Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-10T00:38:08.6666602Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-10T00:38:08.6667048Z         BadRequestDetail: 
2025-06-10T00:38:08.6667426Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.42s)
```

- 2025-06-11
  - FAIL a moment

### Error 2025-06-11T00:29:03+00:00
```
2025-06-11T00:29:03.2276665Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-06-11T00:29:03.2292603Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-06-11T00:29:03.2293435Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-06-11T00:29:03.2294158Z         
2025-06-11T00:29:03.2294734Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-11T00:29:03.2295111Z         
2025-06-11T00:29:03.2295473Z           with mongodbatlas_encryption_at_rest.test,
2025-06-11T00:29:03.2296148Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-11T00:29:03.2296789Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-11T00:29:03.2297126Z         
2025-06-11T00:29:03.2297717Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-11T00:29:03.2298302Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-11T00:29:03.2299152Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-11T00:29:03.2299889Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-11T00:29:03.2300561Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-11T00:29:03.2301173Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-11T00:29:03.2301606Z         BadRequestDetail: 
2025-06-11T00:29:03.2301983Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.40s)
```

  - PASS 3 minutes
- 2025-06-12

### Error 2025-06-12T00:28:46+00:00
```
2025-06-12T00:28:46.9606213Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-06-12T00:28:46.9621547Z    test_working_directory=/tmp/plugintest602515470
2025-06-12T00:28:46.9622065Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-06-12T00:28:46.9622449Z         
2025-06-12T00:28:46.9622884Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-12T00:28:46.9623264Z         
2025-06-12T00:28:46.9623634Z           with mongodbatlas_encryption_at_rest.test,
2025-06-12T00:28:46.9624331Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-12T00:28:46.9624977Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-12T00:28:46.9625310Z         
2025-06-12T00:28:46.9625898Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-12T00:28:46.9626488Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-12T00:28:46.9627151Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-12T00:28:46.9627896Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-12T00:28:46.9628561Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-12T00:28:46.9629185Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-12T00:28:46.9629629Z         BadRequestDetail: 
2025-06-12T00:28:46.9630235Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.44s)
```

- 2025-06-13 PASS 5 minutes
- 2025-06-14 PASS 4 minutes
- 2025-06-15 PASS 5 minutes
- 2025-06-16 PASS 5 minutes
- 2025-06-17 PASS 5 minutes
- 2025-06-18 PASS 5 minutes
- 2025-06-19 PASS 5 minutes
- 2025-06-20 PASS 4 minutes
- 2025-06-21 PASS 3 minutes
- 2025-06-22 PASS 4 minutes
- 2025-06-23 PASS 3 minutes
- 2025-06-24 PASS 5 minutes
- 2025-06-25 PASS 6 minutes
- 2025-06-26 PASS 5 minutes
- 2025-06-27 PASS 5 minutes
- 2025-06-28 PASS 3 minutes
- 2025-06-29 PASS 5 minutes
- 2025-06-30 PASS 4 minutes
- 2025-07-01
  - PASS 5 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 4 minutes
- 2025-07-02 PASS 4 minutes
- 2025-07-03 PASS 5 minutes
- 2025-07-04 PASS 5 minutes
- 2025-07-05 PASS 4 minutes
- 2025-07-06 PASS 4 minutes
- 2025-07-07 PASS 4 minutes
- 2025-07-08 PASS 4 minutes
- 2025-07-09 PASS 5 minutes
- 2025-07-10 PASS 5 minutes