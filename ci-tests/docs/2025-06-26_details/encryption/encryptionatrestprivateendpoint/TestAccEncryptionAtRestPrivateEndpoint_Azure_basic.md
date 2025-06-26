# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 32) FAIL(x 7)
Success rate: 82.05%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 3 minutes
```
2025-05-28T00:45:38.3589102Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-05-28T00:45:38.3589620Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (185.52s)
```
#### PASS 3 minutes
```
2025-05-28T08:46:47.5341784Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-05-28T08:46:47.5342895Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (224.52s)
```
### 2025-05-29
#### PASS 3 minutes
```
2025-05-29T00:45:18.4488929Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-05-29T00:45:18.4489941Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (198.62s)
```
### 2025-05-30
#### PASS 3 minutes
```
2025-05-30T00:46:04.6362003Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-05-30T00:46:04.6363029Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (194.83s)
```
### 2025-05-31
#### PASS 3 minutes
```
2025-05-31T00:45:10.2599925Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-05-31T00:45:10.2600798Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (197.39s)
```
### 2025-06-01
#### PASS 3 minutes
```
2025-06-01T00:49:05.2795478Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-01T00:49:05.2796324Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (196.00s)
```
#### PASS 3 minutes
```
2025-06-01T04:58:11.5505869Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-01T04:58:11.5506743Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (199.77s)
```
#### PASS 3 minutes
```
2025-06-01T09:07:57.3182823Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-01T09:07:57.3183451Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (225.44s)
```
#### PASS 3 minutes
```
2025-06-01T13:17:17.5381858Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-01T13:17:17.5382714Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (225.69s)
```
#### PASS 3 minutes
```
2025-06-01T17:25:05.6366700Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-01T17:25:05.6367726Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (195.41s)
```
#### PASS 3 minutes
```
2025-06-01T21:34:55.6315483Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-01T21:34:55.6316516Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (199.55s)
```
### 2025-06-02
#### PASS 3 minutes
```
2025-06-02T00:47:07.1119157Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-02T00:47:07.1120240Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (189.74s)
```
#### PASS 3 minutes
```
2025-06-02T01:43:41.1327937Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-02T01:43:41.1329017Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (226.89s)
```
#### PASS 3 minutes
```
2025-06-02T05:58:50.1585082Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-02T05:58:50.1585948Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (226.87s)
```
### 2025-06-03
#### PASS 3 minutes
```
2025-06-03T00:47:37.1400581Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-03T00:47:37.1401205Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (227.09s)
```
### 2025-06-04
#### PASS 3 minutes
```
2025-06-04T00:38:07.2954875Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-04T00:38:07.2955995Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (230.25s)
```
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
```
2025-06-08T00:40:03.2607353Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-08T00:40:03.2608229Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (187.33s)
```
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
```
2025-06-11T07:44:46.5419493Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-11T07:44:46.5420485Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (197.29s)
```
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
```
2025-06-13T00:38:41.5881326Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-13T00:38:41.5882191Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (270.90s)
```
### 2025-06-14
#### PASS 4 minutes
```
2025-06-14T00:37:20.5696410Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-14T00:37:20.5697266Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (266.68s)
```
### 2025-06-15
#### PASS 3 minutes
```
2025-06-15T00:41:18.2755126Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-15T00:41:18.2755686Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (197.03s)
```
### 2025-06-16
#### PASS 3 minutes
```
2025-06-16T00:39:17.0491145Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-16T00:39:17.0491747Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (226.57s)
```
### 2025-06-17
#### PASS 3 minutes
```
2025-06-17T00:38:21.2308980Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-17T00:38:21.2309768Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (229.21s)
```
### 2025-06-18
#### PASS 3 minutes
```
2025-06-18T00:38:20.3967911Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-18T00:38:20.3968632Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (236.28s)
```
### 2025-06-19
#### PASS 3 minutes
```
2025-06-19T00:39:24.8828255Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-19T00:39:24.8829118Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (230.99s)
```
### 2025-06-20
#### PASS 3 minutes
```
2025-06-20T00:37:23.0736554Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-20T00:37:23.0737320Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (235.28s)
```
### 2025-06-21
#### PASS 3 minutes
```
2025-06-21T00:36:23.6155748Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-21T00:36:23.6156543Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (225.78s)
```
### 2025-06-22
#### PASS 3 minutes
```
2025-06-22T00:39:46.4133318Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-22T00:39:46.4134489Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (194.67s)
```
### 2025-06-23
#### PASS 3 minutes
```
2025-06-23T00:39:14.1225291Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-23T00:39:14.1226146Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (230.53s)
```
### 2025-06-24
#### PASS 3 minutes
```
2025-06-24T00:38:26.2248621Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-24T00:38:26.2249892Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (226.14s)
```
### 2025-06-25
#### PASS 3 minutes
```
2025-06-25T00:39:14.3786564Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-25T00:39:14.3787406Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (196.09s)
```
### 2025-06-26
#### PASS 3 minutes
```
2025-06-26T00:38:13.0268052Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-26T00:38:13.0269112Z --- PASS: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (225.53s)
```