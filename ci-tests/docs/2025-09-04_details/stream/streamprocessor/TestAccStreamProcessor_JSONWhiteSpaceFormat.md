# stream/streamprocessor/TestAccStreamProcessor_JSONWhiteSpaceFormat Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 5 seconds
- 2025-08-07
  - PASS 32 seconds
  - PASS 6 seconds
- 2025-08-08 PASS 4 seconds
- 2025-08-09 PASS 4 seconds
- 2025-08-10 PASS 5 seconds
- 2025-08-11 PASS 4 seconds
- 2025-08-12
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-08-13 PASS 4 seconds
- 2025-08-14 PASS 4 seconds
- 2025-08-15 PASS 4 seconds
- 2025-08-16 PASS 4 seconds
- 2025-08-17 PASS 4 seconds
- 2025-08-18
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-08-19 PASS 5 seconds
- 2025-08-20
  - PASS 5 seconds
  - PASS 4 seconds
- 2025-08-21 PASS 5 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23 PASS 4 seconds
- 2025-08-24 PASS 5 seconds
- 2025-08-25 PASS 4 seconds
- 2025-08-26 PASS 4 seconds
- 2025-08-27 PASS 5 seconds
- 2025-08-28 PASS 4 seconds
- 2025-08-29
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-08-30 PASS 5 seconds
- 2025-08-31 PASS 4 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9121715Z === RUN   TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-09-01T00:30:38.9122664Z     resource_test.go:81: Creating execution project: test-acc-tf-p-2817634546736323848
2025-09-01T00:30:38.9123457Z     resource_test.go:81: 
2025-09-01T00:30:38.9125025Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9128358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9131584Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9135167Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:81
2025-09-01T00:30:38.9166755Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9171640Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9173961Z         	Test:       	TestAccStreamProcessor_JSONWhiteSpaceFormat
2025-09-01T00:30:38.9178113Z         	Messages:   	Project creation failed: test-acc-tf-p-2817634546736323848, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9180689Z --- FAIL: TestAccStreamProcessor_JSONWhiteSpaceFormat (0.18s)
```

  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-09-02 PASS 5 seconds
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 4 seconds