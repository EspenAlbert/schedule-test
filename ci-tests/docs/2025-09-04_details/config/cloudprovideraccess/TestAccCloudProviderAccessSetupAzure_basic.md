# config/cloudprovideraccess/TestAccCloudProviderAccessSetupAzure_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 3 seconds
- 2025-08-07 PASS 14 seconds
- 2025-08-08 PASS 2 seconds
- 2025-08-09 PASS 2 seconds
- 2025-08-10 PASS 4 seconds
- 2025-08-11 PASS 4 seconds
- 2025-08-12 PASS 2 seconds
- 2025-08-13 PASS 2 seconds
- 2025-08-14 PASS 2 seconds
- 2025-08-15 PASS 2 seconds
- 2025-08-16 PASS 2 seconds
- 2025-08-17 PASS 2 seconds
- 2025-08-18 PASS 2 seconds
- 2025-08-19 PASS 3 seconds
- 2025-08-20
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-08-21 PASS 3 seconds
- 2025-08-22 PASS 3 seconds
- 2025-08-23 PASS 3 seconds
- 2025-08-24 PASS 2 seconds
- 2025-08-25 PASS 3 seconds
- 2025-08-26 PASS 2 seconds
- 2025-08-27 PASS 3 seconds
- 2025-08-28 PASS 2 seconds
- 2025-08-29 PASS 3 seconds
- 2025-08-30 PASS 2 seconds
- 2025-08-31 PASS 3 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1212622Z === RUN   TestAccCloudProviderAccessSetupAzure_basic
2025-09-01T00:31:13.1213719Z     resource_cloud_provider_access_setup_test.go:37: Creating execution project: test-acc-tf-p-4965764500821491455
2025-09-01T00:31:13.1214698Z     resource_cloud_provider_access_setup_test.go:37: 
2025-09-01T00:31:13.1216271Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:13.1219216Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:13.1253204Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_setup_test.go:37
2025-09-01T00:31:13.1255049Z         	Error:      	Received unexpected error:
2025-09-01T00:31:13.1259821Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.1262011Z         	Test:       	TestAccCloudProviderAccessSetupAzure_basic
2025-09-01T00:31:13.1265831Z         	Messages:   	Project creation failed: test-acc-tf-p-4965764500821491455, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.1268256Z --- FAIL: TestAccCloudProviderAccessSetupAzure_basic (0.16s)
```

  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 2 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-09-02 PASS 2 seconds
- 2025-09-03 PASS 3 seconds
- 2025-09-04 PASS 2 seconds