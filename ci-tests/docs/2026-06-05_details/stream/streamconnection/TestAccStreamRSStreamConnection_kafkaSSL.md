# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaSSL Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.09s
[2026-05-22 03:03](#error-2026-05-22t0303430000) |  | dev | timeout | 1202.04s
[2026-05-30 02:30](#error-2026-05-30t0230490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 2 minutes
  - PASS 2 minutes
- 2026-05-08 PASS 3 minutes
- 2026-05-09
  - PASS 10 minutes
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1096135Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-05-09T01:47:38.1096831Z     resource_stream_connection_test.go:259: Creating execution project (1): test-acc-tf-p-933257867834057309
2026-05-09T01:47:38.1097430Z     resource_stream_connection_test.go:259: 
2026-05-09T01:47:38.1098387Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1100188Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1102248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1104067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1106141Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:259
2026-05-09T01:47:38.1107423Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:47:38.1107957Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1109898Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1110973Z         	Test:       	TestAccStreamRSStreamConnection_kafkaSSL
2026-05-09T01:47:38.1113015Z         	Messages:   	Project creation failed: test-acc-tf-p-933257867834057309, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1114242Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (74.91s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 3 minutes
- 2026-05-12 PASS 4 minutes
- 2026-05-13 PASS 3 minutes
- 2026-05-14 PASS 2 minutes
- 2026-05-15 PASS 2 minutes
- 2026-05-16 PASS 4 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 3 minutes
- 2026-05-19 PASS 4 minutes
- 2026-05-20
  - PASS 3 minutes
  - PASS 2 minutes
- 2026-05-21 PASS 3 minutes
- 2026-05-22

### Error 2026-05-22T03:03:43+00:00
```
2026-05-22T03:03:43.9798029Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-05-22T03:03:43.9810186Z === CONT  TestAccStreamRSStreamConnection_kafkaSSL
2026-05-22T03:03:43.9837879Z === NAME  TestAccStreamRSStreamConnection_kafkaSSL
2026-05-22T03:03:43.9838381Z     resource_stream_connection_test.go:268: Step 1/3 error: Error running apply: exit status 1
2026-05-22T03:03:43.9838742Z         
2026-05-22T03:03:43.9839334Z         Error: error waiting for stream connection to be ready
2026-05-22T03:03:43.9839766Z         
2026-05-22T03:03:43.9840227Z           with mongodbatlas_stream_connection.test,
2026-05-22T03:03:43.9841010Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_stream_connection" "test":
2026-05-22T03:03:43.9841538Z           12: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-22T03:03:43.9841823Z         
2026-05-22T03:03:43.9842196Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-22T03:03:43.9842582Z         'NOT_FOUND', timeout: 20m0s)
2026-05-22T03:03:43.9842894Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (1202.36s)
```

- 2026-05-23 PASS 2 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 3 minutes
- 2026-05-26 PASS 2 minutes
- 2026-05-27 PASS 2 minutes
- 2026-05-28 PASS 2 minutes
- 2026-05-29 PASS 3 minutes
- 2026-05-30

### Error 2026-05-30T02:30:49+00:00
```
2026-05-30T02:30:49.6598119Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-05-30T02:30:49.6598841Z     resource_stream_connection_test.go:259: Creating execution project (1): test-acc-tf-p-1564825747162161937
2026-05-30T02:30:49.6599471Z     resource_stream_connection_test.go:259: 
2026-05-30T02:30:49.6600459Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T02:30:49.6602495Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T02:30:49.6604538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T02:30:49.6606361Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-30T02:30:49.6608434Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:259
2026-05-30T02:30:49.6609746Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T02:30:49.6610310Z         	Error:      	Received unexpected error:
2026-05-30T02:30:49.6612564Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6613663Z         	Test:       	TestAccStreamRSStreamConnection_kafkaSSL
2026-05-30T02:30:49.6615468Z         	Messages:   	Project creation failed: test-acc-tf-p-1564825747162161937, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6616664Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (67.26s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 2 minutes
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5545847Z === RUN   TestAccStreamRSStreamConnection_kafkaSSL
2026-06-02T01:54:34.5546561Z     resource_stream_connection_test.go:259: Creating execution project (1): test-acc-tf-p-2496678488631941952
2026-06-02T01:54:34.5547166Z     resource_stream_connection_test.go:259: 
2026-06-02T01:54:34.5548106Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5549767Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5551464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5553131Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-06-02T01:54:34.5555244Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:259
2026-06-02T01:54:34.5556512Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:54:34.5557074Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5558855Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5559899Z         	Test:       	TestAccStreamRSStreamConnection_kafkaSSL
2026-06-02T01:54:34.5561551Z         	Messages:   	Project creation failed: test-acc-tf-p-2496678488631941952, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5562717Z --- FAIL: TestAccStreamRSStreamConnection_kafkaSSL (82.74s)
```

- 2026-06-03 PASS 2 minutes
- 2026-06-04 PASS 2 minutes
- 2026-06-05 PASS 4 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 3 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 3 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 3 minutes
- 2026-05-25 PASS 3 minutes
- 2026-05-26 PASS 2 minutes
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 2 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
