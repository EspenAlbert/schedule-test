# config/projectapikey/TestAccProjectAPIKey_updateRole Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:31](#error-2025-09-01t0031130000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 37 seconds
- 2025-08-07 PASS 3 minutes
- 2025-08-08 PASS 11 seconds
- 2025-08-09 PASS 15 seconds
- 2025-08-10 PASS 7 seconds
- 2025-08-11 PASS 23 seconds
- 2025-08-12 PASS 10 seconds
- 2025-08-13 PASS 10 seconds
- 2025-08-14 PASS 14 seconds
- 2025-08-15 PASS 10 seconds
- 2025-08-16 PASS 10 seconds
- 2025-08-17 PASS 15 seconds
- 2025-08-18 PASS 14 seconds
- 2025-08-19 PASS 23 seconds
- 2025-08-20
  - PASS 16 seconds
  - PASS 22 seconds
- 2025-08-21 PASS 11 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 20 seconds
- 2025-08-24 PASS 7 seconds
- 2025-08-25 PASS 23 seconds
- 2025-08-26 PASS 15 seconds
- 2025-08-27 PASS 15 seconds
- 2025-08-28 PASS 10 seconds
- 2025-08-29 PASS 17 seconds
- 2025-08-30 PASS 11 seconds
- 2025-08-31 PASS 23 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:31:13+00:00
```
2025-09-01T00:31:13.3092368Z === RUN   TestAccProjectAPIKey_updateRole
2025-09-01T00:31:13.3093470Z     resource_project_api_key_test.go:114: Creating execution project: test-acc-tf-p-4273761193770718631
2025-09-01T00:31:13.3094449Z     resource_project_api_key_test.go:114: 
2025-09-01T00:31:13.3096181Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:31:13.3099464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:31:13.3103794Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:114
2025-09-01T00:31:13.3105214Z         	Error:      	Received unexpected error:
2025-09-01T00:31:13.3109964Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.3112121Z         	Test:       	TestAccProjectAPIKey_updateRole
2025-09-01T00:31:13.3115858Z         	Messages:   	Project creation failed: test-acc-tf-p-4273761193770718631, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:31:13.3118442Z --- FAIL: TestAccProjectAPIKey_updateRole (0.16s)
```

  - PASS 13 seconds
  - PASS 22 seconds
  - PASS 23 seconds
  - PASS 10 seconds
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 14 seconds
- 2025-09-02 PASS 11 seconds
- 2025-09-03 PASS 11 seconds
- 2025-09-04 PASS 15 seconds