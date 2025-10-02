# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 25) FAIL(x 22)
Success rate: 53.19%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:50](#error-2025-09-07t0050490000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams/test-acc-tf-s-4047930990064627307/connections | qa |  | 0.10s
[2025-09-08 09:53](#error-2025-09-08t0953420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2b5341d8a49877630ee/streams/test-acc-tf-s-1822128021936268327/connections | qa | flaky_500 | 32.06s
[2025-09-12 00:44](#error-2025-09-12t0044470000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c368d5239ada3657ef5ba5/streams/test-acc-tf-s-6119353925232917711/connections/kafka-conn-ssl | dev |  | 1.08s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c43d444485797b214ed/streams/test-acc-tf-s-1571941844326212806/connections | qa |  | 0.09s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams/test-acc-tf-s-5005804337291291222/connections | qa | flaky_500 | 1.00s
[2025-09-17 00:52](#error-2025-09-17t0052240000) | VALIDATION_ERROR /api/atlas/v2/groups/68ca006869d8c04598b624a8/streams/test-acc-tf-s-4193166429928927466/connections/kafka-conn-ssl | dev |  | 176.09s
[2025-09-18 00:54](#error-2025-09-18t0054170000) | VALIDATION_ERROR /api/atlas/v2/groups/68cb51b674534c1ffb06a578/streams/test-acc-tf-s-3502526453090486885/connections/kafka-conn-ssl | dev | flaky_500 | 166.09s
[2025-09-19 00:48](#error-2025-09-19t0048210000) | VALIDATION_ERROR /api/atlas/v2/groups/68cca36c2bbf0b2797d5de9d/streams/test-acc-tf-s-3275964936115309495/connections/kafka-conn-ssl | dev |  | 185.05s
[2025-09-20 00:44](#error-2025-09-20t0044450000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68cdf493d78c355a113588a0/streams/test-acc-tf-s-320417300866518122/connections/kafka-conn-ssl | dev |  | 1.05s
[2025-09-22 00:50](#error-2025-09-22t0050090000) | VALIDATION_ERROR /api/atlas/v2/groups/68d09882e965b05ddeb676c0/streams/test-acc-tf-s-3227416594353979564/connections/kafka-conn-ssl | dev | flaky_500 | 167.09s
[2025-09-23 00:46](#error-2025-09-23t0046570000) | VALIDATION_ERROR /api/atlas/v2/groups/68d1e95ea895df0d27e694dc/streams/test-acc-tf-s-2429861209096068710/connections/kafka-conn-ssl | dev |  | 164.07s
[2025-09-24 00:48](#error-2025-09-24t0048490000) | VALIDATION_ERROR /api/atlas/v2/groups/68d33ad5f1337d3c4efe8a30/streams/test-acc-tf-s-4994766804749352644/connections/kafka-conn-ssl | dev |  | 174.10s
[2025-09-25 01:39](#error-2025-09-25t0139080000) | VALIDATION_ERROR /api/atlas/v2/groups/68d48c54ac285026f1fd092c/streams/test-acc-tf-s-7249668804199471548/connections/kafka-conn-ssl | dev |  | 166.04s
[2025-09-26 00:48](#error-2025-09-26t0048160000) | VALIDATION_ERROR /api/atlas/v2/groups/68d5ddddf8df4c6a73fc333b/streams/test-acc-tf-s-8113659077103869597/connections/kafka-conn-ssl | dev |  | 185.01s
[2025-09-27 00:51](#error-2025-09-27t0051060000) | VALIDATION_ERROR /api/atlas/v2/groups/68d72f3be7030775ece20355/streams/test-acc-tf-s-8658604451623586714/connections/kafka-conn-ssl | dev |  | 167.01s
[2025-09-28 00:53](#error-2025-09-28t0053000000) | VALIDATION_ERROR /api/atlas/v2/groups/68d88187ca428e2ad3dbbb00/streams/test-acc-tf-s-2508984362356056008/connections/kafka-conn-ssl | qa |  | 175.04s
[2025-09-29 00:53](#error-2025-09-29t0053320000) | VALIDATION_ERROR /api/atlas/v2/groups/68d9d2d097534351000fd020/streams/test-acc-tf-s-8168174255387156915/connections/kafka-conn-ssl | dev |  | 166.05s
[2025-09-29 07:27](#error-2025-09-29t0727480000) | VALIDATION_ERROR /api/atlas/v2/groups/68da30d49ae0ff3b55cf3d0c/streams/test-acc-tf-s-5428533652522328334/connections/kafka-conn-ssl | dev |  | 167.10s
[2025-09-30 00:48](#error-2025-09-30t0048540000) | VALIDATION_ERROR /api/atlas/v2/groups/68db23fdac96227c18dcc25c/streams/test-acc-tf-s-2405848501451643190/connections/kafka-conn-ssl | dev |  | 166.03s
[2025-09-30 07:47](#error-2025-09-30t0747480000) | VALIDATION_ERROR /api/atlas/v2/groups/68db86dec882bb707c96bc71/streams/test-acc-tf-s-2656607281265535769/connections/kafka-conn-ssl | dev |  | 164.02s
[2025-09-30 08:04](#error-2025-09-30t0804490000) | VALIDATION_ERROR /api/atlas/v2/groups/68db89cbbb7b8c0d70349d74/streams/test-acc-tf-s-9097683267964206690/connections/kafka-conn-ssl | qa |  | 167.01s
[2025-10-02 01:34](#error-2025-10-02t0134200000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68ddc6a2d2c00355743c1ebe/streams/test-acc-tf-s-9153079988273370027/connections/kafka-conn-ssl | dev |  | 1.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 2 minutes
- 2025-09-04 PASS 2 minutes
- 2025-09-05 PASS 3 minutes
- 2025-09-06 PASS 3 minutes
- 2025-09-07

### Error 2025-09-07T00:50:49+00:00
```
2025-09-07T00:50:49.0132415Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-07T00:50:49.0138478Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-07T00:50:49.0186280Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-07T00:50:49.0186887Z     resource_stream_connection_test.go:153: Step 1/3 error: Error running apply: exit status 1
2025-09-07T00:50:49.0187313Z         
2025-09-07T00:50:49.0187595Z         Error: error creating resource
2025-09-07T00:50:49.0187863Z         
2025-09-07T00:50:49.0188211Z           with mongodbatlas_stream_connection.test,
2025-09-07T00:50:49.0188872Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-09-07T00:50:49.0189477Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-07T00:50:49.0189796Z         
2025-09-07T00:50:49.0190561Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams/test-acc-tf-s-4047930990064627307/connections
2025-09-07T00:50:49.0191426Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-07T00:50:49.0192021Z         Detail: Stream instance for project 68bcd1d5df5af52d2d4d5831 and name
2025-09-07T00:50:49.0192639Z         test-acc-tf-s-4047930990064627307 not found. Reason: Not Found. Params:
2025-09-07T00:50:49.0193206Z         [68bcd1d5df5af52d2d4d5831 test-acc-tf-s-4047930990064627307],
2025-09-07T00:50:49.0193596Z         BadRequestDetail: 
2025-09-07T00:50:49.0201992Z   
2025-09-07T00:50:49.0226919Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (0.99s)
```

- 2025-09-08
  - PASS 3 minutes
  - FAIL 32 seconds

### Error 2025-09-08T09:53:42+00:00
```
2025-09-08T09:53:42.3754741Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-08T09:53:42.3765375Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-08T09:53:42.3820623Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-08T09:53:42.3821715Z     resource_stream_connection_test.go:153: Step 1/3 error: Error running apply: exit status 1
2025-09-08T09:53:42.3822426Z         
2025-09-08T09:53:42.3822900Z         Error: error creating resource
2025-09-08T09:53:42.3823342Z         
2025-09-08T09:53:42.3823914Z           with mongodbatlas_stream_connection.test,
2025-09-08T09:53:42.3825053Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-09-08T09:53:42.3826096Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-08T09:53:42.3826623Z         
2025-09-08T09:53:42.3828130Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b5341d8a49877630ee/streams/test-acc-tf-s-1822128021936268327/connections
2025-09-08T09:53:42.3829607Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:53:42.3830611Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:53:42.3831278Z         BadRequestDetail: 
2025-09-08T09:53:42.3831811Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (32.56s)
```

  - PASS 2 minutes
- 2025-09-09 PASS 2 minutes
- 2025-09-10 PASS 3 minutes
- 2025-09-11 PASS 2 minutes
- 2025-09-12
  - FAIL a second

### Error 2025-09-12T00:44:47+00:00
```
2025-09-12T00:44:47.2275213Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-12T00:44:47.2287624Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-12T00:44:47.2315538Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-12T00:44:47.2316593Z     resource_stream_connection_test.go:153: Step 1/3 error: Error running apply: exit status 1
2025-09-12T00:44:47.2317354Z         
2025-09-12T00:44:47.2317838Z         Error: error fetching resource
2025-09-12T00:44:47.2318309Z         
2025-09-12T00:44:47.2318942Z           with data.mongodbatlas_stream_connection.test,
2025-09-12T00:44:47.2320126Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_connection" "test":
2025-09-12T00:44:47.2321163Z           39: data "mongodbatlas_stream_connection" "test" {
2025-09-12T00:44:47.2321865Z         
2025-09-12T00:44:47.2323462Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c368d5239ada3657ef5ba5/streams/test-acc-tf-s-6119353925232917711/connections/kafka-conn-ssl
2025-09-12T00:44:47.2325141Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-09-12T00:44:47.2326357Z         Detail: Stream connection with name kafka-conn-ssl for project
2025-09-12T00:44:47.2327460Z         68c368d5239ada3657ef5ba5 and name test-acc-tf-s-6119353925232917711 not
2025-09-12T00:44:47.2328596Z         found. Reason: Not Found. Params: [kafka-conn-ssl 68c368d5239ada3657ef5ba5
2025-09-12T00:44:47.2329544Z         test-acc-tf-s-6119353925232917711], BadRequestDetail: 
2025-09-12T00:44:47.2330379Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (1.79s)
```

  - PASS 2 minutes
- 2025-09-13 PASS 3 minutes
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.7895391Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-14T00:45:38.7901354Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-14T00:45:38.7937581Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-14T00:45:38.7938534Z     resource_stream_connection_test.go:153: Step 1/3 error: Error running apply: exit status 1
2025-09-14T00:45:38.7938967Z         
2025-09-14T00:45:38.7939242Z         Error: error creating resource
2025-09-14T00:45:38.7939503Z         
2025-09-14T00:45:38.7939831Z           with mongodbatlas_stream_connection.test,
2025-09-14T00:45:38.7940701Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-09-14T00:45:38.7941305Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-14T00:45:38.7941615Z         
2025-09-14T00:45:38.7942376Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ed/streams/test-acc-tf-s-1571941844326212806/connections
2025-09-14T00:45:38.7943205Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.7943909Z         Detail: Stream instance for project 68c60c43d444485797b214ed and name
2025-09-14T00:45:38.7944522Z         test-acc-tf-s-1571941844326212806 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.7945090Z         [68c60c43d444485797b214ed test-acc-tf-s-1571941844326212806],
2025-09-14T00:45:38.7945469Z         BadRequestDetail: 
2025-09-14T00:45:38.7958395Z    test_terraform_path=/home/runner/work/_temp/4e309555-d1ed-43c4-85d0-4622947e7d4a/terraform test_name=TestAccStreamStreamConnection_https
2025-09-14T00:45:38.7967282Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (0.87s)
```

- 2025-09-15
  - PASS 2 minutes
  - PASS 3 minutes
  - FAIL a second

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0045088Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-15T06:36:28.0055378Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-15T06:36:28.0133217Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-15T06:36:28.0134292Z     resource_stream_connection_test.go:153: Step 1/3 error: Error running apply: exit status 1
2025-09-15T06:36:28.0135063Z         
2025-09-15T06:36:28.0135754Z         Error: error creating resource
2025-09-15T06:36:28.0136261Z         
2025-09-15T06:36:28.0136882Z           with mongodbatlas_stream_connection.test,
2025-09-15T06:36:28.0138120Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-09-15T06:36:28.0139249Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-15T06:36:28.0139816Z         
2025-09-15T06:36:28.0141274Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams/test-acc-tf-s-5005804337291291222/connections
2025-09-15T06:36:28.0142858Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0143959Z         Detail: Stream instance for project 68c7b04bfe60767b7f9b139f and name
2025-09-15T06:36:28.0145109Z         test-acc-tf-s-5005804337291291222 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0146354Z         [68c7b04bfe60767b7f9b139f test-acc-tf-s-5005804337291291222],
2025-09-15T06:36:28.0147069Z         BadRequestDetail: 
2025-09-15T06:36:28.0162069Z   
2025-09-15T06:36:28.0205235Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (1.04s)
```

- 2025-09-16 PASS 2 minutes
- 2025-09-17

### Error 2025-09-17T00:52:24+00:00
```
2025-09-17T00:52:24.9346377Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-17T00:52:24.9355037Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-17T00:52:24.9375914Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-17T00:52:24.9376762Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-17T00:52:24.9377503Z         
2025-09-17T00:52:24.9377888Z         Error: error updating resource
2025-09-17T00:52:24.9378156Z         
2025-09-17T00:52:24.9378545Z           with mongodbatlas_stream_connection.test,
2025-09-17T00:52:24.9379243Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-17T00:52:24.9379929Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-17T00:52:24.9380332Z         
2025-09-17T00:52:24.9381259Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ca006869d8c04598b624a8/streams/test-acc-tf-s-4193166429928927466/connections/kafka-conn-ssl
2025-09-17T00:52:24.9382225Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-17T00:52:24.9382923Z         request content produced the validation error: The project id
2025-09-17T00:52:24.9383613Z         68ca006869d8c04598b624a8 and region US_EAST_1 does not have a VPC Peering
2025-09-17T00:52:24.9384179Z         connection. Reason: Bad Request. Params: [The project id
2025-09-17T00:52:24.9384955Z         68ca006869d8c04598b624a8 and region US_EAST_1 does not have a VPC Peering
2025-09-17T00:52:24.9385526Z         connection], BadRequestDetail: 
2025-09-17T00:52:24.9385961Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (176.89s)
```

- 2025-09-18

### Error 2025-09-18T00:54:17+00:00
```
2025-09-18T00:54:17.1464549Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-18T00:54:17.1472251Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-18T00:54:17.1494366Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-18T00:54:17.1495091Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-18T00:54:17.1495614Z         
2025-09-18T00:54:17.1495882Z         Error: error updating resource
2025-09-18T00:54:17.1496141Z         
2025-09-18T00:54:17.1496463Z           with mongodbatlas_stream_connection.test,
2025-09-18T00:54:17.1497111Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-18T00:54:17.1497702Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-18T00:54:17.1498012Z         
2025-09-18T00:54:17.1498856Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68cb51b674534c1ffb06a578/streams/test-acc-tf-s-3502526453090486885/connections/kafka-conn-ssl
2025-09-18T00:54:17.1499729Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-18T00:54:17.1500471Z         request content produced the validation error: The project id
2025-09-18T00:54:17.1501059Z         68cb51b674534c1ffb06a578 and region US_EAST_1 does not have a VPC Peering
2025-09-18T00:54:17.1501609Z         connection. Reason: Bad Request. Params: [The project id
2025-09-18T00:54:17.1502167Z         68cb51b674534c1ffb06a578 and region US_EAST_1 does not have a VPC Peering
2025-09-18T00:54:17.1502612Z         connection], BadRequestDetail: 
2025-09-18T00:54:17.1502968Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (166.86s)
```

- 2025-09-19

### Error 2025-09-19T00:48:21+00:00
```
2025-09-19T00:48:21.3495825Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-19T00:48:21.3503099Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-19T00:48:21.3521553Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-19T00:48:21.3522883Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-19T00:48:21.3523723Z         
2025-09-19T00:48:21.3524016Z         Error: error updating resource
2025-09-19T00:48:21.3524283Z         
2025-09-19T00:48:21.3524616Z           with mongodbatlas_stream_connection.test,
2025-09-19T00:48:21.3525408Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-19T00:48:21.3526011Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-19T00:48:21.3526318Z         
2025-09-19T00:48:21.3527170Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68cca36c2bbf0b2797d5de9d/streams/test-acc-tf-s-3275964936115309495/connections/kafka-conn-ssl
2025-09-19T00:48:21.3528047Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-19T00:48:21.3528612Z         request content produced the validation error: The project id
2025-09-19T00:48:21.3529216Z         68cca36c2bbf0b2797d5de9d and region US_EAST_1 does not have a VPC Peering
2025-09-19T00:48:21.3529779Z         connection. Reason: Bad Request. Params: [The project id
2025-09-19T00:48:21.3530600Z         68cca36c2bbf0b2797d5de9d and region US_EAST_1 does not have a VPC Peering
2025-09-19T00:48:21.3531070Z         connection], BadRequestDetail: 
2025-09-19T00:48:21.3531426Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (185.48s)
```

- 2025-09-20

### Error 2025-09-20T00:44:45+00:00
```
2025-09-20T00:44:45.0349616Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-20T00:44:45.0355504Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-20T00:44:45.0391616Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-20T00:44:45.0392208Z     resource_stream_connection_test.go:192: Step 1/3 error: Error running apply: exit status 1
2025-09-20T00:44:45.0392636Z         
2025-09-20T00:44:45.0392906Z         Error: error fetching resource
2025-09-20T00:44:45.0393235Z         
2025-09-20T00:44:45.0393616Z           with data.mongodbatlas_stream_connection.test,
2025-09-20T00:44:45.0394242Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_connection" "test":
2025-09-20T00:44:45.0394800Z           39: data "mongodbatlas_stream_connection" "test" {
2025-09-20T00:44:45.0395090Z         
2025-09-20T00:44:45.0395920Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68cdf493d78c355a113588a0/streams/test-acc-tf-s-320417300866518122/connections/kafka-conn-ssl
2025-09-20T00:44:45.0396802Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-09-20T00:44:45.0397597Z         Detail: Stream connection with name kafka-conn-ssl for project
2025-09-20T00:44:45.0398214Z         68cdf493d78c355a113588a0 and name test-acc-tf-s-320417300866518122 not found.
2025-09-20T00:44:45.0398819Z         Reason: Not Found. Params: [kafka-conn-ssl 68cdf493d78c355a113588a0
2025-09-20T00:44:45.0399446Z         test-acc-tf-s-320417300866518122], BadRequestDetail: 
2025-09-20T00:44:45.0399853Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (1.48s)
```

- 2025-09-21 PASS 2 minutes
- 2025-09-22

### Error 2025-09-22T00:50:09+00:00
```
2025-09-22T00:50:09.7070662Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-22T00:50:09.7076966Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-22T00:50:09.7147270Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-22T00:50:09.7148004Z     resource_stream_connection_test.go:192: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-22T00:50:09.7148525Z         
2025-09-22T00:50:09.7148794Z         Error: error updating resource
2025-09-22T00:50:09.7149051Z         
2025-09-22T00:50:09.7149375Z           with mongodbatlas_stream_connection.test,
2025-09-22T00:50:09.7150023Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-22T00:50:09.7150620Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-22T00:50:09.7150923Z         
2025-09-22T00:50:09.7151911Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d09882e965b05ddeb676c0/streams/test-acc-tf-s-3227416594353979564/connections/kafka-conn-ssl
2025-09-22T00:50:09.7153988Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-22T00:50:09.7154588Z         request content produced the validation error: The project id
2025-09-22T00:50:09.7155182Z         68d09882e965b05ddeb676c0 and region US_EAST_1 does not have a VPC Peering
2025-09-22T00:50:09.7155737Z         connection. Reason: Bad Request. Params: [The project id
2025-09-22T00:50:09.7156314Z         68d09882e965b05ddeb676c0 and region US_EAST_1 does not have a VPC Peering
2025-09-22T00:50:09.7156770Z         connection], BadRequestDetail: 
2025-09-22T00:50:09.7157134Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (167.91s)
```

- 2025-09-23

### Error 2025-09-23T00:46:57+00:00
```
2025-09-23T00:46:57.4276084Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-23T00:46:57.4283189Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-23T00:46:57.4323223Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-23T00:46:57.4324011Z     resource_stream_connection_test.go:192: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-23T00:46:57.4342034Z         
2025-09-23T00:46:57.4342517Z         Error: error updating resource
2025-09-23T00:46:57.4342981Z         
2025-09-23T00:46:57.4343526Z           with mongodbatlas_stream_connection.test,
2025-09-23T00:46:57.4344543Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-23T00:46:57.4345405Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-23T00:46:57.4345733Z         
2025-09-23T00:46:57.4346601Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d1e95ea895df0d27e694dc/streams/test-acc-tf-s-2429861209096068710/connections/kafka-conn-ssl
2025-09-23T00:46:57.4347496Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-23T00:46:57.4348206Z         request content produced the validation error: The project id
2025-09-23T00:46:57.4348809Z         68d1e95ea895df0d27e694dc and region US_EAST_1 does not have a VPC Peering
2025-09-23T00:46:57.4349366Z         connection. Reason: Bad Request. Params: [The project id
2025-09-23T00:46:57.4349934Z         68d1e95ea895df0d27e694dc and region US_EAST_1 does not have a VPC Peering
2025-09-23T00:46:57.4350389Z         connection], BadRequestDetail: 
2025-09-23T00:46:57.4350758Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (164.73s)
```

- 2025-09-24

### Error 2025-09-24T00:48:49+00:00
```
2025-09-24T00:48:49.7262492Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-24T00:48:49.7274753Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-24T00:48:49.7344503Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-24T00:48:49.7345809Z     resource_stream_connection_test.go:192: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-24T00:48:49.7346752Z         
2025-09-24T00:48:49.7347485Z         Error: error updating resource
2025-09-24T00:48:49.7347945Z         
2025-09-24T00:48:49.7348729Z           with mongodbatlas_stream_connection.test,
2025-09-24T00:48:49.7349947Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-24T00:48:49.7351055Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-24T00:48:49.7351594Z         
2025-09-24T00:48:49.7353150Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d33ad5f1337d3c4efe8a30/streams/test-acc-tf-s-4994766804749352644/connections/kafka-conn-ssl
2025-09-24T00:48:49.7354936Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-24T00:48:49.7355955Z         request content produced the validation error: The project id
2025-09-24T00:48:49.7357215Z         68d33ad5f1337d3c4efe8a30 and region US_EAST_1 does not have a VPC Peering
2025-09-24T00:48:49.7358238Z         connection. Reason: Bad Request. Params: [The project id
2025-09-24T00:48:49.7359328Z         68d33ad5f1337d3c4efe8a30 and region US_EAST_1 does not have a VPC Peering
2025-09-24T00:48:49.7360160Z         connection], BadRequestDetail: 
2025-09-24T00:48:49.7360791Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (174.96s)
```

- 2025-09-25

### Error 2025-09-25T01:39:08+00:00
```
2025-09-25T01:39:08.8296340Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-25T01:39:08.8308111Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-25T01:39:08.8379214Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-25T01:39:08.8380528Z     resource_stream_connection_test.go:192: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-25T01:39:08.8381468Z         
2025-09-25T01:39:08.8381949Z         Error: error updating resource
2025-09-25T01:39:08.8382413Z         
2025-09-25T01:39:08.8383184Z           with mongodbatlas_stream_connection.test,
2025-09-25T01:39:08.8384594Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-25T01:39:08.8385709Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-25T01:39:08.8386449Z         
2025-09-25T01:39:08.8388032Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d48c54ac285026f1fd092c/streams/test-acc-tf-s-7249668804199471548/connections/kafka-conn-ssl
2025-09-25T01:39:08.8389649Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-25T01:39:08.8390674Z         request content produced the validation error: The project id
2025-09-25T01:39:08.8391769Z         68d48c54ac285026f1fd092c and region US_EAST_1 does not have a VPC Peering
2025-09-25T01:39:08.8392779Z         connection. Reason: Bad Request. Params: [The project id
2025-09-25T01:39:08.8393986Z         68d48c54ac285026f1fd092c and region US_EAST_1 does not have a VPC Peering
2025-09-25T01:39:08.8394813Z         connection], BadRequestDetail: 
2025-09-25T01:39:08.8395442Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (166.40s)
```

- 2025-09-26

### Error 2025-09-26T00:48:16+00:00
```
2025-09-26T00:48:16.2209884Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-26T00:48:16.2216731Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-26T00:48:16.2283392Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-26T00:48:16.2284153Z     resource_stream_connection_test.go:192: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-26T00:48:16.2284672Z         
2025-09-26T00:48:16.2284970Z         Error: error updating resource
2025-09-26T00:48:16.2285232Z         
2025-09-26T00:48:16.2285602Z           with mongodbatlas_stream_connection.test,
2025-09-26T00:48:16.2286538Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-26T00:48:16.2287217Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-26T00:48:16.2287534Z         
2025-09-26T00:48:16.2288692Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d5ddddf8df4c6a73fc333b/streams/test-acc-tf-s-8113659077103869597/connections/kafka-conn-ssl
2025-09-26T00:48:16.2289940Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-26T00:48:16.2290555Z         request content produced the validation error: The project id
2025-09-26T00:48:16.2291216Z         68d5ddddf8df4c6a73fc333b and region US_EAST_1 does not have a VPC Peering
2025-09-26T00:48:16.2291825Z         connection. Reason: Bad Request. Params: [The project id
2025-09-26T00:48:16.2292456Z         68d5ddddf8df4c6a73fc333b and region US_EAST_1 does not have a VPC Peering
2025-09-26T00:48:16.2292937Z         connection], BadRequestDetail: 
2025-09-26T00:48:16.2293304Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (185.15s)
```

- 2025-09-27

### Error 2025-09-27T00:51:06+00:00
```
2025-09-27T00:51:06.5699591Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-27T00:51:06.5706070Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-27T00:51:06.5725885Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-27T00:51:06.5726821Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-27T00:51:06.5727348Z         
2025-09-27T00:51:06.5727616Z         Error: error updating resource
2025-09-27T00:51:06.5727880Z         
2025-09-27T00:51:06.5728200Z           with mongodbatlas_stream_connection.test,
2025-09-27T00:51:06.5728950Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-27T00:51:06.5729545Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-27T00:51:06.5729847Z         
2025-09-27T00:51:06.5730684Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d72f3be7030775ece20355/streams/test-acc-tf-s-8658604451623586714/connections/kafka-conn-ssl
2025-09-27T00:51:06.5731551Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-27T00:51:06.5732106Z         request content produced the validation error: The project id
2025-09-27T00:51:06.5732697Z         68d72f3be7030775ece20355 and region US_EAST_1 does not have a VPC Peering
2025-09-27T00:51:06.5733239Z         connection. Reason: Bad Request. Params: [The project id
2025-09-27T00:51:06.5733793Z         68d72f3be7030775ece20355 and region US_EAST_1 does not have a VPC Peering
2025-09-27T00:51:06.5734424Z         connection], BadRequestDetail: 
2025-09-27T00:51:06.5734788Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (167.06s)
```

- 2025-09-28

### Error 2025-09-28T00:53:00+00:00
```
2025-09-28T00:53:00.9231861Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-28T00:53:00.9239130Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-28T00:53:00.9262904Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-28T00:53:00.9263836Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-28T00:53:00.9264396Z         
2025-09-28T00:53:00.9264688Z         Error: error updating resource
2025-09-28T00:53:00.9264967Z         
2025-09-28T00:53:00.9265308Z           with mongodbatlas_stream_connection.test,
2025-09-28T00:53:00.9265974Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-28T00:53:00.9266590Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-28T00:53:00.9266917Z         
2025-09-28T00:53:00.9267781Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68d88187ca428e2ad3dbbb00/streams/test-acc-tf-s-2508984362356056008/connections/kafka-conn-ssl
2025-09-28T00:53:00.9268942Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-28T00:53:00.9269518Z         request content produced the validation error: The project id
2025-09-28T00:53:00.9270129Z         68d88187ca428e2ad3dbbb00 and region US_EAST_1 does not have a VPC Peering
2025-09-28T00:53:00.9270695Z         connection. Reason: Bad Request. Params: [The project id
2025-09-28T00:53:00.9271278Z         68d88187ca428e2ad3dbbb00 and region US_EAST_1 does not have a VPC Peering
2025-09-28T00:53:00.9271750Z         connection], BadRequestDetail: 
2025-09-28T00:53:00.9272133Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (175.41s)
```

- 2025-09-29
  - FAIL 2 minutes

### Error 2025-09-29T00:53:32+00:00
```
2025-09-29T00:53:32.4707168Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-29T00:53:32.4717002Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-29T00:53:32.4735655Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-29T00:53:32.4736765Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-29T00:53:32.4737313Z         
2025-09-29T00:53:32.4737592Z         Error: error updating resource
2025-09-29T00:53:32.4737854Z         
2025-09-29T00:53:32.4738184Z           with mongodbatlas_stream_connection.test,
2025-09-29T00:53:32.4739066Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-29T00:53:32.4739810Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-29T00:53:32.4740116Z         
2025-09-29T00:53:32.4740964Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d9d2d097534351000fd020/streams/test-acc-tf-s-8168174255387156915/connections/kafka-conn-ssl
2025-09-29T00:53:32.4741852Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-29T00:53:32.4742413Z         request content produced the validation error: The project id
2025-09-29T00:53:32.4743009Z         68d9d2d097534351000fd020 and region US_EAST_1 does not have a VPC Peering
2025-09-29T00:53:32.4743564Z         connection. Reason: Bad Request. Params: [The project id
2025-09-29T00:53:32.4744129Z         68d9d2d097534351000fd020 and region US_EAST_1 does not have a VPC Peering
2025-09-29T00:53:32.4744578Z         connection], BadRequestDetail: 
2025-09-29T00:53:32.4744937Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (166.51s)
```

  - FAIL 2 minutes

### Error 2025-09-29T07:27:48+00:00
```
2025-09-29T07:27:48.1242369Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-29T07:27:48.1248647Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-29T07:27:48.1269456Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-29T07:27:48.1270172Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-29T07:27:48.1270823Z         
2025-09-29T07:27:48.1271107Z         Error: error updating resource
2025-09-29T07:27:48.1271369Z         
2025-09-29T07:27:48.1271697Z           with mongodbatlas_stream_connection.test,
2025-09-29T07:27:48.1272494Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-29T07:27:48.1273101Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-29T07:27:48.1273404Z         
2025-09-29T07:27:48.1274254Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68da30d49ae0ff3b55cf3d0c/streams/test-acc-tf-s-5428533652522328334/connections/kafka-conn-ssl
2025-09-29T07:27:48.1275233Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-29T07:27:48.1275805Z         request content produced the validation error: The project id
2025-09-29T07:27:48.1276397Z         68da30d49ae0ff3b55cf3d0c and region US_EAST_1 does not have a VPC Peering
2025-09-29T07:27:48.1276945Z         connection. Reason: Bad Request. Params: [The project id
2025-09-29T07:27:48.1277636Z         68da30d49ae0ff3b55cf3d0c and region US_EAST_1 does not have a VPC Peering
2025-09-29T07:27:48.1278099Z         connection], BadRequestDetail: 
2025-09-29T07:27:48.1278460Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (167.96s)
```

- 2025-09-30
  - FAIL 2 minutes

### Error 2025-09-30T00:48:54+00:00
```
2025-09-30T00:48:54.4290767Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-30T00:48:54.4297832Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-30T00:48:54.4317809Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-30T00:48:54.4318612Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-30T00:48:54.4319143Z         
2025-09-30T00:48:54.4319552Z         Error: error updating resource
2025-09-30T00:48:54.4319978Z         
2025-09-30T00:48:54.4320574Z           with mongodbatlas_stream_connection.test,
2025-09-30T00:48:54.4321344Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-30T00:48:54.4322013Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-30T00:48:54.4322328Z         
2025-09-30T00:48:54.4323319Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68db23fdac96227c18dcc25c/streams/test-acc-tf-s-2405848501451643190/connections/kafka-conn-ssl
2025-09-30T00:48:54.4324287Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-30T00:48:54.4325039Z         request content produced the validation error: The project id
2025-09-30T00:48:54.4325704Z         68db23fdac96227c18dcc25c and region US_EAST_1 does not have a VPC Peering
2025-09-30T00:48:54.4326315Z         connection. Reason: Bad Request. Params: [The project id
2025-09-30T00:48:54.4326967Z         68db23fdac96227c18dcc25c and region US_EAST_1 does not have a VPC Peering
2025-09-30T00:48:54.4327454Z         connection], BadRequestDetail: 
2025-09-30T00:48:54.4327815Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (166.35s)
```

  - FAIL 2 minutes

### Error 2025-09-30T07:47:48+00:00
```
2025-09-30T07:47:48.1673609Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-30T07:47:48.1681166Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-30T07:47:48.1699277Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-30T07:47:48.1700402Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-30T07:47:48.1701293Z         
2025-09-30T07:47:48.1701583Z         Error: error updating resource
2025-09-30T07:47:48.1702023Z         
2025-09-30T07:47:48.1702362Z           with mongodbatlas_stream_connection.test,
2025-09-30T07:47:48.1703014Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-30T07:47:48.1703617Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-30T07:47:48.1703924Z         
2025-09-30T07:47:48.1704770Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68db86dec882bb707c96bc71/streams/test-acc-tf-s-2656607281265535769/connections/kafka-conn-ssl
2025-09-30T07:47:48.1705654Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-30T07:47:48.1706338Z         request content produced the validation error: The project id
2025-09-30T07:47:48.1706929Z         68db86dec882bb707c96bc71 and region US_EAST_1 does not have a VPC Peering
2025-09-30T07:47:48.1707479Z         connection. Reason: Bad Request. Params: [The project id
2025-09-30T07:47:48.1708369Z         68db86dec882bb707c96bc71 and region US_EAST_1 does not have a VPC Peering
2025-09-30T07:47:48.1708828Z         connection], BadRequestDetail: 
2025-09-30T07:47:48.1709187Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (164.22s)
```

  - FAIL 2 minutes

### Error 2025-09-30T08:04:49+00:00
```
2025-09-30T08:04:49.7758737Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-09-30T08:04:49.7765335Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-30T08:04:49.7784757Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-09-30T08:04:49.7785471Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-09-30T08:04:49.7785983Z         
2025-09-30T08:04:49.7786266Z         Error: error updating resource
2025-09-30T08:04:49.7786661Z         
2025-09-30T08:04:49.7786998Z           with mongodbatlas_stream_connection.test,
2025-09-30T08:04:49.7787647Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-30T08:04:49.7788242Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-30T08:04:49.7788547Z         
2025-09-30T08:04:49.7789389Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68db89cbbb7b8c0d70349d74/streams/test-acc-tf-s-9097683267964206690/connections/kafka-conn-ssl
2025-09-30T08:04:49.7790363Z         PATCH: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-30T08:04:49.7790920Z         request content produced the validation error: The project id
2025-09-30T08:04:49.7791735Z         68db89cbbb7b8c0d70349d74 and region US_EAST_1 does not have a VPC Peering
2025-09-30T08:04:49.7792294Z         connection. Reason: Bad Request. Params: [The project id
2025-09-30T08:04:49.7792870Z         68db89cbbb7b8c0d70349d74 and region US_EAST_1 does not have a VPC Peering
2025-09-30T08:04:49.7793316Z         connection], BadRequestDetail: 
2025-09-30T08:04:49.7793706Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (167.07s)
```

  - PASS 2 minutes
  - PASS 2 minutes
- 2025-10-01
  - PASS 2 minutes
  - PASS 9 minutes
  - PASS 54 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-10-02

### Error 2025-10-02T01:34:20+00:00
```
2025-10-02T01:34:20.1012070Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-02T01:34:20.1025908Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-02T01:34:20.1041264Z   
2025-10-02T01:34:20.1041740Z     resource_stream_connection_test.go:153: Step 1/3 error: Error running apply: exit status 1
2025-10-02T01:34:20.1042172Z         
2025-10-02T01:34:20.1042464Z         Error: error fetching resource
2025-10-02T01:34:20.1042739Z         
2025-10-02T01:34:20.1043113Z           with data.mongodbatlas_stream_connection.test,
2025-10-02T01:34:20.1043757Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_connection" "test":
2025-10-02T01:34:20.1044338Z           39: data "mongodbatlas_stream_connection" "test" {
2025-10-02T01:34:20.1044648Z         
2025-10-02T01:34:20.1045516Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ddc6a2d2c00355743c1ebe/streams/test-acc-tf-s-9153079988273370027/connections/kafka-conn-ssl
2025-10-02T01:34:20.1046426Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-10-02T01:34:20.1047011Z         Detail: Stream connection with name kafka-conn-ssl for project
2025-10-02T01:34:20.1047610Z         68ddc6a2d2c00355743c1ebe and name test-acc-tf-s-9153079988273370027 not
2025-10-02T01:34:20.1048380Z         found. Reason: Not Found. Params: [kafka-conn-ssl 68ddc6a2d2c00355743c1ebe
2025-10-02T01:34:20.1048939Z         test-acc-tf-s-9153079988273370027], BadRequestDetail: 
2025-10-02T01:34:20.1049520Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (1.42s)
```
