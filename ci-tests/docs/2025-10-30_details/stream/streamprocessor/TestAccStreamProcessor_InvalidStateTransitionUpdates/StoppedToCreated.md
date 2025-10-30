# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 26) FAIL(x 14)
Success rate: 65.00%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-01 00:53](#error-2025-10-01t0053570000) |  | dev | 10.03s
[2025-10-01 03:48](#error-2025-10-01t0348330000) |  | dev | 8.03s
[2025-10-01 06:06](#error-2025-10-01t0606220000) |  | dev | 9.04s
[2025-10-01 08:09](#error-2025-10-01t0809330000) |  | dev | 10.02s
[2025-10-01 09:31](#error-2025-10-01t0931040000) |  | dev | 10.04s
[2025-10-01 11:01](#error-2025-10-01t1101220000) |  | dev | 10.00s
[2025-10-01 12:09](#error-2025-10-01t1209040000) |  | dev | 10.02s
[2025-10-01 14:54](#error-2025-10-01t1454100000) |  | dev | 10.00s
[2025-10-02 01:34](#error-2025-10-02t0134200000) |  | dev | 8.08s
[2025-10-03 00:57](#error-2025-10-03t0057280000) |  | dev | 9.10s
[2025-10-04 02:32](#error-2025-10-04t0232470000) |  | dev | 10.05s
[2025-10-05 00:49](#error-2025-10-05t0049210000) |  | qa | 10.02s
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.04s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 0.06s

## Timeline
- 2025-09-30 PASS 9 seconds
- 2025-10-01
  - FAIL 10 seconds

### Error 2025-10-01T00:53:57+00:00
```
2025-10-01T00:53:57.3113161Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T00:53:57.3113857Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-01T00:53:57.3117943Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T00:53:57.3130556Z    test_terraform_path=/home/runner/work/_temp/912ad769-4e1d-41b6-9319-84f33a87eb38/terraform test_working_directory=/tmp/plugintest2492487347 test_step_number=2
2025-10-01T00:53:57.3131509Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-01T00:53:57.3132068Z         
2025-10-01T00:53:57.3132457Z         Error: Provider produced inconsistent result after apply
2025-10-01T00:53:57.3132791Z         
2025-10-01T00:53:57.3133266Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T00:53:57.3133917Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T00:53:57.3134528Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T00:53:57.3134956Z         cty.StringVal("CREATED").
2025-10-01T00:53:57.3135215Z         
2025-10-01T00:53:57.3135669Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T00:53:57.3136078Z         issue tracker.
2025-10-01T00:53:57.3138486Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (10.27s)
```

  - FAIL 8 seconds

### Error 2025-10-01T03:48:33+00:00
```
2025-10-01T03:48:33.3991046Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T03:48:33.3991792Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-01T03:48:33.3995926Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T03:48:33.4016023Z    test_terraform_path=/home/runner/work/_temp/e18015a6-aa95-4dbd-9a87-6d93af675d96/terraform test_working_directory=/tmp/plugintest574790122 test_step_number=2
2025-10-01T03:48:33.4016873Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-01T03:48:33.4017368Z         
2025-10-01T03:48:33.4017758Z         Error: Provider produced inconsistent result after apply
2025-10-01T03:48:33.4018339Z         
2025-10-01T03:48:33.4018819Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T03:48:33.4019478Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T03:48:33.4020079Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T03:48:33.4020505Z         cty.StringVal("CREATED").
2025-10-01T03:48:33.4020765Z         
2025-10-01T03:48:33.4021232Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T03:48:33.4021650Z         issue tracker.
2025-10-01T03:48:33.4024035Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (8.27s)
```

  - FAIL 9 seconds

### Error 2025-10-01T06:06:22+00:00
```
2025-10-01T06:06:22.2253608Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T06:06:22.2254309Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-01T06:06:22.2258318Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T06:06:22.2270428Z   
2025-10-01T06:06:22.2270807Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-01T06:06:22.2271160Z         
2025-10-01T06:06:22.2271537Z         Error: Provider produced inconsistent result after apply
2025-10-01T06:06:22.2271977Z         
2025-10-01T06:06:22.2272589Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T06:06:22.2273279Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T06:06:22.2273871Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T06:06:22.2274297Z         cty.StringVal("CREATED").
2025-10-01T06:06:22.2274558Z         
2025-10-01T06:06:22.2275008Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T06:06:22.2275427Z         issue tracker.
2025-10-01T06:06:22.2277809Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (9.38s)
```

  - FAIL 10 seconds

### Error 2025-10-01T08:09:33+00:00
```
2025-10-01T08:09:33.9215390Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T08:09:33.9216192Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-01T08:09:33.9220455Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T08:09:33.9232753Z   
2025-10-01T08:09:33.9233141Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-01T08:09:33.9233504Z         
2025-10-01T08:09:33.9233885Z         Error: Provider produced inconsistent result after apply
2025-10-01T08:09:33.9234339Z         
2025-10-01T08:09:33.9234813Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T08:09:33.9235468Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T08:09:33.9236267Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T08:09:33.9236701Z         cty.StringVal("CREATED").
2025-10-01T08:09:33.9236967Z         
2025-10-01T08:09:33.9237422Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T08:09:33.9237835Z         issue tracker.
2025-10-01T08:09:33.9240259Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (10.19s)
```

  - FAIL 10 seconds

### Error 2025-10-01T09:31:04+00:00
```
2025-10-01T09:31:04.5515168Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T09:31:04.5515894Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-01T09:31:04.5520035Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T09:31:04.5532124Z    test_step_number=2 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/e22f15b8-996e-4ece-b2b1-514467a6e468/terraform
2025-10-01T09:31:04.5533286Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-01T09:31:04.5533654Z         
2025-10-01T09:31:04.5534166Z         Error: Provider produced inconsistent result after apply
2025-10-01T09:31:04.5534512Z         
2025-10-01T09:31:04.5534984Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T09:31:04.5535649Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T09:31:04.5536254Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T09:31:04.5536681Z         cty.StringVal("CREATED").
2025-10-01T09:31:04.5536945Z         
2025-10-01T09:31:04.5537398Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T09:31:04.5537821Z         issue tracker.
2025-10-01T09:31:04.5540313Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (10.44s)
```

  - FAIL 10 seconds

### Error 2025-10-01T11:01:22+00:00
```
2025-10-01T11:01:22.8210022Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T11:01:22.8210715Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-01T11:01:22.8215222Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T11:01:22.8226698Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/e347df5f-8839-4a08-89bc-2bb2b3433baf/terraform test_working_directory=/tmp/plugintest660208751
2025-10-01T11:01:22.8227781Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-01T11:01:22.8228147Z         
2025-10-01T11:01:22.8228529Z         Error: Provider produced inconsistent result after apply
2025-10-01T11:01:22.8228861Z         
2025-10-01T11:01:22.8229332Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T11:01:22.8229982Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T11:01:22.8230596Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T11:01:22.8231150Z         cty.StringVal("CREATED").
2025-10-01T11:01:22.8231421Z         
2025-10-01T11:01:22.8231885Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T11:01:22.8232298Z         issue tracker.
2025-10-01T11:01:22.8234915Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (10.01s)
```

  - FAIL 10 seconds

### Error 2025-10-01T12:09:04+00:00
```
2025-10-01T12:09:04.2528889Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T12:09:04.2529631Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-01T12:09:04.2534318Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T12:09:04.2547356Z   
2025-10-01T12:09:04.2547754Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-01T12:09:04.2548147Z         
2025-10-01T12:09:04.2548546Z         Error: Provider produced inconsistent result after apply
2025-10-01T12:09:04.2548907Z         
2025-10-01T12:09:04.2549409Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T12:09:04.2550381Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T12:09:04.2551039Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T12:09:04.2551488Z         cty.StringVal("CREATED").
2025-10-01T12:09:04.2551761Z         
2025-10-01T12:09:04.2552246Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T12:09:04.2552686Z         issue tracker.
2025-10-01T12:09:04.2555260Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (10.17s)
```

  - FAIL 10 seconds

### Error 2025-10-01T14:54:10+00:00
```
2025-10-01T14:54:10.8745410Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T14:54:10.8746206Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-01T14:54:10.8750847Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-01T14:54:10.8764081Z   
2025-10-01T14:54:10.8764497Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-01T14:54:10.8764866Z         
2025-10-01T14:54:10.8765286Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:54:10.8765603Z         
2025-10-01T14:54:10.8766140Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T14:54:10.8766842Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:54:10.8767469Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T14:54:10.8767984Z         cty.StringVal("CREATED").
2025-10-01T14:54:10.8768313Z         
2025-10-01T14:54:10.8768748Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:54:10.8769219Z         issue tracker.
2025-10-01T14:54:10.8771836Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (10.04s)
```

- 2025-10-02

### Error 2025-10-02T01:34:20+00:00
```
2025-10-02T01:34:20.1183251Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-02T01:34:20.1184036Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-02T01:34:20.1188190Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-02T01:34:20.1200936Z   
2025-10-02T01:34:20.1201328Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-02T01:34:20.1201692Z         
2025-10-02T01:34:20.1202089Z         Error: Provider produced inconsistent result after apply
2025-10-02T01:34:20.1202426Z         
2025-10-02T01:34:20.1202905Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-02T01:34:20.1203557Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-02T01:34:20.1204164Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-02T01:34:20.1204591Z         cty.StringVal("CREATED").
2025-10-02T01:34:20.1204864Z         
2025-10-02T01:34:20.1205325Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-02T01:34:20.1205742Z         issue tracker.
2025-10-02T01:34:20.1208152Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (8.83s)
```

- 2025-10-03

### Error 2025-10-03T00:57:28+00:00
```
2025-10-03T00:57:28.0408399Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-03T00:57:28.0409108Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-03T00:57:28.0413211Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-03T00:57:28.0425476Z    test_step_number=2 test_working_directory=/tmp/plugintest247263609
2025-10-03T00:57:28.0426028Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-03T00:57:28.0426393Z         
2025-10-03T00:57:28.0426786Z         Error: Provider produced inconsistent result after apply
2025-10-03T00:57:28.0427236Z         
2025-10-03T00:57:28.0427717Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-03T00:57:28.0428384Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-03T00:57:28.0428995Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-03T00:57:28.0429424Z         cty.StringVal("CREATED").
2025-10-03T00:57:28.0429689Z         
2025-10-03T00:57:28.0430151Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-03T00:57:28.0430570Z         issue tracker.
2025-10-03T00:57:28.0433012Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (9.97s)
```

- 2025-10-04

### Error 2025-10-04T02:32:47+00:00
```
2025-10-04T02:32:47.2211323Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-04T02:32:47.2212043Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-04T02:32:47.2216337Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-04T02:32:47.2229527Z   
2025-10-04T02:32:47.2229924Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-04T02:32:47.2230300Z         
2025-10-04T02:32:47.2230692Z         Error: Provider produced inconsistent result after apply
2025-10-04T02:32:47.2231032Z         
2025-10-04T02:32:47.2231516Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-04T02:32:47.2232183Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-04T02:32:47.2232806Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-04T02:32:47.2233250Z         cty.StringVal("CREATED").
2025-10-04T02:32:47.2233515Z         
2025-10-04T02:32:47.2233970Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-04T02:32:47.2234398Z         issue tracker.
2025-10-04T02:32:47.2236921Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (10.55s)
```

- 2025-10-05

### Error 2025-10-05T00:49:21+00:00
```
2025-10-05T00:49:21.9260553Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-05T00:49:21.9261263Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-05T00:49:21.9265707Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-05T00:49:21.9277768Z    test_step_number=2 test_terraform_path=/home/runner/work/_temp/7e5ec1e5-a83e-4690-9c6b-f87bd77b0020/terraform test_working_directory=/tmp/plugintest532082250 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-05T00:49:21.9279122Z     resource_test.go:259: Step 2/3 error: Error running apply: exit status 1
2025-10-05T00:49:21.9279512Z         
2025-10-05T00:49:21.9279908Z         Error: Provider produced inconsistent result after apply
2025-10-05T00:49:21.9280261Z         
2025-10-05T00:49:21.9280747Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-05T00:49:21.9281417Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-05T00:49:21.9282032Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-05T00:49:21.9282482Z         cty.StringVal("CREATED").
2025-10-05T00:49:21.9282754Z         
2025-10-05T00:49:21.9283228Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-05T00:49:21.9283660Z         issue tracker.
2025-10-05T00:49:21.9286157Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (10.23s)
```

- 2025-10-06 PASS 9 seconds
- 2025-10-07 PASS 6 seconds
- 2025-10-08 PASS 8 seconds
- 2025-10-09 PASS 7 seconds
- 2025-10-10 PASS 8 seconds
- 2025-10-11 PASS 7 seconds
- 2025-10-12 PASS 7 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.3151771Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-13T01:24:12.3152576Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-13T01:24:12.3157118Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-13T01:24:12.3166349Z    test_terraform_path=/home/runner/work/_temp/6d87958b-7036-4585-be2d-7248c9545d7d/terraform
2025-10-13T01:24:12.3184903Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-13T01:24:12.3185587Z     resource_test.go:259: Step 1/3 error: Error running apply: exit status 1
2025-10-13T01:24:12.3185985Z         
2025-10-13T01:24:12.3186321Z         Error: error creating resource
2025-10-13T01:24:12.3186619Z         
2025-10-13T01:24:12.3187068Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3187893Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3188753Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3189120Z         
2025-10-13T01:24:12.3189702Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3195758Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped test_working_directory=/tmp/plugintest1077359722
2025-10-13T01:24:12.3205518Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (300.44s)
```

- 2025-10-14 PASS 8 seconds
- 2025-10-15 PASS 7 seconds
- 2025-10-16 PASS 8 seconds
- 2025-10-17 PASS 6 seconds
- 2025-10-18 PASS 7 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.2063314Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-19T00:50:12.2064004Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2025-10-19T00:50:12.2068199Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-19T00:50:12.2092891Z   
2025-10-19T00:50:12.2109950Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2025-10-19T00:50:12.2110542Z     resource_test.go:259: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.2110904Z         
2025-10-19T00:50:12.2111179Z         Error: error creating resource
2025-10-19T00:50:12.2111452Z         
2025-10-19T00:50:12.2111807Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.2112282Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.2112591Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.2112692Z         
2025-10-19T00:50:12.2113335Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.2113674Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.2114003Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.2114357Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.2114656Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.2114797Z         BadRequestDetail: 
2025-10-19T00:50:12.2118906Z    test_terraform_path=/home/runner/work/_temp/900806b3-a17f-4fd8-9610-14d4dc9797f0/terraform test_step_number=1
2025-10-19T00:50:12.2125113Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (0.60s)
```

- 2025-10-20
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-10-21 PASS 6 seconds
- 2025-10-22
  - PASS 5 seconds
  - PASS 8 seconds
- 2025-10-23 PASS 6 seconds
- 2025-10-24 PASS 6 seconds
- 2025-10-25 PASS 5 seconds
- 2025-10-26 PASS 6 seconds
- 2025-10-27 PASS 6 seconds
- 2025-10-28 PASS 5 seconds
- 2025-10-29 PASS 7 seconds
- 2025-10-30 PASS 6 seconds