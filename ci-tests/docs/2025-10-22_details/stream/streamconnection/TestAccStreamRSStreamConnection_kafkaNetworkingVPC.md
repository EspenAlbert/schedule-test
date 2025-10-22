# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 26) FAIL(x 18)
Success rate: 59.09%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-23 00:46](#error-2025-09-23t0046570000) | VALIDATION_ERROR /api/atlas/v2/groups/68d1e95ea895df0d27e694dc/streams/test-acc-tf-s-2429861209096068710/connections | dev |  | 161.04s
[2025-09-24 00:48](#error-2025-09-24t0048490000) | VALIDATION_ERROR /api/atlas/v2/groups/68d33ad5f1337d3c4efe8a30/streams/test-acc-tf-s-4994766804749352644/connections | dev | flaky_500 | 171.09s
[2025-09-25 01:39](#error-2025-09-25t0139080000) | VALIDATION_ERROR /api/atlas/v2/groups/68d48c54ac285026f1fd092c/streams/test-acc-tf-s-7249668804199471548/connections | dev | flaky_500 | 3248.09s
[2025-09-26 00:48](#error-2025-09-26t0048160000) | VALIDATION_ERROR /api/atlas/v2/groups/68d5ddddf8df4c6a73fc333b/streams/test-acc-tf-s-8113659077103869597/connections | dev |  | 161.08s
[2025-09-27 00:51](#error-2025-09-27t0051060000) | VALIDATION_ERROR /api/atlas/v2/groups/68d72f3be7030775ece20355/streams/test-acc-tf-s-8658604451623586714/connections | dev |  | 163.02s
[2025-09-28 00:53](#error-2025-09-28t0053000000) | VALIDATION_ERROR /api/atlas/v2/groups/68d88187ca428e2ad3dbbb00/streams/test-acc-tf-s-2508984362356056008/connections | qa |  | 161.06s
[2025-09-29 00:53](#error-2025-09-29t0053320000) | VALIDATION_ERROR /api/atlas/v2/groups/68d9d2d097534351000fd020/streams/test-acc-tf-s-8168174255387156915/connections | dev |  | 213.08s
[2025-09-29 07:27](#error-2025-09-29t0727480000) | VALIDATION_ERROR /api/atlas/v2/groups/68da30d49ae0ff3b55cf3d0c/streams/test-acc-tf-s-5428533652522328334/connections | dev |  | 173.09s
[2025-09-30 00:48](#error-2025-09-30t0048540000) | VALIDATION_ERROR /api/atlas/v2/groups/68db23fdac96227c18dcc25c/streams/test-acc-tf-s-2405848501451643190/connections | dev |  | 162.00s
[2025-09-30 07:47](#error-2025-09-30t0747480000) | VALIDATION_ERROR /api/atlas/v2/groups/68db86dec882bb707c96bc71/streams/test-acc-tf-s-2656607281265535769/connections | dev |  | 161.05s
[2025-09-30 08:04](#error-2025-09-30t0804490000) | VALIDATION_ERROR /api/atlas/v2/groups/68db89cbbb7b8c0d70349d74/streams/test-acc-tf-s-9097683267964206690/connections | qa | flaky_500 | 182.08s
[2025-09-30 15:25](#error-2025-09-30t1525090000) |  | qa |  | 202.01s
[2025-10-05 00:49](#error-2025-10-05t0049210000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68e1bbfafec65822ddfc9b5c/streams/test-acc-tf-s-1634441574459024561/connections | qa | flaky_500 | 193.02s
[2025-10-07 03:28](#error-2025-10-07t0328020000) |  | dev | timeout | 3720.09s
[2025-10-09 02:51](#error-2025-10-09t0251320000) |  | dev | timeout | 3963.05s
[2025-10-12 02:46](#error-2025-10-12t0246540000) |  | qa | timeout | 3925.03s
[2025-10-13 01:00](#error-2025-10-13t0100440000) |  | dev |  | 423.06s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 173.04s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23

### Error 2025-09-23T00:46:57+00:00
```
2025-09-23T00:46:57.4248728Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-23T00:46:57.4266120Z   
2025-09-23T00:46:57.4266887Z     resource_stream_connection_test.go:161: Step 1/2 error: Error running apply: exit status 1
2025-09-23T00:46:57.4267729Z         
2025-09-23T00:46:57.4268249Z         Error: error creating resource
2025-09-23T00:46:57.4268731Z         
2025-09-23T00:46:57.4269080Z           with mongodbatlas_stream_connection.test,
2025-09-23T00:46:57.4269757Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-23T00:46:57.4270369Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-23T00:46:57.4270683Z         
2025-09-23T00:46:57.4271476Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d1e95ea895df0d27e694dc/streams/test-acc-tf-s-2429861209096068710/connections
2025-09-23T00:46:57.4272297Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-23T00:46:57.4272856Z         request content produced the validation error: The project id
2025-09-23T00:46:57.4273453Z         68d1e95ea895df0d27e694dc and region US_EAST_1 does not have a VPC Peering
2025-09-23T00:46:57.4274005Z         connection. Reason: Bad Request. Params: [The project id
2025-09-23T00:46:57.4274578Z         68d1e95ea895df0d27e694dc and region US_EAST_1 does not have a VPC Peering
2025-09-23T00:46:57.4275259Z         connection], BadRequestDetail: 
2025-09-23T00:46:57.4275660Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (161.41s)
```

- 2025-09-24

### Error 2025-09-24T00:48:49+00:00
```
2025-09-24T00:48:49.7219933Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-24T00:48:49.7246551Z   
2025-09-24T00:48:49.7247647Z     resource_stream_connection_test.go:161: Step 1/2 error: Error running apply: exit status 1
2025-09-24T00:48:49.7248419Z         
2025-09-24T00:48:49.7248922Z         Error: error creating resource
2025-09-24T00:48:49.7249392Z         
2025-09-24T00:48:49.7250007Z           with mongodbatlas_stream_connection.test,
2025-09-24T00:48:49.7251230Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-24T00:48:49.7252328Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-24T00:48:49.7252879Z         
2025-09-24T00:48:49.7254285Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d33ad5f1337d3c4efe8a30/streams/test-acc-tf-s-4994766804749352644/connections
2025-09-24T00:48:49.7255796Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-24T00:48:49.7256808Z         request content produced the validation error: The project id
2025-09-24T00:48:49.7258119Z         68d33ad5f1337d3c4efe8a30 and region US_EAST_1 does not have a VPC Peering
2025-09-24T00:48:49.7259169Z         connection. Reason: Bad Request. Params: [The project id
2025-09-24T00:48:49.7260219Z         68d33ad5f1337d3c4efe8a30 and region US_EAST_1 does not have a VPC Peering
2025-09-24T00:48:49.7261033Z         connection], BadRequestDetail: 
2025-09-24T00:48:49.7261743Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (171.92s)
```

- 2025-09-25

### Error 2025-09-25T01:39:08+00:00
```
2025-09-25T01:39:08.8253408Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-25T01:39:08.8280353Z   
2025-09-25T01:39:08.8281318Z     resource_stream_connection_test.go:161: Step 1/2 error: Error running apply: exit status 1
2025-09-25T01:39:08.8282090Z         
2025-09-25T01:39:08.8282572Z         Error: error creating resource
2025-09-25T01:39:08.8283039Z         
2025-09-25T01:39:08.8283654Z           with mongodbatlas_stream_connection.test,
2025-09-25T01:39:08.8285003Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-25T01:39:08.8286119Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-25T01:39:08.8286689Z         
2025-09-25T01:39:08.8288097Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d48c54ac285026f1fd092c/streams/test-acc-tf-s-7249668804199471548/connections
2025-09-25T01:39:08.8289608Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-25T01:39:08.8290659Z         request content produced the validation error: The project id
2025-09-25T01:39:08.8291761Z         68d48c54ac285026f1fd092c and region US_EAST_1 does not have a VPC Peering
2025-09-25T01:39:08.8292771Z         connection. Reason: Bad Request. Params: [The project id
2025-09-25T01:39:08.8293978Z         68d48c54ac285026f1fd092c and region US_EAST_1 does not have a VPC Peering
2025-09-25T01:39:08.8294824Z         connection], BadRequestDetail: 
2025-09-25T01:39:08.8295544Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (3248.91s)
```

- 2025-09-26

### Error 2025-09-26T00:48:16+00:00
```
2025-09-26T00:48:16.2180808Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-26T00:48:16.2198385Z    test_terraform_path=/home/runner/work/_temp/6c0767ee-1731-40d4-8ad2-e44cad131868/terraform test_working_directory=/tmp/plugintest818470739 test_step_number=1
2025-09-26T00:48:16.2199756Z     resource_stream_connection_test.go:161: Step 1/2 error: Error running apply: exit status 1
2025-09-26T00:48:16.2200220Z         
2025-09-26T00:48:16.2200607Z         Error: error creating resource
2025-09-26T00:48:16.2200884Z         
2025-09-26T00:48:16.2201336Z           with mongodbatlas_stream_connection.test,
2025-09-26T00:48:16.2202204Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-26T00:48:16.2202955Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-26T00:48:16.2203276Z         
2025-09-26T00:48:16.2204218Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d5ddddf8df4c6a73fc333b/streams/test-acc-tf-s-8113659077103869597/connections
2025-09-26T00:48:16.2205295Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-26T00:48:16.2205937Z         request content produced the validation error: The project id
2025-09-26T00:48:16.2206675Z         68d5ddddf8df4c6a73fc333b and region US_EAST_1 does not have a VPC Peering
2025-09-26T00:48:16.2207386Z         connection. Reason: Bad Request. Params: [The project id
2025-09-26T00:48:16.2208286Z         68d5ddddf8df4c6a73fc333b and region US_EAST_1 does not have a VPC Peering
2025-09-26T00:48:16.2208911Z         connection], BadRequestDetail: 
2025-09-26T00:48:16.2209450Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (161.84s)
```

- 2025-09-27

### Error 2025-09-27T00:51:06+00:00
```
2025-09-27T00:51:06.5672015Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-27T00:51:06.5689138Z    test_working_directory=/tmp/plugintest2977676498 test_terraform_path=/home/runner/work/_temp/aff3dcd9-a8af-4dfd-8153-43a883ffa56b/terraform test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-27T00:51:06.5690424Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-27T00:51:06.5690972Z         
2025-09-27T00:51:06.5691248Z         Error: error creating resource
2025-09-27T00:51:06.5691587Z         
2025-09-27T00:51:06.5691957Z           with mongodbatlas_stream_connection.test,
2025-09-27T00:51:06.5692730Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-27T00:51:06.5693458Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-27T00:51:06.5693766Z         
2025-09-27T00:51:06.5694734Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d72f3be7030775ece20355/streams/test-acc-tf-s-8658604451623586714/connections
2025-09-27T00:51:06.5695728Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-27T00:51:06.5696352Z         request content produced the validation error: The project id
2025-09-27T00:51:06.5697065Z         68d72f3be7030775ece20355 and region US_EAST_1 does not have a VPC Peering
2025-09-27T00:51:06.5697622Z         connection. Reason: Bad Request. Params: [The project id
2025-09-27T00:51:06.5698269Z         68d72f3be7030775ece20355 and region US_EAST_1 does not have a VPC Peering
2025-09-27T00:51:06.5698760Z         connection], BadRequestDetail: 
2025-09-27T00:51:06.5699160Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.17s)
```

- 2025-09-28

### Error 2025-09-28T00:53:00+00:00
```
2025-09-28T00:53:00.9203229Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-28T00:53:00.9220068Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/a1a8a98c-fb61-4af7-90fb-d06aa09f929b/terraform test_working_directory=/tmp/plugintest1069682790
2025-09-28T00:53:00.9221642Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-28T00:53:00.9222501Z         
2025-09-28T00:53:00.9223034Z         Error: error creating resource
2025-09-28T00:53:00.9223543Z         
2025-09-28T00:53:00.9224178Z           with mongodbatlas_stream_connection.test,
2025-09-28T00:53:00.9224982Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-28T00:53:00.9225649Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-28T00:53:00.9226068Z         
2025-09-28T00:53:00.9226853Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68d88187ca428e2ad3dbbb00/streams/test-acc-tf-s-2508984362356056008/connections
2025-09-28T00:53:00.9227701Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-28T00:53:00.9228378Z         request content produced the validation error: The project id
2025-09-28T00:53:00.9229263Z         68d88187ca428e2ad3dbbb00 and region US_EAST_1 does not have a VPC Peering
2025-09-28T00:53:00.9229843Z         connection. Reason: Bad Request. Params: [The project id
2025-09-28T00:53:00.9230435Z         68d88187ca428e2ad3dbbb00 and region US_EAST_1 does not have a VPC Peering
2025-09-28T00:53:00.9230902Z         connection], BadRequestDetail: 
2025-09-28T00:53:00.9231323Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (161.65s)
```

- 2025-09-29
  - FAIL 3 minutes

### Error 2025-09-29T00:53:32+00:00
```
2025-09-29T00:53:32.4666040Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-29T00:53:32.4691958Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-29T00:53:32.4693134Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-29T00:53:32.4693868Z         
2025-09-29T00:53:32.4694335Z         Error: error creating resource
2025-09-29T00:53:32.4694777Z         
2025-09-29T00:53:32.4695337Z           with mongodbatlas_stream_connection.test,
2025-09-29T00:53:32.4696485Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-29T00:53:32.4697565Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-29T00:53:32.4698079Z         
2025-09-29T00:53:32.4699550Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d9d2d097534351000fd020/streams/test-acc-tf-s-8168174255387156915/connections
2025-09-29T00:53:32.4700980Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-29T00:53:32.4701950Z         request content produced the validation error: The project id
2025-09-29T00:53:32.4702980Z         68d9d2d097534351000fd020 and region US_EAST_1 does not have a VPC Peering
2025-09-29T00:53:32.4703941Z         connection. Reason: Bad Request. Params: [The project id
2025-09-29T00:53:32.4704940Z         68d9d2d097534351000fd020 and region US_EAST_1 does not have a VPC Peering
2025-09-29T00:53:32.4705723Z         connection], BadRequestDetail: 
2025-09-29T00:53:32.4706406Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (213.80s)
```

  - FAIL 2 minutes

### Error 2025-09-29T07:27:48+00:00
```
2025-09-29T07:27:48.1213580Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-29T07:27:48.1232279Z   
2025-09-29T07:27:48.1232950Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-29T07:27:48.1233501Z         
2025-09-29T07:27:48.1233780Z         Error: error creating resource
2025-09-29T07:27:48.1234042Z         
2025-09-29T07:27:48.1234503Z           with mongodbatlas_stream_connection.test,
2025-09-29T07:27:48.1235280Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-29T07:27:48.1235989Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-29T07:27:48.1236299Z         
2025-09-29T07:27:48.1237185Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68da30d49ae0ff3b55cf3d0c/streams/test-acc-tf-s-5428533652522328334/connections
2025-09-29T07:27:48.1238255Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-29T07:27:48.1238931Z         request content produced the validation error: The project id
2025-09-29T07:27:48.1239638Z         68da30d49ae0ff3b55cf3d0c and region US_EAST_1 does not have a VPC Peering
2025-09-29T07:27:48.1240295Z         connection. Reason: Bad Request. Params: [The project id
2025-09-29T07:27:48.1240969Z         68da30d49ae0ff3b55cf3d0c and region US_EAST_1 does not have a VPC Peering
2025-09-29T07:27:48.1241454Z         connection], BadRequestDetail: 
2025-09-29T07:27:48.1241949Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (173.89s)
```

- 2025-09-30
  - FAIL 2 minutes

### Error 2025-09-30T00:48:54+00:00
```
2025-09-30T00:48:54.4261999Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-30T00:48:54.4279379Z    test_terraform_path=/home/runner/work/_temp/b672624d-4eb3-4962-a86c-d702b1c0cfca/terraform
2025-09-30T00:48:54.4280460Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-30T00:48:54.4280947Z         
2025-09-30T00:48:54.4281336Z         Error: error creating resource
2025-09-30T00:48:54.4281656Z         
2025-09-30T00:48:54.4282070Z           with mongodbatlas_stream_connection.test,
2025-09-30T00:48:54.4282997Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-30T00:48:54.4283734Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-30T00:48:54.4284132Z         
2025-09-30T00:48:54.4285130Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68db23fdac96227c18dcc25c/streams/test-acc-tf-s-2405848501451643190/connections
2025-09-30T00:48:54.4286161Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-30T00:48:54.4286880Z         request content produced the validation error: The project id
2025-09-30T00:48:54.4287661Z         68db23fdac96227c18dcc25c and region US_EAST_1 does not have a VPC Peering
2025-09-30T00:48:54.4288391Z         connection. Reason: Bad Request. Params: [The project id
2025-09-30T00:48:54.4289132Z         68db23fdac96227c18dcc25c and region US_EAST_1 does not have a VPC Peering
2025-09-30T00:48:54.4289719Z         connection], BadRequestDetail: 
2025-09-30T00:48:54.4290129Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (162.05s)
```

  - FAIL 2 minutes

### Error 2025-09-30T07:47:48+00:00
```
2025-09-30T07:47:48.1643798Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-30T07:47:48.1663665Z   
2025-09-30T07:47:48.1664472Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-30T07:47:48.1665271Z         
2025-09-30T07:47:48.1665791Z         Error: error creating resource
2025-09-30T07:47:48.1666219Z         
2025-09-30T07:47:48.1666577Z           with mongodbatlas_stream_connection.test,
2025-09-30T07:47:48.1667239Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-30T07:47:48.1668109Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-30T07:47:48.1668421Z         
2025-09-30T07:47:48.1669197Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68db86dec882bb707c96bc71/streams/test-acc-tf-s-2656607281265535769/connections
2025-09-30T07:47:48.1670038Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-30T07:47:48.1670601Z         request content produced the validation error: The project id
2025-09-30T07:47:48.1671194Z         68db86dec882bb707c96bc71 and region US_EAST_1 does not have a VPC Peering
2025-09-30T07:47:48.1671757Z         connection. Reason: Bad Request. Params: [The project id
2025-09-30T07:47:48.1672333Z         68db86dec882bb707c96bc71 and region US_EAST_1 does not have a VPC Peering
2025-09-30T07:47:48.1672787Z         connection], BadRequestDetail: 
2025-09-30T07:47:48.1673180Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (161.49s)
```

  - FAIL 3 minutes

### Error 2025-09-30T08:04:49+00:00
```
2025-09-30T08:04:49.7733349Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-30T08:04:49.7747987Z    test_terraform_path=/home/runner/work/_temp/36d5e06d-a66b-40ee-a38b-371bf27cf8e0/terraform test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-30T08:04:49.7749212Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-30T08:04:49.7750022Z         
2025-09-30T08:04:49.7750554Z         Error: error creating resource
2025-09-30T08:04:49.7751258Z         
2025-09-30T08:04:49.7751901Z           with mongodbatlas_stream_connection.test,
2025-09-30T08:04:49.7752649Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-30T08:04:49.7753257Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-30T08:04:49.7753568Z         
2025-09-30T08:04:49.7754342Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68db89cbbb7b8c0d70349d74/streams/test-acc-tf-s-9097683267964206690/connections
2025-09-30T08:04:49.7755159Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-30T08:04:49.7755720Z         request content produced the validation error: The project id
2025-09-30T08:04:49.7756312Z         68db89cbbb7b8c0d70349d74 and region US_EAST_1 does not have a VPC Peering
2025-09-30T08:04:49.7756878Z         connection. Reason: Bad Request. Params: [The project id
2025-09-30T08:04:49.7757445Z         68db89cbbb7b8c0d70349d74 and region US_EAST_1 does not have a VPC Peering
2025-09-30T08:04:49.7757901Z         connection], BadRequestDetail: 
2025-09-30T08:04:49.7758304Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (182.83s)
```

  - PASS 2 minutes
  - FAIL 3 minutes

### Error 2025-09-30T15:25:09+00:00
```
2025-09-30T15:25:09.2016941Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-30T15:25:09.2025597Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/c8bfd9c6-8f62-48e2-8bb6-606019cf2233/terraform test_working_directory=/tmp/plugintest3672269436
2025-09-30T15:25:09.2026807Z     resource_stream_connection_test.go:122: Step 1/2 error: After applying this test step, the non-refresh plan was not empty.
2025-09-30T15:25:09.2027327Z         stdout:
2025-09-30T15:25:09.2027527Z         
2025-09-30T15:25:09.2028186Z         Terraform used the selected providers to generate the following execution
2025-09-30T15:25:09.2028815Z         plan. Resource actions are indicated with the following symbols:
2025-09-30T15:25:09.2029222Z           ~ update in-place
2025-09-30T15:25:09.2029467Z         
2025-09-30T15:25:09.2029786Z         Terraform will perform the following actions:
2025-09-30T15:25:09.2030079Z         
2025-09-30T15:25:09.2030492Z           # mongodbatlas_network_peering.test will be updated in-place
2025-09-30T15:25:09.2030998Z           ~ resource "mongodbatlas_network_peering" "test" {
2025-09-30T15:25:09.2031544Z               ~ accepter_region_name   = "us-east-1" -> "US_EAST_1"
2025-09-30T15:25:09.2032722Z                 id                     = "cGVlcl9pZA==:NjhkYmYzNDA3MjU3YzM1OTc1ZDQwNTlh-cHJvamVjdF9pZA==:NjhkYmYyMDBhMDcyMjQzYzg1OWQzZThl-cHJvdmlkZXJfbmFtZQ==:QVdT"
2025-09-30T15:25:09.2033494Z                 # (21 unchanged attributes hidden)
2025-09-30T15:25:09.2033783Z             }
2025-09-30T15:25:09.2033982Z         
2025-09-30T15:25:09.2034490Z         Plan: 0 to add, 1 to change, 0 to destroy.
2025-09-30T15:25:09.2034898Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (202.13s)
```

- 2025-10-01
  - PASS 9 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 24 minutes
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 24 minutes
- 2025-10-02 PASS 55 minutes
- 2025-10-03 PASS 9 minutes
- 2025-10-04 PASS 4 minutes
- 2025-10-05

### Error 2025-10-05T00:49:21+00:00
```
2025-10-05T00:49:21.9088451Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-05T00:49:21.9103265Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-05T00:49:21.9104128Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-10-05T00:49:21.9104588Z         
2025-10-05T00:49:21.9104999Z         Error: error creating resource
2025-10-05T00:49:21.9105301Z         
2025-10-05T00:49:21.9105812Z           with mongodbatlas_stream_connection.test,
2025-10-05T00:49:21.9106626Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-10-05T00:49:21.9107369Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-05T00:49:21.9107714Z         
2025-10-05T00:49:21.9108769Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68e1bbfafec65822ddfc9b5c/streams/test-acc-tf-s-1634441574459024561/connections
2025-10-05T00:49:21.9109898Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-10-05T00:49:21.9110580Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-10-05T00:49:21.9111046Z         BadRequestDetail: 
2025-10-05T00:49:21.9111561Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (193.17s)
```

- 2025-10-06 PASS 3 minutes
- 2025-10-07

### Error 2025-10-07T03:28:02+00:00
```
2025-10-07T03:28:02.2671671Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-07T03:28:02.2674269Z   diagnostic_summary=
2025-10-07T03:28:02.2677101Z   
2025-10-07T03:28:02.2685518Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-10-07T03:28:02.2685997Z         
2025-10-07T03:28:02.2687045Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-07T03:28:02.2688554Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-07T03:28:02.2689193Z         
2025-10-07T03:28:02.2689589Z           with mongodbatlas_network_peering.test,
2025-10-07T03:28:02.2690290Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-07T03:28:02.2690929Z           19: 	resource "mongodbatlas_network_peering" "test" {
2025-10-07T03:28:02.2691296Z         
2025-10-07T03:28:02.2691674Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (3720.95s)
```

- 2025-10-08 PASS 3 minutes
- 2025-10-09

### Error 2025-10-09T02:51:32+00:00
```
2025-10-09T02:51:32.9773312Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-09T02:51:32.9781914Z    test_step_number=2 test_terraform_path=/home/runner/work/_temp/70f4e407-f560-4485-8817-a3a7d8a4a0bd/terraform test_working_directory=/tmp/plugintest3763606329 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-09T02:51:32.9783562Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-09T02:51:32.9784609Z         
2025-10-09T02:51:32.9786298Z         Error: error deleting MongoDB Network Peering Connection (68e7055ec2a3cd169306b69a): timeout while waiting for state to become 'DELETED' (last state: 'TERMINATING', timeout: 1h0m0s)
2025-10-09T02:51:32.9787068Z         
2025-10-09T02:51:32.9787430Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (3963.47s)
```

- 2025-10-10 PASS 3 minutes
- 2025-10-11 PASS 3 minutes
- 2025-10-12

### Error 2025-10-12T02:46:54+00:00
```
2025-10-12T02:46:54.3427388Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-12T02:46:54.3430169Z   diagnostic_summary=
2025-10-12T02:46:54.3433249Z    diagnostic_detail=""
2025-10-12T02:46:54.3440487Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/70fb9e8d-1575-45bc-ad16-1e16fa65f090/terraform test_working_directory=/tmp/plugintest2696289155 test_step_number=1
2025-10-12T02:46:54.3442125Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-10-12T02:46:54.3442577Z         
2025-10-12T02:46:54.3443817Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-12T02:46:54.3445512Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-12T02:46:54.3446268Z         
2025-10-12T02:46:54.3446621Z           with mongodbatlas_network_peering.test,
2025-10-12T02:46:54.3447399Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-12T02:46:54.3448309Z           19: 	resource "mongodbatlas_network_peering" "test" {
2025-10-12T02:46:54.3448747Z         
2025-10-12T02:46:54.3457510Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-12T02:46:54.3457953Z         
2025-10-12T02:46:54.3458658Z         Error: error deleting MongoDB Network Peering Container (68eafcff454e3b49aeac7863): couldn't find resource (21 retries)
2025-10-12T02:46:54.3459347Z         
2025-10-12T02:46:54.3459698Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (3925.29s)
```

- 2025-10-13

### Error 2025-10-13T01:00:44+00:00
```
2025-10-13T01:00:44.5419364Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-13T01:00:44.5427001Z    test_working_directory=/tmp/plugintest3683325803
2025-10-13T01:00:44.5427789Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-13T01:00:44.5428538Z         
2025-10-13T01:00:44.5428867Z         Error: error deleting resource
2025-10-13T01:00:44.5429340Z         
2025-10-13T01:00:44.5429887Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:00:44.5430428Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (423.65s)
```

- 2025-10-14 PASS 3 minutes
- 2025-10-15 PASS 4 minutes
- 2025-10-16 PASS 3 minutes
- 2025-10-17 PASS 3 minutes
- 2025-10-18 PASS 3 minutes
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1447796Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-19T00:50:12.1463470Z    test_terraform_path=/home/runner/work/_temp/900806b3-a17f-4fd8-9610-14d4dc9797f0/terraform
2025-10-19T00:50:12.1464288Z     resource_stream_connection_test.go:225: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1464713Z         
2025-10-19T00:50:12.1465107Z         Error: error creating resource
2025-10-19T00:50:12.1465388Z         
2025-10-19T00:50:12.1465728Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1466477Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1467349Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1467672Z         
2025-10-19T00:50:12.1468442Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1469402Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1469992Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1470606Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1471170Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1471558Z         BadRequestDetail: 
2025-10-19T00:50:12.1471928Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (173.37s)
```

- 2025-10-20
  - PASS 5 minutes
  - PASS 3 minutes
- 2025-10-21 PASS 4 minutes
- 2025-10-22
  - PASS 3 minutes
  - PASS 2 minutes