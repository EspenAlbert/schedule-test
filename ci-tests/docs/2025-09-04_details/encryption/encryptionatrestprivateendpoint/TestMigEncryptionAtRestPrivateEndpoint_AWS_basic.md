# encryption/encryptionatrestprivateendpoint/TestMigEncryptionAtRestPrivateEndpoint_AWS_basic Test Details
# Found 40 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 5)
Success rate: 87.50%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-09 00:31](#error-2025-08-09t0031590000) |  | dev | 2.01s
[2025-08-11 00:36](#error-2025-08-11t0036520000) |  | dev | 2.00s
[2025-08-28 00:31](#error-2025-08-28t0031150000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest | dev | 1.05s
[2025-08-29 01:10](#error-2025-08-29t0110100000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest | dev | 1.09s
[2025-09-01 01:10](#error-2025-09-01t0110370000) |  | dev | 3.04s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 4 seconds
- 2025-08-07 PASS 16 seconds
- 2025-08-08 PASS 4 seconds
- 2025-08-09

### Error 2025-08-09T00:31:59+00:00
```
2025-08-09T00:31:59.7842081Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-08-09T00:31:59.7852891Z    test_step_number=1 test_name=TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-08-09T00:31:59.7853581Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-08-09T00:31:59.7854012Z         
2025-08-09T00:31:59.7854458Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-09T00:31:59.7854840Z         
2025-08-09T00:31:59.7855414Z           with mongodbatlas_encryption_at_rest.test,
2025-08-09T00:31:59.7856114Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-09T00:31:59.7856762Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-09T00:31:59.7857098Z         
2025-08-09T00:31:59.7857691Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-09T00:31:59.7858291Z         PATCH: HTTP 400 Bad Request (Error code:
2025-08-09T00:31:59.7858977Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-08-09T00:31:59.7859725Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-08-09T00:31:59.7860388Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-08-09T00:31:59.7861191Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-08-09T00:31:59.7861654Z         BadRequestDetail: 
2025-08-09T00:31:59.7862042Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (2.10s)
```

- 2025-08-10 PASS 5 seconds
- 2025-08-11

### Error 2025-08-11T00:36:52+00:00
```
2025-08-11T00:36:52.9052627Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-08-11T00:36:52.9067933Z    test_working_directory=/tmp/plugintest1640049974 test_step_number=1 test_name=TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-08-11T00:36:52.9069400Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-08-11T00:36:52.9070129Z         
2025-08-11T00:36:52.9070891Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-11T00:36:52.9071534Z         
2025-08-11T00:36:52.9072171Z           with mongodbatlas_encryption_at_rest.test,
2025-08-11T00:36:52.9073527Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-11T00:36:52.9074636Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-11T00:36:52.9075220Z         
2025-08-11T00:36:52.9076229Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-11T00:36:52.9077249Z         PATCH: HTTP 400 Bad Request (Error code:
2025-08-11T00:36:52.9078406Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-08-11T00:36:52.9079710Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-08-11T00:36:52.9080865Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-08-11T00:36:52.9082197Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-08-11T00:36:52.9083007Z         BadRequestDetail: 
2025-08-11T00:36:52.9083840Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (2.02s)
```

- 2025-08-12 PASS 4 seconds
- 2025-08-13 PASS 4 seconds
- 2025-08-14 PASS 5 seconds
- 2025-08-15 PASS 4 seconds
- 2025-08-16 PASS 5 seconds
- 2025-08-17 PASS 4 seconds
- 2025-08-18 PASS 5 seconds
- 2025-08-19 PASS 4 seconds
- 2025-08-20
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-08-21 PASS 4 seconds
- 2025-08-22 PASS 4 seconds
- 2025-08-23 PASS 5 seconds
- 2025-08-24 PASS 4 seconds
- 2025-08-25 PASS 5 seconds
- 2025-08-26 PASS 5 seconds
- 2025-08-27 PASS 5 seconds
- 2025-08-28

### Error 2025-08-28T00:31:15+00:00
```
2025-08-28T00:31:15.7121458Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-08-28T00:31:15.7132136Z    test_terraform_path=/home/runner/work/_temp/bf041495-8cd3-4a30-8001-cbbbf1a40a16/terraform test_working_directory=/tmp/plugintest3592342172
2025-08-28T00:31:15.7133525Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-08-28T00:31:15.7134152Z         
2025-08-28T00:31:15.7134704Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-28T00:31:15.7135167Z         
2025-08-28T00:31:15.7135611Z           with mongodbatlas_encryption_at_rest.test,
2025-08-28T00:31:15.7136476Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-28T00:31:15.7137280Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-28T00:31:15.7137684Z         
2025-08-28T00:31:15.7138460Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-28T00:31:15.7139214Z         PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-08-28T00:31:15.7139865Z         cannot assume the specified role (679243c15ec3be271d1d7952). Reason: Bad
2025-08-28T00:31:15.7140465Z         Request. Params: [679243c15ec3be271d1d7952], BadRequestDetail: 
2025-08-28T00:31:15.7140961Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (1.46s)
```

- 2025-08-29
  - FAIL a second

### Error 2025-08-29T01:10:10+00:00
```
2025-08-29T01:10:10.5347560Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-08-29T01:10:10.5361865Z   
2025-08-29T01:10:10.5362662Z     resource_migration_test.go:18: Step 1/2 error: Error running apply: exit status 1
2025-08-29T01:10:10.5363397Z         
2025-08-29T01:10:10.5364171Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-29T01:10:10.5364820Z         
2025-08-29T01:10:10.5365464Z           with mongodbatlas_encryption_at_rest.test,
2025-08-29T01:10:10.5366711Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-29T01:10:10.5367989Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-29T01:10:10.5368583Z         
2025-08-29T01:10:10.5369645Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-29T01:10:10.5370966Z         PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-08-29T01:10:10.5372112Z         cannot assume the specified role (679243c15ec3be271d1d7952). Reason: Bad
2025-08-29T01:10:10.5373173Z         Request. Params: [679243c15ec3be271d1d7952], BadRequestDetail: 
2025-08-29T01:10:10.5374015Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (1.95s)
```

  - PASS 4 seconds
  - PASS 5 seconds
- 2025-08-30 PASS 4 seconds
- 2025-08-31 PASS 4 seconds
- 2025-09-01
  - FAIL 3 seconds

### Error 2025-09-01T01:10:37+00:00
```
2025-09-01T01:10:37.5619013Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_AWS_basic
2025-09-01T01:10:37.5632479Z   
2025-09-01T01:10:37.5633180Z     resource_migration_test.go:18: Step 1/2 error: After applying this test step, the refresh plan was not empty.
2025-09-01T01:10:37.5633801Z         stdout
2025-09-01T01:10:37.5634059Z         
2025-09-01T01:10:37.5634880Z         Terraform used the selected providers to generate the following execution
2025-09-01T01:10:37.5635976Z         plan. Resource actions are indicated with the following symbols:
2025-09-01T01:10:37.5636557Z           ~ update in-place
2025-09-01T01:10:37.5636838Z         
2025-09-01T01:10:37.5637294Z         Terraform will perform the following actions:
2025-09-01T01:10:37.5637629Z         
2025-09-01T01:10:37.5638204Z           # mongodbatlas_encryption_at_rest.test will be updated in-place
2025-09-01T01:10:37.5638891Z           ~ resource "mongodbatlas_encryption_at_rest" "test" {
2025-09-01T01:10:37.5639582Z                 id                       = "6790e57a9b41416f5c216fee"
2025-09-01T01:10:37.5640325Z                 # (2 unchanged attributes hidden)
2025-09-01T01:10:37.5640645Z         
2025-09-01T01:10:37.5641085Z               ~ aws_kms_config {
2025-09-01T01:10:37.5641651Z                   + customer_master_key_id     = (sensitive value)
2025-09-01T01:10:37.5642332Z                   ~ enabled                    = false -> true
2025-09-01T01:10:37.5643057Z                   + role_id                    = "679243c15ec3be271d1d7952"
2025-09-01T01:10:37.5643830Z                   ~ valid                      = false -> (known after apply)
2025-09-01T01:10:37.5644528Z                     # (2 unchanged attributes hidden)
2025-09-01T01:10:37.5644896Z                 }
2025-09-01T01:10:37.5645442Z             }
2025-09-01T01:10:37.5645684Z         
2025-09-01T01:10:37.5646154Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-09-01T01:10:37.5646621Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_AWS_basic (3.42s)
```

  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-09-02 PASS 5 seconds
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 4 seconds