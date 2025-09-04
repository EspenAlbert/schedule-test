# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-24 00:52](#error-2025-08-24t0052470000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/processor | qa | 32.05s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 seconds
- 2025-08-07
  - PASS 36 seconds
  - PASS 9 seconds
- 2025-08-08 PASS 7 seconds
- 2025-08-09 PASS 7 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 7 seconds
- 2025-08-12
  - PASS 7 seconds
  - PASS 6 seconds
- 2025-08-13 PASS 8 seconds
- 2025-08-14 PASS 7 seconds
- 2025-08-15 PASS 8 seconds
- 2025-08-16 PASS 7 seconds
- 2025-08-17 PASS 7 seconds
- 2025-08-18
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-08-19 PASS 8 seconds
- 2025-08-20
  - PASS 8 seconds
  - PASS 21 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22 PASS 8 seconds
- 2025-08-23 PASS 8 seconds
- 2025-08-24

### Error 2025-08-24T00:52:47+00:00
```
2025-08-24T00:52:47.5659385Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-08-24T00:52:47.5660074Z     resource_test.go:179: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-08-24T00:52:47.5670402Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-08-24T00:52:47.5686341Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-08-24T00:52:47.5686937Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:52:47.5687461Z         
2025-08-24T00:52:47.5687769Z         Error: error creating resource
2025-08-24T00:52:47.5688055Z         
2025-08-24T00:52:47.5688457Z           with mongodbatlas_stream_processor.processor,
2025-08-24T00:52:47.5689205Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-08-24T00:52:47.5689902Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-08-24T00:52:47.5690249Z         
2025-08-24T00:52:47.5691086Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/processor
2025-08-24T00:52:47.5691955Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-08-24T00:52:47.5692647Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2025-08-24T00:52:47.5693563Z         problem occur: An internal error occurred. Reason: Bad Request. Params:
2025-08-24T00:52:47.5694259Z         [processor-created-to-started An internal error occurred], BadRequestDetail: 
2025-08-24T00:52:47.5708195Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2025-08-24T00:52:47.5768763Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (32.53s)
```

- 2025-08-25 PASS 8 seconds
- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 8 seconds
- 2025-08-28 PASS 8 seconds
- 2025-08-29
  - PASS 8 seconds
  - PASS 7 seconds
- 2025-08-30 PASS 8 seconds
- 2025-08-31 PASS 9 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9350249Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-01T00:30:38.9351420Z     resource_test.go:179: Testing: Verifies a processor can transition from CREATED to STARTED state
2025-09-01T00:30:38.9352566Z     resource_test.go:180: Creating execution project: test-acc-tf-p-6797626280422431764
2025-09-01T00:30:38.9353319Z     resource_test.go:180: 
2025-09-01T00:30:38.9354827Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9358053Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9361080Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9364261Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:362
2025-09-01T00:30:38.9368161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:180
2025-09-01T00:30:38.9370203Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.9371008Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9375642Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9378205Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2025-09-01T00:30:38.9382152Z         	Messages:   	Project creation failed: test-acc-tf-p-6797626280422431764, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9533265Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (0.19s)
```

  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 7 seconds
- 2025-09-04 PASS 7 seconds