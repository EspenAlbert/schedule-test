# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 105) FAIL(x 8)
Success rate: 92.92%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.05s
2025-06-05 01:09 | dev | 1207.02s
2025-06-06 00:30 | dev | 0.05s
2025-06-07 00:29 | dev | 0.07s
2025-06-09 00:31 | dev | 0.06s
2025-06-10 00:38 | dev | 0.04s
2025-06-11 00:29 | dev | 0.04s
2025-06-12 00:28 | dev | 0.05s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 3 minutes
### 2025-04-12
#### PASS 3 minutes
### 2025-04-13
#### PASS 3 minutes
### 2025-04-14
#### PASS 3 minutes
### 2025-04-15
#### PASS 3 minutes
### 2025-04-16
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-04-17
#### PASS 3 minutes
### 2025-04-18
#### PASS 3 minutes
### 2025-04-19
#### PASS 3 minutes
### 2025-04-20
#### PASS 3 minutes
### 2025-04-21
#### PASS 3 minutes
### 2025-04-22
#### PASS 3 minutes
### 2025-04-23
#### PASS 3 minutes
### 2025-04-24
#### PASS 6 minutes
### 2025-04-25
#### PASS 3 minutes
### 2025-04-26
#### PASS 3 minutes
### 2025-04-27
#### PASS 3 minutes
### 2025-04-28
#### PASS 3 minutes
### 2025-04-29
#### PASS 3 minutes
### 2025-04-30
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-05-01
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 4 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-05-02
#### PASS 3 minutes
### 2025-05-03
#### PASS 3 minutes
### 2025-05-04
#### PASS 3 minutes
### 2025-05-05
#### PASS 3 minutes
### 2025-05-06
#### PASS 3 minutes
### 2025-05-07
#### PASS 3 minutes
### 2025-05-08
#### PASS 3 minutes
### 2025-05-09
#### PASS 3 minutes
### 2025-05-10
#### PASS 3 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:05.5027516Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-05-11T00:30:05.5044036Z    test_terraform_path=/home/runner/work/_temp/3267a76f-3abc-4c5b-9dba-02f9a63f1b49/terraform
2025-05-11T00:30:05.5045163Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-05-11T00:30:05.5045818Z         
2025-05-11T00:30:05.5046582Z         Error: error creating Encryption At Rest: 66d96b8a0fc5b2543fdf6dbd
2025-05-11T00:30:05.5047228Z         
2025-05-11T00:30:05.5048042Z           with mongodbatlas_encryption_at_rest.test,
2025-05-11T00:30:05.5049262Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-05-11T00:30:05.5050382Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-05-11T00:30:05.5050968Z         
2025-05-11T00:30:05.5051832Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:05.5052559Z         type
2025-05-11T00:30:05.5053164Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.54s)
```
### 2025-05-12
#### PASS 3 minutes
### 2025-05-13
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-05-14
#### PASS 3 minutes
### 2025-05-15
#### PASS 3 minutes
### 2025-05-16
#### PASS 4 minutes
### 2025-05-17
#### PASS 3 minutes
### 2025-05-18
#### PASS 3 minutes
### 2025-05-19
#### PASS 3 minutes
### 2025-05-20
#### PASS 3 minutes
### 2025-05-21
#### PASS 3 minutes
### 2025-05-22
#### PASS 3 minutes
### 2025-05-23
#### PASS 3 minutes
### 2025-05-24
#### PASS 3 minutes
### 2025-05-25
#### PASS 3 minutes
### 2025-05-26
#### PASS 3 minutes
### 2025-05-27
#### PASS 3 minutes
### 2025-05-28
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-05-29
#### PASS 3 minutes
### 2025-05-30
#### PASS 3 minutes
### 2025-05-31
#### PASS 3 minutes
### 2025-06-01
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-06-02
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-06-03
#### PASS 3 minutes
### 2025-06-04
#### PASS 3 minutes
### 2025-06-05
#### FAIL 20 minutes
```
2025-06-05T01:09:20.7829534Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-05T01:09:20.7842022Z    test_step_number=2 test_working_directory=/tmp/plugintest3064844430
2025-06-05T01:09:20.7842757Z     resource_test.go:32: Step 2/3 error: Error running apply: exit status 1
2025-06-05T01:09:20.7843180Z         
2025-06-05T01:09:20.7843614Z         Error: error when waiting for status transition in creation
2025-06-05T01:09:20.7843988Z         
2025-06-05T01:09:20.7844444Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2025-06-05T01:09:20.7845449Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2025-06-05T01:09:20.7846245Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2025-06-05T01:09:20.7846663Z         
2025-06-05T01:09:20.7847150Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2025-06-05T01:09:20.7847920Z         FAILED' (last state: 'INITIATING', timeout: 20m0s)
2025-06-05T01:09:20.7859640Z    test_terraform_path=/home/runner/work/_temp/eeeedc53-2298-41de-8964-f6f4c4782704/terraform test_step_number=2 test_working_directory=/tmp/plugintest3064844430 test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-05T01:09:20.7860829Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-05T01:09:20.7861310Z         
2025-06-05T01:09:20.7861647Z         Error: error when destroying resource
2025-06-05T01:09:20.7861972Z         
2025-06-05T01:09:20.7862407Z         error deleting Encryption At Rest: (66d83bcc1fe1835125c52422):
2025-06-05T01:09:20.7863159Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-05T01:09:20.7863785Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-05T01:09:20.7864344Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2025-06-05T01:09:20.7865004Z         Encryption at Rest cannot be disabled when private endpoints are present.
2025-06-05T01:09:20.7865580Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-05T01:09:20.7866204Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (1207.16s)
```
### 2025-06-06
#### FAIL a moment
```
2025-06-06T00:30:27.5494448Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-06T00:30:27.5508840Z    test_terraform_path=/home/runner/work/_temp/7db9c9d1-cd42-48f9-9aa7-2a0c5a3f762f/terraform test_step_number=1 test_working_directory=/tmp/plugintest4124300916 test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-06T00:30:27.5509911Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-06-06T00:30:27.5510299Z         
2025-06-06T00:30:27.5510858Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-06-06T00:30:27.5511242Z         
2025-06-06T00:30:27.5511607Z           with mongodbatlas_encryption_at_rest.test,
2025-06-06T00:30:27.5512286Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-06T00:30:27.5512926Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-06T00:30:27.5513267Z         
2025-06-06T00:30:27.5513849Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-06T00:30:27.5514439Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-06T00:30:27.5515090Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-06T00:30:27.5515821Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-06T00:30:27.5516472Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-06-06T00:30:27.5517085Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-06-06T00:30:27.5517529Z         BadRequestDetail: 
2025-06-06T00:30:27.5518051Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.48s)
```
### 2025-06-07
#### FAIL a moment
```
2025-06-07T00:29:08.7426685Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-07T00:29:08.7442585Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic test_terraform_path=/home/runner/work/_temp/06a0f4ae-f3dc-40b5-9553-6ac9b0b7480d/terraform test_working_directory=/tmp/plugintest2545982222
2025-06-07T00:29:08.7443685Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-06-07T00:29:08.7444125Z         
2025-06-07T00:29:08.7444613Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-06-07T00:29:08.7445035Z         
2025-06-07T00:29:08.7445447Z           with mongodbatlas_encryption_at_rest.test,
2025-06-07T00:29:08.7446237Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-07T00:29:08.7447037Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-07T00:29:08.7447424Z         
2025-06-07T00:29:08.7448056Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-07T00:29:08.7448706Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-07T00:29:08.7449413Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-07T00:29:08.7450204Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-07T00:29:08.7450918Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-06-07T00:29:08.7451581Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-06-07T00:29:08.7452171Z         BadRequestDetail: 
2025-06-07T00:29:08.7452614Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.68s)
```
### 2025-06-08
#### PASS 3 minutes
### 2025-06-09
#### FAIL a moment
```
2025-06-09T00:31:34.5095326Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-09T00:31:34.5110476Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic test_terraform_path=/home/runner/work/_temp/0b91ce5b-8046-4c08-847c-1466358e2a30/terraform
2025-06-09T00:31:34.5111347Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-06-09T00:31:34.5111740Z         
2025-06-09T00:31:34.5112189Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-06-09T00:31:34.5112580Z         
2025-06-09T00:31:34.5112955Z           with mongodbatlas_encryption_at_rest.test,
2025-06-09T00:31:34.5113643Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-09T00:31:34.5114289Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-09T00:31:34.5114801Z         
2025-06-09T00:31:34.5115555Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-09T00:31:34.5116616Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-09T00:31:34.5117405Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-09T00:31:34.5118388Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-09T00:31:34.5119201Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-06-09T00:31:34.5120036Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-06-09T00:31:34.5120682Z         BadRequestDetail: 
2025-06-09T00:31:34.5121235Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.61s)
```
### 2025-06-10
#### FAIL a moment
```
2025-06-10T00:38:08.6617438Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-10T00:38:08.6632781Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-10T00:38:08.6633352Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-06-10T00:38:08.6633736Z         
2025-06-10T00:38:08.6634168Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-06-10T00:38:08.6634543Z         
2025-06-10T00:38:08.6634916Z           with mongodbatlas_encryption_at_rest.test,
2025-06-10T00:38:08.6635592Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-10T00:38:08.6636223Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-10T00:38:08.6636561Z         
2025-06-10T00:38:08.6637141Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-10T00:38:08.6637726Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-10T00:38:08.6638370Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-10T00:38:08.6639106Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-10T00:38:08.6639760Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-06-10T00:38:08.6640366Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-06-10T00:38:08.6640823Z         BadRequestDetail: 
2025-06-10T00:38:08.6641227Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.45s)
```
### 2025-06-11
#### FAIL a moment
```
2025-06-11T00:29:03.2250898Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-11T00:29:03.2266117Z   
2025-06-11T00:29:03.2266535Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-06-11T00:29:03.2266921Z         
2025-06-11T00:29:03.2267356Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-06-11T00:29:03.2267738Z         
2025-06-11T00:29:03.2268114Z           with mongodbatlas_encryption_at_rest.test,
2025-06-11T00:29:03.2268945Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-11T00:29:03.2269589Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-11T00:29:03.2269925Z         
2025-06-11T00:29:03.2270510Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-11T00:29:03.2271100Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-11T00:29:03.2271761Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-11T00:29:03.2272502Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-11T00:29:03.2273159Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-06-11T00:29:03.2273777Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-06-11T00:29:03.2274215Z         BadRequestDetail: 
2025-06-11T00:29:03.2274605Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.43s)
```
#### PASS 3 minutes
### 2025-06-12
#### FAIL a moment
```
2025-06-12T00:28:46.9579874Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-12T00:28:46.9595241Z   
2025-06-12T00:28:46.9595642Z     resource_test.go:32: Step 1/3 error: Error running apply: exit status 1
2025-06-12T00:28:46.9596019Z         
2025-06-12T00:28:46.9596462Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-06-12T00:28:46.9596839Z         
2025-06-12T00:28:46.9597208Z           with mongodbatlas_encryption_at_rest.test,
2025-06-12T00:28:46.9597900Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-12T00:28:46.9598538Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-12T00:28:46.9598878Z         
2025-06-12T00:28:46.9599465Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-12T00:28:46.9600301Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-12T00:28:46.9601201Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-12T00:28:46.9601953Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-12T00:28:46.9602640Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-06-12T00:28:46.9603259Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-06-12T00:28:46.9603708Z         BadRequestDetail: 
2025-06-12T00:28:46.9604101Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.48s)
```
### 2025-06-13
#### PASS 4 minutes
### 2025-06-14
#### PASS 4 minutes
### 2025-06-15
#### PASS 3 minutes
### 2025-06-16
#### PASS 3 minutes
### 2025-06-17
#### PASS 3 minutes
### 2025-06-18
#### PASS 3 minutes
### 2025-06-19
#### PASS 3 minutes
### 2025-06-20
#### PASS 3 minutes
### 2025-06-21
#### PASS 3 minutes
### 2025-06-22
#### PASS 3 minutes
### 2025-06-23
#### PASS 3 minutes
### 2025-06-24
#### PASS 3 minutes
### 2025-06-25
#### PASS 3 minutes
### 2025-06-26
#### PASS 3 minutes
### 2025-06-27
#### PASS 3 minutes
### 2025-06-28
#### PASS 3 minutes
### 2025-06-29
#### PASS 3 minutes
### 2025-06-30
#### PASS 4 minutes
### 2025-07-01
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
#### PASS 3 minutes
### 2025-07-02
#### PASS 3 minutes
### 2025-07-03
#### PASS 3 minutes
### 2025-07-04
#### PASS 3 minutes
### 2025-07-05
#### PASS 4 minutes
### 2025-07-06
#### PASS 3 minutes
### 2025-07-07
#### PASS 3 minutes
### 2025-07-08
#### PASS 3 minutes
### 2025-07-09
#### PASS 3 minutes