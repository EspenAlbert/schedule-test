# encryption/encryptionatrestprivateendpoint/TestMigEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 106) FAIL(x 7)
Success rate: 93.81%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030050000) |  | qa | 2.09s
[2025-06-06 00:30](#error-2025-06-06t0030270000) |  | dev | 1.07s
[2025-06-07 00:29](#error-2025-06-07t0029080000) |  | dev | 2.01s
[2025-06-09 00:31](#error-2025-06-09t0031340000) |  | dev | 7.03s
[2025-06-10 00:38](#error-2025-06-10t0038080000) |  | dev | 1.06s
[2025-06-11 00:29](#error-2025-06-11t0029030000) |  | dev | 1.07s
[2025-06-12 00:28](#error-2025-06-12t0028460000) |  | dev | 1.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 5 seconds
- 2025-04-13 PASS 5 seconds
- 2025-04-14 PASS 8 seconds
- 2025-04-15 PASS 8 seconds
- 2025-04-16
  - PASS 6 seconds
  - PASS 11 seconds
- 2025-04-17 PASS 5 seconds
- 2025-04-18 PASS 6 seconds
- 2025-04-19 PASS 8 seconds
- 2025-04-20 PASS 8 seconds
- 2025-04-21 PASS 8 seconds
- 2025-04-22 PASS 9 seconds
- 2025-04-23 PASS 6 seconds
- 2025-04-24 PASS 10 seconds
- 2025-04-25 PASS 5 seconds
- 2025-04-26 PASS 11 seconds
- 2025-04-27 PASS 5 seconds
- 2025-04-28 PASS 10 seconds
- 2025-04-29 PASS 7 seconds
- 2025-04-30
  - PASS 8 seconds
  - PASS 6 seconds
- 2025-05-01
  - PASS 11 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 10 seconds
- 2025-05-02 PASS 9 seconds
- 2025-05-03 PASS 8 seconds
- 2025-05-04 PASS 6 seconds
- 2025-05-05 PASS 8 seconds
- 2025-05-06 PASS 5 seconds
- 2025-05-07 PASS 7 seconds
- 2025-05-08 PASS 8 seconds
- 2025-05-09 PASS 7 seconds
- 2025-05-10 PASS 6 seconds
- 2025-05-11

### Error 2025-05-11T00:30:05+00:00
```
2025-05-11T00:30:05.4983566Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-05-11T00:30:05.4996372Z   
2025-05-11T00:30:05.4997298Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:05.4998365Z         
2025-05-11T00:30:05.4999235Z         Error: error creating Encryption At Rest: 66d96b8a0fc5b2543fdf6dbd
2025-05-11T00:30:05.4999964Z         
2025-05-11T00:30:05.5000658Z           with mongodbatlas_encryption_at_rest.test,
2025-05-11T00:30:05.5001899Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-05-11T00:30:05.5003019Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-05-11T00:30:05.5003617Z         
2025-05-11T00:30:05.5004471Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:30:05.5005195Z         type
2025-05-11T00:30:05.5005796Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (2.94s)
```

- 2025-05-12 PASS 10 seconds
- 2025-05-13
  - PASS 11 seconds
  - PASS 8 seconds
- 2025-05-14 PASS 6 seconds
- 2025-05-15 PASS 6 seconds
- 2025-05-16 PASS 7 seconds
- 2025-05-17 PASS 5 seconds
- 2025-05-18 PASS 8 seconds
- 2025-05-19 PASS 6 seconds
- 2025-05-20 PASS 7 seconds
- 2025-05-21 PASS 8 seconds
- 2025-05-22 PASS 7 seconds
- 2025-05-23 PASS 8 seconds
- 2025-05-24 PASS 6 seconds
- 2025-05-25 PASS 9 seconds
- 2025-05-26 PASS 8 seconds
- 2025-05-27 PASS 9 seconds
- 2025-05-28
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-05-29 PASS 7 seconds
- 2025-05-30 PASS 5 seconds
- 2025-05-31 PASS 7 seconds
- 2025-06-01
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 8 seconds
- 2025-06-02
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 9 seconds
- 2025-06-03 PASS 6 seconds
- 2025-06-04 PASS 8 seconds
- 2025-06-05 PASS 8 seconds
- 2025-06-06

### Error 2025-06-06T00:30:27+00:00
```
2025-06-06T00:30:27.5434275Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-06T00:30:27.5450197Z    test_working_directory=/tmp/plugintest764449796 test_name=TestMigEncryptionAtRestPrivateEndpoint_Azure_basic test_terraform_path=/home/runner/work/_temp/7db9c9d1-cd42-48f9-9aa7-2a0c5a3f762f/terraform test_step_number=1
2025-06-06T00:30:27.5452391Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-06-06T00:30:27.5453120Z         
2025-06-06T00:30:27.5453894Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-06-06T00:30:27.5454538Z         
2025-06-06T00:30:27.5455166Z           with mongodbatlas_encryption_at_rest.test,
2025-06-06T00:30:27.5456546Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-06T00:30:27.5457677Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-06T00:30:27.5458243Z         
2025-06-06T00:30:27.5459274Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-06T00:30:27.5460314Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-06T00:30:27.5461651Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-06T00:30:27.5462965Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-06T00:30:27.5464115Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-06-06T00:30:27.5465207Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-06-06T00:30:27.5465977Z         BadRequestDetail: 
2025-06-06T00:30:27.5466642Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (1.68s)
```

- 2025-06-07

### Error 2025-06-07T00:29:08+00:00
```
2025-06-07T00:29:08.7385782Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-07T00:29:08.7395686Z    test_name=TestMigEncryptionAtRestPrivateEndpoint_Azure_basic test_terraform_path=/home/runner/work/_temp/06a0f4ae-f3dc-40b5-9553-6ac9b0b7480d/terraform test_working_directory=/tmp/plugintest1770227972
2025-06-07T00:29:08.7396831Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-06-07T00:29:08.7397303Z         
2025-06-07T00:29:08.7397810Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-06-07T00:29:08.7398241Z         
2025-06-07T00:29:08.7398651Z           with mongodbatlas_encryption_at_rest.test,
2025-06-07T00:29:08.7399388Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-07T00:29:08.7400078Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-07T00:29:08.7400466Z         
2025-06-07T00:29:08.7401097Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-07T00:29:08.7401739Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-07T00:29:08.7402671Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-07T00:29:08.7403461Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-07T00:29:08.7404168Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-06-07T00:29:08.7404846Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-06-07T00:29:08.7405347Z         BadRequestDetail: 
2025-06-07T00:29:08.7405800Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (2.09s)
```

- 2025-06-08 PASS 9 seconds
- 2025-06-09

### Error 2025-06-09T00:31:34+00:00
```
2025-06-09T00:31:34.5057963Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-09T00:31:34.5067079Z    test_step_number=1 test_working_directory=/tmp/plugintest4281969174
2025-06-09T00:31:34.5067696Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-06-09T00:31:34.5068124Z         
2025-06-09T00:31:34.5068569Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-06-09T00:31:34.5068955Z         
2025-06-09T00:31:34.5069323Z           with mongodbatlas_encryption_at_rest.test,
2025-06-09T00:31:34.5070013Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-09T00:31:34.5070807Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-09T00:31:34.5071158Z         
2025-06-09T00:31:34.5071746Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-09T00:31:34.5072344Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-09T00:31:34.5073003Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-09T00:31:34.5073752Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-09T00:31:34.5074421Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-06-09T00:31:34.5075051Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-06-09T00:31:34.5075501Z         BadRequestDetail: 
2025-06-09T00:31:34.5075902Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (7.34s)
```

- 2025-06-10

### Error 2025-06-10T00:38:08+00:00
```
2025-06-10T00:38:08.6563193Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-10T00:38:08.6572481Z   
2025-06-10T00:38:08.6572912Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-06-10T00:38:08.6573323Z         
2025-06-10T00:38:08.6573757Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-06-10T00:38:08.6574131Z         
2025-06-10T00:38:08.6574488Z           with mongodbatlas_encryption_at_rest.test,
2025-06-10T00:38:08.6575161Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-10T00:38:08.6575800Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-10T00:38:08.6576135Z         
2025-06-10T00:38:08.6576707Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-10T00:38:08.6577295Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-10T00:38:08.6577949Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-10T00:38:08.6578679Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-10T00:38:08.6579327Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-06-10T00:38:08.6579940Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-06-10T00:38:08.6580380Z         BadRequestDetail: 
2025-06-10T00:38:08.6580773Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (1.59s)
```

- 2025-06-11
  - FAIL a second

### Error 2025-06-11T00:29:03+00:00
```
2025-06-11T00:29:03.2195560Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-11T00:29:03.2204248Z    test_name=TestMigEncryptionAtRestPrivateEndpoint_Azure_basic test_terraform_path=/home/runner/work/_temp/1384a036-623a-46ad-8451-77d6c5d0803e/terraform
2025-06-11T00:29:03.2205137Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-06-11T00:29:03.2205539Z         
2025-06-11T00:29:03.2205986Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-06-11T00:29:03.2206352Z         
2025-06-11T00:29:03.2206704Z           with mongodbatlas_encryption_at_rest.test,
2025-06-11T00:29:03.2207379Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-11T00:29:03.2208021Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-11T00:29:03.2208354Z         
2025-06-11T00:29:03.2209132Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-11T00:29:03.2209727Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-11T00:29:03.2210368Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-11T00:29:03.2211099Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-11T00:29:03.2211750Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-06-11T00:29:03.2212351Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-06-11T00:29:03.2212788Z         BadRequestDetail: 
2025-06-11T00:29:03.2213167Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (1.74s)
```

  - PASS 7 seconds
- 2025-06-12

### Error 2025-06-12T00:28:46+00:00
```
2025-06-12T00:28:46.9543056Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-06-12T00:28:46.9552334Z   
2025-06-12T00:28:46.9552771Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-06-12T00:28:46.9553184Z         
2025-06-12T00:28:46.9553616Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-06-12T00:28:46.9553988Z         
2025-06-12T00:28:46.9554348Z           with mongodbatlas_encryption_at_rest.test,
2025-06-12T00:28:46.9555050Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-06-12T00:28:46.9555689Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-06-12T00:28:46.9556025Z         
2025-06-12T00:28:46.9556614Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-06-12T00:28:46.9557207Z         PATCH: HTTP 400 Bad Request (Error code:
2025-06-12T00:28:46.9557863Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-06-12T00:28:46.9558604Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-06-12T00:28:46.9559259Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-06-12T00:28:46.9560037Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-06-12T00:28:46.9560480Z         BadRequestDetail: 
2025-06-12T00:28:46.9560993Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (1.79s)
```

- 2025-06-13 PASS 9 seconds
- 2025-06-14 PASS 6 seconds
- 2025-06-15 PASS 7 seconds
- 2025-06-16 PASS 6 seconds
- 2025-06-17 PASS 8 seconds
- 2025-06-18 PASS 5 seconds
- 2025-06-19 PASS 8 seconds
- 2025-06-20 PASS 5 seconds
- 2025-06-21 PASS 6 seconds
- 2025-06-22 PASS 5 seconds
- 2025-06-23 PASS 8 seconds
- 2025-06-24 PASS 6 seconds
- 2025-06-25 PASS 6 seconds
- 2025-06-26 PASS 5 seconds
- 2025-06-27 PASS 8 seconds
- 2025-06-28 PASS 8 seconds
- 2025-06-29 PASS 8 seconds
- 2025-06-30 PASS 8 seconds
- 2025-07-01
  - PASS 7 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 5 seconds
- 2025-07-02 PASS 6 seconds
- 2025-07-03 PASS 7 seconds
- 2025-07-04 PASS 6 seconds
- 2025-07-05 PASS 7 seconds
- 2025-07-06 PASS 5 seconds
- 2025-07-07 PASS 7 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10 PASS 6 seconds