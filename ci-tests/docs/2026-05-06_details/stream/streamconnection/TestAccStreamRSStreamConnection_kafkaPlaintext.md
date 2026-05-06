# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 9)
Success rate: 76.32%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 01:36](#error-2026-04-09t0136130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-04-13 04:31](#error-2026-04-13t0431220000) |  | dev | timeout | 10802.05s
[2026-04-16 00:56](#error-2026-04-16t0056520000) |  | dev | flaky_500 | 60.04s
[2026-04-18 01:35](#error-2026-04-18t0135290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.01s
[2026-04-25 01:23](#error-2026-04-25t0123070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.01s
[2026-04-30 01:31](#error-2026-04-30t0131460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 38 seconds
- 2026-04-08 PASS 13 seconds
- 2026-04-09

### Error 2026-04-09T01:36:13+00:00
```
2026-04-09T01:36:13.0012594Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-09T01:36:13.0014194Z     resource_stream_connection_test.go:100: Creating execution project (1): test-acc-tf-p-8871810095380108177
2026-04-09T01:36:13.0015297Z     resource_stream_connection_test.go:100: 
2026-04-09T01:36:13.0017081Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:36:13.0020604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:36:13.0024362Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:36:13.0027790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-09T01:36:13.0031867Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:107
2026-04-09T01:36:13.0035907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:100
2026-04-09T01:36:13.0037475Z         	Error:      	Received unexpected error:
2026-04-09T01:36:13.0041230Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:36:13.0043233Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-09T01:36:13.0046478Z         	Messages:   	Project creation failed: test-acc-tf-p-8871810095380108177, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:36:13.0048898Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (64.78s)
```

- 2026-04-10 PASS 14 seconds
- 2026-04-11 PASS 53 seconds
- 2026-04-12: MISSING
- 2026-04-13

### Error 2026-04-13T04:31:22+00:00
```
2026-04-13T04:31:22.1810962Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-13T04:31:22.1828027Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-13T04:31:22.1867489Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-13T04:31:22.1868149Z     resource_stream_connection_test.go:101: Step 1/3 error: Error running apply: exit status 1
2026-04-13T04:31:22.1868624Z         
2026-04-13T04:31:22.1869039Z         Error: error waiting for stream connection to be ready
2026-04-13T04:31:22.1869389Z         
2026-04-13T04:31:22.1869750Z           with mongodbatlas_stream_connection.test,
2026-04-13T04:31:22.1870467Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-04-13T04:31:22.1871152Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-04-13T04:31:22.1871505Z         
2026-04-13T04:31:22.1872063Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-04-13T04:31:22.1872601Z         'NOT_FOUND', timeout: 3h0m0s)
2026-04-13T04:31:22.1873014Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (10802.47s)
```

- 2026-04-14 PASS 22 seconds
- 2026-04-15 PASS 12 seconds
- 2026-04-16

### Error 2026-04-16T00:56:52+00:00
```
2026-04-16T00:56:52.0145576Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-16T00:56:52.0146518Z     resource_stream_connection_test.go:100: Creating execution project (1): test-acc-tf-p-2931121034529994708
2026-04-16T00:56:52.0147240Z     resource_stream_connection_test.go:100: 
2026-04-16T00:56:52.0148605Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:56:52.0150948Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:56:52.0153215Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:56:52.0154862Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-16T00:56:52.0156429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:107
2026-04-16T00:56:52.0158198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:100
2026-04-16T00:56:52.0159535Z         	Error:      	Received unexpected error:
2026-04-16T00:56:52.0160238Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-04-16T00:56:52.0160764Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-16T00:56:52.0161637Z         	Messages:   	Project creation failed: test-acc-tf-p-2931121034529994708, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-04-16T00:56:52.0162256Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (60.43s)
```

- 2026-04-17 PASS 10 seconds
- 2026-04-18

### Error 2026-04-18T01:35:29+00:00
```
2026-04-18T01:35:29.8911041Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-18T01:35:29.8912300Z     resource_stream_connection_test.go:100: Creating execution project (1): test-acc-tf-p-4375263489500273504
2026-04-18T01:35:29.8913280Z     resource_stream_connection_test.go:100: 
2026-04-18T01:35:29.8914706Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T01:35:29.8917857Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T01:35:29.8920903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T01:35:29.8924016Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-18T01:35:29.8926650Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:107
2026-04-18T01:35:29.8930292Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:100
2026-04-18T01:35:29.8931344Z         	Error:      	Received unexpected error:
2026-04-18T01:35:29.8933282Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:35:29.8934417Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-18T01:35:29.8936177Z         	Messages:   	Project creation failed: test-acc-tf-p-4375263489500273504, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:35:29.8938735Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (91.07s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 10 seconds
- 2026-04-21 PASS 33 seconds
- 2026-04-22 PASS 11 seconds
- 2026-04-23 PASS 42 seconds
- 2026-04-24 PASS 13 seconds
- 2026-04-25

### Error 2026-04-25T01:23:07+00:00
```
2026-04-25T01:23:07.7014775Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-25T01:23:07.7016172Z     resource_stream_connection_test.go:100: Creating execution project (1): test-acc-tf-p-8750350196463783413
2026-04-25T01:23:07.7017273Z     resource_stream_connection_test.go:100: 
2026-04-25T01:23:07.7019078Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-25T01:23:07.7022614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-25T01:23:07.7026466Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-25T01:23:07.7030105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-25T01:23:07.7034748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:107
2026-04-25T01:23:07.7039022Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:100
2026-04-25T01:23:07.7040672Z         	Error:      	Received unexpected error:
2026-04-25T01:23:07.7044648Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T01:23:07.7046712Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-25T01:23:07.7050116Z         	Messages:   	Project creation failed: test-acc-tf-p-8750350196463783413, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T01:23:07.7052424Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (71.08s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 12 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 16 seconds
- 2026-04-30
  - FAIL a minute

### Error 2026-04-30T01:31:46+00:00
```
2026-04-30T01:31:46.2599788Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-30T01:31:46.2601961Z     resource_stream_connection_test.go:100: Creating execution project (1): test-acc-tf-p-4116558070939726911
2026-04-30T01:31:46.2603203Z     resource_stream_connection_test.go:100: 
2026-04-30T01:31:46.2604592Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:31:46.2607252Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:31:46.2610168Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:31:46.2613051Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-30T01:31:46.2616139Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:107
2026-04-30T01:31:46.2618722Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:100
2026-04-30T01:31:46.2619611Z         	Error:      	Received unexpected error:
2026-04-30T01:31:46.2621729Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2623093Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-30T01:31:46.2624893Z         	Messages:   	Project creation failed: test-acc-tf-p-4116558070939726911, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2626130Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (64.78s)
```

  - PASS 17 seconds
- 2026-05-01 PASS 13 seconds
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS 15 seconds
- 2026-05-05 PASS a minute
- 2026-05-06 PASS 12 seconds

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-12 01:27](#error-2026-04-12t0127030000) |  | qa |  | 8.08s
[2026-05-03 01:54](#error-2026-05-03t0154300000) |  | qa | timeout | 1202.07s
[2026-05-04 19:45](#error-2026-05-04t1945450000) | CheckFailure for stream_connection.test at Step: 2 Checks: 1,2,5 | qa |  | 9.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 11 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12

### Error 2026-04-12T01:27:03+00:00
```
2026-04-12T01:27:03.0401981Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-12T01:27:03.0419061Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-12T01:27:03.0437865Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-04-12T01:27:03.0438492Z     resource_stream_connection_test.go:101: Step 2/3 error: Error running apply: exit status 1
2026-04-12T01:27:03.0438952Z         
2026-04-12T01:27:03.0439351Z         Error: Provider produced inconsistent result after apply
2026-04-12T01:27:03.0439703Z         
2026-04-12T01:27:03.0440177Z         When applying changes to mongodbatlas_stream_connection.test, provider
2026-04-12T01:27:03.0440844Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-04-12T01:27:03.0441379Z         unexpected new value: .bootstrap_servers: was
2026-04-12T01:27:03.0441808Z         cty.StringVal("localhost:9093"), but now
2026-04-12T01:27:03.0442255Z         cty.StringVal("localhost:9092,localhost:9092").
2026-04-12T01:27:03.0442570Z         
2026-04-12T01:27:03.0443041Z         This is a bug in the provider, which should be reported in the provider's own
2026-04-12T01:27:03.0443491Z         issue tracker.
2026-04-12T01:27:03.0444708Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (8.82s)
```

- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 13 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 12 seconds
  - PASS 14 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 13 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03

### Error 2026-05-03T01:54:30+00:00
```
2026-05-03T01:54:30.1608616Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-03T01:54:30.1648406Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-03T01:54:30.1768683Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-03T01:54:30.1769345Z     resource_stream_connection_test.go:101: Step 1/3 error: Error running apply: exit status 1
2026-05-03T01:54:30.1769813Z         
2026-05-03T01:54:30.1770216Z         Error: error waiting for stream connection to be ready
2026-05-03T01:54:30.1770556Z         
2026-05-03T01:54:30.1770922Z           with mongodbatlas_stream_connection.test,
2026-05-03T01:54:30.1771653Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-05-03T01:54:30.1772332Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-03T01:54:30.1772677Z         
2026-05-03T01:54:30.1773383Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-03T01:54:30.1773867Z         'NOT_FOUND', timeout: 20m0s)
2026-05-03T01:54:30.1774263Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (1202.67s)
```

- 2026-05-04
  - PASS 13 seconds
  - FAIL 9 seconds

### Error 2026-05-04T19:45:45+00:00
```
2026-05-04T19:45:45.1236408Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-04T19:45:45.1282151Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-04T19:45:45.1298177Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-04T19:45:45.1299909Z     resource_stream_connection_test.go:101: Step 2/3 error: Check failed: Check 2/3 error: Check 1/2 error: Check 5/10 error: data.mongodbatlas_stream_connection.test: Attribute 'bootstrap_servers' expected "localhost:9093", got "localhost:9092,localhost:9092"
2026-05-04T19:45:45.1303086Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (9.57s)
```

- 2026-05-05 PASS 11 seconds
- 2026-05-06 PASS 12 seconds
