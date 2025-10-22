# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 22) FAIL(x 22)
Success rate: 50.00%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-25 01:39](#error-2025-09-25t0139080000) |  | dev | 10.10s
[2025-09-26 00:48](#error-2025-09-26t0048160000) |  | dev | 10.05s
[2025-09-27 00:51](#error-2025-09-27t0051060000) |  | dev | 11.02s
[2025-09-29 00:53](#error-2025-09-29t0053320000) |  | dev | 11.00s
[2025-09-29 07:27](#error-2025-09-29t0727480000) |  | dev | 11.05s
[2025-09-30 00:48](#error-2025-09-30t0048540000) |  | dev | 10.06s
[2025-09-30 07:47](#error-2025-09-30t0747480000) |  | dev | 10.03s
[2025-09-30 09:31](#error-2025-09-30t0931010000) |  | dev | 10.06s
[2025-10-01 00:53](#error-2025-10-01t0053570000) |  | dev | 12.04s
[2025-10-01 03:48](#error-2025-10-01t0348330000) |  | dev | 10.08s
[2025-10-01 06:06](#error-2025-10-01t0606220000) |  | dev | 10.08s
[2025-10-01 08:09](#error-2025-10-01t0809330000) |  | dev | 10.07s
[2025-10-01 09:31](#error-2025-10-01t0931040000) |  | dev | 12.03s
[2025-10-01 11:01](#error-2025-10-01t1101220000) |  | dev | 11.02s
[2025-10-01 12:09](#error-2025-10-01t1209040000) |  | dev | 11.06s
[2025-10-01 14:54](#error-2025-10-01t1454100000) |  | dev | 11.05s
[2025-10-02 01:34](#error-2025-10-02t0134200000) |  | dev | 10.08s
[2025-10-03 00:57](#error-2025-10-03t0057280000) |  | dev | 10.03s
[2025-10-04 02:32](#error-2025-10-04t0232470000) |  | dev | 11.10s
[2025-10-05 00:49](#error-2025-10-05t0049210000) |  | qa | 11.02s
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 1.01s

## Timeline
- 2025-09-22: MISSING
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

- 2025-10-03

### Error 2025-10-03T00:57:28+00:00
```
2025-10-03T00:57:28.0337422Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-03T00:57:28.0338167Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-03T00:57:28.0341439Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-03T00:57:28.0372618Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-03T00:57:28.0373192Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-03T00:57:28.0373564Z         
2025-10-03T00:57:28.0373949Z         Error: Provider produced inconsistent result after apply
2025-10-03T00:57:28.0374285Z         
2025-10-03T00:57:28.0374755Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-03T00:57:28.0375407Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-03T00:57:28.0376131Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-03T00:57:28.0376571Z         cty.StringVal("CREATED").
2025-10-03T00:57:28.0376991Z         
2025-10-03T00:57:28.0377517Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-03T00:57:28.0377940Z         issue tracker.
2025-10-03T00:57:28.0381613Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (10.34s)
```

- 2025-10-04

### Error 2025-10-04T02:32:47+00:00
```
2025-10-04T02:32:47.2125246Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-04T02:32:47.2126003Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-04T02:32:47.2128737Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-04T02:32:47.2162051Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-04T02:32:47.2162748Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-04T02:32:47.2163119Z         
2025-10-04T02:32:47.2163509Z         Error: Provider produced inconsistent result after apply
2025-10-04T02:32:47.2171040Z         
2025-10-04T02:32:47.2171930Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-04T02:32:47.2173252Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-04T02:32:47.2174468Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-04T02:32:47.2175305Z         cty.StringVal("CREATED").
2025-10-04T02:32:47.2175805Z         
2025-10-04T02:32:47.2176744Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-04T02:32:47.2177551Z         issue tracker.
2025-10-04T02:32:47.2183411Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (11.98s)
```

- 2025-10-05

### Error 2025-10-05T00:49:21+00:00
```
2025-10-05T00:49:21.9187668Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-05T00:49:21.9188414Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-05T00:49:21.9190714Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-05T00:49:21.9211822Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-05T00:49:21.9212416Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-05T00:49:21.9212798Z         
2025-10-05T00:49:21.9213199Z         Error: Provider produced inconsistent result after apply
2025-10-05T00:49:21.9213548Z         
2025-10-05T00:49:21.9214040Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-05T00:49:21.9214702Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-05T00:49:21.9215322Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-05T00:49:21.9215767Z         cty.StringVal("CREATED").
2025-10-05T00:49:21.9216050Z         
2025-10-05T00:49:21.9216522Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-05T00:49:21.9216950Z         issue tracker.
2025-10-05T00:49:21.9224180Z   
2025-10-05T00:49:21.9232889Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (11.22s)
```

- 2025-10-06 PASS 10 seconds
- 2025-10-07 PASS 10 seconds
- 2025-10-08 PASS 11 seconds
- 2025-10-09 PASS 10 seconds
- 2025-10-10 PASS 11 seconds
- 2025-10-11 PASS 11 seconds
- 2025-10-12 PASS 9 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2992403Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-13T01:24:12.2993280Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-13T01:24:12.2995789Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-13T01:24:12.3055306Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-13T01:24:12.3055963Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-10-13T01:24:12.3056370Z         
2025-10-13T01:24:12.3056729Z         Error: error creating resource
2025-10-13T01:24:12.3057035Z         
2025-10-13T01:24:12.3057482Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3058520Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3059339Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3059716Z         
2025-10-13T01:24:12.3060296Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3066784Z   
2025-10-13T01:24:12.3091187Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (300.79s)
```

- 2025-10-14 PASS 12 seconds
- 2025-10-15 PASS 10 seconds
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 8 seconds
- 2025-10-18 PASS 9 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1829772Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-19T00:50:12.1830492Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-10-19T00:50:12.1833231Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-19T00:50:12.1962016Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-19T00:50:12.1962584Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.1962949Z         
2025-10-19T00:50:12.1963228Z         Error: error creating resource
2025-10-19T00:50:12.1963499Z         
2025-10-19T00:50:12.1963857Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.1964545Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.1965187Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.1965518Z         
2025-10-19T00:50:12.1966265Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.1967233Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1967826Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.1968436Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1969005Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.1969397Z         BadRequestDetail: 
2025-10-19T00:50:12.1973572Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (1.10s)
```

- 2025-10-20
  - PASS 12 seconds
  - PASS 8 seconds
- 2025-10-21 PASS 9 seconds
- 2025-10-22
  - PASS 7 seconds
  - PASS 10 seconds