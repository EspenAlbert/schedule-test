# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-24 00:52](#error-2025-08-24t0052470000) | STREAM_PROCESSOR_TIMEOUT /api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/processor/processor-started-to-started:start | qa |  | 32.10s
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 12 seconds
- 2025-08-07
  - PASS 50 seconds
  - PASS 14 seconds
- 2025-08-08 PASS 11 seconds
- 2025-08-09 PASS 10 seconds
- 2025-08-10 PASS 12 seconds
- 2025-08-11 PASS 10 seconds
- 2025-08-12
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-08-13 PASS 11 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15 PASS 11 seconds
- 2025-08-16 PASS 10 seconds
- 2025-08-17 PASS 11 seconds
- 2025-08-18
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-08-19 PASS 12 seconds
- 2025-08-20
  - PASS 12 seconds
  - PASS 13 seconds
- 2025-08-21 PASS 11 seconds
- 2025-08-22 PASS 12 seconds
- 2025-08-23 PASS 11 seconds
- 2025-08-24

### Error 2025-08-24T00:52:47+00:00
```
2025-08-24T00:52:47.5662933Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-08-24T00:52:47.5663858Z     resource_test.go:179: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-08-24T00:52:47.5669370Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-08-24T00:52:47.5733238Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-08-24T00:52:47.5734048Z     resource_test.go:180: Step 1/2 error: Error running apply: exit status 1
2025-08-24T00:52:47.5734433Z         
2025-08-24T00:52:47.5735300Z         Error: Error starting stream processor. You need to fix the processor and import the resource or delete it manually and re-run terraform apply.
2025-08-24T00:52:47.5735885Z         
2025-08-24T00:52:47.5736275Z           with mongodbatlas_stream_processor.processor,
2025-08-24T00:52:47.5737041Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-08-24T00:52:47.5737713Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-08-24T00:52:47.5738178Z         
2025-08-24T00:52:47.5739203Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68aa5d374192cd1cc589cec3/streams/test-acc-tf-s-5032423642792954917/processor/processor-started-to-started:start
2025-08-24T00:52:47.5740191Z         POST: HTTP 504 Gateway Timeout (Error code: "STREAM_PROCESSOR_TIMEOUT")
2025-08-24T00:52:47.5740909Z         Detail: Streams Processor with this name (test-acc-tf-s-5032423642792954917)
2025-08-24T00:52:47.5741563Z         timed out while processing. Reason: Gateway Timeout. Params:
2025-08-24T00:52:47.5742168Z         [test-acc-tf-s-5032423642792954917 processor-started-to-started],
2025-08-24T00:52:47.5742604Z         BadRequestDetail: 
2025-08-24T00:52:47.5756917Z    test_terraform_path=/home/runner/work/_temp/d2bdc5ff-67dd-4337-933f-9f535c8e715a/terraform test_working_directory=/tmp/plugintest3501914863 test_step_number=3 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2025-08-24T00:52:47.5770103Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (32.98s)
```

- 2025-08-25 PASS 10 seconds
- 2025-08-26 PASS 11 seconds
- 2025-08-27 PASS 13 seconds
- 2025-08-28 PASS 11 seconds
- 2025-08-29
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-08-30 PASS 12 seconds
- 2025-08-31 PASS 12 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9420575Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-01T00:30:38.9421968Z     resource_test.go:179: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2025-09-01T00:30:38.9423307Z     resource_test.go:180: Creating execution project: test-acc-tf-p-569143447521582500
2025-09-01T00:30:38.9424117Z     resource_test.go:180: 
2025-09-01T00:30:38.9425956Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9429431Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9432704Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9436137Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:362
2025-09-01T00:30:38.9439796Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:180
2025-09-01T00:30:38.9441928Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.9442779Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9448117Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9450754Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2025-09-01T00:30:38.9455040Z         	Messages:   	Project creation failed: test-acc-tf-p-569143447521582500, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9535562Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.18s)
```

  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 12 seconds
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-09-02 PASS 12 seconds
- 2025-09-03 PASS 10 seconds
- 2025-09-04 PASS 12 seconds