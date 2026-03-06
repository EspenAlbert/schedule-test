# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 0.06s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 0.07s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor | dev |  | 0.08s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0989879Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-05T01:04:40.0990750Z     resource_test.go:307: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2026-02-05T01:04:40.0997298Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-05T01:04:40.1020617Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-05T01:04:40.1021630Z     resource_test.go:308: Step 1/2 error: Error running apply: exit status 1
2026-02-05T01:04:40.1022353Z         
2026-02-05T01:04:40.1023060Z         Error: error creating resource
2026-02-05T01:04:40.1023579Z         
2026-02-05T01:04:40.1024272Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.1025879Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.1027212Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.1027873Z         
2026-02-05T01:04:40.1029310Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.1030880Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.1032062Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2026-02-05T01:04:40.1032762Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.1033612Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.1034319Z         [processor-created-to-stopped connection named sample_stream_solar does not
2026-02-05T01:04:40.1034970Z         exist. Check sp.listConnections() for available connections],
2026-02-05T01:04:40.1035394Z         BadRequestDetail: 
2026-02-05T01:04:40.1055757Z   
2026-02-05T01:04:40.1095265Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.64s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.598000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped',confidence=1.0,ts_when='27 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5986242Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-06T00:56:32.5986977Z     resource_test.go:307: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2026-02-06T00:56:32.5992271Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-06T00:56:32.6011009Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-06T00:56:32.6011634Z     resource_test.go:308: Step 1/2 error: Error running apply: exit status 1
2026-02-06T00:56:32.6012012Z         
2026-02-06T00:56:32.6012297Z         Error: error creating resource
2026-02-06T00:56:32.6012570Z         
2026-02-06T00:56:32.6012939Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.6013656Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.6014337Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.6014680Z         
2026-02-06T00:56:32.6015419Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.6016443Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.6017133Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2026-02-06T00:56:32.6017814Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.6018488Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.6019192Z         [processor-created-to-stopped connection named sample_stream_solar does not
2026-02-06T00:56:32.6019818Z         exist. Check sp.listConnections() for available connections],
2026-02-06T00:56:32.6020239Z         BadRequestDetail: 
2026-02-06T00:56:32.6036958Z    test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/4658afad-353d-4993-8600-6b48e8658f13/terraform
2026-02-06T00:56:32.6083796Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.68s)
```

- 2026-02-07
  - FAIL a moment

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6456570Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-07T00:56:32.6457304Z     resource_test.go:307: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2026-02-07T00:56:32.6462387Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-07T00:56:32.6513898Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-07T00:56:32.6514632Z     resource_test.go:308: Step 1/2 error: Error running apply: exit status 1
2026-02-07T00:56:32.6515054Z         
2026-02-07T00:56:32.6515411Z         Error: error creating resource
2026-02-07T00:56:32.6515698Z         
2026-02-07T00:56:32.6516171Z           with mongodbatlas_stream_processor.processor,
2026-02-07T00:56:32.6517130Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-07T00:56:32.6518021Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-07T00:56:32.6518457Z         
2026-02-07T00:56:32.6519309Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor
2026-02-07T00:56:32.6520259Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-07T00:56:32.6521045Z         Detail: Streams Processor with this name (processor-created-to-stopped) had a
2026-02-07T00:56:32.6521826Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-07T00:56:32.6522748Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-07T00:56:32.6523603Z         [processor-created-to-stopped connection named sample_stream_solar does not
2026-02-07T00:56:32.6524258Z         exist. Check sp.listConnections() for available connections],
2026-02-07T00:56:32.6524698Z         BadRequestDetail: 
2026-02-07T00:56:32.6542065Z   
2026-02-07T00:56:32.6553469Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.77s)
```

  - PASS 3 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 3 seconds
- 2026-02-10 PASS 3 seconds
- 2026-02-11 PASS 3 seconds
- 2026-02-12
  - PASS 3 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.8254098Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-12T18:47:26.8255376Z     resource_test.go:307: Testing: Verifies a processor cannot transition from CREATED to STOPPED state
2026-02-12T18:47:26.8256592Z     resource_test.go:308: Creating execution project (1): test-acc-tf-p-5068547020591949038
2026-02-12T18:47:26.8257554Z     resource_test.go:308: 
2026-02-12T18:47:26.8259051Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.8262013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.8264965Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.8291375Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.8294528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-02-12T18:47:26.8297870Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:308
2026-02-12T18:47:26.8299218Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.8303827Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8306415Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-12T18:47:26.8310577Z         	Messages:   	Project creation failed: test-acc-tf-p-5068547020591949038, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8390047Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped (0.23s)
```

- 2026-02-13 PASS 3 seconds
- 2026-02-14 PASS 3 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 3 seconds
- 2026-02-17 PASS 3 seconds
- 2026-02-18 PASS 2 seconds
- 2026-02-19 PASS 3 seconds
- 2026-02-20 PASS 3 seconds
- 2026-02-21 PASS 3 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 3 seconds
- 2026-02-24 PASS 4 seconds
- 2026-02-25
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-02-26 PASS 4 seconds
- 2026-02-27
  - PASS 2 seconds
  - PASS 4 seconds
- 2026-02-28 PASS 4 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 3 seconds
- 2026-03-03 PASS 3 seconds
- 2026-03-04 PASS 2 seconds
- 2026-03-05 PASS 4 seconds
- 2026-03-06 PASS 4 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 3 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 3 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 2 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 2 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 3 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 2 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 2 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
