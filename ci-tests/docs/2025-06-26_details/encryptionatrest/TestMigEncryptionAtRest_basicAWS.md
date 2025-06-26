# encryptionatrest/TestMigEncryptionAtRest_basicAWS Test Details
# Found 39 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 33) FAIL(x 6)
Success rate: 84.62%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### PASS 5 seconds
```
2025-05-28T00:38:10.6632269Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-05-28T00:38:10.6634658Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.41s)
```
#### PASS 5 seconds
```
2025-05-28T08:37:17.1643812Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-05-28T08:37:17.1644625Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.00s)
```
### 2025-05-29
#### PASS 7 seconds
```
2025-05-29T00:38:09.4095070Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-05-29T00:38:09.4095851Z --- PASS: TestMigEncryptionAtRest_basicAWS (7.60s)
```
### 2025-05-30
#### PASS 5 seconds
```
2025-05-30T00:38:26.5863455Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-05-30T00:38:26.5864215Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.46s)
```
### 2025-05-31
#### PASS 7 seconds
```
2025-05-31T00:37:31.2176588Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-05-31T00:37:31.2177101Z --- PASS: TestMigEncryptionAtRest_basicAWS (7.50s)
```
### 2025-06-01
#### PASS 5 seconds
```
2025-06-01T00:41:26.2976415Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-01T00:41:26.2977033Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.69s)
```
#### PASS 5 seconds
```
2025-06-01T04:50:20.9747290Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-01T04:50:20.9749807Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.66s)
```
#### PASS 5 seconds
```
2025-06-01T08:59:18.7895194Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-01T08:59:18.7895869Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.65s)
```
#### PASS 5 seconds
```
2025-06-01T13:08:39.9297855Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-01T13:08:39.9298325Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.56s)
```
#### PASS 6 seconds
```
2025-06-01T17:17:58.2574346Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-01T17:17:58.2575060Z --- PASS: TestMigEncryptionAtRest_basicAWS (6.37s)
```
#### PASS 8 seconds
```
2025-06-01T21:26:36.4957585Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-01T21:26:36.4958397Z --- PASS: TestMigEncryptionAtRest_basicAWS (8.61s)
```
### 2025-06-02
#### PASS 8 seconds
```
2025-06-02T00:39:47.1672953Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-02T00:39:47.1673979Z --- PASS: TestMigEncryptionAtRest_basicAWS (8.11s)
```
#### PASS 5 seconds
```
2025-06-02T01:35:30.4684048Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-02T01:35:30.4684842Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.45s)
```
#### PASS 9 seconds
```
2025-06-02T05:50:51.5021711Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-02T05:50:51.5022297Z --- PASS: TestMigEncryptionAtRest_basicAWS (9.25s)
```
### 2025-06-03
#### PASS 6 seconds
```
2025-06-03T00:38:48.3443596Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-03T00:38:48.3444549Z --- PASS: TestMigEncryptionAtRest_basicAWS (6.08s)
```
### 2025-06-04
#### PASS 9 seconds
```
2025-06-04T00:29:56.9030055Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-04T00:29:56.9030750Z --- PASS: TestMigEncryptionAtRest_basicAWS (9.00s)
```
### 2025-06-05
#### PASS 8 seconds
```
2025-06-05T00:29:30.7328978Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-05T00:29:30.7329498Z --- PASS: TestMigEncryptionAtRest_basicAWS (8.37s)
```
### 2025-06-06
#### FAIL 2 seconds
```
2025-06-06T00:30:27.5343612Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-06T00:30:27.5359605Z   
2025-06-06T00:30:27.5360490Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-06-06T00:30:27.5363222Z         
2025-06-06T00:30:27.5364015Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-06T00:30:27.5364678Z         
2025-06-06T00:30:27.5365306Z           with mongodbatlas_encryption_at_rest.test,
2025-06-06T00:30:27.5366527Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-06T00:30:27.5367661Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-06T00:30:27.5368249Z         
2025-06-06T00:30:27.5369280Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-06T00:30:27.5370383Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-06T00:30:27.5371768Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-06T00:30:27.5373084Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-06T00:30:27.5374556Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-06T00:30:27.5375693Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-06T00:30:27.5376481Z         BadRequestDetail: 
2025-06-06T00:30:27.5377020Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.30s)
```
### 2025-06-07
#### FAIL 2 seconds
```
2025-06-07T00:29:08.7299153Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-07T00:29:08.7314045Z   
2025-06-07T00:29:08.7314709Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-06-07T00:29:08.7315275Z         
2025-06-07T00:29:08.7315786Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-07T00:29:08.7316300Z         
2025-06-07T00:29:08.7316749Z           with mongodbatlas_encryption_at_rest.test,
2025-06-07T00:29:08.7317614Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-07T00:29:08.7318427Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-07T00:29:08.7318854Z         
2025-06-07T00:29:08.7319609Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-07T00:29:08.7320378Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-07T00:29:08.7321205Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-07T00:29:08.7322236Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-07T00:29:08.7323094Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-07T00:29:08.7323895Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-07T00:29:08.7324497Z         BadRequestDetail: 
2025-06-07T00:29:08.7324961Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.38s)
```
### 2025-06-08
#### PASS 7 seconds
```
2025-06-08T00:32:55.2541768Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-08T00:32:55.2542244Z --- PASS: TestMigEncryptionAtRest_basicAWS (7.28s)
```
### 2025-06-09
#### FAIL 3 seconds
```
2025-06-09T00:31:34.4996768Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-09T00:31:34.5009781Z   
2025-06-09T00:31:34.5010328Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-06-09T00:31:34.5010924Z         
2025-06-09T00:31:34.5011525Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-09T00:31:34.5011954Z         
2025-06-09T00:31:34.5012468Z           with mongodbatlas_encryption_at_rest.test,
2025-06-09T00:31:34.5013340Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-09T00:31:34.5014157Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-09T00:31:34.5014531Z         
2025-06-09T00:31:34.5015243Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-09T00:31:34.5015979Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-09T00:31:34.5016863Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-09T00:31:34.5017743Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-09T00:31:34.5018549Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-09T00:31:34.5019370Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-09T00:31:34.5019958Z         BadRequestDetail: 
2025-06-09T00:31:34.5020320Z --- FAIL: TestMigEncryptionAtRest_basicAWS (3.38s)
```
### 2025-06-10
#### FAIL a second
```
2025-06-10T00:38:08.6506201Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-10T00:38:08.6520090Z    test_name=TestMigEncryptionAtRest_basicAWS test_terraform_path=/home/runner/work/_temp/57c73f63-ecc2-4b98-b6f0-743232347351/terraform test_working_directory=/tmp/plugintest1007939198
2025-06-10T00:38:08.6521647Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-06-10T00:38:08.6522342Z         
2025-06-10T00:38:08.6522789Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-10T00:38:08.6523164Z         
2025-06-10T00:38:08.6523523Z           with mongodbatlas_encryption_at_rest.test,
2025-06-10T00:38:08.6524200Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-10T00:38:08.6524839Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-10T00:38:08.6525187Z         
2025-06-10T00:38:08.6525771Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-10T00:38:08.6526366Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-10T00:38:08.6527018Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-10T00:38:08.6527746Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-10T00:38:08.6528417Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-10T00:38:08.6529096Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-10T00:38:08.6529544Z         BadRequestDetail: 
2025-06-10T00:38:08.6529863Z --- FAIL: TestMigEncryptionAtRest_basicAWS (1.98s)
```
### 2025-06-11
#### FAIL 2 seconds
```
2025-06-11T00:29:03.2131187Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-11T00:29:03.2145646Z   
2025-06-11T00:29:03.2146545Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-06-11T00:29:03.2147349Z         
2025-06-11T00:29:03.2148176Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-11T00:29:03.2149027Z         
2025-06-11T00:29:03.2149665Z           with mongodbatlas_encryption_at_rest.test,
2025-06-11T00:29:03.2150906Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-11T00:29:03.2152139Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-11T00:29:03.2152758Z         
2025-06-11T00:29:03.2153861Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-11T00:29:03.2154961Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-11T00:29:03.2155719Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-11T00:29:03.2156460Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-11T00:29:03.2157158Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-11T00:29:03.2157852Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-11T00:29:03.2158300Z         BadRequestDetail: 
2025-06-11T00:29:03.2158627Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.30s)
```
#### PASS 7 seconds
```
2025-06-11T07:37:46.8872418Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-11T07:37:46.8872897Z --- PASS: TestMigEncryptionAtRest_basicAWS (7.08s)
```
### 2025-06-12
#### FAIL 2 seconds
```
2025-06-12T00:28:46.9478637Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-12T00:28:46.9496783Z   
2025-06-12T00:28:46.9497731Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-06-12T00:28:46.9498509Z         
2025-06-12T00:28:46.9499311Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-06-12T00:28:46.9500180Z         
2025-06-12T00:28:46.9500847Z           with mongodbatlas_encryption_at_rest.test,
2025-06-12T00:28:46.9502131Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-12T00:28:46.9503322Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-12T00:28:46.9503934Z         
2025-06-12T00:28:46.9505023Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-06-12T00:28:46.9505686Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-12T00:28:46.9506358Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-12T00:28:46.9507113Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-12T00:28:46.9507783Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-06-12T00:28:46.9508425Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-06-12T00:28:46.9508870Z         BadRequestDetail: 
2025-06-12T00:28:46.9509203Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.32s)
```
### 2025-06-13
#### PASS 8 seconds
```
2025-06-13T00:29:19.1193435Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-13T00:29:19.1193998Z --- PASS: TestMigEncryptionAtRest_basicAWS (8.87s)
```
### 2025-06-14
#### PASS 6 seconds
```
2025-06-14T00:28:31.8960413Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-14T00:28:31.8960902Z --- PASS: TestMigEncryptionAtRest_basicAWS (6.61s)
```
### 2025-06-15
#### PASS 7 seconds
```
2025-06-15T00:32:28.6570751Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-15T00:32:28.6571209Z --- PASS: TestMigEncryptionAtRest_basicAWS (7.25s)
```
### 2025-06-16
#### PASS 6 seconds
```
2025-06-16T00:30:37.4089231Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-16T00:30:37.4089833Z --- PASS: TestMigEncryptionAtRest_basicAWS (6.02s)
```
### 2025-06-17
#### PASS 8 seconds
```
2025-06-17T00:29:42.4658910Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-17T00:29:42.4659556Z --- PASS: TestMigEncryptionAtRest_basicAWS (8.69s)
```
### 2025-06-18
#### PASS 5 seconds
```
2025-06-18T00:29:30.7144577Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-18T00:29:30.7145187Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.64s)
```
### 2025-06-19
#### PASS 9 seconds
```
2025-06-19T00:30:02.2182366Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-19T00:30:02.2183103Z --- PASS: TestMigEncryptionAtRest_basicAWS (9.71s)
```
### 2025-06-20
#### PASS 5 seconds
```
2025-06-20T00:29:08.2485271Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-20T00:29:08.2485724Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.44s)
```
### 2025-06-21
#### PASS 5 seconds
```
2025-06-21T00:28:53.9908471Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-21T00:28:53.9912025Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.67s)
```
### 2025-06-22
#### PASS 5 seconds
```
2025-06-22T00:32:18.9319683Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-22T00:32:18.9320514Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.92s)
```
### 2025-06-23
#### PASS 8 seconds
```
2025-06-23T00:31:43.5067624Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-23T00:31:43.5068483Z --- PASS: TestMigEncryptionAtRest_basicAWS (8.63s)
```
### 2025-06-24
#### PASS 6 seconds
```
2025-06-24T00:29:46.1791586Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-24T00:29:46.1792432Z --- PASS: TestMigEncryptionAtRest_basicAWS (6.18s)
```
### 2025-06-25
#### PASS 6 seconds
```
2025-06-25T00:29:46.2831321Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-25T00:29:46.2831785Z --- PASS: TestMigEncryptionAtRest_basicAWS (6.59s)
```
### 2025-06-26
#### PASS 5 seconds
```
2025-06-26T00:29:34.7198263Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-06-26T00:29:34.7199382Z --- PASS: TestMigEncryptionAtRest_basicAWS (5.60s)
```