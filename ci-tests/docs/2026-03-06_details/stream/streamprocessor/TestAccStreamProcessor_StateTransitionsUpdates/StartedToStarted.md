# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 5)
Success rate: 86.49%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 2.05s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 1.07s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor | dev |  | 1.08s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 4.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0714931Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-05T01:04:40.0715701Z     resource_test.go:236: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-02-05T01:04:40.0721035Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-05T01:04:40.0885149Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-05T01:04:40.0885738Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-05T01:04:40.0886117Z         
2026-02-05T01:04:40.0886397Z         Error: error creating resource
2026-02-05T01:04:40.0886805Z         
2026-02-05T01:04:40.0887178Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.0887904Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.0888594Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.0888935Z         
2026-02-05T01:04:40.0889685Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.0890519Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.0891199Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2026-02-05T01:04:40.0891886Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.0892554Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.0893426Z         [processor-started-to-started connection named sample_stream_solar does not
2026-02-05T01:04:40.0894167Z         exist. Check sp.listConnections() for available connections],
2026-02-05T01:04:40.0894621Z         BadRequestDetail: 
2026-02-05T01:04:40.0898883Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (2.53s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.567000+00:00-TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted',confidence=1.0,ts_when='27 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5677514Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-06T00:56:32.5678897Z     resource_test.go:236: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-02-06T00:56:32.5689030Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-06T00:56:32.5802532Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-06T00:56:32.5803126Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-06T00:56:32.5803503Z         
2026-02-06T00:56:32.5803786Z         Error: error creating resource
2026-02-06T00:56:32.5804061Z         
2026-02-06T00:56:32.5804427Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.5805150Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.5805833Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.5806174Z         
2026-02-06T00:56:32.5806909Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.5807743Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.5808419Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2026-02-06T00:56:32.5809096Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.5809758Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.5810660Z         [processor-started-to-started connection named sample_stream_solar does not
2026-02-06T00:56:32.5811331Z         exist. Check sp.listConnections() for available connections],
2026-02-06T00:56:32.5811760Z         BadRequestDetail: 
2026-02-06T00:56:32.5835094Z    test_terraform_path=/home/runner/work/_temp/4658afad-353d-4993-8600-6b48e8658f13/terraform test_step_number=1 test_working_directory=/tmp/plugintest2316737243
2026-02-06T00:56:32.5893925Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (1.66s)
```

- 2026-02-07
  - FAIL a second

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6174302Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-07T00:56:32.6175143Z     resource_test.go:236: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-02-07T00:56:32.6180619Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-07T00:56:32.6201905Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-07T00:56:32.6202529Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-07T00:56:32.6203177Z         
2026-02-07T00:56:32.6203491Z         Error: error creating resource
2026-02-07T00:56:32.6203867Z         
2026-02-07T00:56:32.6204245Z           with mongodbatlas_stream_processor.processor,
2026-02-07T00:56:32.6205085Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-07T00:56:32.6205880Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-07T00:56:32.6206339Z         
2026-02-07T00:56:32.6207202Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor
2026-02-07T00:56:32.6208157Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-07T00:56:32.6208938Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2026-02-07T00:56:32.6209719Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-07T00:56:32.6210509Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-07T00:56:32.6211301Z         [processor-started-to-started connection named sample_stream_solar does not
2026-02-07T00:56:32.6212026Z         exist. Check sp.listConnections() for available connections],
2026-02-07T00:56:32.6212526Z         BadRequestDetail: 
2026-02-07T00:56:32.6240313Z   
2026-02-07T00:56:32.6354960Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (1.79s)
```

  - PASS 9 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 7 seconds
- 2026-02-10 PASS 7 seconds
- 2026-02-11 PASS 9 seconds
- 2026-02-12
  - PASS 8 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.8042877Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-12T18:47:26.8044279Z     resource_test.go:236: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-02-12T18:47:26.8045723Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-7026235887597006766
2026-02-12T18:47:26.8046559Z     resource_test.go:237: 
2026-02-12T18:47:26.8048306Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.8051492Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.8054707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.8058094Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.8061815Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-02-12T18:47:26.8065255Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-02-12T18:47:26.8066685Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.8071975Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8074705Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-12T18:47:26.8079138Z         	Messages:   	Project creation failed: test-acc-tf-p-7026235887597006766, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8127872Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (0.23s)
```

- 2026-02-13 PASS 9 seconds
- 2026-02-14 PASS 8 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 8 seconds
- 2026-02-17 PASS 8 seconds
- 2026-02-18 PASS 7 seconds
- 2026-02-19 PASS 7 seconds
- 2026-02-20 PASS 10 seconds
- 2026-02-21 PASS 9 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 10 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2250241Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-24T01:09:13.2250967Z     resource_test.go:236: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-02-24T01:09:13.2253242Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-24T01:09:13.2327353Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-24T01:09:13.2327950Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2328337Z         
2026-02-24T01:09:13.2329161Z         Error: Error starting stream processor. You need to fix the processor and import the resource or delete it manually and re-run terraform apply.
2026-02-24T01:09:13.2329775Z         
2026-02-24T01:09:13.2330141Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2330864Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2331647Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2331992Z         
2026-02-24T01:09:13.2332468Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2333054Z         type
2026-02-24T01:09:13.2343418Z    test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped test_terraform_path=/home/runner/work/_temp/aaedc82b-f5f9-4ae8-bb98-eec7ab7049ef/terraform
2026-02-24T01:09:13.2353546Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (4.91s)
```

- 2026-02-25
  - PASS 11 seconds
  - PASS 7 seconds
- 2026-02-26 PASS 9 seconds
- 2026-02-27
  - PASS 8 seconds
  - PASS 10 seconds
- 2026-02-28 PASS 10 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 10 seconds
- 2026-03-03 PASS 8 seconds
- 2026-03-04 PASS 8 seconds
- 2026-03-05 PASS 9 seconds
- 2026-03-06 PASS 11 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 9 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 9 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 7 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 8 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 10 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 7 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 7 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
