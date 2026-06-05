# autogen_fast/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 2)
Success rate: 93.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 113.01s
[2026-05-28 01:01](#error-2026-05-28t0101530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 22 seconds
- 2026-05-08 PASS 22 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.3234533Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS
2026-05-09T01:07:49.3235378Z     resource_test.go:265: Creating execution project (1): test-acc-tf-p-3069457212900498472
2026-05-09T01:07:49.3235959Z     resource_test.go:265: 
2026-05-09T01:07:49.3236916Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.3239011Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.3240902Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.3243284Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:265
2026-05-09T01:07:49.3244327Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.3246338Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3247972Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS
2026-05-09T01:07:49.3250034Z         	Messages:   	Project creation failed: test-acc-tf-p-3069457212900498472, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3251530Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS (113.08s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 22 seconds
- 2026-05-12 PASS 23 seconds
- 2026-05-13 PASS 22 seconds
- 2026-05-14 PASS 22 seconds
- 2026-05-15 PASS 22 seconds
- 2026-05-16 PASS 23 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 22 seconds
- 2026-05-19 PASS 23 seconds
- 2026-05-20 PASS 22 seconds
- 2026-05-21 PASS 23 seconds
- 2026-05-22 PASS 23 seconds
- 2026-05-23 PASS 23 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 22 seconds
- 2026-05-26 PASS 24 seconds
- 2026-05-27 PASS 23 seconds
- 2026-05-28

### Error 2026-05-28T01:01:53+00:00
```
2026-05-28T01:01:53.8836177Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS
2026-05-28T01:01:53.8836944Z     resource_test.go:265: Creating execution project (1): test-acc-tf-p-432609340894097409
2026-05-28T01:01:53.8837431Z     resource_test.go:265: 
2026-05-28T01:01:53.8838291Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:53.8839919Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:53.8841673Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:53.8843750Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/privatelinkendpointservicedatafederationonlinearchive/resource_test.go:265
2026-05-28T01:01:53.8844686Z         	Error:      	Received unexpected error:
2026-05-28T01:01:53.8847131Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:53.8848699Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS
2026-05-28T01:01:53.8851210Z         	Messages:   	Project creation failed: test-acc-tf-p-432609340894097409, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:53.8852843Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchiveDS_OptionalFieldsAWS (0.79s)
```

- 2026-05-29 PASS 22 seconds
- 2026-05-30 PASS 23 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 22 seconds
- 2026-06-02 PASS 23 seconds
- 2026-06-03 PASS 23 seconds
- 2026-06-04 PASS 23 seconds
- 2026-06-05 PASS 23 seconds

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
- 2026-05-17 PASS 23 seconds
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
- 2026-05-31 PASS 23 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
