# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 1.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.06s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 2.01s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 7 seconds
- 2026-01-09 PASS 6 seconds
- 2026-01-10 PASS 7 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 8 seconds
- 2026-01-13 PASS 7 seconds
- 2026-01-14 PASS 7 seconds
- 2026-01-15 PASS 7 seconds
- 2026-01-16 PASS 6 seconds
- 2026-01-17 PASS 6 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 7 seconds
- 2026-01-20 PASS 7 seconds
- 2026-01-21 PASS 7 seconds
- 2026-01-22 PASS 7 seconds
- 2026-01-23 PASS 8 seconds
- 2026-01-24 PASS 7 seconds
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
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.567000+00:00-TestAccStreamProcessor_StateTransitionsUpdates/CreatedToStarted',confidence=1.0,ts_when='10 minutes ago')
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


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 6 seconds
  - PASS 6 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 6 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 6 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 8 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 6 seconds
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
