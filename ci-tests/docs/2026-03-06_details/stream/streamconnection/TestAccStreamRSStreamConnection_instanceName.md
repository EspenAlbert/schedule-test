# stream/streamconnection/TestAccStreamRSStreamConnection_instanceName Test Details
# Found 37 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 7)
Success rate: 81.08%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-06 00:56](#error-2026-02-06t0056070000) | Step 1 1 | dev |  | 15.04s
[2026-02-12 18:47](#error-2026-02-12t1847250000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-02-17 01:10](#error-2026-02-17t0110410000) |  | dev |  | 16.05s
[2026-02-24 01:09](#error-2026-02-24t0109130000) |  | dev | flaky_500 | 1.05s
[2026-03-05 04:23](#error-2026-03-05t0423520000) |  | dev | timeout | 10801.08s
[2026-03-06 04:19](#error-2026-03-06t0419070000) |  | dev | timeout | 10802.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 5 seconds
- 2026-02-06

### Error 2026-02-06T00:56:07+00:00
```
2026-02-06T00:56:07.9012642Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-02-06T00:56:07.9019193Z === CONT  TestAccStreamRSStreamConnection_instanceName
2026-02-06T00:56:07.9078006Z === NAME  TestAccStreamRSStreamConnection_instanceName
2026-02-06T00:56:07.9079170Z     resource_stream_connection_test.go:508: Step 1/2 error: Check failed: Check 1/5 error: stream connection (6985378713125e9acd9899c4:test-acc-tf-s-5069340887224621354:test-acc-tf-5309364713757446194) does not exist
2026-02-06T00:56:07.9080123Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (15.36s)
```

- 2026-02-07
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 4 seconds
- 2026-02-10 PASS 3 seconds
- 2026-02-11 PASS 5 seconds
- 2026-02-12
  - PASS 4 seconds
  - FAIL a moment

### Error 2026-02-12T18:47:25+00:00
```
2026-02-12T18:47:25.6652114Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-02-12T18:47:25.6653187Z     resource_stream_connection_test.go:503: Creating execution project (1): test-acc-tf-p-7515596112347750546
2026-02-12T18:47:25.6654127Z     resource_stream_connection_test.go:503: 
2026-02-12T18:47:25.6655633Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-02-12T18:47:25.6658679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:151
2026-02-12T18:47:25.6661858Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:107
2026-02-12T18:47:25.6664823Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:223
2026-02-12T18:47:25.6668494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:503
2026-02-12T18:47:25.6670566Z         	            				/opt/hostedtoolcache/go/1.25.7/x64/src/runtime/asm_amd64.s:1693
2026-02-12T18:47:25.6671370Z         	Error:      	Received unexpected error:
2026-02-12T18:47:25.6675925Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6678395Z         	Test:       	TestAccStreamRSStreamConnection_instanceName
2026-02-12T18:47:25.6682248Z         	Messages:   	Project creation failed: test-acc-tf-p-7515596112347750546, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-02-12T18:47:25.6684790Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (0.25s)
```

- 2026-02-13 PASS 6 seconds
- 2026-02-14 PASS 4 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 4 seconds
- 2026-02-17

### Error 2026-02-17T01:10:41+00:00
```
2026-02-17T01:10:41.6534021Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-02-17T01:10:41.6542244Z === CONT  TestAccStreamRSStreamConnection_instanceName
2026-02-17T01:10:41.6568983Z === NAME  TestAccStreamRSStreamConnection_instanceName
2026-02-17T01:10:41.6569611Z     resource_stream_connection_test.go:507: Step 1/2 error: Error running apply: exit status 1
2026-02-17T01:10:41.6570084Z         
2026-02-17T01:10:41.6570472Z         Error: error waiting for stream connection to be ready
2026-02-17T01:10:41.6570820Z         
2026-02-17T01:10:41.6571177Z           with mongodbatlas_stream_connection.test,
2026-02-17T01:10:41.6571882Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-02-17T01:10:41.6572549Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-17T01:10:41.6572889Z         
2026-02-17T01:10:41.6573190Z         couldn't find resource (4 retries)
2026-02-17T01:10:41.6573594Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (16.45s)
```

- 2026-02-18 PASS 4 seconds
- 2026-02-19 PASS 4 seconds
- 2026-02-20 PASS 5 seconds
- 2026-02-21 PASS 5 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 4 seconds
- 2026-02-24

### Error 2026-02-24T01:09:13+00:00
```
2026-02-24T01:09:13.2031333Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-02-24T01:09:13.2037391Z === CONT  TestAccStreamRSStreamConnection_instanceName
2026-02-24T01:09:13.2125893Z === NAME  TestAccStreamRSStreamConnection_instanceName
2026-02-24T01:09:13.2126662Z     resource_stream_connection_test.go:507: Step 1/2 error: Error running apply: exit status 1
2026-02-24T01:09:13.2127138Z         
2026-02-24T01:09:13.2127542Z         Error: error creating resource
2026-02-24T01:09:13.2127838Z         
2026-02-24T01:09:13.2128317Z           with mongodbatlas_stream_connection.test,
2026-02-24T01:09:13.2129145Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-02-24T01:09:13.2129942Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-24T01:09:13.2130287Z         
2026-02-24T01:09:13.2130899Z         (503 Service Unavailable) failed to decode response body: undefined response
2026-02-24T01:09:13.2131564Z         type
2026-02-24T01:09:13.2142715Z   
2026-02-24T01:09:13.2150166Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (1.46s)
```

- 2026-02-25
  - PASS 5 seconds
  - PASS 6 seconds
- 2026-02-26 PASS 5 seconds
- 2026-02-27
  - PASS 4 seconds
  - PASS 9 seconds
- 2026-02-28 PASS 7 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 7 seconds
- 2026-03-03 PASS 8 seconds
- 2026-03-04 PASS 5 seconds
- 2026-03-05

### Error 2026-03-05T04:23:52+00:00
```
2026-03-05T04:23:52.7175942Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-03-05T04:23:52.7189313Z === CONT  TestAccStreamRSStreamConnection_instanceName
2026-03-05T04:23:52.7247726Z === NAME  TestAccStreamRSStreamConnection_instanceName
2026-03-05T04:23:52.7248859Z     resource_stream_connection_test.go:507: Step 1/2 error: Error running apply: exit status 1
2026-03-05T04:23:52.7249671Z         
2026-03-05T04:23:52.7250339Z         Error: error waiting for stream connection to be ready
2026-03-05T04:23:52.7250926Z         
2026-03-05T04:23:52.7251535Z           with mongodbatlas_stream_connection.test,
2026-03-05T04:23:52.7252793Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-03-05T04:23:52.7253972Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-03-05T04:23:52.7254567Z         
2026-03-05T04:23:52.7255379Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-03-05T04:23:52.7256204Z         'NOT_FOUND', timeout: 3h0m0s)
2026-03-05T04:23:52.7256878Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (10801.83s)
```

- 2026-03-06

### Error 2026-03-06T04:19:07+00:00
```
2026-03-06T04:19:07.4181331Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-03-06T04:19:07.4194660Z === CONT  TestAccStreamRSStreamConnection_instanceName
2026-03-06T04:19:07.4281678Z === NAME  TestAccStreamRSStreamConnection_instanceName
2026-03-06T04:19:07.4282489Z     resource_stream_connection_test.go:507: Step 1/2 error: Error running apply: exit status 1
2026-03-06T04:19:07.4283121Z         
2026-03-06T04:19:07.4283985Z         Error: error waiting for stream connection to be ready
2026-03-06T04:19:07.4284647Z         
2026-03-06T04:19:07.4285316Z           with mongodbatlas_stream_connection.test,
2026-03-06T04:19:07.4286174Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-03-06T04:19:07.4286890Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-03-06T04:19:07.4287258Z         
2026-03-06T04:19:07.4287736Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-03-06T04:19:07.4288246Z         'NOT_FOUND', timeout: 3h0m0s)
2026-03-06T04:19:07.4288658Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (10802.83s)
```


## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-22 01:13](#error-2026-02-22t0113090000) |  | qa | 16.10s

### Timeline
- 2026-02-04 PASS 7 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 6 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 5 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 7 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T01:13:09+00:00
```
2026-02-22T01:13:09.2648917Z === RUN   TestAccStreamRSStreamConnection_instanceName
2026-02-22T01:13:09.2658279Z === CONT  TestAccStreamRSStreamConnection_instanceName
2026-02-22T01:13:09.2688593Z === NAME  TestAccStreamRSStreamConnection_instanceName
2026-02-22T01:13:09.2689237Z     resource_stream_connection_test.go:507: Step 1/2 error: Error running apply: exit status 1
2026-02-22T01:13:09.2689703Z         
2026-02-22T01:13:09.2690084Z         Error: error waiting for stream connection to be ready
2026-02-22T01:13:09.2690425Z         
2026-02-22T01:13:09.2690768Z           with mongodbatlas_stream_connection.test,
2026-02-22T01:13:09.2691462Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-02-22T01:13:09.2693067Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-02-22T01:13:09.2693415Z         
2026-02-22T01:13:09.2693701Z         couldn't find resource (4 retries)
2026-02-22T01:13:09.2694103Z --- FAIL: TestAccStreamRSStreamConnection_instanceName (16.98s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 6 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 5 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
