# project/projectipaddresses/TestAccProjectIPAddressesDS_basic Test Details
# Found 37 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 31) FAIL(x 6)
Success rate: 83.78%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.04s
[2026-07-11 00:54](#error-2026-07-11t0054380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.10s
[2026-07-16 00:48](#error-2026-07-16t0048470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-07-18 00:49](#error-2026-07-18t0049470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.00s
[2026-07-21 00:50](#error-2026-07-21t0050320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.01s
[2026-07-23 00:48](#error-2026-07-23t0048460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:39+00:00
```
2026-07-09T01:01:39.8917137Z === RUN   TestAccProjectIPAddressesDS_basic
2026-07-09T01:01:39.8917740Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-2888267812701811174
2026-07-09T01:01:39.8918252Z     data_source_test.go:13: 
2026-07-09T01:01:39.8919195Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:01:39.8921054Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:01:39.8923300Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:01:39.8925306Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-07-09T01:01:39.8926150Z         	Error:      	Received unexpected error:
2026-07-09T01:01:39.8928159Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:39.8929333Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-07-09T01:01:39.8931158Z         	Messages:   	Project creation failed: test-acc-tf-p-2888267812701811174, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:01:39.8932374Z --- FAIL: TestAccProjectIPAddressesDS_basic (81.37s)
```

- 2026-07-10 PASS 5 seconds
- 2026-07-11

### Error 2026-07-11T00:54:38+00:00
```
2026-07-11T00:54:38.5883009Z === RUN   TestAccProjectIPAddressesDS_basic
2026-07-11T00:54:38.5883604Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-7540704467395478379
2026-07-11T00:54:38.5884116Z     data_source_test.go:13: 
2026-07-11T00:54:38.5885056Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:38.5886913Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:38.5888884Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:38.5890883Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-07-11T00:54:38.5891735Z         	Error:      	Received unexpected error:
2026-07-11T00:54:38.5893730Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5894787Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-07-11T00:54:38.5896594Z         	Messages:   	Project creation failed: test-acc-tf-p-7540704467395478379, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:38.5897931Z --- FAIL: TestAccProjectIPAddressesDS_basic (63.98s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 4 seconds
- 2026-07-14 PASS 24 seconds
- 2026-07-15 PASS 5 seconds
- 2026-07-16

### Error 2026-07-16T00:48:47+00:00
```
2026-07-16T00:48:47.7374031Z === RUN   TestAccProjectIPAddressesDS_basic
2026-07-16T00:48:47.7374629Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-3541204502925316922
2026-07-16T00:48:47.7375142Z     data_source_test.go:13: 
2026-07-16T00:48:47.7376060Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:48:47.7377881Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:48:47.7379702Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:48:47.7381927Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-07-16T00:48:47.7382776Z         	Error:      	Received unexpected error:
2026-07-16T00:48:47.7384877Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:47.7385936Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-07-16T00:48:47.7387711Z         	Messages:   	Project creation failed: test-acc-tf-p-3541204502925316922, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:48:47.7389105Z --- FAIL: TestAccProjectIPAddressesDS_basic (62.23s)
```

- 2026-07-17 PASS 3 seconds
- 2026-07-18

### Error 2026-07-18T00:49:47+00:00
```
2026-07-18T00:49:47.1210174Z === RUN   TestAccProjectIPAddressesDS_basic
2026-07-18T00:49:47.1210997Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-2917243140001264257
2026-07-18T00:49:47.1211521Z     data_source_test.go:13: 
2026-07-18T00:49:47.1212478Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:49:47.1214352Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:49:47.1216204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:49:47.1218215Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-07-18T00:49:47.1219071Z         	Error:      	Received unexpected error:
2026-07-18T00:49:47.1221275Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.1222361Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-07-18T00:49:47.1224312Z         	Messages:   	Project creation failed: test-acc-tf-p-2917243140001264257, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:49:47.1225536Z --- FAIL: TestAccProjectIPAddressesDS_basic (87.00s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:50:32+00:00
```
2026-07-21T00:50:32.6295331Z === RUN   TestAccProjectIPAddressesDS_basic
2026-07-21T00:50:32.6296417Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-4608325615592665253
2026-07-21T00:50:32.6297140Z     data_source_test.go:13: 
2026-07-21T00:50:32.6298890Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:50:32.6302374Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:50:32.6305335Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:50:32.6308837Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-07-21T00:50:32.6310163Z         	Error:      	Received unexpected error:
2026-07-21T00:50:32.6313936Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:50:32.6315583Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-07-21T00:50:32.6318947Z         	Messages:   	Project creation failed: test-acc-tf-p-4608325615592665253, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:50:32.6320878Z --- FAIL: TestAccProjectIPAddressesDS_basic (73.11s)
```

- 2026-07-22 PASS 4 seconds
- 2026-07-23

### Error 2026-07-23T00:48:46+00:00
```
2026-07-23T00:48:46.3654152Z === RUN   TestAccProjectIPAddressesDS_basic
2026-07-23T00:48:46.3654763Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-2945122193933497560
2026-07-23T00:48:46.3655289Z     data_source_test.go:13: 
2026-07-23T00:48:46.3656214Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:46.3657991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:46.3659764Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:46.3661843Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-07-23T00:48:46.3662686Z         	Error:      	Received unexpected error:
2026-07-23T00:48:46.3664647Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:46.3665816Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-07-23T00:48:46.3667551Z         	Messages:   	Project creation failed: test-acc-tf-p-2945122193933497560, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:46.3668674Z --- FAIL: TestAccProjectIPAddressesDS_basic (64.35s)
```

- 2026-07-24 PASS 3 seconds
- 2026-07-25 PASS 3 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 seconds
- 2026-07-28 PASS 3 seconds
- 2026-07-29 PASS 3 seconds
- 2026-07-30 PASS 4 seconds
- 2026-07-31
  - PASS 2 seconds
  - PASS 4 seconds
  - PASS 2 seconds
- 2026-08-01 PASS 3 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 6 seconds
  - PASS 5 seconds
- 2026-08-04 PASS 3 seconds
- 2026-08-05 PASS 3 seconds
- 2026-08-06 PASS 3 seconds
- 2026-08-07 PASS 2 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 2 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 3 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 3 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 2 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 2 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
