# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
# Found 34 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 3)
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-04 00:54](#error-2026-02-04t0054410000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor | dev |  | 1.02s
[2026-02-05 01:04](#error-2026-02-05t0104400000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6983e6a2304923ebd1858df5/streams/test-acc-tf-s-6349336018238537323/processor | dev |  | 1.01s
[2026-02-06 00:56](#error-2026-02-06t0056320000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 0.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 4 seconds
- 2026-01-09 PASS 4 seconds
- 2026-01-10 PASS 5 seconds
- 2026-01-11: MISSING
- 2026-01-12 PASS 5 seconds
- 2026-01-13 PASS 4 seconds
- 2026-01-14 PASS 4 seconds
- 2026-01-15 PASS 4 seconds
- 2026-01-16 PASS 4 seconds
- 2026-01-17 PASS 4 seconds
- 2026-01-18: MISSING
- 2026-01-19 PASS 4 seconds
- 2026-01-20 PASS 4 seconds
- 2026-01-21 PASS 4 seconds
- 2026-01-22 PASS 4 seconds
- 2026-01-23 PASS 4 seconds
- 2026-01-24 PASS 5 seconds
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 seconds
- 2026-01-27 PASS 4 seconds
- 2026-01-28 PASS 4 seconds
- 2026-01-29 PASS 4 seconds
- 2026-01-30: MISSING
- 2026-01-31 PASS 4 seconds
- 2026-02-01: MISSING
- 2026-02-02 PASS 4 seconds
- 2026-02-03
  - PASS 4 seconds
  - PASS 4 seconds
- 2026-02-04

### Error 2026-02-04T00:54:41+00:00
```
2026-02-04T00:54:41.5764693Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-04T00:54:41.5765355Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-02-04T00:54:41.5767000Z === CONT  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-04T00:54:41.5852609Z === NAME  TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-02-04T00:54:41.5853188Z     resource_test.go:308: Step 1/2 error: Error running apply: exit status 1
2026-02-04T00:54:41.5853582Z         
2026-02-04T00:54:41.5853862Z         Error: error creating resource
2026-02-04T00:54:41.5854145Z         
2026-02-04T00:54:41.5854509Z           with mongodbatlas_stream_processor.processor,
2026-02-04T00:54:41.5855187Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2026-02-04T00:54:41.5855833Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2026-02-04T00:54:41.5856163Z         
2026-02-04T00:54:41.5856845Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7985/streams/test-acc-tf-s-8457605324373156284/processor
2026-02-04T00:54:41.5857667Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-02-04T00:54:41.5858300Z         Detail: Streams Processor with this name (processor-started-to-created) had a
2026-02-04T00:54:41.5858928Z         problem occur: connection named sample_stream_solar does not exist. Check
2026-02-04T00:54:41.5859644Z         sp.listConnections() for available connections. Reason: Bad Request. Params:
2026-02-04T00:54:41.5860298Z         [processor-started-to-created connection named sample_stream_solar does not
2026-02-04T00:54:41.5860908Z         exist. Check sp.listConnections() for available connections],
2026-02-04T00:54:41.5861311Z         BadRequestDetail: 
2026-02-04T00:54:41.5863674Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (1.18s)
```

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
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2026-02-06T00:56:32.599000+00:00-TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated',confidence=1.0,ts_when='10 minutes ago')
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


## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08
  - PASS 4 seconds
  - PASS 4 seconds
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 4 seconds
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 3 seconds
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 seconds
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 4 seconds
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 3 seconds
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 5 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
