# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057290000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s
[2026-07-23 00:48](#error-2026-07-23t0048400000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:29+00:00
```
2026-07-09T00:57:29.6719941Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS
2026-07-09T00:57:29.6720808Z     resource_test.go:265: Creating execution project (1): test-acc-tf-p-6023360867842757558
2026-07-09T00:57:29.6721356Z     resource_test.go:265: 
2026-07-09T00:57:29.6722325Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:29.6724189Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:29.6726056Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:29.6728417Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:265
2026-07-09T00:57:29.6729956Z         	Error:      	Received unexpected error:
2026-07-09T00:57:29.6732880Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:29.6734872Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS
2026-07-09T00:57:29.6737519Z         	Messages:   	Project creation failed: test-acc-tf-p-6023360867842757558, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:57:29.6739596Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS (0.24s)
```

- 2026-07-10 PASS 22 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1807626Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS
2026-07-11T00:54:31.1808517Z     resource_test.go:265: Creating execution project (1): test-acc-tf-p-6041350799754665583
2026-07-11T00:54:31.1809091Z     resource_test.go:265: 
2026-07-11T00:54:31.1810100Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1812007Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1813899Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1816422Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:265
2026-07-11T00:54:31.1817496Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1819523Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1820999Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS
2026-07-11T00:54:31.1823076Z         	Messages:   	Project creation failed: test-acc-tf-p-6041350799754665583, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1824624Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS (67.31s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 22 seconds
- 2026-07-14 PASS 23 seconds
- 2026-07-15 PASS 26 seconds
- 2026-07-16 PASS 23 seconds
- 2026-07-17 PASS 23 seconds
- 2026-07-18 PASS 26 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0240030Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS
2026-07-21T00:53:06.0240893Z     resource_test.go:265: Creating execution project (1): test-acc-tf-p-5646687799637663740
2026-07-21T00:53:06.0241605Z     resource_test.go:265: 
2026-07-21T00:53:06.0242584Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:06.0244456Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:06.0246519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:06.0249030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:265
2026-07-21T00:53:06.0250109Z         	Error:      	Received unexpected error:
2026-07-21T00:53:06.0253037Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:06.0254800Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS
2026-07-21T00:53:06.0257691Z         	Messages:   	Project creation failed: test-acc-tf-p-5646687799637663740, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:06.0259525Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS (1.13s)
```

- 2026-07-22 PASS 22 seconds
- 2026-07-23

### Error 2026-07-23T00:48:40+00:00
```
2026-07-23T00:48:40.8511381Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS
2026-07-23T00:48:40.8524704Z     resource_test.go:265: Creating execution project (1): test-acc-tf-p-6142825055527439501
2026-07-23T00:48:40.8525389Z     resource_test.go:265: 
2026-07-23T00:48:40.8526596Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:40.8529063Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:40.8531568Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:40.8534737Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:265
2026-07-23T00:48:40.8535605Z         	Error:      	Received unexpected error:
2026-07-23T00:48:40.8537899Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:40.8539336Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS
2026-07-23T00:48:40.8541440Z         	Messages:   	Project creation failed: test-acc-tf-p-6142825055527439501, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:40.8543261Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS (0.49s)
```

- 2026-07-24 PASS 21 seconds
- 2026-07-25 PASS 21 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 23 seconds
- 2026-07-28 PASS 21 seconds
- 2026-07-29 PASS 21 seconds
- 2026-07-30 PASS 21 seconds
- 2026-07-31 PASS 22 seconds
- 2026-08-01 PASS 21 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 21 seconds
- 2026-08-04 PASS 22 seconds
- 2026-08-05 PASS 21 seconds
- 2026-08-06 PASS 21 seconds
- 2026-08-07 PASS 22 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 23 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 23 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 22 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 23 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 22 seconds
  - PASS 32 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 22 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
