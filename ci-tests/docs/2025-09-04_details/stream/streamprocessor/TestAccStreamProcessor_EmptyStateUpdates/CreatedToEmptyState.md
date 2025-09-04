# stream/streamprocessor/TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 4 seconds
- 2025-08-07
  - PASS 29 seconds
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
- 2025-08-19 PASS 6 seconds
- 2025-08-20
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-08-21 PASS 5 seconds
- 2025-08-22 PASS 5 seconds
- 2025-08-23 PASS 5 seconds
- 2025-08-24 PASS 33 seconds
- 2025-08-25 PASS 4 seconds
- 2025-08-26 PASS 4 seconds
- 2025-08-27 PASS 5 seconds
- 2025-08-28 PASS 4 seconds
- 2025-08-29
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-08-30 PASS 6 seconds
- 2025-08-31 PASS 12 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9539610Z === RUN   TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-01T00:30:38.9541157Z     resource_test.go:217: Testing: Verifies that a processor in CREATED state can be updated while remaining in a derived CREATED state from empty state
2025-09-01T00:30:38.9542609Z     resource_test.go:218: Creating execution project: test-acc-tf-p-421086916211798499
2025-09-01T00:30:38.9543584Z     resource_test.go:218: 
2025-09-01T00:30:38.9545171Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9548492Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9551697Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9555067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:362
2025-09-01T00:30:38.9558722Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:218
2025-09-01T00:30:38.9560788Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.9561928Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9566974Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9569475Z         	Test:       	TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState
2025-09-01T00:30:38.9573709Z         	Messages:   	Project creation failed: test-acc-tf-p-421086916211798499, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9649400Z     --- FAIL: TestAccStreamProcessor_EmptyStateUpdates/CreatedToEmptyState (0.17s)
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