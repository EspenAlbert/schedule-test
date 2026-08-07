# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.02s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s
[2026-07-23 00:48](#error-2026-07-23t0048400000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.09s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:29+00:00
```
2026-07-09T00:57:29.6699387Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock
2026-07-09T00:57:29.6700216Z     resource_test.go:242: Creating execution project (1): test-acc-tf-p-6159790952684569077
2026-07-09T00:57:29.6700757Z     resource_test.go:242: 
2026-07-09T00:57:29.6701936Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:29.6703928Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:29.6705790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:29.6708154Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:242
2026-07-09T00:57:29.6709431Z         	Error:      	Received unexpected error:
2026-07-09T00:57:29.6712519Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:29.6714307Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock
2026-07-09T00:57:29.6716933Z         	Messages:   	Project creation failed: test-acc-tf-p-6159790952684569077, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:29.6719057Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock (1.18s)
```

- 2026-07-10 PASS 21 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1774557Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock
2026-07-11T00:54:31.1775400Z     resource_test.go:242: Creating execution project (1): test-acc-tf-p-8140930078781838101
2026-07-11T00:54:31.1790260Z     resource_test.go:242: 
2026-07-11T00:54:31.1791674Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1793635Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1795546Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1798158Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:242
2026-07-11T00:54:31.1799238Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1801275Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1803005Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock
2026-07-11T00:54:31.1805070Z         	Messages:   	Project creation failed: test-acc-tf-p-8140930078781838101, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1806722Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock (62.04s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 21 seconds
- 2026-07-14 PASS 22 seconds
- 2026-07-15 PASS 24 seconds
- 2026-07-16 PASS 22 seconds
- 2026-07-17 PASS 22 seconds
- 2026-07-18 PASS 23 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0220252Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock
2026-07-21T00:53:06.0221099Z     resource_test.go:242: Creating execution project (1): test-acc-tf-p-9124977684979086752
2026-07-21T00:53:06.0221650Z     resource_test.go:242: 
2026-07-21T00:53:06.0222641Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:06.0224526Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:06.0226565Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:06.0228951Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:242
2026-07-21T00:53:06.0230012Z         	Error:      	Received unexpected error:
2026-07-21T00:53:06.0232926Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:06.0234660Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock
2026-07-21T00:53:06.0237403Z         	Messages:   	Project creation failed: test-acc-tf-p-9124977684979086752, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:06.0239153Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock (0.46s)
```

- 2026-07-22 PASS 22 seconds
- 2026-07-23

### Error 2026-07-23T00:48:40+00:00
```
2026-07-23T00:48:40.8495324Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock
2026-07-23T00:48:40.8496000Z     resource_test.go:242: Creating execution project (1): test-acc-tf-p-259076215600888972
2026-07-23T00:48:40.8496445Z     resource_test.go:242: 
2026-07-23T00:48:40.8497209Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:40.8498634Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:40.8500055Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:40.8501953Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:242
2026-07-23T00:48:40.8503076Z         	Error:      	Received unexpected error:
2026-07-23T00:48:40.8505294Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:40.8506662Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock
2026-07-23T00:48:40.8508672Z         	Messages:   	Project creation failed: test-acc-tf-p-259076215600888972, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:40.8510446Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_timeoutsBlock (0.87s)
```

- 2026-07-24 PASS 21 seconds
- 2026-07-25 PASS 21 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 22 seconds
- 2026-07-28 PASS 21 seconds
- 2026-07-29 PASS 21 seconds
- 2026-07-30 PASS 21 seconds
- 2026-07-31 PASS 21 seconds
- 2026-08-01 PASS 21 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 21 seconds
- 2026-08-04 PASS 21 seconds
- 2026-08-05 PASS 21 seconds
- 2026-08-06 PASS 21 seconds
- 2026-08-07 PASS 21 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 22 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 22 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 21 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 22 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 21 seconds
  - PASS 25 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 21 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
