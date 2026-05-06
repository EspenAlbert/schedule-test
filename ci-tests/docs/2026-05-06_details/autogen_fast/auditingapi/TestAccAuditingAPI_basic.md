# autogen_fast/auditingapi/TestAccAuditingAPI_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 5)
Success rate: 85.71%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:42](#error-2026-04-09t0042440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-04-14 00:50](#error-2026-04-14t0050520000) |  | dev | flaky_500 | 58.07s
[2026-04-16 00:53](#error-2026-04-16t0053110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s
[2026-04-30 00:56](#error-2026-04-30t0056370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s
[2026-05-05 00:53](#error-2026-05-05t0053460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 6 seconds
- 2026-04-08 PASS 8 seconds
- 2026-04-09

### Error 2026-04-09T00:42:44+00:00
```
2026-04-09T00:42:44.6724031Z === RUN   TestAccAuditingAPI_basic
2026-04-09T00:42:44.6725058Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-4584150805806422253
2026-04-09T00:42:44.6725976Z     resource_test.go:17: 
2026-04-09T00:42:44.6727674Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:42:44.6731289Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:42:44.6734937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:42:44.6738496Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-04-09T00:42:44.6740031Z         	Error:      	Received unexpected error:
2026-04-09T00:42:44.6743880Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:42:44.6745733Z         	Test:       	TestAccAuditingAPI_basic
2026-04-09T00:42:44.6749038Z         	Messages:   	Project creation failed: test-acc-tf-p-4584150805806422253, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:42:44.6751078Z --- FAIL: TestAccAuditingAPI_basic (64.12s)
```

- 2026-04-10 PASS 4 seconds
- 2026-04-11 PASS 44 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 8 seconds
- 2026-04-14

### Error 2026-04-14T00:50:52+00:00
```
2026-04-14T00:50:52.1126709Z === RUN   TestAccAuditingAPI_basic
2026-04-14T00:50:52.1169866Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-2071950532417228853
2026-04-14T00:50:52.1199130Z     resource_test.go:17: 
2026-04-14T00:50:52.1247928Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T00:50:52.1290111Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T00:50:52.1338934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-14T00:50:52.1361277Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-04-14T00:50:52.1379144Z         	Error:      	Received unexpected error:
2026-04-14T00:50:52.1380797Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-04-14T00:50:52.1381843Z         	Test:       	TestAccAuditingAPI_basic
2026-04-14T00:50:52.1383805Z         	Messages:   	Project creation failed: test-acc-tf-p-2071950532417228853, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-04-14T00:50:52.1449535Z --- FAIL: TestAccAuditingAPI_basic (58.74s)
```

- 2026-04-15 PASS 8 seconds
- 2026-04-16

### Error 2026-04-16T00:53:11+00:00
```
2026-04-16T00:53:11.5750522Z === RUN   TestAccAuditingAPI_basic
2026-04-16T00:53:11.5751617Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-5534851781600381072
2026-04-16T00:53:11.5752400Z     resource_test.go:17: 
2026-04-16T00:53:11.5753889Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:53:11.5756996Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:53:11.5759937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:53:11.5763287Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-04-16T00:53:11.5764691Z         	Error:      	Received unexpected error:
2026-04-16T00:53:11.5767922Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:53:11.5769887Z         	Test:       	TestAccAuditingAPI_basic
2026-04-16T00:53:11.5779749Z         	Messages:   	Project creation failed: test-acc-tf-p-5534851781600381072, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:53:11.5781836Z --- FAIL: TestAccAuditingAPI_basic (64.23s)
```

- 2026-04-17 PASS 7 seconds
- 2026-04-18 PASS 46 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 7 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 5 seconds
- 2026-04-23 PASS a minute
- 2026-04-24 PASS 7 seconds
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS 9 seconds
- 2026-04-28 PASS 6 seconds
- 2026-04-29 PASS 9 seconds
- 2026-04-30

### Error 2026-04-30T00:56:37+00:00
```
2026-04-30T00:56:37.2238239Z === RUN   TestAccAuditingAPI_basic
2026-04-30T00:56:37.2241672Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-8915568701337176864
2026-04-30T00:56:37.2242660Z     resource_test.go:17: 
2026-04-30T00:56:37.2244337Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:56:37.2247390Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:56:37.2252854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:56:37.2256009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-04-30T00:56:37.2257530Z         	Error:      	Received unexpected error:
2026-04-30T00:56:37.2261680Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:56:37.2263944Z         	Test:       	TestAccAuditingAPI_basic
2026-04-30T00:56:37.2266859Z         	Messages:   	Project creation failed: test-acc-tf-p-8915568701337176864, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:56:37.2268953Z --- FAIL: TestAccAuditingAPI_basic (64.15s)
```

- 2026-05-01 PASS 8 seconds
- 2026-05-02 PASS a minute
- 2026-05-03: MISSING
- 2026-05-04 PASS 6 seconds
- 2026-05-05

### Error 2026-05-05T00:53:46+00:00
```
2026-05-05T00:53:46.9760798Z === RUN   TestAccAuditingAPI_basic
2026-05-05T00:53:46.9763875Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-2056116899261719193
2026-05-05T00:53:46.9764607Z     resource_test.go:17: 
2026-05-05T00:53:46.9766031Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:53:46.9769276Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:53:46.9772562Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:53:46.9776364Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-05-05T00:53:46.9777772Z         	Error:      	Received unexpected error:
2026-05-05T00:53:46.9781208Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:46.9783062Z         	Test:       	TestAccAuditingAPI_basic
2026-05-05T00:53:46.9786117Z         	Messages:   	Project creation failed: test-acc-tf-p-2056116899261719193, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:46.9788310Z --- FAIL: TestAccAuditingAPI_basic (75.51s)
```

- 2026-05-06 PASS 4 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 8 seconds
  - PASS 10 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 6 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 7 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 7 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 8 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 5 seconds
- 2026-05-04 PASS 5 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 7 seconds
