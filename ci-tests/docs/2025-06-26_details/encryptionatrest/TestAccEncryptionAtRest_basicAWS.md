# encryptionatrest/TestAccEncryptionAtRest_basicAWS Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 33) FAIL(x 6)
Success rate: 84.62%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 3 seconds
```
2025-05-28T00:38:10.6642755Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-05-28T00:38:10.6643625Z --- PASS: TestAccEncryptionAtRest_basicAWS (3.96s)
```
#### PASS 3 seconds
```
2025-05-28T08:37:17.1651778Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-05-28T08:37:17.1652612Z --- PASS: TestAccEncryptionAtRest_basicAWS (3.25s)
```
### 2025-05-29
#### PASS 5 seconds
```
2025-05-29T00:38:09.4102381Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-05-29T00:38:09.4102896Z --- PASS: TestAccEncryptionAtRest_basicAWS (5.72s)
```
### 2025-05-30
#### PASS 4 seconds
```
2025-05-30T00:38:26.5872197Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-05-30T00:38:26.5872651Z --- PASS: TestAccEncryptionAtRest_basicAWS (4.16s)
```
### 2025-05-31
#### PASS 5 seconds
```
2025-05-31T00:37:31.2182326Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-05-31T00:37:31.2182730Z --- PASS: TestAccEncryptionAtRest_basicAWS (5.49s)
```
### 2025-06-01
#### PASS 4 seconds
```
2025-06-01T00:41:26.2982352Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-01T00:41:26.2982778Z --- PASS: TestAccEncryptionAtRest_basicAWS (4.16s)
```
#### PASS 3 seconds
```
2025-06-01T04:50:20.9754565Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-01T04:50:20.9754955Z --- PASS: TestAccEncryptionAtRest_basicAWS (3.95s)
```
#### PASS 4 seconds
```
2025-06-01T08:59:18.7902968Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-01T08:59:18.7903340Z --- PASS: TestAccEncryptionAtRest_basicAWS (4.08s)
```
#### PASS 4 seconds
```
2025-06-01T13:08:39.9304812Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-01T13:08:39.9305204Z --- PASS: TestAccEncryptionAtRest_basicAWS (4.21s)
```
#### PASS 3 seconds
```
2025-06-01T17:17:58.2583061Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-01T17:17:58.2583478Z --- PASS: TestAccEncryptionAtRest_basicAWS (3.79s)
```
#### PASS 7 seconds
```
2025-06-01T21:26:36.4964081Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-01T21:26:36.4964523Z --- PASS: TestAccEncryptionAtRest_basicAWS (7.08s)
```
### 2025-06-02
#### PASS 7 seconds
```
2025-06-02T00:39:47.1682051Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-02T00:39:47.1682581Z --- PASS: TestAccEncryptionAtRest_basicAWS (7.45s)
```
#### PASS 3 seconds
```
2025-06-02T01:35:30.4689911Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-02T01:35:30.4690310Z --- PASS: TestAccEncryptionAtRest_basicAWS (3.99s)
```
#### PASS 4 seconds
```
2025-06-02T05:50:51.5027350Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-02T05:50:51.5027746Z --- PASS: TestAccEncryptionAtRest_basicAWS (4.98s)
```
### 2025-06-03
#### PASS 4 seconds
```
2025-06-03T00:38:48.3450276Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-03T00:38:48.3450753Z --- PASS: TestAccEncryptionAtRest_basicAWS (4.69s)
```
### 2025-06-04
#### PASS 7 seconds
```
2025-06-04T00:29:56.9036208Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-04T00:29:56.9036628Z --- PASS: TestAccEncryptionAtRest_basicAWS (7.86s)
```
### 2025-06-05
#### PASS 7 seconds
```
2025-06-05T00:29:30.7336101Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-05T00:29:30.7336848Z --- PASS: TestAccEncryptionAtRest_basicAWS (7.00s)
```
### 2025-06-06
#### FAIL a moment
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
### 2025-06-07
#### FAIL a moment
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
### 2025-06-08
#### PASS 5 seconds
```
2025-06-08T00:32:55.2547049Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-08T00:32:55.2547449Z --- PASS: TestAccEncryptionAtRest_basicAWS (5.17s)
```
### 2025-06-09
#### FAIL a moment
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
### 2025-06-10
#### FAIL a moment
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
### 2025-06-11
#### FAIL a moment
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
#### PASS 5 seconds
```
2025-06-11T07:37:46.8879793Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-11T07:37:46.8880190Z --- PASS: TestAccEncryptionAtRest_basicAWS (5.42s)
```
### 2025-06-12
#### FAIL a moment
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
### 2025-06-13
#### PASS 7 seconds
```
2025-06-13T00:29:19.1199999Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-13T00:29:19.1200465Z --- PASS: TestAccEncryptionAtRest_basicAWS (7.81s)
```
### 2025-06-14
#### PASS 4 seconds
```
2025-06-14T00:28:31.8969147Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-14T00:28:31.8969528Z --- PASS: TestAccEncryptionAtRest_basicAWS (4.80s)
```
### 2025-06-15
#### PASS 5 seconds
```
2025-06-15T00:32:28.6577120Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-15T00:32:28.6577580Z --- PASS: TestAccEncryptionAtRest_basicAWS (5.23s)
```
### 2025-06-16
#### PASS 4 seconds
```
2025-06-16T00:30:37.4094404Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-16T00:30:37.4094798Z --- PASS: TestAccEncryptionAtRest_basicAWS (4.70s)
```
### 2025-06-17
#### PASS 7 seconds
```
2025-06-17T00:29:42.4663920Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-17T00:29:42.4664327Z --- PASS: TestAccEncryptionAtRest_basicAWS (7.58s)
```
### 2025-06-18
#### PASS 3 seconds
```
2025-06-18T00:29:30.7151990Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-18T00:29:30.7152474Z --- PASS: TestAccEncryptionAtRest_basicAWS (3.97s)
```
### 2025-06-19
#### PASS 7 seconds
```
2025-06-19T00:30:02.2188788Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-19T00:30:02.2189289Z --- PASS: TestAccEncryptionAtRest_basicAWS (7.85s)
```
### 2025-06-20
#### PASS 4 seconds
```
2025-06-20T00:29:08.2490194Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-20T00:29:08.2490584Z --- PASS: TestAccEncryptionAtRest_basicAWS (4.14s)
```
### 2025-06-21
#### PASS 4 seconds
```
2025-06-21T00:28:53.9917144Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-21T00:28:53.9917523Z --- PASS: TestAccEncryptionAtRest_basicAWS (4.23s)
```
### 2025-06-22
#### PASS 3 seconds
```
2025-06-22T00:32:18.9328317Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-22T00:32:18.9328807Z --- PASS: TestAccEncryptionAtRest_basicAWS (3.60s)
```
### 2025-06-23
#### PASS 7 seconds
```
2025-06-23T00:31:43.5075571Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-23T00:31:43.5076309Z --- PASS: TestAccEncryptionAtRest_basicAWS (7.71s)
```
### 2025-06-24
#### PASS 4 seconds
```
2025-06-24T00:29:46.1803181Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-24T00:29:46.1804404Z --- PASS: TestAccEncryptionAtRest_basicAWS (4.60s)
```
### 2025-06-25
#### PASS 5 seconds
```
2025-06-25T00:29:46.2839013Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-25T00:29:46.2840289Z --- PASS: TestAccEncryptionAtRest_basicAWS (5.03s)
```
### 2025-06-26
#### PASS 3 seconds
```
2025-06-26T00:29:34.7206825Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-06-26T00:29:34.7207648Z --- PASS: TestAccEncryptionAtRest_basicAWS (3.82s)
```