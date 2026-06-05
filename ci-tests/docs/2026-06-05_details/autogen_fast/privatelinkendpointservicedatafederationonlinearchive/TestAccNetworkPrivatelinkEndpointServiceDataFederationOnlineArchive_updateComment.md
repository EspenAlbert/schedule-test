# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 8)
Success rate: 73.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.05s
[2026-05-16 01:00](#error-2026-05-16t0100500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.04s
[2026-05-19 01:09](#error-2026-05-19t0109410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.00s
[2026-05-21 01:10](#error-2026-05-21t0110430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.02s
[2026-05-26 02:16](#error-2026-05-26t0216580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 107.08s
[2026-05-28 01:01](#error-2026-05-28t0101530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.09s
[2026-05-30 01:11](#error-2026-05-30t0111190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-06-02 01:16](#error-2026-06-02t0116400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.00s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 45 seconds
- 2026-05-08 PASS 44 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.3143937Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-09T01:07:49.3144760Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-3390638418018000790
2026-05-09T01:07:49.3145288Z     resource_test.go:98: 
2026-05-09T01:07:49.3146262Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.3148876Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.3150909Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.3153284Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-05-09T01:07:49.3154309Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.3156341Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3157970Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-09T01:07:49.3160030Z         	Messages:   	Project creation failed: test-acc-tf-p-3390638418018000790, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3161486Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (85.52s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 44 seconds
- 2026-05-12 PASS 46 seconds
- 2026-05-13 PASS 44 seconds
- 2026-05-14 PASS 45 seconds
- 2026-05-15 PASS 44 seconds
- 2026-05-16

### Error 2026-05-16T01:00:50+00:00
```
2026-05-16T01:00:50.9878524Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-16T01:00:50.9879927Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-8788392551221801874
2026-05-16T01:00:50.9880769Z     resource_test.go:98: 
2026-05-16T01:00:50.9882089Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:00:50.9885164Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:00:50.9888276Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:00:50.9892618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-05-16T01:00:50.9894538Z         	Error:      	Received unexpected error:
2026-05-16T01:00:50.9897928Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:50.9900095Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-16T01:00:50.9903723Z         	Messages:   	Project creation failed: test-acc-tf-p-8788392551221801874, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:50.9906224Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (75.37s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 44 seconds
- 2026-05-19

### Error 2026-05-19T01:09:41+00:00
```
2026-05-19T01:09:41.8569517Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-19T01:09:41.8570980Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-1920953800758112510
2026-05-19T01:09:41.8571879Z     resource_test.go:98: 
2026-05-19T01:09:41.8573857Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:09:41.8577391Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:09:41.8580847Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:09:41.8585332Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-05-19T01:09:41.8587180Z         	Error:      	Received unexpected error:
2026-05-19T01:09:41.8591389Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:09:41.8594095Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-19T01:09:41.8598059Z         	Messages:   	Project creation failed: test-acc-tf-p-1920953800758112510, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:09:41.8600730Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (66.02s)
```

- 2026-05-20 PASS 44 seconds
- 2026-05-21

### Error 2026-05-21T01:10:43+00:00
```
2026-05-21T01:10:43.9947235Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-21T01:10:43.9948940Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-5638705765890074368
2026-05-21T01:10:43.9949826Z     resource_test.go:98: 
2026-05-21T01:10:43.9951550Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:10:43.9955025Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:10:43.9958699Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:10:43.9962964Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-05-21T01:10:43.9964794Z         	Error:      	Received unexpected error:
2026-05-21T01:10:43.9968663Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:10:43.9971167Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-21T01:10:43.9974829Z         	Messages:   	Project creation failed: test-acc-tf-p-5638705765890074368, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:10:43.9977458Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (84.23s)
```

- 2026-05-22 PASS 45 seconds
- 2026-05-23 PASS a minute
- 2026-05-24: MISSING
- 2026-05-25 PASS 43 seconds
- 2026-05-26

### Error 2026-05-26T02:16:58+00:00
```
2026-05-26T02:16:58.2168175Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-26T02:16:58.2168958Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-7510322525774590564
2026-05-26T02:16:58.2169454Z     resource_test.go:98: 
2026-05-26T02:16:58.2170332Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:16:58.2172003Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:16:58.2173655Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:16:58.2175855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-05-26T02:16:58.2176825Z         	Error:      	Received unexpected error:
2026-05-26T02:16:58.2178592Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:16:58.2179849Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-26T02:16:58.2181684Z         	Messages:   	Project creation failed: test-acc-tf-p-7510322525774590564, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:16:58.2183053Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (107.76s)
```

- 2026-05-27 PASS 46 seconds
- 2026-05-28

### Error 2026-05-28T01:01:53+00:00
```
2026-05-28T01:01:53.8749776Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-28T01:01:53.8750689Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-3206099459407233373
2026-05-28T01:01:53.8751174Z     resource_test.go:98: 
2026-05-28T01:01:53.8752046Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:53.8753702Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:53.8755342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:53.8757387Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-05-28T01:01:53.8758332Z         	Error:      	Received unexpected error:
2026-05-28T01:01:53.8760106Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:53.8761724Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-28T01:01:53.8763521Z         	Messages:   	Project creation failed: test-acc-tf-p-3206099459407233373, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:53.8764833Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (94.94s)
```

- 2026-05-29 PASS 44 seconds
- 2026-05-30

### Error 2026-05-30T01:11:19+00:00
```
2026-05-30T01:11:19.0292953Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-30T01:11:19.0294444Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-5886805556142276634
2026-05-30T01:11:19.0295305Z     resource_test.go:98: 
2026-05-30T01:11:19.0296870Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:11:19.0299912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:11:19.0302935Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:11:19.0306864Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-05-30T01:11:19.0308627Z         	Error:      	Received unexpected error:
2026-05-30T01:11:19.0311941Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:11:19.0314289Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-05-30T01:11:19.0317583Z         	Messages:   	Project creation failed: test-acc-tf-p-5886805556142276634, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:11:19.0319968Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (64.32s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 44 seconds
- 2026-06-02

### Error 2026-06-02T01:16:40+00:00
```
2026-06-02T01:16:40.1148874Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-06-02T01:16:40.1149739Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-8431603134745370028
2026-06-02T01:16:40.1150302Z     resource_test.go:98: 
2026-06-02T01:16:40.1151285Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:16:40.1153110Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:16:40.1155117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:16:40.1157409Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-06-02T01:16:40.1158465Z         	Error:      	Received unexpected error:
2026-06-02T01:16:40.1160454Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1161817Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-06-02T01:16:40.1163993Z         	Messages:   	Project creation failed: test-acc-tf-p-8431603134745370028, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1165482Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (69.03s)
```

- 2026-06-03 PASS 46 seconds
- 2026-06-04 PASS 45 seconds
- 2026-06-05 PASS 45 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 43 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 46 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 44 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 46 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
