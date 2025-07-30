# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_AWS_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 24) FAIL(x 15)
Success rate: 61.54%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-14 01:11](#error-2025-07-14t0111250000) |  | dev | timeout | 1201.08s
[2025-07-15 00:30](#error-2025-07-15t0030210000) |  | dev |  | 0.04s
[2025-07-16 00:30](#error-2025-07-16t0030020000) |  | dev |  | 0.05s
[2025-07-17 00:30](#error-2025-07-17t0030350000) |  | dev |  | 0.04s
[2025-07-18 00:30](#error-2025-07-18t0030110000) |  | dev |  | 0.04s
[2025-07-19 00:29](#error-2025-07-19t0029240000) |  | dev |  | 0.06s
[2025-07-21 00:32](#error-2025-07-21t0032470000) |  | dev |  | 0.04s
[2025-07-23 00:56](#error-2025-07-23t0056280000) |  | dev | timeout | 1201.07s
[2025-07-23 14:09](#error-2025-07-23t1409370000) |  | dev |  | 0.04s
[2025-07-24 00:34](#error-2025-07-24t0034520000) |  | dev | unknown | 0.05s
[2025-07-25 00:34](#error-2025-07-25t0034470000) |  | dev | flaky_500 | 0.04s
[2025-07-26 00:35](#error-2025-07-26t0035330000) |  | dev |  | 0.05s
[2025-07-28 00:36](#error-2025-07-28t0036110000) |  | dev |  | 0.04s
[2025-07-29 00:37](#error-2025-07-29t0037090000) |  | dev | flaky_500 | 0.05s
[2025-07-30 00:34](#error-2025-07-30t0034480000) |  | dev | dangling_resource | 0.04s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 5 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 4 minutes
- 2025-07-02 PASS 4 minutes
- 2025-07-03 PASS 5 minutes
- 2025-07-04 PASS 5 minutes
- 2025-07-05 PASS 4 minutes
- 2025-07-06 PASS 4 minutes
- 2025-07-07 PASS 4 minutes
- 2025-07-08 PASS 4 minutes
- 2025-07-09 PASS 5 minutes
- 2025-07-10
  - PASS 5 minutes
  - PASS 4 minutes
- 2025-07-11 PASS 4 minutes
- 2025-07-12 PASS 5 minutes
- 2025-07-13 PASS 4 minutes
- 2025-07-14

### Error 2025-07-14T01:11:25+00:00
```
2025-07-14T01:11:25.4217058Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-14T01:11:25.4234312Z    test_step_number=2 test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-14T01:11:25.4235532Z     resource_test.go:129: Step 2/3 error: Error running apply: exit status 1
2025-07-14T01:11:25.4236211Z         
2025-07-14T01:11:25.4237075Z         Error: error when waiting for status transition in creation
2025-07-14T01:11:25.4237683Z         
2025-07-14T01:11:25.4238455Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2025-07-14T01:11:25.4239916Z           on terraform_plugin_test.tf line 27, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2025-07-14T01:11:25.4241276Z           27: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2025-07-14T01:11:25.4241954Z         
2025-07-14T01:11:25.4242744Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2025-07-14T01:11:25.4243681Z         FAILED' (last state: 'INITIATING', timeout: 20m0s)
2025-07-14T01:11:25.4264947Z    test_step_number=2 test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-14T01:11:25.4266170Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T01:11:25.4267406Z         
2025-07-14T01:11:25.4268017Z         Error: error when destroying resource
2025-07-14T01:11:25.4268389Z         
2025-07-14T01:11:25.4269014Z         error deleting Encryption At Rest: (6790e57a9b41416f5c216fee):
2025-07-14T01:11:25.4269960Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-14T01:11:25.4270726Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-14T01:11:25.4271437Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2025-07-14T01:11:25.4272267Z         Encryption at Rest cannot be disabled when private endpoints are present.
2025-07-14T01:11:25.4273032Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-14T01:11:25.4273641Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (1201.82s)
```

- 2025-07-15

### Error 2025-07-15T00:30:21+00:00
```
2025-07-15T00:30:21.0727105Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-15T00:30:21.0742284Z   
2025-07-15T00:30:21.0742685Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-15T00:30:21.0743069Z         
2025-07-15T00:30:21.0743493Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-15T00:30:21.0743865Z         
2025-07-15T00:30:21.0744211Z           with mongodbatlas_encryption_at_rest.test,
2025-07-15T00:30:21.0744870Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-15T00:30:21.0745516Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-15T00:30:21.0745849Z         
2025-07-15T00:30:21.0746412Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-15T00:30:21.0747004Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-15T00:30:21.0747630Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-15T00:30:21.0748345Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-15T00:30:21.0749191Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-15T00:30:21.0749807Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-15T00:30:21.0750252Z         BadRequestDetail: 
2025-07-15T00:30:21.0750629Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.43s)
```

- 2025-07-16

### Error 2025-07-16T00:30:02+00:00
```
2025-07-16T00:30:02.6379416Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-16T00:30:02.6405018Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-16T00:30:02.6406061Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-16T00:30:02.6406751Z         
2025-07-16T00:30:02.6407524Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-16T00:30:02.6408177Z         
2025-07-16T00:30:02.6408809Z           with mongodbatlas_encryption_at_rest.test,
2025-07-16T00:30:02.6410249Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-16T00:30:02.6411406Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-16T00:30:02.6412005Z         
2025-07-16T00:30:02.6413054Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-16T00:30:02.6414111Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-16T00:30:02.6415307Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-16T00:30:02.6416649Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-16T00:30:02.6417852Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-16T00:30:02.6418987Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-16T00:30:02.6419935Z         BadRequestDetail: 
2025-07-16T00:30:02.6420632Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.48s)
```

- 2025-07-17

### Error 2025-07-17T00:30:35+00:00
```
2025-07-17T00:30:35.6128199Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-17T00:30:35.6143531Z   
2025-07-17T00:30:35.6143939Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-17T00:30:35.6144322Z         
2025-07-17T00:30:35.6144756Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-17T00:30:35.6145125Z         
2025-07-17T00:30:35.6145488Z           with mongodbatlas_encryption_at_rest.test,
2025-07-17T00:30:35.6146176Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-17T00:30:35.6146812Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-17T00:30:35.6147264Z         
2025-07-17T00:30:35.6147837Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-17T00:30:35.6148421Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-17T00:30:35.6149073Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-17T00:30:35.6149805Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-17T00:30:35.6150464Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-17T00:30:35.6151091Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-17T00:30:35.6151534Z         BadRequestDetail: 
2025-07-17T00:30:35.6151928Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.41s)
```

- 2025-07-18

### Error 2025-07-18T00:30:11+00:00
```
2025-07-18T00:30:11.2132821Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-18T00:30:11.2156078Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/613949e7-b3b4-4a83-bdbb-8a489b91e39a/terraform test_working_directory=/tmp/plugintest483860133 test_step_number=1
2025-07-18T00:30:11.2157743Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-18T00:30:11.2158553Z         
2025-07-18T00:30:11.2159310Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-18T00:30:11.2159941Z         
2025-07-18T00:30:11.2160556Z           with mongodbatlas_encryption_at_rest.test,
2025-07-18T00:30:11.2161784Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-18T00:30:11.2162534Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-18T00:30:11.2163062Z         
2025-07-18T00:30:11.2164088Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-18T00:30:11.2165114Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-18T00:30:11.2166312Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-18T00:30:11.2167385Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-18T00:30:11.2168527Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-18T00:30:11.2169647Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-18T00:30:11.2170416Z         BadRequestDetail: 
2025-07-18T00:30:11.2171059Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.45s)
```

- 2025-07-19

### Error 2025-07-19T00:29:24+00:00
```
2025-07-19T00:29:24.4960399Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-19T00:29:24.4979364Z   
2025-07-19T00:29:24.4980032Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-19T00:29:24.4980954Z         
2025-07-19T00:29:24.4981551Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-19T00:29:24.4981937Z         
2025-07-19T00:29:24.4982309Z           with mongodbatlas_encryption_at_rest.test,
2025-07-19T00:29:24.4982992Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-19T00:29:24.4983626Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-19T00:29:24.4983977Z         
2025-07-19T00:29:24.4984565Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-19T00:29:24.4985161Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-19T00:29:24.4985817Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-19T00:29:24.4986552Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-19T00:29:24.4987208Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-19T00:29:24.4987839Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-19T00:29:24.4988286Z         BadRequestDetail: 
2025-07-19T00:29:24.4988676Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.57s)
```

- 2025-07-20 PASS 5 minutes
- 2025-07-21
  - FAIL a moment

### Error 2025-07-21T00:32:47+00:00
```
2025-07-21T00:32:47.0793458Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-21T00:32:47.0808874Z   
2025-07-21T00:32:47.0809276Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-21T00:32:47.0809660Z         
2025-07-21T00:32:47.0810095Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-21T00:32:47.0810465Z         
2025-07-21T00:32:47.0810826Z           with mongodbatlas_encryption_at_rest.test,
2025-07-21T00:32:47.0811506Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-21T00:32:47.0812144Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-21T00:32:47.0812487Z         
2025-07-21T00:32:47.0813062Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-21T00:32:47.0813659Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-21T00:32:47.0814318Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-21T00:32:47.0815053Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-21T00:32:47.0815719Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-21T00:32:47.0816346Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-21T00:32:47.0816904Z         BadRequestDetail: 
2025-07-21T00:32:47.0817292Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.44s)
```

  - PASS 3 minutes
- 2025-07-22 PASS 4 minutes
- 2025-07-23
  - FAIL 20 minutes

### Error 2025-07-23T00:56:28+00:00
```
2025-07-23T00:56:28.4302327Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-23T00:56:28.4322709Z    test_terraform_path=/home/runner/work/_temp/7662a462-cdeb-49c8-b5d7-80e95d88bbee/terraform test_working_directory=/tmp/plugintest4282970424 test_step_number=2
2025-07-23T00:56:28.4324312Z     resource_test.go:129: Step 2/3 error: Error running apply: exit status 1
2025-07-23T00:56:28.4324987Z         
2025-07-23T00:56:28.4325722Z         Error: error when waiting for status transition in creation
2025-07-23T00:56:28.4326359Z         
2025-07-23T00:56:28.4327311Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2025-07-23T00:56:28.4328834Z           on terraform_plugin_test.tf line 27, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2025-07-23T00:56:28.4330252Z           27: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2025-07-23T00:56:28.4331188Z         
2025-07-23T00:56:28.4332020Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2025-07-23T00:56:28.4332982Z         FAILED' (last state: 'INITIATING', timeout: 20m0s)
2025-07-23T00:56:28.4354977Z   
2025-07-23T00:56:28.4355854Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-23T00:56:28.4356654Z         
2025-07-23T00:56:28.4357361Z         Error: error when destroying resource
2025-07-23T00:56:28.4357896Z         
2025-07-23T00:56:28.4358644Z         error deleting Encryption At Rest: (6790e57a9b41416f5c216fee):
2025-07-23T00:56:28.4360136Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-23T00:56:28.4361194Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-23T00:56:28.4362174Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2025-07-23T00:56:28.4363329Z         Encryption at Rest cannot be disabled when private endpoints are present.
2025-07-23T00:56:28.4364330Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2025-07-23T00:56:28.4365151Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (1201.73s)
```

  - PASS 3 minutes
  - FAIL a moment

### Error 2025-07-23T14:09:37+00:00
```
2025-07-23T14:09:37.0781067Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-23T14:09:37.0796224Z   
2025-07-23T14:09:37.0796618Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-23T14:09:37.0797004Z         
2025-07-23T14:09:37.0797435Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-23T14:09:37.0797805Z         
2025-07-23T14:09:37.0798164Z           with mongodbatlas_encryption_at_rest.test,
2025-07-23T14:09:37.0798835Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-23T14:09:37.0799467Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-23T14:09:37.0799803Z         
2025-07-23T14:09:37.0800561Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-23T14:09:37.0801278Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-23T14:09:37.0801929Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-23T14:09:37.0802658Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-23T14:09:37.0803309Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-23T14:09:37.0803925Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-23T14:09:37.0804371Z         BadRequestDetail: 
2025-07-23T14:09:37.0804748Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.40s)
```

- 2025-07-24

### Error 2025-07-24T00:34:52+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-24T00:34:52.543000+00:00-TestAccEncryptionAtRestPrivateEndpoint_AWS_basic',confidence=1.0,ts_when='5 days ago')

```
2025-07-24T00:34:52.5438207Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-24T00:34:52.5454521Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/66c90480-bd73-4878-893b-343a425a6884/terraform test_working_directory=/tmp/plugintest821198968 test_step_number=1
2025-07-24T00:34:52.5455608Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-24T00:34:52.5456006Z         
2025-07-24T00:34:52.5456642Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-24T00:34:52.5457030Z         
2025-07-24T00:34:52.5457392Z           with mongodbatlas_encryption_at_rest.test,
2025-07-24T00:34:52.5458060Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-24T00:34:52.5458687Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-24T00:34:52.5459025Z         
2025-07-24T00:34:52.5459600Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-24T00:34:52.5460399Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-24T00:34:52.5461059Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-24T00:34:52.5461788Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-24T00:34:52.5462438Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-24T00:34:52.5463051Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-24T00:34:52.5463499Z         BadRequestDetail: 
2025-07-24T00:34:52.5463885Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.52s)
```

- 2025-07-25

### Error 2025-07-25T00:34:47+00:00
```
2025-07-25T00:34:47.0023164Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-25T00:34:47.0038151Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/5000daac-ea34-4be0-a5df-11dd88691586/terraform
2025-07-25T00:34:47.0039018Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-25T00:34:47.0039403Z         
2025-07-25T00:34:47.0039838Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-25T00:34:47.0040204Z         
2025-07-25T00:34:47.0040562Z           with mongodbatlas_encryption_at_rest.test,
2025-07-25T00:34:47.0041244Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-25T00:34:47.0041889Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-25T00:34:47.0042231Z         
2025-07-25T00:34:47.0042813Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-25T00:34:47.0043542Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-25T00:34:47.0044406Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-25T00:34:47.0045152Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-25T00:34:47.0045811Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-25T00:34:47.0046446Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-25T00:34:47.0046886Z         BadRequestDetail: 
2025-07-25T00:34:47.0047265Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.45s)
```

- 2025-07-26

### Error 2025-07-26T00:35:33+00:00
```
2025-07-26T00:35:33.8008593Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-26T00:35:33.8035332Z   
2025-07-26T00:35:33.8036199Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-26T00:35:33.8036866Z         
2025-07-26T00:35:33.8037613Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-26T00:35:33.8038245Z         
2025-07-26T00:35:33.8038864Z           with mongodbatlas_encryption_at_rest.test,
2025-07-26T00:35:33.8040060Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-26T00:35:33.8041164Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-26T00:35:33.8041730Z         
2025-07-26T00:35:33.8042744Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-26T00:35:33.8043936Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-26T00:35:33.8045105Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-26T00:35:33.8046589Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-26T00:35:33.8047741Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-26T00:35:33.8048833Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-26T00:35:33.8049610Z         BadRequestDetail: 
2025-07-26T00:35:33.8050262Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.53s)
```

- 2025-07-27 PASS 3 minutes
- 2025-07-28

### Error 2025-07-28T00:36:11+00:00
```
2025-07-28T00:36:11.1644272Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-28T00:36:11.1671171Z   
2025-07-28T00:36:11.1672066Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-28T00:36:11.1672759Z         
2025-07-28T00:36:11.1673557Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-28T00:36:11.1674202Z         
2025-07-28T00:36:11.1674828Z           with mongodbatlas_encryption_at_rest.test,
2025-07-28T00:36:11.1676046Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-28T00:36:11.1677165Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-28T00:36:11.1677771Z         
2025-07-28T00:36:11.1678787Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-28T00:36:11.1679982Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-28T00:36:11.1681192Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-28T00:36:11.1682678Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-28T00:36:11.1683839Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-28T00:36:11.1684961Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-28T00:36:11.1685747Z         BadRequestDetail: 
2025-07-28T00:36:11.1686463Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.38s)
```

- 2025-07-29

### Error 2025-07-29T00:37:09+00:00
```
2025-07-29T00:37:09.8707456Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-29T00:37:09.8734810Z    test_working_directory=/tmp/plugintest3774728278 test_step_number=1 test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/00b9d767-46f2-4d95-bee5-f98bc223bd9c/terraform
2025-07-29T00:37:09.8736953Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-29T00:37:09.8737655Z         
2025-07-29T00:37:09.8738451Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-29T00:37:09.8739111Z         
2025-07-29T00:37:09.8739740Z           with mongodbatlas_encryption_at_rest.test,
2025-07-29T00:37:09.8740948Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-29T00:37:09.8742095Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-29T00:37:09.8742690Z         
2025-07-29T00:37:09.8743742Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-29T00:37:09.8744995Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-29T00:37:09.8746191Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-29T00:37:09.8747705Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-29T00:37:09.8748904Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-29T00:37:09.8750055Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-29T00:37:09.8750861Z         BadRequestDetail: 
2025-07-29T00:37:09.8751536Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.51s)
```

- 2025-07-30

### Error 2025-07-30T00:34:48+00:00
GoTestErrorClassification(error_class='dangling_resource',author='human',run_id='2025-07-30T00:34:48.526000+00:00-TestAccEncryptionAtRestPrivateEndpoint_AWS_basic',confidence=1.0,ts_when='2 minutes ago')

```
2025-07-30T00:34:48.5260197Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-07-30T00:34:48.5276326Z   
2025-07-30T00:34:48.5276735Z     resource_test.go:129: Step 1/3 error: Error running apply: exit status 1
2025-07-30T00:34:48.5277116Z         
2025-07-30T00:34:48.5277560Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-30T00:34:48.5277923Z         
2025-07-30T00:34:48.5278275Z           with mongodbatlas_encryption_at_rest.test,
2025-07-30T00:34:48.5278959Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-30T00:34:48.5279596Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-30T00:34:48.5279931Z         
2025-07-30T00:34:48.5280506Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-30T00:34:48.5281212Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-30T00:34:48.5281864Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-30T00:34:48.5282590Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-30T00:34:48.5283245Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-30T00:34:48.5283866Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-30T00:34:48.5284303Z         BadRequestDetail: 
2025-07-30T00:34:48.5284674Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (0.42s)
```
