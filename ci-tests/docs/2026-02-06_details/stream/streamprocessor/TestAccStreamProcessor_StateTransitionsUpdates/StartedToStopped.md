# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 1.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.05s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 1.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 7 seconds
- 2026-01-09 PASS 8 seconds
- 2026-01-10 PASS 6 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 9 seconds
- 2026-01-13 PASS 6 seconds
- 2026-01-14 PASS 6 seconds
- 2026-01-15 PASS 7 seconds
- 2026-01-16 PASS 7 seconds
- 2026-01-17 PASS 7 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 7 seconds
- 2026-01-20 PASS 8 seconds
- 2026-01-21 PASS 9 seconds
- 2026-01-22 PASS 8 seconds
- 2026-01-23 PASS 6 seconds
- 2026-01-24 PASS 6 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 7 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 7 seconds
- 2026-01-29 PASS 7 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 9 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 7 seconds
- 2026-02-03
  - PASS 14 seconds
  - PASS 12 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5517182Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-04T00:54:41.5517963Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-02-04T00:54:41.5519959Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-04T00:54:41.5635694Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-04T00:54:41.5636246Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-04T00:54:41.5636603Z         
2026-02-04T00:54:41.5636889Z         Error: error creating resource
2026-02-04T00:54:41.5637160Z         
2026-02-04T00:54:41.5637639Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5638347Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5638993Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5639332Z         
2026-02-04T00:54:41.5640023Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5640803Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5641452Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2026-02-04T00:54:41.5642093Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5642711Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5643360Z         [processor-started-to-stopped connection named sample_stream_solar does not
2026-02-04T00:54:41.5643936Z         exist. Check sp.listConnections() for available connections],
2026-02-04T00:54:41.5644331Z         BadRequestDetail: 
2026-02-04T00:54:41.5659829Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-04T00:54:41.5673107Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (1.71s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0713165Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-05T01:04:40.0713842Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-02-05T01:04:40.0721534Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-05T01:04:40.0744056Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-05T01:04:40.0744798Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-05T01:04:40.0745192Z         
2026-02-05T01:04:40.0745602Z         Error: error creating resource
2026-02-05T01:04:40.0745893Z         
2026-02-05T01:04:40.0746366Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.0747245Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.0748058Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.0748417Z         
2026-02-05T01:04:40.0749346Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.0750348Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.0751163Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2026-02-05T01:04:40.0751989Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.0752803Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.0753821Z         [processor-started-to-stopped connection named sample_stream_solar does not
2026-02-05T01:04:40.0754524Z         exist. Check sp.listConnections() for available connections],
2026-02-05T01:04:40.0755075Z         BadRequestDetail: 
2026-02-05T01:04:40.0775495Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStopped
2026-02-05T01:04:40.0895594Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (1.52s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.567000+00:00-TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped',confidence=1.0,ts_when='10 minutes ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5674289Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-06T00:56:32.5675510Z     resource_test.go:236: Testing: Verifies a processor can transition from STARTED to STOPPED state
2026-02-06T00:56:32.5689957Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-06T00:56:32.5855675Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2026-02-06T00:56:32.5856261Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-06T00:56:32.5856638Z         
2026-02-06T00:56:32.5856914Z         Error: error creating resource
2026-02-06T00:56:32.5857185Z         
2026-02-06T00:56:32.5857546Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.5858265Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.5858941Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.5859285Z         
2026-02-06T00:56:32.5860012Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.5860942Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.5861618Z         Detail: Streams Processor with this name (processor-started-to-stopped) had a
2026-02-06T00:56:32.5862302Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.5862969Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.5863658Z         [processor-started-to-stopped connection named sample_stream_solar does not
2026-02-06T00:56:32.5864282Z         exist. Check sp.listConnections() for available connections],
2026-02-06T00:56:32.5864688Z         BadRequestDetail: 
2026-02-06T00:56:32.5881108Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted test_terraform_path=/home/runner/work/_temp/4658afad-353d-4993-8600-6b48e8658f13/terraform test_working_directory=/tmp/plugintest910092811 test_step_number=1
2026-02-06T00:56:32.5894585Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (1.71s)
```


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 9 seconds
  - PASS 8 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 8 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 7 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 5 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 9 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 6 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 8 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
