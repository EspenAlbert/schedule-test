# stream/streamprocessor/TestAccStreamProcessor_createErrors Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS a second
- 2025-08-07
  - PASS 4 seconds
  - PASS a second
- 2025-08-08 PASS a moment
- 2025-08-09 PASS a moment
- 2025-08-10 PASS a moment
- 2025-08-11 PASS a moment
- 2025-08-12
  - PASS a moment
  - PASS a moment
- 2025-08-13 PASS a moment
- 2025-08-14 PASS a moment
- 2025-08-15 PASS a moment
- 2025-08-16 PASS a moment
- 2025-08-17 PASS a moment
- 2025-08-18
  - PASS a moment
  - PASS a moment
- 2025-08-19 PASS a moment
- 2025-08-20
  - PASS a second
  - PASS a moment
- 2025-08-21 PASS a moment
- 2025-08-22 PASS a second
- 2025-08-23 PASS a moment
- 2025-08-24 PASS a moment
- 2025-08-25 PASS a moment
- 2025-08-26 PASS a moment
- 2025-08-27 PASS a moment
- 2025-08-28 PASS a moment
- 2025-08-29
  - PASS a moment
  - PASS a moment
- 2025-08-30 PASS a moment
- 2025-08-31 PASS a moment
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9797797Z === RUN   TestAccStreamProcessor_createErrors
2025-09-01T00:30:38.9798938Z     resource_test.go:288: Creating execution project: test-acc-tf-p-7808726918858963808
2025-09-01T00:30:38.9799744Z     resource_test.go:288: 
2025-09-01T00:30:38.9801367Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9804611Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9808032Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9811503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:288
2025-09-01T00:30:38.9812910Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9818115Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9820450Z         	Test:       	TestAccStreamProcessor_createErrors
2025-09-01T00:30:38.9824552Z         	Messages:   	Project creation failed: test-acc-tf-p-7808726918858963808, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9827354Z --- FAIL: TestAccStreamProcessor_createErrors (0.19s)
```

  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
  - PASS a moment
- 2025-09-02 PASS a moment
- 2025-09-03 PASS a moment
- 2025-09-04 PASS a moment