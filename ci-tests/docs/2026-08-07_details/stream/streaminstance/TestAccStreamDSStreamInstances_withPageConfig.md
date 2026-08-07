# stream/streaminstance/TestAccStreamDSStreamInstances_withPageConfig Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) |  | dev | flaky_500 | 63.03s
[2026-07-14 02:16](#error-2026-07-14t0216380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-07-16 03:32](#error-2026-07-16t0332120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.08s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.07s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.04s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6146860Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-07-09T01:15:21.6147424Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-3776180865509257511
2026-07-09T01:15:21.6147905Z     data_source_stream_instances_test.go:14: 
2026-07-09T01:15:21.6148740Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6150105Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6151461Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6152998Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-07-09T01:15:21.6153687Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6154394Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T01:15:21.6154925Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-07-09T01:15:21.6155886Z         	Messages:   	Project creation failed: test-acc-tf-p-3776180865509257511, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T01:15:21.6156520Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (63.31s)
```

- 2026-07-10 PASS 4 seconds
- 2026-07-11 PASS 36 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 5 seconds
- 2026-07-14

### Error 2026-07-14T02:16:38+00:00
```
2026-07-14T02:16:38.9447664Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-07-14T02:16:38.9448384Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-6557147893569010286
2026-07-14T02:16:38.9448989Z     data_source_stream_instances_test.go:14: 
2026-07-14T02:16:38.9450067Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T02:16:38.9451968Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T02:16:38.9453822Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T02:16:38.9455839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-07-14T02:16:38.9456710Z         	Error:      	Received unexpected error:
2026-07-14T02:16:38.9458667Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T02:16:38.9459908Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-07-14T02:16:38.9461743Z         	Messages:   	Project creation failed: test-acc-tf-p-6557147893569010286, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T02:16:38.9462941Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (63.11s)
```

- 2026-07-15 PASS 5 seconds
- 2026-07-16

### Error 2026-07-16T03:32:12+00:00
```
2026-07-16T03:32:12.6430176Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-07-16T03:32:12.6430900Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-2078286893847816187
2026-07-16T03:32:12.6431516Z     data_source_stream_instances_test.go:14: 
2026-07-16T03:32:12.6432493Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T03:32:12.6434307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T03:32:12.6436426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T03:32:12.6438483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-07-16T03:32:12.6439367Z         	Error:      	Received unexpected error:
2026-07-16T03:32:12.6441307Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T03:32:12.6442424Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-07-16T03:32:12.6444367Z         	Messages:   	Project creation failed: test-acc-tf-p-2078286893847816187, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T03:32:12.6446182Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (72.75s)
```

- 2026-07-17 PASS 7 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0373700Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-07-18T01:45:13.0374763Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-3857783600875073542
2026-07-18T01:45:13.0375415Z     data_source_stream_instances_test.go:14: 
2026-07-18T01:45:13.0376405Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0378259Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0380101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0382180Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-07-18T01:45:13.0383087Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0385298Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0387579Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-07-18T01:45:13.0389450Z         	Messages:   	Project creation failed: test-acc-tf-p-3857783600875073542, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0390738Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (84.69s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3420980Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-07-21T00:59:13.3421703Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-5456904278131487193
2026-07-21T00:59:13.3422464Z     data_source_stream_instances_test.go:14: 
2026-07-21T00:59:13.3423463Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3425313Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3427166Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3429265Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-07-21T00:59:13.3430166Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3432163Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3433434Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-07-21T00:59:13.3435292Z         	Messages:   	Project creation failed: test-acc-tf-p-5456904278131487193, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3436569Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (84.44s)
```

- 2026-07-22 PASS 6 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.5888974Z === RUN   TestAccStreamDSStreamInstances_withPageConfig
2026-07-23T03:35:04.5890295Z     data_source_stream_instances_test.go:14: Creating execution project (1): test-acc-tf-p-8015952684372729389
2026-07-23T03:35:04.5891319Z     data_source_stream_instances_test.go:14: 
2026-07-23T03:35:04.5892910Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.5896028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.5899202Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.5902855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/data_source_stream_instances_test.go:14
2026-07-23T03:35:04.5904369Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.5907792Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.5909598Z         	Test:       	TestAccStreamDSStreamInstances_withPageConfig
2026-07-23T03:35:04.5912616Z         	Messages:   	Project creation failed: test-acc-tf-p-8015952684372729389, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.5914638Z --- FAIL: TestAccStreamDSStreamInstances_withPageConfig (63.54s)
```

- 2026-07-24 PASS 4 seconds
- 2026-07-25 PASS 4 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29 PASS 6 seconds
- 2026-07-30 PASS 3 seconds
- 2026-07-31 PASS 4 seconds
- 2026-08-01 PASS 6 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 6 seconds
- 2026-08-04 PASS 4 seconds
- 2026-08-05 PASS 5 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 5 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 4 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 5 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 5 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 4 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 seconds
  - PASS 4 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
