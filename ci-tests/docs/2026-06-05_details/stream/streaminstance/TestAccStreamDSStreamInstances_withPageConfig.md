# stream/streaminstance/TestAccStreamDSStreamInstances_withPageConfig Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 7)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.02s
[2026-05-14 02:05](#error-2026-05-14t0205340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.10s
[2026-05-16 01:46](#error-2026-05-16t0146080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s
[2026-05-21 01:56](#error-2026-05-21t0156320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.06s
[2026-05-26 03:14](#error-2026-05-26t0314060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.08s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.04s
[2026-05-30 02:30](#error-2026-05-30t0230490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS a minute
  - PASS 5 seconds
- 2026-05-08 PASS 5 seconds
- 2026-05-09
  - PASS 5 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1185899Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-05-09T01:47:38.1186648Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-2752365259615313212
2026-05-09T01:47:38.1187269Z     data_source_stream_instances_test.go:14: 
2026-05-09T01:47:38.1188731Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1190601Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1192761Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1194833Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-05-09T01:47:38.1195749Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1197700Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1198812Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-05-09T01:47:38.1200767Z         	Messages:   	Project creation failed: test-acc-tf-p-2752365259615313212, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1202338Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (73.16s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 seconds
- 2026-05-12 PASS 33 seconds
- 2026-05-13 PASS 6 seconds
- 2026-05-14

### Error 2026-05-14T02:05:34+00:00
```
2026-05-14T02:05:34.9733984Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-05-14T02:05:34.9734695Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-5984486810049140348
2026-05-14T02:05:34.9735295Z     data_source_stream_instances_test.go:14: 
2026-05-14T02:05:34.9736255Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-14T02:05:34.9739105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-14T02:05:34.9741552Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-14T02:05:34.9743876Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-05-14T02:05:34.9744777Z         	Error:      	Received unexpected error:
2026-05-14T02:05:34.9746745Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T02:05:34.9747831Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-05-14T02:05:34.9750142Z         	Messages:   	Project creation failed: test-acc-tf-p-5984486810049140348, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T02:05:34.9751333Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (62.97s)
```

- 2026-05-15 PASS 4 seconds
- 2026-05-16

### Error 2026-05-16T01:46:08+00:00
```
2026-05-16T01:46:08.0937083Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-05-16T01:46:08.0937791Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-5972192800454247696
2026-05-16T01:46:08.0938389Z     data_source_stream_instances_test.go:14: 
2026-05-16T01:46:08.0939357Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:08.0941251Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:08.0943236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:08.0945299Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-05-16T01:46:08.0946177Z         	Error:      	Received unexpected error:
2026-05-16T01:46:08.0948273Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.0949388Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-05-16T01:46:08.0951208Z         	Messages:   	Project creation failed: test-acc-tf-p-5972192800454247696, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.0952445Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (68.56s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 4 seconds
- 2026-05-19 PASS 19 seconds
- 2026-05-20
  - PASS 5 seconds
  - PASS 7 seconds
- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6299856Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-05-21T01:56:32.6300558Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-8753837260470230822
2026-05-21T01:56:32.6301152Z     data_source_stream_instances_test.go:14: 
2026-05-21T01:56:32.6302145Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:56:32.6304301Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:56:32.6306185Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:56:32.6308355Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-05-21T01:56:32.6309220Z         	Error:      	Received unexpected error:
2026-05-21T01:56:32.6311120Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:56:32.6312207Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-05-21T01:56:32.6313953Z         	Messages:   	Project creation failed: test-acc-tf-p-8753837260470230822, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:56:32.6315254Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (71.55s)
```

- 2026-05-22 PASS 5 seconds
- 2026-05-23 PASS 16 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 7 seconds
- 2026-05-26

### Error 2026-05-26T03:14:06+00:00
```
2026-05-26T03:14:06.8720054Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-05-26T03:14:06.8720766Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-2815245150461027586
2026-05-26T03:14:06.8721383Z     data_source_stream_instances_test.go:14: 
2026-05-26T03:14:06.8722350Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T03:14:06.8724170Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T03:14:06.8726130Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T03:14:06.8728478Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-05-26T03:14:06.8729378Z         	Error:      	Received unexpected error:
2026-05-26T03:14:06.8731349Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8732467Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-05-26T03:14:06.8734292Z         	Messages:   	Project creation failed: test-acc-tf-p-2815245150461027586, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8735830Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (70.75s)
```

- 2026-05-27 PASS 6 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5214261Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-05-28T02:40:17.5214966Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-4220370736931938881
2026-05-28T02:40:17.5215573Z     data_source_stream_instances_test.go:14: 
2026-05-28T02:40:17.5216537Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5218567Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5220381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5222561Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-05-28T02:40:17.5223443Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5225385Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5226485Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-05-28T02:40:17.5228546Z         	Messages:   	Project creation failed: test-acc-tf-p-4220370736931938881, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5229790Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (68.41s)
```

- 2026-05-29 PASS 6 seconds
- 2026-05-30

### Error 2026-05-30T02:30:49+00:00
```
2026-05-30T02:30:49.6682001Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-05-30T02:30:49.6682751Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-4974834861866223260
2026-05-30T02:30:49.6683390Z     data_source_stream_instances_test.go:14: 
2026-05-30T02:30:49.6684386Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T02:30:49.6686209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T02:30:49.6688031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T02:30:49.6690081Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-05-30T02:30:49.6691161Z         	Error:      	Received unexpected error:
2026-05-30T02:30:49.6693159Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6694275Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-05-30T02:30:49.6696076Z         	Messages:   	Project creation failed: test-acc-tf-p-4974834861866223260, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6697283Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (94.85s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 6 seconds
- 2026-06-02 PASS 39 seconds
- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS a minute
- 2026-06-05 PASS 5 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 4 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 4 seconds
- 2026-05-25 PASS 9 seconds
- 2026-05-26 PASS 6 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
