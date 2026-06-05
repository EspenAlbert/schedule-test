# network/privatelinkendpointservice/TestAccPrivateLinkEndpointService_completeAWS Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 8)
Success rate: 74.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:23](#error-2026-05-09t0123390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.07s
[2026-05-16 01:20](#error-2026-05-16t0120140000) |  | dev | flaky_500 | 72.09s
[2026-05-19 01:25](#error-2026-05-19t0125510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.02s
[2026-05-21 01:27](#error-2026-05-21t0127550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.05s
[2026-05-23 01:25](#error-2026-05-23t0125040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.03s
[2026-05-26 02:34](#error-2026-05-26t0234040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.07s
[2026-05-28 01:22](#error-2026-05-28t0122520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-05-30 01:29](#error-2026-05-30t0129140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 6 minutes
  - PASS 43 minutes
- 2026-05-08 PASS 6 minutes
- 2026-05-09

### Error 2026-05-09T01:23:39+00:00
```
2026-05-09T01:23:39.1338579Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-05-09T01:23:39.1339211Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-9045906191953382003
2026-05-09T01:23:39.1339722Z     resource_test.go:26: 
2026-05-09T01:23:39.1340669Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:23:39.1342582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:23:39.1344472Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:23:39.1346538Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-05-09T01:23:39.1347422Z         	Error:      	Received unexpected error:
2026-05-09T01:23:39.1349769Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1350913Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-05-09T01:23:39.1352791Z         	Messages:   	Project creation failed: test-acc-tf-p-9045906191953382003, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1354211Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (76.72s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 7 minutes
- 2026-05-12 PASS 7 minutes
- 2026-05-13 PASS 7 minutes
- 2026-05-14 PASS 11 minutes
- 2026-05-15 PASS 7 minutes
- 2026-05-16

### Error 2026-05-16T01:20:14+00:00
```
2026-05-16T01:20:14.0177990Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-05-16T01:20:14.0178655Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-6570041677861073834
2026-05-16T01:20:14.0179463Z     resource_test.go:26: 
2026-05-16T01:20:14.0180452Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:20:14.0182579Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:20:14.0184591Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:20:14.0188563Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-05-16T01:20:14.0189741Z         	Error:      	Received unexpected error:
2026-05-16T01:20:14.0190726Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-16T01:20:14.0191446Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-05-16T01:20:14.0192630Z         	Messages:   	Project creation failed: test-acc-tf-p-6570041677861073834, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-16T01:20:14.0193499Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (72.92s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 11 minutes
- 2026-05-19

### Error 2026-05-19T01:25:51+00:00
```
2026-05-19T01:25:51.2098527Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-05-19T01:25:51.2099199Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-3399128669737358742
2026-05-19T01:25:51.2099736Z     resource_test.go:26: 
2026-05-19T01:25:51.2100675Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:25:51.2102554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:25:51.2104386Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:25:51.2106728Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-05-19T01:25:51.2107638Z         	Error:      	Received unexpected error:
2026-05-19T01:25:51.2109606Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:25:51.2110755Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-05-19T01:25:51.2112794Z         	Messages:   	Project creation failed: test-acc-tf-p-3399128669737358742, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:25:51.2114080Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (77.21s)
```

- 2026-05-20 PASS 6 minutes
- 2026-05-21

### Error 2026-05-21T01:27:55+00:00
```
2026-05-21T01:27:55.4969567Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-05-21T01:27:55.4970570Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-2969242379315093743
2026-05-21T01:27:55.4971389Z     resource_test.go:26: 
2026-05-21T01:27:55.4972997Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:27:55.4976076Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:27:55.4979282Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:27:55.4982665Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-05-21T01:27:55.4984109Z         	Error:      	Received unexpected error:
2026-05-21T01:27:55.4987544Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:27:55.4989573Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-05-21T01:27:55.4992618Z         	Messages:   	Project creation failed: test-acc-tf-p-2969242379315093743, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:27:55.4994653Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (70.51s)
```

- 2026-05-22 PASS 5 minutes
- 2026-05-23

### Error 2026-05-23T01:25:04+00:00
```
2026-05-23T01:25:04.2441373Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-05-23T01:25:04.2442383Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-5794384619293025021
2026-05-23T01:25:04.2443207Z     resource_test.go:26: 
2026-05-23T01:25:04.2444905Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:25:04.2447976Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:25:04.2451012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:25:04.2454367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-05-23T01:25:04.2455909Z         	Error:      	Received unexpected error:
2026-05-23T01:25:04.2459144Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:04.2460987Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-05-23T01:25:04.2463973Z         	Messages:   	Project creation failed: test-acc-tf-p-5794384619293025021, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:04.2466330Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (89.25s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 8 minutes
- 2026-05-26

### Error 2026-05-26T02:34:04+00:00
```
2026-05-26T02:34:04.3391660Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-05-26T02:34:04.3392755Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-6979888885912554517
2026-05-26T02:34:04.3393658Z     resource_test.go:26: 
2026-05-26T02:34:04.3395412Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:34:04.3398720Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:34:04.3402068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:34:04.3405870Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-05-26T02:34:04.3407452Z         	Error:      	Received unexpected error:
2026-05-26T02:34:04.3411146Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:34:04.3413076Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-05-26T02:34:04.3416430Z         	Messages:   	Project creation failed: test-acc-tf-p-6979888885912554517, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:34:04.3418565Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (73.72s)
```

- 2026-05-27 PASS 12 minutes
- 2026-05-28

### Error 2026-05-28T01:22:52+00:00
```
2026-05-28T01:22:52.4173349Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-05-28T01:22:52.4173875Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-5041706249335258694
2026-05-28T01:22:52.4174294Z     resource_test.go:26: 
2026-05-28T01:22:52.4176851Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:22:52.4178895Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:22:52.4181113Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:22:52.4183082Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-05-28T01:22:52.4183776Z         	Error:      	Received unexpected error:
2026-05-28T01:22:52.4185295Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:22:52.4186165Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-05-28T01:22:52.4187564Z         	Messages:   	Project creation failed: test-acc-tf-p-5041706249335258694, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:22:52.4188544Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (62.94s)
```

- 2026-05-29 PASS 5 minutes
- 2026-05-30

### Error 2026-05-30T01:29:14+00:00
```
2026-05-30T01:29:14.4419629Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-05-30T01:29:14.4420312Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-4642831997553858714
2026-05-30T01:29:14.4420943Z     resource_test.go:26: 
2026-05-30T01:29:14.4422001Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:29:14.4424054Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:29:14.4426107Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:29:14.4428483Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-05-30T01:29:14.4429404Z         	Error:      	Received unexpected error:
2026-05-30T01:29:14.4431874Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:29:14.4433021Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-05-30T01:29:14.4434985Z         	Messages:   	Project creation failed: test-acc-tf-p-4642831997553858714, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:29:14.4436219Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (67.45s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 12 minutes
- 2026-06-02 PASS 6 minutes
- 2026-06-03 PASS 10 minutes
- 2026-06-04 PASS 13 minutes
- 2026-06-05 PASS 6 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 7 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 7 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 7 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
