# stream/streamconnection/TestAccStreamDSStreamConnections_basic Test Details
# Found 132 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 126) FAIL(x 6)
Success rate: 95.45%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-16 00:45](#error-2025-04-16t0045120000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-4363260774635412230/connections | dev | flaky_500 | 3.02s
[2025-04-16 12:49](#error-2025-04-16t1249320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-3219801747211737537/connections | qa | flaky_500 | 3.04s
[2025-04-16 14:37](#error-2025-04-16t1437260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-448827572401973267/connections | dev | flaky_500 | 3.04s
[2025-04-17 00:44](#error-2025-04-17t0044440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-844049210062420937/connections | dev | flaky_500 | 3.02s
[2025-05-11 00:29](#error-2025-05-11t0029580000) |  | qa |  | 0.00s
[2025-06-22 00:49](#error-2025-06-22t0049550000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-6473342022759251841 | qa | flaky_500 | 34.05s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 5 seconds
- 2025-04-13 PASS 6 seconds
- 2025-04-14 PASS 6 seconds
- 2025-04-15 PASS 5 seconds
- 2025-04-16
  - FAIL 3 seconds

### Error 2025-04-16T00:45:12+00:00
```
2025-04-16T00:45:12.2907531Z === RUN   TestAccStreamDSStreamConnections_basic
2025-04-16T00:45:12.2955681Z === CONT  TestAccStreamDSStreamConnections_basic
2025-04-16T00:45:12.2986463Z === NAME  TestAccStreamDSStreamConnections_basic
2025-04-16T00:45:12.2987039Z     data_source_stream_connections_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-04-16T00:45:12.2987456Z         
2025-04-16T00:45:12.2987727Z         Error: error fetching results
2025-04-16T00:45:12.2987985Z         
2025-04-16T00:45:12.2988350Z           with data.mongodbatlas_stream_connections.test,
2025-04-16T00:45:12.2989145Z           on terraform_plugin_test.tf line 50, in data "mongodbatlas_stream_connections" "test":
2025-04-16T00:45:12.2989736Z           50: 		data "mongodbatlas_stream_connections" "test" {
2025-04-16T00:45:12.2990051Z         
2025-04-16T00:45:12.2990810Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-4363260774635412230/connections
2025-04-16T00:45:12.2991650Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-04-16T00:45:12.2992225Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.2992611Z         BadRequestDetail: 
2025-04-16T00:45:12.3007664Z    test_working_directory=/tmp/plugintest2864913942 test_step_number=1 test_name=TestAccStreamDSStreamConnections_withPageConfig
2025-04-16T00:45:12.3020183Z === NAME  TestAccStreamDSStreamConnections_basic
2025-04-16T00:45:12.3020763Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T00:45:12.3021315Z         
2025-04-16T00:45:12.3021592Z         Error: error deleting resource
2025-04-16T00:45:12.3021858Z         
2025-04-16T00:45:12.3022781Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fef96135407a6a8a04bd94/streams/test-acc-tf-4363260774635412230/connections/test-acc-tf-4363260774635412230
2025-04-16T00:45:12.3023714Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T00:45:12.3024602Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T00:45:12.3025016Z         BadRequestDetail: 
2025-04-16T00:45:12.3025330Z --- FAIL: TestAccStreamDSStreamConnections_basic (3.17s)
```

  - FAIL 3 seconds

### Error 2025-04-16T12:49:32+00:00
```
2025-04-16T12:49:32.7937588Z === RUN   TestAccStreamDSStreamConnections_basic
2025-04-16T12:49:32.8001023Z === CONT  TestAccStreamDSStreamConnections_basic
2025-04-16T12:49:32.8032425Z === NAME  TestAccStreamDSStreamConnections_basic
2025-04-16T12:49:32.8033130Z     data_source_stream_connections_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-04-16T12:49:32.8033574Z         
2025-04-16T12:49:32.8033847Z         Error: error fetching results
2025-04-16T12:49:32.8034112Z         
2025-04-16T12:49:32.8034481Z           with data.mongodbatlas_stream_connections.test,
2025-04-16T12:49:32.8035132Z           on terraform_plugin_test.tf line 50, in data "mongodbatlas_stream_connections" "test":
2025-04-16T12:49:32.8035719Z           50: 		data "mongodbatlas_stream_connections" "test" {
2025-04-16T12:49:32.8036022Z         
2025-04-16T12:49:32.8036775Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-3219801747211737537/connections
2025-04-16T12:49:32.8037622Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-04-16T12:49:32.8038201Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8038596Z         BadRequestDetail: 
2025-04-16T12:49:32.8049797Z   
2025-04-16T12:49:32.8066210Z === NAME  TestAccStreamDSStreamConnections_basic
2025-04-16T12:49:32.8066797Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T12:49:32.8067227Z         
2025-04-16T12:49:32.8067505Z         Error: error deleting resource
2025-04-16T12:49:32.8067771Z         
2025-04-16T12:49:32.8068703Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/67ffa2d8e736c1390fddea9a/streams/test-acc-tf-3219801747211737537/connections/test-acc-tf-3219801747211737537
2025-04-16T12:49:32.8069819Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T12:49:32.8070432Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T12:49:32.8070855Z         BadRequestDetail: 
2025-04-16T12:49:32.8071174Z --- FAIL: TestAccStreamDSStreamConnections_basic (3.44s)
```

  - FAIL 3 seconds

### Error 2025-04-16T14:37:26+00:00
```
2025-04-16T14:37:26.9927177Z === RUN   TestAccStreamDSStreamConnections_basic
2025-04-16T14:37:26.9978429Z === CONT  TestAccStreamDSStreamConnections_basic
2025-04-16T14:37:26.9991325Z === NAME  TestAccStreamDSStreamConnections_basic
2025-04-16T14:37:26.9991930Z     data_source_stream_connections_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-04-16T14:37:26.9992359Z         
2025-04-16T14:37:26.9992634Z         Error: error fetching results
2025-04-16T14:37:26.9992906Z         
2025-04-16T14:37:26.9993271Z           with data.mongodbatlas_stream_connections.test,
2025-04-16T14:37:26.9994149Z           on terraform_plugin_test.tf line 50, in data "mongodbatlas_stream_connections" "test":
2025-04-16T14:37:26.9994757Z           50: 		data "mongodbatlas_stream_connections" "test" {
2025-04-16T14:37:26.9995067Z         
2025-04-16T14:37:26.9995833Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-448827572401973267/connections
2025-04-16T14:37:26.9996855Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-04-16T14:37:26.9997447Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:26.9997847Z         BadRequestDetail: 
2025-04-16T14:37:27.0009057Z    test_name=TestAccStreamDSStreamConnections_withPageConfig test_terraform_path=/home/runner/work/_temp/cbd85b3d-89a9-420b-96e9-da4975fd1b27/terraform test_working_directory=/tmp/plugintest670990459
2025-04-16T14:37:27.0056140Z === NAME  TestAccStreamDSStreamConnections_basic
2025-04-16T14:37:27.0056757Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-16T14:37:27.0057207Z         
2025-04-16T14:37:27.0057493Z         Error: error deleting resource
2025-04-16T14:37:27.0057767Z         
2025-04-16T14:37:27.0058736Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/67ffbd1551a0bf7e3792126d/streams/test-acc-tf-448827572401973267/connections/test-acc-tf-448827572401973267
2025-04-16T14:37:27.0059926Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-16T14:37:27.0060544Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-16T14:37:27.0060963Z         BadRequestDetail: 
2025-04-16T14:37:27.0061288Z --- FAIL: TestAccStreamDSStreamConnections_basic (3.44s)
```

- 2025-04-17

### Error 2025-04-17T00:44:44+00:00
```
2025-04-17T00:44:44.8835106Z === RUN   TestAccStreamDSStreamConnections_basic
2025-04-17T00:44:44.8919855Z === CONT  TestAccStreamDSStreamConnections_basic
2025-04-17T00:44:44.8947423Z === NAME  TestAccStreamDSStreamConnections_basic
2025-04-17T00:44:44.8948739Z     data_source_stream_connections_test.go:18: Step 1/1 error: Error running apply: exit status 1
2025-04-17T00:44:44.8949559Z         
2025-04-17T00:44:44.8950075Z         Error: error fetching results
2025-04-17T00:44:44.8950586Z         
2025-04-17T00:44:44.8951287Z           with data.mongodbatlas_stream_connections.test,
2025-04-17T00:44:44.8952548Z           on terraform_plugin_test.tf line 50, in data "mongodbatlas_stream_connections" "test":
2025-04-17T00:44:44.8953660Z           50: 		data "mongodbatlas_stream_connections" "test" {
2025-04-17T00:44:44.8954227Z         
2025-04-17T00:44:44.8955683Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-844049210062420937/connections
2025-04-17T00:44:44.8957339Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-04-17T00:44:44.8958633Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.8959654Z         BadRequestDetail: 
2025-04-17T00:44:44.8975220Z    test_working_directory=/tmp/plugintest234212405 test_name=TestAccStreamDSStreamConnections_withPageConfig test_terraform_path=/home/runner/work/_temp/7820bfc0-4292-41a1-b17d-9a8aaba10970/terraform test_step_number=1
2025-04-17T00:44:44.8993924Z === NAME  TestAccStreamDSStreamConnections_basic
2025-04-17T00:44:44.8994521Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-17T00:44:44.8994954Z         
2025-04-17T00:44:44.8995233Z         Error: error deleting resource
2025-04-17T00:44:44.8995505Z         
2025-04-17T00:44:44.8996443Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68004ac9f1c9683aa40d94a2/streams/test-acc-tf-844049210062420937/connections/test-acc-tf-844049210062420937
2025-04-17T00:44:44.8997386Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-04-17T00:44:44.8997998Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-04-17T00:44:44.8998625Z         BadRequestDetail: 
2025-04-17T00:44:44.8998958Z --- FAIL: TestAccStreamDSStreamConnections_basic (3.16s)
```

- 2025-04-18 PASS 6 seconds
- 2025-04-19 PASS 6 seconds
- 2025-04-20 PASS 6 seconds
- 2025-04-21 PASS 6 seconds
- 2025-04-22 PASS 6 seconds
- 2025-04-23 PASS 6 seconds
- 2025-04-24 PASS 7 seconds
- 2025-04-25 PASS 6 seconds
- 2025-04-26 PASS 5 seconds
- 2025-04-27 PASS 6 seconds
- 2025-04-28 PASS 6 seconds
- 2025-04-29 PASS 5 seconds
- 2025-04-30
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-01
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-02 PASS 6 seconds
- 2025-05-03 PASS 5 seconds
- 2025-05-04 PASS 7 seconds
- 2025-05-05
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-06 PASS 6 seconds
- 2025-05-07
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-08 PASS 6 seconds
- 2025-05-09 PASS 6 seconds
- 2025-05-10 PASS 5 seconds
- 2025-05-11

### Error 2025-05-11T00:29:58+00:00
```
2025-05-11T00:29:58.6090885Z === RUN   TestAccStreamDSStreamConnections_basic
2025-05-11T00:29:58.6092551Z     data_source_stream_connections_test.go:15: Creating execution project: test-acc-tf-p-2888604617503775797
2025-05-11T00:29:58.6093784Z     data_source_stream_connections_test.go:15: 
2025-05-11T00:29:58.6095645Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:58.6099863Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:58.6105102Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/data_source_stream_connections_test.go:15
2025-05-11T00:29:58.6107348Z         	Error:      	Received unexpected error:
2025-05-11T00:29:58.6109395Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6110657Z         	Test:       	TestAccStreamDSStreamConnections_basic
2025-05-11T00:29:58.6112913Z         	Messages:   	Project creation failed: test-acc-tf-p-2888604617503775797, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:58.6114334Z --- FAIL: TestAccStreamDSStreamConnections_basic (0.02s)
```

- 2025-05-12 PASS 7 seconds
- 2025-05-13
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-14 PASS 6 seconds
- 2025-05-15 PASS 5 seconds
- 2025-05-16 PASS 5 seconds
- 2025-05-17 PASS 5 seconds
- 2025-05-18 PASS 6 seconds
- 2025-05-19 PASS 6 seconds
- 2025-05-20
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-21 PASS 6 seconds
- 2025-05-22
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-23 PASS 6 seconds
- 2025-05-24 PASS 5 seconds
- 2025-05-25 PASS 5 seconds
- 2025-05-26 PASS 6 seconds
- 2025-05-27
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-28
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-29
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-05-30
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-31 PASS 5 seconds
- 2025-06-01
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-06-02
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-06-03
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-04 PASS 6 seconds
- 2025-06-05 PASS 4 seconds
- 2025-06-06 PASS 5 seconds
- 2025-06-07 PASS 5 seconds
- 2025-06-08 PASS 5 seconds
- 2025-06-09 PASS 5 seconds
- 2025-06-10 PASS 6 seconds
- 2025-06-11
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-06-12 PASS 6 seconds
- 2025-06-13 PASS 6 seconds
- 2025-06-14 PASS 6 seconds
- 2025-06-15 PASS 6 seconds
- 2025-06-16 PASS 5 seconds
- 2025-06-17 PASS 5 seconds
- 2025-06-18
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-19 PASS 5 seconds
- 2025-06-20 PASS 5 seconds
- 2025-06-21 PASS 5 seconds
- 2025-06-22

### Error 2025-06-22T00:49:55+00:00
```
2025-06-22T00:49:55.7946493Z === RUN   TestAccStreamDSStreamConnections_basic
2025-06-22T00:49:55.7957200Z === CONT  TestAccStreamDSStreamConnections_basic
2025-06-22T00:49:55.8166812Z === NAME  TestAccStreamDSStreamConnections_basic
2025-06-22T00:49:55.8167499Z     data_source_stream_connections_test.go:18: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:49:55.8168035Z         
2025-06-22T00:49:55.8168318Z         Error: error during resource delete
2025-06-22T00:49:55.8168585Z         
2025-06-22T00:49:55.8169252Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68574efaab82446d9bfb0d5e/streams/test-acc-tf-6473342022759251841
2025-06-22T00:49:55.8170015Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-06-22T00:49:55.8170608Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-22T00:49:55.8171007Z         BadRequestDetail: 
2025-06-22T00:49:55.8171324Z --- FAIL: TestAccStreamDSStreamConnections_basic (34.52s)
```

- 2025-06-23 PASS 6 seconds
- 2025-06-24 PASS 5 seconds
- 2025-06-25
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-06-26
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-06-27 PASS 6 seconds
- 2025-06-28 PASS 6 seconds
- 2025-06-29 PASS 5 seconds
- 2025-06-30 PASS 6 seconds
- 2025-07-01
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 6 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 6 seconds
- 2025-07-06 PASS 7 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 6 seconds
- 2025-07-09 PASS 5 seconds
- 2025-07-10 PASS 7 seconds