# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 8)
Success rate: 78.95%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:56](#error-2026-04-16t0056520000) | NO_CAPACITY /api/atlas/v2/groups/69e032b21ec945fedc7295aa/containers | dev |  | 0.05s
[2026-04-30 01:31](#error-2026-04-30t0131460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.08s
[2026-05-06 02:34](#error-2026-05-06t0234200000) |  | dev | timeout | 1545.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 26 minutes
- 2026-04-08 PASS 26 minutes
- 2026-04-09 PASS 20 minutes
- 2026-04-10 PASS 34 minutes
- 2026-04-11 PASS 13 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 28 minutes
- 2026-04-14 PASS 12 minutes
- 2026-04-15 PASS 21 minutes
- 2026-04-16

### Error 2026-04-16T00:56:52+00:00
```
2026-04-16T00:56:52.0164934Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-04-16T00:56:52.0174477Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/b8da1765-dbc7-4882-a3ad-130f092659bd/terraform test_working_directory=/tmp/plugintest373935204 test_step_number=1
2026-04-16T00:56:52.0175595Z     resource_stream_connection_test.go:232: Step 1/2 error: Error running apply: exit status 1
2026-04-16T00:56:52.0175960Z         
2026-04-16T00:56:52.0177394Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032b21ec945fedc7295aa/containers POST: HTTP 409 Conflict (Error code: "NO_CAPACITY") Detail: Cannot find the AWS capacity for group 69e032b21ec945fedc7295aa. Reason: Conflict. Params: [AWS 69e032b21ec945fedc7295aa], BadRequestDetail: 
2026-04-16T00:56:52.0178589Z         
2026-04-16T00:56:52.0178872Z           with mongodbatlas_network_container.test,
2026-04-16T00:56:52.0179422Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2026-04-16T00:56:52.0179936Z           12: 	resource "mongodbatlas_network_container" "test" {
2026-04-16T00:56:52.0180208Z         
2026-04-16T00:56:52.0180627Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (0.52s)
```

- 2026-04-17 PASS 18 minutes
- 2026-04-18 PASS 18 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 13 minutes
- 2026-04-21 PASS 14 minutes
- 2026-04-22 PASS 27 minutes
- 2026-04-23 PASS 24 minutes
- 2026-04-24 PASS 21 minutes
- 2026-04-25 PASS 13 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 30 minutes
- 2026-04-28 PASS 13 minutes
- 2026-04-29 PASS 22 minutes
- 2026-04-30
  - FAIL a minute

### Error 2026-04-30T01:31:46+00:00
```
2026-04-30T01:31:46.2645884Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-04-30T01:31:46.2646586Z     resource_stream_connection_test.go:222: Creating execution project (1): test-acc-tf-p-8766104120139333383
2026-04-30T01:31:46.2647202Z     resource_stream_connection_test.go:222: 
2026-04-30T01:31:46.2648167Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:31:46.2649959Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:31:46.2651882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:31:46.2653803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-30T01:31:46.2655872Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:222
2026-04-30T01:31:46.2657148Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:31:46.2657673Z         	Error:      	Received unexpected error:
2026-04-30T01:31:46.2659581Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2660693Z         	Test:       	TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-04-30T01:31:46.2662822Z         	Messages:   	Project creation failed: test-acc-tf-p-8766104120139333383, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2664089Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (83.76s)
```

  - PASS 12 minutes
- 2026-05-01 PASS 17 minutes
- 2026-05-02 PASS 13 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 22 minutes
- 2026-05-05 PASS 17 minutes
- 2026-05-06

### Error 2026-05-06T02:34:20+00:00
```
2026-05-06T02:34:20.7667061Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-06T02:34:20.7677307Z   
2026-05-06T02:34:20.7677832Z     resource_stream_connection_test.go:232: Step 1/2 error: Error running apply: exit status 1
2026-05-06T02:34:20.7678298Z         
2026-05-06T02:34:20.7678697Z         Error: error waiting for stream connection to be ready
2026-05-06T02:34:20.7679031Z         
2026-05-06T02:34:20.7679400Z           with mongodbatlas_stream_connection.test,
2026-05-06T02:34:20.7680459Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-06T02:34:20.7681317Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-06T02:34:20.7681721Z         
2026-05-06T02:34:20.7682203Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-06T02:34:20.7682681Z         'PENDING', timeout: 20m0s)
2026-05-06T02:34:20.7683094Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1545.57s)
```


## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-03 01:54](#error-2026-05-03t0154300000) |  | qa | timeout | 1371.10s
[2026-05-04 17:36](#error-2026-05-04t1736300000) |  | qa | timeout | 1363.03s
[2026-05-04 19:45](#error-2026-05-04t1945450000) |  | qa | timeout | 1372.09s
[2026-05-05 08:42](#error-2026-05-05t0842320000) |  | qa | timeout | 1361.09s
[2026-05-06 07:47](#error-2026-05-06t0747380000) |  | qa | timeout | 1362.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 29 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 17 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 16 minutes
  - PASS 10 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 21 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03

### Error 2026-05-03T01:54:30+00:00
```
2026-05-03T01:54:30.1610527Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-03T01:54:30.1620833Z   
2026-05-03T01:54:30.1621713Z     resource_stream_connection_test.go:232: Step 1/2 error: Error running apply: exit status 1
2026-05-03T01:54:30.1622582Z         
2026-05-03T01:54:30.1623586Z         Error: error waiting for stream connection to be ready
2026-05-03T01:54:30.1624241Z         
2026-05-03T01:54:30.1624900Z           with mongodbatlas_stream_connection.test,
2026-05-03T01:54:30.1626170Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-03T01:54:30.1626870Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-03T01:54:30.1627222Z         
2026-05-03T01:54:30.1627698Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-03T01:54:30.1628406Z         'PENDING', timeout: 20m0s)
2026-05-03T01:54:30.1628830Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1371.96s)
```

- 2026-05-04
  - FAIL 22 minutes

### Error 2026-05-04T17:36:30+00:00
```
2026-05-04T17:36:30.4649653Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-04T17:36:30.4665542Z    test_working_directory=/tmp/plugintest617054983
2026-05-04T17:36:30.4666873Z     resource_stream_connection_test.go:232: Step 1/2 error: Error running apply: exit status 1
2026-05-04T17:36:30.4667692Z         
2026-05-04T17:36:30.4668391Z         Error: error waiting for stream connection to be ready
2026-05-04T17:36:30.4669022Z         
2026-05-04T17:36:30.4669682Z           with mongodbatlas_stream_connection.test,
2026-05-04T17:36:30.4671241Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-04T17:36:30.4672508Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-04T17:36:30.4673372Z         
2026-05-04T17:36:30.4674220Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-04T17:36:30.4675061Z         'PENDING', timeout: 20m0s)
2026-05-04T17:36:30.4675811Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1363.30s)
```

  - FAIL 22 minutes

### Error 2026-05-04T19:45:45+00:00
```
2026-05-04T19:45:45.1238661Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-04T19:45:45.1251112Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-04T19:45:45.1252035Z     resource_stream_connection_test.go:232: Step 1/2 error: Error running apply: exit status 1
2026-05-04T19:45:45.1252584Z         
2026-05-04T19:45:45.1253064Z         Error: error waiting for stream connection to be ready
2026-05-04T19:45:45.1253488Z         
2026-05-04T19:45:45.1253927Z           with mongodbatlas_stream_connection.test,
2026-05-04T19:45:45.1254801Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-04T19:45:45.1255616Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-04T19:45:45.1256046Z         
2026-05-04T19:45:45.1256606Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-04T19:45:45.1257182Z         'PENDING', timeout: 20m0s)
2026-05-04T19:45:45.1257707Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1372.88s)
```

- 2026-05-05

### Error 2026-05-05T08:42:32+00:00
```
2026-05-05T08:42:32.4303282Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-05T08:42:32.4313622Z   
2026-05-05T08:42:32.4314449Z     resource_stream_connection_test.go:232: Step 1/2 error: Error running apply: exit status 1
2026-05-05T08:42:32.4315196Z         
2026-05-05T08:42:32.4315840Z         Error: error waiting for stream connection to be ready
2026-05-05T08:42:32.4316492Z         
2026-05-05T08:42:32.4317101Z           with mongodbatlas_stream_connection.test,
2026-05-05T08:42:32.4318260Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-05T08:42:32.4319210Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-05T08:42:32.4319587Z         
2026-05-05T08:42:32.4320084Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-05T08:42:32.4320566Z         'PENDING', timeout: 20m0s)
2026-05-05T08:42:32.4321009Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1361.85s)
```

- 2026-05-06

### Error 2026-05-06T07:47:38+00:00
```
2026-05-06T07:47:38.5886310Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-06T07:47:38.5900114Z   
2026-05-06T07:47:38.5901074Z     resource_stream_connection_test.go:232: Step 1/2 error: Error running apply: exit status 1
2026-05-06T07:47:38.5901969Z         
2026-05-06T07:47:38.5902747Z         Error: error waiting for stream connection to be ready
2026-05-06T07:47:38.5903420Z         
2026-05-06T07:47:38.5904102Z           with mongodbatlas_stream_connection.test,
2026-05-06T07:47:38.5905446Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-06T07:47:38.5906131Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-06T07:47:38.5906480Z         
2026-05-06T07:47:38.5907130Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-06T07:47:38.5907596Z         'PENDING', timeout: 20m0s)
2026-05-06T07:47:38.5908007Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1362.47s)
```

