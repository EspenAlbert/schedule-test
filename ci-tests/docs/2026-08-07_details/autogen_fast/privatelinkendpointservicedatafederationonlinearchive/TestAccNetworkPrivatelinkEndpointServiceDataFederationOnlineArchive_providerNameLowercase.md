# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.03s
[2026-07-18 00:50](#error-2026-07-18t0050100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-07-23 00:48](#error-2026-07-23t0048400000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:29+00:00
```
2026-07-09T00:57:29.6644684Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-07-09T00:57:29.6645559Z     resource_test.go:142: Creating execution project (1): test-acc-tf-p-8207789906873424545
2026-07-09T00:57:29.6646109Z     resource_test.go:142: 
2026-07-09T00:57:29.6647089Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:29.6649238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:29.6651122Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:29.6653495Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:142
2026-07-09T00:57:29.6654545Z         	Error:      	Received unexpected error:
2026-07-09T00:57:29.6656559Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6658027Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-07-09T00:57:29.6660330Z         	Messages:   	Project creation failed: test-acc-tf-p-8207789906873424545, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6661837Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase (63.72s)
```

- 2026-07-10 PASS 32 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1718702Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-07-11T00:54:31.1719781Z     resource_test.go:142: Creating execution project (1): test-acc-tf-p-5160844827231497365
2026-07-11T00:54:31.1720495Z     resource_test.go:142: 
2026-07-11T00:54:31.1721605Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1723758Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1725947Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1728558Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:142
2026-07-11T00:54:31.1729628Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1731857Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1733319Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-07-11T00:54:31.1735399Z         	Messages:   	Project creation failed: test-acc-tf-p-5160844827231497365, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1737060Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase (62.27s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 33 seconds
- 2026-07-14 PASS 34 seconds
- 2026-07-15 PASS 34 seconds
- 2026-07-16 PASS 34 seconds
- 2026-07-17 PASS 34 seconds
- 2026-07-18

### Error 2026-07-18T00:50:10+00:00
```
2026-07-18T00:50:10.8211324Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-07-18T00:50:10.8212239Z     resource_test.go:142: Creating execution project (1): test-acc-tf-p-8783116142920289589
2026-07-18T00:50:10.8212846Z     resource_test.go:142: 
2026-07-18T00:50:10.8213790Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:50:10.8215693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:50:10.8217394Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:50:10.8219471Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:142
2026-07-18T00:50:10.8220490Z         	Error:      	Received unexpected error:
2026-07-18T00:50:10.8222285Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8223609Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-07-18T00:50:10.8225563Z         	Messages:   	Project creation failed: test-acc-tf-p-8783116142920289589, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8226945Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase (61.63s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0150348Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-07-21T00:53:06.0151237Z     resource_test.go:142: Creating execution project (1): test-acc-tf-p-5727599090923264612
2026-07-21T00:53:06.0151985Z     resource_test.go:142: 
2026-07-21T00:53:06.0152965Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:06.0154837Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:06.0156939Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:06.0159448Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:142
2026-07-21T00:53:06.0160521Z         	Error:      	Received unexpected error:
2026-07-21T00:53:06.0162577Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0164042Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-07-21T00:53:06.0166693Z         	Messages:   	Project creation failed: test-acc-tf-p-5727599090923264612, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0168399Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase (62.54s)
```

- 2026-07-22 PASS 33 seconds
- 2026-07-23

### Error 2026-07-23T00:48:40+00:00
```
2026-07-23T00:48:40.8448362Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-07-23T00:48:40.8449042Z     resource_test.go:142: Creating execution project (1): test-acc-tf-p-2724727136444806261
2026-07-23T00:48:40.8449475Z     resource_test.go:142: 
2026-07-23T00:48:40.8450237Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:40.8451648Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:40.8453250Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:40.8455073Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:142
2026-07-23T00:48:40.8455902Z         	Error:      	Received unexpected error:
2026-07-23T00:48:40.8458178Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:40.8459575Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-07-23T00:48:40.8461591Z         	Messages:   	Project creation failed: test-acc-tf-p-2724727136444806261, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:40.8463252Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase (0.21s)
```

- 2026-07-24 PASS 32 seconds
- 2026-07-25 PASS 31 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 34 seconds
- 2026-07-28 PASS 32 seconds
- 2026-07-29 PASS 32 seconds
- 2026-07-30 PASS 32 seconds
- 2026-07-31 PASS 32 seconds
- 2026-08-01 PASS 32 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 32 seconds
- 2026-08-04 PASS 33 seconds
- 2026-08-05 PASS 32 seconds
- 2026-08-06 PASS 32 seconds
- 2026-08-07 PASS 32 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 34 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 33 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 32 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 33 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 32 seconds
  - PASS 37 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 33 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
