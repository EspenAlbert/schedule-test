# network/privatelinkendpointservice/TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout Test Details
# Found 40 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 37) FAIL(x 3)
Success rate: 92.50%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-02 01:28](#error-2025-10-02t0128350000) | PRIVATE_ENDPOINT_SERVICE_ALREADY_EXISTS_FOR_REGION /api/atlas/v2/groups/68ddc71cd2c00355743d384b/privateEndpoint/endpointService | dev | 0.04s
[2025-10-04 01:28](#error-2025-10-04t0128000000) | PRIVATE_ENDPOINT_SERVICE_ALREADY_EXISTS_FOR_REGION /api/atlas/v2/groups/68e069f27ed8eb23693c43ad/privateEndpoint/endpointService | dev | 0.02s
[2025-10-07 01:29](#error-2025-10-07t0129370000) | PRIVATE_ENDPOINT_SERVICE_ALREADY_EXISTS_FOR_REGION /api/atlas/v2/groups/68e45ed3507f48738a093ef7/privateEndpoint/endpointService | dev | 0.03s

## Timeline
- 2025-09-30 PASS 3 minutes
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

- 2025-10-03 PASS 3 minutes
- 2025-10-04

### Error 2025-10-04T01:28:00+00:00
```
2025-10-04T01:28:00.6883440Z === RUN   TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout
2025-10-04T01:28:00.6884269Z     resource_test.go:51: Creating execution private link endpoint for provider: AWS, region: US_EAST_1
2025-10-04T01:28:00.6884850Z     resource_test.go:51: 
2025-10-04T01:28:00.6885854Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/privatelink_endpoint.go:23
2025-10-04T01:28:00.6887819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:201
2025-10-04T01:28:00.6890499Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:51
2025-10-04T01:28:00.6891555Z         	Error:      	Received unexpected error:
2025-10-04T01:28:00.6894939Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e069f27ed8eb23693c43ad/privateEndpoint/endpointService POST: HTTP 409 Conflict (Error code: "PRIVATE_ENDPOINT_SERVICE_ALREADY_EXISTS_FOR_REGION") Detail: A private endpoint service already exists for AWS region US_EAST_1. Reason: Conflict. Params: [AWS US_EAST_1], BadRequestDetail: 
2025-10-04T01:28:00.6896763Z         	Test:       	TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout
2025-10-04T01:28:00.6897511Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout (0.23s)
```

- 2025-10-05 PASS 2 minutes
- 2025-10-06 PASS 2 minutes
- 2025-10-07

### Error 2025-10-07T01:29:37+00:00
```
2025-10-07T01:29:37.4571279Z === RUN   TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout
2025-10-07T01:29:37.4571993Z     resource_test.go:51: Creating execution private link endpoint for provider: AWS, region: US_EAST_1
2025-10-07T01:29:37.4572507Z     resource_test.go:51: 
2025-10-07T01:29:37.4573483Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/privatelink_endpoint.go:23
2025-10-07T01:29:37.4575504Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:201
2025-10-07T01:29:37.4577430Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:51
2025-10-07T01:29:37.4578261Z         	Error:      	Received unexpected error:
2025-10-07T01:29:37.4581131Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e45ed3507f48738a093ef7/privateEndpoint/endpointService POST: HTTP 409 Conflict (Error code: "PRIVATE_ENDPOINT_SERVICE_ALREADY_EXISTS_FOR_REGION") Detail: A private endpoint service already exists for AWS region US_EAST_1. Reason: Conflict. Params: [AWS US_EAST_1], BadRequestDetail: 
2025-10-07T01:29:37.4582706Z         	Test:       	TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout
2025-10-07T01:29:37.4583316Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout (0.29s)
```

- 2025-10-08 PASS 3 minutes
- 2025-10-09 PASS 5 minutes
- 2025-10-10 PASS 2 minutes
- 2025-10-11 PASS 2 minutes
- 2025-10-12 PASS 13 minutes
- 2025-10-13 PASS 3 minutes
- 2025-10-14 PASS 3 minutes
- 2025-10-15 PASS 3 minutes
- 2025-10-16 PASS 3 minutes
- 2025-10-17 PASS 3 minutes
- 2025-10-18 PASS 3 minutes
- 2025-10-19 PASS 3 minutes
- 2025-10-20
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-21 PASS 2 minutes
- 2025-10-22
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-10-23 PASS 3 minutes
- 2025-10-24 PASS 2 minutes
- 2025-10-25 PASS 2 minutes
- 2025-10-26 PASS 2 minutes
- 2025-10-27 PASS 2 minutes
- 2025-10-28 PASS 2 minutes
- 2025-10-29 PASS 3 minutes
- 2025-10-30 PASS 2 minutes