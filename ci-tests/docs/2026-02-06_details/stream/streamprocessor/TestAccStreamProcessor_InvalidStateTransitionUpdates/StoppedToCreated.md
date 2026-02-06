# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 0.07s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 0.07s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 0.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 6 seconds
- 2026-01-09 PASS 5 seconds
- 2026-01-10 PASS 6 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 6 seconds
- 2026-01-13 PASS 5 seconds
- 2026-01-14 PASS 6 seconds
- 2026-01-15 PASS 6 seconds
- 2026-01-16 PASS 5 seconds
- 2026-01-17 PASS 6 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 6 seconds
- 2026-01-20 PASS 6 seconds
- 2026-01-21 PASS 6 seconds
- 2026-01-22 PASS 6 seconds
- 2026-01-23 PASS 5 seconds
- 2026-01-24 PASS 6 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 5 seconds
- 2026-01-27 PASS 6 seconds
- 2026-01-28 PASS 5 seconds
- 2026-01-29 PASS 5 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 5 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 6 seconds
- 2026-02-03
  - PASS 7 seconds
  - PASS 6 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5762928Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-04T00:54:41.5763582Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2026-02-04T00:54:41.5767577Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-02-04T00:54:41.5782746Z    test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated test_terraform_path=/home/runner/work/_temp/acf6f1af-5510-4765-8882-896c7ecb941f/terraform
2026-02-04T00:54:41.5783608Z     resource_test.go:308: Step 1/3 error: Error running apply: exit status 1
2026-02-04T00:54:41.5783977Z         
2026-02-04T00:54:41.5784253Z         Error: error creating resource
2026-02-04T00:54:41.5784535Z         
2026-02-04T00:54:41.5784887Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5785544Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5786173Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5786512Z         
2026-02-04T00:54:41.5787192Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5788052Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5788681Z         Detail: Streams Processor with this name (processor-stopped-to-created) had a
2026-02-04T00:54:41.5789320Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5789946Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5790593Z         [processor-stopped-to-created connection named sample_stream_solar does not
2026-02-04T00:54:41.5791185Z         exist. Check sp.listConnections() for available connections],
2026-02-04T00:54:41.5791576Z         BadRequestDetail: 
2026-02-04T00:54:41.5806856Z    test_step_number=1 test_name=TestAccStreamProcessor_InvalidStateTransitionUpdates/CreatedToStopped
2026-02-04T00:54:41.5862316Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (0.67s)
```

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
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.598000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated',confidence=1.0,ts_when='10 minutes ago')
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


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 6 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 5 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 5 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 6 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 5 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 7 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
