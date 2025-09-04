# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-24 00:52](#error-2025-08-24t0052470000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/processor | qa | 32.05s
[2025-08-31 01:04](#error-2025-08-31t0104350000) | STREAM_PROCESSOR_TIMEOUT /api/atlas/v2/groups/68b397810a66c308153f0015/streams/test-acc-tf-s-7317349162992961096/processor/processor-stopped-to-stopped | qa | 39.01s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 10 seconds
- 2025-08-07
  - PASS 51 seconds
  - PASS 13 seconds
- 2025-08-08 PASS 10 seconds
- 2025-08-09 PASS 9 seconds
- 2025-08-10 PASS 11 seconds
- 2025-08-11 PASS 9 seconds
- 2025-08-12
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-08-13 PASS 10 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15 PASS 10 seconds
- 2025-08-16 PASS 9 seconds
- 2025-08-17 PASS 52 seconds
- 2025-08-18
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-08-19 PASS 11 seconds
- 2025-08-20
  - PASS 11 seconds
  - PASS 23 seconds
- 2025-08-21 PASS 10 seconds
- 2025-08-22 PASS 11 seconds
- 2025-08-23 PASS 10 seconds
- 2025-08-24

### Error 2025-08-24T00:52:47+00:00
```
2025-08-24T00:52:47.5666933Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-08-24T00:52:47.5667687Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-08-24T00:52:47.5670919Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-08-24T00:52:47.5708735Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-08-24T00:52:47.5709337Z     resource_test.go:180: Step 1/3 error: Error running apply: exit status 1
2025-08-24T00:52:47.5709714Z         
2025-08-24T00:52:47.5710028Z         Error: error creating resource
2025-08-24T00:52:47.5710312Z         
2025-08-24T00:52:47.5710707Z           with mongodbatlas_stream_processor.processor,
2025-08-24T00:52:47.5711458Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-08-24T00:52:47.5712139Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-08-24T00:52:47.5712603Z         
2025-08-24T00:52:47.5713524Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/processor
2025-08-24T00:52:47.5714435Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-08-24T00:52:47.5715121Z         Detail: Streams Processor with this name (processor-stopped-to-stopped) had a
2025-08-24T00:52:47.5715799Z         problem occur: An internal error occurred. Reason: Bad Request. Params:
2025-08-24T00:52:47.5716488Z         [processor-stopped-to-stopped An internal error occurred], BadRequestDetail: 
2025-08-24T00:52:47.5732655Z    test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-08-24T00:52:47.5769432Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (32.55s)
```

- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 9 seconds
- 2025-08-27 PASS 12 seconds
- 2025-08-28 PASS 10 seconds
- 2025-08-29
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-08-30 PASS 11 seconds
- 2025-08-31

### Error 2025-08-31T01:04:35+00:00
```
2025-08-31T01:04:35.7388800Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-08-31T01:04:35.7389568Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-08-31T01:04:35.7392189Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-08-31T01:04:35.7409299Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-08-31T01:04:35.7410094Z     resource_test.go:180: Step 2/3 error: Error running apply: exit status 1
2025-08-31T01:04:35.7410475Z         
2025-08-31T01:04:35.7410791Z         Error: Error modifying stream processor
2025-08-31T01:04:35.7411093Z         
2025-08-31T01:04:35.7411464Z           with mongodbatlas_stream_processor.processor,
2025-08-31T01:04:35.7412295Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-08-31T01:04:35.7412975Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-08-31T01:04:35.7413335Z         
2025-08-31T01:04:35.7414286Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397810a66c308153f0015/streams/test-acc-tf-s-7317349162992961096/processor/processor-stopped-to-stopped
2025-08-31T01:04:35.7415243Z         PATCH: HTTP 504 Gateway Timeout (Error code: "STREAM_PROCESSOR_TIMEOUT")
2025-08-31T01:04:35.7415894Z         Detail: Streams Processor with this name (test-acc-tf-s-7317349162992961096)
2025-08-31T01:04:35.7416493Z         timed out while processing. Reason: Gateway Timeout. Params:
2025-08-31T01:04:35.7417067Z         [test-acc-tf-s-7317349162992961096 processor-stopped-to-stopped],
2025-08-31T01:04:35.7417501Z         BadRequestDetail: 
2025-08-31T01:04:35.7432599Z   
2025-08-31T01:04:35.7444669Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (39.06s)
```

- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9494530Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-01T00:30:38.9495901Z     resource_test.go:179: Testing: Verifies a processor in STOPPED state can be updated while remaining in STOPPED state
2025-09-01T00:30:38.9497349Z     resource_test.go:180: Creating execution project: test-acc-tf-p-751930975498490582
2025-09-01T00:30:38.9498129Z     resource_test.go:180: 
2025-09-01T00:30:38.9499712Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9502929Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9506570Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9509992Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:362
2025-09-01T00:30:38.9513439Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:180
2025-09-01T00:30:38.9515498Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.9516323Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9521519Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9524047Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-09-01T00:30:38.9528438Z         	Messages:   	Project creation failed: test-acc-tf-p-751930975498490582, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9538041Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped (0.18s)
```

  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 9 seconds
  - PASS 10 seconds
- 2025-09-02 PASS 11 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 11 seconds