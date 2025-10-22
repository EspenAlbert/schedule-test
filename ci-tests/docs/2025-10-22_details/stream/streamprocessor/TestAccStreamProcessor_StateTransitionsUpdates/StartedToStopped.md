# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 22) FAIL(x 22)
Success rate: 50.00%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
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
[2025-10-03 00:57](#error-2025-10-03t0057280000) |  | dev | 10.03s
[2025-10-04 02:32](#error-2025-10-04t0232470000) |  | dev | 11.07s
[2025-10-05 00:49](#error-2025-10-05t0049210000) |  | qa | 11.06s
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 1.01s

## Timeline
- 2025-09-22: MISSING
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

- 2025-10-03

### Error 2025-10-03T00:57:28+00:00
```
2025-10-03T00:57:28.0331720Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-03T00:57:28.0332381Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-03T00:57:28.0340436Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-03T00:57:28.0360794Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-03T00:57:28.0361370Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-10-03T00:57:28.0361735Z         
2025-10-03T00:57:28.0362127Z         Error: Provider produced inconsistent result after apply
2025-10-03T00:57:28.0362466Z         
2025-10-03T00:57:28.0362936Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-03T00:57:28.0363584Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-03T00:57:28.0364192Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-03T00:57:28.0364623Z         cty.StringVal("CREATED").
2025-10-03T00:57:28.0364890Z         
2025-10-03T00:57:28.0365351Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-03T00:57:28.0365769Z         issue tracker.
2025-10-03T00:57:28.0371557Z    test_terraform_path=/home/runner/work/_temp/eb8e0ae6-a01f-46b5-821e-1f35296d9c49/terraform test_working_directory=/tmp/plugintest4017248419 test_step_number=2 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-03T00:57:28.0380965Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (10.30s)
```

- 2025-10-04

### Error 2025-10-04T02:32:47+00:00
```
2025-10-04T02:32:47.2119732Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-04T02:32:47.2120428Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-04T02:32:47.2128217Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-04T02:32:47.2149631Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-04T02:32:47.2150224Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-10-04T02:32:47.2150602Z         
2025-10-04T02:32:47.2150994Z         Error: Provider produced inconsistent result after apply
2025-10-04T02:32:47.2151334Z         
2025-10-04T02:32:47.2151819Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-04T02:32:47.2152487Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-04T02:32:47.2153117Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-04T02:32:47.2153550Z         cty.StringVal("CREATED").
2025-10-04T02:32:47.2153819Z         
2025-10-04T02:32:47.2154287Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-04T02:32:47.2154717Z         issue tracker.
2025-10-04T02:32:47.2160977Z    test_terraform_path=/home/runner/work/_temp/921734ac-bd2a-439e-861d-5e4f2410e16a/terraform test_working_directory=/tmp/plugintest3687071829 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-04T02:32:47.2182740Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (11.67s)
```

- 2025-10-05

### Error 2025-10-05T00:49:21+00:00
```
2025-10-05T00:49:21.9182194Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-05T00:49:21.9182882Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-05T00:49:21.9191233Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-05T00:49:21.9224684Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-05T00:49:21.9225290Z     resource_test.go:180: Step 2/2 error: Error running apply: exit status 1
2025-10-05T00:49:21.9225668Z         
2025-10-05T00:49:21.9226073Z         Error: Provider produced inconsistent result after apply
2025-10-05T00:49:21.9226424Z         
2025-10-05T00:49:21.9226913Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-05T00:49:21.9227570Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-05T00:49:21.9228189Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-05T00:49:21.9228740Z         cty.StringVal("CREATED").
2025-10-05T00:49:21.9229025Z         
2025-10-05T00:49:21.9229499Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-05T00:49:21.9229930Z         issue tracker.
2025-10-05T00:49:21.9233540Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (11.63s)
```

- 2025-10-06 PASS 10 seconds
- 2025-10-07 PASS 7 seconds
- 2025-10-08 PASS 9 seconds
- 2025-10-09 PASS 9 seconds
- 2025-10-10 PASS 11 seconds
- 2025-10-11 PASS 9 seconds
- 2025-10-12 PASS 9 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2985165Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-13T01:24:12.2986010Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-13T01:24:12.2996904Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-13T01:24:12.3025307Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-13T01:24:12.3025976Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-10-13T01:24:12.3026389Z         
2025-10-13T01:24:12.3026731Z         Error: error creating resource
2025-10-13T01:24:12.3027042Z         
2025-10-13T01:24:12.3027483Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3028507Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3029262Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3029633Z         
2025-10-13T01:24:12.3030208Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3035966Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_terraform_path=/home/runner/work/_temp/6d87958b-7036-4585-be2d-7248c9545d7d/terraform test_working_directory=/tmp/plugintest1326850331 test_step_number=1
2025-10-13T01:24:12.3088969Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (300.78s)
```

- 2025-10-14 PASS 11 seconds
- 2025-10-15 PASS 9 seconds
- 2025-10-16 PASS 9 seconds
- 2025-10-17 PASS 8 seconds
- 2025-10-18 PASS 8 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1823852Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-19T00:50:12.1824742Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-10-19T00:50:12.1832726Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-19T00:50:12.1940233Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-10-19T00:50:12.1940805Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1941165Z         
2025-10-19T00:50:12.1941442Z         Error: error creating resource
2025-10-19T00:50:12.1941713Z         
2025-10-19T00:50:12.1942077Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.1942765Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.1943413Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.1943739Z         
2025-10-19T00:50:12.1944491Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.1945314Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1945907Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.1946517Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1947321Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.1947712Z         BadRequestDetail: 
2025-10-19T00:50:12.1961686Z   
2025-10-19T00:50:12.1972914Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (1.10s)
```

- 2025-10-20
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-10-21 PASS 7 seconds
- 2025-10-22
  - PASS 8 seconds
  - PASS 10 seconds