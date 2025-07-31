# encryption/encryptionatrestprivateendpoint/TestMigEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 34 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-15 00:30](#error-2025-07-15t0030210000) |  | dev | 1.06s
[2025-07-16 00:30](#error-2025-07-16t0030020000) |  | dev | 1.07s
[2025-07-17 00:30](#error-2025-07-17t0030350000) |  | dev | 1.08s
[2025-07-18 00:30](#error-2025-07-18t0030110000) |  | dev | 2.01s
[2025-07-19 00:29](#error-2025-07-19t0029240000) |  | dev | 1.09s
[2025-07-21 00:32](#error-2025-07-21t0032470000) |  | dev | 1.06s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 6 seconds
- 2025-07-03 PASS 7 seconds
- 2025-07-04 PASS 6 seconds
- 2025-07-05 PASS 7 seconds
- 2025-07-06 PASS 5 seconds
- 2025-07-07 PASS 7 seconds
- 2025-07-08 PASS 9 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-07-11 PASS 7 seconds
- 2025-07-12 PASS 5 seconds
- 2025-07-13 PASS 5 seconds
- 2025-07-14 PASS 8 seconds
- 2025-07-15

### Error 2025-07-15T00:30:21+00:00
```
2025-07-15T00:30:21.0664511Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-15T00:30:21.0673498Z    test_step_number=1 test_name=TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-15T00:30:21.0674138Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-07-15T00:30:21.0674547Z         
2025-07-15T00:30:21.0674974Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-07-15T00:30:21.0675346Z         
2025-07-15T00:30:21.0675691Z           with mongodbatlas_encryption_at_rest.test,
2025-07-15T00:30:21.0676351Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-15T00:30:21.0676968Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-15T00:30:21.0677305Z         
2025-07-15T00:30:21.0677863Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-15T00:30:21.0678442Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-15T00:30:21.0679256Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-15T00:30:21.0679975Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-15T00:30:21.0680614Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-07-15T00:30:21.0681216Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-07-15T00:30:21.0681650Z         BadRequestDetail: 
2025-07-15T00:30:21.0682028Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (1.60s)
```

- 2025-07-16

### Error 2025-07-16T00:30:02+00:00
```
2025-07-16T00:30:02.6274248Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-16T00:30:02.6287352Z   
2025-07-16T00:30:02.6288072Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-07-16T00:30:02.6288772Z         
2025-07-16T00:30:02.6289510Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-07-16T00:30:02.6290268Z         
2025-07-16T00:30:02.6290863Z           with mongodbatlas_encryption_at_rest.test,
2025-07-16T00:30:02.6292024Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-16T00:30:02.6293108Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-16T00:30:02.6293668Z         
2025-07-16T00:30:02.6294656Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-16T00:30:02.6295651Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-16T00:30:02.6296786Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-16T00:30:02.6298066Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-16T00:30:02.6299197Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-07-16T00:30:02.6300492Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-07-16T00:30:02.6301244Z         BadRequestDetail: 
2025-07-16T00:30:02.6301900Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (1.73s)
```

- 2025-07-17

### Error 2025-07-17T00:30:35+00:00
```
2025-07-17T00:30:35.6064483Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-17T00:30:35.6074213Z   
2025-07-17T00:30:35.6074660Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-07-17T00:30:35.6075083Z         
2025-07-17T00:30:35.6075524Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-07-17T00:30:35.6075896Z         
2025-07-17T00:30:35.6076261Z           with mongodbatlas_encryption_at_rest.test,
2025-07-17T00:30:35.6077160Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-17T00:30:35.6077825Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-17T00:30:35.6078171Z         
2025-07-17T00:30:35.6078784Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-17T00:30:35.6079490Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-17T00:30:35.6080141Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-17T00:30:35.6080879Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-17T00:30:35.6081536Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-07-17T00:30:35.6082150Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-07-17T00:30:35.6082590Z         BadRequestDetail: 
2025-07-17T00:30:35.6082987Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (1.80s)
```

- 2025-07-18

### Error 2025-07-18T00:30:11+00:00
```
2025-07-18T00:30:11.2036984Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-18T00:30:11.2050246Z    test_terraform_path=/home/runner/work/_temp/613949e7-b3b4-4a83-bdbb-8a489b91e39a/terraform test_name=TestMigEncryptionAtRestPrivateEndpoint_Azure_basic test_working_directory=/tmp/plugintest3149028817 test_step_number=1
2025-07-18T00:30:11.2052077Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-07-18T00:30:11.2052806Z         
2025-07-18T00:30:11.2053565Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-07-18T00:30:11.2054214Z         
2025-07-18T00:30:11.2054833Z           with mongodbatlas_encryption_at_rest.test,
2025-07-18T00:30:11.2055577Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-18T00:30:11.2056589Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-18T00:30:11.2057190Z         
2025-07-18T00:30:11.2058345Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-18T00:30:11.2059382Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-18T00:30:11.2060505Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-18T00:30:11.2061321Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-18T00:30:11.2062488Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-07-18T00:30:11.2063579Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-07-18T00:30:11.2064342Z         BadRequestDetail: 
2025-07-18T00:30:11.2064991Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (2.08s)
```

- 2025-07-19

### Error 2025-07-19T00:29:24+00:00
```
2025-07-19T00:29:24.4895746Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-19T00:29:24.4905340Z   
2025-07-19T00:29:24.4905781Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-07-19T00:29:24.4906193Z         
2025-07-19T00:29:24.4906627Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-07-19T00:29:24.4907004Z         
2025-07-19T00:29:24.4907362Z           with mongodbatlas_encryption_at_rest.test,
2025-07-19T00:29:24.4908040Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-19T00:29:24.4908680Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-19T00:29:24.4909022Z         
2025-07-19T00:29:24.4909602Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-19T00:29:24.4910345Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-19T00:29:24.4911032Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-19T00:29:24.4911766Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-19T00:29:24.4912408Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-07-19T00:29:24.4913026Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-07-19T00:29:24.4913464Z         BadRequestDetail: 
2025-07-19T00:29:24.4913856Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (1.89s)
```

- 2025-07-20 PASS 9 seconds
- 2025-07-21
  - FAIL a second

### Error 2025-07-21T00:32:47+00:00
```
2025-07-21T00:32:47.0711181Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-07-21T00:32:47.0739361Z   
2025-07-21T00:32:47.0739837Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-07-21T00:32:47.0740265Z         
2025-07-21T00:32:47.0740711Z         Error: error creating Encryption At Rest: 66d83bcc1fe1835125c52422
2025-07-21T00:32:47.0741087Z         
2025-07-21T00:32:47.0741451Z           with mongodbatlas_encryption_at_rest.test,
2025-07-21T00:32:47.0742136Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-21T00:32:47.0742777Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-21T00:32:47.0743120Z         
2025-07-21T00:32:47.0743713Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/66d83bcc1fe1835125c52422/encryptionAtRest
2025-07-21T00:32:47.0744320Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-21T00:32:47.0744982Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-21T00:32:47.0745725Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-21T00:32:47.0746560Z         endpoints. Remove private endpoints in region(s) US_EAST to disable
2025-07-21T00:32:47.0747187Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST],
2025-07-21T00:32:47.0747630Z         BadRequestDetail: 
2025-07-21T00:32:47.0748022Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (1.57s)
```

  - PASS 5 seconds
- 2025-07-22 PASS 7 seconds
- 2025-07-23
  - PASS 8 seconds
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-07-24 PASS 7 seconds
- 2025-07-25 PASS 7 seconds
- 2025-07-26 PASS 8 seconds
- 2025-07-27 PASS 7 seconds
- 2025-07-28 PASS 7 seconds
- 2025-07-29 PASS 8 seconds
- 2025-07-30 PASS 6 seconds
- 2025-07-31 PASS 7 seconds