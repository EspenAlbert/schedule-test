# network/privatelinkendpointservice/TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout Test Details
# Found 35 TestRuns in dev, qa from 2025-09-05 to 2025-10-02 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-02 01:28](#error-2025-10-02t0128350000) | PRIVATE_ENDPOINT_SERVICE_ALREADY_EXISTS_FOR_REGION /api/atlas/v2/groups/68ddc71cd2c00355743d384b/privateEndpoint/endpointService | dev | 0.04s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05 PASS 2 minutes
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10 PASS 2 minutes
- 2025-09-11 PASS 2 minutes
- 2025-09-12 PASS 2 minutes
- 2025-09-13 PASS 4 minutes
- 2025-09-14 PASS 2 minutes
- 2025-09-15
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-09-16 PASS 2 minutes
- 2025-09-17 PASS 2 minutes
- 2025-09-18 PASS 2 minutes
- 2025-09-19 PASS 2 minutes
- 2025-09-20 PASS 3 minutes
- 2025-09-21 PASS 2 minutes
- 2025-09-22 PASS 2 minutes
- 2025-09-23 PASS 2 minutes
- 2025-09-24 PASS 3 minutes
- 2025-09-25 PASS 3 minutes
- 2025-09-26 PASS 3 minutes
- 2025-09-27 PASS 2 minutes
- 2025-09-28 PASS 4 minutes
- 2025-09-29 PASS 4 minutes
- 2025-09-30
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
- 2025-10-01
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-10-02

### Error 2025-10-02T01:28:35+00:00
```
2025-10-02T01:28:35.6920442Z === RUN   TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout
2025-10-02T01:28:35.6921191Z     resource_test.go:51: Creating execution private link endpoint for provider: AWS, region: US_EAST_1
2025-10-02T01:28:35.6921713Z     resource_test.go:51: 
2025-10-02T01:28:35.6922721Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/privatelink_endpoint.go:23
2025-10-02T01:28:35.6924567Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:201
2025-10-02T01:28:35.6926534Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:51
2025-10-02T01:28:35.6927369Z         	Error:      	Received unexpected error:
2025-10-02T01:28:35.6930481Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ddc71cd2c00355743d384b/privateEndpoint/endpointService POST: HTTP 409 Conflict (Error code: "PRIVATE_ENDPOINT_SERVICE_ALREADY_EXISTS_FOR_REGION") Detail: A private endpoint service already exists for AWS region US_EAST_1. Reason: Conflict. Params: [AWS US_EAST_1], BadRequestDetail: 
2025-10-02T01:28:35.6932069Z         	Test:       	TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout
2025-10-02T01:28:35.6932693Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout (0.43s)
```
