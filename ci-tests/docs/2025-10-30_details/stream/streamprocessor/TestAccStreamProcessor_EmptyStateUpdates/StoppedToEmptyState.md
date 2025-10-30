# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 25) FAIL(x 15)
Success rate: 62.50%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-01 00:53](#error-2025-10-01t0053570000) |  | dev | 10.03s
[2025-10-01 03:48](#error-2025-10-01t0348330000) |  | dev | 8.03s
[2025-10-01 06:06](#error-2025-10-01t0606220000) |  | dev | 9.08s
[2025-10-01 08:09](#error-2025-10-01t0809330000) |  | dev | 9.09s
[2025-10-01 09:31](#error-2025-10-01t0931040000) |  | dev | 10.03s
[2025-10-01 11:01](#error-2025-10-01t1101220000) |  | dev | 10.01s
[2025-10-01 12:09](#error-2025-10-01t1209040000) |  | dev | 10.01s
[2025-10-01 14:54](#error-2025-10-01t1454100000) |  | dev | 10.04s
[2025-10-02 01:34](#error-2025-10-02t0134200000) |  | dev | 9.04s
[2025-10-03 00:57](#error-2025-10-03t0057280000) |  | dev | 9.04s
[2025-10-04 02:32](#error-2025-10-04t0232470000) |  | dev | 10.05s
[2025-10-05 00:49](#error-2025-10-05t0049210000) |  | qa | 10.03s
[2025-10-10 00:53](#error-2025-10-10t0053580000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68e8530d1a9c5e5749c14eb0/streams/test-acc-tf-s-5613067548248512506/processor/processor-stopped-to- | dev | 8.04s
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.04s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 0.06s

## Timeline
- 2025-09-30 PASS 10 seconds
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

- 2025-10-03

### Error 2025-10-03T00:57:28+00:00
```
2025-10-03T00:57:28.0387463Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-03T00:57:28.0388320Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-03T00:57:28.0389998Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-03T00:57:28.0397871Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-03T00:57:28.0398444Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-10-03T00:57:28.0398813Z         
2025-10-03T00:57:28.0399338Z         Error: Provider produced inconsistent result after apply
2025-10-03T00:57:28.0399691Z         
2025-10-03T00:57:28.0400170Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-03T00:57:28.0400826Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-03T00:57:28.0401434Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-03T00:57:28.0401871Z         cty.StringVal("CREATED").
2025-10-03T00:57:28.0402325Z         
2025-10-03T00:57:28.0402789Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-03T00:57:28.0403205Z         issue tracker.
2025-10-03T00:57:28.0404717Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (9.44s)
```

- 2025-10-04

### Error 2025-10-04T02:32:47+00:00
```
2025-10-04T02:32:47.2189567Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-04T02:32:47.2190437Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-04T02:32:47.2192374Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-04T02:32:47.2200841Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-04T02:32:47.2201437Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-10-04T02:32:47.2201822Z         
2025-10-04T02:32:47.2202211Z         Error: Provider produced inconsistent result after apply
2025-10-04T02:32:47.2202558Z         
2025-10-04T02:32:47.2203044Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-04T02:32:47.2203713Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-04T02:32:47.2204326Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-04T02:32:47.2204764Z         cty.StringVal("CREATED").
2025-10-04T02:32:47.2205025Z         
2025-10-04T02:32:47.2205491Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-04T02:32:47.2205906Z         issue tracker.
2025-10-04T02:32:47.2207449Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.46s)
```

- 2025-10-05

### Error 2025-10-05T00:49:21+00:00
```
2025-10-05T00:49:21.9239532Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-05T00:49:21.9240387Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-05T00:49:21.9242338Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-05T00:49:21.9250137Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-05T00:49:21.9250713Z     resource_test.go:218: Step 2/3 error: Error running apply: exit status 1
2025-10-05T00:49:21.9251093Z         
2025-10-05T00:49:21.9251495Z         Error: Provider produced inconsistent result after apply
2025-10-05T00:49:21.9251846Z         
2025-10-05T00:49:21.9252342Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-05T00:49:21.9253002Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-05T00:49:21.9253623Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-05T00:49:21.9254073Z         cty.StringVal("CREATED").
2025-10-05T00:49:21.9254359Z         
2025-10-05T00:49:21.9254825Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-05T00:49:21.9255255Z         issue tracker.
2025-10-05T00:49:21.9256811Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (10.34s)
```

- 2025-10-06 PASS 9 seconds
- 2025-10-07 PASS 7 seconds
- 2025-10-08 PASS 10 seconds
- 2025-10-09 PASS 8 seconds
- 2025-10-10

### Error 2025-10-10T00:53:58+00:00
```
2025-10-10T00:53:58.7089985Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-10T00:53:58.7090937Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-10T00:53:58.7092639Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-10T00:53:58.7132902Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-10T00:53:58.7133470Z     resource_test.go:218: Step 3/3 error: Error running apply: exit status 1
2025-10-10T00:53:58.7133847Z         
2025-10-10T00:53:58.7134172Z         Error: Error modifying stream processor
2025-10-10T00:53:58.7134471Z         
2025-10-10T00:53:58.7134835Z           with mongodbatlas_stream_processor.processor,
2025-10-10T00:53:58.7135548Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-10T00:53:58.7136201Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-10T00:53:58.7136545Z         
2025-10-10T00:53:58.7137631Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e8530d1a9c5e5749c14eb0/streams/test-acc-tf-s-5613067548248512506/processor/processor-stopped-to-
2025-10-10T00:53:58.7138576Z         PATCH: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-10-10T00:53:58.7139477Z         Detail: Streams Processor with this name (processor-stopped-to-) had a
2025-10-10T00:53:58.7140288Z         problem occur: stream processor doesn't exist. Reason: Bad Request. Params:
2025-10-10T00:53:58.7140973Z         [processor-stopped-to- stream processor doesn't exist], BadRequestDetail: 
2025-10-10T00:53:58.7143400Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (8.42s)
```

- 2025-10-11 PASS 8 seconds
- 2025-10-12 PASS 8 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.3097732Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-13T01:24:12.3098979Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-13T01:24:12.3100829Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-13T01:24:12.3140872Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-13T01:24:12.3141510Z     resource_test.go:218: Step 1/3 error: Error running apply: exit status 1
2025-10-13T01:24:12.3141919Z         
2025-10-13T01:24:12.3142253Z         Error: error creating resource
2025-10-13T01:24:12.3142553Z         
2025-10-13T01:24:12.3143163Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3144009Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3144751Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3145126Z         
2025-10-13T01:24:12.3145695Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3148599Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (300.44s)
```

- 2025-10-14 PASS 9 seconds
- 2025-10-15 PASS 8 seconds
- 2025-10-16 PASS 12 seconds
- 2025-10-17 PASS 7 seconds
- 2025-10-18 PASS 7 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1978982Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-19T00:50:12.1979825Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-10-19T00:50:12.1981584Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-19T00:50:12.2012690Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-10-19T00:50:12.2013390Z     resource_test.go:218: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.2013775Z         
2025-10-19T00:50:12.2014061Z         Error: error creating resource
2025-10-19T00:50:12.2014342Z         
2025-10-19T00:50:12.2014703Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.2015419Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.2016064Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.2016399Z         
2025-10-19T00:50:12.2017273Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.2018102Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2018701Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2019315Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2019894Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2020285Z         BadRequestDetail: 
2025-10-19T00:50:12.2033546Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState test_terraform_path=/home/runner/work/_temp/900806b3-a17f-4fd8-9610-14d4dc9797f0/terraform test_working_directory=/tmp/plugintest1420108987
2025-10-19T00:50:12.2060453Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.60s)
```

- 2025-10-20
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 6 seconds
  - PASS 8 seconds
- 2025-10-23 PASS 6 seconds
- 2025-10-24 PASS 7 seconds
- 2025-10-25 PASS 6 seconds
- 2025-10-26 PASS 7 seconds
- 2025-10-27 PASS 6 seconds
- 2025-10-28 PASS 6 seconds
- 2025-10-29 PASS 7 seconds
- 2025-10-30 PASS 7 seconds