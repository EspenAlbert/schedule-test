# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 47 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 27) FAIL(x 20)
Success rate: 57.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 01:03](#error-2025-09-07t0103050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor | qa |  | 2.05s
[2025-09-14 00:45](#error-2025-09-14t0045380000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor | qa |  | 0.09s
[2025-09-15 06:36](#error-2025-09-15t0636280000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor | qa | flaky_500 | 0.09s
[2025-09-25 01:39](#error-2025-09-25t0139080000) |  | dev |  | 10.10s
[2025-09-26 00:48](#error-2025-09-26t0048160000) |  | dev |  | 10.05s
[2025-09-27 00:51](#error-2025-09-27t0051060000) |  | dev |  | 11.02s
[2025-09-29 00:53](#error-2025-09-29t0053320000) |  | dev |  | 11.00s
[2025-09-29 07:27](#error-2025-09-29t0727480000) |  | dev |  | 11.05s
[2025-09-30 00:48](#error-2025-09-30t0048540000) |  | dev |  | 10.06s
[2025-09-30 07:47](#error-2025-09-30t0747480000) |  | dev |  | 10.03s
[2025-09-30 09:31](#error-2025-09-30t0931010000) |  | dev |  | 10.06s
[2025-10-01 00:53](#error-2025-10-01t0053570000) |  | dev |  | 12.04s
[2025-10-01 03:48](#error-2025-10-01t0348330000) |  | dev |  | 10.08s
[2025-10-01 06:06](#error-2025-10-01t0606220000) |  | dev |  | 10.08s
[2025-10-01 08:09](#error-2025-10-01t0809330000) |  | dev |  | 10.07s
[2025-10-01 09:31](#error-2025-10-01t0931040000) |  | dev |  | 12.03s
[2025-10-01 11:01](#error-2025-10-01t1101220000) |  | dev |  | 11.02s
[2025-10-01 12:09](#error-2025-10-01t1209040000) |  | dev |  | 11.06s
[2025-10-01 14:54](#error-2025-10-01t1454100000) |  | dev |  | 11.05s
[2025-10-02 01:34](#error-2025-10-02t0134200000) |  | dev |  | 10.08s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds
- 2025-09-05 PASS 11 seconds
- 2025-09-06 PASS 10 seconds
- 2025-09-07

### Error 2025-09-07T01:03:05+00:00
```
2025-09-07T01:03:05.2467057Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-07T01:03:05.2467893Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-09-07T01:03:05.2471423Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-07T01:03:05.2566055Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-07T01:03:05.2566630Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-09-07T01:03:05.2566986Z         
2025-09-07T01:03:05.2567260Z         Error: error creating resource
2025-09-07T01:03:05.2567522Z         
2025-09-07T01:03:05.2567881Z           with mongodbatlas_stream_processor.processor,
2025-09-07T01:03:05.2568572Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-07T01:03:05.2569201Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-07T01:03:05.2569526Z         
2025-09-07T01:03:05.2570260Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1d68704811492b53e30/streams/test-acc-tf-s-8008636377946794826/processor
2025-09-07T01:03:05.2571088Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-09-07T01:03:05.2571740Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-09-07T01:03:05.2572386Z         problem occur: connection named sample_stream_solar does not exist. Check
2025-09-07T01:03:05.2573023Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2025-09-07T01:03:05.2573688Z         [processor-stopped-to-stopped connection named sample_stream_solar does not
2025-09-07T01:03:05.2574285Z         exist. Check sp.listConnections() for available connections],
2025-09-07T01:03:05.2574673Z         BadRequestDetail: 
2025-09-07T01:03:05.2591171Z   
2025-09-07T01:03:05.2628970Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (2.54s)
```

- 2025-09-08
  - PASS 10 seconds
  - PASS 56 seconds
  - PASS 9 seconds
- 2025-09-09 PASS 9 seconds
- 2025-09-10 PASS 10 seconds
- 2025-09-11 PASS 11 seconds
- 2025-09-12
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-09-13 PASS 12 seconds
- 2025-09-14

### Error 2025-09-14T00:45:38+00:00
```
2025-09-14T00:45:38.8207757Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-14T00:45:38.8208622Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-09-14T00:45:38.8211703Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-14T00:45:38.8291317Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-14T00:45:38.8291992Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-09-14T00:45:38.8292352Z         
2025-09-14T00:45:38.8292622Z         Error: error creating resource
2025-09-14T00:45:38.8292882Z         
2025-09-14T00:45:38.8293235Z           with mongodbatlas_stream_processor.processor,
2025-09-14T00:45:38.8293914Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-14T00:45:38.8294551Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-14T00:45:38.8294872Z         
2025-09-14T00:45:38.8295624Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c441411d835e95b3b17/streams/test-acc-tf-s-840900351291093345/processor
2025-09-14T00:45:38.8296434Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-14T00:45:38.8297020Z         Detail: Stream instance for project 68c60c441411d835e95b3b17 and name
2025-09-14T00:45:38.8297617Z         test-acc-tf-s-840900351291093345 not found. Reason: Not Found. Params:
2025-09-14T00:45:38.8298303Z         [68c60c441411d835e95b3b17 test-acc-tf-s-840900351291093345],
2025-09-14T00:45:38.8298682Z         BadRequestDetail: 
2025-09-14T00:45:38.8317397Z   
2025-09-14T00:45:38.8344164Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (0.89s)
```

- 2025-09-15
  - PASS 10 seconds
  - PASS 11 seconds
  - FAIL a moment

### Error 2025-09-15T06:36:28+00:00
```
2025-09-15T06:36:28.0412965Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-15T06:36:28.0413700Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-09-15T06:36:28.0416699Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-15T06:36:28.0491745Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-15T06:36:28.0492496Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-09-15T06:36:28.0492902Z         
2025-09-15T06:36:28.0493267Z         Error: error creating resource
2025-09-15T06:36:28.0493539Z         
2025-09-15T06:36:28.0494034Z           with mongodbatlas_stream_processor.processor,
2025-09-15T06:36:28.0494864Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-09-15T06:36:28.0495771Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-09-15T06:36:28.0496110Z         
2025-09-15T06:36:28.0497001Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b04cd444485797b5e4d7/streams/test-acc-tf-s-571760720051378464/processor
2025-09-15T06:36:28.0498009Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-09-15T06:36:28.0498693Z         Detail: Stream instance for project 68c7b04cd444485797b5e4d7 and name
2025-09-15T06:36:28.0499434Z         test-acc-tf-s-571760720051378464 not found. Reason: Not Found. Params:
2025-09-15T06:36:28.0500109Z         [68c7b04cd444485797b5e4d7 test-acc-tf-s-571760720051378464],
2025-09-15T06:36:28.0500579Z         BadRequestDetail: 
2025-09-15T06:36:28.0522881Z   
2025-09-15T06:36:28.0574372Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (0.90s)
```

- 2025-09-16 PASS 10 seconds
- 2025-09-17 PASS 11 seconds
- 2025-09-18 PASS 11 seconds
- 2025-09-19 PASS 10 seconds
- 2025-09-20 PASS 10 seconds
- 2025-09-21 PASS 10 seconds
- 2025-09-22 PASS 12 seconds
- 2025-09-23 PASS 10 seconds
- 2025-09-24 PASS 9 seconds
- 2025-09-25

### Error 2025-09-25T01:39:08+00:00
```
2025-09-25T01:39:08.8432396Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-25T01:39:08.8433116Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-09-25T01:39:08.8436916Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-25T01:39:08.8444363Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-25T01:39:08.8444951Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-25T01:39:08.8445311Z         
2025-09-25T01:39:08.8445686Z         Error: Provider produced inconsistent result after apply
2025-09-25T01:39:08.8446016Z         
2025-09-25T01:39:08.8446473Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-25T01:39:08.8447115Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-25T01:39:08.8447704Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-25T01:39:08.8448129Z         cty.StringVal("CREATED").
2025-09-25T01:39:08.8448377Z         
2025-09-25T01:39:08.8448814Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-25T01:39:08.8449220Z         issue tracker.
2025-09-25T01:39:08.8455744Z   
2025-09-25T01:39:08.8475142Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (10.95s)
```

- 2025-09-26

### Error 2025-09-26T00:48:16+00:00
```
2025-09-26T00:48:16.2328520Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-26T00:48:16.2329309Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-09-26T00:48:16.2332083Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-26T00:48:16.2340051Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-26T00:48:16.2340636Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-26T00:48:16.2340989Z         
2025-09-26T00:48:16.2341404Z         Error: Provider produced inconsistent result after apply
2025-09-26T00:48:16.2341734Z         
2025-09-26T00:48:16.2342241Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-26T00:48:16.2342931Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-26T00:48:16.2343572Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-26T00:48:16.2344007Z         cty.StringVal("CREATED").
2025-09-26T00:48:16.2344256Z         
2025-09-26T00:48:16.2344751Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-26T00:48:16.2345166Z         issue tracker.
2025-09-26T00:48:16.2351227Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_terraform_path=/home/runner/work/_temp/6c0767ee-1731-40d4-8ad2-e44cad131868/terraform
2025-09-26T00:48:16.2371584Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (10.46s)
```

- 2025-09-27

### Error 2025-09-27T00:51:06+00:00
```
2025-09-27T00:51:06.5767603Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-27T00:51:06.5768318Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-09-27T00:51:06.5771022Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-27T00:51:06.5778764Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-27T00:51:06.5779310Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-27T00:51:06.5779667Z         
2025-09-27T00:51:06.5780033Z         Error: Provider produced inconsistent result after apply
2025-09-27T00:51:06.5780354Z         
2025-09-27T00:51:06.5780804Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-27T00:51:06.5781434Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-27T00:51:06.5782013Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-27T00:51:06.5782421Z         cty.StringVal("CREATED").
2025-09-27T00:51:06.5782669Z         
2025-09-27T00:51:06.5783106Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-27T00:51:06.5783505Z         issue tracker.
2025-09-27T00:51:06.5789579Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_terraform_path=/home/runner/work/_temp/aff3dcd9-a8af-4dfd-8153-43a883ffa56b/terraform
2025-09-27T00:51:06.5808953Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (11.18s)
```

- 2025-09-28 PASS 10 seconds
- 2025-09-29
  - FAIL 11 seconds

### Error 2025-09-29T00:53:32+00:00
```
2025-09-29T00:53:32.4777867Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-29T00:53:32.4778750Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-09-29T00:53:32.4782169Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-29T00:53:32.4789576Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-29T00:53:32.4790146Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-29T00:53:32.4790499Z         
2025-09-29T00:53:32.4790880Z         Error: Provider produced inconsistent result after apply
2025-09-29T00:53:32.4791216Z         
2025-09-29T00:53:32.4791682Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-29T00:53:32.4792319Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T00:53:32.4792907Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-29T00:53:32.4793324Z         cty.StringVal("CREATED").
2025-09-29T00:53:32.4793572Z         
2025-09-29T00:53:32.4794011Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T00:53:32.4794419Z         issue tracker.
2025-09-29T00:53:32.4800122Z    test_working_directory=/tmp/plugintest3796334588 test_step_number=2 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_terraform_path=/home/runner/work/_temp/79b80f6d-7de4-468c-822e-b9dc40882ff4/terraform
2025-09-29T00:53:32.4819943Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (11.04s)
```

  - FAIL 11 seconds

### Error 2025-09-29T07:27:48+00:00
```
2025-09-29T07:27:48.1310337Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-29T07:27:48.1311057Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-09-29T07:27:48.1313814Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-29T07:27:48.1333269Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-29T07:27:48.1333828Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-29T07:27:48.1334173Z         
2025-09-29T07:27:48.1334547Z         Error: Provider produced inconsistent result after apply
2025-09-29T07:27:48.1334865Z         
2025-09-29T07:27:48.1335321Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-29T07:27:48.1336101Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T07:27:48.1336700Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-29T07:27:48.1337106Z         cty.StringVal("CREATED").
2025-09-29T07:27:48.1337355Z         
2025-09-29T07:27:48.1338104Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T07:27:48.1338640Z         issue tracker.
2025-09-29T07:27:48.1344918Z   
2025-09-29T07:27:48.1352518Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (11.48s)
```

- 2025-09-30
  - FAIL 10 seconds

### Error 2025-09-30T00:48:54+00:00
```
2025-09-30T00:48:54.4363450Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-30T00:48:54.4364227Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-09-30T00:48:54.4367456Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-30T00:48:54.4387138Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-30T00:48:54.4387736Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-30T00:48:54.4388093Z         
2025-09-30T00:48:54.4388520Z         Error: Provider produced inconsistent result after apply
2025-09-30T00:48:54.4388958Z         
2025-09-30T00:48:54.4389485Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-30T00:48:54.4390200Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-30T00:48:54.4391072Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-30T00:48:54.4391561Z         cty.StringVal("CREATED").
2025-09-30T00:48:54.4391815Z         
2025-09-30T00:48:54.4392330Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-30T00:48:54.4392751Z         issue tracker.
2025-09-30T00:48:54.4398836Z    test_working_directory=/tmp/plugintest97869356 test_step_number=2 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-30T00:48:54.4408045Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (10.64s)
```

  - FAIL 10 seconds

### Error 2025-09-30T07:47:48+00:00
```
2025-09-30T07:47:48.1744176Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-30T07:47:48.1744895Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-09-30T07:47:48.1747120Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-30T07:47:48.1756506Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-30T07:47:48.1757086Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-30T07:47:48.1757442Z         
2025-09-30T07:47:48.1757951Z         Error: Provider produced inconsistent result after apply
2025-09-30T07:47:48.1758275Z         
2025-09-30T07:47:48.1758739Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-30T07:47:48.1759378Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-30T07:47:48.1759962Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-30T07:47:48.1760371Z         cty.StringVal("CREATED").
2025-09-30T07:47:48.1760625Z         
2025-09-30T07:47:48.1761064Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-30T07:47:48.1761466Z         issue tracker.
2025-09-30T07:47:48.1767654Z   
2025-09-30T07:47:48.1786900Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (10.34s)
```

  - PASS 10 seconds
  - FAIL 10 seconds

### Error 2025-09-30T09:31:01+00:00
```
2025-09-30T09:31:01.6317847Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-30T09:31:01.6319226Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-09-30T09:31:01.6324547Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-30T09:31:01.6339342Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-30T09:31:01.6340402Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-30T09:31:01.6341043Z         
2025-09-30T09:31:01.6341721Z         Error: Provider produced inconsistent result after apply
2025-09-30T09:31:01.6342315Z         
2025-09-30T09:31:01.6343155Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-30T09:31:01.6344501Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-30T09:31:01.6345591Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-30T09:31:01.6346356Z         cty.StringVal("CREATED").
2025-09-30T09:31:01.6346800Z         
2025-09-30T09:31:01.6347624Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-30T09:31:01.6348529Z         issue tracker.
2025-09-30T09:31:01.6359366Z   
2025-09-30T09:31:01.6381321Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (10.63s)
```

  - PASS 12 seconds
- 2025-10-01
  - FAIL 12 seconds

### Error 2025-10-01T00:53:57+00:00
```
2025-10-01T00:53:57.3042717Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T00:53:57.3043445Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-01T00:53:57.3045609Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T00:53:57.3066244Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T00:53:57.3066816Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T00:53:57.3067180Z         
2025-10-01T00:53:57.3067564Z         Error: Provider produced inconsistent result after apply
2025-10-01T00:53:57.3067904Z         
2025-10-01T00:53:57.3068378Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T00:53:57.3069037Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T00:53:57.3069637Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T00:53:57.3070057Z         cty.StringVal("CREATED").
2025-10-01T00:53:57.3070319Z         
2025-10-01T00:53:57.3070777Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T00:53:57.3071186Z         issue tracker.
2025-10-01T00:53:57.3076989Z    test_terraform_path=/home/runner/work/_temp/912ad769-4e1d-41b6-9319-84f33a87eb38/terraform test_working_directory=/tmp/plugintest2659134473 test_step_number=2 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T00:53:57.3086316Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (12.37s)
```

  - FAIL 10 seconds

### Error 2025-10-01T03:48:33+00:00
```
2025-10-01T03:48:33.3907034Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T03:48:33.3907769Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-01T03:48:33.3910146Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T03:48:33.3930018Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T03:48:33.3930586Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T03:48:33.3930942Z         
2025-10-01T03:48:33.3931321Z         Error: Provider produced inconsistent result after apply
2025-10-01T03:48:33.3931649Z         
2025-10-01T03:48:33.3932121Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T03:48:33.3932760Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T03:48:33.3933346Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T03:48:33.3933769Z         cty.StringVal("CREATED").
2025-10-01T03:48:33.3934024Z         
2025-10-01T03:48:33.3934475Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T03:48:33.3934881Z         issue tracker.
2025-10-01T03:48:33.3941350Z   
2025-10-01T03:48:33.3949827Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (10.80s)
```

  - FAIL 10 seconds

### Error 2025-10-01T06:06:22+00:00
```
2025-10-01T06:06:22.2177677Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T06:06:22.2178425Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-01T06:06:22.2181129Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T06:06:22.2202084Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T06:06:22.2202830Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T06:06:22.2203188Z         
2025-10-01T06:06:22.2203565Z         Error: Provider produced inconsistent result after apply
2025-10-01T06:06:22.2203889Z         
2025-10-01T06:06:22.2204347Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T06:06:22.2204986Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T06:06:22.2205579Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T06:06:22.2206002Z         cty.StringVal("CREATED").
2025-10-01T06:06:22.2206253Z         
2025-10-01T06:06:22.2206697Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T06:06:22.2207107Z         issue tracker.
2025-10-01T06:06:22.2213541Z   
2025-10-01T06:06:22.2221652Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (10.82s)
```

  - FAIL 10 seconds

### Error 2025-10-01T08:09:33+00:00
```
2025-10-01T08:09:33.9144505Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T08:09:33.9145232Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-01T08:09:33.9148603Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T08:09:33.9156304Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T08:09:33.9156890Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T08:09:33.9157255Z         
2025-10-01T08:09:33.9157648Z         Error: Provider produced inconsistent result after apply
2025-10-01T08:09:33.9157985Z         
2025-10-01T08:09:33.9158461Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T08:09:33.9159106Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T08:09:33.9159714Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T08:09:33.9160146Z         cty.StringVal("CREATED").
2025-10-01T08:09:33.9160406Z         
2025-10-01T08:09:33.9160870Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T08:09:33.9161410Z         issue tracker.
2025-10-01T08:09:33.9168249Z   
2025-10-01T08:09:33.9187784Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (10.73s)
```

  - FAIL 12 seconds

### Error 2025-10-01T09:31:04+00:00
```
2025-10-01T09:31:04.5435878Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T09:31:04.5436620Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-01T09:31:04.5439608Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T09:31:04.5462620Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T09:31:04.5463207Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T09:31:04.5463587Z         
2025-10-01T09:31:04.5463979Z         Error: Provider produced inconsistent result after apply
2025-10-01T09:31:04.5464511Z         
2025-10-01T09:31:04.5464990Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T09:31:04.5465767Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T09:31:04.5466482Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T09:31:04.5466941Z         cty.StringVal("CREATED").
2025-10-01T09:31:04.5467295Z         
2025-10-01T09:31:04.5467762Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T09:31:04.5468282Z         issue tracker.
2025-10-01T09:31:04.5475956Z   
2025-10-01T09:31:04.5487060Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (12.28s)
```

  - FAIL 11 seconds

### Error 2025-10-01T11:01:22+00:00
```
2025-10-01T11:01:22.8137521Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T11:01:22.8138581Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-01T11:01:22.8141995Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T11:01:22.8163375Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T11:01:22.8163960Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T11:01:22.8164327Z         
2025-10-01T11:01:22.8164706Z         Error: Provider produced inconsistent result after apply
2025-10-01T11:01:22.8165040Z         
2025-10-01T11:01:22.8165504Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T11:01:22.8166147Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T11:01:22.8166754Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T11:01:22.8167185Z         cty.StringVal("CREATED").
2025-10-01T11:01:22.8167580Z         
2025-10-01T11:01:22.8168059Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T11:01:22.8168470Z         issue tracker.
2025-10-01T11:01:22.8174484Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_terraform_path=/home/runner/work/_temp/e347df5f-8839-4a08-89bc-2bb2b3433baf/terraform
2025-10-01T11:01:22.8182445Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (11.19s)
```

  - FAIL 11 seconds

### Error 2025-10-01T12:09:04+00:00
```
2025-10-01T12:09:04.2450974Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T12:09:04.2451766Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-01T12:09:04.2455367Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T12:09:04.2491764Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T12:09:04.2492371Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T12:09:04.2492753Z         
2025-10-01T12:09:04.2493151Z         Error: Provider produced inconsistent result after apply
2025-10-01T12:09:04.2493504Z         
2025-10-01T12:09:04.2494003Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T12:09:04.2494694Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T12:09:04.2495327Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T12:09:04.2495778Z         cty.StringVal("CREATED").
2025-10-01T12:09:04.2496050Z         
2025-10-01T12:09:04.2496532Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T12:09:04.2496966Z         issue tracker.
2025-10-01T12:09:04.2500891Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (11.61s)
```

  - FAIL 11 seconds

### Error 2025-10-01T14:54:10+00:00
```
2025-10-01T14:54:10.8672325Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T14:54:10.8673098Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-01T14:54:10.8676255Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T14:54:10.8708058Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-01T14:54:10.8708683Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T14:54:10.8709031Z         
2025-10-01T14:54:10.8709481Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:54:10.8710014Z         
2025-10-01T14:54:10.8710498Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T14:54:10.8711108Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:54:10.8711681Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T14:54:10.8712102Z         cty.StringVal("CREATED").
2025-10-01T14:54:10.8712366Z         
2025-10-01T14:54:10.8712806Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:54:10.8713203Z         issue tracker.
2025-10-01T14:54:10.8717417Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (11.49s)
```

- 2025-10-02

### Error 2025-10-02T01:34:20+00:00
```
2025-10-02T01:34:20.1101488Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-02T01:34:20.1102218Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-02T01:34:20.1105331Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-02T01:34:20.1140114Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-02T01:34:20.1140694Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-02T01:34:20.1141071Z         
2025-10-02T01:34:20.1141459Z         Error: Provider produced inconsistent result after apply
2025-10-02T01:34:20.1141795Z         
2025-10-02T01:34:20.1142269Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-02T01:34:20.1142916Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-02T01:34:20.1143692Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-02T01:34:20.1144135Z         cty.StringVal("CREATED").
2025-10-02T01:34:20.1144402Z         
2025-10-02T01:34:20.1144864Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-02T01:34:20.1145282Z         issue tracker.
2025-10-02T01:34:20.1150099Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (10.83s)
```
