# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaPlaintext Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) |  | dev | flaky_500 | 63.03s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.08s
[2026-07-16 03:32](#error-2026-07-16t0332120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.01s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.09s
[2026-08-03 01:33](#error-2026-08-03t0133290000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.5877755Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-07-09T01:15:21.5878657Z     resource_stream_connection_test.go:105: Creating execution project (1): test-acc-tf-p-8300059917893899748
2026-07-09T01:15:21.5879437Z     resource_stream_connection_test.go:105: 
2026-07-09T01:15:21.5880668Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.5882981Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.5885291Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.5887736Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.5890348Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:112
2026-07-09T01:15:21.5893371Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:105
2026-07-09T01:15:21.5894466Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.5895860Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T01:15:21.5896717Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-07-09T01:15:21.5898106Z         	Messages:   	Project creation failed: test-acc-tf-p-8300059917893899748, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T01:15:21.5899144Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (63.30s)
```

- 2026-07-10 PASS 6 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7130005Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-07-11T01:30:51.7132234Z     resource_stream_connection_test.go:105: Creating execution project (1): test-acc-tf-p-4339359515023216384
2026-07-11T01:30:51.7134628Z     resource_stream_connection_test.go:105: 
2026-07-11T01:30:51.7137826Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7144138Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7147937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7152143Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7156378Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:112
2026-07-11T01:30:51.7161352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:105
2026-07-11T01:30:51.7163026Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7166674Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7169004Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-07-11T01:30:51.7172388Z         	Messages:   	Project creation failed: test-acc-tf-p-4339359515023216384, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7174656Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (91.76s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 6 seconds
- 2026-07-14 PASS 29 seconds
- 2026-07-15 PASS 6 seconds
- 2026-07-16

### Error 2026-07-16T03:32:12+00:00
```
2026-07-16T03:32:12.6322115Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-07-16T03:32:12.6323173Z     resource_stream_connection_test.go:105: Creating execution project (1): test-acc-tf-p-5229883117528323642
2026-07-16T03:32:12.6324188Z     resource_stream_connection_test.go:105: 
2026-07-16T03:32:12.6325898Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T03:32:12.6327764Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T03:32:12.6329889Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T03:32:12.6331718Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-16T03:32:12.6333799Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:112
2026-07-16T03:32:12.6336717Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:105
2026-07-16T03:32:12.6337639Z         	Error:      	Received unexpected error:
2026-07-16T03:32:12.6339603Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T03:32:12.6340774Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-07-16T03:32:12.6342600Z         	Messages:   	Project creation failed: test-acc-tf-p-5229883117528323642, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T03:32:12.6343851Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (78.10s)
```

- 2026-07-17 PASS 8 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0241455Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-07-18T01:45:13.0242435Z     resource_stream_connection_test.go:105: Creating execution project (1): test-acc-tf-p-7901207179860255974
2026-07-18T01:45:13.0243165Z     resource_stream_connection_test.go:105: 
2026-07-18T01:45:13.0247212Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0250880Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0254900Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0257694Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-18T01:45:13.0261365Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:112
2026-07-18T01:45:13.0263653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:105
2026-07-18T01:45:13.0264847Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0266845Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0268021Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-07-18T01:45:13.0269855Z         	Messages:   	Project creation failed: test-acc-tf-p-7901207179860255974, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0271333Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (63.00s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3084491Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-07-21T00:59:13.3085232Z     resource_stream_connection_test.go:105: Creating execution project (1): test-acc-tf-p-7283624064657229785
2026-07-21T00:59:13.3085878Z     resource_stream_connection_test.go:105: 
2026-07-21T00:59:13.3086895Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3088754Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3090708Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3093101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3095233Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:112
2026-07-21T00:59:13.3097483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:105
2026-07-21T00:59:13.3098404Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3100406Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3101558Z         	Test:       	TestAccStreamRSStreamConnection_kafkaPlaintext
2026-07-21T00:59:13.3104518Z         	Messages:   	Project creation failed: test-acc-tf-p-7283624064657229785, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3106052Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (70.93s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23 PASS a minute
- 2026-07-24 PASS 6 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 10 seconds
- 2026-07-29 PASS 3 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 4 seconds
- 2026-08-01 PASS 9 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:29+00:00
```
2026-08-03T01:33:29.9853673Z === RUN   TestAccStreamRSStreamConnection_kafkaPlaintext
2026-08-03T01:33:29.9877721Z    test_name=TestAccStreamRSStreamConnection_kafkaPlaintext test_terraform_path=/home/runner/work/_temp/15c4ca8d-89c8-44b4-a2b6-45595e5990a6/terraform
2026-08-03T01:33:29.9878718Z     resource_stream_connection_test.go:106: Step 1/3 error: Error running apply: exit status 1
2026-08-03T01:33:29.9879219Z         
2026-08-03T01:33:29.9879547Z         Error: error creating resource
2026-08-03T01:33:29.9879865Z         
2026-08-03T01:33:29.9880253Z           with mongodbatlas_stream_connection.test,
2026-08-03T01:33:29.9880997Z           on terraform_plugin_test.tf line 25, in resource "mongodbatlas_stream_connection" "test":
2026-08-03T01:33:29.9881691Z           25: 		resource "mongodbatlas_stream_connection" "test" {
2026-08-03T01:33:29.9882060Z         
2026-08-03T01:33:29.9882300Z         Post
2026-08-03T01:33:29.9883147Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/streams/test-acc-tf-s-8498845148385410232/connections":
2026-08-03T01:33:29.9885338Z         dial tcp 3.228.247.77:443: i/o timeout
2026-08-03T01:33:29.9885820Z --- FAIL: TestAccStreamRSStreamConnection_kafkaPlaintext (5.31s)
```

  - PASS 5 seconds
  - PASS 4 seconds
- 2026-08-04 PASS 9 seconds
- 2026-08-05 PASS 8 seconds
- 2026-08-06 PASS 10 seconds
- 2026-08-07 PASS 8 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 9 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 8 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 7 seconds
  - PASS 5 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 5 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
