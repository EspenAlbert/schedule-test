# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 5)
Success rate: 86.49%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.01s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 0.07s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor | dev | flaky_500 | 0.08s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 0.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0994923Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-05T01:04:40.0995791Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-02-05T01:04:40.0997997Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-05T01:04:40.1084561Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-05T01:04:40.1085201Z     resource_test.go:308: Step 1/2 error: Error running apply: exit status 1
2026-02-05T01:04:40.1085592Z         
2026-02-05T01:04:40.1085888Z         Error: error creating resource
2026-02-05T01:04:40.1086170Z         
2026-02-05T01:04:40.1086619Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.1087447Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.1088143Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.1088494Z         
2026-02-05T01:04:40.1089279Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.1090168Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.1090875Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2026-02-05T01:04:40.1091579Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.1092271Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.1093135Z         [processor-started-to-created connection named sample_stream_solar does not
2026-02-05T01:04:40.1093781Z         exist. Check sp.listConnections() for available connections],
2026-02-05T01:04:40.1094204Z         BadRequestDetail: 
2026-02-05T01:04:40.1096739Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (1.15s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.599000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='27 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5990116Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-06T00:56:32.5990936Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-02-06T00:56:32.5992838Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-06T00:56:32.6073012Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-06T00:56:32.6073651Z     resource_test.go:308: Step 1/2 error: Error running apply: exit status 1
2026-02-06T00:56:32.6074044Z         
2026-02-06T00:56:32.6074518Z         Error: error creating resource
2026-02-06T00:56:32.6074803Z         
2026-02-06T00:56:32.6075186Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.6075919Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.6076611Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.6076959Z         
2026-02-06T00:56:32.6077709Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.6078550Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.6079229Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2026-02-06T00:56:32.6079916Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.6080821Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.6081540Z         [processor-started-to-created connection named sample_stream_solar does not
2026-02-06T00:56:32.6082297Z         exist. Check sp.listConnections() for available connections],
2026-02-06T00:56:32.6082736Z         BadRequestDetail: 
2026-02-06T00:56:32.6086055Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.72s)
```

- 2026-02-07
  - FAIL a moment

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6460391Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-07T00:56:32.6461097Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-02-07T00:56:32.6463128Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-07T00:56:32.6491156Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-07T00:56:32.6491882Z     resource_test.go:308: Step 1/2 error: Error running apply: exit status 1
2026-02-07T00:56:32.6492267Z         
2026-02-07T00:56:32.6492791Z         Error: error creating resource
2026-02-07T00:56:32.6493077Z         
2026-02-07T00:56:32.6493566Z           with mongodbatlas_stream_processor.processor,
2026-02-07T00:56:32.6494388Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-07T00:56:32.6495168Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-07T00:56:32.6495527Z         
2026-02-07T00:56:32.6496384Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor
2026-02-07T00:56:32.6497411Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-07T00:56:32.6498182Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2026-02-07T00:56:32.6498959Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-07T00:56:32.6499695Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-07T00:56:32.6500476Z         [processor-started-to-created connection named sample_stream_solar does not
2026-02-07T00:56:32.6501148Z         exist. Check sp.listConnections() for available connections],
2026-02-07T00:56:32.6501668Z         BadRequestDetail: 
2026-02-07T00:56:32.6513483Z   
2026-02-07T00:56:32.6554208Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.77s)
```

  - PASS 4 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 4 seconds
- 2026-02-10 PASS 4 seconds
- 2026-02-11 PASS 5 seconds
- 2026-02-12
  - PASS 4 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.8350170Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-12T18:47:26.8351468Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-02-12T18:47:26.8352755Z     resource_test.go:308: Creating execution project (1): test-acc-tf-p-9001042301183845072
2026-02-12T18:47:26.8353566Z     resource_test.go:308: 
2026-02-12T18:47:26.8355120Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.8358363Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.8361512Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.8364991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.8368739Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-02-12T18:47:26.8372076Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:308
2026-02-12T18:47:26.8373619Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.8378746Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8381437Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-12T18:47:26.8385678Z         	Messages:   	Project creation failed: test-acc-tf-p-9001042301183845072, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8392531Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.27s)
```

- 2026-02-13 PASS 5 seconds
- 2026-02-14 PASS 4 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 4 seconds
- 2026-02-17 PASS 4 seconds
- 2026-02-18 PASS 4 seconds
- 2026-02-19 PASS 4 seconds
- 2026-02-20 PASS 5 seconds
- 2026-02-21 PASS 4 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 5 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2415354Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-24T01:09:13.2416051Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-02-24T01:09:13.2417808Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-24T01:09:13.2428535Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-24T01:09:13.2429159Z     resource_test.go:308: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2429689Z         
2026-02-24T01:09:13.2429982Z         Error: error creating resource
2026-02-24T01:09:13.2430260Z         
2026-02-24T01:09:13.2430628Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2431351Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2432277Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2432637Z         
2026-02-24T01:09:13.2433119Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2433538Z         type
2026-02-24T01:09:13.2445577Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-24T01:09:13.2451993Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.86s)
```

- 2026-02-25
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-02-26 PASS 6 seconds
- 2026-02-27
  - PASS 4 seconds
  - PASS 5 seconds
- 2026-02-28 PASS 5 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 5 seconds
- 2026-03-03 PASS 6 seconds
- 2026-03-04 PASS 4 seconds
- 2026-03-05 PASS 5 seconds
- 2026-03-06 PASS 5 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 5 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 4 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 3 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 3 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 4 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 4 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 4 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
