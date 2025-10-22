# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 25) FAIL(x 19)
Success rate: 56.82%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
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
[2025-10-07 03:28](#error-2025-10-07t0328020000) |  | dev | timeout | 3724.07s
[2025-10-09 02:51](#error-2025-10-09t0251320000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/68e70164c2a3cd1693043b7b/containers | dev |  | 4.06s
[2025-10-11 00:47](#error-2025-10-11t0047430000) | STREAM_CONNECTION_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68e9a412e5f7141b76c016c6/streams/test-acc-tf-s-6205360719618264765/connections/kafka-conn-ssl | dev |  | 2.01s
[2025-10-12 02:46](#error-2025-10-12t0246540000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/68eaf645bae6807c7549827a/containers | qa |  | 31.07s
[2025-10-13 01:00](#error-2025-10-13t0100440000) |  | dev |  | 300.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 1.05s
[2025-10-20 10:49](#error-2025-10-20t1049140000) |  | dev |  | 418.06s

## Timeline
- 2025-09-22: MISSING
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

- 2025-10-03 PASS 9 minutes
- 2025-10-04 PASS 6 minutes
- 2025-10-05 PASS 2 minutes
- 2025-10-06 PASS 5 minutes
- 2025-10-07

### Error 2025-10-07T03:28:02+00:00
```
2025-10-07T03:28:02.2692162Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-07T03:28:02.2701602Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-07T03:28:02.2723774Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-07T03:28:02.2724555Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-07T03:28:02.2725328Z         
2025-10-07T03:28:02.2726376Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-07T03:28:02.2727764Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-07T03:28:02.2728397Z         
2025-10-07T03:28:02.2728782Z           with mongodbatlas_network_peering.test,
2025-10-07T03:28:02.2729473Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-07T03:28:02.2730110Z           19: 	resource "mongodbatlas_network_peering" "test" {
2025-10-07T03:28:02.2730473Z         
2025-10-07T03:28:02.2730806Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (3724.68s)
```

- 2025-10-08 PASS 4 minutes
- 2025-10-09

### Error 2025-10-09T02:51:32+00:00
```
2025-10-09T02:51:32.9787897Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-09T02:51:32.9794280Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-09T02:51:32.9812420Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-09T02:51:32.9813171Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-09T02:51:32.9813762Z         
2025-10-09T02:51:32.9815598Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e70164c2a3cd1693043b7b/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 68e70164c2a3cd1693043b7b. Reason: Conflict. Params: [68e70164c2a3cd1693043b7b], BadRequestDetail: 
2025-10-09T02:51:32.9816877Z         
2025-10-09T02:51:32.9817233Z           with mongodbatlas_network_container.test,
2025-10-09T02:51:32.9817890Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2025-10-09T02:51:32.9818501Z           12: 	resource "mongodbatlas_network_container" "test" {
2025-10-09T02:51:32.9818828Z         
2025-10-09T02:51:32.9819121Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (4.57s)
```

- 2025-10-10 PASS 4 minutes
- 2025-10-11

### Error 2025-10-11T00:47:43+00:00
```
2025-10-11T00:47:43.3000834Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-11T00:47:43.3012867Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-11T00:47:43.3041785Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-11T00:47:43.3043026Z     resource_stream_connection_test.go:153: Step 1/3 error: Error running apply: exit status 1
2025-10-11T00:47:43.3043822Z         
2025-10-11T00:47:43.3044342Z         Error: error fetching resource
2025-10-11T00:47:43.3044832Z         
2025-10-11T00:47:43.3045503Z           with data.mongodbatlas_stream_connection.test,
2025-10-11T00:47:43.3046892Z           on terraform_plugin_test.tf line 39, in data "mongodbatlas_stream_connection" "test":
2025-10-11T00:47:43.3047978Z           39: data "mongodbatlas_stream_connection" "test" {
2025-10-11T00:47:43.3048530Z         
2025-10-11T00:47:43.3050135Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e9a412e5f7141b76c016c6/streams/test-acc-tf-s-6205360719618264765/connections/kafka-conn-ssl
2025-10-11T00:47:43.3051984Z         GET: HTTP 404 Not Found (Error code: "STREAM_CONNECTION_NOT_FOUND_FOR_NAME")
2025-10-11T00:47:43.3053232Z         Detail: Stream connection with name kafka-conn-ssl for project
2025-10-11T00:47:43.3054330Z         68e9a412e5f7141b76c016c6 and name test-acc-tf-s-6205360719618264765 not
2025-10-11T00:47:43.3055489Z         found. Reason: Not Found. Params: [kafka-conn-ssl 68e9a412e5f7141b76c016c6
2025-10-11T00:47:43.3056466Z         test-acc-tf-s-6205360719618264765], BadRequestDetail: 
2025-10-11T00:47:43.3057188Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (2.06s)
```

- 2025-10-12

### Error 2025-10-12T02:46:54+00:00
```
2025-10-12T02:46:54.3460148Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-12T02:46:54.3468531Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-12T02:46:54.3480137Z    test_name=TestAccStreamRSStreamConnection_kafkaPlaintext test_terraform_path=/home/runner/work/_temp/70fb9e8d-1575-45bc-ad16-1e16fa65f090/terraform test_working_directory=/tmp/plugintest221540032 test_step_number=1
2025-10-12T02:46:54.3519541Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-12T02:46:54.3520276Z     resource_stream_connection_test.go:153: Step 2/3, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-12T02:46:54.3520822Z         
2025-10-12T02:46:54.3523162Z         Error: error creating MongoDB Network Peering Container: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68eaf645bae6807c7549827a/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 68eaf645bae6807c7549827a. Reason: Conflict. Params: [68eaf645bae6807c7549827a], BadRequestDetail: 
2025-10-12T02:46:54.3524882Z         
2025-10-12T02:46:54.3525311Z           with mongodbatlas_network_container.test,
2025-10-12T02:46:54.3525998Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2025-10-12T02:46:54.3526635Z           12: 	resource "mongodbatlas_network_container" "test" {
2025-10-12T02:46:54.3526970Z         
2025-10-12T02:46:54.3527271Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (31.65s)
```

- 2025-10-13

### Error 2025-10-13T01:00:44+00:00
```
2025-10-13T01:00:44.5430896Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-13T01:00:44.5437262Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-13T01:00:44.5466740Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-13T01:00:44.5467373Z     resource_stream_connection_test.go:153: Step 1/3 error: Error running apply: exit status 1
2025-10-13T01:00:44.5467819Z         
2025-10-13T01:00:44.5468142Z         Error: error creating resource
2025-10-13T01:00:44.5468613Z         
2025-10-13T01:00:44.5469020Z           with mongodbatlas_stream_connection.test,
2025-10-13T01:00:44.5469788Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-10-13T01:00:44.5470486Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-13T01:00:44.5470818Z         
2025-10-13T01:00:44.5471373Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:00:44.5472316Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (300.81s)
```

- 2025-10-14 PASS 4 minutes
- 2025-10-15 PASS 3 minutes
- 2025-10-16 PASS 2 minutes
- 2025-10-17 PASS 3 minutes
- 2025-10-18 PASS 2 minutes
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1472420Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-19T00:50:12.1480247Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-19T00:50:12.1553725Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-19T00:50:12.1554313Z     resource_stream_connection_test.go:256: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.1554737Z         
2025-10-19T00:50:12.1555019Z         Error: error creating resource
2025-10-19T00:50:12.1555286Z         
2025-10-19T00:50:12.1555627Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1556276Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1557226Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1557546Z         
2025-10-19T00:50:12.1558316Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1559142Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1559746Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1560354Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1560924Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1561317Z         BadRequestDetail: 
2025-10-19T00:50:12.1569519Z   
2025-10-19T00:50:12.1632279Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (1.53s)
```

- 2025-10-20
  - PASS 2 minutes
  - FAIL 6 minutes

### Error 2025-10-20T10:49:14+00:00
```
2025-10-20T10:49:14.1997937Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2025-10-20T10:49:14.2018335Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-20T10:49:14.2079706Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2025-10-20T10:49:14.2081127Z     resource_stream_connection_test.go:256: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-20T10:49:14.2082023Z         
2025-10-20T10:49:14.2083247Z         Error: error deleting MongoDB Network Peering Container (68f6117cde46041f566ad4d2): couldn't find resource (21 retries)
2025-10-20T10:49:14.2084188Z         
2025-10-20T10:49:14.2084690Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (418.64s)
```

- 2025-10-21 PASS 2 minutes
- 2025-10-22
  - PASS 2 minutes
  - PASS 3 minutes