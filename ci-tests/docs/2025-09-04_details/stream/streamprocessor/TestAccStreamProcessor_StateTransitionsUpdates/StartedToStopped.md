# stream/streamprocessor/TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 9 seconds
- 2025-08-07
  - PASS 41 seconds
  - PASS 12 seconds
- 2025-08-08 PASS 9 seconds
- 2025-08-09 PASS 9 seconds
- 2025-08-10 PASS 9 seconds
- 2025-08-11 PASS 9 seconds
- 2025-08-12
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-08-13 PASS 9 seconds
- 2025-08-14 PASS 8 seconds
- 2025-08-15 PASS 9 seconds
- 2025-08-16 PASS 8 seconds
- 2025-08-17 PASS 25 seconds
- 2025-08-18
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-08-19 PASS 10 seconds
- 2025-08-20
  - PASS 10 seconds
  - PASS 10 seconds
- 2025-08-21 PASS 9 seconds
- 2025-08-22 PASS 10 seconds
- 2025-08-23 PASS 9 seconds
- 2025-08-24 PASS 10 seconds
- 2025-08-25 PASS 9 seconds
- 2025-08-26 PASS 9 seconds
- 2025-08-27 PASS 11 seconds
- 2025-08-28 PASS 9 seconds
- 2025-08-29
  - PASS 9 seconds
  - PASS 9 seconds
- 2025-08-30 PASS 10 seconds
- 2025-08-31 PASS 9 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9385046Z === RUN   TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-01T00:30:38.9386187Z     resource_test.go:179: Testing: Verifies a processor can transition from STARTED to STOPPED state
2025-09-01T00:30:38.9387471Z     resource_test.go:180: Creating execution project: test-acc-tf-p-5781812776114769841
2025-09-01T00:30:38.9388217Z     resource_test.go:180: 
2025-09-01T00:30:38.9389703Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9392691Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9395706Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9399067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:362
2025-09-01T00:30:38.9402310Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:180
2025-09-01T00:30:38.9404339Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.9405462Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9410718Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9413374Z         	Test:       	TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped
2025-09-01T00:30:38.9417773Z         	Messages:   	Project creation failed: test-acc-tf-p-5781812776114769841, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9534427Z     --- FAIL: TestAccStreamProcessor_StateTransitionsUpdates/StartedToStopped (0.17s)
```

  - PASS 8 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-09-02 PASS 9 seconds
- 2025-09-03 PASS 8 seconds
- 2025-09-04 PASS 9 seconds