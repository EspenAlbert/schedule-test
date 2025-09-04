# network/privatelinkendpointservicedatafederationonlinearchive/TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchivesDSPlural_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a second
- 2025-08-07 PASS 24 seconds
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
2025-09-01T00:42:46.5944709Z === RUN   TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchivesDSPlural_basic
2025-09-01T00:42:46.5945714Z     data_source_privatelink_endpoint_service_data_federation_online_archives_test.go:18: Creating execution project: test-acc-tf-p-227654197914717796
2025-09-01T00:42:46.5946570Z     data_source_privatelink_endpoint_service_data_federation_online_archives_test.go:18: 
2025-09-01T00:42:46.5947778Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:42:46.5949531Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:42:46.5952444Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservicedatafederationonlinearchive/data_source_privatelink_endpoint_service_data_federation_online_archives_test.go:18
2025-09-01T00:42:46.5953630Z         	Error:      	Received unexpected error:
2025-09-01T00:42:46.5956317Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:42:46.5957993Z         	Test:       	TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchivesDSPlural_basic
2025-09-01T00:42:46.5960403Z         	Messages:   	Project creation failed: test-acc-tf-p-227654197914717796, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:42:46.5962036Z --- FAIL: TestAccNetworkPrivatelinkEndpointServiceDataFederationOnlineArchivesDSPlural_basic (0.08s)
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