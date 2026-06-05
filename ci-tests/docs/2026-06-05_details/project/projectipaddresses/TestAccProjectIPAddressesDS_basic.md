# project/projectipaddresses/TestAccProjectIPAddressesDS_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-16 00:58](#error-2026-05-16t0058580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.06s
[2026-05-19 01:05](#error-2026-05-19t0105200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.04s
[2026-05-28 01:01](#error-2026-05-28t0101570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.04s
[2026-05-30 01:08](#error-2026-05-30t0108160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 34 seconds
  - PASS 5 seconds
- 2026-05-08 PASS 3 seconds
- 2026-05-09 PASS a minute
- 2026-05-10: MISSING
- 2026-05-11 PASS 4 seconds
- 2026-05-12 PASS 45 seconds
- 2026-05-13 PASS 2 seconds
- 2026-05-14 PASS a minute
- 2026-05-15 PASS 3 seconds
- 2026-05-16

### Error 2026-05-16T00:58:58+00:00
```
2026-05-16T00:58:58.5618994Z === RUN   TestAccProjectIPAddressesDS_basic
2026-05-16T00:58:58.5619926Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-2723947324908987000
2026-05-16T00:58:58.5620691Z     data_source_test.go:13: 
2026-05-16T00:58:58.5622187Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:58:58.5625311Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:58:58.5628309Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:58:58.5631506Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-05-16T00:58:58.5632812Z         	Error:      	Received unexpected error:
2026-05-16T00:58:58.5636172Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:58.5637817Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-05-16T00:58:58.5640705Z         	Messages:   	Project creation failed: test-acc-tf-p-2723947324908987000, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:58.5642626Z --- FAIL: TestAccProjectIPAddressesDS_basic (74.55s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 3 seconds
- 2026-05-19

### Error 2026-05-19T01:05:20+00:00
```
2026-05-19T01:05:20.5106871Z === RUN   TestAccProjectIPAddressesDS_basic
2026-05-19T01:05:20.5107494Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-1176789096032037747
2026-05-19T01:05:20.5108012Z     data_source_test.go:13: 
2026-05-19T01:05:20.5108934Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:05:20.5110925Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:05:20.5112710Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:05:20.5114638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-05-19T01:05:20.5115466Z         	Error:      	Received unexpected error:
2026-05-19T01:05:20.5117434Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:05:20.5118441Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-05-19T01:05:20.5120160Z         	Messages:   	Project creation failed: test-acc-tf-p-1176789096032037747, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:05:20.5121449Z --- FAIL: TestAccProjectIPAddressesDS_basic (69.36s)
```

- 2026-05-20 PASS 5 seconds
- 2026-05-21 PASS 28 seconds
- 2026-05-22 PASS 3 seconds
- 2026-05-23 PASS 57 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 3 seconds
- 2026-05-26 PASS 32 seconds
- 2026-05-27 PASS 3 seconds
- 2026-05-28

### Error 2026-05-28T01:01:57+00:00
```
2026-05-28T01:01:57.5501750Z === RUN   TestAccProjectIPAddressesDS_basic
2026-05-28T01:01:57.5502456Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-6723585352577514556
2026-05-28T01:01:57.5502948Z     data_source_test.go:13: 
2026-05-28T01:01:57.5503856Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:57.5505641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:57.5507778Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:57.5509729Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-05-28T01:01:57.5510545Z         	Error:      	Received unexpected error:
2026-05-28T01:01:57.5512598Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:57.5513638Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-05-28T01:01:57.5515390Z         	Messages:   	Project creation failed: test-acc-tf-p-6723585352577514556, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:57.5517650Z --- FAIL: TestAccProjectIPAddressesDS_basic (89.39s)
```

- 2026-05-29 PASS 3 seconds
- 2026-05-30

### Error 2026-05-30T01:08:16+00:00
```
2026-05-30T01:08:16.1504796Z === RUN   TestAccProjectIPAddressesDS_basic
2026-05-30T01:08:16.1505397Z     data_source_test.go:13: Creating execution project (1): test-acc-tf-p-817616024904104065
2026-05-30T01:08:16.1505918Z     data_source_test.go:13: 
2026-05-30T01:08:16.1506861Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:08:16.1508709Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:08:16.1510854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:08:16.1512844Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaddresses/data_source_test.go:13
2026-05-30T01:08:16.1513689Z         	Error:      	Received unexpected error:
2026-05-30T01:08:16.1515676Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:16.1516743Z         	Test:       	TestAccProjectIPAddressesDS_basic
2026-05-30T01:08:16.1518536Z         	Messages:   	Project creation failed: test-acc-tf-p-817616024904104065, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:16.1519758Z --- FAIL: TestAccProjectIPAddressesDS_basic (76.49s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 3 seconds
- 2026-06-02 PASS 29 seconds
- 2026-06-03 PASS 2 seconds
- 2026-06-04 PASS 28 seconds
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
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 4 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
