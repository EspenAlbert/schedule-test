# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted Test Details
# Found 44 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 22) FAIL(x 22)
Success rate: 50.00%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-25 01:39](#error-2025-09-25t0139080000) |  | dev | 11.05s
[2025-09-26 00:48](#error-2025-09-26t0048160000) |  | dev | 10.06s
[2025-09-27 00:51](#error-2025-09-27t0051060000) |  | dev | 11.07s
[2025-09-29 00:53](#error-2025-09-29t0053320000) |  | dev | 11.01s
[2025-09-29 07:27](#error-2025-09-29t0727480000) |  | dev | 11.05s
[2025-09-30 00:48](#error-2025-09-30t0048540000) |  | dev | 11.01s
[2025-09-30 07:47](#error-2025-09-30t0747480000) |  | dev | 10.08s
[2025-09-30 09:31](#error-2025-09-30t0931010000) |  | dev | 10.06s
[2025-10-01 00:53](#error-2025-10-01t0053570000) |  | dev | 12.04s
[2025-10-01 03:48](#error-2025-10-01t0348330000) |  | dev | 10.08s
[2025-10-01 06:06](#error-2025-10-01t0606220000) |  | dev | 10.09s
[2025-10-01 08:09](#error-2025-10-01t0809330000) |  | dev | 10.07s
[2025-10-01 09:31](#error-2025-10-01t0931040000) |  | dev | 12.03s
[2025-10-01 11:01](#error-2025-10-01t1101220000) |  | dev | 11.02s
[2025-10-01 12:09](#error-2025-10-01t1209040000) |  | dev | 11.01s
[2025-10-01 14:54](#error-2025-10-01t1454100000) |  | dev | 11.03s
[2025-10-02 01:34](#error-2025-10-02t0134200000) |  | dev | 10.03s
[2025-10-03 00:57](#error-2025-10-03t0057280000) |  | dev | 10.02s
[2025-10-04 02:32](#error-2025-10-04t0232470000) |  | dev | 11.06s
[2025-10-05 00:49](#error-2025-10-05t0049210000) |  | qa | 11.02s
[2025-10-13 01:24](#error-2025-10-13t0124120000) |  | dev | 300.08s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor | qa | 1.00s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 11 seconds
- 2025-09-24 PASS 11 seconds
- 2025-09-25

### Error 2025-09-25T01:39:08+00:00
```
2025-09-25T01:39:08.8430711Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-25T01:39:08.8431349Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-09-25T01:39:08.8437404Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-25T01:39:08.8443162Z    test_working_directory=/tmp/plugintest2151160823 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped test_terraform_path=/home/runner/work/_temp/1d161ec9-64fa-47c4-9b9d-5da1a69878fd/terraform
2025-09-25T01:39:08.8467943Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-25T01:39:08.8468503Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-25T01:39:08.8468868Z         
2025-09-25T01:39:08.8469236Z         Error: Provider produced inconsistent result after apply
2025-09-25T01:39:08.8469559Z         
2025-09-25T01:39:08.8470017Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-25T01:39:08.8470651Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-25T01:39:08.8471240Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-25T01:39:08.8471658Z         cty.StringVal("CREATED").
2025-09-25T01:39:08.8471911Z         
2025-09-25T01:39:08.8472348Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-25T01:39:08.8472753Z         issue tracker.
2025-09-25T01:39:08.8476416Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (11.46s)
```

- 2025-09-26

### Error 2025-09-26T00:48:16+00:00
```
2025-09-26T00:48:16.2326362Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-26T00:48:16.2327047Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-09-26T00:48:16.2333067Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-26T00:48:16.2339530Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-26T00:48:16.2352057Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-26T00:48:16.2352788Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-26T00:48:16.2353140Z         
2025-09-26T00:48:16.2353551Z         Error: Provider produced inconsistent result after apply
2025-09-26T00:48:16.2353871Z         
2025-09-26T00:48:16.2354386Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-26T00:48:16.2355076Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-26T00:48:16.2355710Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-26T00:48:16.2356139Z         cty.StringVal("CREATED").
2025-09-26T00:48:16.2356387Z         
2025-09-26T00:48:16.2356892Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-26T00:48:16.2357304Z         issue tracker.
2025-09-26T00:48:16.2363224Z    test_working_directory=/tmp/plugintest1089574475 test_step_number=2 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-26T00:48:16.2372250Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (10.59s)
```

- 2025-09-27

### Error 2025-09-27T00:51:06+00:00
```
2025-09-27T00:51:06.5765802Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-27T00:51:06.5766441Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-09-27T00:51:06.5771990Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-27T00:51:06.5778453Z   
2025-09-27T00:51:06.5790411Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-27T00:51:06.5791073Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-27T00:51:06.5791421Z         
2025-09-27T00:51:06.5791784Z         Error: Provider produced inconsistent result after apply
2025-09-27T00:51:06.5792111Z         
2025-09-27T00:51:06.5792568Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-27T00:51:06.5793193Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-27T00:51:06.5793770Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-27T00:51:06.5794314Z         cty.StringVal("CREATED").
2025-09-27T00:51:06.5794558Z         
2025-09-27T00:51:06.5794993Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-27T00:51:06.5795393Z         issue tracker.
2025-09-27T00:51:06.5801228Z    test_working_directory=/tmp/plugintest4014910130 test_step_number=2
2025-09-27T00:51:06.5809573Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (11.71s)
```

- 2025-09-28 PASS 12 seconds
- 2025-09-29
  - FAIL 11 seconds

### Error 2025-09-29T00:53:32+00:00
```
2025-09-29T00:53:32.4775996Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-29T00:53:32.4776633Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-09-29T00:53:32.4782659Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-29T00:53:32.4788365Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped test_terraform_path=/home/runner/work/_temp/79b80f6d-7de4-468c-822e-b9dc40882ff4/terraform test_working_directory=/tmp/plugintest2427568689
2025-09-29T00:53:32.4801191Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-29T00:53:32.4801752Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-29T00:53:32.4802212Z         
2025-09-29T00:53:32.4802584Z         Error: Provider produced inconsistent result after apply
2025-09-29T00:53:32.4802900Z         
2025-09-29T00:53:32.4803359Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-29T00:53:32.4803993Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T00:53:32.4804588Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-29T00:53:32.4804997Z         cty.StringVal("CREATED").
2025-09-29T00:53:32.4805240Z         
2025-09-29T00:53:32.4805687Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T00:53:32.4806086Z         issue tracker.
2025-09-29T00:53:32.4812532Z   
2025-09-29T00:53:32.4820592Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (11.12s)
```

  - FAIL 11 seconds

### Error 2025-09-29T07:27:48+00:00
```
2025-09-29T07:27:48.1308665Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-29T07:27:48.1309300Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-09-29T07:27:48.1314822Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-29T07:27:48.1321744Z   
2025-09-29T07:27:48.1322127Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-29T07:27:48.1322482Z         
2025-09-29T07:27:48.1322855Z         Error: Provider produced inconsistent result after apply
2025-09-29T07:27:48.1323175Z         
2025-09-29T07:27:48.1323643Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-29T07:27:48.1324302Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-29T07:27:48.1324896Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-29T07:27:48.1325325Z         cty.StringVal("CREATED").
2025-09-29T07:27:48.1325577Z         
2025-09-29T07:27:48.1326037Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-29T07:27:48.1326436Z         issue tracker.
2025-09-29T07:27:48.1332947Z   
2025-09-29T07:27:48.1351880Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (11.46s)
```

- 2025-09-30
  - FAIL 11 seconds

### Error 2025-09-30T00:48:54+00:00
```
2025-09-30T00:48:54.4361540Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-30T00:48:54.4362231Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-09-30T00:48:54.4366959Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-30T00:48:54.4399575Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-30T00:48:54.4400184Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-30T00:48:54.4400756Z         
2025-09-30T00:48:54.4401183Z         Error: Provider produced inconsistent result after apply
2025-09-30T00:48:54.4401520Z         
2025-09-30T00:48:54.4402046Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-30T00:48:54.4402752Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-30T00:48:54.4403410Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-30T00:48:54.4403854Z         cty.StringVal("CREATED").
2025-09-30T00:48:54.4404105Z         
2025-09-30T00:48:54.4404621Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-30T00:48:54.4405043Z         issue tracker.
2025-09-30T00:48:54.4408720Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (11.14s)
```

  - FAIL 10 seconds

### Error 2025-09-30T07:47:48+00:00
```
2025-09-30T07:47:48.1742511Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-30T07:47:48.1743152Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-09-30T07:47:48.1748251Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-30T07:47:48.1779975Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-30T07:47:48.1780541Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-30T07:47:48.1780889Z         
2025-09-30T07:47:48.1781263Z         Error: Provider produced inconsistent result after apply
2025-09-30T07:47:48.1781582Z         
2025-09-30T07:47:48.1782036Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-30T07:47:48.1782664Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-30T07:47:48.1783248Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-30T07:47:48.1783658Z         cty.StringVal("CREATED").
2025-09-30T07:47:48.1783903Z         
2025-09-30T07:47:48.1784345Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-30T07:47:48.1784744Z         issue tracker.
2025-09-30T07:47:48.1788287Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (10.84s)
```

  - PASS 13 seconds
  - FAIL 10 seconds

### Error 2025-09-30T09:31:01+00:00
```
2025-09-30T09:31:01.6314413Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-30T09:31:01.6315655Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-09-30T09:31:01.6326389Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-30T09:31:01.6338753Z   
2025-09-30T09:31:01.6359768Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-30T09:31:01.6360519Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-09-30T09:31:01.6360982Z         
2025-09-30T09:31:01.6361454Z         Error: Provider produced inconsistent result after apply
2025-09-30T09:31:01.6361880Z         
2025-09-30T09:31:01.6362465Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-09-30T09:31:01.6363283Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-09-30T09:31:01.6364171Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-09-30T09:31:01.6364709Z         cty.StringVal("CREATED").
2025-09-30T09:31:01.6365029Z         
2025-09-30T09:31:01.6365588Z         This is a bug in the provider, which should be reported in the provider's own
2025-09-30T09:31:01.6366100Z         issue tracker.
2025-09-30T09:31:01.6372969Z   
2025-09-30T09:31:01.6380666Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (10.62s)
```

  - PASS 14 seconds
- 2025-10-01
  - FAIL 12 seconds

### Error 2025-10-01T00:53:57+00:00
```
2025-10-01T00:53:57.3040744Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T00:53:57.3041410Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-01T00:53:57.3047105Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T00:53:57.3053261Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped test_terraform_path=/home/runner/work/_temp/912ad769-4e1d-41b6-9319-84f33a87eb38/terraform
2025-10-01T00:53:57.3078039Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T00:53:57.3078609Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T00:53:57.3078971Z         
2025-10-01T00:53:57.3079359Z         Error: Provider produced inconsistent result after apply
2025-10-01T00:53:57.3079690Z         
2025-10-01T00:53:57.3080161Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T00:53:57.3080808Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T00:53:57.3081410Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T00:53:57.3082146Z         cty.StringVal("CREATED").
2025-10-01T00:53:57.3082437Z         
2025-10-01T00:53:57.3082901Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T00:53:57.3083310Z         issue tracker.
2025-10-01T00:53:57.3086963Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (12.39s)
```

  - FAIL 10 seconds

### Error 2025-10-01T03:48:33+00:00
```
2025-10-01T03:48:33.3905302Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T03:48:33.3905955Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-01T03:48:33.3911632Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T03:48:33.3917761Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_step_number=2
2025-10-01T03:48:33.3918630Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T03:48:33.3918999Z         
2025-10-01T03:48:33.3919378Z         Error: Provider produced inconsistent result after apply
2025-10-01T03:48:33.3919711Z         
2025-10-01T03:48:33.3920171Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T03:48:33.3920814Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T03:48:33.3921539Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T03:48:33.3921963Z         cty.StringVal("CREATED").
2025-10-01T03:48:33.3922226Z         
2025-10-01T03:48:33.3922674Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T03:48:33.3923076Z         issue tracker.
2025-10-01T03:48:33.3929692Z   
2025-10-01T03:48:33.3949176Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (10.77s)
```

  - FAIL 10 seconds

### Error 2025-10-01T06:06:22+00:00
```
2025-10-01T06:06:22.2175008Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T06:06:22.2176217Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-01T06:06:22.2182119Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T06:06:22.2189127Z    test_working_directory=/tmp/plugintest3023956663 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped test_step_number=2 test_terraform_path=/home/runner/work/_temp/15841f83-8c96-491c-86a5-85951c723a9d/terraform
2025-10-01T06:06:22.2213857Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T06:06:22.2214419Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T06:06:22.2214776Z         
2025-10-01T06:06:22.2215152Z         Error: Provider produced inconsistent result after apply
2025-10-01T06:06:22.2215482Z         
2025-10-01T06:06:22.2215943Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T06:06:22.2216580Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T06:06:22.2217293Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T06:06:22.2217714Z         cty.StringVal("CREATED").
2025-10-01T06:06:22.2217972Z         
2025-10-01T06:06:22.2218412Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T06:06:22.2218814Z         issue tracker.
2025-10-01T06:06:22.2223350Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (10.86s)
```

  - FAIL 10 seconds

### Error 2025-10-01T08:09:33+00:00
```
2025-10-01T08:09:33.9142642Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T08:09:33.9143429Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-01T08:09:33.9149110Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T08:09:33.9155778Z   
2025-10-01T08:09:33.9168578Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T08:09:33.9169165Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T08:09:33.9169530Z         
2025-10-01T08:09:33.9169922Z         Error: Provider produced inconsistent result after apply
2025-10-01T08:09:33.9170255Z         
2025-10-01T08:09:33.9170725Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T08:09:33.9171377Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T08:09:33.9171982Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T08:09:33.9172415Z         cty.StringVal("CREATED").
2025-10-01T08:09:33.9172673Z         
2025-10-01T08:09:33.9173137Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T08:09:33.9173548Z         issue tracker.
2025-10-01T08:09:33.9179323Z    test_terraform_path=/home/runner/work/_temp/09deeb80-eca8-4ee5-ab57-908f57a43ac4/terraform test_working_directory=/tmp/plugintest1336254018 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped test_step_number=2
2025-10-01T08:09:33.9188436Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (10.75s)
```

  - FAIL 12 seconds

### Error 2025-10-01T09:31:04+00:00
```
2025-10-01T09:31:04.5433827Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T09:31:04.5434758Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-01T09:31:04.5438925Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T09:31:04.5476293Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T09:31:04.5476974Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T09:31:04.5477395Z         
2025-10-01T09:31:04.5477847Z         Error: Provider produced inconsistent result after apply
2025-10-01T09:31:04.5478251Z         
2025-10-01T09:31:04.5478767Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T09:31:04.5479516Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T09:31:04.5480570Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T09:31:04.5481339Z         cty.StringVal("CREATED").
2025-10-01T09:31:04.5481783Z         
2025-10-01T09:31:04.5482602Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T09:31:04.5483285Z         issue tracker.
2025-10-01T09:31:04.5487715Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (12.30s)
```

  - FAIL 11 seconds

### Error 2025-10-01T11:01:22+00:00
```
2025-10-01T11:01:22.8135781Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T11:01:22.8136438Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-01T11:01:22.8142594Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T11:01:22.8175320Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T11:01:22.8175893Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T11:01:22.8176248Z         
2025-10-01T11:01:22.8176627Z         Error: Provider produced inconsistent result after apply
2025-10-01T11:01:22.8176954Z         
2025-10-01T11:01:22.8177425Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T11:01:22.8178072Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T11:01:22.8178670Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T11:01:22.8179103Z         cty.StringVal("CREATED").
2025-10-01T11:01:22.8179359Z         
2025-10-01T11:01:22.8179816Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T11:01:22.8180224Z         issue tracker.
2025-10-01T11:01:22.8183895Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (11.21s)
```

  - FAIL 11 seconds

### Error 2025-10-01T12:09:04+00:00
```
2025-10-01T12:09:04.2448732Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T12:09:04.2449434Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-01T12:09:04.2456692Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T12:09:04.2465359Z   
2025-10-01T12:09:04.2478827Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T12:09:04.2479454Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T12:09:04.2479851Z         
2025-10-01T12:09:04.2480443Z         Error: Provider produced inconsistent result after apply
2025-10-01T12:09:04.2480809Z         
2025-10-01T12:09:04.2481310Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T12:09:04.2482003Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T12:09:04.2482770Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T12:09:04.2483219Z         cty.StringVal("CREATED").
2025-10-01T12:09:04.2483497Z         
2025-10-01T12:09:04.2483980Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T12:09:04.2484424Z         issue tracker.
2025-10-01T12:09:04.2491408Z   
2025-10-01T12:09:04.2500179Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (11.05s)
```

  - FAIL 11 seconds

### Error 2025-10-01T14:54:10+00:00
```
2025-10-01T14:54:10.8670672Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T14:54:10.8671291Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-01T14:54:10.8676741Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T14:54:10.8682728Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped test_terraform_path=/home/runner/work/_temp/39116e1f-39ff-4584-9e0d-36a0a53ace63/terraform test_working_directory=/tmp/plugintest1917399797
2025-10-01T14:54:10.8695373Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-01T14:54:10.8696052Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-01T14:54:10.8696547Z         
2025-10-01T14:54:10.8696929Z         Error: Provider produced inconsistent result after apply
2025-10-01T14:54:10.8697331Z         
2025-10-01T14:54:10.8697800Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-01T14:54:10.8698550Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-01T14:54:10.8699228Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-01T14:54:10.8699793Z         cty.StringVal("CREATED").
2025-10-01T14:54:10.8700152Z         
2025-10-01T14:54:10.8700714Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-01T14:54:10.8701108Z         issue tracker.
2025-10-01T14:54:10.8707673Z   
2025-10-01T14:54:10.8716667Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (11.30s)
```

- 2025-10-02

### Error 2025-10-02T01:34:20+00:00
```
2025-10-02T01:34:20.1099748Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-02T01:34:20.1100411Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-02T01:34:20.1105835Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-02T01:34:20.1111852Z    test_working_directory=/tmp/plugintest594384064 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_terraform_path=/home/runner/work/_temp/6fef3072-0005-4508-a7be-18a86a8e5897/terraform test_step_number=2
2025-10-02T01:34:20.1112971Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-02T01:34:20.1113334Z         
2025-10-02T01:34:20.1113722Z         Error: Provider produced inconsistent result after apply
2025-10-02T01:34:20.1114053Z         
2025-10-02T01:34:20.1114534Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-02T01:34:20.1115185Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-02T01:34:20.1115795Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-02T01:34:20.1116220Z         cty.StringVal("CREATED").
2025-10-02T01:34:20.1116488Z         
2025-10-02T01:34:20.1116943Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-02T01:34:20.1117484Z         issue tracker.
2025-10-02T01:34:20.1124238Z   
2025-10-02T01:34:20.1148574Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (10.25s)
```

- 2025-10-03

### Error 2025-10-03T00:57:28+00:00
```
2025-10-03T00:57:28.0335432Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-03T00:57:28.0336083Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-03T00:57:28.0341947Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-03T00:57:28.0348935Z   
2025-10-03T00:57:28.0349328Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-03T00:57:28.0349696Z         
2025-10-03T00:57:28.0350093Z         Error: Provider produced inconsistent result after apply
2025-10-03T00:57:28.0350435Z         
2025-10-03T00:57:28.0350920Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-03T00:57:28.0351571Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-03T00:57:28.0352177Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-03T00:57:28.0352610Z         cty.StringVal("CREATED").
2025-10-03T00:57:28.0352878Z         
2025-10-03T00:57:28.0353338Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-03T00:57:28.0353901Z         issue tracker.
2025-10-03T00:57:28.0360340Z    test_working_directory=/tmp/plugintest3526205888
2025-10-03T00:57:28.0380317Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (10.24s)
```

- 2025-10-04

### Error 2025-10-04T02:32:47+00:00
```
2025-10-04T02:32:47.2123470Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-04T02:32:47.2124142Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-04T02:32:47.2129459Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-04T02:32:47.2137100Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-04T02:32:47.2137706Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-04T02:32:47.2138075Z         
2025-10-04T02:32:47.2138469Z         Error: Provider produced inconsistent result after apply
2025-10-04T02:32:47.2138911Z         
2025-10-04T02:32:47.2139516Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-04T02:32:47.2140298Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-04T02:32:47.2140966Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-04T02:32:47.2141404Z         cty.StringVal("CREATED").
2025-10-04T02:32:47.2141669Z         
2025-10-04T02:32:47.2142137Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-04T02:32:47.2142562Z         issue tracker.
2025-10-04T02:32:47.2149289Z   
2025-10-04T02:32:47.2182048Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (11.65s)
```

- 2025-10-05

### Error 2025-10-05T00:49:21+00:00
```
2025-10-05T00:49:21.9185908Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-05T00:49:21.9186570Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-05T00:49:21.9192267Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-05T00:49:21.9199632Z   
2025-10-05T00:49:21.9200038Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-10-05T00:49:21.9200425Z         
2025-10-05T00:49:21.9200835Z         Error: Provider produced inconsistent result after apply
2025-10-05T00:49:21.9201187Z         
2025-10-05T00:49:21.9201681Z         When applying changes to mongodbatlas_stream_processor.processor, provider
2025-10-05T00:49:21.9202347Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-10-05T00:49:21.9202965Z         unexpected new value: .state: was cty.StringVal("STOPPED"), but now
2025-10-05T00:49:21.9203416Z         cty.StringVal("CREATED").
2025-10-05T00:49:21.9203696Z         
2025-10-05T00:49:21.9204170Z         This is a bug in the provider, which should be reported in the provider's own
2025-10-05T00:49:21.9204602Z         issue tracker.
2025-10-05T00:49:21.9211474Z   
2025-10-05T00:49:21.9232229Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (11.16s)
```

- 2025-10-06 PASS 13 seconds
- 2025-10-07 PASS 9 seconds
- 2025-10-08 PASS 12 seconds
- 2025-10-09 PASS 12 seconds
- 2025-10-10 PASS 12 seconds
- 2025-10-11 PASS 12 seconds
- 2025-10-12 PASS 12 seconds
- 2025-10-13

### Error 2025-10-13T01:24:12+00:00
```
2025-10-13T01:24:12.2990079Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-13T01:24:12.2990933Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-13T01:24:12.2996347Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-13T01:24:12.3037080Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-13T01:24:12.3037737Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-10-13T01:24:12.3038138Z         
2025-10-13T01:24:12.3038655Z         Error: error creating resource
2025-10-13T01:24:12.3038959Z         
2025-10-13T01:24:12.3039407Z           with mongodbatlas_stream_processor.processor,
2025-10-13T01:24:12.3040449Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-13T01:24:12.3041217Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-13T01:24:12.3041583Z         
2025-10-13T01:24:12.3042156Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:24:12.3054714Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-10-13T01:24:12.3090442Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (300.79s)
```

- 2025-10-14 PASS 14 seconds
- 2025-10-15 PASS 13 seconds
- 2025-10-16 PASS 11 seconds
- 2025-10-17 PASS 9 seconds
- 2025-10-18 PASS 11 seconds
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1827901Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-19T00:50:12.1828558Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-10-19T00:50:12.1834231Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-19T00:50:12.1848238Z   
2025-10-19T00:50:12.1869946Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-10-19T00:50:12.1870518Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-10-19T00:50:12.1870877Z         
2025-10-19T00:50:12.1871161Z         Error: error creating resource
2025-10-19T00:50:12.1871427Z         
2025-10-19T00:50:12.1871791Z           with mongodbatlas_stream_processor.processor,
2025-10-19T00:50:12.1872473Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-10-19T00:50:12.1873117Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-10-19T00:50:12.1873442Z         
2025-10-19T00:50:12.1874193Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43175353f113dafd152bb/streams/test-acc-tf-s-7290335486553967260/processor
2025-10-19T00:50:12.1875135Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1875733Z         Detail: Stream instance for project 68f43175353f113dafd152bb and name
2025-10-19T00:50:12.1876342Z         test-acc-tf-s-7290335486553967260 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1877171Z         [68f43175353f113dafd152bb test-acc-tf-s-7290335486553967260],
2025-10-19T00:50:12.1877579Z         BadRequestDetail: 
2025-10-19T00:50:12.1905830Z   
2025-10-19T00:50:12.1971002Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (1.03s)
```

- 2025-10-20
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-10-21 PASS 10 seconds
- 2025-10-22
  - PASS 10 seconds
  - PASS 14 seconds