# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 6)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.01s
[2026-05-16 01:00](#error-2026-05-16t0100500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-05-19 01:09](#error-2026-05-19t0109410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.00s
[2026-05-28 01:01](#error-2026-05-28t0101530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-05-30 01:11](#error-2026-05-30t0111190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.02s
[2026-06-02 01:16](#error-2026-06-02t0116400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 33 seconds
- 2026-05-08 PASS 33 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.3162509Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-05-09T01:07:49.3163357Z     resource_test.go:142: Creating execution project (1): test-acc-tf-p-729698909560334023
2026-05-09T01:07:49.3163880Z     resource_test.go:142: 
2026-05-09T01:07:49.3164842Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.3166753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.3168922Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.3171323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:142
2026-05-09T01:07:49.3172360Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.3174398Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3175836Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-05-09T01:07:49.3178178Z         	Messages:   	Project creation failed: test-acc-tf-p-729698909560334023, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3179693Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase (79.10s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 33 seconds
- 2026-05-12 PASS 34 seconds
- 2026-05-13 PASS 32 seconds
- 2026-05-14 PASS 33 seconds
- 2026-05-15 PASS 33 seconds
- 2026-05-16

### Error 2026-05-16T01:00:50+00:00
```
2026-05-16T01:00:50.9907642Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-05-16T01:00:50.9908994Z     resource_test.go:142: Creating execution project (1): test-acc-tf-p-5608699025095917092
2026-05-16T01:00:50.9909838Z     resource_test.go:142: 
2026-05-16T01:00:50.9911374Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:00:50.9914464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:00:50.9917753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:00:50.9921856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:142
2026-05-16T01:00:50.9923633Z         	Error:      	Received unexpected error:
2026-05-16T01:00:50.9926689Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:50.9928861Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-05-16T01:00:50.9932339Z         	Messages:   	Project creation failed: test-acc-tf-p-5608699025095917092, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:50.9934913Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase (63.06s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 32 seconds
- 2026-05-19

### Error 2026-05-19T01:09:41+00:00
```
2026-05-19T01:09:41.8602311Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-05-19T01:09:41.8604098Z     resource_test.go:142: Creating execution project (1): test-acc-tf-p-9156464826819437769
2026-05-19T01:09:41.8605068Z     resource_test.go:142: 
2026-05-19T01:09:41.8606787Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:09:41.8610212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:09:41.8613846Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:09:41.8618188Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:142
2026-05-19T01:09:41.8620128Z         	Error:      	Received unexpected error:
2026-05-19T01:09:41.8624137Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:09:41.8626699Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-05-19T01:09:41.8630445Z         	Messages:   	Project creation failed: test-acc-tf-p-9156464826819437769, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:09:41.8633074Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase (66.00s)
```

- 2026-05-20 PASS 32 seconds
- 2026-05-21 PASS 46 seconds
- 2026-05-22 PASS 34 seconds
- 2026-05-23 PASS 34 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 32 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 34 seconds
- 2026-05-28

### Error 2026-05-28T01:01:53+00:00
```
2026-05-28T01:01:53.8765740Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-05-28T01:01:53.8766520Z     resource_test.go:142: Creating execution project (1): test-acc-tf-p-5198813273497328772
2026-05-28T01:01:53.8767015Z     resource_test.go:142: 
2026-05-28T01:01:53.8767871Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:53.8769476Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:53.8771398Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:53.8773550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:142
2026-05-28T01:01:53.8774490Z         	Error:      	Received unexpected error:
2026-05-28T01:01:53.8776973Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:53.8778571Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-05-28T01:01:53.8781002Z         	Messages:   	Project creation failed: test-acc-tf-p-5198813273497328772, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:53.8782635Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase (0.58s)
```

- 2026-05-29 PASS 33 seconds
- 2026-05-30

### Error 2026-05-30T01:11:19+00:00
```
2026-05-30T01:11:19.0321420Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-05-30T01:11:19.0322837Z     resource_test.go:142: Creating execution project (1): test-acc-tf-p-7974285398048908981
2026-05-30T01:11:19.0324058Z     resource_test.go:142: 
2026-05-30T01:11:19.0325649Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:11:19.0328681Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:11:19.0331757Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:11:19.0335941Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:142
2026-05-30T01:11:19.0337638Z         	Error:      	Received unexpected error:
2026-05-30T01:11:19.0340928Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:11:19.0343370Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-05-30T01:11:19.0346716Z         	Messages:   	Project creation failed: test-acc-tf-p-7974285398048908981, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:11:19.0349096Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase (88.17s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 33 seconds
- 2026-06-02

### Error 2026-06-02T01:16:40+00:00
```
2026-06-02T01:16:40.1166406Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-06-02T01:16:40.1167312Z     resource_test.go:142: Creating execution project (1): test-acc-tf-p-6233654538810494916
2026-06-02T01:16:40.1167891Z     resource_test.go:142: 
2026-06-02T01:16:40.1168874Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:16:40.1170694Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:16:40.1172508Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:16:40.1175022Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:142
2026-06-02T01:16:40.1176095Z         	Error:      	Received unexpected error:
2026-06-02T01:16:40.1178256Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1179806Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase
2026-06-02T01:16:40.1181823Z         	Messages:   	Project creation failed: test-acc-tf-p-6233654538810494916, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1183277Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_providerNameLowercase (62.63s)
```

- 2026-06-03 PASS 34 seconds
- 2026-06-04 PASS 33 seconds
- 2026-06-05 PASS 33 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 32 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 34 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 33 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 33 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
