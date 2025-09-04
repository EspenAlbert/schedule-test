# network/privatelinkendpointservice/TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 6 minutes
- 2025-08-07 PASS 6 minutes
- 2025-08-08 PASS 4 minutes
- 2025-08-09 PASS 6 minutes
- 2025-08-10 PASS 14 minutes
- 2025-08-11 PASS 10 minutes
- 2025-08-12 PASS 7 minutes
- 2025-08-13 PASS 6 minutes
- 2025-08-14 PASS 8 minutes
- 2025-08-15 PASS 4 minutes
- 2025-08-16 PASS 34 minutes
- 2025-08-17 PASS 6 minutes
- 2025-08-18 PASS 9 minutes
- 2025-08-19 PASS 5 minutes
- 2025-08-20
  - PASS 6 minutes
  - PASS 5 minutes
- 2025-08-21 PASS 6 minutes
- 2025-08-22 PASS 3 minutes
- 2025-08-23 PASS 6 minutes
- 2025-08-24 PASS 5 minutes
- 2025-08-25 PASS 8 minutes
- 2025-08-26 PASS 6 minutes
- 2025-08-27 PASS 13 minutes
- 2025-08-28 PASS 5 minutes
- 2025-08-29 PASS 4 minutes
- 2025-08-30 PASS 6 minutes
- 2025-08-31 PASS 5 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5909644Z === RUN   TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2025-09-01T00:42:46.5910366Z     resource_privatelink_endpoint_service_test.go:26: Creating execution project: test-acc-tf-p-5878159589813459412
2025-09-01T00:42:46.5910998Z     resource_privatelink_endpoint_service_test.go:26: 
2025-09-01T00:42:46.5911987Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:42:46.5913751Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:42:46.5915974Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_privatelink_endpoint_service_test.go:26
2025-09-01T00:42:46.5916919Z         	Error:      	Received unexpected error:
2025-09-01T00:42:46.5919848Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:42:46.5921225Z         	Test:       	TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2025-09-01T00:42:46.5923497Z         	Messages:   	Project creation failed: test-acc-tf-p-5878159589813459412, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:42:46.5924983Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed (0.16s)
```

  - PASS 8 minutes
  - PASS 8 minutes
  - PASS 6 minutes
  - PASS 6 minutes
  - PASS 6 minutes
  - PASS 6 minutes
  - PASS 9 minutes
- 2025-09-02 PASS 5 minutes
- 2025-09-03 PASS 6 minutes
- 2025-09-04 PASS 7 minutes