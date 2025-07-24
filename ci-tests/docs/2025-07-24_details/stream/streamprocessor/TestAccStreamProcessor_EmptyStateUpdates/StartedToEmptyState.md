# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 34) FAIL(x 7)
Success rate: 82.93%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-03 00:46](#error-2025-07-03t0046390000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor | dev | flaky_400 | 31.02s
[2025-07-06 00:48](#error-2025-07-06t0048430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c40b690ae45e168bd561/streams | qa | flaky_500 | 30.06s
[2025-07-07 00:48](#error-2025-07-07t0048050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-7368587854316558678--STARTED-/processor | dev |  | 31.02s
[2025-07-10 13:24](#error-2025-07-10t1324520000) | API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor/{processorName} | qa | flaky_400 | 39.00s
[2025-07-11 02:31](#error-2025-07-11t0231570000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68705b004f431f68780bdce6/streams/test-acc-tf-7215639486041097570--STARTED-/processor | dev |  | 31.04s
[2025-07-14 04:02](#error-2025-07-14t0402140000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/68744fdf52cba864e5f10a3b/streams/test-acc-tf-6912053252840467724--STARTED-/processor | dev |  | 31.02s
[2025-07-20 00:53](#error-2025-07-20t0053030000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor | qa |  | 0.05s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 11 seconds
  - PASS 11 seconds
- 2025-06-26
  - PASS 11 seconds
  - PASS 12 seconds
- 2025-06-27 PASS 11 seconds
- 2025-06-28 PASS 14 seconds
- 2025-06-29 PASS 12 seconds
- 2025-06-30 PASS 13 seconds
- 2025-07-01
  - PASS 14 seconds
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 14 seconds
  - PASS 11 seconds
  - PASS 13 seconds
- 2025-07-02 PASS 11 seconds
- 2025-07-03

### Error 2025-07-03T00:46:39+00:00
GoTestErrorClassification(error_class='flaky_400',author='similar',run_id='2025-07-03T00:46:39.957000+00:00-TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState',confidence=1.0,ts_when='21 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor
```
2025-07-03T00:46:39.9573350Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-03T00:46:39.9574168Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-07-03T00:46:39.9578595Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-03T00:46:39.9595358Z   
2025-07-03T00:46:39.9595757Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-03T00:46:39.9596120Z         
2025-07-03T00:46:39.9612804Z         Error: error creating resource
2025-07-03T00:46:39.9613264Z         
2025-07-03T00:46:39.9613862Z           with mongodbatlas_stream_processor.processor,
2025-07-03T00:46:39.9614747Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-03T00:46:39.9615608Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-03T00:46:39.9615963Z         
2025-07-03T00:46:39.9616962Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-998488491684853251--STARTED-/processor
2025-07-03T00:46:39.9617838Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-03T00:46:39.9618448Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-07-03T00:46:39.9619077Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-03T00:46:39.9619707Z         internal error while provisioning resource from global resource manager.
2025-07-03T00:46:39.9620315Z         Reason: Bad Request. Params: [processor-started-to- failed to acquire
2025-07-03T00:46:39.9620943Z         resources for stream processor validation: internal error while provisioning
2025-07-03T00:46:39.9621512Z         resource from global resource manager], BadRequestDetail: 
2025-07-03T00:46:39.9634326Z   
2025-07-03T00:46:39.9634808Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-03T00:46:39.9635439Z         
2025-07-03T00:46:39.9635718Z         Error: error deleting resource
2025-07-03T00:46:39.9635982Z         
2025-07-03T00:46:39.9636889Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6865cef1699daf2aab4cc130/streams/test-acc-tf-998488491684853251--STARTED-/connections/sample_stream_solar
2025-07-03T00:46:39.9637694Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-03T00:46:39.9638220Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-03T00:46:39.9638840Z         name test-acc-tf-998488491684853251--STARTED- has active processors, and
2025-07-03T00:46:39.9639347Z         cannot be changed. Reason: Forbidden. Params:
2025-07-03T00:46:39.9639839Z         [test-acc-tf-998488491684853251--STARTED-], BadRequestDetail: 
2025-07-03T00:46:39.9642181Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (31.20s)
```

- 2025-07-04 PASS 11 seconds
- 2025-07-05 PASS 14 seconds
- 2025-07-06

### Error 2025-07-06T00:48:43+00:00
```
2025-07-06T00:48:43.0207800Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-06T00:48:43.0208619Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-07-06T00:48:43.0212765Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-06T00:48:43.0223298Z    test_working_directory=/tmp/plugintest3457435091 test_step_number=1
2025-07-06T00:48:43.0223825Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:48:43.0224172Z         
2025-07-06T00:48:43.0224433Z         Error: error creating resource
2025-07-06T00:48:43.0224689Z         
2025-07-06T00:48:43.0225011Z           with mongodbatlas_stream_instance.instance,
2025-07-06T00:48:43.0225646Z           on terraform_plugin_test.tf line 11, in resource "mongodbatlas_stream_instance" "instance":
2025-07-06T00:48:43.0226357Z           11: resource "mongodbatlas_stream_instance" "instance" {
2025-07-06T00:48:43.0226674Z         
2025-07-06T00:48:43.0227156Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c40b690ae45e168bd561/streams
2025-07-06T00:48:43.0227923Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:48:43.0228498Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:48:43.0228875Z         BadRequestDetail: 
2025-07-06T00:48:43.0240270Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-06T00:48:43.0280759Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (30.57s)
```

- 2025-07-07

### Error 2025-07-07T00:48:05+00:00
```
2025-07-07T00:48:05.7840928Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-07T00:48:05.7841841Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-07-07T00:48:05.7847163Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-07T00:48:05.7865794Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState test_terraform_path=/home/runner/work/_temp/c51b1342-8f8b-48f5-80bd-084902e39212/terraform
2025-07-07T00:48:05.7893376Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-07T00:48:05.7893916Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-07T00:48:05.7894274Z         
2025-07-07T00:48:05.7894539Z         Error: error creating resource
2025-07-07T00:48:05.7894794Z         
2025-07-07T00:48:05.7895137Z           with mongodbatlas_stream_processor.processor,
2025-07-07T00:48:05.7895995Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-07T00:48:05.7896616Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-07T00:48:05.7896927Z         
2025-07-07T00:48:05.7897932Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-7368587854316558678--STARTED-/processor
2025-07-07T00:48:05.7898845Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-07T00:48:05.7899447Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-07-07T00:48:05.7900071Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-07T00:48:05.7900688Z         internal error while provisioning resource from global resource manager.
2025-07-07T00:48:05.7901272Z         Reason: Bad Request. Params: [processor-started-to- failed to acquire
2025-07-07T00:48:05.7901897Z         resources for stream processor validation: internal error while provisioning
2025-07-07T00:48:05.7902458Z         resource from global resource manager], BadRequestDetail: 
2025-07-07T00:48:05.7915995Z   
2025-07-07T00:48:05.7935313Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-07T00:48:05.7936137Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-07T00:48:05.7936563Z         
2025-07-07T00:48:05.7936826Z         Error: error deleting resource
2025-07-07T00:48:05.7937090Z         
2025-07-07T00:48:05.7937992Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/686b156affed0c5c678b2a5a/streams/test-acc-tf-7368587854316558678--STARTED-/connections/sample_stream_solar
2025-07-07T00:48:05.7938776Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-07T00:48:05.7939289Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-07T00:48:05.7939921Z         name test-acc-tf-7368587854316558678--STARTED- has active processors, and
2025-07-07T00:48:05.7940454Z         cannot be changed. Reason: Forbidden. Params:
2025-07-07T00:48:05.7940946Z         [test-acc-tf-7368587854316558678--STARTED-], BadRequestDetail: 
2025-07-07T00:48:05.7943143Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (31.16s)
```

- 2025-07-08 PASS 11 seconds
- 2025-07-09 PASS 11 seconds
- 2025-07-10
  - PASS 14 seconds
  - FAIL 39 seconds

### Error 2025-07-10T13:24:52+00:00
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-07-10T13:24:52.384000+00:00-TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState',confidence=1.0,ts_when='13 days ago')
API Error STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/{groupId}/streams/{tenantName}/processor/{processorName}
```
2025-07-10T13:24:52.3843915Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-10T13:24:52.3844745Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-07-10T13:24:52.3848926Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-10T13:24:52.3859851Z    test_name=TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-07-10T13:24:52.3879645Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-10T13:24:52.3880199Z     resource_test.go:210: Step 2/2 error: Error running apply: exit status 1
2025-07-10T13:24:52.3880553Z         
2025-07-10T13:24:52.3881173Z         Error: Error modifying stream processor
2025-07-10T13:24:52.3881493Z         
2025-07-10T13:24:52.3881850Z           with mongodbatlas_stream_processor.processor,
2025-07-10T13:24:52.3882541Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-10T13:24:52.3883186Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-10T13:24:52.3883498Z         
2025-07-10T13:24:52.3884428Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb06fd583001f9eeb866/streams/test-acc-tf-183422097185683742--STARTED-/processor/processor-started-to-
2025-07-10T13:24:52.3885369Z         PATCH: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-10T13:24:52.3886110Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-07-10T13:24:52.3886717Z         problem occur: upstream request timeout. Reason: Bad Request. Params:
2025-07-10T13:24:52.3887325Z         [processor-started-to- upstream request timeout], BadRequestDetail: 
2025-07-10T13:24:52.3889553Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (39.03s)
```

- 2025-07-11

### Error 2025-07-11T02:31:57+00:00
```
2025-07-11T02:31:57.1434988Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-11T02:31:57.1435811Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-07-11T02:31:57.1440326Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-11T02:31:57.1457027Z    test_step_number=1
2025-07-11T02:31:57.1457430Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-11T02:31:57.1457789Z         
2025-07-11T02:31:57.1458054Z         Error: error creating resource
2025-07-11T02:31:57.1458310Z         
2025-07-11T02:31:57.1458664Z           with mongodbatlas_stream_processor.processor,
2025-07-11T02:31:57.1459341Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-11T02:31:57.1460227Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-11T02:31:57.1460554Z         
2025-07-11T02:31:57.1461357Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b004f431f68780bdce6/streams/test-acc-tf-7215639486041097570--STARTED-/processor
2025-07-11T02:31:57.1462353Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-11T02:31:57.1462967Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-07-11T02:31:57.1463595Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-11T02:31:57.1464218Z         internal error while provisioning resource from global resource manager.
2025-07-11T02:31:57.1464814Z         Reason: Bad Request. Params: [processor-started-to- failed to acquire
2025-07-11T02:31:57.1465451Z         resources for stream processor validation: internal error while provisioning
2025-07-11T02:31:57.1466023Z         resource from global resource manager], BadRequestDetail: 
2025-07-11T02:31:57.1486823Z   
2025-07-11T02:31:57.1487627Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-11T02:31:57.1488369Z         
2025-07-11T02:31:57.1488843Z         Error: error deleting resource
2025-07-11T02:31:57.1489288Z         
2025-07-11T02:31:57.1491251Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68705b004f431f68780bdce6/streams/test-acc-tf-7215639486041097570--STARTED-/connections/sample_stream_solar
2025-07-11T02:31:57.1492685Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-11T02:31:57.1493631Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-11T02:31:57.1494492Z         name sample_stream_solar in stream instance
2025-07-11T02:31:57.1495468Z         test-acc-tf-7215639486041097570--STARTED- has active processors, and cannot
2025-07-11T02:31:57.1496468Z         be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-11T02:31:57.1497385Z         test-acc-tf-7215639486041097570--STARTED-], BadRequestDetail: 
2025-07-11T02:31:57.1501558Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (31.42s)
```

- 2025-07-12 PASS 12 seconds
- 2025-07-13 PASS 12 seconds
- 2025-07-14

### Error 2025-07-14T04:02:14+00:00
```
2025-07-14T04:02:14.1191920Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-14T04:02:14.1192734Z     resource_test.go:209: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-07-14T04:02:14.1196966Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-14T04:02:14.1214055Z   
2025-07-14T04:02:14.1214422Z     resource_test.go:210: Step 1/2 error: Error running apply: exit status 1
2025-07-14T04:02:14.1214779Z         
2025-07-14T04:02:14.1215047Z         Error: error creating resource
2025-07-14T04:02:14.1215315Z         
2025-07-14T04:02:14.1215674Z           with mongodbatlas_stream_processor.processor,
2025-07-14T04:02:14.1216341Z           on terraform_plugin_test.tf line 31, in resource "mongodbatlas_stream_processor" "processor":
2025-07-14T04:02:14.1216967Z           31: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-14T04:02:14.1217287Z         
2025-07-14T04:02:14.1218073Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fdf52cba864e5f10a3b/streams/test-acc-tf-6912053252840467724--STARTED-/processor
2025-07-14T04:02:14.1218916Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2025-07-14T04:02:14.1219511Z         Detail: Streams Processor with this name (processor-started-to-) had a
2025-07-14T04:02:14.1220141Z         problem occur: failed to acquire resources for stream processor validation:
2025-07-14T04:02:14.1220759Z         internal error while provisioning resource from global resource manager.
2025-07-14T04:02:14.1221348Z         Reason: Bad Request. Params: [processor-started-to- failed to acquire
2025-07-14T04:02:14.1221978Z         resources for stream processor validation: internal error while provisioning
2025-07-14T04:02:14.1222544Z         resource from global resource manager], BadRequestDetail: 
2025-07-14T04:02:14.1239475Z   
2025-07-14T04:02:14.1263167Z === NAME  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-14T04:02:14.1263802Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T04:02:14.1264309Z         
2025-07-14T04:02:14.1264653Z         Error: error deleting resource
2025-07-14T04:02:14.1264918Z         
2025-07-14T04:02:14.1266074Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fdf52cba864e5f10a3b/streams/test-acc-tf-6912053252840467724--STARTED-/connections/sample_stream_solar
2025-07-14T04:02:14.1267188Z         DELETE: HTTP 403 Forbidden (Error code:
2025-07-14T04:02:14.1267856Z         "STREAM_CONNECTION_HAS_STREAM_PROCESSORS") Detail: Stream connection with
2025-07-14T04:02:14.1268371Z         name sample_stream_solar in stream instance
2025-07-14T04:02:14.1269019Z         test-acc-tf-6912053252840467724--STARTED- has active processors, and cannot
2025-07-14T04:02:14.1269717Z         be changed. Reason: Forbidden. Params: [sample_stream_solar
2025-07-14T04:02:14.1270376Z         test-acc-tf-6912053252840467724--STARTED-], BadRequestDetail: 
2025-07-14T04:02:14.1287011Z    test_working_directory=/tmp/plugintest3023592665 test_name=TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-07-14T04:02:14.1297241Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (31.15s)
```

- 2025-07-15 PASS 8 seconds
- 2025-07-16 PASS 11 seconds
- 2025-07-17 PASS 9 seconds
- 2025-07-18 PASS 11 seconds
- 2025-07-19 PASS 10 seconds
- 2025-07-20

### Error 2025-07-20T00:53:03+00:00
```
2025-07-20T00:53:03.7135475Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-20T00:53:03.7136517Z     resource_test.go:217: Testing: Verifies that a processor in STARTED state can be updated while remaining in a derived STARTED state from empty state
2025-07-20T00:53:03.7140578Z === CONT  TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState
2025-07-20T00:53:03.7154303Z   
2025-07-20T00:53:03.7154666Z     resource_test.go:218: Step 1/2 error: Error running apply: exit status 1
2025-07-20T00:53:03.7155026Z         
2025-07-20T00:53:03.7155292Z         Error: error creating resource
2025-07-20T00:53:03.7155554Z         
2025-07-20T00:53:03.7156023Z           with mongodbatlas_stream_processor.processor,
2025-07-20T00:53:03.7156701Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_processor" "processor":
2025-07-20T00:53:03.7157326Z           12: 		resource "mongodbatlas_stream_processor" "processor" {
2025-07-20T00:53:03.7157643Z         
2025-07-20T00:53:03.7158495Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393e823af9166ef91845/streams/test-acc-tf-s-9049831376135069608/processor
2025-07-20T00:53:03.7159315Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-07-20T00:53:03.7159896Z         Detail: Stream instance for project 687c393e823af9166ef91845 and name
2025-07-20T00:53:03.7160488Z         test-acc-tf-s-9049831376135069608 not found. Reason: Not Found. Params:
2025-07-20T00:53:03.7161048Z         [687c393e823af9166ef91845 test-acc-tf-s-9049831376135069608],
2025-07-20T00:53:03.7161422Z         BadRequestDetail: 
2025-07-20T00:53:03.7174930Z   
2025-07-20T00:53:03.7204492Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StartedToEmptyState (0.46s)
```

- 2025-07-21 PASS 11 seconds
- 2025-07-22 PASS 9 seconds
- 2025-07-23
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-07-24 PASS 10 seconds