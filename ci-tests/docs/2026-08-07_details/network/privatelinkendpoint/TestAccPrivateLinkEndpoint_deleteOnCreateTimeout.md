# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_deleteOnCreateTimeout Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 3)
Success rate: 90.62%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.10s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1602359Z === RUN   TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-07-09T00:58:29.1603012Z     resource_test.go:110: Creating execution project (1): test-acc-tf-p-8341154624817526383
2026-07-09T00:58:29.1603693Z     resource_test.go:110: 
2026-07-09T00:58:29.1604638Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1606493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1608333Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1610561Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:110
2026-07-09T00:58:29.1611662Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1613664Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1614825Z         	Test:       	TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-07-09T00:58:29.1616821Z         	Messages:   	Project creation failed: test-acc-tf-p-8341154624817526383, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1618124Z --- FAIL: TestAccPrivateLinkEndpoint_deleteOnCreateTimeout (64.96s)
```

- 2026-07-10 PASS 2 seconds
- 2026-07-11 PASS 2 seconds
- 2026-07-12: MISSING
- 2026-07-13 PASS 2 seconds
- 2026-07-14 PASS 49 seconds
- 2026-07-15 PASS 2 seconds
- 2026-07-16 PASS 2 seconds
- 2026-07-17 PASS 2 seconds
- 2026-07-18 PASS 2 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:21+00:00
```
2026-07-21T00:52:21.4351391Z === RUN   TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-07-21T00:52:21.4352548Z     resource_test.go:110: Creating execution project (1): test-acc-tf-p-3174163030794413731
2026-07-21T00:52:21.4353677Z     resource_test.go:110: 
2026-07-21T00:52:21.4355409Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4358878Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4362355Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4366256Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:110
2026-07-21T00:52:21.4367828Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4371623Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4373880Z         	Test:       	TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-07-21T00:52:21.4377291Z         	Messages:   	Project creation failed: test-acc-tf-p-3174163030794413731, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4379590Z --- FAIL: TestAccPrivateLinkEndpoint_deleteOnCreateTimeout (63.63s)
```

- 2026-07-22 PASS 2 seconds
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2341808Z === RUN   TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-07-23T00:53:54.2342470Z     resource_test.go:110: Creating execution project (1): test-acc-tf-p-5959025188238534097
2026-07-23T00:53:54.2343017Z     resource_test.go:110: 
2026-07-23T00:53:54.2343967Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2345927Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2347771Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2349796Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:110
2026-07-23T00:53:54.2350659Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2352773Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:53:54.2353890Z         	Test:       	TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-07-23T00:53:54.2355843Z         	Messages:   	Project creation failed: test-acc-tf-p-5959025188238534097, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:53:54.2357067Z --- FAIL: TestAccPrivateLinkEndpoint_deleteOnCreateTimeout (73.39s)
```

- 2026-07-24 PASS 2 seconds
- 2026-07-25 PASS 2 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 2 seconds
- 2026-07-28 PASS 2 seconds
- 2026-07-29 PASS 2 seconds
- 2026-07-30 PASS 2 seconds
- 2026-07-31 PASS 2 seconds
- 2026-08-01 PASS 2 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 2 seconds
- 2026-08-04 PASS 2 seconds
- 2026-08-05 PASS 2 seconds
- 2026-08-06 PASS 2 seconds
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
- 2026-07-15 PASS 2 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 2 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 2 seconds
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
