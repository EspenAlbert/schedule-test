# network/privatelinkendpointservice/TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-31 01:36](#error-2026-01-31t0136540000) | PRIVATE_ENDPOINT_SERVICE_ALREADY_EXISTS_FOR_REGION /api/atlas/v2/groups/697d4ea27d00588dcfa08d0e/privateEndpoint/endpointService | dev | 0.04s
[2026-02-02 01:40](#error-2026-02-02t0140150000) | PRIVATE_ENDPOINT_SERVICE_ALREADY_EXISTS_FOR_REGION /api/atlas/v2/groups/697ff26c71768356d7f95c4b/privateEndpoint/endpointService | dev | 0.02s
[2026-02-03 00:47](#error-2026-02-03t0047140000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/698143bce3c7fce2317e2c41/privateEndpoint/endpointService | dev | 0.02s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 minutes
- 2026-01-09 PASS 2 minutes
- 2026-01-10 PASS 2 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 2 minutes
- 2026-01-13 PASS 3 minutes
- 2026-01-14 PASS 2 minutes
- 2026-01-15 PASS 3 minutes
- 2026-01-16 PASS 2 minutes
- 2026-01-17 PASS 3 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 2 minutes
- 2026-01-20 PASS 3 minutes
- 2026-01-21 PASS 2 minutes
- 2026-01-22 PASS 2 minutes
- 2026-01-23 PASS 3 minutes
- 2026-01-24 PASS 2 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 2 minutes
- 2026-01-27 PASS 2 minutes
- 2026-01-28 PASS 2 minutes
- 2026-01-29 PASS 2 minutes
- 2026-01-30 PASS 2 minutes
- 2026-01-31

### Error 2026-01-31T01:36:54+00:00
```
2026-01-31T01:36:54.7939731Z === RUN   TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout
2026-01-31T01:36:54.7940910Z     resource_test.go:51: Creating execution private link endpoint for provider: AWS, region: US_EAST_1
2026-01-31T01:36:54.7941908Z     resource_test.go:51: 
2026-01-31T01:36:54.7944045Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/privatelink_endpoint.go:23
2026-01-31T01:36:54.7946010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:247
2026-01-31T01:36:54.7948066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:51
2026-01-31T01:36:54.7948979Z         	Error:      	Received unexpected error:
2026-01-31T01:36:54.7952011Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4ea27d00588dcfa08d0e/privateEndpoint/endpointService POST: HTTP 409 Conflict (Error code: "PRIVATE_ENDPOINT_SERVICE_ALREADY_EXISTS_FOR_REGION") Detail: A private endpoint service already exists for AWS region US_EAST_1. Reason: Conflict. Params: [AWS US_EAST_1], BadRequestDetail: 
2026-01-31T01:36:54.7954054Z         	Test:       	TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout
2026-01-31T01:36:54.7954756Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout (0.36s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T01:40:15+00:00
```
2026-02-02T01:40:15.1134623Z === RUN   TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout
2026-02-02T01:40:15.1136047Z     resource_test.go:51: Creating execution private link endpoint for provider: AWS, region: US_EAST_1
2026-02-02T01:40:15.1138927Z     resource_test.go:51: 
2026-02-02T01:40:15.1140887Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/privatelink_endpoint.go:23
2026-02-02T01:40:15.1144744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:247
2026-02-02T01:40:15.1148897Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:51
2026-02-02T01:40:15.1150545Z         	Error:      	Received unexpected error:
2026-02-02T01:40:15.1156561Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff26c71768356d7f95c4b/privateEndpoint/endpointService POST: HTTP 409 Conflict (Error code: "PRIVATE_ENDPOINT_SERVICE_ALREADY_EXISTS_FOR_REGION") Detail: A private endpoint service already exists for AWS region US_EAST_1. Reason: Conflict. Params: [AWS US_EAST_1], BadRequestDetail: 
2026-02-02T01:40:15.1159760Z         	Test:       	TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout
2026-02-02T01:40:15.1160955Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout (0.21s)
```

- 2026-02-03

### Error 2026-02-03T00:47:14+00:00
```
2026-02-03T00:47:14.7633130Z === RUN   TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout
2026-02-03T00:47:14.7633873Z     resource_test.go:51: Creating execution private link endpoint for provider: AWS, region: US_EAST_1
2026-02-03T00:47:14.7634406Z     resource_test.go:51: 
2026-02-03T00:47:14.7635406Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/privatelink_endpoint.go:24
2026-02-03T00:47:14.7637280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:269
2026-02-03T00:47:14.7639455Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:51
2026-02-03T00:47:14.7640317Z         	Error:      	Received unexpected error:
2026-02-03T00:47:14.7642727Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bce3c7fce2317e2c41/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-03T00:47:14.7644139Z         	Test:       	TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout
2026-02-03T00:47:14.7644770Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointService_deleteOnCreateTimeout (0.21s)
```

- 2026-02-04 PASS 2 minutes
- 2026-02-05 PASS 3 minutes
- 2026-02-06 PASS 2 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 2 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 2 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 2 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 2 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 2 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
