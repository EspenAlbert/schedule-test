# network/privatelinkendpointservicedatafederationonlinearchive/TestMigNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:42](#error-2025-09-01t0042460000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 5 seconds
- 2025-08-07 PASS 23 seconds
- 2025-08-08 PASS 4 seconds
- 2025-08-09 PASS 4 seconds
- 2025-08-10 PASS 4 seconds
- 2025-08-11 PASS 4 seconds
- 2025-08-12 PASS 5 seconds
- 2025-08-13 PASS 4 seconds
- 2025-08-14 PASS 5 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 4 seconds
- 2025-08-17 PASS 4 seconds
- 2025-08-18 PASS 4 seconds
- 2025-08-19 PASS 5 seconds
- 2025-08-20
  - PASS 4 seconds
  - PASS 3 seconds
- 2025-08-21 PASS 4 seconds
- 2025-08-22 PASS 4 seconds
- 2025-08-23 PASS 3 seconds
- 2025-08-24 PASS 3 seconds
- 2025-08-25 PASS 4 seconds
- 2025-08-26 PASS 5 seconds
- 2025-08-27 PASS 4 seconds
- 2025-08-28 PASS 4 seconds
- 2025-08-29 PASS 5 seconds
- 2025-08-30 PASS 4 seconds
- 2025-08-31 PASS 3 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:42:46+00:00
```
2025-09-01T00:42:46.5962789Z === RUN   TestMigNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2025-09-01T00:42:46.5963946Z     resource_privatelink_endpoint_service_data_federation_online_archive_migration_test.go:14: Creating execution project: test-acc-tf-p-6806600963403097001
2025-09-01T00:42:46.5964864Z     resource_privatelink_endpoint_service_data_federation_online_archive_migration_test.go:14: 
2025-09-01T00:42:46.5965961Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:42:46.5967842Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:42:46.5970688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservicedatafederationonlinearchive/resource_privatelink_endpoint_service_data_federation_online_archive_migration_test.go:14
2025-09-01T00:42:46.5971895Z         	Error:      	Received unexpected error:
2025-09-01T00:42:46.5974587Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:42:46.5976085Z         	Test:       	TestMigNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic
2025-09-01T00:42:46.5978662Z         	Messages:   	Project creation failed: test-acc-tf-p-6806600963403097001, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:42:46.5980262Z --- FAIL: TestMigNetworkPrivatelinkEndpointServiceDataFederationOnlineArchive_basic (0.11s)
```

  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 3 seconds
  - PASS 3 seconds
  - PASS 5 seconds
  - PASS 3 seconds
- 2025-09-02 PASS 5 seconds
- 2025-09-03 PASS 5 seconds
- 2025-09-04 PASS 4 seconds