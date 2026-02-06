# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 1.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 2.01s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 1.06s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 9 seconds
- 2026-01-09 PASS 9 seconds
- 2026-01-10 PASS 11 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 11 seconds
- 2026-01-13 PASS 9 seconds
- 2026-01-14 PASS 10 seconds
- 2026-01-15 PASS 11 seconds
- 2026-01-16 PASS 9 seconds
- 2026-01-17 PASS 10 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 9 seconds
- 2026-01-20 PASS 9 seconds
- 2026-01-21 PASS 9 seconds
- 2026-01-22 PASS 9 seconds
- 2026-01-23 PASS 10 seconds
- 2026-01-24 PASS 10 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 8 seconds
- 2026-01-27 PASS 10 seconds
- 2026-01-28 PASS 8 seconds
- 2026-01-29 PASS 9 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 10 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 9 seconds
- 2026-02-03
  - PASS 17 seconds
  - PASS 17 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5510166Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-04T00:54:41.5510812Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-02-04T00:54:41.5521509Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-04T00:54:41.5542857Z    test_terraform_path=/home/runner/work/_temp/acf6f1af-5510-4765-8882-896c7ecb941f/terraform test_step_number=1 test_working_directory=/tmp/plugintest3090082585
2026-02-04T00:54:41.5617299Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-04T00:54:41.5617990Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-04T00:54:41.5618369Z         
2026-02-04T00:54:41.5618649Z         Error: error creating resource
2026-02-04T00:54:41.5618936Z         
2026-02-04T00:54:41.5619291Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5619953Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5620590Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5620941Z         
2026-02-04T00:54:41.5621628Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5622389Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5623022Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2026-02-04T00:54:41.5623648Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5624277Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5624917Z         [processor-stopped-to-started connection named sample_stream_solar does not
2026-02-04T00:54:41.5625501Z         exist. Check sp.listConnections() for available connections],
2026-02-04T00:54:41.5625891Z         BadRequestDetail: 
2026-02-04T00:54:41.5635302Z   
2026-02-04T00:54:41.5673814Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (1.72s)
```

- 2026-02-05

### Error 2026-02-05T01:04:40+00:00
```
2026-02-05T01:04:40.0716865Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-05T01:04:40.0717526Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-02-05T01:04:40.0723443Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-05T01:04:40.0743575Z   
2026-02-05T01:04:40.0857997Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-05T01:04:40.0858816Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-05T01:04:40.0859199Z         
2026-02-05T01:04:40.0859480Z         Error: error creating resource
2026-02-05T01:04:40.0859752Z         
2026-02-05T01:04:40.0860121Z           with mongodbatlas_stream_processor.processor,
2026-02-05T01:04:40.0860849Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-05T01:04:40.0861672Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-05T01:04:40.0862022Z         
2026-02-05T01:04:40.0862769Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor
2026-02-05T01:04:40.0863741Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-05T01:04:40.0864420Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2026-02-05T01:04:40.0865105Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-05T01:04:40.0865771Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-05T01:04:40.0866475Z         [processor-stopped-to-started connection named sample_stream_solar does not
2026-02-05T01:04:40.0867108Z         exist. Check sp.listConnections() for available connections],
2026-02-05T01:04:40.0867513Z         BadRequestDetail: 
2026-02-05T01:04:40.0884819Z   
2026-02-05T01:04:40.0898228Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (2.06s)
```

- 2026-02-06

### Error 2026-02-06T00:56:32+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.568000+00:00-TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted',confidence=1.0,ts_when='10 minutes ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2026-02-06T00:56:32.5681156Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-06T00:56:32.5682572Z     resource_test.go:236: Testing: Verifies a processor can transition from STOPPED to STARTED state
2026-02-06T00:56:32.5692001Z === CONT  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-06T00:56:32.5772191Z === NAME  TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted
2026-02-06T00:56:32.5772964Z     resource_test.go:237: Step 1/3 error: Error running apply: exit status 1
2026-02-06T00:56:32.5773450Z         
2026-02-06T00:56:32.5773791Z         Error: error creating resource
2026-02-06T00:56:32.5774133Z         
2026-02-06T00:56:32.5774683Z           with mongodbatlas_stream_processor.processor,
2026-02-06T00:56:32.5775700Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-06T00:56:32.5776538Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-06T00:56:32.5776966Z         
2026-02-06T00:56:32.5777894Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6985378713125e9acd98a203/streams/test-acc-tf-s-69697366263959401/processor
2026-02-06T00:56:32.5778952Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-06T00:56:32.5779796Z         Detail: Streams Processor with this name (processor-stopped-to-started) had a
2026-02-06T00:56:32.5780842Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-06T00:56:32.5781714Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-06T00:56:32.5782587Z         [processor-stopped-to-started connection named sample_stream_solar does not
2026-02-06T00:56:32.5783367Z         exist. Check sp.listConnections() for available connections],
2026-02-06T00:56:32.5783869Z         BadRequestDetail: 
2026-02-06T00:56:32.5801679Z    test_name=TestAccStreamProcessor_StateTransitionsUpdates/StartedToStarted test_terraform_path=/home/runner/work/_temp/4658afad-353d-4993-8600-6b48e8658f13/terraform
2026-02-06T00:56:32.5893241Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StoppedToStarted (1.64s)
```


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 9 seconds
  - PASS 8 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 9 seconds
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
- 2026-01-22 PASS 9 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 10 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 8 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 11 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
