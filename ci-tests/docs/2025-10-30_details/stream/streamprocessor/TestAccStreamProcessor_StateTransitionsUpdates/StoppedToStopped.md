# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 26) FAIL(x 14)
Success rate: 65.00%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
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
- 2025-09-30 PASS 12 seconds
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
- 2025-10-23 PASS 8 seconds
- 2025-10-24 PASS 8 seconds
- 2025-10-25 PASS 8 seconds
- 2025-10-26 PASS 8 seconds
- 2025-10-27 PASS 8 seconds
- 2025-10-28 PASS 9 seconds
- 2025-10-29 PASS 8 seconds
- 2025-10-30 PASS 8 seconds