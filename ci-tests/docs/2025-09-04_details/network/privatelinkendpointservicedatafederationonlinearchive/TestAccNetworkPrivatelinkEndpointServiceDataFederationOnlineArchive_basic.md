# network/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 2 seconds
- 2025-08-07 PASS 19 seconds
- 2025-08-08 PASS a second
- 2025-08-09 PASS a second
- 2025-08-10 PASS a second
- 2025-08-11 PASS a second
- 2025-08-12 PASS 2 seconds
- 2025-08-13 PASS a second
- 2025-08-14 PASS 2 seconds
- 2025-08-15 PASS 2 seconds
- 2025-08-16 PASS a second
- 2025-08-17 PASS a second
- 2025-08-18 PASS a second
- 2025-08-19 PASS 2 seconds
- 2025-08-20
  - PASS a second
  - PASS a second
- 2025-08-21 PASS a second
- 2025-08-22 PASS a second
- 2025-08-23 PASS a second
- 2025-08-24 PASS a second
- 2025-08-25 PASS a second
- 2025-08-26 PASS 2 seconds
- 2025-08-27 PASS a second
- 2025-08-28 PASS a second
- 2025-08-29 PASS a second
- 2025-08-30 PASS a second
- 2025-08-31 PASS a second
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5980972Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2025-09-01T00:42:46.5981928Z     resource_privatelink_endpoint_service_data_federation_online_archive_test.go:23: Creating execution project: test-acc-tf-p-9196992093140079500
2025-09-01T00:42:46.5982774Z     resource_privatelink_endpoint_service_data_federation_online_archive_test.go:23: 
2025-09-01T00:42:46.5983839Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:42:46.5985700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:42:46.5988607Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservicedatafederationonlinearchive/resource_privatelink_endpoint_service_data_federation_online_archive_test.go:23
2025-09-01T00:42:46.5989799Z         	Error:      	Received unexpected error:
2025-09-01T00:42:46.5992494Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:42:46.5993989Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2025-09-01T00:42:46.5996369Z         	Messages:   	Project creation failed: test-acc-tf-p-9196992093140079500, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:42:46.5998201Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic (0.10s)
```

  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
- 2025-09-02 PASS 2 seconds
- 2025-09-03 PASS 2 seconds
- 2025-09-04 PASS a second