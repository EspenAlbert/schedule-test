# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 5)
Success rate: 86.49%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.06s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 1.07s
[2026-02-07 00:56](#error-2026-02-07t0056320000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor | dev |  | 1.09s
[2026-02-12 18:47](#error-2026-02-12t1847260000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 2.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0709018Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-05T01:04:40.0709970Z     resource_test.go:236: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-02-05T01:04:40.0720527Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-05T01:04:40.0830901Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-05T01:04:40.0831492Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-05T01:04:40.0832056Z         
2026-02-05T01:04:40.0832336Z         Error: error creating resource
2026-02-05T01:04:40.0832613Z         
2026-02-05T01:04:40.0833076Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.0833805Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.0834482Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.0834827Z         
2026-02-05T01:04:40.0835574Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.0836567Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.0837252Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2026-02-05T01:04:40.0837930Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.0838602Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.0839293Z         [processor-created-to-created connection named sample_stream_solar does not
2026-02-05T01:04:40.0839925Z         exist. Check sp.listConnections() for available connections],
2026-02-05T01:04:40.0840337Z         BadRequestDetail: 
2026-02-05T01:04:40.0857666Z   
2026-02-05T01:04:40.0897576Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (1.62s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.566000+00:00-TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated',confidence=1.0,ts_when='27 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5667122Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-06T00:56:32.5668536Z     resource_test.go:236: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-02-06T00:56:32.5688109Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-06T00:56:32.5835918Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-06T00:56:32.5836530Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-06T00:56:32.5836916Z         
2026-02-06T00:56:32.5837207Z         Error: error creating resource
2026-02-06T00:56:32.5837478Z         
2026-02-06T00:56:32.5837851Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.5838574Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.5839252Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.5839591Z         
2026-02-06T00:56:32.5840330Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.5841261Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.5841941Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2026-02-06T00:56:32.5842623Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.5843420Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.5844119Z         [processor-created-to-created connection named sample_stream_solar does not
2026-02-06T00:56:32.5844739Z         exist. Check sp.listConnections() for available connections],
2026-02-06T00:56:32.5845156Z         BadRequestDetail: 
2026-02-06T00:56:32.5854557Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped test_terraform_path=/home/runner/work/_temp/4658afad-353d-4993-8600-6b48e8658f13/terraform test_working_directory=/tmp/plugintest1483777541 test_step_number=1
2026-02-06T00:56:32.5895234Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (1.71s)
```

- 2026-02-07
  - FAIL a second

### Error 2026-02-07T00:56:32+00:00
```
2026-02-07T00:56:32.6165639Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-07T00:56:32.6166833Z     resource_test.go:236: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-02-07T00:56:32.6180104Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-07T00:56:32.6317760Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-07T00:56:32.6318350Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-07T00:56:32.6318737Z         
2026-02-07T00:56:32.6319011Z         Error: error creating resource
2026-02-07T00:56:32.6319284Z         
2026-02-07T00:56:32.6319646Z           with mongodbatlas_stream_processor.processor,
2026-02-07T00:56:32.6320360Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-07T00:56:32.6321032Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-07T00:56:32.6321380Z         
2026-02-07T00:56:32.6322125Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6986890ede0bdc0de28a3d42/streams/test-acc-tf-s-1370710812024176273/processor
2026-02-07T00:56:32.6323277Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-07T00:56:32.6323984Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2026-02-07T00:56:32.6324656Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-07T00:56:32.6325323Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-07T00:56:32.6326009Z         [processor-created-to-created connection named sample_stream_solar does not
2026-02-07T00:56:32.6326633Z         exist. Check sp.listConnections() for available connections],
2026-02-07T00:56:32.6327048Z         BadRequestDetail: 
2026-02-07T00:56:32.6344256Z   
2026-02-07T00:56:32.6357682Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (1.94s)
```

  - PASS 6 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 6 seconds
- 2026-02-10 PASS 5 seconds
- 2026-02-11 PASS 6 seconds
- 2026-02-12
  - PASS 5 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:26+00:00
```
2026-02-12T18:47:26.7927257Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-12T18:47:26.7928811Z     resource_test.go:236: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-02-12T18:47:26.7930199Z     resource_test.go:237: Creating execution project (1): test-acc-tf-p-9088673201145616866
2026-02-12T18:47:26.7931043Z     resource_test.go:237: 
2026-02-12T18:47:26.7932871Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:26.7936057Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:26.7939426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:26.7942855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:26.7946184Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-02-12T18:47:26.7949758Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:237
2026-02-12T18:47:26.7951214Z         	Error:      	Received unexpected error:
2026-02-12T18:47:26.7956187Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.7959123Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-12T18:47:26.7963348Z         	Messages:   	Project creation failed: test-acc-tf-p-9088673201145616866, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:26.8124079Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (0.23s)
```

- 2026-02-13 PASS 6 seconds
- 2026-02-14 PASS 5 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 7 seconds
- 2026-02-17 PASS 7 seconds
- 2026-02-18 PASS 4 seconds
- 2026-02-19 PASS 5 seconds
- 2026-02-20 PASS 6 seconds
- 2026-02-21 PASS 5 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 6 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2244891Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-24T01:09:13.2245626Z     resource_test.go:236: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-02-24T01:09:13.2254234Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-24T01:09:13.2265073Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-24T01:09:13.2265682Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2266065Z         
2026-02-24T01:09:13.2266346Z         Error: error creating resource
2026-02-24T01:09:13.2266620Z         
2026-02-24T01:09:13.2266995Z           with mongodbatlas_stream_processor.processor,
2026-02-24T01:09:13.2267722Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-24T01:09:13.2268414Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-24T01:09:13.2268766Z         
2026-02-24T01:09:13.2269250Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2269678Z         type
2026-02-24T01:09:13.2286546Z   
2026-02-24T01:09:13.2350699Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (2.68s)
```

- 2026-02-25
  - PASS 6 seconds
  - PASS 4 seconds
- 2026-02-26 PASS 6 seconds
- 2026-02-27
  - PASS 7 seconds
  - PASS 6 seconds
- 2026-02-28 PASS 6 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 6 seconds
- 2026-03-03 PASS 6 seconds
- 2026-03-04 PASS 4 seconds
- 2026-03-05 PASS 7 seconds
- 2026-03-06 PASS 6 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 6 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 5 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 4 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 4 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 5 seconds
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
