# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030200000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 52 minutes
- 2025-08-07 PASS an hour
- 2025-08-08 PASS 45 minutes
- 2025-08-09 PASS 50 minutes
- 2025-08-10 PASS 56 minutes
- 2025-08-11 PASS an hour
- 2025-08-12 PASS 45 minutes
- 2025-08-13 PASS 48 minutes
- 2025-08-14 PASS 49 minutes
- 2025-08-15 PASS 36 minutes
- 2025-08-16 PASS an hour
- 2025-08-17 PASS an hour
- 2025-08-18 PASS 45 minutes
- 2025-08-19 PASS 47 minutes
- 2025-08-20
  - PASS 44 minutes
  - PASS 44 minutes
- 2025-08-21 PASS 46 minutes
- 2025-08-22 PASS 34 minutes
- 2025-08-23 PASS 46 minutes
- 2025-08-24 PASS 39 minutes
- 2025-08-25 PASS 38 minutes
- 2025-08-26 PASS an hour
- 2025-08-27 PASS 52 minutes
- 2025-08-28 PASS 45 minutes
- 2025-08-29 PASS 53 minutes
- 2025-08-30 PASS 50 minutes
- 2025-08-31 PASS 43 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:20+00:00
```
2025-09-01T00:30:20.9857841Z === RUN   TestAccSearchDeployment_basic
2025-09-01T00:30:21.0387346Z     shared_resource.go:93: 
2025-09-01T00:30:21.0389300Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:21.0392378Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:21.0394573Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:21.0396864Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:21.0398933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:21.0401106Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:36
2025-09-01T00:30:21.0402012Z         	Error:      	Received unexpected error:
2025-09-01T00:30:21.0404615Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:21.0405815Z         	Test:       	TestAccSearchDeployment_basic
2025-09-01T00:30:21.0408126Z         	Messages:   	Project creation failed: test-acc-tf-p-3734654312996622031, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:21.0409460Z --- FAIL: TestAccSearchDeployment_basic (0.06s)
```

  - PASS an hour
  - PASS an hour
  - PASS 43 minutes
  - PASS 44 minutes
  - PASS 43 minutes
  - PASS 46 minutes
  - PASS 42 minutes
- 2025-09-02 PASS 46 minutes
- 2025-09-03 PASS 54 minutes
- 2025-09-04 PASS 49 minutes