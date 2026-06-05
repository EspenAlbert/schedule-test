# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 9)
Success rate: 74.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.04s
[2026-05-13 02:09](#error-2026-05-13t0209440000) |  | dev | timeout | 1202.04s
[2026-05-16 01:46](#error-2026-05-16t0146080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.08s
[2026-05-20 13:17](#error-2026-05-20t1317060000) |  | dev | timeout | 1202.02s
[2026-05-23 02:16](#error-2026-05-23t0216580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.04s
[2026-05-26 03:14](#error-2026-05-26t0314060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.00s
[2026-05-30 02:30](#error-2026-05-30t0230490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.02s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 46 seconds
  - PASS 17 seconds
- 2026-05-08 PASS 13 seconds
- 2026-05-09
  - PASS 11 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1028473Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-09T01:47:38.1029790Z     resource_stream_connection_test.go:105: Creating execution project (1): test-acc-tf-p-8743795920485811448
2026-05-09T01:47:38.1030874Z     resource_stream_connection_test.go:105: 
2026-05-09T01:47:38.1032984Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1036146Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1039680Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1043850Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1047226Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:112
2026-05-09T01:47:38.1049503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:105
2026-05-09T01:47:38.1050420Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1052705Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1053863Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-09T01:47:38.1055705Z         	Messages:   	Project creation failed: test-acc-tf-p-8743795920485811448, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1056979Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (79.43s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 12 seconds
- 2026-05-12 PASS 37 seconds
- 2026-05-13

### Error 2026-05-13T02:09:44+00:00
```
2026-05-13T02:09:44.9778956Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-13T02:09:44.9803031Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-13T02:09:44.9863847Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-13T02:09:44.9864513Z     resource_stream_connection_test.go:106: Step 1/3 error: Error running apply: exit status 1
2026-05-13T02:09:44.9864987Z         
2026-05-13T02:09:44.9865386Z         Error: error waiting for stream connection to be ready
2026-05-13T02:09:44.9865745Z         
2026-05-13T02:09:44.9866104Z           with mongodbatlas_stream_connection.test,
2026-05-13T02:09:44.9867414Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-05-13T02:09:44.9868121Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-13T02:09:44.9868472Z         
2026-05-13T02:09:44.9868945Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-13T02:09:44.9869424Z         'NOT_FOUND', timeout: 20m0s)
2026-05-13T02:09:44.9869832Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (1202.43s)
```

- 2026-05-14 PASS 27 seconds
- 2026-05-15 PASS 11 seconds
- 2026-05-16

### Error 2026-05-16T01:46:08+00:00
```
2026-05-16T01:46:08.0822241Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-16T01:46:08.0823816Z     resource_stream_connection_test.go:105: Creating execution project (1): test-acc-tf-p-2076785482099482475
2026-05-16T01:46:08.0824896Z     resource_stream_connection_test.go:105: 
2026-05-16T01:46:08.0826055Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:08.0827897Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:08.0829748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:08.0831814Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-16T01:46:08.0834213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:112
2026-05-16T01:46:08.0836427Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:105
2026-05-16T01:46:08.0837311Z         	Error:      	Received unexpected error:
2026-05-16T01:46:08.0839506Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.0840738Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-16T01:46:08.0842567Z         	Messages:   	Project creation failed: test-acc-tf-p-2076785482099482475, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.0844023Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (79.83s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 11 seconds
- 2026-05-19 PASS 44 seconds
- 2026-05-20
  - PASS 13 seconds
  - FAIL 20 minutes

### Error 2026-05-20T13:17:06+00:00
```
2026-05-20T13:17:06.2462415Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-20T13:17:06.2489526Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-20T13:17:06.2585589Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-20T13:17:06.2586596Z     resource_stream_connection_test.go:106: Step 1/3 error: Error running apply: exit status 1
2026-05-20T13:17:06.2587316Z         
2026-05-20T13:17:06.2587931Z         Error: error waiting for stream connection to be ready
2026-05-20T13:17:06.2588477Z         
2026-05-20T13:17:06.2589042Z           with mongodbatlas_stream_connection.test,
2026-05-20T13:17:06.2590157Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-05-20T13:17:06.2591212Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-20T13:17:06.2591952Z         
2026-05-20T13:17:06.2592448Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-20T13:17:06.2592943Z         'NOT_FOUND', timeout: 20m0s)
2026-05-20T13:17:06.2593401Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (1202.23s)
```

- 2026-05-21 PASS 28 seconds
- 2026-05-22 PASS 10 seconds
- 2026-05-23

### Error 2026-05-23T02:16:58+00:00
```
2026-05-23T02:16:58.5028460Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-23T02:16:58.5029765Z     resource_stream_connection_test.go:105: Creating execution project (1): test-acc-tf-p-203106945004754243
2026-05-23T02:16:58.5030769Z     resource_stream_connection_test.go:105: 
2026-05-23T02:16:58.5032389Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T02:16:58.5035602Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T02:16:58.5038554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T02:16:58.5041657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-23T02:16:58.5045309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:112
2026-05-23T02:16:58.5049275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:105
2026-05-23T02:16:58.5050691Z         	Error:      	Received unexpected error:
2026-05-23T02:16:58.5054049Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:16:58.5055818Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-23T02:16:58.5058714Z         	Messages:   	Project creation failed: test-acc-tf-p-203106945004754243, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:16:58.5060664Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (67.41s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 13 seconds
- 2026-05-26

### Error 2026-05-26T03:14:06+00:00
```
2026-05-26T03:14:06.8623352Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-26T03:14:06.8624819Z     resource_stream_connection_test.go:105: Creating execution project (1): test-acc-tf-p-4509979040118157325
2026-05-26T03:14:06.8625882Z     resource_stream_connection_test.go:105: 
2026-05-26T03:14:06.8627514Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T03:14:06.8631127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T03:14:06.8634306Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T03:14:06.8637598Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-26T03:14:06.8640735Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:112
2026-05-26T03:14:06.8643158Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:105
2026-05-26T03:14:06.8644071Z         	Error:      	Received unexpected error:
2026-05-26T03:14:06.8646047Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8647345Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-26T03:14:06.8649446Z         	Messages:   	Project creation failed: test-acc-tf-p-4509979040118157325, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8650708Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (67.03s)
```

- 2026-05-27 PASS 9 seconds
- 2026-05-28 PASS 53 seconds
- 2026-05-29 PASS 10 seconds
- 2026-05-30

### Error 2026-05-30T02:30:49+00:00
```
2026-05-30T02:30:49.6536548Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-30T02:30:49.6537975Z     resource_stream_connection_test.go:105: Creating execution project (1): test-acc-tf-p-6314064066030487165
2026-05-30T02:30:49.6539033Z     resource_stream_connection_test.go:105: 
2026-05-30T02:30:49.6540717Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T02:30:49.6543186Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T02:30:49.6545069Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T02:30:49.6546906Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-30T02:30:49.6549078Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:112
2026-05-30T02:30:49.6551901Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:105
2026-05-30T02:30:49.6552824Z         	Error:      	Received unexpected error:
2026-05-30T02:30:49.6554864Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6556008Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-30T02:30:49.6557820Z         	Messages:   	Project creation failed: test-acc-tf-p-6314064066030487165, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6559035Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (69.16s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 6 seconds
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5481458Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-06-02T01:54:34.5482391Z     resource_stream_connection_test.go:105: Creating execution project (1): test-acc-tf-p-4502433464150386878
2026-06-02T01:54:34.5483309Z     resource_stream_connection_test.go:105: 
2026-06-02T01:54:34.5484732Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5487532Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5490660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5493641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-06-02T01:54:34.5496678Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:112
2026-06-02T01:54:34.5499905Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:105
2026-06-02T01:54:34.5500899Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5502703Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5503790Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-06-02T01:54:34.5505766Z         	Messages:   	Project creation failed: test-acc-tf-p-4502433464150386878, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5507194Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (75.00s)
```

- 2026-06-03 PASS 6 seconds
- 2026-06-04 PASS a minute
- 2026-06-05 PASS 5 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-24 02:09](#error-2026-05-24t0209560000) |  | qa | 8.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 11 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 11 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24

### Error 2026-05-24T02:09:56+00:00
```
2026-05-24T02:09:56.3869960Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-24T02:09:56.3906943Z === CONT  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-24T02:09:56.3926778Z === NAME  TestAccStreamRSStreamConnection_kafkaPlaintext
2026-05-24T02:09:56.3927434Z     resource_stream_connection_test.go:106: Step 2/3 error: Error running apply: exit status 1
2026-05-24T02:09:56.3927923Z         
2026-05-24T02:09:56.3928351Z         Error: Provider produced inconsistent result after apply
2026-05-24T02:09:56.3928738Z         
2026-05-24T02:09:56.3929241Z         When applying changes to mongodbatlas_stream_connection.test, provider
2026-05-24T02:09:56.3929956Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-24T02:09:56.3930531Z         unexpected new value: .bootstrap_servers: was
2026-05-24T02:09:56.3931040Z         cty.StringVal("localhost:9093"), but now
2026-05-24T02:09:56.3931542Z         cty.StringVal("localhost:9092,localhost:9092").
2026-05-24T02:09:56.3931906Z         
2026-05-24T02:09:56.3932421Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-24T02:09:56.3932910Z         issue tracker.
2026-05-24T02:09:56.3934835Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (8.83s)
```

- 2026-05-25 PASS 15 seconds
- 2026-05-26 PASS 13 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
