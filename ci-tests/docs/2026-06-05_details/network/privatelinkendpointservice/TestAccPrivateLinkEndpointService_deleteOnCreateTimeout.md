# network/privatelinkendpointservice/TestAccPrivateLinkEndpointService_deleteOnCreateTimeout Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:23](#error-2026-05-09t0123390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-05-19 01:25](#error-2026-05-19t0125510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.07s
[2026-05-23 01:25](#error-2026-05-23t0125040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.03s
[2026-05-26 02:34](#error-2026-05-26t0234040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.09s
[2026-05-28 01:22](#error-2026-05-28t0122520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.02s
[2026-05-30 01:29](#error-2026-05-30t0129140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 3 minutes
  - PASS 3 minutes
- 2026-05-08 PASS 3 minutes
- 2026-05-09

### Error 2026-05-09T01:23:39+00:00
```
2026-05-09T01:23:39.1370680Z === RUN   TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-05-09T01:23:39.1371334Z     resource_test.go:69: Creating execution project (1): test-acc-tf-p-808119487249877576
2026-05-09T01:23:39.1371835Z     resource_test.go:69: 
2026-05-09T01:23:39.1372780Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:23:39.1374665Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:23:39.1376544Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:23:39.1378919Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:69
2026-05-09T01:23:39.1379815Z         	Error:      	Received unexpected error:
2026-05-09T01:23:39.1381841Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1383022Z         	Test:       	TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-05-09T01:23:39.1384932Z         	Messages:   	Project creation failed: test-acc-tf-p-808119487249877576, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:23:39.1386235Z --- FAIL: TestAccPrivateLinkEndpointService_deleteOnCreateTimeout (62.94s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 3 minutes
- 2026-05-12 PASS 3 minutes
- 2026-05-13 PASS 3 minutes
- 2026-05-14 PASS 3 minutes
- 2026-05-15 PASS 3 minutes
- 2026-05-16 PASS 5 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 8 minutes
- 2026-05-19

### Error 2026-05-19T01:25:51+00:00
```
2026-05-19T01:25:51.2130572Z === RUN   TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-05-19T01:25:51.2131241Z     resource_test.go:69: Creating execution project (1): test-acc-tf-p-4892948688743925564
2026-05-19T01:25:51.2131759Z     resource_test.go:69: 
2026-05-19T01:25:51.2132685Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:25:51.2134501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:25:51.2136709Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:25:51.2138760Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:69
2026-05-19T01:25:51.2139652Z         	Error:      	Received unexpected error:
2026-05-19T01:25:51.2141609Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:25:51.2142796Z         	Test:       	TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-05-19T01:25:51.2144664Z         	Messages:   	Project creation failed: test-acc-tf-p-4892948688743925564, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:25:51.2145981Z --- FAIL: TestAccPrivateLinkEndpointService_deleteOnCreateTimeout (84.70s)
```

- 2026-05-20 PASS 3 minutes
- 2026-05-21 PASS 4 minutes
- 2026-05-22 PASS 3 minutes
- 2026-05-23

### Error 2026-05-23T01:25:04+00:00
```
2026-05-23T01:25:04.2492462Z === RUN   TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-05-23T01:25:04.2493508Z     resource_test.go:69: Creating execution project (1): test-acc-tf-p-4618092473825326109
2026-05-23T01:25:04.2494329Z     resource_test.go:69: 
2026-05-23T01:25:04.2495976Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:25:04.2498982Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:25:04.2501999Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:25:04.2505451Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:69
2026-05-23T01:25:04.2506908Z         	Error:      	Received unexpected error:
2026-05-23T01:25:04.2510148Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:04.2512060Z         	Test:       	TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-05-23T01:25:04.2515206Z         	Messages:   	Project creation failed: test-acc-tf-p-4618092473825326109, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:25:04.2517291Z --- FAIL: TestAccPrivateLinkEndpointService_deleteOnCreateTimeout (79.25s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 4 minutes
- 2026-05-26

### Error 2026-05-26T02:34:04+00:00
```
2026-05-26T02:34:04.3446638Z === RUN   TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-05-26T02:34:04.3447815Z     resource_test.go:69: Creating execution project (1): test-acc-tf-p-221305498739763872
2026-05-26T02:34:04.3448706Z     resource_test.go:69: 
2026-05-26T02:34:04.3450373Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:34:04.3453835Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:34:04.3457292Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:34:04.3460971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:69
2026-05-26T02:34:04.3462553Z         	Error:      	Received unexpected error:
2026-05-26T02:34:04.3466281Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:34:04.3468331Z         	Test:       	TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-05-26T02:34:04.3471757Z         	Messages:   	Project creation failed: test-acc-tf-p-221305498739763872, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:34:04.3473994Z --- FAIL: TestAccPrivateLinkEndpointService_deleteOnCreateTimeout (64.86s)
```

- 2026-05-27 PASS 3 minutes
- 2026-05-28

### Error 2026-05-28T01:22:52+00:00
```
2026-05-28T01:22:52.4200948Z === RUN   TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-05-28T01:22:52.4201466Z     resource_test.go:69: Creating execution project (1): test-acc-tf-p-5264524757360324730
2026-05-28T01:22:52.4201891Z     resource_test.go:69: 
2026-05-28T01:22:52.4202753Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:22:52.4204144Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:22:52.4205528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:22:52.4207050Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:69
2026-05-28T01:22:52.4207729Z         	Error:      	Received unexpected error:
2026-05-28T01:22:52.4209246Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:22:52.4210265Z         	Test:       	TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-05-28T01:22:52.4211702Z         	Messages:   	Project creation failed: test-acc-tf-p-5264524757360324730, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:22:52.4213392Z --- FAIL: TestAccPrivateLinkEndpointService_deleteOnCreateTimeout (78.23s)
```

- 2026-05-29 PASS 3 minutes
- 2026-05-30

### Error 2026-05-30T01:29:14+00:00
```
2026-05-30T01:29:14.4453797Z === RUN   TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-05-30T01:29:14.4454499Z     resource_test.go:69: Creating execution project (1): test-acc-tf-p-3034570771397706111
2026-05-30T01:29:14.4455044Z     resource_test.go:69: 
2026-05-30T01:29:14.4456068Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:29:14.4458100Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:29:14.4460122Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:29:14.4462466Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:69
2026-05-30T01:29:14.4463375Z         	Error:      	Received unexpected error:
2026-05-30T01:29:14.4466230Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:29:14.4467444Z         	Test:       	TestAccPrivateLinkEndpointService_deleteOnCreateTimeout
2026-05-30T01:29:14.4469445Z         	Messages:   	Project creation failed: test-acc-tf-p-3034570771397706111, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:29:14.4470683Z --- FAIL: TestAccPrivateLinkEndpointService_deleteOnCreateTimeout (79.91s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 3 minutes
- 2026-06-02 PASS 3 minutes
- 2026-06-03 PASS 6 minutes
- 2026-06-04 PASS 3 minutes
- 2026-06-05 PASS 3 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 4 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 4 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 4 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 4 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
