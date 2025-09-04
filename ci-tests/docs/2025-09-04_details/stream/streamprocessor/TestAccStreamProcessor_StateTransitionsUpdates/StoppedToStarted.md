# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 39) FAIL(x 3)
Success rate: 92.86%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-24 00:52](#error-2025-08-24t0052470000) | STREAM_PROCESSOR_TIMEOUT /api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/processor/processor-stopped-to-started | qa | 40.07s
[2025-08-31 01:04](#error-2025-08-31t0104350000) | STREAM_PROCESSOR_TIMEOUT /api/atlas/v2/groups/68b397810a66c308153f0015/streams/test-acc-tf-s-7317349162992961096/processor/processor-stopped-to-started | qa | 39.03s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 13 seconds
- 2025-08-07
  - PASS 54 seconds
  - PASS 15 seconds
- 2025-08-08 PASS 11 seconds
- 2025-08-09 PASS 11 seconds
- 2025-08-10 PASS 13 seconds
- 2025-08-11 PASS 10 seconds
- 2025-08-12
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-08-13 PASS 13 seconds
- 2025-08-14 PASS 11 seconds
- 2025-08-15 PASS 12 seconds
- 2025-08-16 PASS 11 seconds
- 2025-08-17 PASS 12 seconds
- 2025-08-18
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-08-19 PASS 14 seconds
- 2025-08-20
  - PASS 13 seconds
  - PASS 27 seconds
- 2025-08-21 PASS 13 seconds
- 2025-08-22 PASS 14 seconds
- 2025-08-23 PASS 11 seconds
- 2025-08-24

### Error 2025-08-24T00:52:47+00:00
```
2025-08-24T00:52:47.5665149Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-08-24T00:52:47.5665835Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-08-24T00:52:47.5671429Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-08-24T00:52:47.5685993Z   
2025-08-24T00:52:47.5757985Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-08-24T00:52:47.5758584Z     resource_test.go:180: Step 3/3 error: Error running apply: exit status 1
2025-08-24T00:52:47.5758963Z         
2025-08-24T00:52:47.5759314Z         Error: Error modifying stream processor
2025-08-24T00:52:47.5759615Z         
2025-08-24T00:52:47.5760009Z           with mongodbatlas_stream_processor.processor,
2025-08-24T00:52:47.5760748Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-08-24T00:52:47.5761420Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-08-24T00:52:47.5761769Z         
2025-08-24T00:52:47.5762779Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/processor/processor-stopped-to-started
2025-08-24T00:52:47.5764084Z         PATCH: HTTP 504 Gateway Timeout (Error code: "STREAM_PROCESSOR_TIMEOUT")
2025-08-24T00:52:47.5764753Z         Detail: Streams Processor with this name (test-acc-tf-s-5032423642792954917)
2025-08-24T00:52:47.5765395Z         timed out while processing. Reason: Gateway Timeout. Params:
2025-08-24T00:52:47.5766001Z         [test-acc-tf-s-5032423642792954917 processor-stopped-to-started],
2025-08-24T00:52:47.5766425Z         BadRequestDetail: 
2025-08-24T00:52:47.5770769Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (40.73s)
```

- 2025-08-25 PASS 12 seconds
- 2025-08-26 PASS 11 seconds
- 2025-08-27 PASS 14 seconds
- 2025-08-28 PASS 13 seconds
- 2025-08-29
  - PASS 13 seconds
  - PASS 12 seconds
- 2025-08-30 PASS 13 seconds
- 2025-08-31

### Error 2025-08-31T01:04:35+00:00
```
2025-08-31T01:04:35.7386888Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-08-31T01:04:35.7387695Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-08-31T01:04:35.7392703Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-08-31T01:04:35.7432939Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-08-31T01:04:35.7433523Z     resource_test.go:180: Step 3/3 error: Error running apply: exit status 1
2025-08-31T01:04:35.7433903Z         
2025-08-31T01:04:35.7434222Z         Error: Error modifying stream processor
2025-08-31T01:04:35.7434528Z         
2025-08-31T01:04:35.7434891Z           with mongodbatlas_stream_processor.processor,
2025-08-31T01:04:35.7435588Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-08-31T01:04:35.7436248Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-08-31T01:04:35.7436586Z         
2025-08-31T01:04:35.7437650Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68b397810a66c308153f0015/streams/test-acc-tf-s-7317349162992961096/processor/processor-stopped-to-started
2025-08-31T01:04:35.7438615Z         PATCH: HTTP 504 Gateway Timeout (Error code: "STREAM_PROCESSOR_TIMEOUT")
2025-08-31T01:04:35.7439272Z         Detail: Streams Processor with this name (test-acc-tf-s-7317349162992961096)
2025-08-31T01:04:35.7440046Z         timed out while processing. Reason: Gateway Timeout. Params:
2025-08-31T01:04:35.7440622Z         [test-acc-tf-s-7317349162992961096 processor-stopped-to-started],
2025-08-31T01:04:35.7441046Z         BadRequestDetail: 
2025-08-31T01:04:35.7445483Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (39.32s)
```

- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9457927Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-01T00:30:38.9459170Z     resource_test.go:179: Testing: Verifies a processor can transition from STOPPED to STARTED state
2025-09-01T00:30:38.9460398Z     resource_test.go:180: Creating execution project: test-acc-tf-p-6073624462535393344
2025-09-01T00:30:38.9461201Z     resource_test.go:180: 
2025-09-01T00:30:38.9462829Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9466093Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9469519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9473035Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:362
2025-09-01T00:30:38.9476715Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:180
2025-09-01T00:30:38.9478839Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.9479694Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9484660Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9487373Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-09-01T00:30:38.9491797Z         	Messages:   	Project creation failed: test-acc-tf-p-6073624462535393344, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9536876Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (0.16s)
```

  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 14 seconds
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-09-02 PASS 13 seconds
- 2025-09-03 PASS 11 seconds
- 2025-09-04 PASS 12 seconds