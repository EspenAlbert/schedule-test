# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 26) FAIL(x 21)
Success rate: 55.32%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor | qa | 2.05s
[2025-09-08 09:53](#error-2025-09-08t0953420000) | STREAM_PROCESSOR_TIMEOUT /api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/processor/processor-started-to-stopped:start | qa | 36.07s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor | qa | 0.07s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor | qa | 0.09s
[2025-09-25 01:39](#error-2025-09-25t0139080000) |  | dev | 11.04s
[2025-09-26 00:48](#error-2025-09-26t0048160000) |  | dev | 11.01s
[2025-09-27 00:51](#error-2025-09-27t0051060000) |  | dev | 12.02s
[2025-09-29 00:53](#error-2025-09-29t0053320000) |  | dev | 11.04s
[2025-09-29 07:27](#error-2025-09-29t0727480000) |  | dev | 12.04s
[2025-09-30 00:48](#error-2025-09-30t0048540000) |  | dev | 10.06s
[2025-09-30 07:47](#error-2025-09-30t0747480000) |  | dev | 10.07s
[2025-09-30 09:31](#error-2025-09-30t0931010000) |  | dev | 12.00s
[2025-10-01 00:53](#error-2025-10-01t0053570000) |  | dev | 11.08s
[2025-10-01 03:48](#error-2025-10-01t0348330000) |  | dev | 11.03s
[2025-10-01 06:06](#error-2025-10-01t0606220000) |  | dev | 10.03s
[2025-10-01 08:09](#error-2025-10-01t0809330000) |  | dev | 11.03s
[2025-10-01 09:31](#error-2025-10-01t0931040000) |  | dev | 11.08s
[2025-10-01 11:01](#error-2025-10-01t1101220000) |  | dev | 11.02s
[2025-10-01 12:09](#error-2025-10-01t1209040000) |  | dev | 10.05s
[2025-10-01 14:54](#error-2025-10-01t1454100000) |  | dev | 11.01s
[2025-10-02 01:34](#error-2025-10-02t0134200000) |  | dev | 10.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 9 seconds
- 2025-09-05 PASS 10 seconds
- 2025-09-06 PASS 9 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2460272Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-07T01:03:05.2461030Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-07T01:03:05.2470323Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-07T01:03:05.2514607Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-07T01:03:05.2515183Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-07T01:03:05.2515549Z         
2025-09-07T01:03:05.2516049Z         Error: error creating resource
2025-09-07T01:03:05.2516323Z         
2025-09-07T01:03:05.2516686Z           with mongodbatlas_stream_processor.processor,
2025-09-07T01:03:05.2517369Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-07T01:03:05.2518002Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-07T01:03:05.2518331Z         
2025-09-07T01:03:05.2519068Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor
2025-09-07T01:03:05.2519877Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-07T01:03:05.2520530Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2025-09-07T01:03:05.2521178Z         problem occur: connection named sample_stream_solar does not exist. Check
2025-09-07T01:03:05.2521812Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-09-07T01:03:05.2522478Z         [processor-started-to-stopped connection named sample_stream_solar does not
2025-09-07T01:03:05.2523075Z         exist. Check sp.listConnections() for available connections],
2025-09-07T01:03:05.2523464Z         BadRequestDetail: 
2025-09-07T01:03:05.2539819Z   
2025-09-07T01:03:05.2627694Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (2.50s)
```

- 2025-09-08
  - PASS 9 seconds
  - FAIL 36 seconds

### Error 2025-09-08T09:53:42+00:00
```
2025-09-08T09:53:42.4015846Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-08T09:53:42.4016486Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-08T09:53:42.4023987Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-08T09:53:42.4104377Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-08T09:53:42.4105058Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-08T09:53:42.4105415Z         
2025-09-08T09:53:42.4106197Z         Error: Error starting stream processor. You need to fix the processor and import the resource or delete it manually and re-run terraform apply.
2025-09-08T09:53:42.4106765Z         
2025-09-08T09:53:42.4107109Z           with mongodbatlas_stream_processor.processor,
2025-09-08T09:53:42.4107780Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-08T09:53:42.4108536Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-08T09:53:42.4108850Z         
2025-09-08T09:53:42.4109799Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2b60cddbf4f6e49b1ea/streams/test-acc-tf-s-2541198098558336914/processor/processor-started-to-stopped:start
2025-09-08T09:53:42.4110744Z         POST: HTTP 504 Gateway Timeout (Error code: "STREAM_PROCESSOR_TIMEOUT")
2025-09-08T09:53:42.4111364Z         Detail: Streams Processor with this name (test-acc-tf-s-2541198098558336914)
2025-09-08T09:53:42.4111929Z         timed out while processing. Reason: Gateway Timeout. Params:
2025-09-08T09:53:42.4112477Z         [test-acc-tf-s-2541198098558336914 processor-started-to-stopped],
2025-09-08T09:53:42.4112872Z         BadRequestDetail: 
2025-09-08T09:53:42.4127025Z   
2025-09-08T09:53:42.4137782Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (36.74s)
```

  - PASS 8 seconds
- 2025-09-09 PASS 9 seconds
- 2025-09-10 PASS 9 seconds
- 2025-09-11 PASS 10 seconds
- 2025-09-12
  - PASS 10 seconds
  - PASS 8 seconds
- 2025-09-13 PASS 10 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8202527Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-14T00:45:38.8203174Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-14T00:45:38.8210721Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-14T00:45:38.8226438Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-14T00:45:38.8227004Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:45:38.8227358Z         
2025-09-14T00:45:38.8227640Z         Error: error creating resource
2025-09-14T00:45:38.8227903Z         
2025-09-14T00:45:38.8228400Z           with mongodbatlas_stream_processor.processor,
2025-09-14T00:45:38.8229082Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-14T00:45:38.8229707Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-14T00:45:38.8230039Z         
2025-09-14T00:45:38.8230758Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor
2025-09-14T00:45:38.8231567Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8232149Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8232739Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8233285Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8233660Z         BadRequestDetail: 
2025-09-14T00:45:38.8248574Z   
2025-09-14T00:45:38.8342244Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.74s)
```

- 2025-09-15
  - PASS 9 seconds
  - PASS 10 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0407636Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-15T06:36:28.0408294Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-15T06:36:28.0416174Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-15T06:36:28.0466183Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-15T06:36:28.0466931Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:36:28.0467412Z         
2025-09-15T06:36:28.0467700Z         Error: error creating resource
2025-09-15T06:36:28.0467999Z         
2025-09-15T06:36:28.0468465Z           with mongodbatlas_stream_processor.processor,
2025-09-15T06:36:28.0469293Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-15T06:36:28.0470063Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-15T06:36:28.0470401Z         
2025-09-15T06:36:28.0471293Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor
2025-09-15T06:36:28.0472296Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0472950Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0473628Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0474306Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0474803Z         BadRequestDetail: 
2025-09-15T06:36:28.0491128Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-15T06:36:28.0575779Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.90s)
```

- 2025-09-16 PASS 8 seconds
- 2025-09-17 PASS 9 seconds
- 2025-09-18 PASS 10 seconds
- 2025-09-19 PASS 9 seconds
- 2025-09-20 PASS 9 seconds
- 2025-09-21 PASS 9 seconds
- 2025-09-22 PASS 10 seconds
- 2025-09-23 PASS 8 seconds
- 2025-09-24 PASS 9 seconds
- 2025-09-25

### Error 2025-09-25T01:39:08+00:00
```
2025-09-25T01:39:08.8427197Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-25T01:39:08.8427838Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-25T01:39:08.8435925Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-25T01:39:08.8456188Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-25T01:39:08.8456759Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-09-25T01:39:08.8457126Z         
2025-09-25T01:39:08.8457505Z         Error: Provider produced inconsistent result after apply
2025-09-25T01:39:08.8457939Z         
2025-09-25T01:39:08.8458397Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-25T01:39:08.8459034Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-25T01:39:08.8459634Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-25T01:39:08.8460050Z         cty.StringVal("CREATED").
2025-09-25T01:39:08.8460302Z         
2025-09-25T01:39:08.8460747Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-25T01:39:08.8461149Z         issue tracker.
2025-09-25T01:39:08.8467623Z   
2025-09-25T01:39:08.8475785Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (11.45s)
```

- 2025-09-26

### Error 2025-09-26T00:48:16+00:00
```
2025-09-26T00:48:16.2322573Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-26T00:48:16.2323250Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-26T00:48:16.2331586Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-26T00:48:16.2363966Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-26T00:48:16.2364562Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-09-26T00:48:16.2364916Z         
2025-09-26T00:48:16.2365323Z         Error: Provider produced inconsistent result after apply
2025-09-26T00:48:16.2365644Z         
2025-09-26T00:48:16.2366159Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-26T00:48:16.2366847Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-26T00:48:16.2367480Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-26T00:48:16.2368123Z         cty.StringVal("CREATED").
2025-09-26T00:48:16.2368387Z         
2025-09-26T00:48:16.2368880Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-26T00:48:16.2369292Z         issue tracker.
2025-09-26T00:48:16.2372910Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (11.09s)
```

- 2025-09-27

### Error 2025-09-27T00:51:06+00:00
```
2025-09-27T00:51:06.5762113Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-27T00:51:06.5762744Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-27T00:51:06.5770545Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-27T00:51:06.5801710Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-27T00:51:06.5802256Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-09-27T00:51:06.5802597Z         
2025-09-27T00:51:06.5803101Z         Error: Provider produced inconsistent result after apply
2025-09-27T00:51:06.5803430Z         
2025-09-27T00:51:06.5803879Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-27T00:51:06.5804725Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-27T00:51:06.5805315Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-27T00:51:06.5805730Z         cty.StringVal("CREATED").
2025-09-27T00:51:06.5805975Z         
2025-09-27T00:51:06.5806410Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-27T00:51:06.5806802Z         issue tracker.
2025-09-27T00:51:06.5810198Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (12.20s)
```

- 2025-09-28 PASS 9 seconds
- 2025-09-29
  - FAIL 11 seconds

### Error 2025-09-29T00:53:32+00:00
```
2025-09-29T00:53:32.4772489Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-29T00:53:32.4773131Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-29T00:53:32.4781162Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-29T00:53:32.4812842Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-29T00:53:32.4813413Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-09-29T00:53:32.4813765Z         
2025-09-29T00:53:32.4814130Z         Error: Provider produced inconsistent result after apply
2025-09-29T00:53:32.4814446Z         
2025-09-29T00:53:32.4814907Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-29T00:53:32.4815537Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T00:53:32.4816120Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-29T00:53:32.4816532Z         cty.StringVal("CREATED").
2025-09-29T00:53:32.4816782Z         
2025-09-29T00:53:32.4817218Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T00:53:32.4817612Z         issue tracker.
2025-09-29T00:53:32.4821259Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (11.40s)
```

  - FAIL 12 seconds

### Error 2025-09-29T07:27:48+00:00
```
2025-09-29T07:27:48.1305043Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-29T07:27:48.1305691Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-29T07:27:48.1314327Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-29T07:27:48.1345237Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-29T07:27:48.1345793Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-09-29T07:27:48.1346139Z         
2025-09-29T07:27:48.1346502Z         Error: Provider produced inconsistent result after apply
2025-09-29T07:27:48.1346824Z         
2025-09-29T07:27:48.1347282Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-29T07:27:48.1348122Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T07:27:48.1348761Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-29T07:27:48.1349251Z         cty.StringVal("CREATED").
2025-09-29T07:27:48.1349495Z         
2025-09-29T07:27:48.1349941Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T07:27:48.1350339Z         issue tracker.
2025-09-29T07:27:48.1353797Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (12.37s)
```

- 2025-09-30
  - FAIL 10 seconds

### Error 2025-09-30T00:48:54+00:00
```
2025-09-30T00:48:54.4357659Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-30T00:48:54.4358352Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-30T00:48:54.4366461Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-30T00:48:54.4374979Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-30T00:48:54.4375576Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-09-30T00:48:54.4375928Z         
2025-09-30T00:48:54.4376357Z         Error: Provider produced inconsistent result after apply
2025-09-30T00:48:54.4376681Z         
2025-09-30T00:48:54.4377212Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-30T00:48:54.4377933Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-30T00:48:54.4378593Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-30T00:48:54.4379083Z         cty.StringVal("CREATED").
2025-09-30T00:48:54.4379340Z         
2025-09-30T00:48:54.4379869Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-30T00:48:54.4380400Z         issue tracker.
2025-09-30T00:48:54.4386699Z    test_working_directory=/tmp/plugintest1424693627
2025-09-30T00:48:54.4407366Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (10.62s)
```

  - FAIL 10 seconds

### Error 2025-09-30T07:47:48+00:00
```
2025-09-30T07:47:48.1738347Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-30T07:47:48.1739113Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-30T07:47:48.1747628Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-30T07:47:48.1768069Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-30T07:47:48.1768630Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-09-30T07:47:48.1768969Z         
2025-09-30T07:47:48.1769723Z         Error: Provider produced inconsistent result after apply
2025-09-30T07:47:48.1770132Z         
2025-09-30T07:47:48.1770612Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-30T07:47:48.1771245Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-30T07:47:48.1771826Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-30T07:47:48.1772237Z         cty.StringVal("CREATED").
2025-09-30T07:47:48.1772491Z         
2025-09-30T07:47:48.1772942Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-30T07:47:48.1773337Z         issue tracker.
2025-09-30T07:47:48.1779364Z    test_terraform_path=/home/runner/work/_temp/502bab90-396a-4615-84a5-fbfc5df45335/terraform test_step_number=2
2025-09-30T07:47:48.1787527Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (10.70s)
```

  - PASS 9 seconds
  - FAIL 12 seconds

### Error 2025-09-30T09:31:01+00:00
```
2025-09-30T09:31:01.6307374Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-30T09:31:01.6308624Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-30T09:31:01.6323403Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-30T09:31:01.6373290Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-30T09:31:01.6373863Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-09-30T09:31:01.6374348Z         
2025-09-30T09:31:01.6374725Z         Error: Provider produced inconsistent result after apply
2025-09-30T09:31:01.6375062Z         
2025-09-30T09:31:01.6375522Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-30T09:31:01.6376162Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-30T09:31:01.6376759Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-30T09:31:01.6377332Z         cty.StringVal("CREATED").
2025-09-30T09:31:01.6377598Z         
2025-09-30T09:31:01.6378037Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-30T09:31:01.6378445Z         issue tracker.
2025-09-30T09:31:01.6381956Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (12.00s)
```

  - PASS 10 seconds
- 2025-10-01
  - FAIL 11 seconds

### Error 2025-10-01T00:53:57+00:00
```
2025-10-01T00:53:57.3036973Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T00:53:57.3037657Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-01T00:53:57.3046111Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T00:53:57.3054095Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T00:53:57.3054679Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-10-01T00:53:57.3055052Z         
2025-10-01T00:53:57.3055438Z         Error: Provider produced inconsistent result after apply
2025-10-01T00:53:57.3055777Z         
2025-10-01T00:53:57.3056264Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T00:53:57.3056915Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T00:53:57.3057529Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T00:53:57.3057958Z         cty.StringVal("CREATED").
2025-10-01T00:53:57.3058219Z         
2025-10-01T00:53:57.3058682Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T00:53:57.3059228Z         issue tracker.
2025-10-01T00:53:57.3065204Z    test_terraform_path=/home/runner/work/_temp/912ad769-4e1d-41b6-9319-84f33a87eb38/terraform test_step_number=2 test_working_directory=/tmp/plugintest740124189 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T00:53:57.3085669Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (11.84s)
```

  - FAIL 11 seconds

### Error 2025-10-01T03:48:33+00:00
```
2025-10-01T03:48:33.3900762Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T03:48:33.3901717Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-01T03:48:33.3910644Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T03:48:33.3941671Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T03:48:33.3942239Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-10-01T03:48:33.3942601Z         
2025-10-01T03:48:33.3942982Z         Error: Provider produced inconsistent result after apply
2025-10-01T03:48:33.3943310Z         
2025-10-01T03:48:33.3943892Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T03:48:33.3944540Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T03:48:33.3945127Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T03:48:33.3945548Z         cty.StringVal("CREATED").
2025-10-01T03:48:33.3945800Z         
2025-10-01T03:48:33.3946251Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T03:48:33.3946658Z         issue tracker.
2025-10-01T03:48:33.3950462Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (11.31s)
```

  - FAIL 10 seconds

### Error 2025-10-01T06:06:22+00:00
```
2025-10-01T06:06:22.2171139Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T06:06:22.2171835Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-01T06:06:22.2180633Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T06:06:22.2190179Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T06:06:22.2190752Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-10-01T06:06:22.2191121Z         
2025-10-01T06:06:22.2191509Z         Error: Provider produced inconsistent result after apply
2025-10-01T06:06:22.2191839Z         
2025-10-01T06:06:22.2192306Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T06:06:22.2193165Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T06:06:22.2193767Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T06:06:22.2194189Z         cty.StringVal("CREATED").
2025-10-01T06:06:22.2194444Z         
2025-10-01T06:06:22.2195069Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T06:06:22.2195487Z         issue tracker.
2025-10-01T06:06:22.2201603Z    test_working_directory=/tmp/plugintest1823651859 test_step_number=2
2025-10-01T06:06:22.2221009Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (10.34s)
```

  - FAIL 11 seconds

### Error 2025-10-01T08:09:33+00:00
```
2025-10-01T08:09:33.9138894Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T08:09:33.9139556Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-01T08:09:33.9147595Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T08:09:33.9180390Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T08:09:33.9180954Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-10-01T08:09:33.9181320Z         
2025-10-01T08:09:33.9181706Z         Error: Provider produced inconsistent result after apply
2025-10-01T08:09:33.9182038Z         
2025-10-01T08:09:33.9182506Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T08:09:33.9183162Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T08:09:33.9183760Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T08:09:33.9184309Z         cty.StringVal("CREATED").
2025-10-01T08:09:33.9184578Z         
2025-10-01T08:09:33.9185031Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T08:09:33.9185444Z         issue tracker.
2025-10-01T08:09:33.9189279Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (11.31s)
```

  - FAIL 11 seconds

### Error 2025-10-01T09:31:04+00:00
```
2025-10-01T09:31:04.5428716Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T09:31:04.5429983Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-01T09:31:04.5440122Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T09:31:04.5449959Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T09:31:04.5450567Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-10-01T09:31:04.5450950Z         
2025-10-01T09:31:04.5451351Z         Error: Provider produced inconsistent result after apply
2025-10-01T09:31:04.5451692Z         
2025-10-01T09:31:04.5452185Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T09:31:04.5452857Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T09:31:04.5453479Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T09:31:04.5453914Z         cty.StringVal("CREATED").
2025-10-01T09:31:04.5454441Z         
2025-10-01T09:31:04.5455125Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T09:31:04.5455560Z         issue tracker.
2025-10-01T09:31:04.5462288Z   
2025-10-01T09:31:04.5486383Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (11.82s)
```

  - FAIL 11 seconds

### Error 2025-10-01T11:01:22+00:00
```
2025-10-01T11:01:22.8131717Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T11:01:22.8132590Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-01T11:01:22.8143110Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T11:01:22.8151300Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T11:01:22.8151901Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-10-01T11:01:22.8152274Z         
2025-10-01T11:01:22.8152670Z         Error: Provider produced inconsistent result after apply
2025-10-01T11:01:22.8153004Z         
2025-10-01T11:01:22.8153672Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T11:01:22.8154335Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T11:01:22.8154939Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T11:01:22.8155372Z         cty.StringVal("CREATED").
2025-10-01T11:01:22.8155628Z         
2025-10-01T11:01:22.8156084Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T11:01:22.8156510Z         issue tracker.
2025-10-01T11:01:22.8162711Z    test_working_directory=/tmp/plugintest1065739444 test_step_number=2
2025-10-01T11:01:22.8183084Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (11.20s)
```

  - FAIL 10 seconds

### Error 2025-10-01T12:09:04+00:00
```
2025-10-01T12:09:04.2444369Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T12:09:04.2445532Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-01T12:09:04.2454152Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T12:09:04.2465719Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T12:09:04.2466349Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-10-01T12:09:04.2466736Z         
2025-10-01T12:09:04.2467151Z         Error: Provider produced inconsistent result after apply
2025-10-01T12:09:04.2467505Z         
2025-10-01T12:09:04.2468005Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T12:09:04.2468697Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T12:09:04.2469329Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T12:09:04.2469791Z         cty.StringVal("CREATED").
2025-10-01T12:09:04.2470257Z         
2025-10-01T12:09:04.2470761Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T12:09:04.2471207Z         issue tracker.
2025-10-01T12:09:04.2478467Z   
2025-10-01T12:09:04.2499351Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (10.54s)
```

  - FAIL 11 seconds

### Error 2025-10-01T14:54:10+00:00
```
2025-10-01T14:54:10.8667125Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T14:54:10.8667742Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-01T14:54:10.8675286Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T14:54:10.8683680Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-01T14:54:10.8684230Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-10-01T14:54:10.8684581Z         
2025-10-01T14:54:10.8684952Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:54:10.8685280Z         
2025-10-01T14:54:10.8685726Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T14:54:10.8686335Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:54:10.8686897Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T14:54:10.8687300Z         cty.StringVal("CREATED").
2025-10-01T14:54:10.8687559Z         
2025-10-01T14:54:10.8687992Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:54:10.8688390Z         issue tracker.
2025-10-01T14:54:10.8695039Z   
2025-10-01T14:54:10.8715959Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (11.08s)
```

- 2025-10-02

### Error 2025-10-02T01:34:20+00:00
```
2025-10-02T01:34:20.1095788Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-02T01:34:20.1096465Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-02T01:34:20.1104342Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-02T01:34:20.1124577Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-02T01:34:20.1125149Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-10-02T01:34:20.1125512Z         
2025-10-02T01:34:20.1125904Z         Error: Provider produced inconsistent result after apply
2025-10-02T01:34:20.1126231Z         
2025-10-02T01:34:20.1126703Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-02T01:34:20.1127343Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-02T01:34:20.1127944Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-02T01:34:20.1128368Z         cty.StringVal("CREATED").
2025-10-02T01:34:20.1128635Z         
2025-10-02T01:34:20.1129262Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-02T01:34:20.1129682Z         issue tracker.
2025-10-02T01:34:20.1139613Z    test_working_directory=/tmp/plugintest3454328480 test_step_number=2
2025-10-02T01:34:20.1149444Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (10.30s)
```
