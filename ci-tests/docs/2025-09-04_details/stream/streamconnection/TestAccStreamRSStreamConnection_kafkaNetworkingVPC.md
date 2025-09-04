# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 43 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, FAIL(x 26) PASS(x 17)
Success rate: 39.53%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-06 01:08](#error-2025-08-06t0108080000) |  | dev |  | 653.02s
[2025-08-07 14:30](#error-2025-08-07t1430180000) |  | dev |  | 645.07s
[2025-08-08 01:03](#error-2025-08-08t0103170000) |  | dev | flaky_400 | 652.08s
[2025-08-09 01:05](#error-2025-08-09t0105240000) |  | dev |  | 642.00s
[2025-08-10 01:15](#error-2025-08-10t0115050000) |  | qa |  | 654.03s
[2025-08-11 01:57](#error-2025-08-11t0157150000) |  | dev |  | 1044.05s
[2025-08-12 17:55](#error-2025-08-12t1755440000) |  | dev |  | 642.02s
[2025-08-15 00:56](#error-2025-08-15t0056450000) |  | dev |  | 642.08s
[2025-08-15 14:17](#error-2025-08-15t1417060000) |  | dev |  | 646.09s
[2025-08-17 01:18](#error-2025-08-17t0118020000) |  | qa |  | 640.08s
[2025-08-18 16:09](#error-2025-08-18t1609420000) |  | dev |  | 652.01s
[2025-08-19 01:03](#error-2025-08-19t0103590000) |  | dev |  | 654.01s
[2025-08-20 01:00](#error-2025-08-20t0100160000) |  | dev |  | 644.01s
[2025-08-23 01:00](#error-2025-08-23t0100140000) |  | dev | flaky_500 | 642.05s
[2025-08-24 00:52](#error-2025-08-24t0052470000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68aa5d369bbb8c4ee1f82dfd/streams/test-acc-tf-s-3344321080932301602/connections | qa | flaky_500 | 162.04s
[2025-08-25 01:02](#error-2025-08-25t0102540000) |  | dev |  | 652.05s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2025-09-01 07:26](#error-2025-09-01t0726310000) |  | dev |  | 652.06s
[2025-09-01 09:08](#error-2025-09-01t0908350000) |  | dev |  | 1800.07s
[2025-09-01 11:39](#error-2025-09-01t1139190000) |  | dev |  | 641.10s
[2025-09-01 12:51](#error-2025-09-01t1251520000) |  | dev |  | 644.01s
[2025-09-01 15:34](#error-2025-09-01t1534240000) |  | dev |  | 642.01s
[2025-09-01 16:41](#error-2025-09-01t1641530000) |  | dev |  | 652.01s
[2025-09-02 01:04](#error-2025-09-02t0104140000) |  | dev |  | 643.05s
[2025-09-03 01:07](#error-2025-09-03t0107170000) |  | dev |  | 642.02s
[2025-09-04 01:04](#error-2025-09-04t0104350000) |  | dev |  | 642.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06

### Error 2025-08-06T01:08:08+00:00
```
2025-08-06T01:08:08.0693152Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-06T01:08:08.0712373Z    test_working_directory=/tmp/plugintest4100165205 test_step_number=2 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/50a44653-d68c-4d05-805b-47f1e08fed7a/terraform
2025-08-06T01:08:08.0714134Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-06T01:08:08.0715370Z         
2025-08-06T01:08:08.0715909Z         Error: error deleting resource
2025-08-06T01:08:08.0716414Z         
2025-08-06T01:08:08.0717597Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6892a2402e7dcc2aaecb2a22/streams/test-acc-tf-s-6055968332067243449/connections/kafka-conn-vpc
2025-08-06T01:08:08.0718580Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-06T01:08:08.0719132Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-06T01:08:08.0719772Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-06T01:08:08.0720373Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-06T01:08:08.0720848Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (653.20s)
```

- 2025-08-07
  - PASS 4 minutes
  - FAIL 10 minutes

### Error 2025-08-07T14:30:18+00:00
```
2025-08-07T14:30:18.9556494Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-07T14:30:18.9577910Z   
2025-08-07T14:30:18.9578996Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-07T14:30:18.9579970Z         
2025-08-07T14:30:18.9580463Z         Error: error deleting resource
2025-08-07T14:30:18.9581095Z         
2025-08-07T14:30:18.9582679Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6894b2aae641e667c06c1ab1/streams/test-acc-tf-s-2149325750254560365/connections/kafka-conn-vpc
2025-08-07T14:30:18.9584041Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-07T14:30:18.9585201Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-07T14:30:18.9586307Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-07T14:30:18.9587340Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-07T14:30:18.9588182Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (645.65s)
```

- 2025-08-08

### Error 2025-08-08T01:03:17+00:00
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-08-08T01:03:17.737000+00:00-TestAccStreamRSStreamConnection_kafkaNetworkingVPC',confidence=1.0,ts_when='27 days ago')

```
2025-08-08T01:03:17.0737950Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-08T01:03:17.0760027Z   
2025-08-08T01:03:17.0761219Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-08T01:03:17.0762180Z         
2025-08-08T01:03:17.0762694Z         Error: error deleting resource
2025-08-08T01:03:17.0763197Z         
2025-08-08T01:03:17.0764773Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689545427ffcc5766e4534c4/streams/test-acc-tf-s-7716988025242141365/connections/kafka-conn-vpc
2025-08-08T01:03:17.0766173Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-08T01:03:17.0767151Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-08T01:03:17.0768466Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-08T01:03:17.0769495Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-08T01:03:17.0770342Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (652.79s)
```

- 2025-08-09

### Error 2025-08-09T01:05:24+00:00
```
2025-08-09T01:05:24.4587978Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-09T01:05:24.4608277Z    test_step_number=2 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/8b336469-d729-4593-a410-b4d5cdfab771/terraform test_working_directory=/tmp/plugintest3304624389
2025-08-09T01:05:24.4610652Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-09T01:05:24.4611558Z         
2025-08-09T01:05:24.4612042Z         Error: error deleting resource
2025-08-09T01:05:24.4612498Z         
2025-08-09T01:05:24.4614043Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6896963518106a5d9025959d/streams/test-acc-tf-s-8487051486197621647/connections/kafka-conn-vpc
2025-08-09T01:05:24.4615731Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-09T01:05:24.4616675Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-09T01:05:24.4617768Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-09T01:05:24.4618786Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-09T01:05:24.4619634Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (642.04s)
```

- 2025-08-10

### Error 2025-08-10T01:15:05+00:00
```
2025-08-10T01:15:05.6142139Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-10T01:15:05.6163729Z   
2025-08-10T01:15:05.6164789Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-10T01:15:05.6165685Z         
2025-08-10T01:15:05.6166163Z         Error: error deleting resource
2025-08-10T01:15:05.6166617Z         
2025-08-10T01:15:05.6168182Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6897e8cd39cf8e2817e3c9dc/streams/test-acc-tf-s-2539241424947313573/connections/kafka-conn-vpc
2025-08-10T01:15:05.6169676Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-10T01:15:05.6170619Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-10T01:15:05.6171702Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-10T01:15:05.6172716Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-10T01:15:05.6173541Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (654.32s)
```

- 2025-08-11

### Error 2025-08-11T01:57:15+00:00
```
2025-08-11T01:57:15.0191127Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-11T01:57:15.0203322Z   
2025-08-11T01:57:15.0204195Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-11T01:57:15.0204723Z         
2025-08-11T01:57:15.0204998Z         Error: error deleting resource
2025-08-11T01:57:15.0205259Z         
2025-08-11T01:57:15.0206127Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68993a0bf3d97116eb6405f0/streams/test-acc-tf-s-5239790866324550752/connections/kafka-conn-vpc
2025-08-11T01:57:15.0206874Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-11T01:57:15.0207546Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-11T01:57:15.0208166Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-11T01:57:15.0208735Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-11T01:57:15.0209210Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1044.52s)
```

- 2025-08-12
  - PASS 2 minutes
  - FAIL 10 minutes

### Error 2025-08-12T17:55:44+00:00
```
2025-08-12T17:55:44.9628559Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-12T17:55:44.9641371Z   
2025-08-12T17:55:44.9641952Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-12T17:55:44.9642460Z         
2025-08-12T17:55:44.9642733Z         Error: error deleting resource
2025-08-12T17:55:44.9642995Z         
2025-08-12T17:55:44.9644010Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689b79ee230cf52517c4d364/streams/test-acc-tf-s-7144854503107158277/connections/kafka-conn-vpc
2025-08-12T17:55:44.9644740Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-12T17:55:44.9645245Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-12T17:55:44.9645832Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-12T17:55:44.9646386Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-12T17:55:44.9646856Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (642.17s)
```

- 2025-08-13 PASS 4 minutes
- 2025-08-14 PASS 2 minutes
- 2025-08-15
  - FAIL 10 minutes

### Error 2025-08-15T00:56:45+00:00
```
2025-08-15T00:56:45.7768811Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-15T00:56:45.7781171Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/341f9c08-1026-4a55-91a8-e243fc6ad0a3/terraform test_working_directory=/tmp/plugintest4179858748 test_step_number=2
2025-08-15T00:56:45.7782443Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-15T00:56:45.7782953Z         
2025-08-15T00:56:45.7783221Z         Error: error deleting resource
2025-08-15T00:56:45.7783479Z         
2025-08-15T00:56:45.7784333Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689e7f9835dc4c7be8091d8e/streams/test-acc-tf-s-927666963108030799/connections/kafka-conn-vpc
2025-08-15T00:56:45.7785063Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-15T00:56:45.7785570Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-15T00:56:45.7786162Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-15T00:56:45.7786718Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-15T00:56:45.7787179Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (642.83s)
```

  - FAIL 10 minutes

### Error 2025-08-15T14:17:06+00:00
```
2025-08-15T14:17:06.6991572Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-15T14:17:06.6993552Z     resource_stream_connection_test.go:112: Creating execution project: test-acc-tf-p-2825312394774114306
2025-08-15T14:17:06.6996165Z     resource_stream_connection_test.go:112: Creating execution stream instance: test-acc-tf-s-3062318505156577257
2025-08-15T14:17:06.7018214Z    test_working_directory=/tmp/plugintest1670931214 test_step_number=2
2025-08-15T14:17:06.7019101Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-15T14:17:06.7019697Z         
2025-08-15T14:17:06.7020007Z         Error: error deleting resource
2025-08-15T14:17:06.7020301Z         
2025-08-15T14:17:06.7021284Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689f3edbc65c381123aa7823/streams/test-acc-tf-s-3062318505156577257/connections/kafka-conn-vpc
2025-08-15T14:17:06.7022138Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-15T14:17:06.7022678Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-15T14:17:06.7023301Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-15T14:17:06.7023900Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-15T14:17:06.7024383Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (646.92s)
```

- 2025-08-16 PASS 3 minutes
- 2025-08-17

### Error 2025-08-17T01:18:02+00:00
```
2025-08-17T01:18:02.6232247Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-17T01:18:02.6253946Z   
2025-08-17T01:18:02.6255012Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-17T01:18:02.6255936Z         
2025-08-17T01:18:02.6256412Z         Error: error deleting resource
2025-08-17T01:18:02.6256873Z         
2025-08-17T01:18:02.6258436Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68a122d8aafa9a76ca8bc085/streams/test-acc-tf-s-6508215644362021561/connections/kafka-conn-vpc
2025-08-17T01:18:02.6259931Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-17T01:18:02.6260882Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-17T01:18:02.6261984Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-17T01:18:02.6263029Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-17T01:18:02.6263862Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (640.82s)
```

- 2025-08-18
  - PASS 2 minutes
  - FAIL 10 minutes

### Error 2025-08-18T16:09:42+00:00
```
2025-08-18T16:09:42.7412061Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-18T16:09:42.7423451Z    test_working_directory=/tmp/plugintest2171813821 test_step_number=2 test_terraform_path=/home/runner/work/_temp/3944c132-00fe-4177-90e9-184159e70e50/terraform test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-18T16:09:42.7424685Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-18T16:09:42.7425193Z         
2025-08-18T16:09:42.7425457Z         Error: error deleting resource
2025-08-18T16:09:42.7425716Z         
2025-08-18T16:09:42.7426539Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a34a49464054378f63e840/streams/test-acc-tf-s-179467121378619019/connections/kafka-conn-vpc
2025-08-18T16:09:42.7427264Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-18T16:09:42.7427769Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-18T16:09:42.7428360Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-18T16:09:42.7429054Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-18T16:09:42.7429512Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (652.09s)
```

- 2025-08-19

### Error 2025-08-19T01:03:59+00:00
```
2025-08-19T01:03:59.0860135Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-19T01:03:59.0881061Z    test_step_number=2 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/b2a725bc-04b3-4234-9289-9b0f9b9b89ba/terraform test_working_directory=/tmp/plugintest514712706
2025-08-19T01:03:59.0883573Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-19T01:03:59.0884816Z         
2025-08-19T01:03:59.0885601Z         Error: error deleting resource
2025-08-19T01:03:59.0885977Z         
2025-08-19T01:03:59.0886860Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a3c53507498377103b6315/streams/test-acc-tf-s-6793275448132987697/connections/kafka-conn-vpc
2025-08-19T01:03:59.0887632Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-19T01:03:59.0888173Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-19T01:03:59.0888782Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-19T01:03:59.0889357Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-19T01:03:59.0889834Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (654.10s)
```

- 2025-08-20
  - FAIL 10 minutes

### Error 2025-08-20T01:00:16+00:00
```
2025-08-20T01:00:16.5044578Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-20T01:00:16.5065664Z    test_working_directory=/tmp/plugintest1112577744 test_step_number=2
2025-08-20T01:00:16.5067389Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-20T01:00:16.5068504Z         
2025-08-20T01:00:16.5069020Z         Error: error deleting resource
2025-08-20T01:00:16.5069567Z         
2025-08-20T01:00:16.5071202Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a516648c0d724731cbacf4/streams/test-acc-tf-s-4175994658656719539/connections/kafka-conn-vpc
2025-08-20T01:00:16.5072618Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-20T01:00:16.5073467Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-20T01:00:16.5074084Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-20T01:00:16.5074664Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-20T01:00:16.5075144Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (644.06s)
```

  - PASS 3 minutes
- 2025-08-21 PASS 3 minutes
- 2025-08-22 PASS 5 minutes
- 2025-08-23

### Error 2025-08-23T01:00:14+00:00
```
2025-08-23T01:00:14.1430526Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-23T01:00:14.1450821Z    test_terraform_path=/home/runner/work/_temp/18c31d9a-2ab3-4952-867e-1a19432b4980/terraform test_working_directory=/tmp/plugintest2279878393 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-23T01:00:14.1453135Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-23T01:00:14.1454052Z         
2025-08-23T01:00:14.1454541Z         Error: error deleting resource
2025-08-23T01:00:14.1455004Z         
2025-08-23T01:00:14.1456709Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68a90aceb4cd9f3d80a3118f/streams/test-acc-tf-s-2002163263808771961/connections/kafka-conn-vpc
2025-08-23T01:00:14.1458286Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-23T01:00:14.1459236Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-23T01:00:14.1460338Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-23T01:00:14.1461386Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-23T01:00:14.1462229Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (642.55s)
```

- 2025-08-24

### Error 2025-08-24T00:52:47+00:00
```
2025-08-24T00:52:47.5467186Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-24T00:52:47.5488485Z    test_working_directory=/tmp/plugintest163071829 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/d2bdc5ff-67dd-4337-933f-9f535c8e715a/terraform
2025-08-24T00:52:47.5490614Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:52:47.5491429Z         
2025-08-24T00:52:47.5491978Z         Error: error creating resource
2025-08-24T00:52:47.5492511Z         
2025-08-24T00:52:47.5493159Z           with mongodbatlas_stream_connection.test,
2025-08-24T00:52:47.5494933Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-08-24T00:52:47.5496281Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-08-24T00:52:47.5496833Z         
2025-08-24T00:52:47.5498032Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d369bbb8c4ee1f82dfd/streams/test-acc-tf-s-3344321080932301602/connections
2025-08-24T00:52:47.5498979Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-08-24T00:52:47.5499611Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-08-24T00:52:47.5500023Z         BadRequestDetail: 
2025-08-24T00:52:47.5500412Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (162.40s)
```

- 2025-08-25

### Error 2025-08-25T01:02:54+00:00
```
2025-08-25T01:02:54.2380024Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-08-25T01:02:54.2401626Z   
2025-08-25T01:02:54.2402725Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-25T01:02:54.2403639Z         
2025-08-25T01:02:54.2404139Z         Error: error deleting resource
2025-08-25T01:02:54.2404608Z         
2025-08-25T01:02:54.2406192Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68abae4fcd8afb23a27a2e54/streams/test-acc-tf-s-9135092100345411028/connections/kafka-conn-vpc
2025-08-25T01:02:54.2407961Z         DELETE: HTTP 409 Conflict (Error code:
2025-08-25T01:02:54.2408941Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-08-25T01:02:54.2410064Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-08-25T01:02:54.2411110Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-08-25T01:02:54.2411946Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (652.53s)
```

- 2025-08-26 PASS 5 minutes
- 2025-08-27 PASS 11 minutes
- 2025-08-28 PASS 4 minutes
- 2025-08-29
  - PASS 6 minutes
  - PASS 2 minutes
- 2025-08-30 PASS 2 minutes
- 2025-08-31 PASS 5 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.8530735Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-01T00:30:38.8531848Z     resource_stream_connection_test.go:112: Creating execution project: test-acc-tf-p-9185028600355356518
2025-09-01T00:30:38.8532774Z     resource_stream_connection_test.go:112: 
2025-09-01T00:30:38.8534354Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.8537552Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.8540654Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.8544198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:112
2025-09-01T00:30:38.8545660Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.8550607Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8553137Z         	Test:       	TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-01T00:30:38.8557592Z         	Messages:   	Project creation failed: test-acc-tf-p-9185028600355356518, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.8560391Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (0.16s)
```

  - FAIL 10 minutes

### Error 2025-09-01T07:26:31+00:00
```
2025-09-01T07:26:31.9652301Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-01T07:26:31.9664438Z    test_step_number=2
2025-09-01T07:26:31.9665043Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T07:26:31.9665545Z         
2025-09-01T07:26:31.9665811Z         Error: error deleting resource
2025-09-01T07:26:31.9666075Z         
2025-09-01T07:26:31.9673172Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b535f946ef690a79da5cc6/streams/test-acc-tf-s-1665667189611421299/connections/kafka-conn-vpc
2025-09-01T07:26:31.9673987Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-01T07:26:31.9674523Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-01T07:26:31.9675125Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-01T07:26:31.9675690Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-01T07:26:31.9676173Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (652.58s)
```

  - FAIL 30 minutes

### Error 2025-09-01T09:08:35+00:00
```
2025-09-01T09:08:35.9701849Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-01T09:08:35.9716075Z   
2025-09-01T09:08:35.9717022Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-09-01T09:08:35.9717744Z         
2025-09-01T09:08:35.9718614Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-09-01T09:08:35.9719301Z         
2025-09-01T09:08:35.9719849Z           with mongodbatlas_network_peering.test,
2025-09-01T09:08:35.9720958Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-09-01T09:08:35.9722125Z           19: 	resource "mongodbatlas_network_peering" "test" {
2025-09-01T09:08:35.9722632Z         
2025-09-01T09:08:35.9759684Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T09:08:35.9760625Z         
2025-09-01T09:08:35.9762018Z         Error: error deleting MongoDB Network Peering Container (68b556bfe551ff23b40a89da): couldn't find resource (21 retries)
2025-09-01T09:08:35.9762917Z         
2025-09-01T09:08:35.9763706Z         Error: error deleting resource
2025-09-01T09:08:35.9764155Z         
2025-09-01T09:08:35.9765662Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551e7e551ff23b409296b/streams/test-acc-tf-s-8830201793938651764/connections/kafka-conn-vpc
2025-09-01T09:08:35.9766958Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-01T09:08:35.9767871Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-01T09:08:35.9768936Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-01T09:08:35.9769949Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-01T09:08:35.9770762Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1800.65s)
```

  - FAIL 10 minutes

### Error 2025-09-01T11:39:19+00:00
```
2025-09-01T11:39:19.3138620Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-01T11:39:19.3159707Z   
2025-09-01T11:39:19.3160859Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T11:39:19.3161930Z         
2025-09-01T11:39:19.3162410Z         Error: error deleting resource
2025-09-01T11:39:19.3162870Z         
2025-09-01T11:39:19.3164398Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b57e6a29f7e16965d87eeb/streams/test-acc-tf-s-1091877936775166363/connections/kafka-conn-vpc
2025-09-01T11:39:19.3165935Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-01T11:39:19.3166862Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-01T11:39:19.3167938Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-01T11:39:19.3168945Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-01T11:39:19.3169754Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (641.97s)
```

  - FAIL 10 minutes

### Error 2025-09-01T12:51:52+00:00
```
2025-09-01T12:51:52.2609871Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-01T12:51:52.2630731Z    test_working_directory=/tmp/plugintest2826809552 test_step_number=2
2025-09-01T12:51:52.2632159Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T12:51:52.2633304Z         
2025-09-01T12:51:52.2633788Z         Error: error deleting resource
2025-09-01T12:51:52.2634258Z         
2025-09-01T12:51:52.2635788Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5902a72698f11ba723880/streams/test-acc-tf-s-4424039129333110000/connections/kafka-conn-vpc
2025-09-01T12:51:52.2637114Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-01T12:51:52.2638044Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-01T12:51:52.2639132Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-01T12:51:52.2640339Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-01T12:51:52.2641156Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (644.13s)
```

  - PASS 2 minutes
  - FAIL 10 minutes

### Error 2025-09-01T15:34:24+00:00
```
2025-09-01T15:34:24.0862185Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-01T15:34:24.0876550Z   
2025-09-01T15:34:24.0877539Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T15:34:24.0878531Z         
2025-09-01T15:34:24.0879026Z         Error: error deleting resource
2025-09-01T15:34:24.0879296Z         
2025-09-01T15:34:24.0880144Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5b54760c05d1e5a76fc69/streams/test-acc-tf-s-2825861141491935015/connections/kafka-conn-vpc
2025-09-01T15:34:24.0881087Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-01T15:34:24.0881608Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-01T15:34:24.0882211Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-01T15:34:24.0882779Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-01T15:34:24.0883584Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (642.07s)
```

  - FAIL 10 minutes

### Error 2025-09-01T16:41:53+00:00
```
2025-09-01T16:41:53.0553416Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-01T16:41:53.0567284Z   
2025-09-01T16:41:53.0567977Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T16:41:53.0568603Z         
2025-09-01T16:41:53.0569120Z         Error: error deleting resource
2025-09-01T16:41:53.0569397Z         
2025-09-01T16:41:53.0570405Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5c5892fc5f0455fbb40dd/streams/test-acc-tf-s-5650615940605726396/connections/kafka-conn-vpc
2025-09-01T16:41:53.0571506Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-01T16:41:53.0572092Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-01T16:41:53.0572757Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-01T16:41:53.0573455Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-01T16:41:53.0574023Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (652.07s)
```

- 2025-09-02

### Error 2025-09-02T01:04:14+00:00
```
2025-09-02T01:04:14.7311823Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-09-02T01:04:14.7332427Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/f0e16fac-b274-4569-a410-b1c2b30a06cc/terraform
2025-09-02T01:04:14.7334418Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-02T01:04:14.7335527Z         
2025-09-02T01:04:14.7336003Z         Error: error deleting resource
2025-09-02T01:04:14.7336616Z         
2025-09-02T01:04:14.7338155Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b639f86f465849b5a45558/streams/test-acc-tf-s-4343616034261322912/connections/kafka-conn-vpc
2025-09-02T01:04:14.7339489Z         DELETE: HTTP 409 Conflict (Error code:
2025-09-02T01:04:14.7340417Z         "STREAM_KAFKA_CONNECTION_IS_DEPLOYING") Detail: Stream Kafka connection
2025-09-02T01:04:14.7341494Z         kafka-conn-vpc is currently deploying. Please retry the request later.
2025-09-02T01:04:14.7342503Z         Reason: Conflict. Params: [kafka-conn-vpc], BadRequestDetail: 
2025-09-02T01:04:14.7343324Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (643.48s)
```

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
