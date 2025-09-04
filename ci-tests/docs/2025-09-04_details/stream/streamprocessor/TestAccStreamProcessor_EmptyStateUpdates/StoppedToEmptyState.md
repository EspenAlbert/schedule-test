# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 10 seconds
- 2025-08-07
  - PASS 46 seconds
  - PASS 12 seconds
- 2025-08-08 PASS 8 seconds
- 2025-08-09 PASS 8 seconds
- 2025-08-10 PASS 27 seconds
- 2025-08-11 PASS 8 seconds
- 2025-08-12
  - PASS 9 seconds
  - PASS 7 seconds
- 2025-08-13 PASS 9 seconds
- 2025-08-14 PASS 9 seconds
- 2025-08-15 PASS 9 seconds
- 2025-08-16 PASS 8 seconds
- 2025-08-17 PASS 9 seconds
- 2025-08-18
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-08-19 PASS 10 seconds
- 2025-08-20
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-08-21 PASS 9 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 8 seconds
- 2025-08-24 PASS 10 seconds
- 2025-08-25 PASS 9 seconds
- 2025-08-26 PASS 8 seconds
- 2025-08-27 PASS 11 seconds
- 2025-08-28 PASS 9 seconds
- 2025-08-29
  - PASS 10 seconds
  - PASS 9 seconds
- 2025-08-30 PASS 10 seconds
- 2025-08-31 PASS 11 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9612594Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-01T00:30:38.9614117Z     resource_test.go:217: Testing: Verifies that a processor in STOPPED state can be updated while remaining in a derived STOPPED state from empty state
2025-09-01T00:30:38.9615554Z     resource_test.go:218: Creating execution project: test-acc-tf-p-6245868753225143563
2025-09-01T00:30:38.9616324Z     resource_test.go:218: 
2025-09-01T00:30:38.9618035Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9621311Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9624447Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9628009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:362
2025-09-01T00:30:38.9631374Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:218
2025-09-01T00:30:38.9633428Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.9634245Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9639191Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9641674Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState
2025-09-01T00:30:38.9645750Z         	Messages:   	Project creation failed: test-acc-tf-p-6245868753225143563, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9651578Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/StoppedToEmptyState (0.17s)
```

  - PASS 9 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 9 seconds
- 2025-09-03 PASS 9 seconds
- 2025-09-04 PASS 9 seconds