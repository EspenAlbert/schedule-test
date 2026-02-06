# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev | flaky_500 | 2.01s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 2.05s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 1.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 9 seconds
- 2026-01-09 PASS 8 seconds
- 2026-01-10 PASS 8 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 10 seconds
- 2026-01-13 PASS 9 seconds
- 2026-01-14 PASS 8 seconds
- 2026-01-15 PASS 8 seconds
- 2026-01-16 PASS 8 seconds
- 2026-01-17 PASS 7 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 9 seconds
- 2026-01-20 PASS 8 seconds
- 2026-01-21 PASS 8 seconds
- 2026-01-22 PASS 8 seconds
- 2026-01-23 PASS 7 seconds
- 2026-01-24 PASS 8 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 7 seconds
- 2026-01-27 PASS 9 seconds
- 2026-01-28 PASS 9 seconds
- 2026-01-29 PASS 7 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 8 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 9 seconds
- 2026-02-03
  - PASS 14 seconds
  - PASS 14 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5508308Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-04T00:54:41.5509027Z     resource_test.go:236: Testing: Verifies a processor in STARTED state can be updated while remaining in STARTED state
2026-02-04T00:54:41.5519004Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-04T00:54:41.5660484Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted
2026-02-04T00:54:41.5661094Z     resource_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-02-04T00:54:41.5661469Z         
2026-02-04T00:54:41.5661759Z         Error: error creating resource
2026-02-04T00:54:41.5662102Z         
2026-02-04T00:54:41.5662458Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5663190Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5663914Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5664291Z         
2026-02-04T00:54:41.5665008Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5665855Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5666578Z         Detail: Streams Processor with this name (processor-started-to-started) had a
2026-02-04T00:54:41.5667280Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5668043Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5668750Z         [processor-started-to-started connection named sample_stream_solar does not
2026-02-04T00:54:41.5669471Z         exist. Check sp.listConnections() for available connections],
2026-02-04T00:54:41.5669862Z         BadRequestDetail: 
2026-02-04T00:54:41.5674487Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted (2.06s)
```

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
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.567000+00:00-TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted',confidence=1.0,ts_when='10 minutes ago')
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


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 9 seconds
  - PASS 7 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 8 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 8 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 7 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 7 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 7 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 9 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
