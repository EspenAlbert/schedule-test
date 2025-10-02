# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, FAIL(x 31) PASS(x 16)
Success rate: 34.04%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-03 01:07](#error-2025-09-03t0107170000) |  | dev |  | 642.02s
[2025-09-04 01:04](#error-2025-09-04t0104350000) |  | dev |  | 642.06s
[2025-09-05 00:58](#error-2025-09-05t0058260000) |  | dev |  | 644.03s
[2025-09-06 01:02](#error-2025-09-06t0102570000) |  | dev |  | 653.01s
[2025-09-07 00:50](#error-2025-09-07t0050490000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams/test-acc-tf-s-4047930990064627307/connections | qa |  | 161.09s
[2025-09-08 12:40](#error-2025-09-08t1240450000) |  | dev | flaky_500 | 641.09s
[2025-09-09 01:06](#error-2025-09-09t0106500000) |  | dev |  | 642.00s
[2025-09-10 01:00](#error-2025-09-10t0100070000) |  | dev |  | 653.04s
[2025-09-12 07:46](#error-2025-09-12t0746360000) |  | dev |  | 652.05s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c43d444485797b214ed/streams/test-acc-tf-s-1571941844326212806/connections | qa |  | 161.02s
[2025-09-15 00:55](#error-2025-09-15t0055510000) |  | dev |  | 652.01s
[2025-09-15 06:03](#error-2025-09-15t0603260000) |  | dev |  | 644.02s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams/test-acc-tf-s-5005804337291291222/connections | qa | flaky_500 | 171.08s
[2025-09-16 00:55](#error-2025-09-16t0055250000) |  | dev |  | 642.04s
[2025-09-17 00:52](#error-2025-09-17t0052240000) | VALIDATION_ERROR /api/atlas/v2/groups/68ca006869d8c04598b624a8/streams/test-acc-tf-s-4193166429928927466/connections | dev |  | 173.03s
[2025-09-18 00:54](#error-2025-09-18t0054170000) | VALIDATION_ERROR /api/atlas/v2/groups/68cb51b674534c1ffb06a578/streams/test-acc-tf-s-3502526453090486885/connections | dev |  | 163.01s
[2025-09-19 00:48](#error-2025-09-19t0048210000) | VALIDATION_ERROR /api/atlas/v2/groups/68cca36c2bbf0b2797d5de9d/streams/test-acc-tf-s-3275964936115309495/connections | dev |  | 172.01s
[2025-09-20 00:44](#error-2025-09-20t0044450000) | VALIDATION_ERROR /api/atlas/v2/groups/68cdf493d78c355a113588a0/streams/test-acc-tf-s-320417300866518122/connections | dev |  | 161.04s
[2025-09-22 00:50](#error-2025-09-22t0050090000) | VALIDATION_ERROR /api/atlas/v2/groups/68d09882e965b05ddeb676c0/streams/test-acc-tf-s-3227416594353979564/connections | dev |  | 163.02s
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

## Timeline
- 2025-09-02: MISSING
- 2025-09-03

### Error 2025-09-03T01:07:17+00:00
```
2025-09-03T01:07:17.5140535Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-03T01:07:17.5154521Z   
2025-09-03T01:07:17.5155246Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-03T01:07:17.5155846Z         
2025-09-03T01:07:17.5156127Z         Error: error deleting resource
2025-09-03T01:07:17.5156394Z         
2025-09-03T01:07:17.5157442Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b78b17a89cf4184d26a570/streams/test-acc-tf-s-916771907590080583/connections/kafka-conn-vpc
2025-09-03T01:07:17.5158439Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-03T01:07:17.5159021Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-03T01:07:17.5159744Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-03T01:07:17.5160436Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-03T01:07:17.5161013Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (642.16s)
```

- 2025-09-04

### Error 2025-09-04T01:04:35+00:00
```
2025-09-04T01:04:35.7954156Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-04T01:04:35.7966994Z   
2025-09-04T01:04:35.7968012Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-04T01:04:35.7969201Z         
2025-09-04T01:04:35.7969681Z         Error: error deleting resource
2025-09-04T01:04:35.7969958Z         
2025-09-04T01:04:35.7970801Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b8dca6ef2c35484d6574d5/streams/test-acc-tf-s-483973998516831434/connections/kafka-conn-vpc
2025-09-04T01:04:35.7971541Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-04T01:04:35.7972053Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-04T01:04:35.7972648Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-04T01:04:35.7973217Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-04T01:04:35.7973682Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (642.63s)
```

- 2025-09-05

### Error 2025-09-05T00:58:26+00:00
```
2025-09-05T00:58:26.6370749Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-05T00:58:26.6384710Z   
2025-09-05T00:58:26.6385730Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-05T00:58:26.6386813Z         
2025-09-05T00:58:26.6387338Z         Error: error deleting resource
2025-09-05T00:58:26.6388025Z         
2025-09-05T00:58:26.6389068Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ba2e799802f23b4f887774/streams/test-acc-tf-s-7258436499394456384/connections/kafka-conn-vpc
2025-09-05T00:58:26.6389833Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-05T00:58:26.6390363Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-05T00:58:26.6390966Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-05T00:58:26.6391561Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-05T00:58:26.6392032Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (644.30s)
```

- 2025-09-06

### Error 2025-09-06T01:02:57+00:00
```
2025-09-06T01:02:57.3268957Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-06T01:02:57.3292318Z   
2025-09-06T01:02:57.3293547Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-06T01:02:57.3294533Z         
2025-09-06T01:02:57.3295091Z         Error: error deleting resource
2025-09-06T01:02:57.3295590Z         
2025-09-06T01:02:57.3297223Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68bb7f91e111ac0f653b3133/streams/test-acc-tf-s-4031413080174263030/connections/kafka-conn-vpc
2025-09-06T01:02:57.3298821Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-06T01:02:57.3299796Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-06T01:02:57.3300949Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-06T01:02:57.3302038Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-06T01:02:57.3302915Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (653.15s)
```

- 2025-09-07

### Error 2025-09-07T00:50:49+00:00
```
2025-09-07T00:50:49.0109219Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-07T00:50:49.0124168Z   
2025-09-07T00:50:49.0124634Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:50:49.0125062Z         
2025-09-07T00:50:49.0125342Z         Error: error creating resource
2025-09-07T00:50:49.0125615Z         
2025-09-07T00:50:49.0126103Z           with mongodbatlas_stream_connection.test,
2025-09-07T00:50:49.0126768Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-07T00:50:49.0127379Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-07T00:50:49.0127696Z         
2025-09-07T00:50:49.0128457Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d5df5af52d2d4d5831/streams/test-acc-tf-s-4047930990064627307/connections
2025-09-07T00:50:49.0129282Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-07T00:50:49.0130023Z         Detail: Stream instance for project 68bcd1d5df5af52d2d4d5831 and name
2025-09-07T00:50:49.0130642Z         test-acc-tf-s-4047930990064627307 not found. Reason: Not Found. Params:
2025-09-07T00:50:49.0131210Z         [68bcd1d5df5af52d2d4d5831 test-acc-tf-s-4047930990064627307],
2025-09-07T00:50:49.0131604Z         BadRequestDetail: 
2025-09-07T00:50:49.0131988Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (161.92s)
```

- 2025-09-08
  - PASS 3 minutes
  - PASS 3 minutes
  - FAIL 10 minutes

### Error 2025-09-08T12:40:45+00:00
```
2025-09-08T12:40:45.5434627Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-08T12:40:45.5449322Z   
2025-09-08T12:40:45.5450092Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-08T12:40:45.5450744Z         
2025-09-08T12:40:45.5451058Z         Error: error deleting resource
2025-09-08T12:40:45.5451404Z         
2025-09-08T12:40:45.5452382Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68bec64d6622a8021c5568c2/streams/test-acc-tf-s-4565169008702020675/connections/kafka-conn-vpc
2025-09-08T12:40:45.5453244Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-08T12:40:45.5453890Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-08T12:40:45.5454623Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-08T12:40:45.5455300Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-08T12:40:45.5455789Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (641.90s)
```

- 2025-09-09

### Error 2025-09-09T01:06:50+00:00
```
2025-09-09T01:06:50.5077884Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-09T01:06:50.5099632Z   
2025-09-09T01:06:50.5100743Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-09T01:06:50.5101627Z         
2025-09-09T01:06:50.5102096Z         Error: error deleting resource
2025-09-09T01:06:50.5102550Z         
2025-09-09T01:06:50.5104038Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68bf746ae556c179c3fda214/streams/test-acc-tf-s-1683174166613618649/connections/kafka-conn-vpc
2025-09-09T01:06:50.5105334Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-09T01:06:50.5106237Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-09T01:06:50.5107289Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-09T01:06:50.5108285Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-09T01:06:50.5109254Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (642.02s)
```

- 2025-09-10

### Error 2025-09-10T01:00:07+00:00
```
2025-09-10T01:00:07.0586441Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-10T01:00:07.0600496Z    test_working_directory=/tmp/plugintest968628239 test_step_number=2 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-10T01:00:07.0601615Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-10T01:00:07.0602259Z         
2025-09-10T01:00:07.0602536Z         Error: error deleting resource
2025-09-10T01:00:07.0602912Z         
2025-09-10T01:00:07.0603870Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c0c5e279e4f75ee7bbbab5/streams/test-acc-tf-s-5983705807814907892/connections/kafka-conn-vpc
2025-09-10T01:00:07.0604716Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-10T01:00:07.0605296Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-10T01:00:07.0605969Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-10T01:00:07.0606644Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-10T01:00:07.0607224Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (653.39s)
```

- 2025-09-11 PASS 3 minutes
- 2025-09-12
  - PASS 3 minutes
  - FAIL 10 minutes

### Error 2025-09-12T07:46:36+00:00
```
2025-09-12T07:46:36.3376127Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-12T07:46:36.3397382Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/39c42e0e-db89-4c1d-89e4-2194aba08203/terraform
2025-09-12T07:46:36.3399799Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-12T07:46:36.3400775Z         
2025-09-12T07:46:36.3401274Z         Error: error deleting resource
2025-09-12T07:46:36.3401766Z         
2025-09-12T07:46:36.3403422Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c3c9c04e067c5f2504964a/streams/test-acc-tf-s-5066443454616039558/connections/kafka-conn-vpc
2025-09-12T07:46:36.3404841Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-12T07:46:36.3405840Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-12T07:46:36.3407009Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-12T07:46:36.3408264Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-12T07:46:36.3409148Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (652.50s)
```

- 2025-09-13 PASS 3 minutes
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.7871087Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-14T00:45:38.7886899Z   
2025-09-14T00:45:38.7887358Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.7887856Z         
2025-09-14T00:45:38.7888361Z         Error: error creating resource
2025-09-14T00:45:38.7888634Z         
2025-09-14T00:45:38.7888976Z           with mongodbatlas_stream_connection.test,
2025-09-14T00:45:38.7889629Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-14T00:45:38.7890228Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-14T00:45:38.7890541Z         
2025-09-14T00:45:38.7891300Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c43d444485797b214ed/streams/test-acc-tf-s-1571941844326212806/connections
2025-09-14T00:45:38.7892288Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.7892879Z         Detail: Stream instance for project 68c60c43d444485797b214ed and name
2025-09-14T00:45:38.7893492Z         test-acc-tf-s-1571941844326212806 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.7894053Z         [68c60c43d444485797b214ed test-acc-tf-s-1571941844326212806],
2025-09-14T00:45:38.7894435Z         BadRequestDetail: 
2025-09-14T00:45:38.7894960Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (161.21s)
```

- 2025-09-15
  - FAIL 10 minutes

### Error 2025-09-15T00:55:51+00:00
```
2025-09-15T00:55:51.6161725Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-15T00:55:51.6178042Z   
2025-09-15T00:55:51.6179027Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-15T00:55:51.6180024Z         
2025-09-15T00:55:51.6180494Z         Error: error deleting resource
2025-09-15T00:55:51.6180772Z         
2025-09-15T00:55:51.6181634Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c75dd23176ce321a9645d6/streams/test-acc-tf-s-2662992153812109448/connections/kafka-conn-vpc
2025-09-15T00:55:51.6182397Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-15T00:55:51.6182929Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-15T00:55:51.6183546Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-15T00:55:51.6184123Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-15T00:55:51.6184601Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (652.14s)
```

  - FAIL 10 minutes

### Error 2025-09-15T06:03:26+00:00
```
2025-09-15T06:03:26.7145803Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-15T06:03:26.7157779Z    test_working_directory=/tmp/plugintest1227270291 test_step_number=2
2025-09-15T06:03:26.7158901Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-15T06:03:26.7159928Z         
2025-09-15T06:03:26.7160443Z         Error: error deleting resource
2025-09-15T06:03:26.7160924Z         
2025-09-15T06:03:26.7162012Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c7a65bf3fa172369817556/streams/test-acc-tf-s-5374306985321240512/connections/kafka-conn-vpc
2025-09-15T06:03:26.7162768Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-15T06:03:26.7165891Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-15T06:03:26.7166530Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-15T06:03:26.7167101Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-15T06:03:26.7167571Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (644.17s)
```

  - FAIL 2 minutes

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0004283Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-15T06:36:28.0030138Z   
2025-09-15T06:36:28.0030976Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0031743Z         
2025-09-15T06:36:28.0032241Z         Error: error creating resource
2025-09-15T06:36:28.0032720Z         
2025-09-15T06:36:28.0033338Z           with mongodbatlas_stream_connection.test,
2025-09-15T06:36:28.0034563Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-15T06:36:28.0035839Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-15T06:36:28.0036408Z         
2025-09-15T06:36:28.0037852Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04bfe60767b7f9b139f/streams/test-acc-tf-s-5005804337291291222/connections
2025-09-15T06:36:28.0039405Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0040500Z         Detail: Stream instance for project 68c7b04bfe60767b7f9b139f and name
2025-09-15T06:36:28.0041633Z         test-acc-tf-s-5005804337291291222 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0042689Z         [68c7b04bfe60767b7f9b139f test-acc-tf-s-5005804337291291222],
2025-09-15T06:36:28.0043404Z         BadRequestDetail: 
2025-09-15T06:36:28.0044076Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (171.79s)
```

- 2025-09-16

### Error 2025-09-16T00:55:25+00:00
```
2025-09-16T00:55:25.3038061Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-16T00:55:25.3058980Z   
2025-09-16T00:55:25.3060040Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-16T00:55:25.3060930Z         
2025-09-16T00:55:25.3061406Z         Error: error deleting resource
2025-09-16T00:55:25.3061855Z         
2025-09-16T00:55:25.3063395Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c8aeb524d7bb14617514a4/streams/test-acc-tf-s-612810514893209831/connections/kafka-conn-vpc
2025-09-16T00:55:25.3064707Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-16T00:55:25.3065627Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-16T00:55:25.3066700Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-16T00:55:25.3067861Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-16T00:55:25.3068662Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (642.41s)
```

- 2025-09-17

### Error 2025-09-17T00:52:24+00:00
```
2025-09-17T00:52:24.9318644Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-17T00:52:24.9336508Z   
2025-09-17T00:52:24.9337150Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-17T00:52:24.9337573Z         
2025-09-17T00:52:24.9337942Z         Error: error creating resource
2025-09-17T00:52:24.9338206Z         
2025-09-17T00:52:24.9338633Z           with mongodbatlas_stream_connection.test,
2025-09-17T00:52:24.9339397Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-17T00:52:24.9340009Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-17T00:52:24.9340421Z         
2025-09-17T00:52:24.9341281Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ca006869d8c04598b624a8/streams/test-acc-tf-s-4193166429928927466/connections
2025-09-17T00:52:24.9342195Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-17T00:52:24.9342852Z         request content produced the validation error: The project id
2025-09-17T00:52:24.9343532Z         68ca006869d8c04598b624a8 and region US_EAST_1 does not have a VPC Peering
2025-09-17T00:52:24.9344119Z         connection. Reason: Bad Request. Params: [The project id
2025-09-17T00:52:24.9344909Z         68ca006869d8c04598b624a8 and region US_EAST_1 does not have a VPC Peering
2025-09-17T00:52:24.9345443Z         connection], BadRequestDetail: 
2025-09-17T00:52:24.9345940Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (173.34s)
```

- 2025-09-18

### Error 2025-09-18T00:54:17+00:00
```
2025-09-18T00:54:17.1436541Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-18T00:54:17.1454134Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-18T00:54:17.1455065Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-18T00:54:17.1455886Z         
2025-09-18T00:54:17.1456397Z         Error: error creating resource
2025-09-18T00:54:17.1456881Z         
2025-09-18T00:54:17.1457486Z           with mongodbatlas_stream_connection.test,
2025-09-18T00:54:17.1458265Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-18T00:54:17.1458883Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-18T00:54:17.1459194Z         
2025-09-18T00:54:17.1459957Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68cb51b674534c1ffb06a578/streams/test-acc-tf-s-3502526453090486885/connections
2025-09-18T00:54:17.1461004Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-18T00:54:17.1461564Z         request content produced the validation error: The project id
2025-09-18T00:54:17.1462161Z         68cb51b674534c1ffb06a578 and region US_EAST_1 does not have a VPC Peering
2025-09-18T00:54:17.1462713Z         connection. Reason: Bad Request. Params: [The project id
2025-09-18T00:54:17.1463283Z         68cb51b674534c1ffb06a578 and region US_EAST_1 does not have a VPC Peering
2025-09-18T00:54:17.1463730Z         connection], BadRequestDetail: 
2025-09-18T00:54:17.1464122Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.07s)
```

- 2025-09-19

### Error 2025-09-19T00:48:21+00:00
```
2025-09-19T00:48:21.3468134Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-19T00:48:21.3485974Z   
2025-09-19T00:48:21.3486738Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-19T00:48:21.3487525Z         
2025-09-19T00:48:21.3488041Z         Error: error creating resource
2025-09-19T00:48:21.3488466Z         
2025-09-19T00:48:21.3488802Z           with mongodbatlas_stream_connection.test,
2025-09-19T00:48:21.3489464Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-19T00:48:21.3490303Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-19T00:48:21.3490636Z         
2025-09-19T00:48:21.3491413Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68cca36c2bbf0b2797d5de9d/streams/test-acc-tf-s-3275964936115309495/connections
2025-09-19T00:48:21.3492251Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-19T00:48:21.3492818Z         request content produced the validation error: The project id
2025-09-19T00:48:21.3493415Z         68cca36c2bbf0b2797d5de9d and region US_EAST_1 does not have a VPC Peering
2025-09-19T00:48:21.3493972Z         connection. Reason: Bad Request. Params: [The project id
2025-09-19T00:48:21.3494542Z         68cca36c2bbf0b2797d5de9d and region US_EAST_1 does not have a VPC Peering
2025-09-19T00:48:21.3494995Z         connection], BadRequestDetail: 
2025-09-19T00:48:21.3495394Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (172.14s)
```

- 2025-09-20

### Error 2025-09-20T00:44:45+00:00
```
2025-09-20T00:44:45.0322084Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-20T00:44:45.0339787Z   
2025-09-20T00:44:45.0340333Z     resource_stream_connection_test.go:161: Step 1/2 error: Error running apply: exit status 1
2025-09-20T00:44:45.0340892Z         
2025-09-20T00:44:45.0341162Z         Error: error creating resource
2025-09-20T00:44:45.0341537Z         
2025-09-20T00:44:45.0341867Z           with mongodbatlas_stream_connection.test,
2025-09-20T00:44:45.0342633Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-20T00:44:45.0343344Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-20T00:44:45.0343675Z         
2025-09-20T00:44:45.0344578Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68cdf493d78c355a113588a0/streams/test-acc-tf-s-320417300866518122/connections
2025-09-20T00:44:45.0345583Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-20T00:44:45.0346147Z         request content produced the validation error: The project id
2025-09-20T00:44:45.0346869Z         68cdf493d78c355a113588a0 and region US_EAST_1 does not have a VPC Peering
2025-09-20T00:44:45.0347660Z         connection. Reason: Bad Request. Params: [The project id
2025-09-20T00:44:45.0348353Z         68cdf493d78c355a113588a0 and region US_EAST_1 does not have a VPC Peering
2025-09-20T00:44:45.0348800Z         connection], BadRequestDetail: 
2025-09-20T00:44:45.0349195Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (161.42s)
```

- 2025-09-21 PASS 2 minutes
- 2025-09-22

### Error 2025-09-22T00:50:09+00:00
```
2025-09-22T00:50:09.7043225Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-22T00:50:09.7060199Z    test_terraform_path=/home/runner/work/_temp/0d42ea4b-c212-4f52-a493-fc1470294e0b/terraform test_working_directory=/tmp/plugintest3956614170 test_step_number=1
2025-09-22T00:50:09.7061422Z     resource_stream_connection_test.go:161: Step 1/2 error: Error running apply: exit status 1
2025-09-22T00:50:09.7062218Z         
2025-09-22T00:50:09.7062731Z         Error: error creating resource
2025-09-22T00:50:09.7063180Z         
2025-09-22T00:50:09.7063529Z           with mongodbatlas_stream_connection.test,
2025-09-22T00:50:09.7064615Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-09-22T00:50:09.7065223Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-09-22T00:50:09.7065526Z         
2025-09-22T00:50:09.7066292Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68d09882e965b05ddeb676c0/streams/test-acc-tf-s-3227416594353979564/connections
2025-09-22T00:50:09.7067107Z         POST: HTTP 400 Bad Request (Error code: "VALIDATION_ERROR") Detail: The
2025-09-22T00:50:09.7067673Z         request content produced the validation error: The project id
2025-09-22T00:50:09.7068264Z         68d09882e965b05ddeb676c0 and region US_EAST_1 does not have a VPC Peering
2025-09-22T00:50:09.7068816Z         connection. Reason: Bad Request. Params: [The project id
2025-09-22T00:50:09.7069381Z         68d09882e965b05ddeb676c0 and region US_EAST_1 does not have a VPC Peering
2025-09-22T00:50:09.7069838Z         connection], BadRequestDetail: 
2025-09-22T00:50:09.7070237Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (163.21s)
```

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