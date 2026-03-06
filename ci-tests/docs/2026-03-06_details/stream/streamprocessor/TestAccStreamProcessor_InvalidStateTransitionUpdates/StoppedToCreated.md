# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 5)
Success rate: 86.49%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 0.07s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 0.07s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor | dev |  | 1.02s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 9.10s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0992261Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-05T01:04:40.0993231Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2026-02-05T01:04:40.0998707Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-05T01:04:40.1019708Z    test_working_directory=/tmp/plugintest2496537993 test_step_number=1
2026-02-05T01:04:40.1056256Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-05T01:04:40.1057031Z     resource_test.go:308: Step 1/3 error: Error running apply: exit status 1
2026-02-05T01:04:40.1057669Z         
2026-02-05T01:04:40.1057998Z         Error: error creating resource
2026-02-05T01:04:40.1058299Z         
2026-02-05T01:04:40.1058825Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.1059591Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.1060438Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.1060809Z         
2026-02-05T01:04:40.1061590Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.1062611Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.1063399Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2026-02-05T01:04:40.1064090Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.1064780Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.1065475Z         [processor-stopped-to-created connection named sample_stream_solar does not
2026-02-05T01:04:40.1066228Z         exist. Check sp.listConnections() for available connections],
2026-02-05T01:04:40.1066664Z         BadRequestDetail: 
2026-02-05T01:04:40.1084206Z   
2026-02-05T01:04:40.1096005Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (0.69s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.598000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated',confidence=1.0,ts_when='27 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5988200Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-06T00:56:32.5988924Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2026-02-06T00:56:32.5993405Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-06T00:56:32.6010191Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-06T00:56:32.6037924Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-06T00:56:32.6038536Z     resource_test.go:308: Step 1/3 error: Error running apply: exit status 1
2026-02-06T00:56:32.6038918Z         
2026-02-06T00:56:32.6039199Z         Error: error creating resource
2026-02-06T00:56:32.6039476Z         
2026-02-06T00:56:32.6039841Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.6040672Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.6041487Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.6041845Z         
2026-02-06T00:56:32.6042599Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.6043486Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.6044169Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2026-02-06T00:56:32.6044849Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.6045519Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.6046217Z         [processor-stopped-to-created connection named sample_stream_solar does not
2026-02-06T00:56:32.6046847Z         exist. Check sp.listConnections() for available connections],
2026-02-06T00:56:32.6047259Z         BadRequestDetail: 
2026-02-06T00:56:32.6072651Z   
2026-02-06T00:56:32.6085313Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (0.70s)
```

- 2026-02-07
  - FAIL a second

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6458503Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-07T00:56:32.6459210Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2026-02-07T00:56:32.6463679Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-07T00:56:32.6490662Z    test_step_number=1
2026-02-07T00:56:32.6542421Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-07T00:56:32.6543505Z     resource_test.go:308: Step 1/3 error: Error running apply: exit status 1
2026-02-07T00:56:32.6543898Z         
2026-02-07T00:56:32.6544308Z         Error: error creating resource
2026-02-07T00:56:32.6544593Z         
2026-02-07T00:56:32.6544951Z           with mongodbatlas_stream_processor.processor,
2026-02-07T00:56:32.6545666Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-07T00:56:32.6546337Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-07T00:56:32.6546682Z         
2026-02-07T00:56:32.6547416Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor
2026-02-07T00:56:32.6548252Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-07T00:56:32.6548932Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2026-02-07T00:56:32.6549610Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-07T00:56:32.6550314Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-07T00:56:32.6551008Z         [processor-stopped-to-created connection named sample_stream_solar does not
2026-02-07T00:56:32.6551770Z         exist. Check sp.listConnections() for available connections],
2026-02-07T00:56:32.6552180Z         BadRequestDetail: 
2026-02-07T00:56:32.6554916Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (1.25s)
```

  - PASS 5 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 5 seconds
- 2026-02-10 PASS 6 seconds
- 2026-02-11 PASS 7 seconds
- 2026-02-12
  - PASS 6 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.8313334Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-12T18:47:26.8314593Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2026-02-12T18:47:26.8315840Z     resource_test.go:308: Creating execution project (1): test-acc-tf-p-6252877679721648536
2026-02-12T18:47:26.8316652Z     resource_test.go:308: 
2026-02-12T18:47:26.8318338Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.8321384Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.8324399Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.8327910Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.8330992Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-02-12T18:47:26.8334347Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:308
2026-02-12T18:47:26.8335635Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.8340447Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8343072Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-12T18:47:26.8347174Z         	Messages:   	Project creation failed: test-acc-tf-p-6252877679721648536, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8391292Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (0.23s)
```

- 2026-02-13 PASS 6 seconds
- 2026-02-14 PASS 5 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 5 seconds
- 2026-02-17 PASS 6 seconds
- 2026-02-18 PASS 5 seconds
- 2026-02-19 PASS 6 seconds
- 2026-02-20 PASS 7 seconds
- 2026-02-21 PASS 6 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 7 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2413508Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-24T01:09:13.2414200Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2026-02-24T01:09:13.2418361Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-24T01:09:13.2428180Z   
2026-02-24T01:09:13.2446172Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-24T01:09:13.2446788Z     resource_test.go:308: Step 2/3 error: Error running apply: exit status 1
2026-02-24T01:09:13.2447170Z         
2026-02-24T01:09:13.2447482Z         Error: Error stopping stream processor
2026-02-24T01:09:13.2447799Z         
2026-02-24T01:09:13.2448174Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2448911Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2449599Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2449946Z         
2026-02-24T01:09:13.2450425Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2450843Z         type
2026-02-24T01:09:13.2453429Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (9.97s)
```

- 2026-02-25
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-02-26 PASS 7 seconds
- 2026-02-27
  - PASS 5 seconds
  - PASS 9 seconds
- 2026-02-28 PASS 8 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 6 seconds
- 2026-03-03 PASS 6 seconds
- 2026-03-04 PASS 6 seconds
- 2026-03-05 PASS 6 seconds
- 2026-03-06 PASS 7 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 7 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 6 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 5 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 5 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 6 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 5 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 5 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
