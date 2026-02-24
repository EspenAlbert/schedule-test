# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 34 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 1.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.06s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 2.01s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor | dev | flaky_500 | 1.08s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 2.08s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 6 seconds
- 2026-01-27 PASS 8 seconds
- 2026-01-28 PASS 7 seconds
- 2026-01-29 PASS 6 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 7 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 7 seconds
- 2026-02-03
  - PASS 12 seconds
  - PASS 12 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5515508Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-04T00:54:41.5516146Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-02-04T00:54:41.5520460Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-04T00:54:41.5562225Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-04T00:54:41.5562781Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-04T00:54:41.5563144Z         
2026-02-04T00:54:41.5563425Z         Error: error creating resource
2026-02-04T00:54:41.5563694Z         
2026-02-04T00:54:41.5564057Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5564714Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5565343Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5565672Z         
2026-02-04T00:54:41.5566361Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5567191Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5567891Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2026-02-04T00:54:41.5568536Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5569174Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5569830Z         [processor-created-to-started connection named sample_stream_solar does not
2026-02-04T00:54:41.5570411Z         exist. Check sp.listConnections() for available connections],
2026-02-04T00:54:41.5570811Z         BadRequestDetail: 
2026-02-04T00:54:41.5592568Z   
2026-02-04T00:54:41.5671679Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (1.71s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0711189Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-05T01:04:40.0711881Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-02-05T01:04:40.0722044Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-05T01:04:40.0803957Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-05T01:04:40.0804555Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-05T01:04:40.0804938Z         
2026-02-05T01:04:40.0805236Z         Error: error creating resource
2026-02-05T01:04:40.0805666Z         
2026-02-05T01:04:40.0806042Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.0806785Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.0807496Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.0807848Z         
2026-02-05T01:04:40.0808630Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.0809505Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.0810210Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2026-02-05T01:04:40.0810917Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.0811753Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.0812476Z         [processor-created-to-started connection named sample_stream_solar does not
2026-02-05T01:04:40.0813245Z         exist. Check sp.listConnections() for available connections],
2026-02-05T01:04:40.0813673Z         BadRequestDetail: 
2026-02-05T01:04:40.0830265Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated test_step_number=1
2026-02-05T01:04:40.0896922Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (1.59s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.567000+00:00-TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted',confidence=1.0,ts_when='17 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5671062Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-06T00:56:32.5672308Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-02-06T00:56:32.5692925Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-06T00:56:32.5722895Z    test_step_number=1 test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-06T00:56:32.5882206Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-06T00:56:32.5882794Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-06T00:56:32.5883170Z         
2026-02-06T00:56:32.5883454Z         Error: error creating resource
2026-02-06T00:56:32.5883734Z         
2026-02-06T00:56:32.5884103Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.5884818Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.5885504Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.5885860Z         
2026-02-06T00:56:32.5886595Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.5887434Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.5888105Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2026-02-06T00:56:32.5888790Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.5889460Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.5890156Z         [processor-created-to-started connection named sample_stream_solar does not
2026-02-06T00:56:32.5890973Z         exist. Check sp.listConnections() for available connections],
2026-02-06T00:56:32.5891400Z         BadRequestDetail: 
2026-02-06T00:56:32.5895888Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (2.10s)
```

- 2026-02-07
  - FAIL a second

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6169143Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-07T00:56:32.6170038Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-02-07T00:56:32.6182926Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-07T00:56:32.6201569Z   
2026-02-07T00:56:32.6240678Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-07T00:56:32.6241341Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-07T00:56:32.6241836Z         
2026-02-07T00:56:32.6242118Z         Error: error creating resource
2026-02-07T00:56:32.6242483Z         
2026-02-07T00:56:32.6243061Z           with mongodbatlas_stream_processor.processor,
2026-02-07T00:56:32.6243924Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-07T00:56:32.6244703Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-07T00:56:32.6245307Z         
2026-02-07T00:56:32.6246170Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor
2026-02-07T00:56:32.6247143Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-07T00:56:32.6247938Z         Detail: Streams Processor with this name (processor-created-to-started) had a
2026-02-07T00:56:32.6248722Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-07T00:56:32.6249500Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-07T00:56:32.6250305Z         [processor-created-to-started connection named sample_stream_solar does not
2026-02-07T00:56:32.6251043Z         exist. Check sp.listConnections() for available connections],
2026-02-07T00:56:32.6251490Z         BadRequestDetail: 
2026-02-07T00:56:32.6263488Z   
2026-02-07T00:56:32.6355630Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (1.80s)
```

  - PASS 7 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 7 seconds
- 2026-02-10 PASS 7 seconds
- 2026-02-11 PASS 7 seconds
- 2026-02-12
  - PASS 6 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.7966218Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-12T18:47:26.7967675Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-02-12T18:47:26.7969001Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-5339830834148986470
2026-02-12T18:47:26.7969845Z     resource_test.go:237: 
2026-02-12T18:47:26.7971415Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.7974629Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.7977799Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.7980842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.7984222Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-02-12T18:47:26.7987803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-02-12T18:47:26.7989161Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.7994030Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7996765Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-12T18:47:26.8001590Z         	Messages:   	Project creation failed: test-acc-tf-p-5339830834148986470, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8125288Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (0.23s)
```

- 2026-02-13 PASS 7 seconds
- 2026-02-14 PASS 6 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 6 seconds
- 2026-02-17 PASS 6 seconds
- 2026-02-18 PASS 6 seconds
- 2026-02-19 PASS 7 seconds
- 2026-02-20 PASS 7 seconds
- 2026-02-21 PASS 7 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 7 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2246766Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-24T01:09:13.2247439Z     resource_test.go:236: Testing: Verifies a processor can transition from CREATED to STARTED state
2026-02-24T01:09:13.2252742Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-24T01:09:13.2311261Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted
2026-02-24T01:09:13.2312077Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2312461Z         
2026-02-24T01:09:13.2312852Z         Error: error creating resource
2026-02-24T01:09:13.2313126Z         
2026-02-24T01:09:13.2313491Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2314210Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2315080Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2315430Z         
2026-02-24T01:09:13.2315912Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2316325Z         type
2026-02-24T01:09:13.2327014Z   
2026-02-24T01:09:13.2351359Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted (2.77s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 6 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 7 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 7 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 7 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 6 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 7 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
