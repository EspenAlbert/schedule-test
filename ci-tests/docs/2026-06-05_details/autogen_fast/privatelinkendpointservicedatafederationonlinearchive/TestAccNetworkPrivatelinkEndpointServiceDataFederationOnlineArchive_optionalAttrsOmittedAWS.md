# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.02s
[2026-05-19 01:09](#error-2026-05-19t0109410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.06s
[2026-05-28 01:01](#error-2026-05-28t0101530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-05-30 01:11](#error-2026-05-30t0111190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.01s
[2026-06-02 01:16](#error-2026-06-02t0116400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 22 seconds
- 2026-05-08 PASS 21 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.3180609Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-05-09T01:07:49.3181475Z     resource_test.go:179: Creating execution project (1): test-acc-tf-p-5555926619532666456
2026-05-09T01:07:49.3182005Z     resource_test.go:179: 
2026-05-09T01:07:49.3182964Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.3185000Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.3186883Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.3189656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:179
2026-05-09T01:07:49.3190712Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.3192735Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3194177Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-05-09T01:07:49.3196259Z         	Messages:   	Project creation failed: test-acc-tf-p-5555926619532666456, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3197987Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS (63.24s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 21 seconds
- 2026-05-12 PASS 22 seconds
- 2026-05-13 PASS 21 seconds
- 2026-05-14 PASS 22 seconds
- 2026-05-15 PASS 21 seconds
- 2026-05-16 PASS 46 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 21 seconds
- 2026-05-19

### Error 2026-05-19T01:09:41+00:00
```
2026-05-19T01:09:41.8634892Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-05-19T01:09:41.8636430Z     resource_test.go:179: Creating execution project (1): test-acc-tf-p-4060886025002376512
2026-05-19T01:09:41.8637323Z     resource_test.go:179: 
2026-05-19T01:09:41.8639066Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:09:41.8642631Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:09:41.8646406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:09:41.8650719Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:179
2026-05-19T01:09:41.8652570Z         	Error:      	Received unexpected error:
2026-05-19T01:09:41.8656587Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:09:41.8659475Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-05-19T01:09:41.8663267Z         	Messages:   	Project creation failed: test-acc-tf-p-4060886025002376512, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:09:41.8666345Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS (69.58s)
```

- 2026-05-20 PASS 21 seconds
- 2026-05-21 PASS 22 seconds
- 2026-05-22 PASS 22 seconds
- 2026-05-23 PASS 22 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 21 seconds
- 2026-05-26 PASS 22 seconds
- 2026-05-27 PASS 22 seconds
- 2026-05-28

### Error 2026-05-28T01:01:53+00:00
```
2026-05-28T01:01:53.8783470Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-05-28T01:01:53.8784250Z     resource_test.go:179: Creating execution project (1): test-acc-tf-p-4461822200377281852
2026-05-28T01:01:53.8784754Z     resource_test.go:179: 
2026-05-28T01:01:53.8785605Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:53.8787228Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:53.8788849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:53.8791047Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:179
2026-05-28T01:01:53.8791990Z         	Error:      	Received unexpected error:
2026-05-28T01:01:53.8794470Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:53.8796213Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-05-28T01:01:53.8798609Z         	Messages:   	Project creation failed: test-acc-tf-p-4461822200377281852, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:53.8800367Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS (0.40s)
```

- 2026-05-29 PASS 22 seconds
- 2026-05-30

### Error 2026-05-30T01:11:19+00:00
```
2026-05-30T01:11:19.0350597Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-05-30T01:11:19.0352047Z     resource_test.go:179: Creating execution project (1): test-acc-tf-p-7182718706571878570
2026-05-30T01:11:19.0352915Z     resource_test.go:179: 
2026-05-30T01:11:19.0354643Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:11:19.0357657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:11:19.0360669Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:11:19.0364652Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:179
2026-05-30T01:11:19.0366359Z         	Error:      	Received unexpected error:
2026-05-30T01:11:19.0369639Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:11:19.0371939Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-05-30T01:11:19.0375461Z         	Messages:   	Project creation failed: test-acc-tf-p-7182718706571878570, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:11:19.0377847Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS (94.13s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 21 seconds
- 2026-06-02

### Error 2026-06-02T01:16:40+00:00
```
2026-06-02T01:16:40.1184392Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-06-02T01:16:40.1185294Z     resource_test.go:179: Creating execution project (1): test-acc-tf-p-8340504984526855631
2026-06-02T01:16:40.1185873Z     resource_test.go:179: 
2026-06-02T01:16:40.1186840Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:16:40.1188658Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:16:40.1190635Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:16:40.1192949Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:179
2026-06-02T01:16:40.1194157Z         	Error:      	Received unexpected error:
2026-06-02T01:16:40.1196142Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1197583Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS
2026-06-02T01:16:40.1199606Z         	Messages:   	Project creation failed: test-acc-tf-p-8340504984526855631, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1201068Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_optionalAttrsOmittedAWS (63.75s)
```

- 2026-06-03 PASS 22 seconds
- 2026-06-04 PASS 22 seconds
- 2026-06-05 PASS 22 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 21 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 22 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 22 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 22 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
