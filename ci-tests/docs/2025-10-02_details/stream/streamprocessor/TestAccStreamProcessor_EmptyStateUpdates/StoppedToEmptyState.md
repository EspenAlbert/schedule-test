# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 27) FAIL(x 20)
Success rate: 57.45%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor | qa | 2.02s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor | qa | 0.05s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor | qa | 0.05s
[2025-09-25 01:39](#error-2025-09-25t0139080000) |  | dev | 10.05s
[2025-09-26 00:48](#error-2025-09-26t0048160000) |  | dev | 9.05s
[2025-09-27 00:51](#error-2025-09-27t0051060000) |  | dev | 10.03s
[2025-09-29 00:53](#error-2025-09-29t0053320000) |  | dev | 10.08s
[2025-09-29 07:27](#error-2025-09-29t0727480000) |  | dev | 10.09s
[2025-09-30 00:48](#error-2025-09-30t0048540000) |  | dev | 10.01s
[2025-09-30 07:47](#error-2025-09-30t0747480000) |  | dev | 9.04s
[2025-09-30 09:31](#error-2025-09-30t0931010000) |  | dev | 10.01s
[2025-10-01 00:53](#error-2025-10-01t0053570000) |  | dev | 10.03s
[2025-10-01 03:48](#error-2025-10-01t0348330000) |  | dev | 8.03s
[2025-10-01 06:06](#error-2025-10-01t0606220000) |  | dev | 9.08s
[2025-10-01 08:09](#error-2025-10-01t0809330000) |  | dev | 9.09s
[2025-10-01 09:31](#error-2025-10-01t0931040000) |  | dev | 10.03s
[2025-10-01 11:01](#error-2025-10-01t1101220000) |  | dev | 10.01s
[2025-10-01 12:09](#error-2025-10-01t1209040000) |  | dev | 10.01s
[2025-10-01 14:54](#error-2025-10-01t1454100000) |  | dev | 10.04s
[2025-10-02 01:34](#error-2025-10-02t0134200000) |  | dev | 9.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 9 seconds
- 2025-09-05 PASS 10 seconds
- 2025-09-06 PASS 9 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2635372Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-07T01:03:05.2636430Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-09-07T01:03:05.2638076Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-07T01:03:05.2708393Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-07T01:03:05.2709230Z     resource_test.go:218: Step 1/3 error: Error running apply: exit status 1
2025-09-07T01:03:05.2709603Z         
2025-09-07T01:03:05.2709989Z         Error: error creating resource
2025-09-07T01:03:05.2710270Z         
2025-09-07T01:03:05.2710743Z           with mongodbatlas_stream_processor.processor,
2025-09-07T01:03:05.2711559Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-07T01:03:05.2712313Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-07T01:03:05.2712654Z         
2025-09-07T01:03:05.2713529Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor
2025-09-07T01:03:05.2714495Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-07T01:03:05.2715232Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-09-07T01:03:05.2716111Z         problem occur: connection named sample_stream_solar does not exist. Check
2025-09-07T01:03:05.2716880Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-09-07T01:03:05.2717676Z         [processor-stopped-to- connection named sample_stream_solar does not exist.
2025-09-07T01:03:05.2718444Z         Check sp.listConnections() for available connections], BadRequestDetail: 
2025-09-07T01:03:05.2721066Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (2.16s)
```

- 2025-09-08
  - PASS 10 seconds
  - PASS 50 seconds
  - PASS 8 seconds
- 2025-09-09 PASS 8 seconds
- 2025-09-10 PASS 9 seconds
- 2025-09-11 PASS 9 seconds
- 2025-09-12
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-09-13 PASS 11 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8351703Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-14T00:45:38.8352684Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-09-14T00:45:38.8354594Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-14T00:45:38.8379201Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-14T00:45:38.8379911Z     resource_test.go:218: Step 1/3 error: Error running apply: exit status 1
2025-09-14T00:45:38.8380395Z         
2025-09-14T00:45:38.8380679Z         Error: error creating resource
2025-09-14T00:45:38.8381021Z         
2025-09-14T00:45:38.8381449Z           with mongodbatlas_stream_processor.processor,
2025-09-14T00:45:38.8382269Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-14T00:45:38.8383024Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-14T00:45:38.8383375Z         
2025-09-14T00:45:38.8384254Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor
2025-09-14T00:45:38.8385304Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8385974Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8386625Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8387294Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8387793Z         BadRequestDetail: 
2025-09-14T00:45:38.8403363Z    test_working_directory=/tmp/plugintest1112148999 test_step_number=1 test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-09-14T00:45:38.8438677Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.46s)
```

- 2025-09-15
  - PASS 9 seconds
  - PASS 10 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0581422Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-15T06:36:28.0582274Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-09-15T06:36:28.0583950Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-15T06:36:28.0643374Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-15T06:36:28.0643950Z     resource_test.go:218: Step 1/3 error: Error running apply: exit status 1
2025-09-15T06:36:28.0644359Z         
2025-09-15T06:36:28.0644651Z         Error: error creating resource
2025-09-15T06:36:28.0644924Z         
2025-09-15T06:36:28.0645292Z           with mongodbatlas_stream_processor.processor,
2025-09-15T06:36:28.0646120Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-15T06:36:28.0646776Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-15T06:36:28.0647130Z         
2025-09-15T06:36:28.0647892Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor
2025-09-15T06:36:28.0648726Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0649330Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0649948Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0650515Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0650908Z         BadRequestDetail: 
2025-09-15T06:36:28.0653059Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.53s)
```

- 2025-09-16 PASS 8 seconds
- 2025-09-17 PASS 10 seconds
- 2025-09-18 PASS 10 seconds
- 2025-09-19 PASS 9 seconds
- 2025-09-20 PASS 8 seconds
- 2025-09-21 PASS 31 seconds
- 2025-09-22 PASS 10 seconds
- 2025-09-23 PASS 9 seconds
- 2025-09-24 PASS 8 seconds
- 2025-09-25

### Error 2025-09-25T01:39:08+00:00
```
2025-09-25T01:39:08.8482267Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-25T01:39:08.8483108Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-09-25T01:39:08.8484949Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-25T01:39:08.8502225Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-25T01:39:08.8502806Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-09-25T01:39:08.8503178Z         
2025-09-25T01:39:08.8503559Z         Error: Provider produced inconsistent result after apply
2025-09-25T01:39:08.8504111Z         
2025-09-25T01:39:08.8504588Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-25T01:39:08.8505246Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-25T01:39:08.8505853Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-25T01:39:08.8506271Z         cty.StringVal("CREATED").
2025-09-25T01:39:08.8506523Z         
2025-09-25T01:39:08.8506974Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-25T01:39:08.8507380Z         issue tracker.
2025-09-25T01:39:08.8508856Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.50s)
```

- 2025-09-26

### Error 2025-09-26T00:48:16+00:00
```
2025-09-26T00:48:16.2378990Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-26T00:48:16.2379877Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-09-26T00:48:16.2381531Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-26T00:48:16.2388899Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-26T00:48:16.2389474Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-09-26T00:48:16.2389829Z         
2025-09-26T00:48:16.2390249Z         Error: Provider produced inconsistent result after apply
2025-09-26T00:48:16.2390577Z         
2025-09-26T00:48:16.2391095Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-26T00:48:16.2391790Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-26T00:48:16.2392433Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-26T00:48:16.2392869Z         cty.StringVal("CREATED").
2025-09-26T00:48:16.2393120Z         
2025-09-26T00:48:16.2393622Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-26T00:48:16.2394031Z         issue tracker.
2025-09-26T00:48:16.2395554Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (9.48s)
```

- 2025-09-27

### Error 2025-09-27T00:51:06+00:00
```
2025-09-27T00:51:06.5816158Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-27T00:51:06.5816987Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-09-27T00:51:06.5818598Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-27T00:51:06.5825890Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-27T00:51:06.5826430Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-09-27T00:51:06.5826774Z         
2025-09-27T00:51:06.5827137Z         Error: Provider produced inconsistent result after apply
2025-09-27T00:51:06.5827454Z         
2025-09-27T00:51:06.5827904Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-27T00:51:06.5828531Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-27T00:51:06.5829111Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-27T00:51:06.5829528Z         cty.StringVal("CREATED").
2025-09-27T00:51:06.5829773Z         
2025-09-27T00:51:06.5830206Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-27T00:51:06.5830606Z         issue tracker.
2025-09-27T00:51:06.5832085Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.29s)
```

- 2025-09-28 PASS 9 seconds
- 2025-09-29
  - FAIL 10 seconds

### Error 2025-09-29T00:53:32+00:00
```
2025-09-29T00:53:32.4827017Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-29T00:53:32.4827841Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-09-29T00:53:32.4829583Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-29T00:53:32.4836809Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-29T00:53:32.4837459Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-09-29T00:53:32.4837937Z         
2025-09-29T00:53:32.4838323Z         Error: Provider produced inconsistent result after apply
2025-09-29T00:53:32.4838853Z         
2025-09-29T00:53:32.4839383Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-29T00:53:32.4840076Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T00:53:32.4840808Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-29T00:53:32.4841340Z         cty.StringVal("CREATED").
2025-09-29T00:53:32.4841596Z         
2025-09-29T00:53:32.4842183Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T00:53:32.4842612Z         issue tracker.
2025-09-29T00:53:32.4844373Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.78s)
```

  - FAIL 10 seconds

### Error 2025-09-29T07:27:48+00:00
```
2025-09-29T07:27:48.1362066Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-29T07:27:48.1362892Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-09-29T07:27:48.1364613Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-29T07:27:48.1372004Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-29T07:27:48.1372554Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-09-29T07:27:48.1372912Z         
2025-09-29T07:27:48.1373282Z         Error: Provider produced inconsistent result after apply
2025-09-29T07:27:48.1373604Z         
2025-09-29T07:27:48.1374063Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-29T07:27:48.1374701Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T07:27:48.1375288Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-29T07:27:48.1375698Z         cty.StringVal("CREATED").
2025-09-29T07:27:48.1375957Z         
2025-09-29T07:27:48.1376395Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T07:27:48.1376792Z         issue tracker.
2025-09-29T07:27:48.1378484Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.86s)
```

- 2025-09-30
  - FAIL 10 seconds

### Error 2025-09-30T00:48:54+00:00
```
2025-09-30T00:48:54.4414870Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-30T00:48:54.4415776Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-09-30T00:48:54.4417430Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-30T00:48:54.4425030Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-30T00:48:54.4425616Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-09-30T00:48:54.4425978Z         
2025-09-30T00:48:54.4426402Z         Error: Provider produced inconsistent result after apply
2025-09-30T00:48:54.4426730Z         
2025-09-30T00:48:54.4427266Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-30T00:48:54.4427983Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-30T00:48:54.4428638Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-30T00:48:54.4429081Z         cty.StringVal("CREATED").
2025-09-30T00:48:54.4429338Z         
2025-09-30T00:48:54.4429860Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-30T00:48:54.4430474Z         issue tracker.
2025-09-30T00:48:54.4432189Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.12s)
```

  - FAIL 9 seconds

### Error 2025-09-30T07:47:48+00:00
```
2025-09-30T07:47:48.1810386Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-30T07:47:48.1811239Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-09-30T07:47:48.1813048Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-30T07:47:48.1820237Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-30T07:47:48.1820802Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-09-30T07:47:48.1821161Z         
2025-09-30T07:47:48.1821536Z         Error: Provider produced inconsistent result after apply
2025-09-30T07:47:48.1821866Z         
2025-09-30T07:47:48.1822323Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-30T07:47:48.1822964Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-30T07:47:48.1823549Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-30T07:47:48.1823969Z         cty.StringVal("CREATED").
2025-09-30T07:47:48.1824223Z         
2025-09-30T07:47:48.1824672Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-30T07:47:48.1825077Z         issue tracker.
2025-09-30T07:47:48.1826535Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (9.36s)
```

  - PASS 9 seconds
  - FAIL 10 seconds

### Error 2025-09-30T09:31:01+00:00
```
2025-09-30T09:31:01.6387809Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-30T09:31:01.6388677Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-09-30T09:31:01.6390328Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-30T09:31:01.6397943Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-30T09:31:01.6398499Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-09-30T09:31:01.6398865Z         
2025-09-30T09:31:01.6399368Z         Error: Provider produced inconsistent result after apply
2025-09-30T09:31:01.6399708Z         
2025-09-30T09:31:01.6400166Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-30T09:31:01.6400807Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-30T09:31:01.6401397Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-30T09:31:01.6401816Z         cty.StringVal("CREATED").
2025-09-30T09:31:01.6402072Z         
2025-09-30T09:31:01.6402510Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-30T09:31:01.6402917Z         issue tracker.
2025-09-30T09:31:01.6404700Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.05s)
```

  - PASS 10 seconds
- 2025-10-01
  - FAIL 10 seconds

### Error 2025-10-01T00:53:57+00:00
```
2025-10-01T00:53:57.3092781Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T00:53:57.3093621Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-01T00:53:57.3095279Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T00:53:57.3102791Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T00:53:57.3103348Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-10-01T00:53:57.3103714Z         
2025-10-01T00:53:57.3104226Z         Error: Provider produced inconsistent result after apply
2025-10-01T00:53:57.3104575Z         
2025-10-01T00:53:57.3105047Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T00:53:57.3105692Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T00:53:57.3106296Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T00:53:57.3106720Z         cty.StringVal("CREATED").
2025-10-01T00:53:57.3107100Z         
2025-10-01T00:53:57.3107558Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T00:53:57.3107971Z         issue tracker.
2025-10-01T00:53:57.3109475Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.25s)
```

  - FAIL 8 seconds

### Error 2025-10-01T03:48:33+00:00
```
2025-10-01T03:48:33.3956027Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T03:48:33.3956867Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-01T03:48:33.3958748Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T03:48:33.3966097Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T03:48:33.3966652Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-10-01T03:48:33.3967008Z         
2025-10-01T03:48:33.3967384Z         Error: Provider produced inconsistent result after apply
2025-10-01T03:48:33.3967714Z         
2025-10-01T03:48:33.3968358Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T03:48:33.3968998Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T03:48:33.3969590Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T03:48:33.3970175Z         cty.StringVal("CREATED").
2025-10-01T03:48:33.3970526Z         
2025-10-01T03:48:33.3971222Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T03:48:33.3971926Z         issue tracker.
2025-10-01T03:48:33.3973780Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (8.26s)
```

  - FAIL 9 seconds

### Error 2025-10-01T06:06:22+00:00
```
2025-10-01T06:06:22.2229245Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T06:06:22.2230071Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-01T06:06:22.2231710Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T06:06:22.2242886Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T06:06:22.2243470Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-10-01T06:06:22.2244225Z         
2025-10-01T06:06:22.2244665Z         Error: Provider produced inconsistent result after apply
2025-10-01T06:06:22.2245008Z         
2025-10-01T06:06:22.2245484Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T06:06:22.2246135Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T06:06:22.2246734Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T06:06:22.2247164Z         cty.StringVal("CREATED").
2025-10-01T06:06:22.2247423Z         
2025-10-01T06:06:22.2247883Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T06:06:22.2248287Z         issue tracker.
2025-10-01T06:06:22.2249894Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (9.82s)
```

  - FAIL 9 seconds

### Error 2025-10-01T08:09:33+00:00
```
2025-10-01T08:09:33.9194922Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T08:09:33.9195761Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-01T08:09:33.9197652Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T08:09:33.9204839Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T08:09:33.9205406Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-10-01T08:09:33.9205768Z         
2025-10-01T08:09:33.9206534Z         Error: Provider produced inconsistent result after apply
2025-10-01T08:09:33.9206902Z         
2025-10-01T08:09:33.9207387Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T08:09:33.9208057Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T08:09:33.9208670Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T08:09:33.9209105Z         cty.StringVal("CREATED").
2025-10-01T08:09:33.9209366Z         
2025-10-01T08:09:33.9209829Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T08:09:33.9210248Z         issue tracker.
2025-10-01T08:09:33.9211866Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (9.87s)
```

  - FAIL 10 seconds

### Error 2025-10-01T09:31:04+00:00
```
2025-10-01T09:31:04.5493460Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T09:31:04.5494539Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-01T09:31:04.5496214Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T09:31:04.5503834Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T09:31:04.5504952Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-10-01T09:31:04.5505558Z         
2025-10-01T09:31:04.5505963Z         Error: Provider produced inconsistent result after apply
2025-10-01T09:31:04.5506298Z         
2025-10-01T09:31:04.5506768Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T09:31:04.5507429Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T09:31:04.5508036Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T09:31:04.5508468Z         cty.StringVal("CREATED").
2025-10-01T09:31:04.5508724Z         
2025-10-01T09:31:04.5509181Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T09:31:04.5509794Z         issue tracker.
2025-10-01T09:31:04.5511320Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.34s)
```

  - FAIL 10 seconds

### Error 2025-10-01T11:01:22+00:00
```
2025-10-01T11:01:22.8189635Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T11:01:22.8190618Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-01T11:01:22.8192327Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T11:01:22.8199781Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T11:01:22.8200339Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-10-01T11:01:22.8200705Z         
2025-10-01T11:01:22.8201090Z         Error: Provider produced inconsistent result after apply
2025-10-01T11:01:22.8201421Z         
2025-10-01T11:01:22.8201899Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T11:01:22.8202549Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T11:01:22.8203154Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T11:01:22.8203755Z         cty.StringVal("CREATED").
2025-10-01T11:01:22.8204018Z         
2025-10-01T11:01:22.8204479Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T11:01:22.8204889Z         issue tracker.
2025-10-01T11:01:22.8206394Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.06s)
```

  - FAIL 10 seconds

### Error 2025-10-01T12:09:04+00:00
```
2025-10-01T12:09:04.2507157Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T12:09:04.2508040Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-01T12:09:04.2509814Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T12:09:04.2517753Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T12:09:04.2518346Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-10-01T12:09:04.2518730Z         
2025-10-01T12:09:04.2519130Z         Error: Provider produced inconsistent result after apply
2025-10-01T12:09:04.2519483Z         
2025-10-01T12:09:04.2519972Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T12:09:04.2520815Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T12:09:04.2521461Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T12:09:04.2521906Z         cty.StringVal("CREATED").
2025-10-01T12:09:04.2522190Z         
2025-10-01T12:09:04.2522674Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T12:09:04.2523114Z         issue tracker.
2025-10-01T12:09:04.2524855Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.13s)
```

  - FAIL 10 seconds

### Error 2025-10-01T14:54:10+00:00
```
2025-10-01T14:54:10.8723811Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T14:54:10.8724825Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-01T14:54:10.8726633Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T14:54:10.8734687Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-01T14:54:10.8735303Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-10-01T14:54:10.8735673Z         
2025-10-01T14:54:10.8736116Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:54:10.8736436Z         
2025-10-01T14:54:10.8736982Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T14:54:10.8737685Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:54:10.8738330Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T14:54:10.8738735Z         cty.StringVal("CREATED").
2025-10-01T14:54:10.8739048Z         
2025-10-01T14:54:10.8739569Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:54:10.8740036Z         issue tracker.
2025-10-01T14:54:10.8741626Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.42s)
```

- 2025-10-02

### Error 2025-10-02T01:34:20+00:00
```
2025-10-02T01:34:20.1155776Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-02T01:34:20.1156615Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-02T01:34:20.1158276Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-02T01:34:20.1165761Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-02T01:34:20.1166318Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-10-02T01:34:20.1166689Z         
2025-10-02T01:34:20.1167461Z         Error: Provider produced inconsistent result after apply
2025-10-02T01:34:20.1167857Z         
2025-10-02T01:34:20.1168341Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-02T01:34:20.1169159Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-02T01:34:20.1169771Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-02T01:34:20.1170192Z         cty.StringVal("CREATED").
2025-10-02T01:34:20.1170588Z         
2025-10-02T01:34:20.1171048Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-02T01:34:20.1171460Z         issue tracker.
2025-10-02T01:34:20.1172946Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (9.37s)
```
