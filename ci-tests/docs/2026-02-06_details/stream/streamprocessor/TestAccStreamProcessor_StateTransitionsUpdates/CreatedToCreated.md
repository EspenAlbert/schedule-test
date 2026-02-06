# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 1.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.06s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 1.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 5 seconds
- 2026-01-09 PASS 6 seconds
- 2026-01-10 PASS 5 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 6 seconds
- 2026-01-13 PASS 6 seconds
- 2026-01-14 PASS 6 seconds
- 2026-01-15 PASS 5 seconds
- 2026-01-16 PASS 4 seconds
- 2026-01-17 PASS 4 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 6 seconds
- 2026-01-20 PASS 5 seconds
- 2026-01-21 PASS 5 seconds
- 2026-01-22 PASS 5 seconds
- 2026-01-23 PASS 5 seconds
- 2026-01-24 PASS 6 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 5 seconds
- 2026-01-27 PASS 5 seconds
- 2026-01-28 PASS 6 seconds
- 2026-01-29 PASS 5 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 6 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 5 seconds
- 2026-02-03
  - PASS 12 seconds
  - PASS 9 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5513634Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-04T00:54:41.5514315Z     resource_test.go:236: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2026-02-04T00:54:41.5519481Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-04T00:54:41.5592896Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2026-02-04T00:54:41.5593481Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-04T00:54:41.5593850Z         
2026-02-04T00:54:41.5594130Z         Error: error creating resource
2026-02-04T00:54:41.5594400Z         
2026-02-04T00:54:41.5594759Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5595420Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5596062Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5596387Z         
2026-02-04T00:54:41.5597069Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5597976Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5598623Z         Detail: Streams Processor with this name (processor-created-to-created) had a
2026-02-04T00:54:41.5599256Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5599895Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5600567Z         [processor-created-to-created connection named sample_stream_solar does not
2026-02-04T00:54:41.5601158Z         exist. Check sp.listConnections() for available connections],
2026-02-04T00:54:41.5601557Z         BadRequestDetail: 
2026-02-04T00:54:41.5616569Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted test_working_directory=/tmp/plugintest3358477580 test_step_number=1
2026-02-04T00:54:41.5672385Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (1.71s)
```

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
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.566000+00:00-TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated',confidence=1.0,ts_when='10 minutes ago')
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


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 6 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 4 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 4 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 5 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 4 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 6 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
