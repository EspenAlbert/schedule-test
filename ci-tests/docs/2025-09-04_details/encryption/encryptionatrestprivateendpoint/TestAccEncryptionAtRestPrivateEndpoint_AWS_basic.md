# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_AWS_basic Test Details
# Found 40 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 34) FAIL(x 6)
Success rate: 85.00%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-09 00:31](#error-2025-08-09t0031590000) |  | dev | flaky_500 | 0.04s
[2025-08-11 00:36](#error-2025-08-11t0036520000) |  | dev |  | 0.05s
[2025-08-16 00:57](#error-2025-08-16t0057440000) |  | dev | timeout | 1559.04s
[2025-08-28 00:31](#error-2025-08-28t0031150000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest | dev |  | 0.04s
[2025-08-29 01:10](#error-2025-08-29t0110100000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest | dev |  | 0.06s
[2025-09-01 01:10](#error-2025-09-01t0110370000) |  | dev | flaky_500 | 1201.09s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 5 minutes
- 2025-08-07 PASS 5 minutes
- 2025-08-08 PASS 5 minutes
- 2025-08-09

### Error 2025-08-09T00:31:59+00:00
```
2025-08-09T00:31:59.7867058Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-08-09T00:31:59.7881857Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/7f280610-5770-468d-97bc-03a5cb8e701b/terraform test_working_directory=/tmp/plugintest2331685008
2025-08-09T00:31:59.7882889Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-08-09T00:31:59.7883273Z         
2025-08-09T00:31:59.7883709Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-09T00:31:59.7884080Z         
2025-08-09T00:31:59.7884439Z           with mongodbatlas_encryption_at_rest.test,
2025-08-09T00:31:59.7885299Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-09T00:31:59.7885952Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-09T00:31:59.7886290Z         
2025-08-09T00:31:59.7886872Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-09T00:31:59.7887581Z         PATCH: HTTP 400 Bad Request (Error code:
2025-08-09T00:31:59.7888247Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-08-09T00:31:59.7888996Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-08-09T00:31:59.7889666Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-08-09T00:31:59.7890293Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-08-09T00:31:59.7890735Z         BadRequestDetail: 
2025-08-09T00:31:59.7891117Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.43s)
```

- 2025-08-10 PASS 10 minutes
- 2025-08-11

### Error 2025-08-11T00:36:52+00:00
```
2025-08-11T00:36:52.9089286Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-08-11T00:36:52.9115064Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/9e5ed541-4f77-4736-8b2c-34baf3ab72c1/terraform
2025-08-11T00:36:52.9116570Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-08-11T00:36:52.9117228Z         
2025-08-11T00:36:52.9117987Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-11T00:36:52.9118614Z         
2025-08-11T00:36:52.9119229Z           with mongodbatlas_encryption_at_rest.test,
2025-08-11T00:36:52.9120422Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-11T00:36:52.9121526Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-11T00:36:52.9122110Z         
2025-08-11T00:36:52.9123127Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-11T00:36:52.9124485Z         PATCH: HTTP 400 Bad Request (Error code:
2025-08-11T00:36:52.9125669Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-08-11T00:36:52.9127015Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-08-11T00:36:52.9128173Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-08-11T00:36:52.9129267Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-08-11T00:36:52.9130044Z         BadRequestDetail: 
2025-08-11T00:36:52.9130694Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.52s)
```

- 2025-08-12 PASS 6 minutes
- 2025-08-13 PASS 4 minutes
- 2025-08-14 PASS 9 minutes
- 2025-08-15 PASS 4 minutes
- 2025-08-16

### Error 2025-08-16T00:57:44+00:00
```
2025-08-16T00:57:44.0188703Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-08-16T00:57:44.0203665Z    test_step_number=3
2025-08-16T00:57:44.0204656Z     resource_test.go:129: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-16T00:57:44.0205475Z         
2025-08-16T00:57:44.0206178Z         Error: error when waiting for status transition in delete
2025-08-16T00:57:44.0206766Z         
2025-08-16T00:57:44.0207589Z         timeout while waiting for state to become 'DELETED, FAILED' (last state:
2025-08-16T00:57:44.0208576Z         'DELETING', timeout: 20m0s)
2025-08-16T00:57:44.0209288Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (1559.36s)
```

- 2025-08-17 PASS 5 minutes
- 2025-08-18 PASS 6 minutes
- 2025-08-19 PASS 5 minutes
- 2025-08-20
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-08-21 PASS 5 minutes
- 2025-08-22 PASS 4 minutes
- 2025-08-23 PASS 5 minutes
- 2025-08-24 PASS 4 minutes
- 2025-08-25 PASS 7 minutes
- 2025-08-26 PASS 10 minutes
- 2025-08-27 PASS 8 minutes
- 2025-08-28

### Error 2025-08-28T00:31:15+00:00
```
2025-08-28T00:31:15.7144019Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-08-28T00:31:15.7156288Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/bf041495-8cd3-4a30-8001-cbbbf1a40a16/terraform test_working_directory=/tmp/plugintest249606715
2025-08-28T00:31:15.7157321Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-08-28T00:31:15.7157699Z         
2025-08-28T00:31:15.7158359Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-28T00:31:15.7159005Z         
2025-08-28T00:31:15.7159377Z           with mongodbatlas_encryption_at_rest.test,
2025-08-28T00:31:15.7160077Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-28T00:31:15.7160727Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-28T00:31:15.7161112Z         
2025-08-28T00:31:15.7161710Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-28T00:31:15.7162455Z         PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-08-28T00:31:15.7163114Z         cannot assume the specified role (679243c15ec3be271d1d7952). Reason: Bad
2025-08-28T00:31:15.7163715Z         Request. Params: [679243c15ec3be271d1d7952], BadRequestDetail: 
2025-08-28T00:31:15.7164206Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.45s)
```

- 2025-08-29
  - FAIL a moment

### Error 2025-08-29T01:10:10+00:00
```
2025-08-29T01:10:10.5382472Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-08-29T01:10:10.5405555Z   
2025-08-29T01:10:10.5406260Z     resource_test.go:158: Step 1/3 error: Error running apply: exit status 1
2025-08-29T01:10:10.5406929Z         
2025-08-29T01:10:10.5407853Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-29T01:10:10.5408522Z         
2025-08-29T01:10:10.5409160Z           with mongodbatlas_encryption_at_rest.test,
2025-08-29T01:10:10.5410382Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-29T01:10:10.5411520Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-29T01:10:10.5412111Z         
2025-08-29T01:10:10.5413152Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-29T01:10:10.5414496Z         PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-08-29T01:10:10.5415645Z         cannot assume the specified role (679243c15ec3be271d1d7952). Reason: Bad
2025-08-29T01:10:10.5416694Z         Request. Params: [679243c15ec3be271d1d7952], BadRequestDetail: 
2025-08-29T01:10:10.5417763Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.56s)
```

  - PASS 4 minutes
  - PASS 5 minutes
- 2025-08-30 PASS 5 minutes
- 2025-08-31 PASS 4 minutes
- 2025-09-01
  - FAIL 20 minutes

### Error 2025-09-01T01:10:37+00:00
```
2025-09-01T01:10:37.5685740Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-09-01T01:10:37.5696783Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-09-01T01:10:37.5697358Z     resource_test.go:129: Step 2/3 error: Error running apply: exit status 1
2025-09-01T01:10:37.5697896Z         
2025-09-01T01:10:37.5698317Z         Error: error when waiting for status transition in creation
2025-09-01T01:10:37.5698683Z         
2025-09-01T01:10:37.5699223Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2025-09-01T01:10:37.5700263Z           on terraform_plugin_test.tf line 27, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2025-09-01T01:10:37.5701063Z           27: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2025-09-01T01:10:37.5701471Z         
2025-09-01T01:10:37.5701932Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2025-09-01T01:10:37.5702487Z         FAILED' (last state: 'INITIATING', timeout: 20m0s)
2025-09-01T01:10:37.5718166Z   
2025-09-01T01:10:37.5719226Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T01:10:37.5720300Z         
2025-09-01T01:10:37.5720914Z         Error: error when destroying resource
2025-09-01T01:10:37.5721500Z         
2025-09-01T01:10:37.5722225Z         error deleting Encryption At Rest: (6790e57a9b41416f5c216fee):
2025-09-01T01:10:37.5722999Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-09-01T01:10:37.5723624Z         PATCH: HTTP 400 Bad Request (Error code:
2025-09-01T01:10:37.5724185Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2025-09-01T01:10:37.5724835Z         Encryption at Rest cannot be disabled when private endpoints are present.
2025-09-01T01:10:37.5725394Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2025-09-01T01:10:37.5725881Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (1201.86s)
```

  - PASS 5 minutes
  - PASS 10 minutes
  - PASS 6 minutes
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 5 minutes
  - PASS 5 minutes
- 2025-09-02 PASS 4 minutes
- 2025-09-03 PASS 5 minutes
- 2025-09-04 PASS 5 minutes