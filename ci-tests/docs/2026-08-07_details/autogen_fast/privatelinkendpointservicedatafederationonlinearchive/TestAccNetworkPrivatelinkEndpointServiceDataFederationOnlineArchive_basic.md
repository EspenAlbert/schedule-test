# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 90.06s
[2026-07-18 00:50](#error-2026-07-18t0050100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.00s
[2026-07-23 00:48](#error-2026-07-23t0048400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:29+00:00
```
2026-07-09T00:57:29.6603356Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2026-07-09T00:57:29.6604990Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-3315397946584857161
2026-07-09T00:57:29.6606128Z     resource_test.go:40: 
2026-07-09T00:57:29.6608328Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:29.6612190Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:29.6614938Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:29.6617357Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:40
2026-07-09T00:57:29.6618429Z         	Error:      	Received unexpected error:
2026-07-09T00:57:29.6620868Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6622254Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2026-07-09T00:57:29.6624278Z         	Messages:   	Project creation failed: test-acc-tf-p-3315397946584857161, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6626038Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic (64.32s)
```

- 2026-07-10 PASS 23 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1676926Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2026-07-11T00:54:31.1677928Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-3762696840968589668
2026-07-11T00:54:31.1678488Z     resource_test.go:40: 
2026-07-11T00:54:31.1679656Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1681889Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1684123Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1686973Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:40
2026-07-11T00:54:31.1688227Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1690607Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1692158Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2026-07-11T00:54:31.1694529Z         	Messages:   	Project creation failed: test-acc-tf-p-3762696840968589668, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1696450Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic (90.55s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 23 seconds
- 2026-07-14 PASS a minute
- 2026-07-15 PASS 27 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 26 seconds
- 2026-07-18

### Error 2026-07-18T00:50:10+00:00
```
2026-07-18T00:50:10.8175307Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2026-07-18T00:50:10.8176734Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-6504764672576795964
2026-07-18T00:50:10.8177848Z     resource_test.go:40: 
2026-07-18T00:50:10.8179409Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:50:10.8182090Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:50:10.8183795Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:50:10.8186365Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:40
2026-07-18T00:50:10.8187435Z         	Error:      	Received unexpected error:
2026-07-18T00:50:10.8189388Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8190699Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2026-07-18T00:50:10.8192502Z         	Messages:   	Project creation failed: test-acc-tf-p-6504764672576795964, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8193797Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic (62.53s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0115164Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2026-07-21T00:53:06.0116129Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-4956201635363284936
2026-07-21T00:53:06.0116691Z     resource_test.go:40: 
2026-07-21T00:53:06.0117684Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:06.0119565Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:06.0121550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:06.0123932Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:40
2026-07-21T00:53:06.0125151Z         	Error:      	Received unexpected error:
2026-07-21T00:53:06.0127186Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0128514Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2026-07-21T00:53:06.0130510Z         	Messages:   	Project creation failed: test-acc-tf-p-4956201635363284936, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0131898Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic (85.02s)
```

- 2026-07-22 PASS 24 seconds
- 2026-07-23

### Error 2026-07-23T00:48:40+00:00
```
2026-07-23T00:48:40.8418184Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2026-07-23T00:48:40.8419113Z     resource_test.go:40: Creating execution project (1): test-acc-tf-p-7642841596476993047
2026-07-23T00:48:40.8419584Z     resource_test.go:40: 
2026-07-23T00:48:40.8420363Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:40.8421827Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:40.8423502Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:40.8425367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:40
2026-07-23T00:48:40.8426192Z         	Error:      	Received unexpected error:
2026-07-23T00:48:40.8428157Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:40.8429283Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2026-07-23T00:48:40.8430872Z         	Messages:   	Project creation failed: test-acc-tf-p-7642841596476993047, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:48:40.8431981Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic (89.91s)
```

- 2026-07-24 PASS 22 seconds
- 2026-07-25 PASS 26 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 24 seconds
- 2026-07-28 PASS 26 seconds
- 2026-07-29 PASS 22 seconds
- 2026-07-30 PASS 26 seconds
- 2026-07-31 PASS 23 seconds
- 2026-08-01 PASS 25 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 22 seconds
- 2026-08-04 PASS 26 seconds
- 2026-08-05 PASS 23 seconds
- 2026-08-06 PASS 27 seconds
- 2026-08-07 PASS 23 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 25 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 24 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 23 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 25 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 25 seconds
  - PASS 27 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 24 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
