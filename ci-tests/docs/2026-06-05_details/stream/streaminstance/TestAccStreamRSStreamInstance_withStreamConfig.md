# stream/streaminstance/TestAccStreamRSStreamInstance_withStreamConfig Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.07s
[2026-05-16 01:46](#error-2026-05-16t0146080000) |  | dev | flaky_500 | 47.02s
[2026-05-21 01:56](#error-2026-05-21t0156320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s
[2026-05-26 03:14](#error-2026-05-26t0314060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.05s
[2026-05-30 02:30](#error-2026-05-30t0230490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-05-08 PASS 3 seconds
- 2026-05-09
  - PASS 3 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1218039Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-05-09T01:47:38.1218874Z     resource_stream_instance_test.go:45: Creating execution project (1): test-acc-tf-p-8822112941093767921
2026-05-09T01:47:38.1219456Z     resource_stream_instance_test.go:45: 
2026-05-09T01:47:38.1220406Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1222329Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1224130Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1226136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:45
2026-05-09T01:47:38.1226999Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1228943Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1230043Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-05-09T01:47:38.1232263Z         	Messages:   	Project creation failed: test-acc-tf-p-8822112941093767921, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1233932Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (84.68s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 3 seconds
- 2026-05-12 PASS 6 seconds
- 2026-05-13 PASS 4 seconds
- 2026-05-14 PASS 3 seconds
- 2026-05-15 PASS 3 seconds
- 2026-05-16

### Error 2026-05-16T01:46:08+00:00
```
2026-05-16T01:46:08.0968556Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-05-16T01:46:08.0969242Z     resource_stream_instance_test.go:45: Creating execution project (1): test-acc-tf-p-6013247677552819831
2026-05-16T01:46:08.0969818Z     resource_stream_instance_test.go:45: 
2026-05-16T01:46:08.0970770Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:08.0972588Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:08.0974538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:08.0976573Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:45
2026-05-16T01:46:08.0977433Z         	Error:      	Received unexpected error:
2026-05-16T01:46:08.0978366Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-16T01:46:08.0979049Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-05-16T01:46:08.0980291Z         	Messages:   	Project creation failed: test-acc-tf-p-6013247677552819831, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-16T01:46:08.0981107Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (47.25s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 3 seconds
- 2026-05-19 PASS 4 seconds
- 2026-05-20
  - PASS 4 seconds
  - PASS 3 seconds
- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6331037Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-05-21T01:56:32.6331727Z     resource_stream_instance_test.go:45: Creating execution project (1): test-acc-tf-p-4427710516189047015
2026-05-21T01:56:32.6332305Z     resource_stream_instance_test.go:45: 
2026-05-21T01:56:32.6333225Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:56:32.6335090Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:56:32.6336837Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:56:32.6338769Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:45
2026-05-21T01:56:32.6339615Z         	Error:      	Received unexpected error:
2026-05-21T01:56:32.6341879Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:56:32.6342963Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-05-21T01:56:32.6344818Z         	Messages:   	Project creation failed: test-acc-tf-p-4427710516189047015, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:56:32.6345992Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (68.59s)
```

- 2026-05-22 PASS 4 seconds
- 2026-05-23 PASS 8 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 3 seconds
- 2026-05-26

### Error 2026-05-26T03:14:06+00:00
```
2026-05-26T03:14:06.8753286Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-05-26T03:14:06.8753978Z     resource_stream_instance_test.go:45: Creating execution project (1): test-acc-tf-p-6080097649071141774
2026-05-26T03:14:06.8754568Z     resource_stream_instance_test.go:45: 
2026-05-26T03:14:06.8755536Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T03:14:06.8757363Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T03:14:06.8759500Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T03:14:06.8761542Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:45
2026-05-26T03:14:06.8762993Z         	Error:      	Received unexpected error:
2026-05-26T03:14:06.8765055Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8766196Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-05-26T03:14:06.8768297Z         	Messages:   	Project creation failed: test-acc-tf-p-6080097649071141774, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8769565Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (67.30s)
```

- 2026-05-27 PASS 4 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5245932Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-05-28T02:40:17.5246619Z     resource_stream_instance_test.go:45: Creating execution project (1): test-acc-tf-p-3111755874726163121
2026-05-28T02:40:17.5247200Z     resource_stream_instance_test.go:45: 
2026-05-28T02:40:17.5248394Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5250198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5251999Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5254010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:45
2026-05-28T02:40:17.5254877Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5258570Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5259723Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-05-28T02:40:17.5261556Z         	Messages:   	Project creation failed: test-acc-tf-p-3111755874726163121, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5262834Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (70.51s)
```

- 2026-05-29 PASS 5 seconds
- 2026-05-30

### Error 2026-05-30T02:30:49+00:00
```
2026-05-30T02:30:49.6715839Z === RUN   TestAccStreamRSStreamInstance_withStreamConfig
2026-05-30T02:30:49.6716679Z     resource_stream_instance_test.go:45: Creating execution project (1): test-acc-tf-p-6257727028425193406
2026-05-30T02:30:49.6717394Z     resource_stream_instance_test.go:45: 
2026-05-30T02:30:49.6718497Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T02:30:49.6720670Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T02:30:49.6723055Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T02:30:49.6725482Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:45
2026-05-30T02:30:49.6726507Z         	Error:      	Received unexpected error:
2026-05-30T02:30:49.6728893Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6730231Z         	Test:       	TestAccStreamRSStreamInstance_withStreamConfig
2026-05-30T02:30:49.6732508Z         	Messages:   	Project creation failed: test-acc-tf-p-6257727028425193406, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6734069Z --- FAIL: TestAccStreamRSStreamInstance_withStreamConfig (83.80s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 3 seconds
- 2026-06-02 PASS 6 seconds
- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS 4 seconds
- 2026-06-05 PASS 3 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 3 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 3 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 3 seconds
- 2026-05-25 PASS 5 seconds
- 2026-05-26 PASS 4 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 3 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
