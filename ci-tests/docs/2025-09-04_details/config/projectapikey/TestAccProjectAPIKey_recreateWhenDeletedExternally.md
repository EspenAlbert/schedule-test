# config/projectapikey/TestAccProjectAPIKey_recreateWhenDeletedExternally Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 19 seconds
- 2025-08-07 PASS 3 minutes
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 11 seconds
- 2025-08-10 PASS 5 seconds
- 2025-08-11 PASS 17 seconds
- 2025-08-12 PASS 8 seconds
- 2025-08-13 PASS 8 seconds
- 2025-08-14 PASS 10 seconds
- 2025-08-15 PASS 7 seconds
- 2025-08-16 PASS 8 seconds
- 2025-08-17 PASS 11 seconds
- 2025-08-18 PASS 9 seconds
- 2025-08-19 PASS 17 seconds
- 2025-08-20
  - PASS 11 seconds
  - PASS 16 seconds
- 2025-08-21 PASS 8 seconds
- 2025-08-22 PASS 8 seconds
- 2025-08-23 PASS 14 seconds
- 2025-08-24 PASS 5 seconds
- 2025-08-25 PASS 17 seconds
- 2025-08-26 PASS 11 seconds
- 2025-08-27 PASS 11 seconds
- 2025-08-28 PASS 8 seconds
- 2025-08-29 PASS 13 seconds
- 2025-08-30 PASS 8 seconds
- 2025-08-31 PASS 16 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.3176179Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-09-01T00:31:13.3177365Z     resource_project_api_key_test.go:157: Creating execution project: test-acc-tf-p-2638122920869364557
2025-09-01T00:31:13.3178332Z     resource_project_api_key_test.go:157: 
2025-09-01T00:31:13.3180190Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:13.3183443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:13.3187161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:157
2025-09-01T00:31:13.3188701Z         	Error:      	Received unexpected error:
2025-09-01T00:31:13.3245439Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.3247962Z         	Test:       	TestAccProjectAPIKey_recreateWhenDeletedExternally
2025-09-01T00:31:13.3252116Z         	Messages:   	Project creation failed: test-acc-tf-p-2638122920869364557, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.3254565Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (0.15s)
```

  - PASS 10 seconds
  - PASS 18 seconds
  - PASS 16 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 11 seconds
- 2025-09-02 PASS 8 seconds
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 11 seconds