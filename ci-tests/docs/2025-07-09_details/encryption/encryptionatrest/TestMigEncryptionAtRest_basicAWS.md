# encryption/encryptionatrest/TestMigEncryptionAtRest_basicAWS Test Details
# Found 113 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 106) FAIL(x 7)
Success rate: 93.81%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 3.05s
2025-06-06 00:30 | dev | 2.03s
2025-06-07 00:29 | dev | 2.04s
2025-06-09 00:31 | dev | 3.04s
2025-06-10 00:38 | dev | 1.10s
2025-06-11 00:29 | dev | 2.03s
2025-06-12 00:28 | dev | 2.03s

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
#### PASS 6 seconds
### 2025-04-12
#### PASS 5 seconds
### 2025-04-13
#### PASS 5 seconds
### 2025-04-14
#### PASS 8 seconds
### 2025-04-15
#### PASS 9 seconds
### 2025-04-16
#### PASS 6 seconds
#### PASS 8 seconds
### 2025-04-17
#### PASS 5 seconds
### 2025-04-18
#### PASS 6 seconds
### 2025-04-19
#### PASS 5 seconds
### 2025-04-20
#### PASS 8 seconds
### 2025-04-21
#### PASS 5 seconds
### 2025-04-22
#### PASS 6 seconds
### 2025-04-23
#### PASS 6 seconds
### 2025-04-24
#### PASS 8 seconds
### 2025-04-25
#### PASS 5 seconds
### 2025-04-26
#### PASS 9 seconds
### 2025-04-27
#### PASS 5 seconds
### 2025-04-28
#### PASS 8 seconds
### 2025-04-29
#### PASS 5 seconds
### 2025-04-30
#### PASS 5 seconds
#### PASS 6 seconds
### 2025-05-01
#### PASS 8 seconds
#### PASS 5 seconds
#### PASS 8 seconds
#### PASS 5 seconds
#### PASS 8 seconds
#### PASS 5 seconds
#### PASS 10 seconds
### 2025-05-02
#### PASS 7 seconds
### 2025-05-03
#### PASS 8 seconds
### 2025-05-04
#### PASS 6 seconds
### 2025-05-05
#### PASS 9 seconds
### 2025-05-06
#### PASS 5 seconds
### 2025-05-07
#### PASS 5 seconds
### 2025-05-08
#### PASS 9 seconds
### 2025-05-09
#### PASS 5 seconds
### 2025-05-10
#### PASS 6 seconds
### 2025-05-11
#### FAIL 3 seconds
```
2025-05-11T00:30:02.0063189Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-05-11T00:30:02.0072860Z    test_name=TestMigEncryptionAtRest_basicAWS test_terraform_path=/home/runner/work/_temp/3267a76f-3abc-4c5b-9dba-02f9a63f1b49/terraform test_working_directory=/tmp/plugintest3030035336
2025-05-11T00:30:02.0074444Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:02.0074943Z         
2025-05-11T00:30:02.0075399Z         Error: error creating Encryption At Rest: 67978809c57f200e59f19f6a
2025-05-11T00:30:02.0075792Z         
2025-05-11T00:30:02.0076169Z           with mongodbatlas_encryption_at_rest.test,
2025-05-11T00:30:02.0076893Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-05-11T00:30:02.0077567Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-05-11T00:30:02.0078127Z         
2025-05-11T00:30:02.0078661Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:02.0079126Z         type
2025-05-11T00:30:02.0079432Z --- FAIL: TestMigEncryptionAtRest_basicAWS (3.46s)
```
### 2025-05-12
#### PASS 8 seconds
### 2025-05-13
#### PASS 8 seconds
#### PASS 5 seconds
### 2025-05-14
#### PASS 6 seconds
### 2025-05-15
#### PASS 6 seconds
### 2025-05-16
#### PASS 7 seconds
### 2025-05-17
#### PASS 5 seconds
### 2025-05-18
#### PASS 5 seconds
### 2025-05-19
#### PASS 6 seconds
### 2025-05-20
#### PASS 7 seconds
### 2025-05-21
#### PASS 9 seconds
### 2025-05-22
#### PASS 7 seconds
### 2025-05-23
#### PASS 8 seconds
### 2025-05-24
#### PASS 6 seconds
### 2025-05-25
#### PASS 5 seconds
### 2025-05-26
#### PASS 5 seconds
### 2025-05-27
#### PASS 7 seconds
### 2025-05-28
#### PASS 5 seconds
#### PASS 5 seconds
### 2025-05-29
#### PASS 7 seconds
### 2025-05-30
#### PASS 5 seconds
### 2025-05-31
#### PASS 7 seconds
### 2025-06-01
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 6 seconds
#### PASS 8 seconds
### 2025-06-02
#### PASS 8 seconds
#### PASS 5 seconds
#### PASS 9 seconds
### 2025-06-03
#### PASS 6 seconds
### 2025-06-04
#### PASS 9 seconds
### 2025-06-05
#### PASS 8 seconds
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
### 2025-06-14
#### PASS 6 seconds
### 2025-06-15
#### PASS 7 seconds
### 2025-06-16
#### PASS 6 seconds
### 2025-06-17
#### PASS 8 seconds
### 2025-06-18
#### PASS 5 seconds
### 2025-06-19
#### PASS 9 seconds
### 2025-06-20
#### PASS 5 seconds
### 2025-06-21
#### PASS 5 seconds
### 2025-06-22
#### PASS 5 seconds
### 2025-06-23
#### PASS 8 seconds
### 2025-06-24
#### PASS 6 seconds
### 2025-06-25
#### PASS 6 seconds
### 2025-06-26
#### PASS 5 seconds
### 2025-06-27
#### PASS 5 seconds
### 2025-06-28
#### PASS 8 seconds
### 2025-06-29
#### PASS 8 seconds
### 2025-06-30
#### PASS 9 seconds
### 2025-07-01
#### PASS 5 seconds
#### PASS 6 seconds
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 8 seconds
#### PASS 5 seconds
### 2025-07-02
#### PASS 6 seconds
### 2025-07-03
#### PASS 5 seconds
### 2025-07-04
#### PASS 5 seconds
### 2025-07-05
#### PASS 5 seconds
### 2025-07-06
#### PASS 5 seconds
### 2025-07-07
#### PASS 5 seconds
### 2025-07-08
#### PASS 5 seconds
### 2025-07-09
#### PASS 8 seconds