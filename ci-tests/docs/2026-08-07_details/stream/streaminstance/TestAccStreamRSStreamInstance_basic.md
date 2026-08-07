# stream/streaminstance/TestAccStreamRSStreamInstance_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 6)
Success rate: 82.35%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.06s
[2026-07-14 02:16](#error-2026-07-14t0216380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 112.06s
[2026-07-16 03:32](#error-2026-07-16t0332120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.02s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.05s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6156871Z === RUN   TestAccStreamRSStreamInstance_basic
2026-07-09T01:15:21.6157392Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-159448339460499889
2026-07-09T01:15:21.6157852Z     resource_stream_instance_test.go:18: 
2026-07-09T01:15:21.6158579Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6159933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6161295Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6162853Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-07-09T01:15:21.6163521Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6164994Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6165896Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-07-09T01:15:21.6167224Z         	Messages:   	Project creation failed: test-acc-tf-p-159448339460499889, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6168273Z --- FAIL: TestAccStreamRSStreamInstance_basic (87.60s)
```

- 2026-07-10 PASS 4 seconds
- 2026-07-11 PASS 7 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 3 seconds
- 2026-07-14

### Error 2026-07-14T02:16:38+00:00
```
2026-07-14T02:16:38.9463395Z === RUN   TestAccStreamRSStreamInstance_basic
2026-07-14T02:16:38.9464079Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-8734584863837915721
2026-07-14T02:16:38.9464673Z     resource_stream_instance_test.go:18: 
2026-07-14T02:16:38.9465628Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T02:16:38.9467406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T02:16:38.9469180Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T02:16:38.9471594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-07-14T02:16:38.9472459Z         	Error:      	Received unexpected error:
2026-07-14T02:16:38.9474409Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T02:16:38.9475435Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-07-14T02:16:38.9477169Z         	Messages:   	Project creation failed: test-acc-tf-p-8734584863837915721, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T02:16:38.9478444Z --- FAIL: TestAccStreamRSStreamInstance_basic (112.59s)
```

- 2026-07-15 PASS 4 seconds
- 2026-07-16

### Error 2026-07-16T03:32:12+00:00
```
2026-07-16T03:32:12.6446646Z === RUN   TestAccStreamRSStreamInstance_basic
2026-07-16T03:32:12.6447339Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-2859520594132356782
2026-07-16T03:32:12.6447941Z     resource_stream_instance_test.go:18: 
2026-07-16T03:32:12.6448909Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T03:32:12.6450716Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T03:32:12.6452520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T03:32:12.6454533Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-07-16T03:32:12.6455683Z         	Error:      	Received unexpected error:
2026-07-16T03:32:12.6457629Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T03:32:12.6458699Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-07-16T03:32:12.6460476Z         	Messages:   	Project creation failed: test-acc-tf-p-2859520594132356782, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T03:32:12.6461686Z --- FAIL: TestAccStreamRSStreamInstance_basic (73.22s)
```

- 2026-07-17 PASS 4 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0391188Z === RUN   TestAccStreamRSStreamInstance_basic
2026-07-18T01:45:13.0391889Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-2142318385677765127
2026-07-18T01:45:13.0392500Z     resource_stream_instance_test.go:18: 
2026-07-18T01:45:13.0393479Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0395621Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0397460Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0399501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-07-18T01:45:13.0400382Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0402766Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0403916Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-07-18T01:45:13.0406011Z         	Messages:   	Project creation failed: test-acc-tf-p-2142318385677765127, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0407250Z --- FAIL: TestAccStreamRSStreamInstance_basic (70.47s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3437028Z === RUN   TestAccStreamRSStreamInstance_basic
2026-07-21T00:59:13.3437702Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-3598980805346156923
2026-07-21T00:59:13.3438299Z     resource_stream_instance_test.go:18: 
2026-07-21T00:59:13.3439274Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3441256Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3443463Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3445537Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-07-21T00:59:13.3446432Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3448433Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3449516Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-07-21T00:59:13.3451344Z         	Messages:   	Project creation failed: test-acc-tf-p-3598980805346156923, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3452846Z --- FAIL: TestAccStreamRSStreamInstance_basic (61.63s)
```

- 2026-07-22 PASS 3 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.5915373Z === RUN   TestAccStreamRSStreamInstance_basic
2026-07-23T03:35:04.5916481Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-5447613841626811032
2026-07-23T03:35:04.5917578Z     resource_stream_instance_test.go:18: 
2026-07-23T03:35:04.5919337Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.5922376Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.5925382Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.5928907Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-07-23T03:35:04.5930369Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.5933600Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.5935321Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-07-23T03:35:04.5938444Z         	Messages:   	Project creation failed: test-acc-tf-p-5447613841626811032, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.5940412Z --- FAIL: TestAccStreamRSStreamInstance_basic (68.45s)
```

- 2026-07-24 PASS 3 seconds
- 2026-07-25 PASS 2 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 seconds
- 2026-07-28 PASS 3 seconds
- 2026-07-29 PASS 3 seconds
- 2026-07-30 PASS 2 seconds
- 2026-07-31 PASS 2 seconds
- 2026-08-01 PASS 3 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-08-04 PASS 3 seconds
- 2026-08-05 PASS 4 seconds
- 2026-08-06 PASS 3 seconds
- 2026-08-07 PASS 4 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 4 seconds
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
  - PASS 2 seconds
  - PASS 3 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
