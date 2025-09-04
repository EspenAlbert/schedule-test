# search_deployment/searchdeployment/TestAccSearchDeployment_multiRegion Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 37) FAIL
Success rate: 97.37%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030240000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 38 minutes
- 2025-08-07 PASS 49 minutes
- 2025-08-08 PASS 34 minutes
- 2025-08-09 PASS 39 minutes
- 2025-08-10 PASS 42 minutes
- 2025-08-11 PASS an hour
- 2025-08-12 PASS 38 minutes
- 2025-08-13 PASS 34 minutes
- 2025-08-14 PASS 42 minutes
- 2025-08-15 PASS 26 minutes
- 2025-08-16 PASS an hour
- 2025-08-17 PASS 53 minutes
- 2025-08-18 PASS 35 minutes
- 2025-08-19 PASS 39 minutes
- 2025-08-20
  - PASS 41 minutes
  - PASS 35 minutes
- 2025-08-21 PASS 38 minutes
- 2025-08-22 PASS 28 minutes
- 2025-08-23 PASS 37 minutes
- 2025-08-24 PASS 32 minutes
- 2025-08-25 PASS 45 minutes
- 2025-08-26 PASS 43 minutes
- 2025-08-27 PASS 36 minutes
- 2025-08-28 PASS 38 minutes
- 2025-08-29 PASS 46 minutes
- 2025-08-30 PASS 37 minutes
- 2025-08-31 PASS 37 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:24+00:00
```
2025-09-01T00:30:24.7711368Z === RUN   TestAccSearchDeployment_multiRegion
2025-09-01T00:30:24.7711959Z     resource_test.go:117: Creating execution project: test-acc-tf-p-6232570605371410971
2025-09-01T00:30:24.8372420Z     resource_test.go:117: 
2025-09-01T00:30:24.8374191Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:24.8377865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:24.8380627Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-09-01T00:30:24.8384164Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:117
2025-09-01T00:30:24.8385476Z         	Error:      	Received unexpected error:
2025-09-01T00:30:24.8390365Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:24.8392546Z         	Test:       	TestAccSearchDeployment_multiRegion
2025-09-01T00:30:24.8396524Z         	Messages:   	Project creation failed: test-acc-tf-p-6232570605371410971, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:24.8399201Z --- FAIL: TestAccSearchDeployment_multiRegion (0.07s)
```

  - PASS an hour
  - PASS an hour
  - PASS 32 minutes
  - PASS 30 minutes
  - PASS 37 minutes
  - PASS 35 minutes
  - PASS 35 minutes
- 2025-09-02 PASS 40 minutes
- 2025-09-03 PASS 50 minutes
- 2025-09-04 PASS 42 minutes