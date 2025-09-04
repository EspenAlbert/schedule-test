# config/cloudprovideraccess/TestAccCloudProviderAccessAuthorizationAzure_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 2 seconds
- 2025-08-07 PASS 15 seconds
- 2025-08-08 PASS 4 seconds
- 2025-08-09 PASS 4 seconds
- 2025-08-10 PASS 3 seconds
- 2025-08-11 PASS 2 seconds
- 2025-08-12 PASS 6 seconds
- 2025-08-13 PASS a second
- 2025-08-14 PASS 5 seconds
- 2025-08-15 PASS 7 seconds
- 2025-08-16 PASS 6 seconds
- 2025-08-17 PASS 4 seconds
- 2025-08-18 PASS 3 seconds
- 2025-08-19 PASS 5 seconds
- 2025-08-20
  - PASS 4 seconds
  - PASS 5 seconds
- 2025-08-21 PASS 2 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23 PASS 6 seconds
- 2025-08-24 PASS 4 seconds
- 2025-08-25 PASS 3 seconds
- 2025-08-26 PASS 5 seconds
- 2025-08-27 PASS 5 seconds
- 2025-08-28 PASS 5 seconds
- 2025-08-29 PASS 3 seconds
- 2025-08-30 PASS 6 seconds
- 2025-08-31 PASS 5 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.1035782Z === RUN   TestAccCloudProviderAccessAuthorizationAzure_basic
2025-09-01T00:31:13.1037069Z     resource_cloud_provider_access_authorization_test.go:25: Creating execution project: test-acc-tf-p-2577012353803984566
2025-09-01T00:31:13.1038207Z     resource_cloud_provider_access_authorization_test.go:25: 
2025-09-01T00:31:13.1070100Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:13.1073115Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:13.1076846Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cloudprovideraccess/resource_cloud_provider_access_authorization_test.go:25
2025-09-01T00:31:13.1078384Z         	Error:      	Received unexpected error:
2025-09-01T00:31:13.1082999Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.1085230Z         	Test:       	TestAccCloudProviderAccessAuthorizationAzure_basic
2025-09-01T00:31:13.1089002Z         	Messages:   	Project creation failed: test-acc-tf-p-2577012353803984566, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.1091605Z --- FAIL: TestAccCloudProviderAccessAuthorizationAzure_basic (0.17s)
```

  - PASS 2 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 2 seconds
  - PASS 4 seconds
  - PASS 3 seconds
  - PASS 3 seconds
- 2025-09-02 PASS 3 seconds
- 2025-09-03 PASS 5 seconds
- 2025-09-04 PASS 8 seconds