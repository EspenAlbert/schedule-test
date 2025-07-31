# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 34 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 27) FAIL(x 7)
Success rate: 79.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 01:11](#error-2025-07-14t0111250000) |  | dev | timeout | 1203.03s
[2025-07-15 00:30](#error-2025-07-15t0030210000) |  | dev |  | 0.05s
[2025-07-16 00:30](#error-2025-07-16t0030020000) |  | dev |  | 0.05s
[2025-07-17 00:30](#error-2025-07-17t0030350000) |  | dev |  | 0.05s
[2025-07-18 00:30](#error-2025-07-18t0030110000) |  | dev |  | 0.06s
[2025-07-19 00:29](#error-2025-07-19t0029240000) |  | dev |  | 0.08s
[2025-07-21 00:32](#error-2025-07-21t0032470000) |  | dev |  | 0.05s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 3 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 4 minutes
- 2025-07-06 PASS 3 minutes
- 2025-07-07 PASS 3 minutes
- 2025-07-08 PASS 3 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-11 PASS 18 minutes
- 2025-07-12 PASS 3 minutes
- 2025-07-13 PASS 3 minutes
- 2025-07-14

### Error 2025-07-14T01:11:25+00:00
```
2025-07-14T01:11:25.4155041Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-14T01:11:25.4172532Z    test_terraform_path=/home/runner/work/_temp/b552fe77-517d-425a-a402-b095bdd78282/terraform test_working_directory=/tmp/plugintest72099375 test_step_number=2
2025-07-14T01:11:25.4174061Z     resource_test.go:32: Step 2/3 error: Error running apply: exit status 1
2025-07-14T01:11:25.4174720Z         
2025-07-14T01:11:25.4175434Z         Error: error when waiting for status transition in creation
2025-07-14T01:11:25.4176048Z         
2025-07-14T01:11:25.4176987Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2025-07-14T01:11:25.4178440Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2025-07-14T01:11:25.4179803Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2025-07-14T01:11:25.4180478Z         
2025-07-14T01:11:25.4181309Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2025-07-14T01:11:25.4182243Z         FAILED' (last state: 'INITIATING', timeout: 20m0s)
2025-07-14T01:11:25.4202058Z    test_terraform_path=/home/runner/work/_temp/b552fe77-517d-425a-a402-b095bdd78282/terraform test_working_directory=/tmp/plugintest72099375 test_step_number=2 test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-14T01:11:25.4204083Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T01:11:25.4204857Z         
2025-07-14T01:11:25.4205393Z         Error: error when destroying resource
2025-07-14T01:11:25.4205907Z         
2025-07-14T01:11:25.4206827Z         error deleting Encryption At Rest: (66d83bcc1fe1835125c52422):
2025-07-14T01:11:25.4208311Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-14T01:11:25.4209321Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-14T01:11:25.4210262Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2025-07-14T01:11:25.4211366Z         Encryption at Rest cannot be disabled when private endpoints are present.
2025-07-14T01:11:25.4212374Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-14T01:11:25.4213177Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (1203.26s)
```

- 2025-07-15

### Error 2025-07-15T00:30:21+00:00
```
2025-07-15T00:30:21.0701681Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-15T00:30:21.0716753Z   
2025-07-15T00:30:21.0717150Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-07-15T00:30:21.0717523Z         
2025-07-15T00:30:21.0717948Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-07-15T00:30:21.0718322Z         
2025-07-15T00:30:21.0718679Z           with mongodbatlas_encryption_at_rest.test,
2025-07-15T00:30:21.0719525Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-15T00:30:21.0720144Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-15T00:30:21.0720479Z         
2025-07-15T00:30:21.0721043Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-15T00:30:21.0721635Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-15T00:30:21.0722263Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-15T00:30:21.0722984Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-15T00:30:21.0723613Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-07-15T00:30:21.0724212Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-07-15T00:30:21.0724650Z         BadRequestDetail: 
2025-07-15T00:30:21.0725035Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.50s)
```

- 2025-07-16

### Error 2025-07-16T00:30:02+00:00
```
2025-07-16T00:30:02.6334103Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-16T00:30:02.6361201Z   
2025-07-16T00:30:02.6361901Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-07-16T00:30:02.6362555Z         
2025-07-16T00:30:02.6363317Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-07-16T00:30:02.6363960Z         
2025-07-16T00:30:02.6364588Z           with mongodbatlas_encryption_at_rest.test,
2025-07-16T00:30:02.6365779Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-16T00:30:02.6366908Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-16T00:30:02.6367491Z         
2025-07-16T00:30:02.6368546Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-16T00:30:02.6369561Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-16T00:30:02.6370819Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-16T00:30:02.6372119Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-16T00:30:02.6373254Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-07-16T00:30:02.6374329Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-07-16T00:30:02.6375092Z         BadRequestDetail: 
2025-07-16T00:30:02.6375768Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.49s)
```

- 2025-07-17

### Error 2025-07-17T00:30:35+00:00
```
2025-07-17T00:30:35.6102182Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-17T00:30:35.6117351Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic test_working_directory=/tmp/plugintest519033123
2025-07-17T00:30:35.6118083Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-07-17T00:30:35.6118477Z         
2025-07-17T00:30:35.6118916Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-07-17T00:30:35.6119293Z         
2025-07-17T00:30:35.6119661Z           with mongodbatlas_encryption_at_rest.test,
2025-07-17T00:30:35.6120341Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-17T00:30:35.6120978Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-17T00:30:35.6121329Z         
2025-07-17T00:30:35.6121916Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-17T00:30:35.6122508Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-17T00:30:35.6123154Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-17T00:30:35.6123885Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-17T00:30:35.6124543Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-07-17T00:30:35.6125158Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-07-17T00:30:35.6125604Z         BadRequestDetail: 
2025-07-17T00:30:35.6126002Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.52s)
```

- 2025-07-18

### Error 2025-07-18T00:30:11+00:00
```
2025-07-18T00:30:11.2095072Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-18T00:30:11.2116094Z   
2025-07-18T00:30:11.2116767Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-07-18T00:30:11.2117418Z         
2025-07-18T00:30:11.2118166Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-07-18T00:30:11.2118895Z         
2025-07-18T00:30:11.2119273Z           with mongodbatlas_encryption_at_rest.test,
2025-07-18T00:30:11.2120238Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-18T00:30:11.2121359Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-18T00:30:11.2121942Z         
2025-07-18T00:30:11.2122953Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-18T00:30:11.2123985Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-18T00:30:11.2124699Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-18T00:30:11.2125925Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-18T00:30:11.2127076Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-07-18T00:30:11.2128157Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-07-18T00:30:11.2129059Z         BadRequestDetail: 
2025-07-18T00:30:11.2129577Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.60s)
```

- 2025-07-19

### Error 2025-07-19T00:29:24+00:00
```
2025-07-19T00:29:24.4934279Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-19T00:29:24.4949670Z    test_step_number=1
2025-07-19T00:29:24.4950108Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-07-19T00:29:24.4950694Z         
2025-07-19T00:29:24.4951128Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-07-19T00:29:24.4951497Z         
2025-07-19T00:29:24.4951860Z           with mongodbatlas_encryption_at_rest.test,
2025-07-19T00:29:24.4952539Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-19T00:29:24.4953172Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-19T00:29:24.4953510Z         
2025-07-19T00:29:24.4954076Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-19T00:29:24.4954662Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-19T00:29:24.4955307Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-19T00:29:24.4956040Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-19T00:29:24.4956686Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-07-19T00:29:24.4957302Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-07-19T00:29:24.4957740Z         BadRequestDetail: 
2025-07-19T00:29:24.4958141Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.82s)
```

- 2025-07-20 PASS 4 minutes
- 2025-07-21
  - FAIL a moment

### Error 2025-07-21T00:32:47+00:00
```
2025-07-21T00:32:47.0767435Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-21T00:32:47.0782771Z   
2025-07-21T00:32:47.0783170Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-07-21T00:32:47.0783552Z         
2025-07-21T00:32:47.0783994Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-07-21T00:32:47.0784373Z         
2025-07-21T00:32:47.0784749Z           with mongodbatlas_encryption_at_rest.test,
2025-07-21T00:32:47.0785426Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-21T00:32:47.0786070Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-21T00:32:47.0786614Z         
2025-07-21T00:32:47.0787250Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-21T00:32:47.0787845Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-21T00:32:47.0788496Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-21T00:32:47.0789226Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-21T00:32:47.0789880Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-07-21T00:32:47.0790494Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-07-21T00:32:47.0790941Z         BadRequestDetail: 
2025-07-21T00:32:47.0791340Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.46s)
```

  - PASS 9 minutes
- 2025-07-22 PASS 3 minutes
- 2025-07-23
  - PASS 5 minutes
  - PASS 3 minutes
  - PASS 6 minutes
- 2025-07-24 PASS 4 minutes
- 2025-07-25 PASS 3 minutes
- 2025-07-26 PASS 5 minutes
- 2025-07-27 PASS 3 minutes
- 2025-07-28 PASS 3 minutes
- 2025-07-29 PASS 3 minutes
- 2025-07-30 PASS 3 minutes
- 2025-07-31 PASS 3 minutes