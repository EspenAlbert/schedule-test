# stream/streaminstance/TestAccStreamDSStreamInstances_withPageConfig Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 6)
Success rate: 84.21%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 04:23](#error-2026-04-07t0423270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.10s
[2026-04-09 01:36](#error-2026-04-09t0136130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-04-11 01:13](#error-2026-04-11t0113150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-04-16 00:56](#error-2026-04-16t0056520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.03s
[2026-04-18 01:35](#error-2026-04-18t0135290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s
[2026-04-30 01:31](#error-2026-04-30t0131460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T04:23:27+00:00
```
2026-04-07T04:23:27.1356431Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-04-07T04:23:27.1357530Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-5933291940931646416
2026-04-07T04:23:27.1358566Z     data_source_stream_instances_test.go:14: 
2026-04-07T04:23:27.1360263Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-07T04:23:27.1363643Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-07T04:23:27.1366790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-07T04:23:27.1370409Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-04-07T04:23:27.1372048Z         	Error:      	Received unexpected error:
2026-04-07T04:23:27.1373958Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T04:23:27.1375036Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-04-07T04:23:27.1376770Z         	Messages:   	Project creation failed: test-acc-tf-p-5933291940931646416, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T04:23:27.1377943Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (61.96s)
```

- 2026-04-08 PASS 5 seconds
- 2026-04-09

### Error 2026-04-09T01:36:13+00:00
```
2026-04-09T01:36:13.0162141Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-04-09T01:36:13.0163384Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-3916410010392937725
2026-04-09T01:36:13.0164452Z     data_source_stream_instances_test.go:14: 
2026-04-09T01:36:13.0166170Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T01:36:13.0169652Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T01:36:13.0172988Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T01:36:13.0176956Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-04-09T01:36:13.0178719Z         	Error:      	Received unexpected error:
2026-04-09T01:36:13.0182311Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:36:13.0184256Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-04-09T01:36:13.0187533Z         	Messages:   	Project creation failed: test-acc-tf-p-3916410010392937725, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T01:36:13.0189966Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (61.58s)
```

- 2026-04-10 PASS 5 seconds
- 2026-04-11

### Error 2026-04-11T01:13:15+00:00
```
2026-04-11T01:13:15.9811258Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-04-11T01:13:15.9812464Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-9003286737367974546
2026-04-11T01:13:15.9813505Z     data_source_stream_instances_test.go:14: 
2026-04-11T01:13:15.9815204Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:13:15.9818875Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:13:15.9822156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:13:15.9825903Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-04-11T01:13:15.9827438Z         	Error:      	Received unexpected error:
2026-04-11T01:13:15.9831160Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9833082Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-04-11T01:13:15.9836288Z         	Messages:   	Project creation failed: test-acc-tf-p-9003286737367974546, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9838594Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (63.46s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 5 seconds
- 2026-04-14 PASS 9 seconds
- 2026-04-15 PASS 4 seconds
- 2026-04-16

### Error 2026-04-16T00:56:52+00:00
```
2026-04-16T00:56:52.0238302Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-04-16T00:56:52.0238858Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-2237039738904830153
2026-04-16T00:56:52.0239318Z     data_source_stream_instances_test.go:14: 
2026-04-16T00:56:52.0240146Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:56:52.0241510Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:56:52.0242866Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:56:52.0244413Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-04-16T00:56:52.0245085Z         	Error:      	Received unexpected error:
2026-04-16T00:56:52.0246688Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:56:52.0247507Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-04-16T00:56:52.0249057Z         	Messages:   	Project creation failed: test-acc-tf-p-2237039738904830153, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:56:52.0249971Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (68.35s)
```

- 2026-04-17 PASS 4 seconds
- 2026-04-18

### Error 2026-04-18T01:35:29+00:00
```
2026-04-18T01:35:29.8987604Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-04-18T01:35:29.8988599Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-6421171317584498136
2026-04-18T01:35:29.8989213Z     data_source_stream_instances_test.go:14: 
2026-04-18T01:35:29.8990155Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T01:35:29.8991907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T01:35:29.8993638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T01:35:29.8995648Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-04-18T01:35:29.8996512Z         	Error:      	Received unexpected error:
2026-04-18T01:35:29.8998581Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:35:29.8999665Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-04-18T01:35:29.9001391Z         	Messages:   	Project creation failed: test-acc-tf-p-6421171317584498136, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:35:29.9002602Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (67.15s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 4 seconds
- 2026-04-21 PASS 10 seconds
- 2026-04-22 PASS 5 seconds
- 2026-04-23 PASS a minute
- 2026-04-24 PASS 5 seconds
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS 5 seconds
- 2026-04-28 PASS 40 seconds
- 2026-04-29 PASS 6 seconds
- 2026-04-30
  - FAIL a minute

### Error 2026-04-30T01:31:46+00:00
```
2026-04-30T01:31:46.2747863Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-04-30T01:31:46.2748576Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-2272133415456491610
2026-04-30T01:31:46.2749184Z     data_source_stream_instances_test.go:14: 
2026-04-30T01:31:46.2750148Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:31:46.2752224Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:31:46.2754030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:31:46.2756047Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-04-30T01:31:46.2756916Z         	Error:      	Received unexpected error:
2026-04-30T01:31:46.2758978Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2760088Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-04-30T01:31:46.2762016Z         	Messages:   	Project creation failed: test-acc-tf-p-2272133415456491610, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2763262Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (73.94s)
```

  - PASS 7 seconds
- 2026-05-01 PASS 4 seconds
- 2026-05-02 PASS 54 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 5 seconds
- 2026-05-05 PASS a minute
- 2026-05-06 PASS 4 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 5 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 7 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 4 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 5 seconds
  - PASS 6 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 4 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 5 seconds
- 2026-05-04
  - PASS 4 seconds
  - PASS 6 seconds
- 2026-05-05 PASS 5 seconds
- 2026-05-06 PASS 4 seconds
