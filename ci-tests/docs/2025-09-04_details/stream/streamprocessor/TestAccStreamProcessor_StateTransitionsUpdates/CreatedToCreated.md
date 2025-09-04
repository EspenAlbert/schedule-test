# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 6 seconds
- 2025-08-07
  - PASS 28 seconds
  - PASS 7 seconds
- 2025-08-08 PASS 5 seconds
- 2025-08-09 PASS 5 seconds
- 2025-08-10 PASS 6 seconds
- 2025-08-11 PASS 5 seconds
- 2025-08-12
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-08-13 PASS 5 seconds
- 2025-08-14 PASS 5 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 5 seconds
- 2025-08-17 PASS 5 seconds
- 2025-08-18
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-08-19 PASS 6 seconds
- 2025-08-20
  - PASS 7 seconds
  - PASS 20 seconds
- 2025-08-21 PASS 6 seconds
- 2025-08-22 PASS 6 seconds
- 2025-08-23 PASS 5 seconds
- 2025-08-24 PASS 6 seconds
- 2025-08-25 PASS 5 seconds
- 2025-08-26 PASS 5 seconds
- 2025-08-27 PASS 6 seconds
- 2025-08-28 PASS 5 seconds
- 2025-08-29
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-08-30 PASS 6 seconds
- 2025-08-31 PASS 5 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9241982Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-01T00:30:38.9243307Z     resource_test.go:179: Testing: Verifies a processor in CREATED state can be updated while remaining in CREATED state
2025-09-01T00:30:38.9244588Z     resource_test.go:180: Creating execution project: test-acc-tf-p-800428049547387159
2025-09-01T00:30:38.9245362Z     resource_test.go:180: 
2025-09-01T00:30:38.9247100Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9250589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9253803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9287516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:362
2025-09-01T00:30:38.9291028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:180
2025-09-01T00:30:38.9293644Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.9335446Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9340344Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9342736Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated
2025-09-01T00:30:38.9347696Z         	Messages:   	Project creation failed: test-acc-tf-p-800428049547387159, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9532103Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/CreatedToCreated (0.18s)
```

  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-09-02 PASS 6 seconds
- 2025-09-03 PASS 5 seconds
- 2025-09-04 PASS 5 seconds