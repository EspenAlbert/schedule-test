# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057290000) |  | dev | flaky_500 | 30.05s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s
[2026-07-18 00:50](#error-2026-07-18t0050100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.02s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.07s
[2026-07-23 00:48](#error-2026-07-23t0048400000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:29+00:00
```
2026-07-09T00:57:29.6627845Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-07-09T00:57:29.6629660Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-7863227709261243486
2026-07-09T00:57:29.6630673Z     resource_test.go:98: 
2026-07-09T00:57:29.6631847Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:29.6633736Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:29.6635625Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:29.6637991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-07-09T00:57:29.6639364Z         	Error:      	Received unexpected error:
2026-07-09T00:57:29.6640373Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:57:29.6641342Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-07-09T00:57:29.6642738Z         	Messages:   	Project creation failed: test-acc-tf-p-7863227709261243486, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:57:29.6643789Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (30.50s)
```

- 2026-07-10 PASS 44 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1697488Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-07-11T00:54:31.1698503Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-4626552841902451112
2026-07-11T00:54:31.1699089Z     resource_test.go:98: 
2026-07-11T00:54:31.1700259Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1702501Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1704750Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1707623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-07-11T00:54:31.1709074Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1711567Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1713373Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-07-11T00:54:31.1715921Z         	Messages:   	Project creation failed: test-acc-tf-p-4626552841902451112, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1717614Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (62.24s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 44 seconds
- 2026-07-14 PASS 47 seconds
- 2026-07-15 PASS 45 seconds
- 2026-07-16 PASS 47 seconds
- 2026-07-17 PASS 46 seconds
- 2026-07-18

### Error 2026-07-18T00:50:10+00:00
```
2026-07-18T00:50:10.8194667Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-07-18T00:50:10.8195709Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-5841633922786126088
2026-07-18T00:50:10.8196336Z     resource_test.go:98: 
2026-07-18T00:50:10.8197310Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:50:10.8199009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:50:10.8200611Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:50:10.8202632Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-07-18T00:50:10.8203676Z         	Error:      	Received unexpected error:
2026-07-18T00:50:10.8205916Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8207216Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-07-18T00:50:10.8209019Z         	Messages:   	Project creation failed: test-acc-tf-p-5841633922786126088, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8210327Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (87.20s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0132713Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-07-21T00:53:06.0133552Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-928491310536896491
2026-07-21T00:53:06.0134094Z     resource_test.go:98: 
2026-07-21T00:53:06.0135209Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:06.0137101Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:06.0138975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:06.0141331Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-07-21T00:53:06.0142378Z         	Error:      	Received unexpected error:
2026-07-21T00:53:06.0144406Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0145958Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-07-21T00:53:06.0147994Z         	Messages:   	Project creation failed: test-acc-tf-p-928491310536896491, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0149446Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (66.72s)
```

- 2026-07-22 PASS 45 seconds
- 2026-07-23

### Error 2026-07-23T00:48:40+00:00
```
2026-07-23T00:48:40.8432809Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-07-23T00:48:40.8433485Z     resource_test.go:98: Creating execution project (1): test-acc-tf-p-126199947243133540
2026-07-23T00:48:40.8433914Z     resource_test.go:98: 
2026-07-23T00:48:40.8434670Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:40.8436107Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:40.8437775Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:40.8439573Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:98
2026-07-23T00:48:40.8440394Z         	Error:      	Received unexpected error:
2026-07-23T00:48:40.8442768Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:40.8444271Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment
2026-07-23T00:48:40.8446272Z         	Messages:   	Project creation failed: test-acc-tf-p-126199947243133540, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:40.8447665Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_updateComment (0.36s)
```

- 2026-07-24 PASS 43 seconds
- 2026-07-25 PASS 43 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 46 seconds
- 2026-07-28 PASS 43 seconds
- 2026-07-29 PASS 43 seconds
- 2026-07-30 PASS 44 seconds
- 2026-07-31 PASS 43 seconds
- 2026-08-01 PASS 44 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 43 seconds
- 2026-08-04 PASS 44 seconds
- 2026-08-05 PASS 43 seconds
- 2026-08-06 PASS 43 seconds
- 2026-08-07 PASS 44 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 46 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 45 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 43 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 45 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 44 seconds
  - PASS 53 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 45 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
